"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MessageSquare, Send, Brain, X, User, Bot, Minimize2, Maximize2 } from "lucide-react"
import { ChatAnalyticsService, ChatMessage } from "@/lib/chat-analytics-service"

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

interface ChatPopupProps {
  trigger?: React.ReactNode
  userLocation?: string
}

export function ChatPopup({ trigger, userLocation = "Beeston" }: ChatPopupProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

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
    }, 1000 + Math.random() * 2000) // Random delay to simulate processing
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputValue)
  }

  const handleClose = () => {
    setIsOpen(false)
    setIsMinimized(false)
  }

  const handleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            <Brain className="h-4 w-4 mr-2" />
            AI Assistant
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className={`sm:max-w-md ${isMinimized ? 'h-16' : 'h-[600px]'} transition-all duration-300`}>
        <DialogHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-blue-600" />
            <DialogTitle>AI Recycling Assistant</DialogTitle>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleMinimize}
              className="h-8 w-8 p-0"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        {!isMinimized && (
          <div className="flex flex-col h-full">
            {/* Chat Messages */}
            <div className="flex-1 space-y-4 mb-4 overflow-y-auto max-h-96">
              {messages.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p className="font-medium">Ask me about recycling in Nottingham!</p>
                  <p className="text-sm mt-2">Try: "Can I recycle pizza boxes?" or "What about plastic bottles?"</p>
                </div>
              )}
              
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${
                      message.type === 'user' ? 'bg-blue-600' : 'bg-green-600'
                    }`}>
                      {message.type === 'user' ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                    </div>
                    <div className={`p-2 rounded-lg text-sm ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <div>{message.content}</div>
                      {message.type === 'ai' && message.confidence && (
                        <div className="flex items-center gap-2 mt-1">
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
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                  <div className="p-2 rounded-lg bg-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-green-600"></div>
                      <span className="text-xs text-gray-600">Thinking...</span>
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
                placeholder="Ask about recycling..."
                className="flex-1 text-sm"
                disabled={isLoading}
              />
              <Button type="submit" size="sm" disabled={isLoading || !inputValue.trim()}>
                <Send className="h-3 w-3" />
              </Button>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
} 