import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Shield, FileText, Eye, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
              <Shield className="w-5 h-5 text-primary" />
              <h1 className="text-2xl font-bold">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Card className="shadow-lg border-0 bg-background/50 backdrop-blur">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-3xl mb-2">Privacy Policy</CardTitle>
            <p className="text-muted-foreground">
              Last updated: December 2024
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                LeadWave Desktop Application ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our WhatsApp automation desktop application.
              </p>
            </section>

            <Separator />

            {/* Information We Collect */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Information We Collect</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Information You Provide</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>WhatsApp account information for automation purposes</li>
                    <li>Contact lists and message templates you create</li>
                    <li>Purchase information and license details</li>
                    <li>Support communications and feedback</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Application usage statistics and performance data</li>
                    <li>Error logs and crash reports for debugging</li>
                    <li>Device information and system specifications</li>
                    <li>License validation and activation data</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* How We Use Your Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>To provide and maintain the LeadWave application functionality</li>
                <li>To process your WhatsApp automation requests</li>
                <li>To provide customer support and technical assistance</li>
                <li>To improve our application and develop new features</li>
                <li>To validate your license and prevent unauthorized use</li>
                <li>To send important updates and notifications about the service</li>
              </ul>
            </section>

            <Separator />

            {/* Data Security */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is encrypted in transit and at rest, and we regularly update our security practices.
              </p>
            </section>

            <Separator />

            {/* Data Sharing */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy. We may share information:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>With service providers who assist in application functionality</li>
                <li>To comply with legal obligations or valid legal requests</li>
                <li>To protect our rights, property, or safety, or that of others</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <Separator />

            {/* Your Rights */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, update, or delete your personal information. You may also object to certain processing activities. To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <Separator />

            {/* Contact Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p><strong>Email:</strong> technovedit@gmail.com</p>
                <p><strong>WhatsApp:</strong> +91 72619 02348</p>
                <p><strong>Location:</strong> Mumbai, Maharashtra, India</p>
              </div>
            </section>

            <Separator />

            {/* Updates */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Policy Updates
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of the application after any changes constitutes acceptance of the updated policy.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;