'use client';

import Image from 'next/image';
import Link from 'next/link';

const FindUsPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left Column: Background Image with Contact Info */}
        <div className="relative flex flex-col justify-center items-center text-center text-white px-6 bg-cover bg-center" style={{ backgroundImage: 'url("/images/find-us/find-us.jpg")' }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-100"></div>

          {/* Content */}
          <div className="relative z-10 max-w-lg">
            <h1 className="text-5xl font-bold mb-6">Find Us</h1>
            <p className="text-xl mb-8">Rampworx Skatepark is located in the heart of Liverpool. Come ride with us!</p>

            {/* Contact Information */}
            <div className="bg-gray-100 bg-opacity-90 text-black p-6 rounded-lg shadow-md">
              {[
                {
                  title: 'Address',
                  content: (
                    <>
                      Rampworx Skatepark, <br /> 1-3 Leckwith Rd, Bootle, <br /> Liverpool, L30 6UE, UK
                    </>
                  ),
                },
                { title: 'Phone', content: '+44 (0) 1515 301 500' },
                { title: 'Email', content: 'info@rampworx.com' },
              ].map(({ title, content }, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="text-lg">{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Google Map */}
        <div className="relative w-full h-full">
          <iframe
            title="Rampworx Skatepark Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.205793594407!2d-2.959465323260052!3d53.482652672329145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b23aa7cba981d%3A0x77c81fbd070b2451!2sRampworx%20Skatepark%20%26%20Shop!5e0!3m2!1sen!2suk!4v1741208126983!5m2!1sen!2suk"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            {[
              { href: 'https://www.facebook.com/RampworxSkatepark', src: '/images/facebook-icon.png', alt: 'Facebook' },
              { href: 'https://www.instagram.com/rampworxskatepark/', src: '/images/instagram-icon.png', alt: 'Instagram' },
              { href: 'https://twitter.com/RampworxSkate', src: '/images/twitter-icon.png', alt: 'Twitter' },
            ].map(({ href, src, alt }, index) => (
              <Link key={index} href={href} target="_blank">
                <Image src={src} alt={alt} width={40} height={40} className="hover:opacity-80 transition-opacity duration-200" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindUsPage;
