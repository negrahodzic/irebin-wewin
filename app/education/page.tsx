"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Recycle, Trophy, MapPin, ArrowRight, Leaf, Target, Award, TrendingUp, Play, Instagram, Youtube, ExternalLink, BookOpen, Zap, Share2, Gift, Users, Brain, Camera, Clock, Star, CheckCircle, AlertCircle, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
            <BookOpen className="h-3 w-3 mr-1" />
            📚 Interactive Learning Platform
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Learn, Earn & Share
          </h1>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Not just courses - daily challenges, social sharing rewards, and Nottingham-specific content 
            that teaches you the waste hierarchy and helps you become a recycling champion!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              🎯 Start Today's Challenge
              <Play className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-4 hover:text-white">
              📊 View Your Progress
            </Button>
          </div>
        </div>
      </section>

      {/* Daily Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              🎯 Today's Learning Challenge
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete today's 3-step challenge and earn points + enter our weekly lottery!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">♻️ The Waste Hierarchy Pyramid</CardTitle>
                    <CardDescription className="text-lg">
                      Understanding Nottingham's waste strategy - prevention first!
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800 text-sm">
                    <Clock className="h-3 w-3 mr-1" />
                    5 min challenge
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Watch Video */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Play className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold">Watch Today's Video</h4>
                      <Badge className="bg-green-100 text-green-800">+5 points</Badge>
                    </div>
                    <p className="text-gray-600 mb-3">
                      "How Nottingham's waste hierarchy helps us prevent waste before it's created"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>2:45 min</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>4.8/5 rating</span>
                      </div>
                    </div>
                    <Button className="mt-3 bg-green-600 hover:bg-green-700">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Video
                    </Button>
                  </div>
                </div>

                {/* Step 2: Quick Quiz */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-5 w-5 text-blue-600" />
                      <h4 className="font-semibold">Test Your Knowledge</h4>
                      <Badge className="bg-blue-100 text-blue-800">+3 points</Badge>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Quick 3-question quiz about the waste hierarchy and Nottingham's strategy
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>What's the first step in the waste hierarchy?</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Which Nottingham service helps with reuse?</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>What's Nottingham's 2035 recycling target?</span>
                      </div>
                    </div>
                    <Button className="mt-3 bg-blue-600 hover:bg-blue-700">
                      <Brain className="h-4 w-4 mr-2" />
                      Take Quiz
                    </Button>
                  </div>
                </div>

                {/* Step 3: Social Share */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Share2 className="h-5 w-5 text-purple-600" />
                      <h4 className="font-semibold">Share & Earn Bonus</h4>
                      <Badge className="bg-purple-100 text-purple-800">+3 points + lottery entry</Badge>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Share what you learned on social media and help spread the word about Nottingham's recycling goals
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Instagram className="h-4 w-4 mr-2" />
                        Instagram
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Youtube className="h-4 w-4 mr-2" />
                        YouTube
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Twitter
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Progress & Rewards */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-lg">Today's Progress</h4>
                    <Badge className="bg-orange-100 text-orange-800">11/15 points</Badge>
                  </div>
                  <Progress value={73} className="mb-3" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Complete all steps to earn 15 points</span>
                    <span className="text-green-600 font-medium">+ lottery entry!</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Categories */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              📚 Learning Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore different topics and earn points in each category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Waste Hierarchy",
                description: "Understanding prevention, reuse, recycling",
                icon: "♻️",
                color: "from-green-400 to-blue-500",
                progress: 85,
                points: 245,
                videos: 12
              },
              {
                title: "Nottingham Services",
                description: "Local repair cafés, zero-waste shops",
                icon: "🏘️",
                color: "from-blue-400 to-purple-500",
                progress: 62,
                points: 180,
                videos: 8
              },
              {
                title: "Food Waste Reduction",
                description: "Meal planning, composting, local solutions",
                icon: "🥬",
                color: "from-yellow-400 to-orange-500",
                progress: 45,
                points: 120,
                videos: 6
              },
              {
                title: "Plastic & Packaging",
                description: "Reducing single-use, proper sorting",
                icon: "📦",
                color: "from-purple-400 to-pink-500",
                progress: 78,
                points: 210,
                videos: 10
              },
              {
                title: "Community Action",
                description: "Neighborhood challenges, events",
                icon: "👥",
                color: "from-indigo-400 to-blue-500",
                progress: 92,
                points: 280,
                videos: 15
              },
              {
                title: "Business Partnerships",
                description: "Local rewards, corporate responsibility",
                icon: "🏢",
                color: "from-teal-400 to-green-500",
                progress: 38,
                points: 95,
                videos: 5
              }
            ].map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`h-32 bg-gradient-to-r ${category.color} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl mb-1">{category.icon}</div>
                    <div className="text-sm font-medium">{category.title}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium">{category.progress}%</span>
                    </div>
                    <Progress value={category.progress} className="h-2" />
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-gray-700">{category.points}</div>
                        <div className="text-gray-500">Points earned</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-700">{category.videos}</div>
                        <div className="text-gray-500">Videos available</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4" variant="outline">
                    Continue Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards & Incentives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              🎁 Rewards & Incentives
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Earn points, enter lotteries, and redeem real rewards from Nottingham businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Points System */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-green-600" />
                  Points & Rewards
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
                      <div className="font-medium">Quiz Completion</div>
                      <div className="text-sm text-gray-600">Test your knowledge</div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">+3 points</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div>
                      <div className="font-medium">Social Media Share</div>
                      <div className="text-sm text-gray-600">Share learning content</div>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">+3 points</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div>
                      <div className="font-medium">Weekly Streak Bonus</div>
                      <div className="text-sm text-gray-600">7 days in a row</div>
                    </div>
                    <Badge className="bg-orange-100 text-orange-800">+10 points</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Redemption Options */}
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-orange-600" />
                  Redeem Your Points
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div>
                      <div className="font-medium">Council Tax Discount</div>
                      <div className="text-sm text-gray-600">1000 points = 5% off</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Available</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div>
                      <div className="font-medium">Local Business Vouchers</div>
                      <div className="text-sm text-gray-600">500 points = £10 voucher</div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Available</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div>
                      <div className="font-medium">Weekly Lottery Entry</div>
                      <div className="text-sm text-gray-600">Free entry with daily challenge</div>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div>
                      <div className="font-medium">Community Event Tickets</div>
                      <div className="text-sm text-gray-600">200 points = free entry</div>
                    </div>
                    <Badge className="bg-orange-100 text-orange-800">Available</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nottingham-Specific Content */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              🏘️ Nottingham-Specific Learning
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real examples, local services, and community stories from Nottingham
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Local Recycling Rules",
                description: "What goes in which bin in Nottingham",
                icon: "🗑️",
                color: "from-green-400 to-blue-500",
                examples: "Blue bin = paper/card, Green bin = garden waste"
              },
              {
                title: "Bike Works Nottingham",
                description: "Repair and reuse your bike",
                icon: "🚲",
                color: "from-blue-400 to-purple-500",
                examples: "Free repairs, bike donations, workshops"
              },
              {
                title: "Nottingham Fixers",
                description: "Learn to repair everything",
                icon: "🔧",
                color: "from-purple-400 to-pink-500",
                examples: "Electronics, furniture, clothing repairs"
              },
              {
                title: "Zero-Waste Shops",
                description: "Package-free shopping in Nottingham",
                icon: "🛍️",
                color: "from-yellow-400 to-orange-500",
                examples: "Refill stations, bulk foods, eco products"
              },
              {
                title: "Community Composting",
                description: "Turn food waste into garden gold",
                icon: "🌱",
                color: "from-green-400 to-teal-500",
                examples: "Local schemes, workshops, shared bins"
              },
              {
                title: "Swap & Share Events",
                description: "Give items a second life",
                icon: "🔄",
                color: "from-indigo-400 to-purple-500",
                examples: "Clothing swaps, toy exchanges, book shares"
              }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-24 bg-gradient-to-r ${item.color} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="text-xl">{item.icon}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                    <strong>Examples:</strong> {item.examples}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of Nottingham residents earning points, learning about recycling, 
            and helping our city achieve its waste strategy goals!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-lg">
              🎯 Start Today's Challenge
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-4 hover:text-white">
              📊 View Your Progress
            </Button>
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
                Nottingham's interactive learning platform for recycling education, 
                community challenges, and real rewards.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Learning Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📚 Daily video challenges</li>
                <li>🧠 Interactive quizzes</li>
                <li>📱 Social sharing rewards</li>
                <li>🎁 Points & incentives</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Nottingham Content</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>🏘️ Local recycling rules</li>
                <li>🔧 Repair services</li>
                <li>🛍️ Zero-waste shops</li>
                <li>👥 Community events</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-gray-400">
                Nottingham City Council<br />
                Waste Strategy Team<br />
                education@irebin-wewin.co.uk
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 iReBin, weWin. Nottingham's Smart Recycling Learning Platform. 🏆</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
