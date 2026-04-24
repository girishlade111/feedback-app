import Link from "next/link"

export default function CookiePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <p className="text-muted-foreground mb-8">
        This Cookie Policy explains what Cookies are and how We use them. You should read this policy so you can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.
      </p>
      
      <div className="prose dark:prose-invert max-w-none space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. What are Cookies?</h2>
          <p className="text-muted-foreground">
            Cookies are small text files, placed on your computer or mobile device when you visit websites. Many websites use Cookies to help operate their websites and to provide information to the owners of the website.
          </p>
          <p className="text-muted-foreground">
            Cookies allow websites to recognize your device and remember information about your visit, such as your preferred language, login information, and other settings. This can make your next visit easier and the site more useful to you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. How We Use Cookies</h2>
          <p className="text-muted-foreground">
            We use Cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly.</li>
            <li><strong>Functionality Cookies:</strong> These help remember your preferences and personalize content.</li>
            <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website.</li>
            <li><strong>Marketing Cookies:</strong> These are used to display relevant advertisements.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. The Cookies We Set</h2>
          
          <h3 className="text-xl font-medium">Essential Cookies</h3>
          <p className="text-muted-foreground">
            Some cookies are essential to ensure our website works properly. We use essential cookies to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Keep you logged in</li>
            <li>Ensure secure transactions</li>
            <li>Load balanced performance</li>
          </ul>
          
          <h3 className="text-xl font-medium pt-4">Third-Party Cookies</h3>
          <p className="text-muted-foreground">
            We also use third-party cookies from these service providers:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Google Analytics:</strong> For website analytics</li>
            <li><strong>Supabase:</strong> For authentication and database</li>
            <li><strong>Vercel:</strong> For performance monitoring</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Your Choices Regarding Cookies</h2>
          <p className="text-muted-foreground">
            If you prefer to avoid the use of Cookies on our website, you should first disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You can use this option to prevent the use of Cookies at any time.
          </p>
          <p className="text-muted-foreground pt-2">
            Most browsers allow you to refuse or accept cookies. Here&apos;s how to manage cookies in popular browsers:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Chrome:</strong> Settings → Privacy and Security → Clear browsing data</li>
            <li><strong>Firefox:</strong> Options → Privacy & Security</li>
            <li><strong>Safari:</strong> Preferences → Privacy</li>
            <li><strong>Edge:</strong> Settings → Privacy and services</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Cookie List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium">Cookie Name</th>
                  <th className="px-4 py-2 text-left text-sm font-medium">Type</th>
                  <th className="px-4 py-2 text-left text-sm font-medium">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2 text-sm">session_id</td>
                  <td className="px-4 py-2 text-sm">Essential</td>
                  <td className="px-4 py-2 text-sm">Maintains user session</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm">auth_token</td>
                  <td className="px-4 py-2 text-sm">Essential</td>
                  <td className="px-4 py-2 text-sm">Authentication token</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm">_ga</td>
                  <td className="px-4 py-2 text-sm">Analytics</td>
                  <td className="px-4 py-2 text-sm">Google Analytics tracking</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. More Information</h2>
          <p className="text-muted-foreground">
            For more information about cookies, visit{" "}
            <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              All About Cookies
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Cookie Policy, please contact us at{" "}
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