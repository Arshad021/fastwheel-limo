import Link from 'next/link'
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">

        {/* Brand Info */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-3">FastWheel Limo</h3>
          <p className="text-gray-400 leading-relaxed">
            Premium limousine & chauffeur service across Boston and New England.
            Reliable. Comfortable. Always on time.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-yellow-400">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-yellow-400">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-yellow-400">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/book" className="hover:text-yellow-400">Book a Ride</Link></li>
            <li><Link href="/services" className="hover:text-yellow-400">Our Services</Link></li>
            <li><Link href="/fleets" className="hover:text-yellow-400">Fleet</Link></li>
            <li><Link href="/locations" className="hover:text-yellow-400">Locations</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Working Hours</h4>
          <p className="flex items-start gap-2 text-gray-400">
            <Clock size={18} className="text-yellow-400 mt-1" /> 
            <span>We operate <br /> <strong>24 Hours, 7 Days a Week</strong></span>
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-yellow-400" />
              <a href="tel:+17744342262" className="hover:text-yellow-400">+1 (774) 434-2262</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-yellow-400" />
              <a href="mailto:Support@fastwheelslimo.com" className="hover:text-yellow-400">
                Support@fastwheelslimo.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-yellow-400" />
              <span>Boston, MA, USA</span>
            </li>
          </ul>

          <div className="mt-4">
            <a
              href="https://wa.me/17744342262"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} FastWheel Limo · All Rights Reserved · 
        <Link href="/terms" className="hover:text-yellow-400 ml-1">Terms</Link> · 
        <Link href="/privacy" className="hover:text-yellow-400 ml-1">Privacy</Link>
      </div>
    </footer>
  )
}
