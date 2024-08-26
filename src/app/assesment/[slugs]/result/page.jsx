"use client"
// import Image from 'next/image'
import { Container } from '@mui/material'

import { useRouter } from 'next/navigation'
import React from 'react'
const Result = () => {
  const router = useRouter()
  return (
   <Container maxWidth="lg">
     <div>
    <div className='mt-8 flex justify-center'>
        <img src='/home/smile.svg' />
    </div>
    <div className=" items-center p-4 gap-4">

        <div className="text-center">
            <p className="text-primary-orange mt-4 font-semibold mb-4">Your score is</p>
            <p className="text-6xl font-bold ">03</p>
            <div className=" p-2 rounded-lg mt-2 mb-5">
                <h1 className="font-semibold  mb-1 text-lg text-gray-700">Minimal Depression</h1>
                <p className='text-sm'>Keep up with healthy habits and check in with your healthcare provider if needed</p>
            </div>
        </div>
        <div className='flex justify-center flex-col items-center gap-4 mb-4'>
        <p className="font-semibold">Get a detailed report</p>
        <input type="text" placeholder="Enter your WhatsApp Number" className="border-2 border-orange-400 outline-none  p-2 rounded-lg px-6  text-center" />
       
        </div>
        <div className='flex justify-center mb-6'>

            <button className="bg-primary-orange  text-white font-semibold w-[75%] md:w-1/3 rounded-lg py-3  ">GET OTP</button>
        </div>
        <div className='flex justify-center flex-col items-center px-4 mb-3 '>
        <p className="text-center text-sm text-muted-foreground mb-4">You&apos;ll receive a message on WhatsApp shortly. If you haven&apos;t received it yet, <a href="#" className="font-bold">click here</a></p>
        <button onClick={() => router.push('/consultation/location')} className="bg-primary-orange  text-white font-semibold w-[75%] md:w-1/3 rounded-lg py-3 ">BOOK A CONSULTATION</button>
   
        </div>
         </div>
</div>
   </Container>
  )
}

export default Result