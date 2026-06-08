interface SectionHeadingProps {
  heading: string
  standfirst?: string
  centred?: boolean
  light?: boolean
}

export default function SectionHeading({
  heading,
  standfirst,
  centred = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centred ? 'text-center' : ''}>
      <h2
        className={`font-cormorant font-light text-4xl md:text-5xl leading-tight mb-4 ${
          light ? 'text-white' : 'text-charcoal'
        }`}
      >
        {heading}
      </h2>
      {standfirst && (
        <p
          className={`font-jost font-light tracking-widest uppercase text-xs ${
            light ? 'text-white/80' : 'text-stone'
          }`}
        >
          {standfirst}
        </p>
      )}
    </div>
  )
}
