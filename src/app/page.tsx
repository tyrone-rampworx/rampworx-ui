import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white w-full">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/q8vVLsUQnQ8?autoplay=1&mute=1&loop=1&playlist=q8vVLsUQnQ8&controls=0&showinfo=0&modestbranding=1&playsinline=1"
            title="YouTube video background"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold mb-4 bg-[#fe0600] text-white px-4 py-2 inline-block">
            RAMPWORX YOUTH VILLAGE
          </h1>
          <p className="text-xl mb-8">
            EXPLORE OUR FACILITY
          </p>
          <Link href="/book-a-session" className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
            Book A Session
          </Link>
        </div>
      </section>

      {/* New Section with Background, Title, Subtitle, and Icons */}
      <section className="relative w-full bg-cover bg-center py-120" style={{ backgroundImage: 'url("/images/rider.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-0"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-5xl font-bold mb-4 bg-[#fe0600] text-white px-4 py-2 inline-block">RAMPWORX SKATEPARK</h2>
          <h3 className="text-4xl font-bold mb-4 px-4 py-2 ">“A COMMUNITY OF YOUNG PEOPLE USING EXTREME SPORTS TO DEVELOP THEIR PHYSICAL AND MENTAL WELL BEING”</h3>
          <p className="text-lg max-w-3xl mx-auto">
          Rampworx Skatepark (Charity: 1097748) is a 70,000 sq. ft indoor extreme sports youth facility in Liverpool, UK. We are one of the longest running skateparks and extreme sports shops in the country and provide safe and secure facilities for over 1000 young people per week. For over 28 years, Rampworx has provided a world-class indoor skatepark/youth facility and through volunteering, coaching, outreach and community projects, we cultivate creativity to empower youth and professional athletes to soar higher than they ever thought possible.
          </p>
        </div>

        {/* Icons Section */}
<div className="max-w-7xl mx-auto px-6 mt-12 text-center">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
    {/* Icon 1 */}
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">
        <Image
          src="/images/location.png" // Replace with your icon path
          alt="Icon 1"
          width={50}
          height={50}
        />
      </div>
      <h3 className="text-xl text-white font-semibold mb-2">1997</h3>
      <p className="text-sm text-white text-gray-600">Established</p>
    </div>

    {/* Icon 2 */}
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">
        <Image
          src="/images/person.png" // Replace with your icon path
          alt="Icon 2"
          width={50}
          height={50}
        />
      </div>
      <h3 className="text-xl text-white font-semibold mb-2">61,000</h3>
      <p className="text-sm text-white text-gray-600">Members & COUNTING!</p>
    </div>

    {/* Icon 3 */}
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">
        <Image
          src="/images/star.png" // Replace with your icon path
          alt="Icon 3"
          width={50}
          height={50}
        />
      </div>
      <h3 className="text-xl text-white font-semibold mb-2">3000</h3>
      <p className="text-sm text-white text-gray-600">Five star reviews</p>
    </div>
  </div>
</div>

      </section>

      {/* Services Section */}
      <section className="py-16 w-full bg-[#fe0600]">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-8 text-white">OUR SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              { title: "Coaching", image: "/images/coaching.jpg", link: "/coaching", desc: "Book a lesson with our experienced coaches to improve your skills." },
              { title: "Parties", image: "/images/parties.jpg", link: "/parties", desc: "Celebrate your special occasions with an adrenaline-filled party." },
              { title: "Events", image: "/images/events.jpg", link: "/events", desc: "Join our upcoming events and competitions to showcase your talent." },
            ].map((service) => (
              <div key={service.title} className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
                <div className="w-full flex justify-center">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    width={400} 
                    height={250} 
                    className="rounded-lg object-cover" 
                    style={{ maxWidth: "400px", maxHeight: "250px" }} 
                  />
                </div>
                <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.desc}</p>
                <Link href={service.link} className="mt-4 inline-block px-4 py-2 bg-[#fe0600] text-white rounded-full hover:bg-blue-700 transition">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white-200 py-16 w-full">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-8">What Our Visitors Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { text: "Took my daughter Liv for her first skateboard lesson this afternoon and she absolutely loved it!", author: "Angela" },
              { text: "The staff are so good with the kids, they love coming in for the day's activities.", author: "Kelden26" },
              { text: "Rampworx skatepark is great for kids! Ordered scooters and merchandise from their online store.", author: "Claire" },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md w-full">
                <p className="italic text-gray-600">"{testimonial.text}"</p>
                <p className="mt-4 font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#fe0600] text-white text-center w-full">
        <h2 className="text-3xl font-bold mb-4">Ready to Ride?</h2>
        <p className="mb-8">Register now and join our community of extreme sports enthusiasts!</p>
        <Link href="/register" className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          Register Here
        </Link>
      </section>
    </main>
  );
}
