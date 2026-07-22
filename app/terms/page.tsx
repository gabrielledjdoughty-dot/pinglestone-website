import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | Pinglestone Barn',
}

export default function TermsPage() {
  return (
    <section className="bg-cream pt-40 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-cormorant font-light text-5xl text-charcoal mb-4">
          Website Terms of Use
        </h1>
        <p className="font-jost font-light text-sm text-stone mb-12">
          Pinglestone Events Ltd
        </p>
        <div className="space-y-6 font-jost font-light leading-relaxed text-charcoal">

          <h2 className="font-cormorant font-light text-2xl text-charcoal">
            1. About Us
          </h2>
          <p>
            This website (pinglestone.com) is operated by Pinglestone Events
            Limited, a company registered in England and Wales whose registered
            office is at Pinglestone Farm, Old Alresford, Hampshire, SO24 9TB.
          </p>
          <p>
            References to &ldquo;we&rdquo;, &ldquo;us&rdquo; or
            &ldquo;our&rdquo; in these terms refer to Pinglestone Events
            Limited.
          </p>

          <h2 className="font-cormorant font-light text-2xl text-charcoal">
            2. Acceptance of Terms
          </h2>
          <p>
            By accessing and using this website, you confirm that you accept
            these terms of use and agree to be bound by them. If you do not
            agree to these terms, you must not use this website.
          </p>
          <p>
            We may update these terms from time to time. The date at the top of
            this page indicates when they were last revised. Continued use of
            the website following any changes constitutes your acceptance of the
            updated terms.
          </p>

          <h2 className="font-cormorant font-light text-2xl text-charcoal">
            3. Use of This Website
          </h2>
          <p>
            This website is provided for general information about Pinglestone
            Events Limited, its wedding venue, accommodation, and associated
            services. It is not intended to constitute a contractual offer.
          </p>
          <p>
            You may use this website only for lawful purposes. You must not use
            it in any way that is unlawful, harmful, or fraudulent, or that
            infringes the rights of any third party.
          </p>
          <p>
            We reserve the right to withdraw or amend any part of this website
            without notice.
          </p>

          <h2 className="font-cormorant font-light text-2xl text-charcoal">
            4. Intellectual Property
          </h2>
          <p>
            All content on this website — including text, photographs, graphics,
            logos, and design — is owned by or licensed to Pinglestone Events
            Limited and is protected by copyright and other intellectual property
            laws.
          </p>
          <p>
            You may not reproduce, distribute, or otherwise use any content from
            this website without our prior written permission, except for
            personal, non-commercial use.
          </p>

          <h2 className="font-cormorant font-light text-2xl text-charcoal">
            5. No Contractual Relationship
          </h2>
          <p>
            Nothing on this website constitutes an offer capable of acceptance,
            nor does it create any contractual relationship between you and
            Pinglestone Events Limited. Any contract for the hire of the venue
            or booking of accommodation will be governed by separate terms and
            conditions provided to you at the time of booking.
          </p>

          <h2 className="font-cormorant font-light text-2xl text-charcoal">
            6. Enquiries and Contact Forms
          </h2>
          <p>
            When you submit an enquiry through our contact form, you consent to
            us using your contact details to respond to your enquiry. We will
            not use your details for marketing purposes without your consent,
            and we will not share them with third parties except where necessary
            to respond to your enquiry (for example, passing on an enquiry to
            our catering partner).
          </p>
          <p>
            For full details of how we handle your personal data, please refer
            to our Privacy Policy.
          </p>

          <h2 className="font-cormorant font-light text-2xl text-charcoal">
            7. Third-Party Links
          </h2>
          <p>
            This website may contain links to third-party websites, including
            our catering partner and wine producer. These links are provided for
            convenience only. We have no control over the content of those
            websites and accept no responsibility for them or for any loss or
            damage that may arise from your use of them.
          </p>

          <h2 className="font-cormorant font-light text-2xl text-charcoal">
            8. Disclaimer of Liability
          </h2>
          <p>
            We make reasonable efforts to ensure the information on this website
            is accurate and up to date, but we make no warranties or
            representations of any kind, express or implied, as to its
            completeness or accuracy.
          </p>
          <p>
            To the fullest extent permitted by law, we exclude all liability for
            any loss or damage arising from your use of this website or reliance
            on any information contained within it. This does not exclude
            liability for death or personal injury caused by our negligence, or
            any other liability that cannot be excluded under English law.
          </p>

          <h2 className="font-cormorant font-light text-2xl text-charcoal">
            9. Governing Law
          </h2>
          <p>
            These terms of use and any dispute arising from your use of this
            website are governed by the laws of England and Wales. The courts of
            England and Wales shall have exclusive jurisdiction to settle any
            such dispute.
          </p>

          <h2 className="font-cormorant font-light text-2xl text-charcoal">
            10. Contact
          </h2>
          <p>
            If you have any questions about these terms, please contact us at:
          </p>
          <p>
            Email: dw@pinglestone.com<br />
            Tel: 07880 883 014<br />
            Pinglestone Farm, Old Alresford, Hampshire, SO24 9TB
          </p>

          <p className="text-sm text-stone">&copy; Pinglestone Events Ltd 2026</p>
        </div>
      </div>
    </section>
  )
}
