"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Recycle, User, Eye, EyeOff, Home } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const router = useRouter()

  // Demo values for easy testing
  const demoValues = {
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@example.com",
    phone: "+44 7700 900123",
    address: "123 Green Street",
    city: "Nottingham",
    zipCode: "NG1 1AA",
    password: "demo123",
    confirmPassword: "demo123"
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!acceptedTerms) {
      alert("Please accept the terms and conditions to continue.")
      return
    }

    setIsLoading(true)

    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false)
      router.push("/citizen")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <Recycle className="h-8 w-8 text-green-600" />
            <div className="text-left">
              <span className="text-2xl font-bold text-gray-900">iReBin, weWin</span>
              <p className="text-xs text-gray-600">Nottingham's Smart Recycling Community</p>
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Join iReBin, weWin</h1>
          <p className="text-gray-600">Create your account and start earning rewards for recycling</p>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
              <User className="h-6 w-6" />
              Citizen Sign Up
            </CardTitle>
            <CardDescription className="text-center">
              Register as a household to track your recycling and earn rewards
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-4">
              {/* Personal Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" type="text" placeholder="Sarah" defaultValue={demoValues.firstName} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" type="text" placeholder="Johnson" defaultValue={demoValues.lastName} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="sarah@example.com" defaultValue={demoValues.email} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" defaultValue={demoValues.phone} required />
              </div>

              {/* Address Information */}
              <div className="space-y-4 pt-4 border-t">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Home className="h-4 w-4" />
                  Household Address
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" type="text" placeholder="123 Green Street" defaultValue={demoValues.address} required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" type="text" placeholder="Eco City" defaultValue={demoValues.city} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input id="zipCode" type="text" placeholder="12345" defaultValue={demoValues.zipCode} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="zone">Recycling Zone</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your zone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="green-district">Green District</SelectItem>
                      <SelectItem value="blue-quarter">Blue Quarter</SelectItem>
                      <SelectItem value="eco-village">Eco Village</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-4 pt-4 border-t">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      defaultValue={demoValues.password}
                      required
                      className="pr-10"
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

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      defaultValue={demoValues.confirmPassword}
                      required
                      className="pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2 pt-4">
                <Checkbox
                  id="terms"
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="terms"
                    className="text-sm font-normal leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="/terms" className="text-green-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-green-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading || !acceptedTerms}>
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-green-600 hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Preview */}
        <Card className="mt-4 bg-green-50 border-green-200">
          <CardContent className="pt-4">
            <h3 className="font-medium text-sm text-green-800 mb-2">What you'll get:</h3>
            <ul className="text-xs text-green-700 space-y-1">
              <li>• Track your recycling impact in real-time</li>
              <li>• Earn points for consistent recycling</li>
              <li>• Redeem rewards like council tax discounts</li>
              <li>• Get notifications for bin collections</li>
              <li>• Access to community recycling insights</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
