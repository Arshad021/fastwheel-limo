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

  // Removed Google Maps links
  const airports = [
    { name: "Boston Logan International Airport" },
    { name: "New Bedford Regional Airport, MA" },
    { name: "Worcester Regional Airport, MA" },
    { name: "Atlantic Aviation BED, MA" },
    { name: "Manchester-Boston Regional Airport, NH" },
    { name: "Portsmouth International Airport, NH" },
    { name: "Burlington International Airport, VT" },
    { name: "Portland International Jetport, Maine" },
    { name: "Bangor International Airport, Maine" },
    { name: "Rhode Island T.F. Green International Airport" },
    { name: "Bradley International Airport, CT" },
    { name: "John F. Kennedy International Airport, NY" },
    { name: "LaGuardia Airport, NY" },
    { name: "Newark Liberty International Airport" },
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
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex items-center justify-center text-center border border-gray-100 hover:-translate-y-1 hover:bg-yellow-50"
            >
              <p className="font-medium text-gray-900">{airport.name}</p>
            </div>
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
