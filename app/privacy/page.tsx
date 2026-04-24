import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose dark:prose-invert max-w-none space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="text-muted-foreground">
            At InsightFlow, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
            and safeguard your information when you use our Service. Please read this privacy policy carefully. If you do not agree 
            with the terms of this privacy policy, please do not access the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          
          <h3 className="text-xl font-medium">Personal Data</h3>
          <p className="text-muted-foreground">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Register on the Service</li>
            <li>Express an interest in obtaining information about us or our products and services</li>
            <li>Participate in activities on the Service</li>
            <li>Contact us</li>
          </ul>
          <p className="text-muted-foreground pt-2">
            The personal information that we collect may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Email addresses</li>
            <li>Names</li>
            <li>Phone numbers</li>
            <li>Usernames and passwords</li>
            <li>Business or organization name</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
          <p className="text-muted-foreground">
            We use personal information collected via our Service for a variety of business purposes described below:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>To facilitate account creation and logon process</li>
            <li>To send administrative information to you</li>
            <li>To fulfill and manage your orders</li>
            <li>To post testimonials</li>
            <li>To request feedback and to otherwise contact you about your use of the Service</li>
            <li>To enforce our terms, conditions, and policies</li>
            <li>To respond to legal requests and prevent harm</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Sharing Your Information</h2>
          <p className="text-muted-foreground">
            We may share your information in the following situations:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>With Service Providers:</strong> We may share your information with third-party vendors who assist us in operating the Service.</li>
            <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger, sale of assets, or other business reorganization.</li>
            <li><strong>Legal Obligations:</strong> We may disclose your information where required to do so by law.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Data Security</h2>
          <p className="text-muted-foreground">
            We have implemented appropriate technical and organizational security measures designed to protect 
            the security of any personal information we process. However, despite our safeguards and efforts to 
            secure your information, no electronic transmission over the Internet or information storage technology 
            can be guaranteed to be 100% secure, so we cannot and do not promise or guarantee that hackers, 
            cybercriminals, or other unauthorized third parties will not be able to defeat our security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Your Rights</h2>
          <p className="text-muted-foreground">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Access the personal information we hold about you</li>
            <li>Correct or update any inaccurate personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to processing of your personal information</li>
            <li>Request restriction of processing your personal information</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Data Retention</h2>
          <p className="text-muted-foreground">
            We will only retain your personal information for as long as necessary to fulfill the purposes we collected it for, 
            including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Third-Party Websites</h2>
          <p className="text-muted-foreground">
            Our Service may contain links to third-party websites that are not operated by us. We have no control over and assume 
            no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page and updating the &quot;last updated&quot; date at the top of this Privacy Policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">10. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us at{" "}
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