interface MapEmbedProps {
  apiKey?: string
}

export default function MapEmbed({ apiKey }: MapEmbedProps) {
  if (!apiKey) {
    return (
      <div className="bg-sage-light p-6 md:p-10">
        <h3 className="font-cormorant font-light text-2xl text-charcoal mb-4">
          Find Us
        </h3>
        <div className="space-y-1 font-jost font-light text-base text-stone">
          <p>Pinglestone Farm</p>
          <p>Old Alresford</p>
          <p>Hampshire, SO24 9TB</p>
        </div>
        <p className="mt-4 font-jost font-light text-sm text-stone">
          What3words: ///impulse.descended.rehearsed
        </p>
        <a
          href="https://maps.google.com/?q=Pinglestone+Farm,+Old+Alresford,+SO24+9TB"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 font-jost font-light text-sm text-sage border-b border-sage hover:text-sage-dark transition-colors"
        >
          Open in Google Maps ↗︎
        </a>
      </div>
    )
  }

  return (
    <div className="h-64 sm:h-80 md:h-96">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Pinglestone+Farm,Old+Alresford,SO24+9TB`}
        title="Pinglestone Farm location map"
      />
    </div>
  )
}
