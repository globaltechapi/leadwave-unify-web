import { useState, useEffect } from "react";
import { MessageCircle, X, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const whatsappNumber = "917261902348";
  const predefinedMessage = "Hi! I'm interested in LeadWave. Can you help me get started?";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(predefinedMessage)}`;
    console.log("Opening WhatsApp URL:", url); // Debug log
    window.open(url, "_blank");
  };

  const handleMainButtonClick = () => {
    // Option 1: Direct WhatsApp redirection
    handleWhatsAppClick();
    // Option 2: Toggle popup (comment out the line above and uncomment below for popup behavior)
    // setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-80 shadow-2xl border-border/50 animate-in slide-in-from-bottom-2 fade-in duration-300">
          <CardContent className="p-0">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">LeadWave Support</h4>
                    <div className="flex items-center gap-1 text-xs text-green-100">
                      <div className="w-2 h-2 bg-green-200 rounded-full animate-pulse"></div>
                      <span>Online now</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 w-8 h-8 p-0"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              <div className="space-y-3">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg rounded-tl-none">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    👋 Hi there! Need help with LeadWave?
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg rounded-tl-none">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    🚀 Get your license code instantly!
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>Typically replies in minutes</span>
              </div>

              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Start WhatsApp Chat
              </Button>

              <div className="text-center">
                <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
                  <Phone className="w-3 h-3" />
                  <span>+91 72619 02348</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Floating Button */}
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        
        {/* Main Button */}
        <Button
          onClick={handleMainButtonClick}
          className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl group transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </Button>

        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce">
          1
        </div>

        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Need help? Chat with us!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppWidget;