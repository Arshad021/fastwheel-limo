// src/app/about/page.tsx

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Banner */}
      <div className="relative bg-black text-white rounded-2xl shadow-lg mb-16 h-[300px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://www.fastwheelslimo.com/wp-content/uploads/2024/07/Luxury-Airport-Transfer-Service-in-Miami-1.jpg"
          alt="About FastWheel Limo"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About FastWheel Limo
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover who we are and why FastWheel Limo is the trusted choice for
            premium limousine services.
          </p>
        </div>
      </div>

      {/* Two Column Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Left Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/air.jpg"
            alt="Luxury Limo Ride"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
          <p className="text-gray-700">
          Fast Wheels Limousine and Car Services has been offering clients 
          throughout Boston and the surrounding area quality 
          transportation services since 2018. Great service begins
           with great people and real experience which is why we put
            so much into choosing the best people to join our team. 
            You’ll always have a driver who knows punctuality, safe 
            
          driving and customer service inside and out. We aim to 
          not only meet your needs, but also exceed your expectations 
          of what a Limousine Service can be.
          </p>
          <p className="text-gray-700">
          At Fast Wheels Limousine and Car Services, we get you from point
          
         A to B with comfort and with ease. We are proud to be the leading 
         Limousine Service any where you need to go. We believe we’ve become 
         so successful due to us always working hard to go the extra mile:
          we’ll be there whenever our clients need us, offering worry-free, 
          quality service at a great price. Contact us to Book your limousine.


          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We go above and beyond to make sure your journey is smooth, luxurious,
          and unforgettable.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="https://img.icons8.com/ios-filled/100/000000/limousine.png"
            alt="Luxury Fleet"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Luxury Fleet</h3>
          <p className="text-gray-600">
            Travel in style with our collection of high-end limousines and
            luxury vehicles tailored to your occasion.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="https://img.icons8.com/ios-filled/100/000000/driver.png"
            alt="Professional Chauffeurs"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Professional Chauffeurs</h3>
          <p className="text-gray-600">
            Our experienced and courteous chauffeurs ensure every ride is safe,
            punctual, and stress-free.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="https://img.icons8.com/ios-filled/100/000000/clock.png"
            alt="24/7 Availability"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
          <p className="text-gray-600">
            Whether day or night, we’re here to provide luxury travel whenever
            you need it, across the UAE.
          </p>
        </div>
      </div>
    </section>
  );
}
