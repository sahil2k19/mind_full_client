"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
const Result = () => {
  const router = useRouter()
  return (
    <div>
    <div className='mt-8 flex justify-center'>
        <img src='/home/smile.svg' />
    </div>
    <div class=" items-center p-4 gap-4">

        <div class="text-center">
            <p class="text-primary-orange mt-4 font-semibold mb-4">Your score is</p>
            <p class="text-6xl font-bold ">03</p>
            <div class=" p-2 rounded-lg mt-2 mb-5">
                <h1 class="font-semibold  mb-1 text-lg text-gray-700">Minimal Depression</h1>
                <p className='text-sm'>Keep up with healthy habits and check in with your healthcare provider if needed</p>
            </div>
        </div>
        <div className='flex justify-center flex-col items-center gap-4 mb-4'>
        <p class="font-semibold">Get a detailed report</p>
        <input type="text" placeholder="Enter your WhatsApp Number" class="border-2 border-orange-400 outline-none  p-2 rounded-lg px-6  text-center" />
       
        </div>
        <div className='flex justify-center mb-6'>

            <button class="bg-primary-orange  text-white font-semibold w-[75%] rounded-lg py-3  ">GET OTP</button>
        </div>
        <div className='flex justify-center flex-col items-center px-4 mb-3 '>
        <p class="text-center text-sm text-muted-foreground mb-4">You'll receive a message on WhatsApp shortly. If you haven't received it yet, <a href="#" class="font-bold">click here</a></p>
        <button onClick={() => router.push('/consultation/location')} class="bg-primary-orange  text-white font-semibold w-[75%] rounded-lg py-3 ">BOOK A CONSULTATION</button>
   
        </div>
         </div>
</div>
  )
}

export default Result