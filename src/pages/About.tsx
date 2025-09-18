import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Zap, MessageSquare, Bot, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { label: "Happy Customers", value: "300+", icon: Users },
    { label: "Messages Automated", value: "1M+", icon: MessageSquare },
    { label: "Years Experience", value: "5+", icon: Award },
    { label: "Success Rate", value: "99.9%", icon: Target }
  ];

  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge WhatsApp automation solutions that stay ahead of the curve."
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our priority. We're committed to helping businesses achieve their communication goals."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Our solutions empower businesses worldwide to connect with their audiences more effectively."
    },
    {
      icon: Bot,
      title: "AI-Powered",
      description: "We leverage artificial intelligence to make WhatsApp automation smarter and more efficient."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16"> {/* Account for fixed navbar */}
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">About LeadWave</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're passionate about revolutionizing business communication through intelligent WhatsApp automation. 
              Our mission is to empower businesses of all sizes with tools that streamline their messaging workflows and enhance customer engagement.
            </p>
            <Badge className="mt-6 bg-primary/10 text-primary border-primary/20">
              <Bot className="w-4 h-4 mr-2" />
              AI-Powered Communication Solutions
            </Badge>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Our Story */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Our Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  LeadWave was born from the recognition that businesses needed better tools to manage their WhatsApp communications at scale. 
                  As messaging became central to customer engagement, we saw an opportunity to create intelligent automation that would save time while maintaining personal connections.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Founded by a team of experienced developers and marketing professionals, LeadWave combines deep technical expertise with real-world business understanding. 
                  We've helped hundreds of businesses transform their communication strategies and achieve remarkable growth through automated messaging.
                </p>
              </CardContent>
            </Card>

            {/* Our Mission */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  To democratize advanced communication technology by making powerful WhatsApp automation accessible to businesses of all sizes. 
                  We believe that every business deserves the tools to engage customers effectively and efficiently.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We're committed to continuous innovation, ensuring our solutions evolve with the changing landscape of digital communication 
                  while maintaining the highest standards of reliability and user experience.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <Card className="mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Our Values</CardTitle>
              <p className="text-muted-foreground">The principles that guide everything we do</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technology Stack */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Our Technology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                LeadWave is built on a modern, robust technology stack designed for reliability, scalability, and performance:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Desktop Application</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Electron.js for cross-platform compatibility
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Baileys library for WhatsApp integration
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Node.js backend for robust automation
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Key Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      AI-powered message automation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Multi-device synchronization
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Enterprise-grade security
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="text-center">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Communication?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join hundreds of businesses that have revolutionized their WhatsApp communication with LeadWave. 
                Start your journey towards more efficient, automated messaging today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="https://wa.me/917261902348" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Get Started Now
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/">
                    <Phone className="w-5 h-5 mr-2" />
                    View Features
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default About;