import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import Divider from '@/components/ui/Divider'

export const metadata: Metadata = {
  title: 'Louis Pommery England | Pinglestone Barn',
  description:
    'Louis Pommery England is grown on the chalk downlands of Pinglestone Estate, Old Alresford — the first Champagne House to plant vines in England. Vineyard tours, cellar door and more.',
}

const grapeVarieties = [
  'Chardonnay',
  'Pinot Noir',
  'Pinot Meunier',
  'Pinot Gris',
]

export default function LouisPommeryPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="relative pt-40 pb-24 px-6 text-center text-white"
        style={{
          background:
            'linear-gradient(135deg, #5C6B4A 0%, #3D4832 50%, #9B8E7E 100%)',
        }}
      >
        <div className="relative z-10">
          <h1 className="font-cormorant font-light text-5xl md:text-7xl tracking-wide mb-4">
            Louis Pommery England
          </h1>
          <p className="font-jost font-light text-sm text-white/70 tracking-widest uppercase">
            English sparkling wine · Grown on Hampshire chalk
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-content mx-auto">
          <div className="max-w-3xl">
            <Divider />
            <p className="font-jost font-light text-lg leading-relaxed text-charcoal">
              Pinglestone Estate is home to one of England&rsquo;s most exciting
              young vineyards — the fruit of a remarkable partnership between the
              House of Pommery in Champagne and the Pinglestone estate. Established
              in 2017, Louis Pommery England carries the distinction of being the
              first Champagne House to plant vines in England, bringing over 200
              years of heritage to the Hampshire chalk downlands.
            </p>
          </div>
        </div>
      </section>

      {/* The vineyard */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-content mx-auto">
          <div className="max-w-3xl">
            <SectionHeading heading="The Vineyard" />
            <p className="mt-6 font-jost font-light text-lg leading-relaxed text-charcoal">
              Thirty-five hectares of vines sit on Hampshire chalk downland with
              panoramic views across the South Downs National Park and the
              convergence of the River Itchen and River Arle chalk streams below.
              The soils here — deep, free-draining chalk — bear a striking
              resemblance to those of the Côte des Blancs in Champagne, and it is
              this geology that gives the wine its distinctive freshness and
              minerality.
            </p>
            <p className="mt-6 font-jost font-light text-lg leading-relaxed text-charcoal">
              The estate is farmed using regenerative practices, prioritising the
              long-term health of the soil, the surrounding ecosystems, and the
              local landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Grape varieties */}
      <section className="bg-sage-light py-24 px-6">
        <div className="max-w-content mx-auto">
          <div className="max-w-3xl">
            <SectionHeading heading="The Grapes" />
            <p className="mt-6 font-jost font-light text-lg leading-relaxed text-charcoal">
              Four classic varieties are cultivated on the estate, the same
              grapes that form the backbone of the world&rsquo;s finest sparkling
              wines:
            </p>
            <ul className="mt-8 space-y-3">
              {grapeVarieties.map((variety) => (
                <li key={variety} className="flex items-center gap-4">
                  <span className="text-gold flex-shrink-0">✦</span>
                  <span className="font-jost font-light text-base text-charcoal">
                    {variety}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Vineyard tours */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-content mx-auto">
          <div className="max-w-3xl">
            <SectionHeading heading="Vineyard Tours" />
            <p className="mt-6 font-jost font-light text-lg leading-relaxed text-charcoal">
              Immersive tours of the estate take in the vineyard, the chalk
              downland and the historic Pinglestone Barn, with viticulture insights
              and tastings of Louis Pommery England wines. 2026 tour dates will be
              announced shortly.
            </p>
            <p className="mt-6 font-jost font-light text-sm italic text-stone">
              To register your interest in vineyard tours, please get in touch.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="secondary">
                Register Interest
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cellar door / buy online */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-content mx-auto">
          <div className="max-w-3xl">
            <SectionHeading heading="Buy Louis Pommery England" />
            <p className="mt-6 font-jost font-light text-lg leading-relaxed text-charcoal">
              Louis Pommery England is available to purchase online and delivered
              nationwide. For trade and wholesale enquiries, please contact the
              sales team directly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://louispommeryengland.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-jost font-light tracking-widest uppercase text-xs px-8 py-4 transition-all duration-300 bg-sage text-white hover:bg-sage-dark border border-sage hover:border-sage-dark"
              >
                Shop Online ↗
              </a>
              <a
                href="mailto:ahousehold@vrankenpommery.co.uk"
                className="inline-block font-jost font-light tracking-widest uppercase text-xs px-8 py-4 transition-all duration-300 bg-transparent text-sage border border-sage hover:bg-sage hover:text-white"
              >
                Trade Enquiries
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding connection CTA */}
      <section className="bg-sage py-24 px-6 text-center text-white">
        <div className="max-w-content mx-auto">
          <h2 className="font-cormorant font-light text-4xl md:text-5xl mb-6">
            Raise a Glass at Your Wedding
          </h2>
          <p className="font-jost font-light text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Couples who marry at Pinglestone Barn can toast with wine grown on the
            very hillside surrounding them — a detail that is impossible to
            replicate anywhere else.
          </p>
          <Button href="/contact" variant="ghost">
            Enquire About Your Wedding
          </Button>
        </div>
      </section>
    </>
  )
}
