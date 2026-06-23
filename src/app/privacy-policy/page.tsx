import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Concrete Pros Of Prosper',
  description: 'Privacy policy for Concrete Pros Of Prosper. How we collect, use, and protect your information.',
  alternates: { canonical: 'https://concreteprosofprosper.com/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold font-display text-primary mb-8">Privacy Policy</h1>
      <p className="text-sm text-mid font-body mb-8">Effective Date: January 1, 2024</p>

      <div className="prose prose-lg max-w-none font-body text-mid space-y-6">
        <p>
          Concrete Pros Of Prosper (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website at concreteprosofprosper.com or contact us through our online form.
        </p>

        <h2 className="text-2xl font-semibold font-display text-primary mt-10">Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide through our contact form, including your full name, phone number, email address, community or neighborhood, the type of service you need, and a description of your project. We do not collect information passively through tracking pixels, advertising cookies, or similar surveillance technologies.
        </p>

        <h2 className="text-2xl font-semibold font-display text-primary mt-10">How We Use Your Information</h2>
        <p>
          The information you submit is used solely to respond to your service inquiry, prepare estimates, and communicate with you about your concrete project. We do not sell, rent, trade, or share your personal information with third parties for marketing purposes. Your information may be shared only with members of our internal team who need it to respond to your inquiry.
        </p>

        <h2 className="text-2xl font-semibold font-display text-primary mt-10">Cookies and Tracking</h2>
        <p>
          Our website does not use advertising or tracking cookies. We may use standard session cookies strictly necessary for website functionality. We may use Google Analytics with anonymized IP addresses to understand general website traffic patterns. Google Analytics does not collect personally identifiable information through our implementation.
        </p>

        <h2 className="text-2xl font-semibold font-display text-primary mt-10">Data Retention</h2>
        <p>
          We retain contact form submissions and related inquiry data for up to 12 months from the date of submission. After this period, your data is permanently deleted from our systems. If your inquiry results in a contracted project, relevant records may be retained longer as required for business and legal purposes.
        </p>

        <h2 className="text-2xl font-semibold font-display text-primary mt-10">Your Rights</h2>
        <p>
          You have the right to request access to, correction of, or deletion of your personal information at any time. To make such a request, please email us at{' '}
          <a href="mailto:info@concreteprosofprosper.com" className="text-accent hover:text-accent-dark">info@concreteprosofprosper.com</a>{' '}
          with the subject line &ldquo;Privacy Request.&rdquo; We will respond to your request within 30 days.
        </p>

        <h2 className="text-2xl font-semibold font-display text-primary mt-10">Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites, such as social media platforms or review sites. We are not responsible for the privacy practices of those sites and encourage you to review their respective privacy policies.
        </p>

        <h2 className="text-2xl font-semibold font-display text-primary mt-10">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Your continued use of the website after any changes constitutes acceptance of the revised policy.
        </p>

        <h2 className="text-2xl font-semibold font-display text-primary mt-10">Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, contact us at{' '}
          <a href="mailto:info@concreteprosofprosper.com" className="text-accent hover:text-accent-dark">info@concreteprosofprosper.com</a>{' '}
          or call <a href="tel:4695359905" className="text-accent hover:text-accent-dark">(469) 535-9905</a>.
        </p>
      </div>
    </div>
  )
}
