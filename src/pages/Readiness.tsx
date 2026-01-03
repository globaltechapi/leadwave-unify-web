import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ArrowLeft,
  AlertTriangle,
  Shield,
  Rocket,
  Settings,
  Lock,
  Play,
  FileCheck,
  MessageCircle,
  ExternalLink,
  Users,
  Zap,
  Target,
  Ban,
  Info,
  Package,
  Key,
  UserPlus,
  Palette
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const steps = [
  { id: 1, title: 'Your Goal', icon: Target },
  { id: 2, title: 'How It Works', icon: Settings },
  { id: 3, title: 'Safety Info', icon: Shield },
  { id: 4, title: 'Features', icon: Zap },
  { id: 5, title: 'Limitations', icon: AlertTriangle },
  { id: 6, title: 'Licensing', icon: Lock },
  { id: 7, title: 'Included', icon: Package },
  { id: 8, title: 'Not For You', icon: Ban },
  { id: 9, title: 'Perfect Fit', icon: Users },
  { id: 10, title: 'Resources', icon: Play },
  { id: 11, title: 'Confirm', icon: FileCheck },
];

const Readiness = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [technicalChecks, setTechnicalChecks] = useState<string[]>([]);
  const [safetyChecks, setSafetyChecks] = useState<string[]>([]);
  const [featureChecks, setFeatureChecks] = useState<string[]>([]);
  const [limitationChecks, setLimitationChecks] = useState<string[]>([]);
  const [licenseType, setLicenseType] = useState<string | null>(null);
  const [finalChecks, setFinalChecks] = useState<string[]>([]);
  const [showDisqualified, setShowDisqualified] = useState(false);

  const progress = (currentStep / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGoalSelect = (goal: string) => {
    setSelectedGoal(goal);
    if (goal === 'C') {
      setShowDisqualified(true);
    } else {
      setShowDisqualified(false);
    }
  };

  const toggleCheck = (value: string, checks: string[], setChecks: (checks: string[]) => void) => {
    if (checks.includes(value)) {
      setChecks(checks.filter(c => c !== value));
    } else {
      setChecks([...checks, value]);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedGoal && selectedGoal !== 'C';
      case 2:
        return technicalChecks.length >= 3;
      case 3:
        return safetyChecks.length >= 4;
      case 4:
        return featureChecks.length >= 1;
      case 5:
        return limitationChecks.length >= 5;
      case 6:
        return licenseType !== null;
      case 11:
        return finalChecks.length >= 4;
      default:
        return true;
    }
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = "917261902348";
    const message = encodeURIComponent("Hello! I've completed the readiness guide and I'm ready to proceed with Lead Wave.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-2">
              <Rocket className="w-4 h-4 mr-2" />
              Buyer Readiness Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Lead Wave – Are You Ready?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read carefully before purchasing. This guide helps you decide if Lead Wave is right for you.
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Step {currentStep} of {steps.length}</span>
              <span className="text-sm text-muted-foreground">{steps[currentStep - 1].title}</span>
            </div>
            <Progress value={progress} className="h-2" />
            
            {/* Step indicators */}
            <div className="flex justify-between mt-4 overflow-x-auto pb-2 pt-1 px-1">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    className={`flex flex-col items-center min-w-[60px] cursor-pointer transition-all ${
                      step.id === currentStep 
                        ? 'text-primary scale-110' 
                        : step.id < currentStep 
                        ? 'text-green-500' 
                        : 'text-muted-foreground'
                    }`}
                    onClick={() => step.id <= currentStep && setCurrentStep(step.id)}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 ${
                      step.id === currentStep 
                        ? 'bg-primary/20 ring-2 ring-primary' 
                        : step.id < currentStep 
                        ? 'bg-green-500/20' 
                        : 'bg-muted'
                    }`}>
                      {step.id < currentStep ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </div>
                    <span className="text-xs text-center hidden md:block">{step.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step 1: Goal Selection */}
              {currentStep === 1 && (
                <Card className="border-0 shadow-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">🧩 What Are You Looking For?</CardTitle>
                    <CardDescription>Choose the option that best describes you</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { id: 'A', text: 'I want bulk messaging & automation at low cost', icon: '💰' },
                      { id: 'B', text: 'I want WhatsApp automation but understand risks', icon: '⚡' },
                      { id: 'C', text: 'I want 100% official WhatsApp API', icon: '🏢' },
                      { id: 'D', text: "I'm exploring and comparing tools", icon: '🔍' },
                    ].map((option) => (
                      <motion.div
                        key={option.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleGoalSelect(option.id)}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedGoal === option.id
                            ? option.id === 'C'
                              ? 'border-destructive bg-destructive/10'
                              : 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-2xl">{option.icon}</span>
                          <span className="font-medium">{option.text}</span>
                          {selectedGoal === option.id && (
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="ml-auto"
                            >
                              {option.id === 'C' ? (
                                <XCircle className="w-6 h-6 text-destructive" />
                              ) : (
                                <CheckCircle2 className="w-6 h-6 text-primary" />
                              )}
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    ))}

                    {showDisqualified && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 p-6 bg-destructive/10 border border-destructive/30 rounded-xl"
                      >
                        <div className="flex items-start gap-4">
                          <XCircle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-lg font-bold text-destructive mb-2">Lead Wave is NOT for you.</h3>
                            <p className="text-muted-foreground mb-4">
                              If you need 100% official WhatsApp API, please explore Meta Official WhatsApp Cloud API solutions.
                            </p>
                            <Button variant="outline" asChild>
                              <a href="https://developers.facebook.com/docs/whatsapp/cloud-api" target="_blank" rel="noopener noreferrer">
                                Explore Meta WhatsApp API <ExternalLink className="ml-2 w-4 h-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {selectedGoal && selectedGoal !== 'C' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 p-6 bg-green-500/10 border border-green-500/30 rounded-xl"
                      >
                        <div className="flex items-center gap-4">
                          <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-bold text-green-600 dark:text-green-400">Great! Continue to next step.</h3>
                            <p className="text-muted-foreground">You may be a good fit for Lead Wave.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Technical Reality */}
              {currentStep === 2 && (
                <Card className="border-0 shadow-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Settings className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">⚙️ How Lead Wave Works (Technical Reality)</CardTitle>
                    <CardDescription>Select what you understand (minimum 3)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { id: 'baileys', text: 'Lead Wave uses Baileys (WhatsApp Web reverse-engineered library)' },
                      { id: 'qr', text: 'It connects via QR code scanning' },
                      { id: 'web', text: 'It behaves similar to WhatsApp Web' },
                      { id: 'meta', text: 'It is NOT affiliated with Meta / WhatsApp' },
                    ].map((item) => (
                      <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.01 }}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          technicalChecks.includes(item.id)
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => toggleCheck(item.id, technicalChecks, setTechnicalChecks)}
                      >
                        <div className="flex items-center gap-4">
                          <Checkbox 
                            checked={technicalChecks.includes(item.id)}
                            className="w-5 h-5"
                          />
                          <span className="font-medium">{item.text}</span>
                        </div>
                      </motion.div>
                    ))}

                    <div className="mt-6 p-4 bg-secondary/10 border border-secondary/30 rounded-xl">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-secondary">📌 Important:</p>
                          <p className="text-muted-foreground">Lead Wave does NOT use the Official WhatsApp Business API.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Safety Information */}
              {currentStep === 3 && (
                <Card className="border-0 shadow-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                      <Shield className="w-8 h-8 text-destructive" />
                    </div>
                    <CardTitle className="text-2xl">⚠️ Number Safety & Blocking</CardTitle>
                    <CardDescription>Please acknowledge the following truths (minimum 4)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { id: 'bulk', text: 'WhatsApp does not allow bulk messaging' },
                      { id: 'official', text: 'Blocking can happen even with official APIs' },
                      { id: 'risk', text: 'Unofficial APIs have higher risk' },
                      { id: 'guarantee', text: 'No software can guarantee zero blocking' },
                      { id: 'behavior', text: 'Message content & sending behavior matter' },
                    ].map((item) => (
                      <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.01 }}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          safetyChecks.includes(item.id)
                            ? 'border-destructive bg-destructive/10'
                            : 'border-border hover:border-destructive/50'
                        }`}
                        onClick={() => toggleCheck(item.id, safetyChecks, setSafetyChecks)}
                      >
                        <div className="flex items-center gap-4">
                          <Checkbox 
                            checked={safetyChecks.includes(item.id)}
                            className="w-5 h-5 border-destructive data-[state=checked]:bg-destructive"
                          />
                          <span className="font-medium">{item.text}</span>
                        </div>
                      </motion.div>
                    ))}

                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                        <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">✅ What Lead Wave DOES:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Provides tools, not immunity</li>
                          <li>• Helps with delays</li>
                          <li>• Number filtering</li>
                          <li>• Campaign controls</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-xl">
                        <h4 className="font-bold text-destructive mb-2">❌ What Lead Wave does NOT do:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Guarantee number safety</li>
                          <li>• Bypass WhatsApp rules</li>
                          <li>• Prevent bans permanently</li>
                        </ul>
                      </div>
                    </div>

                    <div className="p-4 bg-destructive/20 border-2 border-destructive rounded-xl text-center">
                      <p className="font-bold text-destructive">➡️ If you expect "no blocking" → Do NOT buy</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Features */}
              {currentStep === 4 && (
                <Card className="border-0 shadow-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">🧠 Features You Can Expect</CardTitle>
                    <CardDescription>Select what you need (at least 1)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { id: 'bulk', text: 'Bulk message sending', icon: '📤' },
                        { id: 'grab', text: 'Group & contact grabbing', icon: '👥' },
                        { id: 'schedule', text: 'Campaign scheduling', icon: '📅' },
                        { id: 'interactive', text: 'Buttons, lists, polls', icon: '🎛️' },
                        { id: 'chat', text: 'Live chat (basic CRM)', icon: '💬' },
                        { id: 'cloud', text: 'Cloud-based licensing', icon: '☁️' },
                        { id: 'desktop', text: 'Desktop application (Windows)', icon: '🖥️' },
                      ].map((item) => (
                        <motion.div
                          key={item.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            featureChecks.includes(item.id)
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                          onClick={() => toggleCheck(item.id, featureChecks, setFeatureChecks)}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{item.icon}</span>
                            <span className="font-medium">{item.text}</span>
                            {featureChecks.includes(item.id) && (
                              <CheckCircle2 className="w-5 h-5 text-primary ml-auto" />
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-secondary/10 border border-secondary/30 rounded-xl">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-secondary">📌 Note:</p>
                          <p className="text-muted-foreground text-sm">
                            Interactive message types depend on WhatsApp's backend and may stop working temporarily after major updates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 5: Limitations */}
              {currentStep === 5 && (
                <Card className="border-0 shadow-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                      <AlertTriangle className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl">🚫 Limitations You Must Accept</CardTitle>
                    <CardDescription>You must agree to ALL below to proceed</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { id: 'updates', text: 'WhatsApp updates can break features' },
                      { id: 'downtime', text: 'Downtime may occur after Meta changes' },
                      { id: 'bugs', text: 'Some bugs depend on Baileys updates' },
                      { id: 'fixes', text: 'Fixes may take time' },
                      { id: 'sla', text: 'This is not enterprise SaaS with SLAs' },
                    ].map((item) => (
                      <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.01 }}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          limitationChecks.includes(item.id)
                            ? 'border-secondary bg-secondary/10'
                            : 'border-border hover:border-secondary/50'
                        }`}
                        onClick={() => toggleCheck(item.id, limitationChecks, setLimitationChecks)}
                      >
                        <div className="flex items-center gap-4">
                          <Checkbox 
                            checked={limitationChecks.includes(item.id)}
                            className="w-5 h-5 border-secondary data-[state=checked]:bg-secondary"
                          />
                          <span className="font-medium">{item.text}</span>
                        </div>
                      </motion.div>
                    ))}

                    <div className={`mt-4 p-4 rounded-xl text-center font-bold ${
                      limitationChecks.length >= 5 
                        ? 'bg-green-500/20 text-green-600 dark:text-green-400 border-2 border-green-500'
                        : 'bg-secondary/20 text-secondary border-2 border-secondary'
                    }`}>
                      {limitationChecks.length >= 5 
                        ? '✅ All limitations accepted!' 
                        : `➡️ Accept all ${5 - limitationChecks.length} remaining to continue`
                      }
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 6: Licensing */}
              {currentStep === 6 && (
                <Card className="border-0 shadow-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Lock className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">🔐 Licensing & Purchase Policy</CardTitle>
                    <CardDescription>Choose where you are buying from</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                          licenseType === 'codecanyon'
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => setLicenseType('codecanyon')}
                      >
                        <div className="text-center">
                          <span className="text-3xl mb-3 block">🛒</span>
                          <h3 className="font-bold text-lg mb-2">Codecanyon</h3>
                          <ul className="text-sm text-muted-foreground space-y-1 text-left">
                            <li>✔ Purchase code required</li>
                            <li>✔ License validation via cloud system</li>
                            <li>✔ Updates included as per policy</li>
                          </ul>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                          licenseType === 'official'
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => setLicenseType('official')}
                      >
                        <div className="text-center">
                          <span className="text-3xl mb-3 block">🌐</span>
                          <h3 className="font-bold text-lg mb-2">Official Website</h3>
                          <ul className="text-sm text-muted-foreground space-y-1 text-left">
                            <li>✔ Direct license</li>
                            <li>✔ Faster support</li>
                            <li>✔ Branding options available</li>
                          </ul>
                        </div>
                      </motion.div>
                    </div>

                    <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-xl">
                      <h4 className="font-bold text-destructive mb-2">📌 Cracked / nulled versions:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                        <span className="flex items-center gap-1"><XCircle className="w-4 h-4 text-destructive" /> Unsafe</span>
                        <span className="flex items-center gap-1"><XCircle className="w-4 h-4 text-destructive" /> No updates</span>
                        <span className="flex items-center gap-1"><XCircle className="w-4 h-4 text-destructive" /> No support</span>
                        <span className="flex items-center gap-1"><XCircle className="w-4 h-4 text-destructive" /> High ban risk</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 7: Purchase Inclusion */}
              {currentStep === 7 && (
                <Card className="border-0 shadow-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Package className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">📦 What's Included in Your Purchase</CardTitle>
                    <CardDescription>Everything you get with Lead Wave</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Main Application */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="p-5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Rocket className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">Main Application & Cloud Based Licensing</h3>
                            <p className="text-muted-foreground text-sm">Full access to Lead Wave desktop application with cloud-based license management system.</p>
                          </div>
                        </div>
                      </motion.div>

                      {/* License System */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-5 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl border border-secondary/20"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Key className="w-6 h-6 text-secondary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">Credentials</h3>
                            <p className="text-muted-foreground text-sm mb-2">
                              A user ID will be created on our license system where you can manage everything.
                            </p>
                            <a 
                              href="https://license.getleadwave.in/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-primary hover:underline text-sm font-medium"
                            >
                              license.getleadwave.in <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Reseller Capabilities */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="p-5 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl border border-green-500/20"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <UserPlus className="w-6 h-6 text-green-500" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">Create Unlimited End User Licenses</h3>
                            <p className="text-muted-foreground text-sm">As a reseller, you can create end user licenses with no restrictions.</p>
                            <div className="mt-3 space-y-2">
                              <div className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>No limit on license creation</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <XCircle className="w-4 h-4 text-destructive" />
                                <span>Cannot generate reseller accounts</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Rebranding Option */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-5 bg-gradient-to-br from-amber-500/10 to-amber-500/5 rounded-xl border border-amber-500/20"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Palette className="w-6 h-6 text-amber-500" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">Rebranding Option</h3>
                            <p className="text-muted-foreground text-sm mb-2">Want your own brand on the application?</p>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/20 rounded-lg">
                              <span className="font-bold text-amber-600 dark:text-amber-400">+ ₹5,000 INR</span>
                              <span className="text-sm text-muted-foreground">additional</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 8: Who Should NOT Buy */}
              {currentStep === 8 && (
                <Card className="border-0 shadow-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                      <Ban className="w-8 h-8 text-destructive" />
                    </div>
                    <CardTitle className="text-2xl">🧪 Who Should NOT Buy Lead Wave</CardTitle>
                    <CardDescription>Lead Wave is NOT recommended if any of these apply to you</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        'You expect lifetime zero-risk automation',
                        'You plan spam campaigns',
                        'You want Meta approval guarantees',
                        'You need WhatsApp to behave like email',
                        'You want responsibility transferred to developer',
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 bg-destructive/10 border border-destructive/30 rounded-xl flex items-center gap-3"
                        >
                          <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-muted-foreground">If any of these apply to you, please reconsider your purchase.</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 9: Who SHOULD Buy */}
              {currentStep === 9 && (
                <Card className="border-0 shadow-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-8 h-8 text-green-500" />
                    </div>
                    <CardTitle className="text-2xl">✅ Who SHOULD Buy Lead Wave</CardTitle>
                    <CardDescription>Lead Wave IS suitable if these apply to you</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        'You understand unofficial APIs',
                        'You accept technical limitations',
                        'You prefer one-time cost over expensive official APIs',
                        'You are okay experimenting responsibly',
                        'You want control over your campaigns',
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-green-600 dark:text-green-400 font-semibold">
                        If these describe you, Lead Wave could be a great tool for your business!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 10: Resources */}
              {currentStep === 10 && (
                <Card className="border-0 shadow-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Play className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">📺 Demo & Resources</CardTitle>
                    <CardDescription>Before purchasing, we strongly recommend:</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <motion.a
                        href="https://www.youtube.com/watch?v=r8fV04q0DMc&list=PLRadeKtCZTrw2gMtU8Lhr3P1nGN6agYJe"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 text-center cursor-pointer block"
                      >
                        <Play className="w-10 h-10 text-primary mx-auto mb-3" />
                        <h3 className="font-bold mb-2">Watch Demo Videos</h3>
                        <p className="text-sm text-muted-foreground">See Lead Wave in action</p>
                      </motion.a>

                      <Link to="/#pricing">
                        <motion.div
                          whileHover={{ scale: 1.02, y: -5 }}
                          className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl border border-secondary/20 text-center cursor-pointer h-full"
                        >
                          <Zap className="w-10 h-10 text-secondary mx-auto mb-3" />
                          <h3 className="font-bold mb-2">View Pricing</h3>
                          <p className="text-sm text-muted-foreground">See our pricing plans</p>
                        </motion.div>
                      </Link>

                      <motion.a
                        href="https://getleadwave.in/LeadWave.exe"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl border border-green-500/20 text-center cursor-pointer block"
                      >
                        <Rocket className="w-10 h-10 text-green-500 mx-auto mb-3" />
                        <h3 className="font-bold mb-2">Test Trial Version</h3>
                        <p className="text-sm text-muted-foreground">Download and try it now</p>
                      </motion.a>
                    </div>

                    <div className="mt-6 p-4 bg-muted rounded-xl text-center">
                      <p className="text-muted-foreground">
                        If you have read everything above and still have questions, you may contact support.
                      </p>
                      <Button variant="outline" className="mt-3" onClick={handleWhatsAppContact}>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contact Support
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 11: Final Confirmation */}
              {currentStep === 11 && (
                <Card className="border-0 shadow-card overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-primary via-secondary to-green-500" />
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4">
                      <FileCheck className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">🧾 Final Confirmation</CardTitle>
                    <CardDescription className="text-destructive font-semibold">Very Important - Please confirm before proceeding</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { id: 'api', text: 'I understand Lead Wave uses an unofficial API' },
                      { id: 'blocking', text: 'I understand number blocking is possible' },
                      { id: 'developer', text: 'I will not hold the developer responsible for WhatsApp policy changes' },
                      { id: 'limitations', text: 'I have read and accepted all limitations' },
                    ].map((item) => (
                      <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.01 }}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          finalChecks.includes(item.id)
                            ? 'border-green-500 bg-green-500/10'
                            : 'border-border hover:border-green-500/50'
                        }`}
                        onClick={() => toggleCheck(item.id, finalChecks, setFinalChecks)}
                      >
                        <div className="flex items-center gap-4">
                          <Checkbox 
                            checked={finalChecks.includes(item.id)}
                            className="w-5 h-5 border-green-500 data-[state=checked]:bg-green-500"
                          />
                          <span className="font-medium">{item.text}</span>
                        </div>
                      </motion.div>
                    ))}

                    {finalChecks.length >= 4 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-8 text-center"
                      >
                        <div className="inline-block p-6 bg-gradient-to-br from-green-500/20 to-primary/20 rounded-2xl border-2 border-green-500">
                          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                          <h3 className="text-2xl font-bold mb-2">You're Ready! 🎉</h3>
                          <p className="text-muted-foreground mb-4">
                            You understand what Lead Wave offers and its limitations.
                          </p>
                          <Button 
                            size="lg" 
                            className="bg-green-500 hover:bg-green-600 text-white"
                            onClick={handleWhatsAppContact}
                          >
                            <CheckCircle2 className="w-5 h-5 mr-2" />
                            I Understand & Want to Proceed
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            {currentStep < steps.length ? (
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="gap-2"
              >
                Next Step
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button asChild variant="outline">
                <Link to="/">
                  Back to Home
                </Link>
              </Button>
            )}
          </div>

          {/* Why This Works Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20"
          >
            <h3 className="text-xl font-bold mb-4 text-center">🧠 Why This Page Exists</h3>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              {[
                { icon: '🎯', text: 'Filters 90% unnecessary chats' },
                { icon: '📚', text: 'Educates before selling' },
                { icon: '💰', text: 'Reduces refunds' },
                { icon: '⚖️', text: 'Sets legal & ethical boundaries' },
                { icon: '🤝', text: 'Makes buyers accountable' },
              ].map((item, index) => (
                <div key={index} className="p-3">
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Readiness;
