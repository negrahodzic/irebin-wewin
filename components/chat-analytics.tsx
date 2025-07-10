"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Send, Brain, TrendingUp, AlertTriangle, CheckCircle, Clock, User, Bot } from "lucide-react"
import { ChatAnalyticsService, ChatMessage } from "@/lib/chat-analytics-service"

// Analytics data interface
interface ChatAnalytics {
  totalQuestions: number
  avgConfidence: number
  topTopics: Array<{
    topic: string
    count: number
    trend: string
    confidence: number
    urgency: 'low' | 'medium' | 'high'
  }>
  urgentAlerts: Array<{
    topic: string
    count: number
    timeframe: string
    urgency: 'low' | 'medium' | 'high' | 'critical'
  }>
  trendingQuestions: string[]
  geographicData: Array<{
    area: string
    questions: number
    topTopic: string
  }>
}

// Mock AI responses based on common recycling questions
const aiResponses = {
  "food packaging": {
    response: "Food packaging recycling depends on the material! Clean cardboard and paper can go in your blue bin. Plastic food containers should be rinsed and checked for the recycling symbol. Greasy pizza boxes should go in general waste. What specific food packaging are you asking about?",
    confidence: 0.85,
    topic: "Food Packaging"
  },
  "plastic bottle": {
    response: "Plastic bottles are recyclable! Rinse them out, remove the cap (recycle separately), and put them in your blue bin. In Nottingham, we accept PET bottles (type 1) and HDPE bottles (type 2). The bottle itself and cap can both be recycled!",
    confidence: 0.92,
    topic: "Plastic Bottles"
  },
  "coffee cup": {
    response: "Coffee cups are tricky! The paper part can be recycled, but the plastic lining makes them hard to process. In Nottingham, some coffee shops have special collection points. The lid and sleeve can usually be recycled separately. Consider using a reusable cup instead!",
    confidence: 0.68,
    topic: "Coffee Cups"
  },
  "pizza box": {
    response: "Pizza boxes with grease stains should go in general waste, not recycling. The grease contaminates the paper recycling process. If the box is clean (no grease), you can recycle it. Consider composting food waste to reduce contamination!",
    confidence: 0.75,
    topic: "Food Packaging"
  },
  "battery": {
    response: "Batteries should NEVER go in your regular bins! They can cause fires and contain toxic materials. In Nottingham, you can recycle batteries at supermarkets, libraries, and household waste centres. Look for the battery collection points!",
    confidence: 0.95,
    topic: "Batteries"
  },
  "electronics": {
    response: "Electronics contain valuable materials and should be recycled properly! In Nottingham, take them to household waste centres or look for WEEE (Waste Electrical and Electronic Equipment) collection points. Some retailers also offer take-back schemes.",
    confidence: 0.88,
    topic: "Electronics"
  },
  "heinz": {
    response: "Heinz ketchup bottles are recyclable! They're made of PET plastic (type 1). Rinse them thoroughly, remove the cap (recycle separately), and put in your blue bin. The squeezy bottles are also recyclable - just make sure they're clean!",
    confidence: 0.82,
    topic: "Plastic Bottles"
  }
}

export function ChatAnalytics() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [analytics, setAnalytics] = useState<ChatAnalytics>({
    totalQuestions: 0,
    avgConfidence: 0,
    topTopics: [],
    urgentAlerts: [],
    trendingQuestions: [],
    geographicData: []
  })

  // Simulate user location (in real app, this would come from GPS or user profile)
  const userLocation = "Beeston"

  const sendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date(),
      location: userLocation
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate AI processing
    setTimeout(() => {
      const lowerContent = content.toLowerCase()
      let aiResponse = {
        response: "I'm not sure about that specific item. Could you provide more details about what you're trying to recycle? I can help with common materials like plastic bottles, food packaging, electronics, and more!",
        confidence: 0.45,
        topic: "General"
      }

      // Find matching response
      for (const [key, value] of Object.entries(aiResponses)) {
        if (lowerContent.includes(key)) {
          aiResponse = value
          break
        }
      }

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse.response,
        timestamp: new Date(),
        topic: aiResponse.topic,
        confidence: aiResponse.confidence
      }

      setMessages(prev => [...prev, aiMessage])
      setIsLoading(false)

      // Store messages in analytics service
      ChatAnalyticsService.addMessage(userMessage)
      ChatAnalyticsService.addMessage(aiMessage)

      // Update local analytics
      const serviceAnalytics = ChatAnalyticsService.getAnalytics()
      setAnalytics({
        totalQuestions: serviceAnalytics.totalQuestions,
        avgConfidence: serviceAnalytics.avgConfidence,
        topTopics: serviceAnalytics.topTopics.map(topic => ({
          topic: topic.topic,
          count: topic.count,
          trend: topic.trend,
          confidence: topic.confidence,
          urgency: topic.urgency
        })),
        urgentAlerts: serviceAnalytics.urgentAlerts.map(alert => ({
          topic: alert.topic,
          count: alert.count,
          timeframe: alert.timeframe,
          urgency: alert.urgency
        })),
        trendingQuestions: serviceAnalytics.trendingQuestions,
        geographicData: serviceAnalytics.geographicData.map(geo => ({
          area: geo.area,
          questions: geo.questions,
          topTopic: geo.topTopic
        }))
      })
    }, 1000 + Math.random() * 2000) // Random delay to simulate processing
  }



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputValue)
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-blue-600" />
            AI Recycling Assistant
          </CardTitle>
          <CardDescription>
            Ask me anything about recycling in Nottingham! I'll help you sort your waste correctly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Chat Messages */}
          <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Start a conversation about recycling!</p>
                <p className="text-sm mt-2">Try asking about plastic bottles, food packaging, or electronics</p>
              </div>
            )}
            
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${
                    message.type === 'user' ? 'bg-blue-600' : 'bg-green-600'
                  }`}>
                    {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <div className="text-sm">{message.content}</div>
                    {message.type === 'ai' && message.confidence && (
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className={`text-xs ${
                          message.confidence > 0.8 ? 'bg-green-100 text-green-800' :
                          message.confidence > 0.6 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {Math.round(message.confidence * 100)}% confident
                        </Badge>
                        {message.topic && (
                          <Badge variant="outline" className="text-xs">
                            {message.topic}
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="p-3 rounded-lg bg-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"></div>
                    <span className="text-sm text-gray-600">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about recycling in Nottingham..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading || !inputValue.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Quick Analytics Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            Chat Analytics
          </CardTitle>
          <CardDescription>
            Real-time insights from community questions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{analytics.totalQuestions}</div>
              <div className="text-sm text-gray-600">Total Questions</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{Math.round(analytics.avgConfidence * 100)}%</div>
              <div className="text-sm text-gray-600">Avg Confidence</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{analytics.topTopics.length}</div>
              <div className="text-sm text-gray-600">Active Topics</div>
            </div>
          </div>
          
          {analytics.topTopics.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Top Topics:</h4>
              <div className="space-y-2">
                {analytics.topTopics.slice(0, 3).map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium">{topic.topic}</span>
                    <Badge className="text-xs">{topic.count} questions</Badge>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 