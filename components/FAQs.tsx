export default function FAQs({ items }:{ items: {q:string,a:string}[] }){
  return (
    <section className="max-w-7xl mx-auto px-4 pb-16">
      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      <div className="divide-y">
        {items.map((it,i)=>(
          <details key={i} className="py-3">
            <summary className="cursor-pointer font-medium">{it.q}</summary>
            <p className="text-gray-700 mt-2">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
