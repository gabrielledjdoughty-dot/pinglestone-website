import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Pinglestone Barn',
}

export default function TermsPage() {
  return (
    <section className="bg-cream pt-40 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-cormorant font-light text-5xl text-charcoal mb-12">
          Terms &amp; Conditions
        </h1>
        <div className="space-y-6 font-jost font-light leading-relaxed text-charcoal">

          <h2 className="font-cormorant font-light text-2xl">Bookings</h2>
          <p>
            A booking is confirmed upon receipt of a signed contract and deposit.
            Full terms are provided in your booking agreement.
          </p>

          <h2 className="font-cormorant font-light text-2xl">
            Cancellation
          </h2>
          <p>
            Cancellation terms are set out in your individual booking contract.
            Please contact us directly if you need to discuss your booking.
          </p>

          <h2 className="font-cormorant font-light text-2xl">Venue Rules</h2>
          <p>
            Music must finish by 11pm. Fireworks and Chinese lanterns are not
            permitted on site. Smoking is permitted in designated outdoor areas
            only.
          </p>

          <h2 className="font-cormorant font-light text-2xl">
            Civil Ceremonies
          </h2>
          <p>
            Pinglestone does not hold a civil ceremony licence. Couples
            wishing to have a legally binding ceremony must arrange this
            separately with their local register office.
          </p>

          <h2 className="font-cormorant font-light text-2xl">Liability</h2>
          <p>
            Pinglestone Farm accepts no liability for loss, damage or injury
            except where caused by our own negligence. Couples are advised to
            take out wedding insurance.
          </p>

          <p className="text-sm text-stone">© Pinglestone 2026</p>
        </div>
      </div>
    </section>
  )
}
