'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [sopen, setSopen] = useState(false)
  const timerRef = useRef(null)

  const services = [
    'airport-limousine',
    'point-to-point',
    'corporate-travel',
    'hourly-chauffeur',
    'city-to-city',
    'roadshows',
    'events',
    'wedding-limousine',
    'prom-limousine',
    'night-out-ride-limousine',
    'casino-limousine',
    'bachelor-parties-limousine',
  ]

  const handleEnter = () => {
    clearTimeout(timerRef.current)
    setSopen(true)
  }

  const handleLeave = () => {
    timerRef.current = setTimeout(() => setSopen(false), 150)
  }

  return (
    <header className="fixed w-full z-40 top-0">

      {/* ✅ TOP BAR */}
      <div className="bg-yellow-500 text-black text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

          {/* Left */}
          <div className="flex items-center gap-4">
            <Link href="/book" className="font-semibold underline">
              Book Now
            </Link>
            <span>24/7 Service</span>
          </div>

          {/* Right */}
          <a href="tel:+17744342262" className="font-semibold underline">
            Call: 774-434-2262
          </a>
        </div>
      </div>

      {/* ✅ MAIN NAVBAR */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/fastwheellimo-logo.png"
              alt="FastWheel Limo"
              width={160}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/">Home</Link>
            <Link href="/book">Book Now</Link>
            <Link href="/fleets">Fleet</Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <button className="flex items-center">Services ▾</button>
              {sopen && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded shadow w-72 p-2 grid grid-cols-1 z-50">
                  {services.map((slug) => (
                    <Link
                      key={slug}
                      href={`/services/${slug}`}
                      className="px-4 py-2 hover:bg-gray-100 capitalize"
                    >
                      {slug.replace(/-/g, ' ')}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="px-4 py-2 hover:bg-gray-100 font-semibold"
                  >
                    All Services →
                  </Link>
                </div>
              )}
            </div>

            <Link href="/locations">Locations</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden text-2xl px-2 py-1 rounded focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? '✖' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-black text-white px-4 overflow-hidden transition-all duration-300 ${
            open ? 'max-h-screen pb-4' : 'max-h-0'
          }`}
        >
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/book" className="block py-2">Book Now</Link>
          <Link href="/fleets" className="block py-2">Fleet</Link>

          <details className="pt-2">
            <summary>Services</summary>
            <div className="pl-4">
              {services.map((slug) => (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="block py-1 capitalize"
                >
                  {slug.replace(/-/g, ' ')}
                </Link>
              ))}
              <Link href="/services" className="block py-1 font-semibold">
                All Services →
              </Link>
            </div>
          </details>

          <Link href="/locations" className="block py-2">Locations</Link>
          <Link href="/about" className="block py-2">About</Link>
          <Link href="/contact" className="block py-2">Contact</Link>
          <Link href="/reserve" className="block py-2">Login</Link>
        </div>
      </div>
    </header>
  )
}
