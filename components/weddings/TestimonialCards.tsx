const testimonials = [
  {
    quote:
      'We recently celebrated our wedding at Pinglestone Barn. The most beautiful and rustic wedding venue. We did not need to do much in terms of decoration as the barn itself is just beautiful. So many wonderful comments from our guests about this special venue.',
    attribution: 'Married at Pinglestone',
  },
  {
    quote:
      "We absolutely recommend this venue. David was amazing at allowing our vision to come to life at such a beautiful and relaxed venue. The barn is such a beautiful space we barely needed to add much decoration. It was so helpful to have the cottage and the Shepherd's Hut on site.",
    attribution: 'Married at Pinglestone',
  },
  {
    quote:
      "David and Sarah were the most incredibly welcoming hosts and so helpful on and around our big day. It had such a relaxed feel — and what a bonus to stay in the cottage and the Shepherd's Hut on site. All our guests commented on how incredible the venue was. We had our humanist blessing down by the river near the willow tree.",
    attribution: 'Married at Pinglestone',
  },
]

export default function TestimonialCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="bg-sage-light p-8 flex flex-col"
        >
          <p className="font-cormorant font-light text-xl italic leading-relaxed text-charcoal flex-1 mb-6">
            &ldquo;{t.quote}&rdquo;
          </p>
          <p className="font-jost font-light text-xs tracking-widest uppercase text-stone">
            — {t.attribution}
          </p>
        </div>
      ))}
    </div>
  )
}
