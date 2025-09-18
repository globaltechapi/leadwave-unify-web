import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, MessageSquare, MapPin, Clock, Phone, Send, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp Support",
      description: "Get instant help via WhatsApp",
      action: "Chat Now",
      href: "https://wa.me/917261902348",
      color: "bg-green-100 text-green-600 border-green-200",
      actionColor: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your queries via email",
      action: "Send Email",
      href: "mailto:technovedit@gmail.com",
      color: "bg-blue-100 text-blue-600 border-blue-200",
      actionColor: "bg-blue-500 hover:bg-blue-600"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM IST" },
    { day: "Saturday", hours: "10:00 AM - 5:00 PM IST" },
    { day: "Sunday", hours: "Closed" }
  ];

  const supportTopics = [
    "Installation and Setup",
    "License and Activation",
    "Technical Issues",
    "Feature Requests",
    "Billing and Payments",
    "Account Management"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <h1 className="text-2xl font-bold">Contact Us</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <Headphones className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Need help with LeadWave? Our support team is here to assist you. 
            Choose your preferred way to reach us and we'll get back to you promptly.
          </p>
          <Badge className="mt-4 bg-green-100 text-green-600 border-green-200">
            <Clock className="w-4 h-4 mr-2" />
            24/7 WhatsApp Support Available
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow border-2 ${method.color}`}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <p className="text-muted-foreground">{method.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    className={`w-full text-white ${method.actionColor}`}
                    asChild
                  >
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      <Send className="w-4 h-4 mr-2" />
                      {method.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">LeadWave Technologies</p>
                  <p className="text-muted-foreground">Mumbai, Maharashtra</p>
                  <p className="text-muted-foreground">India</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Topics */}
        <Card className="mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Common Support Topics</CardTitle>
            <p className="text-muted-foreground">
              Here are some areas our support team can help you with
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {supportTopics.map((topic, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">{topic}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Details */}
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Email Address</h3>
                <a 
                  href="mailto:technovedit@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  technovedit@gmail.com
                </a>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold">WhatsApp</h3>
                <a 
                  href="https://wa.me/917261902348" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 72619 02348
                </a>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">
                  Mumbai, Maharashtra<br />India
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Before contacting us, you might find your answer in our documentation.
          </p>
          <Button variant="outline" asChild>
            <Link to="/documentation">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Check Documentation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;