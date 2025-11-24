'use client'
import { useState } from 'react'

export default function Book() {
  const [status,setStatus] = useState('')
  async function submit(e:any){
    e.preventDefault()
    setStatus('Submitting...')
    const fd = new FormData(e.target)
    const body = Object.fromEntries(fd.entries())
    try{
      const res = await fetch('/api/quote', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)})
      if(res.ok){ setStatus('Request sent! We will contact you shortly.') }
      else { setStatus('Failed to send. Please try again.') }
    }catch(err){
      setStatus('Error sending.')
    }
  }
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold mb-2">Get an Instant Quote</h1>
      <p className="text-gray-600 mb-8">Point-to-point, hourly, or city-to-city. No hidden fees.</p>
      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border">
        <input name="name" placeholder="Full Name*" required className="p-3 border rounded"/>
        <input name="email" type="email" placeholder="Email*" required className="p-3 border rounded"/>
        <input name="phone" placeholder="Phone*" required className="p-3 border rounded md:col-span-2"/>
        <input name="pickup" placeholder="Pickup Address / Airport*" required className="p-3 border rounded md:col-span-2"/>
        <input name="dropoff" placeholder="Dropoff Address*" required className="p-3 border rounded md:col-span-2"/>
        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          <input name="date" type="date" required className="p-3 border rounded"/>
          <input name="time" type="time" required className="p-3 border rounded"/>
        </div>
        <select name="vehicle" className="p-3 border rounded">
          <option value="Executive Sedan">Executive Sedan</option>
          <option value="First Class Sedan">First Class Sedan</option>
          <option value="Executive SUV">Executive SUV</option>
          <option value="Business Van">Business Van</option>
          <option value="Stretch Limousine">Stretch Limousine</option>
          <option value="Party Bus">Party Bus</option>
        </select>
        <div className="grid grid-cols-2 gap-4">
          <input name="passengers" type="number" min="1" placeholder="Passengers" className="p-3 border rounded"/>
          <input name="luggage" type="number" min="0" placeholder="Luggage" className="p-3 border rounded"/>
        </div>
        <textarea name="notes" placeholder="Notes (flight number, child seats, etc.)" className="p-3 border rounded md:col-span-2"/>
        <button className="bg-yellow-500 text-black px-6 py-3 rounded font-bold md:col-span-2">Request Quote</button>
        {status && <p className="text-sm md:col-span-2">{status}</p>}
      </form>
      <p className="text-xs text-gray-500 mt-3">Prefer a call? <a className="underline" href="tel:+1 (774) 434-2262">+1 (774) 434-2262</a> or <a className="underline" href="https://wa.me/18577779500">WhatsApp</a>.</p>
    </section>
  )
}
