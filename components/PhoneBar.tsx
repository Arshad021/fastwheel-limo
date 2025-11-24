export default function PhoneBar() {
  return (
    <div className="bg-yellow-500 text-black py-3">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="font-semibold mb-3 sm:mb-0">
          Your Global Chauffeur Service
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-base font-medium">

          <a href="tel:+17744342262" className="underline block">
            774-434-2262
          </a>

          <a href="mailto:Support@fastwheelslimo.com"
             className="underline block break-all sm:break-normal">
            Support@fastwheelslimo.com
          </a>

          <a
            href="https://wa.me/17744342262"
            className="underline block">
            WhatsApp Us
          </a>

        </div>
      </div>
    </div>
  );
}
