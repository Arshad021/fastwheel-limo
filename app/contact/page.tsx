"use client"

import { useState } from "react"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const result = await res.json()

      if (result.ok) {
        setStatus("success")
        setForm({ name: "", email: "", phone: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (err) {
      console.error(err)
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-8">Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 space-y-5"
      >
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-yellow-400 outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={form.message}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 w-full h-32 focus:ring-2 focus:ring-yellow-400 outline-none resize-none"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center mt-3">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mt-3">❌ Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  )
}
