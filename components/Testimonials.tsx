const reviews = [
  {quote: "I was very impressed — on time, great communication, and I felt safe.", author: "Sarah P."},
  {quote: "Exceptionally clean car. Driver was early and the price beat competitors.", author: "Beverly M."},
  {quote: "JR got me home safely and quickly — will use them again!", author: "Jodie F."},
  {quote: "Perfectly professional and courteous, extremely competitive pricing.", author: "Deb M."},
  {quote: "Always on time, very professional and super nice.", author: "Chandler W."},
]
export default function Testimonials(){
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-10">What Our Clients Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.slice(0,3).map((r,i)=>(
            <figure key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <blockquote className="text-lg">“{r.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-yellow-400">{r.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
