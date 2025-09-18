import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, MessageCircle, Key, Play, ArrowRight } from "lucide-react";
import licenseScreen from "@/assets/license-screen.png";

const DemoSection = () => {
  const demoSteps = [
    {
      icon: Download,
      title: "Download & Install",
      description: "Download the LeadWave desktop application file and install it on your computer. The installation process is quick and straightforward."
    },
    {
      icon: Key,
      title: "Get Your License Code",
      description: "After installation, the app will display a unique license code. Copy this code as shown in the screenshot below."
    },
    {
      icon: MessageCircle,
      title: "Share on WhatsApp",
      description: "Send your license code to our WhatsApp number +91 72619 02348. Our team will provide you with an activation key within minutes."
    },
    {
      icon: Play,
      title: "Start Using LeadWave",
      description: "Enter the activation key in the app and start automating your WhatsApp business communications immediately."
    }
  ];

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/917261902348?text=Hi! I would like to get a demo of LeadWave. Here is my license code:", "_blank");
  };

  const handleDownload = () => {
    // This would typically link to the actual download
    alert("Download link will be provided after contact");
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Play className="w-4 h-4" />
            Try LeadWave Now
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            Get Your Free Demo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience LeadWave's powerful automation features firsthand. Follow these simple steps to get started with your free demo today.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {demoSteps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* License Screen Preview */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">What You'll See After Installation</h3>
            <p className="text-muted-foreground">
              The app will display a license screen like this. Simply copy your unique code and send it to us on WhatsApp.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-background border border-border/50 rounded-2xl p-4 shadow-2xl">
                <img 
                  src={licenseScreen} 
                  alt="LeadWave License Screen - Copy your unique license code"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group hover:scale-105 transition-transform"
              onClick={handleDownload}
            >
              <Download className="w-5 h-5 mr-2" />
              Download LeadWave
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group hover:scale-105 transition-transform"
              onClick={handleWhatsAppContact}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact on WhatsApp
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
            <MessageCircle className="w-4 h-4 text-green-500" />
            WhatsApp: +91 72619 02348
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;