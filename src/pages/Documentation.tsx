import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Download, Play, Settings, Users, MessageSquare, Bot, Phone, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Documentation = () => {
  const modules = [
    {
      title: "Getting Started",
      icon: Play,
      color: "bg-green-100 text-green-600",
      sections: [
        { name: "Introduction", href: "#introduction" },
        { name: "Installation Guide", href: "#installation" },
        { name: "Getting Started", href: "#getting-started" }
      ]
    },
    {
      title: "Core Modules", 
      icon: Settings,
      color: "bg-blue-100 text-blue-600",
      sections: [
        { name: "Devices Module", href: "#devices" },
        { name: "Manage Groups", href: "#manage-groups" },
        { name: "Templates Module", href: "#templates" },
        { name: "Contacts Module", href: "#contacts" }
      ]
    },
    {
      title: "Communication",
      icon: MessageSquare,
      color: "bg-purple-100 text-purple-600", 
      sections: [
        { name: "Bulk Messages", href: "#bulk-messages" },
        { name: "Auto Reply", href: "#auto-reply" },
        { name: "Chatbot", href: "#chatbot" },
        { name: "AI Chatbot", href: "#ai-chatbot" }
      ]
    },
    {
      title: "Advanced Features",
      icon: Bot,
      color: "bg-orange-100 text-orange-600",
      sections: [
        { name: "Call Responder", href: "#call-responder" },
        { name: "Group Grabber", href: "#group-grabber" },
        { name: "Reports", href: "#reports" },
        { name: "Settings", href: "#settings" }
      ]
    }
  ];

  const features = [
    {
      icon: Phone,
      title: "Multi-Device Support",
      description: "Connect and manage multiple WhatsApp accounts simultaneously from a single interface."
    },
    {
      icon: Users,
      title: "Group Management", 
      description: "Create, manage, and automate interactions with WhatsApp groups and communities."
    },
    {
      icon: MessageSquare,
      title: "Advanced Messaging",
      description: "Send bulk messages, create templates, and automate your communication workflows."
    },
    {
      icon: Bot,
      title: "AI-Powered Automation",
      description: "Leverage artificial intelligence for smart auto-replies and chatbot interactions."
    }
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
              <BookOpen className="w-5 h-5 text-primary" />
              <h1 className="text-2xl font-bold">Documentation</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">LeadWave Training Guide</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive installation and usage guide for LeadWave WhatsApp automation desktop application
          </p>
          <Badge className="mt-4 bg-primary/10 text-primary border-primary/20">
            <Download className="w-4 h-4 mr-2" />
            Desktop Application Guide
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Training Modules Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Training Modules
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {modules.map((module, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${module.color}`}>
                        <module.icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{module.title}</span>
                    </div>
                    <div className="ml-11 space-y-1">
                      {module.sections.map((section, sIndex) => (
                        <a
                          key={sIndex}
                          href={section.href}
                          className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded transition-colors"
                        >
                          {section.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <Card id="introduction">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5 text-green-600" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to LeadWave, a powerful WhatsApp automation desktop application built with Electron.js and the Baileys library. This comprehensive guide will walk you through the installation process and teach you how to use all the features of LeadWave to automate your WhatsApp communications.
                </p>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="p-4 border border-border/50 rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Requirements */}
            <Card id="installation">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-blue-600" />
                  Installation Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">System Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Minimum Requirements</h4>
                      <ul className="text-sm space-y-1 text-blue-700 dark:text-blue-300">
                        <li>• Windows 10/11, macOS 10.14+, or Linux</li>
                        <li>• 4GB RAM</li>
                        <li>• 500MB free disk space</li>
                        <li>• Internet connection</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Recommended</h4>
                      <ul className="text-sm space-y-1 text-green-700 dark:text-green-300">
                        <li>• Latest OS version</li>
                        <li>• 8GB RAM or more</li>
                        <li>• SSD storage</li>
                        <li>• Stable internet connection</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Installation Steps</h3>
                  <div className="space-y-3">
                    {[
                      "Download the LeadWave installer from our official website",
                      "Run the installer as administrator (Windows) or with appropriate permissions",
                      "Follow the installation wizard prompts",
                      "Enter your license key when prompted",
                      "Complete the setup and launch the application"
                    ].map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-muted-foreground">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Getting Started */}
            <Card id="getting-started">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5 text-green-600" />
                  Getting Started
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  After installation, follow these initial setup steps to begin using LeadWave for WhatsApp automation.
                </p>
                
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-800 dark:text-amber-200 mb-1">Important Setup Note</h4>
                      <p className="text-sm text-amber-700 dark:text-amber-300">
                        Make sure to configure your WhatsApp account properly and comply with WhatsApp's Terms of Service. 
                        Use automation responsibly to avoid account restrictions.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Section */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you need assistance with LeadWave, our support team is here to help.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" asChild>
                    <a href="https://wa.me/917261902348" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      WhatsApp Support
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:technovedit@gmail.com">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      Email Support
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;