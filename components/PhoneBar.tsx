export default function PhoneBar(){
  return (
    <div className="bg-yellow-500 text-black py-3">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-3">
        <div className="font-semibold">Your Global Chauffeur Service</div>
        <div className="flex items-center gap-6">
          <a href="tel:+774-434-2262" className="underline">774-434-2262</a>
          <a href="mailto:hello@fastwheellimo.com" className="underline">Support@fastwheelslimo.com</a>
          <a href="tel:7744342262" className="underline">WhatsApp us</a>
        </div>
      </div>
    </div>
  )
}
