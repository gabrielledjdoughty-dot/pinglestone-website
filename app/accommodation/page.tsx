import type { Metadata } from 'next'
import PropertyCard from '@/components/accommodation/PropertyCard'
import Divider from '@/components/ui/Divider'

export const metadata: Metadata = {
  title: 'Accommodation | Pinglestone Barn, Hampshire',
  description:
    "Stay the night at Pinglestone. Barn Lodge sleeps 5, The Arle Hut is a shepherd's hut for two by the river. Book direct.",
}

export default function AccommodationPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-6 text-center text-white"
        style={{
          background:
            'linear-gradient(135deg, #5C6B4A 0%, #3D4832 50%, #9B8E7E 100%)',
        }}
      >
        <div className="relative z-10">
          <h1 className="font-cormorant font-light text-5xl md:text-7xl tracking-wide mb-6">
            Stay the Night — Make It a Weekend
          </h1>
          <p className="font-jost font-light text-lg text-white/80 max-w-xl mx-auto">
            For couples who want to make the most of their wedding day,
            Pinglestone offers on-site accommodation so the celebration
            doesn&rsquo;t have to end.
          </p>
        </div>
      </section>

      {/* Barn Lodge */}
      <PropertyCard
        name="Barn Lodge"
        standfirst="3 bedrooms · Sleeps 5 · ★5.0 on Airbnb"
        description="Tucked at the end of the 15th-century barn, Barn Lodge is a beautifully appointed three-bedroom cottage that feels every bit like a home away from home. Cosy, considered and luxurious, it overlooks the watercress beds with views across the chalk stream valley."
        features={[
          'Master: super-king Hypnos pocket-sprung bed, en-suite sink',
          'Bedroom 2: king-size bed, en-suite sink',
          'Bedroom 3: single (accessed via bedroom 2)',
          'Open-plan kitchen/dining/sitting room',
          'Bosch oven + gas hob · Nespresso · Netflix + streaming',
          'WiFi throughout · Washing machine',
          'Welcome tray with locally sourced milk, tea, coffee',
        ]}
        note="Included for wedding couples for 2 nights. Also available to book directly for other stays — no need to book via Airbnb."
        ctaLabel="Enquire About Barn Lodge"
        images={[
          { src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1239654487226261959/original/49de7512-ca22-4427-9d33-da46c04f0391.jpeg?im_w=1440', alt: 'Barn Lodge, Pinglestone Farm' },
          { src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1239654487226261959/original/81762383-feff-4514-bf97-b100a0b12f59.jpeg?im_w=1440', alt: 'Barn Lodge interior' },
          { src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1239654487226261959/original/2b498d61-572d-4504-b057-2d70a93d3ab6.jpeg?im_w=1440', alt: 'Barn Lodge bedroom' },
          { src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1239654487226261959/original/1d4bb95c-844a-4cd1-9818-f102c8c9a58e.jpeg?im_w=1440', alt: 'Barn Lodge living area' },
          { src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1239654487226261959/original/ea0b8950-90a0-4b44-b780-39ead3cfa62c.jpeg?im_w=1440', alt: 'Barn Lodge kitchen' },
          { src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1239654487226261959/original/aee73ca1-1773-4fea-86ba-dc8439292da8.jpeg?im_w=1440', alt: 'Barn Lodge exterior' },
        ]}
      />

      {/* Arle Hut */}
      <PropertyCard
        name="The Arle Hut"
        standfirst="Shepherd's hut for two · On the River Arle"
        description="A brand-new, interior-designed shepherd's hut tucked beside a tributary of the River Arle — the most peaceful of locations, right on the water's edge. The perfect retreat for newlyweds."
        features={[
          'King-size bed',
          'Kitchenette (hob, toaster, fridge)',
          'Ensuite bathroom',
          '2-person outdoor hot bath (hot water)',
          'Firepit · River views',
          'Trout fishing available separately',
          'Dogs welcome (£20/stay, not on bed)',
        ]}
        note="Included for the wedding couple on the wedding night. Also available to book directly."
        ctaLabel="Enquire About The Arle Hut"
        images={[
          { src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1191827707084926873/original/e6da1e47-02ad-4685-9810-b757261a8e3f.jpeg?im_w=1440', alt: 'The Arle Hut exterior, River Arle' },
          { src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1191827707084926873/original/996834e9-5f9f-4e51-b3fb-4c2fa4302d8f.jpeg?im_w=1440', alt: 'The Arle Hut interior' },
          { src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1191827707084926873/original/126ee0c5-f920-4562-b992-9845156a889c.jpeg?im_w=1440', alt: 'The Arle Hut bedroom' },
          { src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1191827707084926873/original/060fb205-f235-496a-9b21-42af339d04aa.jpeg?im_w=1440', alt: 'The Arle Hut hot bath by the river' },
          { src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1191827707084926873/original/ae0aa8d3-ef46-463e-a415-5b5bd356b91d.jpeg?im_w=1440', alt: 'The Arle Hut firepit' },
          { src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1191827707084926873/original/b16bd8c0-8723-4c7b-a79d-cdd9a7045a43.jpeg?im_w=1440', alt: 'The Arle Hut river view' },
        ]}
        reversed
      />

      {/* Local area note */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-content mx-auto text-center">
          <Divider />
          <p className="font-jost font-light text-base text-stone max-w-xl mx-auto">
            Further accommodation in Alresford town and Winchester (15 min) is
            easily arranged for larger guest lists.
          </p>
        </div>
      </section>
    </>
  )
}
