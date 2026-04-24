import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose dark:prose-invert max-w-none space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="text-muted-foreground">
            Welcome to InsightFlow. These Terms of Service (&quot;Terms&quot;) govern your use of our website and application 
            (collectively, the &quot;Service&quot;) operated by InsightFlow (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). 
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, 
            then you may not access the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Accounts and Registration</h2>
          <p className="text-muted-foreground">
            When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining 
            the security of your account and password. We cannot and will not be liable for any loss or damage from your failure to 
            comply with this security obligation.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>You must be at least 13 years of age to use our Service</li>
            <li>You are responsible for all activities that occur under your account</li>
            <li>You must notify us immediately of any unauthorized use of your account</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. User Content</h2>
          <p className="text-muted-foreground">
            Our Service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, 
            videos, or other material (&quot;Content&quot;). You are responsible for the Content that you post to our Service, including its legality, reliability, and appropriateness.
          </p>
          <p className="text-muted-foreground">
            By posting Content to our Service, you grant us the right and license to use, modify, publicly display, reproduce, and distribute 
            such Content on our Service. You retain any and all of your rights to the Content you submit, post, or 
            display on or through our Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Prohibited Uses</h2>
          <p className="text-muted-foreground">You may not use our Service:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
            <li>To engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Service</li>
            <li>To attempt to interfere with the proper working of the Service</li>
            <li>To use the Service for any unlawful purpose or to solicit others to unlawful acts</li>
            <li>To violate any of our institutional policies or rules</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
          <p className="text-muted-foreground">
            The Service and its original content, features, and functionality are and will remain the exclusive property of InsightFlow and its licensors. 
            The Service is protected by copyright, trademark, and other laws of both the India and foreign countries.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            In no event shall InsightFlow, nor its directors, employees, partners, agents, suppliers, or affiliates, 
            be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
            loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to 
            or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Changes to Terms</h2>
          <p className="text-muted-foreground">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice 
            of any significant changes. What constitutes a material change will be determined at our sole discretion.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Termination</h2>
          <p className="text-muted-foreground">
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, 
            including without limitation if you breach the Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Governing Law</h2>
          <p className="text-muted-foreground">
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict 
            of law provisions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">10. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms, please contact us at{" "}
            <Link href="mailto:admin@ladestack.in" className="text-primary hover:underline">
              admin@ladestack.in
            </Link>
          </p>
        </section>

        <p className="text-sm text-muted-foreground pt-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  )
}