"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const Assistance = () => {
  const router = useRouter()
  return (
    <div className='select-none'>
    <div class="min-h-screen bg-background text-foreground flex flex-col items-center p-4">
        <div class="w-full max-w-md lg:container">
            <div className='mb-6 flex items-center'>
                <div className='cursor-pointer mr-3 ' onClick={() => router.back()}>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    // className="w-6 h-6"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </div>

                <h1 class="text-center text-2xl  font-semibold ">Choose Assistance</h1>
            </div>
            <div class="grid grid-cols-1 select-none md:grid-cols-3 lg:grid-cols-3 gap-2 user-select-none">
                <div class="bg-primary-div active:bg-orange-100 hover:bg-orange-200   p-4 rounded-lg flex items-center cursor-pointer" onClick={() => router.push("/consultation/expert")}>
                    <div>
                        <h2 class="font-bold">PSYCHIATRY</h2>
                        <p class="text-muted-foreground">15 Minute Session</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#EF6623" stroke="#EF6623" stroke-width="1" class="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </div>
                <div class="bg-primary-div active:bg-orange-100 hover:bg-orange-200   p-4 rounded-lg flex items-center cursor-pointer" onClick={() => router.push("/consultation/expert")}>
                    <div>
                        <h2 class="font-bold">THERAPY</h2>
                        <p class="text-muted-foreground">45 Minute Session</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#EF6623" stroke="#EF6623" stroke-width="1" class="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </div>
                <div class="bg-primary-div active:bg-orange-100 hover:bg-orange-200   p-4 rounded-lg flex items-center cursor-pointer" onClick={() => router.push("/consultation/expert")}>
                    <div>
                        <h2 class="font-bold">TMS CONSULTATION</h2>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#EF6623" stroke="#EF6623" stroke-width="1" class="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default Assistance