"use client";

import { useEffect } from "react";

export default function AirportLimousinePage() {
  useEffect(() => {
    // Enable smooth scrolling if same-page anchor used
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", e => {
        const targetId = (link as HTMLAnchorElement).getAttribute("href")?.substring(1);
        const target = targetId ? document.getElementById(targetId) : null;
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  const airports = [
    { name: "Boston Logan International Airport", map: "https://goo.gl/maps/eyv89AwKx6y" },
    { name: "New Bedford Regional Airport, MA", map: "https://goo.gl/maps/Z5FzHK6Tbn92" },
    { name: "Worcester Regional Airport, MA", map: "https://goo.gl/maps/ApJ6kb3kShx" },
    { name: "Atlantic Aviation BED, MA", map: "https://goo.gl/maps/6RPfvW3Z4Dq" },
    { name: "Manchester-Boston Regional Airport, NH", map: "https://goo.gl/maps/dgwrY4TnV1s" },
    { name: "Portsmouth International Airport, NH", map: "https://goo.gl/maps/3q9NujCVQX82" },
    { name: "Burlington International Airport, VT", map: "https://goo.gl/maps/ETnVBDG5ghr" },
    { name: "Portland International Jetport, Maine", map: "https://goo.gl/maps/T9wmbZtFQkP2" },
    { name: "Bangor International Airport, Maine", map: "https://goo.gl/maps/CAnvQkTnEzn" },
    { name: "Rhode Island T.F. Green International Airport", map: "https://goo.gl/maps/3U2jXvDgc3G2" },
    { name: "Bradley International Airport, CT", map: "https://goo.gl/maps/yf2N5kQFJTw" },
    { name: "John F. Kennedy International Airport, NY", map: "https://goo.gl/maps/ZqF7uK5yDwn" },
    { name: "LaGuardia Airport, NY", map: "https://goo.gl/maps/VD8RkFZ2zKx" },
    { name: "Newark Liberty International Airport", map: "https://goo.gl/maps/5t6Gm8oJrcA2" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* ===== Banner Section ===== */}
      <div className="relative bg-black text-white rounded-2xl shadow-lg mb-16 h-[350px] flex flex-col items-center justify-center text-center overflow-hidden">
        <img
          src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/pexels-pixabay-69121.jpg"
          alt="Airport Limousine"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Airport Limousine
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-6">
            Luxury airport transfers designed for comfort, punctuality, and elegance.
          </p>
          <a
            href="/book"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* ===== Info Section ===== */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/air.jpg"
            alt="Luxury Airport Ride"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Stress-Free Airport Travel
          </h2>
          <p className="text-gray-700">
            FastWheels Limo provides seamless airport limousine services, ensuring your journey
            starts and ends in comfort. Whether for business or leisure, our chauffeurs are trained
            to deliver reliability and sophistication.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>On-time pickups & drop-offs</li>
            <li>Flight tracking to adjust to delays</li>
            <li>Luxury amenities for a relaxing ride</li>
            <li>Professional, courteous chauffeurs</li>
          </ul>
          <p className="text-gray-700">
            Book now and enjoy a premium travel experience from the moment you leave your door to
            the airport terminal.
          </p>
        </div>
      </div>

      {/* ===== Airports Section ===== */}
      <div className="bg-gray-50 py-16 rounded-2xl shadow-inner">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Major Airports We Serve
          </h2>
          <p className="text-gray-600 mt-3">
            From Massachusetts to New York — we provide airport transfers to and from all major hubs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-gray-800">
          {airports.map((airport, i) => (
            <a
              key={i}
              href={airport.map}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex items-center justify-center text-center border border-gray-100 hover:-translate-y-1 hover:bg-yellow-50"
            >
              <p className="font-medium text-gray-900">{airport.name}</p>
            </a>
          ))}
        </div>

        {/* CTA Button at Bottom */}
        <div className="text-center mt-12">
          <a
            href="/book"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300"
          >
            Reserve Your Airport Transfer
          </a>
        </div>
      </div>
    </section>
  );
}
