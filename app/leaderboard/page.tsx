"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Trophy, Medal, Award, TrendingUp, Recycle, Target, Crown } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

// Nottingham neighborhoods data
const neighborhoodData = [
  {
    rank: 1,
    name: "Beeston Village",
    recyclingRate: 94,
    households: 1247,
    points: 15680,
    trend: "+5%",
    badge: "🥇",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 border-yellow-200",
  },
  {
    rank: 2,
    name: "West Bridgford",
    recyclingRate: 91,
    households: 1856,
    points: 14920,
    trend: "+3%",
    badge: "🥈",
    color: "text-gray-600",
    bgColor: "bg-gray-50 border-gray-200",
  },
  {
    rank: 3,
    name: "Mapperley Park",
    recyclingRate: 88,
    households: 892,
    points: 13450,
    trend: "+7%",
    badge: "🥉",
    color: "text-orange-600",
    bgColor: "bg-orange-50 border-orange-200",
  },
  {
    rank: 4,
    name: "Sherwood",
    recyclingRate: 85,
    households: 1456,
    points: 12890,
    trend: "+2%",
    badge: "4th",
    color: "text-blue-600",
    bgColor: "bg-blue-50 border-blue-200",
  },
  {
    rank: 5,
    name: "Gedling",
    recyclingRate: 83,
    households: 1123,
    points: 11760,
    trend: "+4%",
    badge: "5th",
    color: "text-green-600",
    bgColor: "bg-green-50 border-green-200",
  },
  {
    rank: 6,
    name: "Arnold",
    recyclingRate: 81,
    households: 1678,
    points: 11240,
    trend: "+1%",
    badge: "6th",
    color: "text-purple-600",
    bgColor: "bg-purple-50 border-purple-200",
  },
  {
    rank: 7,
    name: "Carlton",
    recyclingRate: 79,
    households: 934,
    points: 10890,
    trend: "+6%",
    badge: "7th",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 border-indigo-200",
  },
  {
    rank: 8,
    name: "Bulwell",
    recyclingRate: 76,
    households: 1234,
    points: 9870,
    trend: "+3%",
    badge: "8th",
    color: "text-pink-600",
    bgColor: "bg-pink-50 border-pink-200",
  },
]

const monthlyGoals = [
  { neighborhood: "Beeston Village", goal: 95, current: 94, status: "On Track" },
  { neighborhood: "West Bridgford", goal: 93, current: 91, status: "Behind" },
  { neighborhood: "Mapperley Park", goal: 90, current: 88, status: "Behind" },
  { neighborhood: "Sherwood", goal: 87, current: 85, status: "Behind" },
]

export default function LeaderboardPage() {
  const [selectedTab, setSelectedTab] = useState("rankings")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <Trophy className="h-8 w-8 text-yellow-600" />
            Nottingham Recycling Leaderboard
          </h1>
          <p className="text-gray-600 mb-4">See how your neighborhood ranks in our community recycling challenge</p>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Updated Live • December 2024
          </Badge>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="rankings">Neighborhood Rankings</TabsTrigger>
            <TabsTrigger value="goals">Monthly Goals</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="rankings" className="space-y-6">
            {/* Top 3 Spotlight */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {neighborhoodData.slice(0, 3).map((neighborhood, index) => (
                <Card key={neighborhood.rank} className={`text-center ${neighborhood.bgColor} border-2`}>
                  <CardHeader>
                    <div className="text-4xl mb-2">{neighborhood.badge}</div>
                    <CardTitle className={neighborhood.color}>{neighborhood.name}</CardTitle>
                    <CardDescription>
                      {neighborhood.households.toLocaleString()} households participating
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold">{neighborhood.recyclingRate}%</div>
                      <div className="text-sm text-gray-600">Recycling Rate</div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {neighborhood.trend} this month
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Full Rankings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Medal className="h-5 w-5" />
                  Complete Neighborhood Rankings
                </CardTitle>
                <CardDescription>All participating Nottingham neighborhoods</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {neighborhoodData.map((neighborhood) => (
                    <div
                      key={neighborhood.rank}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-bold text-lg">
                          {neighborhood.rank <= 3 ? neighborhood.badge : neighborhood.rank}
                        </div>
                        <div>
                          <div className="font-semibold">{neighborhood.name}</div>
                          <div className="text-sm text-gray-600">
                            {neighborhood.households.toLocaleString()} households
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="font-bold text-lg">{neighborhood.recyclingRate}%</div>
                          <div className="text-sm text-gray-600">Recycling Rate</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">{neighborhood.points.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">Points</div>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {neighborhood.trend}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  December 2024 Neighborhood Goals
                </CardTitle>
                <CardDescription>Track progress towards monthly recycling targets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {monthlyGoals.map((goal, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{goal.neighborhood}</div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">
                            {goal.current}% / {goal.goal}%
                          </span>
                          <Badge variant={goal.status === "On Track" ? "default" : "secondary"}>{goal.status}</Badge>
                        </div>
                      </div>
                      <Progress value={(goal.current / goal.goal) * 100} className="h-2" />
                      <div className="text-xs text-gray-500">
                        {goal.goal - goal.current > 0
                          ? `${goal.goal - goal.current}% to reach goal`
                          : "Goal achieved! 🎉"}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Challenge */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-purple-600" />
                  December Community Challenge
                </CardTitle>
                <CardDescription>All neighborhoods working together</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">87%</div>
                    <div className="text-gray-600">City-wide Recycling Rate</div>
                  </div>
                  <Progress value={87} className="h-3" />
                  <div className="text-center text-sm text-gray-600">
                    Goal: 90% • 3% to go • Reward: Community Garden Expansion
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-600" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                      <div className="text-2xl">🏆</div>
                      <div>
                        <div className="font-medium">Beeston Village</div>
                        <div className="text-sm text-gray-600">Recycling Champion - November 2024</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl">🌱</div>
                      <div>
                        <div className="font-medium">Mapperley Park</div>
                        <div className="text-sm text-gray-600">Most Improved - 15% increase</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl">🤝</div>
                      <div>
                        <div className="font-medium">All Neighborhoods</div>
                        <div className="text-sm text-gray-600">Community Goal Achieved - October</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Impact Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total CO₂ Saved</span>
                      <span className="font-bold">156 Tonnes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Waste Diverted</span>
                      <span className="font-bold">2,847 Tonnes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Community Participation</span>
                      <span className="font-bold">89%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Active Households</span>
                      <span className="font-bold">12,847</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
