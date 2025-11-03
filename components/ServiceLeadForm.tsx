'use client'
import { useState } from 'react'

type Field = { name: string; label: string; type?: string; required?: boolean; placeholder?: string }
export default function ServiceLeadForm({ fields, subject }: { fields: Field[]; subject: string }){
  const [status,setStatus] = useState('')
  async function submit(e:any){
    e.preventDefault()
    setStatus('Submitting...')
    const fd = new FormData(e.target)
    const body = Object.fromEntries(fd.entries())
    try{
      const res = await fetch('/api/quote', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ ...body, subject }) })
      if(res.ok){ setStatus('Request sent! We will contact you shortly.') }
      else { setStatus('Failed to send. Please try again.') }
    }catch(err){ setStatus('Error sending.') }
  }
  return (
    <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border">
      {fields.map((f)=>{
        const common = { name: f.name, placeholder: f.placeholder || f.label, required: f.required, className: "p-3 border rounded" }
        if((f.type||'text') === 'textarea'){
          return <textarea key={f.name} {...common as any} className="p-3 border rounded md:col-span-2" />
        }
        return <input key={f.name} type={f.type||'text'} {...common as any} />
      })}
      <button className="bg-yellow-500 text-black px-6 py-3 rounded font-bold md:col-span-2">Request Quote</button>
      {status && <p className="text-sm md:col-span-2">{status}</p>}
    </form>
  )
}
