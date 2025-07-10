"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Map, Recycle, Truck, Users, Leaf, Building2, Calendar, AlertTriangle, CheckCircle, Clock, Zap, Target, Globe, Filter, Layers, Eye, EyeOff, TrendingUp, Battery, Wifi, Thermometer, Droplets } from "lucide-react"

// Mock iTwin data with multiple layers
const itwinData = {
  layers: {
    bins: {
      name: "Smart Bins",
      active: true,
      data: [
        {
          id: "BIN-001",
          type: "Mixed Recycling",
          location: { lat: 52.9533, lng: -1.1503 },
          fillLevel: 85,
          status: "urgent",
          batteryLevel: 78,
          lastCollection: "2024-01-20",
          zone: "City Centre",
          address: "Market Square, Nottingham"
        },
        {
          id: "BIN-002",
          type: "General Waste",
          location: { lat: 52.9200, lng: -1.2136 },
          fillLevel: 45,
          status: "normal",
          batteryLevel: 92,
          lastCollection: "2024-01-21",
          zone: "Beeston",
          address: "Beeston High Road"
        },
        {
          id: "BIN-003",
          type: "Food Waste",
          location: { lat: 52.9489, lng: -1.1336 },
          fillLevel: 92,
          status: "urgent",
          batteryLevel: 65,
          lastCollection: "2024-01-19",
          zone: "West Bridgford",
          address: "West Bridgford Central"
        },
        {
          id: "BIN-004",
          type: "Mixed Recycling",
          location: { lat: 52.9851, lng: -1.1336 },
          fillLevel: 78,
          status: "warning",
          batteryLevel: 71,
          lastCollection: "2024-01-20",
          zone: "Arnold",
          address: "Arnold Market Place"
        },
        {
          id: "BIN-005",
          type: "General Waste",
          location: { lat: 52.9700, lng: -1.1700 },
          fillLevel: 30,
          status: "normal",
          batteryLevel: 88,
          lastCollection: "2024-01-22",
          zone: "Sherwood",
          address: "Sherwood Rise"
        }
      ]
    },
    routes: {
      name: "Collection Routes",
      active: true,
      data: [
        {
          id: "ROUTE-001",
          name: "Central Nottingham Route",
          driver: "John Smith",
          vehicle: "NCC-001",
          status: "active",
          efficiency: 87,
          estimatedTime: "2.5 hours",
          zones: ["City Centre", "Sherwood"],
          path: [
            { lat: 52.9533, lng: -1.1503 },
            { lat: 52.9700, lng: -1.1700 },
            { lat: 52.9489, lng: -1.1336 }
          ]
        },
        {
          id: "ROUTE-002",
          name: "South Nottingham Route",
          driver: "Sarah Johnson",
          vehicle: "NCC-002",
          status: "planned",
          efficiency: 91,
          estimatedTime: "3.2 hours",
          zones: ["Beeston", "West Bridgford"],
          path: [
            { lat: 52.9200, lng: -1.2136 },
            { lat: 52.9489, lng: -1.1336 }
          ]
        },
        {
          id: "ROUTE-003",
          name: "North East Route",
          driver: "Mike Wilson",
          vehicle: "NCC-003",
          status: "completed",
          efficiency: 94,
          estimatedTime: "1.8 hours",
          zones: ["Arnold", "Carlton"],
          path: [
            { lat: 52.9851, lng: -1.1336 }
          ]
        }
      ]
    },
    recyclingCenters: {
      name: "Recycling Centers",
      active: false,
      data: [
        {
          id: "RC-001",
          name: "Nottingham Recycling Centre",
          type: "Household Waste",
          location: { lat: 52.9400, lng: -1.1600 },
          capacity: "500 tons/day",
          status: "operational",
          hours: "7:00 AM - 7:00 PM",
          services: ["Electronics", "Batteries", "Garden Waste", "Construction"]
        },
        {
          id: "RC-002",
          name: "Beeston Community Recycling",
          type: "Community Hub",
          location: { lat: 52.9200, lng: -1.2100 },
          capacity: "100 tons/day",
          status: "operational",
          hours: "9:00 AM - 5:00 PM",
          services: ["Paper", "Plastic", "Glass", "Textiles"]
        },
        {
          id: "RC-003",
          name: "West Bridgford Eco Centre",
          type: "Eco-Friendly",
          location: { lat: 52.9489, lng: -1.1300 },
          capacity: "75 tons/day",
          status: "operational",
          hours: "8:00 AM - 6:00 PM",
          services: ["Composting", "Upcycling", "Education"]
        }
      ]
    },
    events: {
      name: "Community Events",
      active: false,
      data: [
        {
          id: "EVENT-001",
          name: "Nottingham Fixers Workshop",
          type: "Repair Workshop",
          location: { lat: 52.9533, lng: -1.1503 },
          date: "Tomorrow, 2 PM",
          participants: 23,
          status: "upcoming"
        },
        {
          id: "EVENT-002",
          name: "Beeston Zero-Waste Market",
          type: "Market",
          location: { lat: 52.9200, lng: -1.2136 },
          date: "Saturday, 10 AM",
          participants: 45,
          status: "upcoming"
        },
        {
          id: "EVENT-003",
          name: "Community Composting Workshop",
          type: "Educational",
          location: { lat: 52.9489, lng: -1.1336 },
          date: "Next Tuesday, 6 PM",
          participants: 12,
          status: "upcoming"
        }
      ]
    },
    sensors: {
      name: "Environmental Sensors",
      active: false,
      data: [
        {
          id: "SENSOR-001",
          type: "Air Quality",
          location: { lat: 52.9533, lng: -1.1503 },
          reading: "Good (AQI: 45)",
          status: "operational",
          lastUpdate: "2 minutes ago"
        },
        {
          id: "SENSOR-002",
          type: "Noise Level",
          location: { lat: 52.9200, lng: -1.2136 },
          reading: "Normal (65 dB)",
          status: "operational",
          lastUpdate: "5 minutes ago"
        },
        {
          id: "SENSOR-003",
          type: "Temperature",
          location: { lat: 52.9489, lng: -1.1336 },
          reading: "18°C",
          status: "operational",
          lastUpdate: "1 minute ago"
        },
        {
          id: "SENSOR-004",
          type: "Humidity",
          location: { lat: 52.9851, lng: -1.1336 },
          reading: "65%",
          status: "operational",
          lastUpdate: "3 minutes ago"
        }
      ]
    }
  },
  statistics: {
    totalBins: 140,
    activeRoutes: 3,
    recyclingCenters: 3,
    upcomingEvents: 3,
    activeSensors: 4,
    urgentAlerts: 2,
    efficiency: 89
  }
}

export function ITwinIntegration() {
  const [activeLayers, setActiveLayers] = useState({
    bins: true,
    routes: true,
    recyclingCenters: false,
    events: false,
    sensors: false
  })

  const [selectedLayer, setSelectedLayer] = useState("overview")

  const toggleLayer = (layer: string) => {
    setActiveLayers(prev => ({
      ...prev,
      [layer]: !prev[layer as keyof typeof prev]
    }))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "urgent":
        return "bg-red-100 text-red-800"
      case "warning":
        return "bg-yellow-100 text-yellow-800"
      case "normal":
        return "bg-green-100 text-green-800"
      case "operational":
        return "bg-green-100 text-green-800"
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "urgent":
        return <AlertTriangle className="h-4 w-4" />
      case "warning":
        return <Clock className="h-4 w-4" />
      case "normal":
      case "operational":
        return <CheckCircle className="h-4 w-4" />
      case "upcoming":
        return <Calendar className="h-4 w-4" />
      default:
        return <CheckCircle className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header with Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-green-600">{itwinData.statistics.totalBins}</div>
                <div className="text-sm text-gray-600">Smart Bins</div>
              </div>
              <Recycle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-blue-600">{itwinData.statistics.activeRoutes}</div>
                <div className="text-sm text-gray-600">Active Routes</div>
              </div>
              <Truck className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-purple-600">{itwinData.statistics.recyclingCenters}</div>
                <div className="text-sm text-gray-600">Recycling Centers</div>
              </div>
              <Building2 className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-orange-600">{itwinData.statistics.efficiency}%</div>
                <div className="text-sm text-gray-600">Efficiency</div>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Layer Controls */}
      <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-blue-600" />
            Map Layers
          </CardTitle>
          <CardDescription>Toggle different data layers on the digital twin map</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(itwinData.layers).map(([key, layer]) => (
              <Button
                key={key}
                variant={activeLayers[key as keyof typeof activeLayers] ? "default" : "outline"}
                onClick={() => toggleLayer(key)}
                className="flex items-center gap-2"
              >
                {activeLayers[key as keyof typeof activeLayers] ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                {layer.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Digital Twin Map */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-600" />
            Nottingham Digital Twin Map
          </CardTitle>
          <CardDescription>Real-time visualization of Nottingham's smart recycling infrastructure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative h-96 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 rounded-lg border-2 border-dashed border-blue-300 overflow-hidden">
            {/* Mock Map with Layer Indicators */}
            <div className="absolute inset-0 p-4">
              <div className="text-center text-gray-600 mb-4">
                <Map className="h-12 w-12 mx-auto mb-2 text-blue-600" />
                <p className="font-medium">Nottingham Digital Twin</p>
                <p className="text-sm">Interactive 3D visualization</p>
              </div>
              
              {/* Layer Indicators */}
              <div className="absolute top-4 right-4 space-y-2">
                {Object.entries(activeLayers).map(([key, active]) => {
                  if (!active) return null
                  const layer = itwinData.layers[key as keyof typeof itwinData.layers]
                  const count = layer.data.length
                  
                  return (
                    <Badge key={key} className="bg-white/90 text-gray-800 shadow-md">
                      {layer.name}: {count}
                    </Badge>
                  )
                })}
              </div>

              {/* Mock Data Points */}
              <div className="absolute inset-0 pointer-events-none">
                {Object.entries(activeLayers).map(([key, active]) => {
                  if (!active) return null
                  const layer = itwinData.layers[key as keyof typeof itwinData.layers]
                  
                  return layer.data.map((item, index) => (
                    <div
                      key={`${key}-${index}`}
                      className="absolute w-3 h-3 rounded-full border-2 border-white shadow-lg animate-pulse"
                      style={{
                        left: `${20 + (index * 15)}%`,
                        top: `${30 + (index * 10)}%`,
                        backgroundColor: key === 'bins' ? '#10B981' : 
                                      key === 'routes' ? '#3B82F6' : 
                                      key === 'recyclingCenters' ? '#8B5CF6' : 
                                      key === 'events' ? '#F59E0B' : '#EF4444'
                      }}
                    />
                  ))
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Layer Details */}
      <Tabs value={selectedLayer} onValueChange={setSelectedLayer} className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="bins">Smart Bins</TabsTrigger>
          <TabsTrigger value="routes">Routes</TabsTrigger>
          <TabsTrigger value="centers">Recycling Centers</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  Urgent Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {itwinData.layers.bins.data.filter(bin => bin.status === 'urgent').map((bin, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                      <div>
                        <div className="font-medium">{bin.id}</div>
                        <div className="text-sm text-gray-600">{bin.address}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-red-600">{bin.fillLevel}%</div>
                        <div className="text-xs text-gray-500">Fill Level</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-600" />
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Active Sensors</span>
                    <Badge className="bg-green-100 text-green-800">{itwinData.statistics.activeSensors}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Upcoming Events</span>
                    <Badge className="bg-blue-100 text-blue-800">{itwinData.statistics.upcomingEvents}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Collection Efficiency</span>
                    <Badge className="bg-purple-100 text-purple-800">{itwinData.statistics.efficiency}%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="bins" className="space-y-4">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Recycle className="h-5 w-5 text-green-600" />
                Smart Bin Network
              </CardTitle>
              <CardDescription>Real-time status of all smart bins across Nottingham</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {itwinData.layers.bins.data.map((bin, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                        bin.status === 'urgent' ? 'bg-red-500' :
                        bin.status === 'warning' ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}>
                        {bin.id.split('-')[1]}
                      </div>
                      <div>
                        <div className="font-semibold">{bin.type}</div>
                        <div className="text-sm text-gray-600">{bin.address}</div>
                        <div className="text-xs text-gray-500">Zone: {bin.zone}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-bold">{bin.fillLevel}%</div>
                        <div className="text-xs text-gray-500">Fill Level</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{bin.batteryLevel}%</div>
                        <div className="text-xs text-gray-500">Battery</div>
                      </div>
                      <Badge className={getStatusColor(bin.status)}>
                        {bin.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="routes" className="space-y-4">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-blue-600" />
                Collection Routes
              </CardTitle>
              <CardDescription>AI-optimized collection routes and vehicle tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {itwinData.layers.routes.data.map((route, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <Truck className="h-8 w-8 text-blue-600" />
                      <div>
                        <div className="font-semibold">{route.name}</div>
                        <div className="text-sm text-gray-600">
                          Driver: {route.driver} • Vehicle: {route.vehicle}
                        </div>
                        <div className="text-xs text-gray-500">Zones: {route.zones.join(", ")}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-bold">{route.efficiency}%</div>
                        <div className="text-xs text-gray-500">Efficiency</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{route.estimatedTime}</div>
                        <div className="text-xs text-gray-500">Est. Time</div>
                      </div>
                      <Badge className={getStatusColor(route.status)}>
                        {route.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="centers" className="space-y-4">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-purple-600" />
                Recycling Centers
              </CardTitle>
              <CardDescription>Nottingham's recycling infrastructure and facilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {itwinData.layers.recyclingCenters.data.map((center, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <Building2 className="h-8 w-8 text-purple-600" />
                      <div>
                        <div className="font-semibold">{center.name}</div>
                        <div className="text-sm text-gray-600">{center.type}</div>
                        <div className="text-xs text-gray-500">Capacity: {center.capacity}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-bold">{center.hours}</div>
                        <div className="text-xs text-gray-500">Hours</div>
                      </div>
                      <Badge className={getStatusColor(center.status)}>
                        {center.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-600" />
                Community Events
              </CardTitle>
              <CardDescription>Upcoming recycling and sustainability events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {itwinData.layers.events.data.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <Calendar className="h-8 w-8 text-orange-600" />
                      <div>
                        <div className="font-semibold">{event.name}</div>
                        <div className="text-sm text-gray-600">{event.type}</div>
                        <div className="text-xs text-gray-500">{event.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-bold">{event.participants}</div>
                        <div className="text-xs text-gray-500">Participants</div>
                      </div>
                      <Badge className={getStatusColor(event.status)}>
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
