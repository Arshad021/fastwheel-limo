'use client'
import { useState } from 'react'

export default function ContactForm(){
  const [status,setStatus] = useState('')
  async function submit(e:any){
    e.preventDefault()
    setStatus('Sending...')
    const fd = new FormData(e.target)
    const body = Object.fromEntries(fd.entries())
    try {
      const res = await fetch('/api/contact', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body)})
      const data = await res.json()
      if(res.ok) setStatus('Message sent!')
      else setStatus('Failed to send')
    } catch(err){
      setStatus('Error')
    }
  }
  return (
    <form onSubmit={submit} className="space-y-4">
      <input name="name" placeholder="Name" required className="w-full p-3 border rounded"/>
      <input name="email" type="email" placeholder="Email" required className="w-full p-3 border rounded"/>
      <input name="phone" placeholder="Phone" className="w-full p-3 border rounded"/>
      <textarea name="message" placeholder="Message" className="w-full p-3 border rounded"/>
      <button className="bg-yellow-500 px-6 py-3 rounded font-bold">Send Message</button>
      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  )
}
