import Image from 'next/image'

export default function FleetCard({ title, desc, image, pax, luggage }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col">
      
      {/* Title */}
      <div className="p-4 border-b">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>

      {/* Image */}
      <div className="h-48 relative bg-gray-50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-6"
        />
      </div>

      {/* Info */}
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-sm text-gray-600">{desc}</p>
        <div className="mt-3 text-sm text-gray-500 flex items-center gap-6">
          <span>👤 {pax}</span>
          <span>🧳 {luggage}</span>
        </div>

        {/* Button */}
        <div className="mt-6">
          <a
            href="/book"
            className="block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  )
}
