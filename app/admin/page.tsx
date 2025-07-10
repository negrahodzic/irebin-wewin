"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Truck, BarChart3, Users, AlertTriangle, CheckCircle, Clock, Route, Recycle, TrendingUp, MessageSquare, Brain, TrendingUp as TrendingUpIcon, AlertCircle, PieChart, Activity, Eye, Plus, Filter, Map, Trash2, Package, LeafyGreen, Building2, Trophy, Target, Award, Calendar, Star, Zap, Leaf, Globe, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { ITwinIntegration } from "@/components/itwin-integration"
import { Navigation } from "@/components/navigation"
import { ChatAnalyticsService } from "@/lib/chat-analytics-service"

// Enhanced admin data with Nottingham specifics
const adminData = {
  zones: [
    { id: 1, name: "City Centre", bins: 45, collected: 38, efficiency: 84, population: 15420, recyclingRate: 32.1, color: "from-green-400 to-green-600" },
    { id: 2, name: "Beeston & West Bridgford", bins: 32, collected: 30, efficiency: 94, population: 28350, recyclingRate: 29.8, color: "from-blue-400 to-blue-600" },
    { id: 3, name: "Arnold & Carlton", bins: 28, collected: 25, efficiency: 89, population: 22180, recyclingRate: 28.3, color: "from-purple-400 to-purple-600" },
    { id: 4, name: "Sherwood & Bulwell", bins: 35, collected: 31, efficiency: 91, population: 19750, recyclingRate: 26.7, color: "from-orange-400 to-orange-600" },
  ],
  routes: [
    {
      id: 1,
      name: "Central Nottingham Route",
      zones: ["City Centre", "Sherwood & Bulwell"],
      status: "active",
      efficiency: 87,
      estimatedTime: "2.5 hours",
      driver: "John Smith",
      vehicle: "NCC-001",
    },
    {
      id: 2,
      name: "South Nottingham Route",
      zones: ["Beeston & West Bridgford"],
      status: "planned",
      efficiency: 91,
      estimatedTime: "3.2 hours",
      driver: "Sarah Johnson",
      vehicle: "NCC-002",
    },
    {
      id: 3,
      name: "North East Route",
      zones: ["Arnold & Carlton"],
      status: "completed",
      efficiency: 94,
      estimatedTime: "1.8 hours",
      driver: "Mike Wilson",
      vehicle: "NCC-003",
    },
  ],
  stats: {
    totalBins: 140,
    urgentBins: 12,
    collectionEfficiency: 89,
    activeHouseholds: 85700,
    totalPoints: 456392,
    co2Saved: 18.7,
    avgFillLevel: 62,
    batteryAlerts: 3,
  },
  businesses: [
    {
      name: "Tesco Extra Beeston",
      type: "Supermarket",
      recyclingRate: 94.2,
      wasteReduced: 12.3,
      points: 2847,
      employees: 45,
      status: "excellent"
    },
    {
      name: "Nottingham Trent University",
      type: "Education",
      recyclingRate: 89.7,
      wasteReduced: 8.9,
      points: 2156,
      employees: 120,
      status: "excellent"
    },
    {
      name: "Victoria Centre",
      type: "Shopping Centre",
      recyclingRate: 76.4,
      wasteReduced: 6.2,
      points: 1893,
      employees: 85,
      status: "good"
    },
    {
      name: "Nottingham City Hospital",
      type: "Healthcare",
      recyclingRate: 82.1,
      wasteReduced: 7.8,
      points: 1654,
      employees: 200,
      status: "good"
    },
    {
      name: "Broadmarsh Shopping Centre",
      type: "Shopping Centre",
      recyclingRate: 68.9,
      wasteReduced: 4.1,
      points: 1247,
      employees: 65,
      status: "improving"
    }
  ],
  neighborhoods: [
    {
      name: "Beeston Village",
      recyclingRate: 32.1,
      households: 1247,
      points: 45678,
      rank: 1,
      trend: "+5.2%",
      color: "from-green-400 to-green-600"
    },
    {
      name: "West Bridgford Central",
      recyclingRate: 29.8,
      households: 892,
      points: 38945,
      rank: 2,
      trend: "+3.8%",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Sherwood Rise",
      recyclingRate: 28.3,
      households: 756,
      points: 32456,
      rank: 3,
      trend: "+4.1%",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Arnold Market Place",
      recyclingRate: 26.7,
      households: 634,
      points: 28934,
      rank: 4,
      trend: "+2.9%",
      color: "from-orange-400 to-orange-600"
    },
    {
      name: "Mapperley Park",
      recyclingRate: 25.4,
      households: 523,
      points: 25678,
      rank: 5,
      trend: "+1.7%",
      color: "from-red-400 to-red-600"
    }
  ]
}

// Get real analytics data from service
const getChatAnalytics = () => {
  const serviceAnalytics = ChatAnalyticsService.getAnalytics()
  
  return {
    totalQuestions: serviceAnalytics.totalQuestions,
    thisMonth: Math.floor(serviceAnalytics.totalQuestions * 0.2), // Estimate
    avgConfidence: serviceAnalytics.avgConfidence,
    topTopics: serviceAnalytics.topTopics.map(topic => ({
      topic: topic.topic,
      count: topic.count,
      trend: "+15%", // Mock trend
      confidence: topic.confidence,
      urgency: topic.urgency,
      suggestedContent: `Content: ${topic.topic} Guide`
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
  }
}

const chatAnalytics = getChatAnalytics()

export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState("overview")
  const [selectedZone, setSelectedZone] = useState("All Zones")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "urgent":
        return "destructive"
      case "warning":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "urgent":
        return <AlertTriangle className="h-4 w-4" />
      case "warning":
        return <Clock className="h-4 w-4" />
      default:
        return <CheckCircle className="h-4 w-4" />
    }
  }

  const getBusinessStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-100 text-green-800"
      case "good":
        return "bg-blue-100 text-blue-800"
      case "improving":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation />

      {/* Admin Status Bar */}
      <div className="bg-white border-b px-4 py-2 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Leaf className="h-3 w-3 mr-1" />
              Nottingham City Council
            </Badge>
            <Select value={selectedZone} onValueChange={setSelectedZone}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Zones">All Zones</SelectItem>
                {adminData.zones.map((zone) => (
                  <SelectItem key={zone.id} value={zone.name}>
                    {zone.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Link href="/login">
            <Button variant="outline" size="sm">
              Sign Out
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Council Dashboard</h1>
          <p className="text-gray-600">
            Monitor smart bin infrastructure, optimize collection routes, and track community engagement across
            Nottingham
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="itwin">iTwin Platform</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="chat-analytics">Chat Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Enhanced Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Smart Bins</CardTitle>
                  <Recycle className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{adminData.stats.totalBins}</div>
                  <p className="text-xs text-green-600">{adminData.stats.urgentBins} need urgent attention</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Collection Efficiency</CardTitle>
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">{adminData.stats.collectionEfficiency}%</div>
                  <p className="text-xs text-blue-600">+2.3% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Households</CardTitle>
                  <Users className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">{adminData.stats.activeHouseholds.toLocaleString()}</div>
                  <p className="text-xs text-purple-600">91% participation rate</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">CO₂ Saved</CardTitle>
                  <Leaf className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">{adminData.stats.co2Saved}T</div>
                  <p className="text-xs text-orange-600">This month</p>
                </CardContent>
              </Card>
            </div>

            {/* Zone Performance with Heat Map Style */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Map className="h-5 w-5 text-green-600" />
                  Zone Performance - Nottingham Districts
                </CardTitle>
                <CardDescription>Collection efficiency and recycling rates by district</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {adminData.zones.map((zone) => (
                    <div key={zone.id} className={`p-4 rounded-lg border-2 bg-gradient-to-r ${zone.color} text-white relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-lg">{zone.name}</h3>
                          <Badge className="bg-white/20 text-white">
                            #{zone.id}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-bold text-2xl">{zone.efficiency}%</div>
                            <div className="opacity-90">Efficiency</div>
                          </div>
                          <div>
                            <div className="font-bold text-2xl">{zone.recyclingRate}%</div>
                            <div className="opacity-90">Recycling Rate</div>
                          </div>
                        </div>
                        <div className="mt-3 text-xs opacity-90">
                          {zone.bins} smart bins • {zone.collected} collected • {zone.population.toLocaleString()} residents
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Performing Businesses */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  Top Performing Businesses
                </CardTitle>
                <CardDescription>Businesses leading Nottingham's recycling efforts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {adminData.businesses.map((business, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                          index === 0 ? 'bg-yellow-500' :
                          index === 1 ? 'bg-gray-400' :
                          index === 2 ? 'bg-orange-500' :
                          'bg-blue-500'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold">{business.name}</div>
                          <div className="text-sm text-gray-600">{business.type} • {business.employees} employees</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-bold text-green-600">{business.recyclingRate}%</div>
                          <div className="text-xs text-gray-500">Recycling Rate</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-blue-600">{business.wasteReduced}T</div>
                          <div className="text-xs text-gray-500">Waste Reduced</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-purple-600">{business.points.toLocaleString()}</div>
                          <div className="text-xs text-gray-500">Points</div>
                        </div>
                        <Badge className={getBusinessStatusColor(business.status)}>
                          {business.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Neighborhood Leaderboard */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-green-600" />
                  Neighborhood Leaderboard
                </CardTitle>
                <CardDescription>Top performing neighborhoods in Nottingham</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {adminData.neighborhoods.map((neighborhood, index) => (
                    <div key={index} className={`p-4 rounded-lg border-2 bg-gradient-to-r ${neighborhood.color} text-white relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                              index === 0 ? 'bg-yellow-500' :
                              index === 1 ? 'bg-gray-400' :
                              index === 2 ? 'bg-orange-500' :
                              'bg-blue-500'
                            }`}>
                              {neighborhood.rank}
                            </div>
                            <div>
                              <div className="font-semibold">{neighborhood.name}</div>
                              <div className="text-sm opacity-90">{neighborhood.households} households</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-2xl">{neighborhood.recyclingRate}%</div>
                            <div className="text-sm opacity-90">Recycling Rate</div>
                            <div className="text-xs opacity-75">{neighborhood.trend} this month</div>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-sm">
                          <span>{neighborhood.points.toLocaleString()} points earned</span>
                          <Badge className="bg-white/20 text-white">
                            #{neighborhood.rank} Rank
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="itwin" className="space-y-6">
            <ITwinIntegration />
          </TabsContent>



          <TabsContent value="analytics" className="space-y-6">
            {/* Enhanced Analytics Header */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Advanced Analytics Dashboard</h2>
                  <p className="text-green-100">Real-time insights and predictive analytics for Nottingham's recycling program</p>
                </div>
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                  <Badge className="bg-white/20 text-white">
                    <Activity className="h-3 w-3 mr-1" />
                    Live Data
                  </Badge>
                  <Badge className="bg-white/20 text-white">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Predictive
                  </Badge>
                </div>
              </div>
            </div>

            {/* Interactive Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-green-600">{adminData.stats.totalPoints.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Total Points Awarded</div>
                    </div>
                    <Trophy className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-green-600">+12.3% this month</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-blue-600">{adminData.stats.activeHouseholds.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Active Households</div>
                    </div>
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                      <span className="text-blue-600">91% participation rate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-purple-600">{adminData.stats.co2Saved}T</div>
                      <div className="text-sm text-gray-600">CO₂ Saved This Month</div>
                    </div>
                    <Leaf className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-purple-600" />
                      <span className="text-purple-600">+8.7% vs last month</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-orange-600">{adminData.stats.avgFillLevel}%</div>
                      <div className="text-sm text-gray-600">Average Fill Level</div>
                    </div>
                    <Package className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-orange-600" />
                      <span className="text-orange-600">Optimal range</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interactive Performance Charts */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                    Weekly Performance Trends
                  </CardTitle>
                  <CardDescription>Interactive chart showing recycling performance over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">This Week</span>
                      <Badge className="bg-green-100 text-green-800">+5.2%</Badge>
                    </div>
                    <div className="space-y-2">
                      {[
                        { day: "Mon", value: 78, color: "bg-green-500" },
                        { day: "Tue", value: 82, color: "bg-green-500" },
                        { day: "Wed", value: 85, color: "bg-blue-500" },
                        { day: "Thu", value: 79, color: "bg-green-500" },
                        { day: "Fri", value: 88, color: "bg-purple-500" },
                        { day: "Sat", value: 91, color: "bg-orange-500" },
                        { day: "Sun", value: 87, color: "bg-blue-500" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <span className="text-sm font-medium w-8">{item.day}</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${item.color} transition-all duration-300 hover:scale-105`}
                              style={{ width: `${item.value}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-bold">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-blue-600" />
                    Waste Composition Analysis
                  </CardTitle>
                  <CardDescription>Breakdown of collected materials by type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { type: "Paper & Cardboard", percentage: 35, color: "bg-blue-500", trend: "+2.1%" },
                      { type: "Plastic & Metal", percentage: 28, color: "bg-green-500", trend: "+1.8%" },
                      { type: "Glass", percentage: 22, color: "bg-purple-500", trend: "+0.9%" },
                      { type: "Organic Waste", percentage: 15, color: "bg-orange-500", trend: "+3.2%" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                          <div>
                            <div className="font-medium">{item.type}</div>
                            <div className="text-sm text-gray-600">{item.percentage}% of total</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">{item.trend}</div>
                          <div className="text-xs text-gray-500">vs last month</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Predictive Analytics */}
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-600" />
                  Predictive Analytics & Insights
                </CardTitle>
                <CardDescription>AI-powered predictions and recommendations for optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-white rounded-lg border">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertTriangle className="h-6 w-6 text-orange-600" />
                      <h4 className="font-semibold">Collection Optimization</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Route efficiency can be improved by 12% by adjusting collection times in Beeston area</p>
                    <Button size="sm" className="w-full">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>

                  <div className="p-4 bg-white rounded-lg border">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                      <h4 className="font-semibold">Growth Prediction</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Expected 15% increase in participation rate by Q2 2024 based on current trends</p>
                    <Button size="sm" className="w-full">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Forecast
                    </Button>
                  </div>

                  <div className="p-4 bg-white rounded-lg border">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="h-6 w-6 text-blue-600" />
                      <h4 className="font-semibold">Smart Bin Alerts</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">8 bins in City Centre will need maintenance within the next 7 days</p>
                    <Button size="sm" className="w-full">
                      <Package className="h-4 w-4 mr-2" />
                      View Alerts
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Real-time Monitoring */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-green-600" />
                  Real-time System Monitoring
                </CardTitle>
                <CardDescription>Live status of critical infrastructure and operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-medium">Smart Bins Online</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">98.2%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="font-medium">Collection Vehicles</span>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">12/12 Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="font-medium">Recycling Centers</span>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800">3/3 Operational</Badge>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                        <span className="font-medium">Battery Alerts</span>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800">{adminData.stats.batteryAlerts} Bins</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="font-medium">Urgent Collections</span>
                      </div>
                      <Badge className="bg-red-100 text-red-800">{adminData.stats.urgentBins} Bins</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-medium">AI Assistant</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Online</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat-analytics" className="space-y-6">
            {/* Chat Analytics Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">AI Chat Analytics</h2>
                  <p className="text-blue-100">Community insights from AI recycling assistant interactions</p>
                </div>
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                  <Badge className="bg-white/20 text-white">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Live Data
                  </Badge>
                  <Badge className="bg-white/20 text-white">
                    <TrendingUpIcon className="h-3 w-3 mr-1" />
                    Real-time
                  </Badge>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-green-600">{chatAnalytics.totalQuestions}</div>
                      <div className="text-sm text-gray-600">Total Questions</div>
                    </div>
                    <MessageSquare className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="mt-2 text-xs text-green-600">+{chatAnalytics.thisMonth} this month</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{Math.round(chatAnalytics.avgConfidence * 100)}%</div>
                      <div className="text-sm text-gray-600">Avg Confidence</div>
                    </div>
                    <Brain className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="mt-2 text-xs text-blue-600">AI response accuracy</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{chatAnalytics.urgentAlerts.length}</div>
                      <div className="text-sm text-gray-600">Urgent Alerts</div>
                    </div>
                    <AlertCircle className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="mt-2 text-xs text-purple-600">Need attention</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-orange-600">{chatAnalytics.topTopics.length}</div>
                      <div className="text-sm text-gray-600">Content Suggestions</div>
                    </div>
                    <Plus className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="mt-2 text-xs text-orange-600">Ready to create</div>
                </CardContent>
              </Card>
            </div>

            {/* Top Confused Topics */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  Top Confused Topics (This Month)
                </CardTitle>
                <CardDescription>
                  Topics with highest question volume and lowest confidence scores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {chatAnalytics.topTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold">{topic.topic}</div>
                          <div className="text-sm text-gray-600">{topic.count} questions</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-sm font-medium">{topic.trend}</div>
                          <div className="text-xs text-gray-500">trend</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{Math.round(topic.confidence * 100)}%</div>
                          <div className="text-xs text-gray-500">confidence</div>
                        </div>
                        <Badge className={`${
                          topic.urgency === 'high' ? 'bg-red-100 text-red-800' :
                          topic.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {topic.urgency}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Questions */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUpIcon className="h-5 w-5" />
                  Trending Questions (Last 24h)
                </CardTitle>
                <CardDescription>
                  Most frequently asked questions in the community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {chatAnalytics.trendingQuestions.map((question, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <div className="text-2xl">❓</div>
                      <div className="flex-1">
                        <div className="font-medium">{question}</div>
                        <div className="text-sm text-gray-500">Asked {Math.floor(Math.random() * 20) + 1} times today</div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Geographic Distribution */}
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Map className="h-5 w-5" />
                  Geographic Distribution
                </CardTitle>
                <CardDescription>
                  Questions by Nottingham area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {chatAnalytics.geographicData.map((area, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{area.area}</h4>
                        <Badge className="bg-blue-100 text-blue-800">{area.questions} questions</Badge>
                      </div>
                      <div className="text-sm text-gray-600">Top topic: {area.topTopic}</div>
                      <Progress value={(area.questions / 100) * 100} className="mt-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
