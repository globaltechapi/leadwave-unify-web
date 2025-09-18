import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, FileCheck, Scale, AlertTriangle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
              <Scale className="w-5 h-5 text-primary" />
              <h1 className="text-2xl font-bold">Terms of Service</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Card className="shadow-lg border-0 bg-background/50 backdrop-blur">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileCheck className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-3xl mb-2">Terms of Service</CardTitle>
            <p className="text-muted-foreground">
              Last updated: December 2024
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your use of LeadWave Desktop Application ("the Application," "we," "our," or "us"). By downloading, installing, or using our application, you agree to be bound by these Terms.
              </p>
            </section>

            <Separator />

            {/* License */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">License Grant</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable license to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Install and use the LeadWave Desktop Application for your business automation needs</li>
                  <li>Access and use the features included in your purchased plan</li>
                  <li>Receive updates and support as specified in your license agreement</li>
                </ul>
              </div>
            </section>

            <Separator />

            {/* Acceptable Use */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Acceptable Use Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to use LeadWave responsibly and in compliance with all applicable laws. You must not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Use the application for spam, harassment, or illegal activities</li>
                <li>Violate WhatsApp's Terms of Service or any third-party platform policies</li>
                <li>Attempt to reverse engineer, modify, or distribute the application</li>
                <li>Share your license key with unauthorized users</li>
                <li>Use the application to send malicious content or malware</li>
                <li>Exceed reasonable usage limits that may impact service performance</li>
              </ul>
            </section>

            <Separator />

            {/* Payment Terms */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Payment and Refunds</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Payment</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>One-time purchase provides lifetime access to the application</li>
                    <li>Subscription plans are billed according to the selected duration</li>
                    <li>All payments are processed securely through our payment partners</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Refunds</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We offer a 2-day trial period for evaluation. Refunds may be considered on a case-by-case basis for technical issues that cannot be resolved. Digital products are generally non-refundable after the trial period.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Disclaimers */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Disclaimers and Limitations</h2>
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
                <div className="space-y-3">
                  <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">Important Disclaimers:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-amber-700 dark:text-amber-300 ml-4">
                    <li>The application is provided "as is" without warranties of any kind</li>
                    <li>We are not responsible for WhatsApp policy changes that may affect functionality</li>
                    <li>Users are responsible for compliance with WhatsApp's Terms of Service</li>
                    <li>We do not guarantee message delivery or account security</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* Intellectual Property */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                LeadWave and all related trademarks, logos, and intellectual property are owned by us. You may not use our intellectual property without express written permission. The application is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <Separator />

            {/* Termination */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your license immediately, without prior notice, for conduct that violates these Terms or is harmful to other users, us, or third parties. Upon termination, your right to use the application ceases immediately.
              </p>
            </section>

            <Separator />

            {/* Contact */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p><strong>Email:</strong> technovedit@gmail.com</p>
                <p><strong>WhatsApp:</strong> +91 72619 02348</p>
                <p><strong>Location:</strong> Mumbai, Maharashtra, India</p>
              </div>
            </section>

            <Separator />

            {/* Changes */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of material changes via email or application notification. Your continued use of the application after changes constitutes acceptance of the updated Terms.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;