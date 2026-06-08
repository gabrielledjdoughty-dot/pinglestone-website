import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Pinglestone Barn',
}

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-cream pt-40 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-cormorant font-light text-5xl text-charcoal mb-12">
          Privacy Policy
        </h1>
        <div className="space-y-6 font-jost font-light leading-relaxed text-charcoal">

          <h2 className="font-cormorant font-light text-2xl text-charcoal">
            Data Controller
          </h2>
          <p>
            Dave Wakeham, Pinglestone Farm, Old Alresford, Hampshire, SO24 9TB.
            Email: dw@pinglestone.com.
          </p>

          <h2 className="font-cormorant font-light text-2xl text-charcoal">
            Data We Collect
          </h2>
          <p>
            When you submit an enquiry through our contact form, we collect your
            name, your partner&rsquo;s name, email address, approximate wedding
            date, and any message you include. This data is used solely to
            respond to your enquiry.
          </p>

          <h2 className="font-cormorant font-light text-2xl text-charcoal">
            How We Use Your Data
          </h2>
          <p>
            Your enquiry data is emailed to us via Resend (resend.com) and is
            not stored in any database. We do not share your data with third
            parties except as necessary to deliver this service.
          </p>

          <h2 className="font-cormorant font-light text-2xl text-charcoal">
            WhatsApp &amp; Meta
          </h2>
          <p>
            If you contact us via WhatsApp, your messages are processed by
            Meta Platforms Inc. under their own privacy policy. We recommend
            reviewing Meta&rsquo;s privacy policy at meta.com/privacy.
          </p>

          <h2 className="font-cormorant font-light text-2xl text-charcoal">
            Cookies
          </h2>
          <p>
            This website uses a single cookie-consent preference stored in
            your browser&rsquo;s localStorage. No analytics cookies are set
            at launch.
          </p>

          <h2 className="font-cormorant font-light text-2xl text-charcoal">
            Your Rights
          </h2>
          <p>
            You have the right to access, rectify, or erase your personal data.
            Contact us at dw@pinglestone.com.
          </p>

          <p className="text-sm text-stone">© Pinglestone 2026</p>
        </div>
      </div>
    </section>
  )
}
