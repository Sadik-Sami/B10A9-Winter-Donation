import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gift, Truck, HandHeart, MapPin } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    { icon: Gift, title: "Choose Items", description: "Select warm clothing, blankets, or other winter essentials you'd like to donate." },
    { icon: MapPin, title: "Find a Collection Point", description: "Locate your nearest collection point from our list of supported divisions." },
    { icon: Truck, title: "Drop Off Donations", description: "Bring your items to the collection point during operating hours." },
    { icon: HandHeart, title: "We Distribute", description: "Our team ensures your donations reach those most in need in the community." },
  ]

  const divisions = [
    "Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"
  ]

  return (
    <section className="py-16 bg-winter-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-winter-800 mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="bg-snow-100 border-winter-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto bg-winter-200 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-winter-700" />
                </div>
                <CardTitle className="text-xl font-semibold text-winter-800">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-winter-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-winter-100 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-winter-800 mb-6">Collection Points</h3>
          <p className="text-winter-700 mb-4">
            We have collection points set up in various locations across our supported divisions. 
            Each collection point is open from 9 AM to 5 PM, Monday through Saturday.
          </p>
          <p className="text-winter-700 mb-6">
            At each location, our friendly volunteers will assist you with your donation and provide 
            you with a receipt for your records. For large donations, please contact us in advance 
            so we can ensure we have enough space and staff to handle your generous contribution.
          </p>
          <Button className="bg-charity-600 hover:bg-charity-700 text-snow-50">
            Find Nearest Collection Point
          </Button>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-winter-800 mb-6">Supported Divisions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {divisions.map((division, index) => (
              <Card key={index} className="bg-warmth-100 hover:bg-warmth-200 transition-colors duration-300">
                <CardContent className="flex items-center p-4">
                  <MapPin className="w-5 h-5 text-warmth-700 mr-2" />
                  <span className="text-warmth-900 font-medium">{division}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks