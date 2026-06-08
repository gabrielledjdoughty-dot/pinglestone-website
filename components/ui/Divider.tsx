export default function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center my-8 ${className}`}>
      <div className="h-px w-16 bg-gold" />
      <div className="mx-3 text-gold text-lg">✦</div>
      <div className="h-px w-16 bg-gold" />
    </div>
  )
}
