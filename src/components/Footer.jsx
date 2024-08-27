"use client"
import React from 'react';
// import { useNavigate } from 'react-router-dom';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
function Footer() {
  const router = useRouter();
  return (


    <footer className="py-6 footer-gradient">
      <div className="flex justify-center">
        <img
          className="h-[129px] w-[185px]"
          alt=""
          src="/home/footerLogo.svg"
        />

      </div>
      <div className='mb-8'>
        <div>
          <h2 className='text-center text-2xl font-semibold'>Call Us</h2>
        </div>

        <div className='p-4 flex items-center overflow-x-scroll gap-4 md:justify-center'>
          <div className='bg-primary-orange py-3 px-3 rounded-lg shadow min-w-[170px]'>
            <div className='flex justify-center mb-3'>
              <div className='w-[40px]'>
                <Image src='/home/wassup.svg' width={100} height={100} />
              </div>
            </div>
            <div className='flex flex-col justify-center items-center text-white'>
              <p className='font-semibold text-sm'>Aster CMI</p>
              <h1 className='text-lg font-semibold'>Bangalore North</h1>
            </div>
          </div>

          <div className='bg-[#F8A51C] py-3 px-3 rounded-lg shadow min-w-[170px]'>
            <div className='flex justify-center mb-3'>
              <div className='w-[40px]'>
                <Image src='/home/wassup.svg' width={100} height={100} />
              </div>
            </div>
            <div className='flex flex-col justify-center items-center text-white'>
              <p className='font-semibold text-sm'>Whitefield</p>
              <h1 className='text-lg font-semibold'>Bangalore North</h1>
            </div>
          </div>

          <div className='bg-primary-orange py-3 px-3 rounded-lg shadow min-w-[170px]'>
            <div className='flex justify-center mb-3'>
              <div className='w-[40px]'>
                <Image src='/home/wassup.svg' width={100} height={100} />
              </div>
            </div>
            <div className='flex flex-col justify-center items-center text-white'>
              <p className='font-semibold text-sm'>Greater Kailash 1</p>
              <h1 className='text-lg font-semibold'>Delhi</h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2 className='text-center text-2xl font-semibold'>WhatsApp Us</h2>
        </div>

        <div className='p-4 flex items-center overflow-x-scroll gap-4 md:justify-center'>
          <div className='bg-primary-orange py-3 px-3 rounded-lg shadow min-w-[170px]'>
            <div className='flex justify-center mb-3'>
              <div className='w-[40px]'>
                <Image src='/home/wassup.svg' width={100} height={100} />
              </div>
            </div>
            <div className='flex flex-col justify-center items-center text-white'>
              <p className='font-semibold text-sm'>Aster CMI</p>
              <h1 className='text-lg font-semibold'>Bangalore North</h1>
            </div>
          </div>

          <div className='bg-[#F8A51C] py-3 px-3 rounded-lg shadow min-w-[170px]'>
            <div className='flex justify-center mb-3'>
              <div className='w-[40px]'>
                <Image src='/home/wassup.svg' width={100} height={100} />
              </div>
            </div>
            <div className='flex flex-col justify-center items-center text-white'>
              <p className='font-semibold text-sm'>Whitefield</p>
              <h1 className='text-lg font-semibold'>Bangalore North</h1>
            </div>
          </div>

          <div className='bg-primary-orange py-3 px-3 rounded-lg shadow min-w-[170px]'>
            <div className='flex justify-center mb-3'>
              <div className='w-[40px]'>
                <Image src='/home/wassup.svg' width={100} height={100} />
              </div>
            </div>
            <div className='flex flex-col justify-center items-center text-white'>
              <p className='font-semibold text-sm'>Greater Kailash 1</p>
              <h1 className='text-lg font-semibold'>Delhi</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col px-5 items-center py-4'>
        <p className=' mb-2 font-bold'>Follow Us on our Social Media handles:</p>
        <div className='flex items-center gap-4'>
          <img src='/home/fb.png' />
          <img src='/home/ig.png' />
          <img src='/home/x.png' />
          <img src='/home/yt2.png' />
        </div>
      </div>

    </footer>
  );
}

export default Footer;
