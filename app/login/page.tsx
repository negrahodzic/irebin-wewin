"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Recycle, Eye, EyeOff, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (userType: "citizen" | "admin") => {
    setIsLoading(true)
    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (userType === "citizen") {
      router.push("/citizen")
    } else {
      router.push("/admin")
    }
  }

  // Demo credentials for easy testing
  const demoCredentials = {
    citizen: { email: "citizen@irebin.com", password: "demo123" },
    admin: { email: "admin@nottingham.gov.uk", password: "admin123" }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-green-500 p-2 rounded-full">
              <Recycle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">iReBin, weWin</h1>
              <p className="text-sm text-gray-600">Nottingham's Smart Recycling Community</p>
            </div>
          </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl sm:text-2xl">Welcome Back</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Sign in to your account to continue making a difference
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="citizen" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="citizen" className="text-xs sm:text-sm">
                  Citizen Login
                </TabsTrigger>
                <TabsTrigger value="admin" className="text-xs sm:text-sm">
                  Council Admin
                </TabsTrigger>
              </TabsList>

              <TabsContent value="citizen">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleLogin("citizen")
                  }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="citizen-email" className="text-sm">
                      Email
                    </Label>
                    <Input
                      id="citizen-email"
                      type="email"
                      placeholder="your.email@example.com"
                      defaultValue={demoCredentials.citizen.email}
                      required
                      className="h-10 sm:h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="citizen-password" className="text-sm">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="citizen-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        defaultValue={demoCredentials.citizen.password}
                        required
                        className="h-10 sm:h-11 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 h-10 sm:h-11"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>

                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-xs sm:text-sm text-green-800 font-medium mb-2">Demo Account:</p>
                  <p className="text-xs text-green-700">Email: demo@citizen.com</p>
                  <p className="text-xs text-green-700">Password: demo123</p>
                </div>
              </TabsContent>

              <TabsContent value="admin">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleLogin("admin")
                  }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="admin-email" className="text-sm">
                      Council Email
                    </Label>
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="admin@nottingham.gov.uk"
                      defaultValue={demoCredentials.admin.email}
                      required
                      className="h-10 sm:h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password" className="text-sm">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="admin-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter admin password"
                        defaultValue={demoCredentials.admin.password}
                        required
                        className="h-10 sm:h-11 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 h-10 sm:h-11"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Admin Sign In"}
                  </Button>
                </form>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs sm:text-sm text-blue-800 font-medium mb-2">Demo Admin Account:</p>
                  <p className="text-xs text-blue-700">Email: admin@nottingham.gov.uk</p>
                  <p className="text-xs text-blue-700">Password: admin123</p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center space-y-3">
              <Link
                href="/forgot-password"
                className="text-sm text-green-600 hover:text-green-700 hover:underline block"
              >
                Forgot your password?
              </Link>
              <div className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/signup" className="text-green-600 hover:text-green-700 hover:underline">
                  Sign up here
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
