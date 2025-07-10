"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Recycle, Trophy, MapPin, ArrowRight, Leaf, Target, Award, TrendingUp, AlertTriangle, Play, Instagram, Youtube, ExternalLink, Camera, Brain, Users, BookOpen, Zap, Share2, Gift, Clock, Star, CheckCircle, Lightbulb, BarChart3, Calendar, Bell, Map, Trash2, Package, LeafyGreen } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ChatPopup } from "@/components/chat-popup"

export default function CitizenDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation />

      {/* Welcome Header */}
      <section className="py-8 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                Welcome back, Sarah! 👋
              </h1>
              <p className="text-green-100">
                You're helping Nottingham achieve <strong>65% recycling by 2035</strong>
              </p>
            </div>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <Badge className="bg-white/20 text-white">
                <Trophy className="h-3 w-3 mr-1" />
                Gold Recycler
              </Badge>
              <Badge className="bg-white/20 text-white">
                <MapPin className="h-3 w-3 mr-1" />
                Beeston Village
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-6">🚀 Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button className="h-20 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
              <div className="text-center">
                <Camera className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">AI Recycling Guide</div>
                <div className="text-xs opacity-90">Take a photo</div>
              </div>
            </Button>
            <Button className="h-20 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
              <div className="text-center">
                <Play className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Today's Challenge</div>
                <div className="text-xs opacity-90">5 min video</div>
              </div>
            </Button>
            <Button className="h-20 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              <div className="text-center">
                <Map className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Find Nearest Bins</div>
                <div className="text-xs opacity-90">Digital twin map</div>
              </div>
            </Button>
            <Button className="h-20 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
              <div className="text-center">
                <Gift className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Rewards</div>
                <div className="text-xs opacity-90">Redeem points</div>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bins">My Bins</TabsTrigger>
              <TabsTrigger value="learning">Learning</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-green-600">1,247</div>
                        <div className="text-sm text-gray-600">Total Points</div>
                      </div>
                      <Award className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="mt-2 text-xs text-green-600">+45 this week</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">23</div>
                        <div className="text-sm text-gray-600">Learning Days</div>
                      </div>
                      <BookOpen className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="mt-2 text-xs text-blue-600">7-day streak!</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-purple-600">#3</div>
                        <div className="text-sm text-gray-600">Beeston Ranking</div>
                      </div>
                      <Trophy className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="mt-2 text-xs text-purple-600">Top 10%</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-orange-600">156</div>
                        <div className="text-sm text-gray-600">Items Recycled</div>
                      </div>
                      <Recycle className="h-8 w-8 text-orange-600" />
                    </div>
                    <div className="mt-2 text-xs text-orange-600">This month</div>
                  </CardContent>
                </Card>
              </div>

              {/* Nottingham Strategy Progress */}
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    Nottingham's Waste Strategy Progress
                  </CardTitle>
                  <CardDescription>
                    Your contribution to Nottingham's community goals
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Recycling Rate (Target: 65% by 2035)</span>
                        <span className="text-sm text-green-600">23.9% → 25.1%</span>
                      </div>
                      <Progress value={38.6} className="h-3" />
                      <div className="text-xs text-gray-500 mt-1">Your neighborhood: 28.3%</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Food Waste Reduction (Target: -50% by 2028)</span>
                        <span className="text-sm text-blue-600">-12% → -15%</span>
                      </div>
                      <Progress value={30} className="h-3" />
                      <div className="text-xs text-gray-500 mt-1">Your household: -22%</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Plastic Waste (Target: -45% by 2028)</span>
                        <span className="text-sm text-purple-600">-8% → -11%</span>
                      </div>
                      <Progress value={24.4} className="h-3" />
                      <div className="text-xs text-gray-500 mt-1">Your household: -18%</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Landfill Reduction (Target: &lt;10% by 2035)</span>
                        <span className="text-sm text-orange-600">67% → 65%</span>
                      </div>
                      <Progress value={85.7} className="h-3" />
                      <div className="text-xs text-gray-500 mt-1">Your neighborhood: 62%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Today's Challenge */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Play className="h-5 w-5 text-blue-600" />
                      Today's Learning Challenge
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-800">
                      <Clock className="h-3 w-3 mr-1" />
                      Available
                    </Badge>
                  </div>
                  <CardDescription>
                    Complete today's challenge and earn 15 points + lottery entry
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border">
                    <div className="text-3xl">♻️</div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Waste Hierarchy Pyramid</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Learn why prevention comes before recycling in Nottingham's strategy
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>⏱️ 5 min</span>
                        <span>⭐ 4.8/5 rating</span>
                        <span>🎁 +15 points</span>
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Play className="h-4 w-4 mr-2" />
                      Start
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bins" className="space-y-6">
              {/* Bin Status Overview */}
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trash2 className="h-5 w-5 text-green-600" />
                    Your Bin Status
                  </CardTitle>
                  <CardDescription>
                    Monitor your bins and track recycling progress (Phase 2: Smart sensors & RFID)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        type: "General Waste",
                        fillLevel: 65,
                        status: "normal",
                        lastCollection: "2 days ago",
                        nextCollection: "5 days",
                        weight: "12.3 kg",
                        icon: "🗑️",
                        color: "from-gray-400 to-gray-600"
                      },
                      {
                        type: "Recycling",
                        fillLevel: 45,
                        status: "normal",
                        lastCollection: "2 days ago",
                        nextCollection: "5 days",
                        weight: "8.7 kg",
                        icon: "♻️",
                        color: "from-blue-400 to-green-500"
                      },
                      {
                        type: "Food Waste",
                        fillLevel: 30,
                        status: "normal",
                        lastCollection: "2 days ago",
                        nextCollection: "5 days",
                        weight: "3.2 kg",
                        icon: "🥬",
                        color: "from-green-400 to-teal-500"
                      }
                    ].map((bin, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className={`h-16 bg-gradient-to-r ${bin.color} relative`}>
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="absolute bottom-3 left-3 text-white">
                            <div className="text-xl">{bin.icon}</div>
                          </div>
                          <div className="absolute top-3 right-3">
                            <Badge className={`${bin.status === 'warning' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                              {bin.fillLevel}% Full
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-2">{bin.type}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Fill Level:</span>
                              <span className="font-medium">{bin.fillLevel}%</span>
                            </div>
                            <Progress value={bin.fillLevel} className="h-2" />
                            <div className="flex justify-between">
                              <span className="text-gray-600">Weight:</span>
                              <span className="font-medium">{bin.weight}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Next Collection:</span>
                              <span className="font-medium">{bin.nextCollection}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Digital Twin Map */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Map className="h-5 w-5 text-blue-600" />
                    Find Nearest Bins & Recycling Centers
                  </CardTitle>
                  <CardDescription>
                    Interactive digital twin map showing nearby bins, recycling centers, and collection points
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border-2 border-dashed border-blue-300 flex items-center justify-center">
                    <div className="text-center">
                      <Map className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-700 mb-2">Digital Twin Map</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Interactive map showing nearest bins, recycling centers, and collection points
                      </p>
                      <div className="flex gap-2 justify-center">
                        <Badge className="bg-green-100 text-green-800">🗑️ General Bins</Badge>
                        <Badge className="bg-blue-100 text-blue-800">♻️ Recycling Bins</Badge>
                        <Badge className="bg-purple-100 text-purple-800">🏢 Recycling Centers</Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Map Legend */}
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-3 bg-white rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span className="font-medium text-sm">General Waste Bins</span>
                      </div>
                      <p className="text-xs text-gray-600">Public bins for general waste</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        <span className="font-medium text-sm">Recycling Bins</span>
                      </div>
                      <p className="text-xs text-gray-600">Paper, plastic, glass, metal</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                        <span className="font-medium text-sm">Recycling Centers</span>
                      </div>
                      <p className="text-xs text-gray-600">Major recycling facilities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Collection Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Collection Schedule
                  </CardTitle>
                  <CardDescription>
                    Your upcoming bin collections and reminders
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        bin: "General Waste",
                        date: "Friday, Dec 15",
                        time: "7:00 AM",
                        status: "Scheduled",
                        icon: "🗑️"
                      },
                      {
                        bin: "Recycling",
                        date: "Friday, Dec 15",
                        time: "7:00 AM",
                        status: "Scheduled",
                        icon: "♻️"
                      },
                      {
                        bin: "Food Waste",
                        date: "Friday, Dec 15",
                        time: "7:00 AM",
                        status: "Scheduled",
                        icon: "🥬"
                      }
                    ].map((collection, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl">{collection.icon}</div>
                        <div className="flex-1">
                          <div className="font-medium">{collection.bin}</div>
                          <div className="text-sm text-gray-600">{collection.date} at {collection.time}</div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">{collection.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="learning" className="space-y-6">
              {/* Learning Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Your Learning Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Waste Hierarchy",
                        progress: 85,
                        points: 245,
                        videos: 12,
                        color: "from-green-400 to-blue-500"
                      },
                      {
                        title: "Nottingham Services",
                        progress: 62,
                        points: 180,
                        videos: 8,
                        color: "from-blue-400 to-purple-500"
                      },
                      {
                        title: "Food Waste Reduction",
                        progress: 45,
                        points: 120,
                        videos: 6,
                        color: "from-yellow-400 to-orange-500"
                      }
                    ].map((category, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className={`h-20 bg-gradient-to-r ${category.color} relative`}>
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="absolute bottom-3 left-3 text-white">
                            <div className="text-sm font-medium">{category.title}</div>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Progress</span>
                              <span className="text-sm font-medium">{category.progress}%</span>
                            </div>
                            <Progress value={category.progress} className="h-2" />
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div>
                                <div className="font-medium">{category.points}</div>
                                <div className="text-gray-500">Points</div>
                              </div>
                              <div>
                                <div className="font-medium">{category.videos}</div>
                                <div className="text-gray-500">Videos</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Learning Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        action: "Completed daily challenge",
                        points: "+15",
                        time: "2 hours ago",
                        icon: "🎯",
                        color: "green"
                      },
                      {
                        action: "Shared learning on Instagram",
                        points: "+3",
                        time: "1 day ago",
                        icon: "📱",
                        color: "purple"
                      },
                      {
                        action: "Watched 'Local Repair Services'",
                        points: "+5",
                        time: "2 days ago",
                        icon: "📚",
                        color: "blue"
                      },
                      {
                        action: "7-day streak bonus",
                        points: "+10",
                        time: "3 days ago",
                        icon: "🔥",
                        color: "orange"
                      }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl">{activity.icon}</div>
                        <div className="flex-1">
                          <div className="font-medium">{activity.action}</div>
                          <div className="text-sm text-gray-500">{activity.time}</div>
                        </div>
                        <Badge className={`bg-${activity.color}-100 text-${activity.color}-800`}>
                          {activity.points}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-4">
                  📊 View Your Progress
                </Button>
              </div>

              {/* AI Chat Assistant */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-600" />
                    AI Recycling Assistant
                  </CardTitle>
                  <CardDescription>
                    Ask questions about recycling in Nottingham and help improve our community knowledge!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Brain className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-lg font-semibold mb-2">Need help with recycling?</h3>
                    <p className="text-gray-600 mb-6">
                      Our AI assistant can help you sort your waste correctly and answer any recycling questions!
                    </p>
                    <ChatPopup 
                      trigger={
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                          <Brain className="h-4 w-4 mr-2" />
                          Start Chat
                        </Button>
                      }
                      userLocation="Beeston"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="community" className="space-y-6">
              {/* Neighborhood Rankings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Beeston Village Rankings
                  </CardTitle>
                  <CardDescription>
                    Your neighborhood's performance in Nottingham's recycling challenge
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                          1
                        </div>
                        <div>
                          <div className="font-medium">Maple Street</div>
                          <div className="text-sm text-gray-600">32.1% recycling rate</div>
                        </div>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">🏆 Winner</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold">
                          2
                        </div>
                        <div>
                          <div className="font-medium">Oak Avenue</div>
                          <div className="text-sm text-gray-600">29.8% recycling rate</div>
                        </div>
                      </div>
                      <Badge className="bg-gray-100 text-gray-800">🥈 Runner-up</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                          3
                        </div>
                        <div>
                          <div className="font-medium">Your Street</div>
                          <div className="text-sm text-gray-600">28.3% recycling rate</div>
                        </div>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800">🥉 Third</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Community Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Community Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Nottingham Fixers Workshop",
                        description: "Learn to repair electronics and furniture",
                        date: "Tomorrow, 2 PM",
                        location: "City Centre",
                        participants: 23,
                        points: "+20"
                      },
                      {
                        title: "Beeston Zero-Waste Market",
                        description: "Package-free shopping and local vendors",
                        date: "Saturday, 10 AM",
                        location: "Beeston High Street",
                        participants: 45,
                        points: "+15"
                      },
                      {
                        title: "Community Composting Workshop",
                        description: "Turn food waste into garden gold",
                        date: "Next Tuesday, 6 PM",
                        location: "Beeston Community Garden",
                        participants: 12,
                        points: "+25"
                      }
                    ].map((event, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <div className="text-2xl">📅</div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{event.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>🕒 {event.date}</span>
                            <span>📍 {event.location}</span>
                            <span>👥 {event.participants} attending</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-100 text-green-800 mb-2">{event.points}</Badge>
                          <Button size="sm" variant="outline">Join</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rewards" className="space-y-6">
              {/* Points Balance */}
              <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-orange-600" />
                    Your Rewards Balance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">1,247</div>
                    <div className="text-gray-600 mb-4">Total Points Available</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-gray-700">This Week</div>
                        <div className="text-green-600">+45 points</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-700">This Month</div>
                        <div className="text-blue-600">+156 points</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Available Rewards */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Available Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Council Tax Discount",
                        description: "5% off your council tax bill",
                        points: 1000,
                        available: true,
                        color: "green"
                      },
                      {
                        title: "Local Business Voucher",
                        description: "£10 voucher for zero-waste shops",
                        points: 500,
                        available: true,
                        color: "blue"
                      },
                      {
                        title: "Community Event Ticket",
                        description: "Free entry to next repair workshop",
                        points: 200,
                        available: true,
                        color: "purple"
                      },
                      {
                        title: "Weekly Lottery Entry",
                        description: "Chance to win £50 voucher",
                        points: 0,
                        available: true,
                        color: "orange"
                      }
                    ].map((reward, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className={`h-2 bg-gradient-to-r from-${reward.color}-400 to-${reward.color}-600`}></div>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold">{reward.title}</h4>
                              <p className="text-sm text-gray-600">{reward.description}</p>
                            </div>
                            <Badge className={`bg-${reward.color}-100 text-${reward.color}-800`}>
                              {reward.points > 0 ? `${reward.points} pts` : 'Free'}
                            </Badge>
                          </div>
                          <Button 
                            className={`w-full bg-${reward.color}-600 hover:bg-${reward.color}-700`}
                            disabled={!reward.available}
                          >
                            {reward.available ? 'Redeem Now' : 'Coming Soon'}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              &copy; 2024 iReBin, weWin. Nottingham's Smart Recycling Community Platform. 🏆
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
