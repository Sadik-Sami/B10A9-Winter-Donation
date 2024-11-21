import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VoteIcon, DollarSign, Share2, ShoppingBag } from 'lucide-react'

const InvolvementOption = ({ icon: Icon, title, description, action, link }) => (
  <Card className="bg-snow-50 border-winter-200 hover:shadow-lg transition-shadow duration-300">
    <CardHeader className="text-center">
      <div className="mx-auto bg-winter-200 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-winter-700" />
      </div>
      <CardTitle className="text-xl font-semibold text-winter-800">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-center">
      <p className="text-winter-600 mb-4">{description}</p>
      <Button 
        className="bg-charity-600 hover:bg-charity-700 text-snow-50"
        onClick={() => window.location.href = link}
      >
        {action}
      </Button>
    </CardContent>
  </Card>
)

const GetInvolved = () => {
  const involvementOptions = [
    {
      icon: VoteIcon,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers and make a direct impact in your community.",
      action: "Sign Up to Volunteer",
      link: "/volunteer"
    },
    {
      icon: DollarSign,
      title: "Donate",
      description: "Your financial contribution can provide warmth and comfort to those in need this winter.",
      action: "Make a Donation",
      link: "/donate"
    },
    {
      icon: ShoppingBag,
      title: "Donate Items",
      description: "Contribute winter clothing, blankets, and other essentials to our collection drives.",
      action: "Find Collection Points",
      link: "/collection-points"
    },
    {
      icon: Share2,
      title: "Spread the Word",
      description: "Share our mission on social media and help us reach more people in need.",
      action: "Share Now",
      link: "/share"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-winter-50 to-winter-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-winter-800 mb-8">Get Involved</h2>
        <p className="text-center text-winter-600 mb-12 max-w-2xl mx-auto">
          There are many ways to support our mission and make a difference in the lives of those facing harsh winter conditions. Choose how you'd like to contribute:
        </p>
        
        <Tabs defaultValue="volunteer" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-4 bg-transparent">
            {involvementOptions.map((option, index) => (
              <TabsTrigger 
                key={index}
                value={option.title.toLowerCase()}
                className="data-[state=active]:bg-winter-200 data-[state=active]:text-winter-800 border border-winter-300"
              >
                <option.icon className="w-5 h-5 mr-2" />
                {option.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {involvementOptions.map((option, index) => (
            <TabsContent key={index} value={option.title.toLowerCase()} className="mt-8">
              <InvolvementOption {...option} />
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-winter-700 mb-4">Not sure how to help? Contact us for more information:</p>
          <Button 
            className="bg-warmth-500 hover:bg-warmth-600 text-snow-50"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}

export default GetInvolved