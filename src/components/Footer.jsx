"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function Footer() {
  const router = useRouter();

  // Dynamic data for call and WhatsApp sections
  const locations = [
    { name: "Aster CMI", area: "Bangalore North", bgColor: "bg-primary-orange" },
    { name: "Whitefield", area: "Bangalore North", bgColor: "bg-[#F8A51C]" },
    { name: "Greater Kailash 1", area: "Delhi", bgColor: "bg-primary-orange" }
  ];

  const socialMediaIcons = [
    { src: '/home/fb.png', alt: 'Facebook' },
    { src: '/home/ig.png', alt: 'Instagram' },
    { src: '/home/x.png', alt: 'Twitter' },
    { src: '/home/yt2.png', alt: 'YouTube' },
  ];

  return (
    <footer className="py-6 footer-gradient">
      <div className='scale-[0.85] md:scale-100'>
        <div className="flex justify-center">
          <img
            className="h-[129px] w-[185px]"
            alt="Footer Logo"
            src="/home/footerLogo.svg"
          />
        </div>

        {/* Call Us Section */}
        <div className='mb-8'>
          <div>
            <h2 className='text-center text-2xl font-semibold'>Call Us</h2>
          </div>
          <div className='p-4 flex items-center overflow-x-scroll gap-4 md:justify-center'>
            {locations.map((location, index) => (
              <div key={index} className={`${location.bgColor} py-3 px-3 rounded-lg shadow min-w-[170px]`}>
                <div className='flex justify-center mb-3'>
                  <div className='w-[40px]'>
                    <Image src='/home/wassup.svg' width={100} height={100} alt="WhatsApp" />
                  </div>
                </div>
                <div className='flex flex-col justify-center items-center text-white'>
                  <p className='font-semibold text-sm'>{location.name}</p>
                  <h1 className='text-lg font-semibold'>{location.area}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Us Section */}
        <div>
          <div>
            <h2 className='text-center text-2xl font-semibold'>WhatsApp Us</h2>
          </div>
          <div className='p-4 flex items-center overflow-x-scroll gap-4 md:justify-center'>
            {locations.map((location, index) => (
              <div key={index} className={`${location.bgColor} py-3 px-3 rounded-lg shadow  min-w-[170px]`}>
                <div className='flex justify-center mb-3'>
                  <div className='w-[40px]'>
                    <Image src='/home/wassup.svg' width={100} height={100} alt="WhatsApp" />
                  </div>
                </div>
                <div className='flex flex-col justify-center items-center text-white'>
                  <p className='font-semibold text-sm'>{location.name}</p>
                  <h1 className='text-lg font-semibold'>{location.area}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </footer>
  );
}

export default Footer;