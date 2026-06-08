const inclusions = [
  'Exclusive use of the barn, grounds and ceremony space',
  'Tables, chairs and dancefloor',
  'Stage and full bar',
  'Fairy-lit outdoor canopy for drinks receptions',
  'Lawn games and river views',
  "Barn Lodge cottage (3 bed, sleeps 5) included for 2 nights",
  'The Arle Hut shepherd\'s hut included for the wedding night',
  'Ample on-site parking',
  'Set-up access from the Friday before your wedding',
  'Live music welcome · Music finishes by 11pm · No fireworks',
]

export default function InclusionsList() {
  return (
    <ul className="space-y-4">
      {inclusions.map((item) => (
        <li key={item} className="flex items-start gap-4">
          <span className="text-gold flex-shrink-0 mt-1">✦</span>
          <span className="font-jost font-light text-base leading-relaxed text-charcoal">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}
