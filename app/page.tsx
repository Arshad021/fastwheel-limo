import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import Cities from '../components/Cities'
import FleetPreview from '../components/FleetPreview'
import ContactForm from '../components/ContactForm'
import SafetySecurity from '../components/SafetySecurity'
import WhyChoose from '../components/WhyChoose'
import Testimonials from '../components/Testimonials'
import PhoneBar from '../components/PhoneBar'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4">
        <ServicesPreview />
        <Cities />
        <FleetPreview />
      </div>
      <SafetySecurity />
      <WhyChoose />
      <Testimonials />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <ContactForm />
      </div>
      <PhoneBar />
    </>
  )
}
