"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Recycle, Trophy, MapPin, ArrowRight, Leaf, Target, Award, TrendingUp, AlertTriangle, Play, Instagram, Youtube, ExternalLink, Camera, Brain, Users, BookOpen, Zap, Share2, Gift } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ChatPopup } from "@/components/chat-popup"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <Navigation />

      {/* Hero Section - Focus on Platform Features */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 animate-pulse">
            <MapPin className="h-3 w-3 mr-1" />
            🏆 Nottingham's Smart Recycling Platform
          </Badge>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            When <span className="text-green-600">iReBin</span>,<br />
            <span className="text-blue-600">weWin</span> Together
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Nottingham's <strong>community-driven recycling platform</strong> with AI assistance, 
            educational challenges, and real rewards. Join <strong>12,847 residents</strong> 
            working together to achieve <span className="text-green-600 font-bold">65% recycling by 2035</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/signup" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white text-lg px-8 py-4 shadow-lg transform hover:scale-105 transition-all">
                🚀 Join the Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/education" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 border-2 hover:bg-green-50 text-gray-700 hover:text-gray-900">
                📚 Start Learning
                <BookOpen className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Platform Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-200">
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">12,847</div>
              <div className="text-sm text-gray-600">Active Community Members</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-200">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">2,156</div>
              <div className="text-sm text-gray-600">Daily AI Recycling Queries</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-200">
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">1,247</div>
              <div className="text-sm text-gray-600">Educational Videos Watched</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-200">
              <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">£47K</div>
              <div className="text-sm text-gray-600">Community Rewards Distributed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              🎯 What Our Platform Offers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to become a recycling champion and help Nottingham achieve its waste strategy goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Recycling Assistant */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-200">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-gray-800">NEW</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">AI Recycling Assistant</div>
                  <div className="text-xs opacity-90">Camera-powered guidance</div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Camera className="h-6 w-6 text-green-600" />
                  <h3 className="font-bold text-lg">Smart Recycling Guide</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Take a photo of any item and our AI will instantly tell you if it's recyclable, 
                  where to put it, and how to prepare it properly.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span>Instant recycling guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-blue-500" />
                    <span>AI-powered recognition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span>Nottingham-specific rules</span>
                  </div>
                </div>
                <ChatPopup 
                  trigger={
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                      Try AI Assistant
                    </Button>
                  }
                  userLocation="Nottingham"
                />
              </CardContent>
            </Card>

            {/* Educational Platform */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-200">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">Educational Hub</div>
                  <div className="text-xs opacity-90">Daily challenges & rewards</div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-lg">Learn & Earn Platform</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Watch short videos, complete daily challenges, and earn points for every learning activity. 
                  Share on social media for bonus rewards!
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Play className="h-4 w-4 text-red-500" />
                    <span>2-5 minute daily videos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-orange-500" />
                    <span>Daily challenges & quizzes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Share2 className="h-4 w-4 text-green-500" />
                    <span>Social sharing bonuses</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  Start Learning
                </Button>
              </CardContent>
            </Card>

            {/* Community Challenges */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-purple-200">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">Community Challenges</div>
                  <div className="text-xs opacity-90">Neighborhood competitions</div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-6 w-6 text-purple-600" />
                  <h3 className="font-bold text-lg">Neighborhood Competitions</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Compete with your neighborhood, track progress on leaderboards, and work together 
                  to achieve community recycling goals.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-yellow-500" />
                    <span>Real-time leaderboards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-green-500" />
                    <span>Community goals & targets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gift className="h-4 w-4 text-pink-500" />
                    <span>Collective rewards</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                  View Leaderboard
                </Button>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* Waste Hierarchy Focus */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ♻️ The Waste Hierarchy - Prevention First
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nottingham's strategy focuses on the waste hierarchy pyramid. We help you move up the pyramid 
              from disposal to prevention, with tools and guidance for each level.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                { 
                  level: "1", 
                  title: "Prevention", 
                  description: "Reduce waste at source", 
                  color: "bg-green-500", 
                  icon: "♻️",
                  examples: "Buy package-free, meal planning, reusable items",
                  platformFeature: "AI shopping assistant, meal planning tools"
                },
                { 
                  level: "2", 
                  title: "Preparing for re-use", 
                  description: "Repair and refurbish", 
                  color: "bg-blue-500", 
                  icon: "🔧",
                  examples: "Repair cafés, furniture reuse, clothing swaps",
                  platformFeature: "Local repair service finder, reuse marketplace"
                },
                { 
                  level: "3", 
                  title: "Recycling", 
                  description: "Process into new materials", 
                  color: "bg-yellow-500", 
                  icon: "♻️",
                  examples: "Proper sorting, contamination prevention",
                  platformFeature: "AI recycling assistant, contamination alerts"
                },
                { 
                  level: "4", 
                  title: "Recovery", 
                  description: "Energy from waste", 
                  color: "bg-orange-500", 
                  icon: "⚡",
                  examples: "Energy recovery facilities",
                  platformFeature: "Waste-to-energy education"
                },
                { 
                  level: "5", 
                  title: "Disposal", 
                  description: "Landfill/incineration", 
                  color: "bg-red-500", 
                  icon: "🗑️",
                  examples: "Last resort only",
                  platformFeature: "Landfill diversion tracking"
                },
              ].map((item) => (
                <div key={item.level} className="flex items-start p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white">
                  <div className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center text-lg font-bold mr-6 flex-shrink-0`}>
                    {item.level}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{item.icon}</span>
                      <h4 className="font-semibold text-xl">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-gray-700 mb-1">Examples:</div>
                        <div className="text-gray-600">{item.examples}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-700 mb-1">Platform Feature:</div>
                        <div className="text-gray-600">{item.platformFeature}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Platform Deep Dive */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              📚 Interactive Learning Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Not just courses - daily challenges, social sharing, and real Nottingham examples
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Learning Features */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5 text-blue-600" />
                    Daily Video Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">1</div>
                      <div>
                        <div className="font-medium">Watch 2-5 minute video</div>
                        <div className="text-sm text-gray-600">Nottingham-specific recycling tips</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">2</div>
                      <div>
                        <div className="font-medium">Complete quick quiz</div>
                        <div className="text-sm text-gray-600">Test your knowledge</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">3</div>
                      <div>
                        <div className="font-medium">Share on social media</div>
                        <div className="text-sm text-gray-600">Earn bonus points & enter lottery</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    Nottingham-Specific Content
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg">
                      <div className="font-medium">Local Recycling Rules</div>
                      <div className="text-sm text-gray-600">What goes in which bin in Nottingham</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <div className="font-medium">Local Service Spotlights</div>
                      <div className="text-sm text-gray-600">Bike Works, Fixers, zero-waste shops</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <div className="font-medium">Community Success Stories</div>
                      <div className="text-sm text-gray-600">Real Nottingham residents making a difference</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Rewards System */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-orange-600" />
                    Rewards & Incentives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <div className="font-medium">Daily Video Watch</div>
                        <div className="text-sm text-gray-600">Complete daily challenge</div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">+5 points</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <div className="font-medium">Social Media Share</div>
                        <div className="text-sm text-gray-600">Share learning on social</div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">+3 points</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <div className="font-medium">Weekly Lottery Entry</div>
                        <div className="text-sm text-gray-600">Chance to win prizes</div>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800">Free entry</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <div className="font-medium">Council Tax Discount</div>
                        <div className="text-sm text-gray-600">Redeem 1000 points</div>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800">5% off</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    Community Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg">
                      <div className="font-medium">Neighborhood Challenges</div>
                      <div className="text-sm text-gray-600">Compete with your local area</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <div className="font-medium">Business Partnerships</div>
                      <div className="text-sm text-gray-600">Local rewards and discounts</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <div className="font-medium">Community Events</div>
                      <div className="text-sm text-gray-600">Repair cafés, swap meets, workshops</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Nottingham's Recycling?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our community-driven platform and help Nottingham become the first UK net-zero city by 2028!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/signup" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-lg">
                🚀 Join the Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/education" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white/10 text-lg px-8 py-4 hover:text-white">
                📚 Explore Learning
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Recycle className="h-6 w-6" />
                <span className="font-bold text-lg">iReBin, weWin</span>
              </div>
              <p className="text-sm text-gray-400">
                Nottingham's community-driven recycling platform with AI assistance, educational challenges, and real rewards.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/education" className="hover:text-white">📚 Learning Platform</Link></li>
                <li><Link href="/ai-assistant" className="hover:text-white">🤖 AI Recycling Guide</Link></li>
                <li><Link href="/leaderboard" className="hover:text-white">🏆 Community Challenges</Link></li>
                <li><Link href="/rewards" className="hover:text-white">🎁 Rewards System</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Strategy Goals</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>♻️ 65% recycling by 2035</li>
                <li>🗑️ &lt;10% landfill by 2035</li>
                <li>🥬 -50% food waste by 2028</li>
                <li>🌱 Net-zero 2028</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-gray-400">
                Nottingham City Council<br />
                Waste Strategy Team<br />
                waste@nottingham.gov.uk
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 iReBin, weWin. Nottingham's Smart Recycling Community. 🏆</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
