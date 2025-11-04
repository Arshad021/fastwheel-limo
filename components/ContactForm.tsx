"use client"
import { useState } from "react"

export default function ContactForm() {
  const [status, setStatus] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    const formData = new FormData(e.currentTarget)
    const body = Object.fromEntries(formData.entries())

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      const data = await res.json()

      if (res.ok && data.ok) {
        setStatus("✅ Message sent successfully!")
        e.currentTarget.reset()
      } else {
        setStatus("❌ Failed to send. Please try again.")
      }
    } catch (err) {
      console.error(err)
      setStatus("❌ Network error. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-4 bg-white rounded-2xl p-6 shadow-lg"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Full Name"
          required
          className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
          className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 outline-none"
        />
      </div>

      <input
        name="phone"
        placeholder="Phone Number"
        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 outline-none"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 outline-none h-32 resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-yellow-500 text-black font-semibold py-3 rounded transition ${
          loading ? "opacity-70 cursor-not-allowed" : "hover:bg-yellow-600"
        }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p
          className={`text-sm mt-2 text-center transition ${
            status.startsWith("✅")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  )
}
