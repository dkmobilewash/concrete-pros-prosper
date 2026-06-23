import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Concrete Pros Of Prosper',
  description: 'Terms of service for Concrete Pros Of Prosper website.',
  alternates: { canonical: 'https://concreteprosofprosper.com/terms-of-service' },
}

export default function TermsOfServicePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold font-display text-primary mb-8">Terms of Service</h1>
      <p className="text-sm text-mid font-body mb-8">Effective Date: January 1, 2024</p>

      <div className="space-y-6 font-body text-mid leading-relaxed">
        <p>
          Welcome to the website of Concrete Pros Of Prosper. By accessing or using our website at concreteprosofprosper.com, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
        </p>

        <h2 className="text-2xl font-semibold font-display text-primary mt-10">Use of Website</h2>
        <p>
          This website is provided for informational purposes only. The content on this site, including text, images, and service descriptions, is intended to provide general information about Concrete Pros Of Prosper and the services we offer. While we strive for accuracy, we make no warranties or representations about the completeness, reliability, or accuracy of the information presented.
        </p>

        <h2 className="text-2xl font-semibold font-display text-primary mt-10">No Contractor-Client Relationship</h2>
        <p>
          Use of this website, including submission of a contact form, does not create a contractor-client relationship. A contractual relationship is formed only through a signed written agreement between you and Concrete Pros Of Prosper that specifies the scope of work, pricing, timeline, and terms.
        </p>

        <h2 className="text-2xl font-semibold font-display text-primary mt-10">Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Concrete Pros Of Prosper shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website. This includes, without limitation, damages for loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages.
        </p>

        <h2 className="text-2xl font-semibold font-display text-primary mt-10">Intellectual Property</h2>
        <p>
          All content on this website — including text, graphics, logos, images, and design elements — is the property of Concrete Pros Of Prosper and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent.
        </p>

        <h2 className="text-2xl font-semibold font-display text-primary mt-10">Governing Law</h2>
        <p>
          These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, without regard to conflict of law principles. Any disputes arising from these terms or your use of this website shall be resolved in the courts of Collin County, Texas.
        </p>

        <h2 className="text-2xl font-semibold font-display text-primary mt-10">Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time without prior notice. Changes will be posted on this page with an updated effective date. Your continued use of the website after any changes constitutes acceptance of the revised terms.
        </p>

        <h2 className="text-2xl font-semibold font-display text-primary mt-10">Contact</h2>
        <p>
          If you have questions about these Terms of Service, please contact us at{' '}
          <a href="mailto:info@concreteprosofprosper.com" className="text-accent hover:text-accent-dark">info@concreteprosofprosper.com</a>.
        </p>
      </div>
    </div>
  )
}
