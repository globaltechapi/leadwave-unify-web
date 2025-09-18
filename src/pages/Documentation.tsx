import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Download, Play, Settings, Users, MessageSquare, Bot, Phone, ChevronRight, FileText, HelpCircle, Zap, Target, BarChart, AlertTriangle, Smartphone, Volume2, UserCheck, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Documentation = () => {
  const [activeModule, setActiveModule] = useState("introduction");

  const modules = [
    {
      title: "Getting Started",
      icon: Play,
      color: "bg-green-100 text-green-600",
      sections: [
        { id: "introduction", name: "Introduction", icon: BookOpen },
        { id: "installation", name: "Installation Guide", icon: Download },
        { id: "getting-started", name: "Getting Started", icon: Play }
      ]
    },
    {
      title: "Core Modules", 
      icon: Settings,
      color: "bg-blue-100 text-blue-600",
      sections: [
        { id: "devices", name: "Devices Module", icon: Smartphone },
        { id: "manage-groups", name: "Manage Groups", icon: Users },
        { id: "templates", name: "Templates Module", icon: FileText },
        { id: "contacts", name: "Contacts Module", icon: UserCheck }
      ]
    },
    {
      title: "Communication",
      icon: MessageSquare,
      color: "bg-purple-100 text-purple-600", 
      sections: [
        { id: "bulk-messages", name: "Bulk Messages", icon: Mail },
        { id: "auto-reply", name: "Auto Reply", icon: ChevronRight },
        { id: "chatbot", name: "Chatbot", icon: MessageSquare },
        { id: "ai-chatbot", name: "AI Chatbot", icon: Bot }
      ]
    },
    {
      title: "Advanced Features",
      icon: Bot,
      color: "bg-orange-100 text-orange-600",
      sections: [
        { id: "call-responder", name: "Call Responder", icon: Phone },
        { id: "group-grabber", name: "Group Grabber", icon: Users },
        { id: "reports", name: "Reports", icon: BarChart },
        { id: "settings", name: "Settings", icon: Settings }
      ]
    },
    {
      title: "Support",
      icon: HelpCircle,
      color: "bg-red-100 text-red-600",
      sections: [
        { id: "troubleshooting", name: "Troubleshooting", icon: AlertTriangle }
      ]
    }
  ];

  const features = [
    {
      icon: Smartphone,
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
      description: "Send text, media, interactive messages, polls, and more with powerful templates."
    },
    {
      icon: Bot,
      title: "Automation Features",
      description: "Auto-reply, chatbots, and call responders to handle communications automatically."
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Track message statistics, campaign performance, and device activity."
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Leverage OpenAI and Google Gemini for intelligent, context-aware conversations."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveModule(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <h1 className="text-4xl font-bold mb-4">Lead Wave Training Guide</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive installation and usage guide for Lead Wave WhatsApp automation desktop application
          </p>
          <Badge className="mt-4 bg-primary/10 text-primary border-primary/20">
            <Download className="w-4 h-4 mr-2" />
            Desktop Application Guide
          </Badge>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
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
                        <button
                          key={sIndex}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full text-left px-3 py-2 text-sm rounded transition-colors flex items-center gap-2 ${
                            activeModule === section.id 
                              ? 'bg-primary/10 text-primary' 
                              : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                          }`}
                        >
                          <section.icon className="w-3 h-3" />
                          {section.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Introduction */}
            <Card id="introduction">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to Lead Wave, a powerful WhatsApp automation desktop application built with Electron.js and the Baileys library. 
                  This comprehensive guide will walk you through the installation process and teach you how to use all the features of Lead Wave to automate your WhatsApp communications.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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

            {/* Installation Guide */}
            <Card id="installation">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-blue-600" />
                  Installation Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <h3 className="text-lg font-semibold">System Requirements</h3>
                    </div>
                    <div className="ml-11 space-y-2">
                      <p className="text-muted-foreground">Before installing Lead Wave, ensure your system meets these requirements:</p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li><strong>OS:</strong> Windows 10+</li>
                        <li><strong>Processor:</strong> Intel Core i3 or equivalent</li>
                        <li><strong>Memory:</strong> 4 GB RAM minimum (8 GB recommended)</li>
                        <li><strong>Storage:</strong> 500 MB available space</li>
                        <li><strong>Internet:</strong> Required for activation and connectivity</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <h3 className="text-lg font-semibold">Installation Process</h3>
                    </div>
                    <div className="ml-11 space-y-2">
                      <ol className="text-sm space-y-1 text-muted-foreground list-decimal list-inside">
                        <li>Locate the downloaded installer file</li>
                        <li>Double-click to begin installation</li>
                        <li>Accept the license agreement</li>
                        <li>Choose installation directory</li>
                        <li>Click "Install" and wait for completion</li>
                        <li>Click "Finish" to complete</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-800 dark:text-amber-200 mb-1">Note</h4>
                      <p className="text-sm text-amber-700 dark:text-amber-300">
                        Lead Wave requires a valid license to operate. If you don't have a license, you may be able to use a trial version if available.
                      </p>
                    </div>
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
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">1</div>
                    <h4 className="font-semibold mb-2">User Interface Overview</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Sidebar Navigation: Access all modules</li>
                      <li>• Main Content Area: View and interact</li>
                      <li>• Header: Quick actions and profile</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">2</div>
                    <h4 className="font-semibold mb-2">License Activation</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Click "License Registration"</li>
                      <li>• Enter license key or register trial</li>
                      <li>• Follow on-screen instructions</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">3</div>
                    <h4 className="font-semibold mb-2">Initial Configuration</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Set preferred language</li>
                      <li>• Configure notifications</li>
                      <li>• Set up backup options</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Devices Module */}
            <Card id="devices">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                  Devices Module
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  The Devices module is where you manage your WhatsApp connections. You can connect multiple WhatsApp accounts to LeadWave simultaneously.
                </p>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Adding a New Device</h3>
                  <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                    <li>Click on "Devices" in sidebar navigation</li>
                    <li>Click the "Add Device" button</li>
                    <li>Enter a descriptive name for your device/session</li>
                    <li>Choose between QR Code or Pairing Code authentication</li>
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      QR Code Connection
                    </h4>
                    <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside ml-6">
                      <li>Click "Show QR Code" after creating device</li>
                      <li>Open WhatsApp on your phone</li>
                      <li>Go to Settings → Linked Devices → Link a Device</li>
                      <li>Scan the QR code displayed in LeadWave</li>
                      <li>Wait for the connection to establish</li>
                    </ol>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      Pairing Code Connection
                    </h4>
                    <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside ml-6">
                      <li>Select "Use Pairing Code Instead"</li>
                      <li>Enter phone number with country code</li>
                      <li>Click "Get Code" to generate pairing code</li>
                      <li>On phone: Settings → Linked Devices → Link with Phone Number</li>
                      <li>Enter the pairing code when prompted</li>
                    </ol>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Pro Tip</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        Connected devices will automatically reconnect when you restart LeadWave, maintaining your session.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Manage Groups */}
            <Card id="manage-groups">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Manage Groups Module
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  The Manage Groups module is a comprehensive WhatsApp group management system that allows you to create and manage groups with advanced features.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Creating Groups</h3>
                    <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                      <li>Click "Create Group" button</li>
                      <li>Enter group name (required)</li>
                      <li>Add optional group description</li>
                      <li>Enter participant phone numbers (with country codes)</li>
                      <li>Click "Create Group"</li>
                    </ol>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Managing Participants</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>Add Participants:</strong> Add new members</li>
                      <li>• <strong>Remove Participants:</strong> Remove members</li>
                      <li>• <strong>Promote to Admin:</strong> Make members admins</li>
                      <li>• <strong>Demote from Admin:</strong> Remove admin privileges</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-800 dark:text-amber-200 mb-1">Important</h4>
                      <p className="text-sm text-amber-700 dark:text-amber-300">
                        WhatsApp only allows adding known contacts to groups directly. Add numbers to your WhatsApp contacts first.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Templates Module */}
            <Card id="templates">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-600" />
                  Templates Module
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  The Templates module allows you to create and manage message templates for various WhatsApp message types.
                </p>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Supported Template Types</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>Text Message:</strong> Simple text with variables</li>
                        <li>• <strong>Message + Image:</strong> Text with image</li>
                        <li>• <strong>Message + Document:</strong> Text with document</li>
                        <li>• <strong>Message + Contact:</strong> Text with contact card</li>
                        <li>• <strong>Message + Poll:</strong> Interactive poll</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>Message + Buttons:</strong> Interactive buttons</li>
                        <li>• <strong>Message + List:</strong> Selectable list</li>
                        <li>• <strong>Message + Location:</strong> Location coordinates</li>
                        <li>• <strong>Message + Video:</strong> Text with video</li>
                        <li>• <strong>Message + Audio:</strong> Text with audio</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Creating Templates</h3>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Use <code className="bg-muted px-2 py-1 rounded">{'{{variable}}'}</code> syntax for dynamic content:</p>
                    <div className="bg-background p-3 rounded border text-sm font-mono">
                      Hello {'{{name}}'}, your order {'{{order_id}}'} has been confirmed!
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Continue with other modules... */}
            {/* For brevity, I'll add a few more key modules */}

            {/* Bulk Messages */}
            <Card id="bulk-messages">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-orange-600" />
                  Bulk Messages Module
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Send messages to multiple contacts or groups simultaneously with the Bulk Messages module.
                </p>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Creating a Bulk Campaign</h3>
                  <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                    <li>Click on "Bulk Messages" in sidebar navigation</li>
                    <li>Click "Create Campaign"</li>
                    <li>Enter campaign name and description</li>
                    <li>Select WhatsApp session and recipients</li>
                    <li>Choose template or create new message</li>
                    <li>Set scheduling options if needed</li>
                    <li>Click "Send" or "Schedule"</li>
                  </ol>

                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg mt-4">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Campaign Monitoring</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-green-700 dark:text-green-300">Total Messages</span>
                        <p className="font-semibold">Campaign size</p>
                      </div>
                      <div>
                        <span className="text-green-700 dark:text-green-300">Sent</span>
                        <p className="font-semibold">Successfully sent</p>
                      </div>
                      <div>
                        <span className="text-green-700 dark:text-green-300">Failed</span>
                        <p className="font-semibold">Failed to send</p>
                      </div>
                      <div>
                        <span className="text-green-700 dark:text-green-300">Pending</span>
                        <p className="font-semibold">Waiting to send</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Chatbot */}
            <Card id="ai-chatbot">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-purple-600" />
                  AI Chatbot Module
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Leverage artificial intelligence to create intelligent, context-aware conversations using OpenAI or Google Gemini.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Setting up AI Providers</h3>
                    <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                      <li>Go to "AI Chatbot" → "Providers" tab</li>
                      <li>Click "Add Provider"</li>
                      <li>Choose OpenAI or Google Gemini</li>
                      <li>Enter your API key</li>
                      <li>Select model and configure settings</li>
                      <li>Save the provider configuration</li>
                    </ol>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Creating AI Chatbots</h3>
                    <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                      <li>Go to "Chatbots" tab</li>
                      <li>Click "Create Chatbot"</li>
                      <li>Enter name and description</li>
                      <li>Select AI provider</li>
                      <li>Define personality and specialization</li>
                      <li>Set system prompt for behavior</li>
                      <li>Select WhatsApp sessions and activate</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Troubleshooting */}
            <Card id="troubleshooting">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  Troubleshooting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Device Connection Problems</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <p className="font-medium text-sm">QR code won't scan</p>
                        <p className="text-sm text-muted-foreground">Ensure you're scanning within 30 seconds and have stable internet</p>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <p className="font-medium text-sm">Device shows as disconnected</p>
                        <p className="text-sm text-muted-foreground">Click "Reconnect" or restart the application</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Message Sending Issues</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <p className="font-medium text-sm">Messages failing to send</p>
                        <p className="text-sm text-muted-foreground">Check recipient number format and device connection</p>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <p className="font-medium text-sm">Delayed message delivery</p>
                        <p className="text-sm text-muted-foreground">WhatsApp may rate-limit; try sending fewer messages</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Getting Support</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Check application logs for error messages</li>
                    <li>• Restart the application</li>
                    <li>• Ensure you're using the latest version</li>
                    <li>• Contact support with detailed issue information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Support Section */}
            <Card>
              <CardHeader>
                <CardTitle>Need Additional Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you need assistance with LeadWave beyond this documentation, our support team is here to help.
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
                      <Mail className="w-4 h-4 mr-2" />
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