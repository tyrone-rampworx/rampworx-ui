'use client'; // Ensure this is a client-side component

import Image from 'next/image';
import Link from 'next/link';

const FindUsPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white w-full bg-cover bg-center" style={{ backgroundImage: 'url("/images/find-us-hero.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold mb-4">Find Us</h1>
          <p className="text-xl mb-8">Rampworx Skatepark is located in the heart of Liverpool. Come ride with us!</p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.205793594407!2d-2.959465323260052!3d53.482652672329145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b23aa7cba981d%3A0x77c81fbd070b2451!2sRampworx%20Skatepark%20%26%20Shop!5e0!3m2!1sen!2suk!4v1741208126983!5m2!1sen!2suk"
              className="w-full h-full border-0 rounded-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Address</h3>
              <p className="text-lg">Rampworx Skatepark, <br /> 1-3 Leckwith Rd, Bootle, <br /> Liverpool, L30 6UE, UK</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Phone</h3>
              <p className="text-lg">+44 (0) 1515 301 500</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Email</h3>
              <p className="text-lg">info@rampworx.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <Link href="https://www.facebook.com/RampworxSkatepark" target="_blank">
              <Image src="/images/facebook-icon.png" alt="Facebook" width={40} height={40} />
            </Link>
            <Link href="https://www.instagram.com/rampworxskatepark/" target="_blank">
              <Image src="/images/instagram-icon.png" alt="Instagram" width={40} height={40} />
            </Link>
            <Link href="https://twitter.com/RampworxSkate" target="_blank">
              <Image src="/images/twitter-icon.png" alt="Twitter" width={40} height={40} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindUsPage;
