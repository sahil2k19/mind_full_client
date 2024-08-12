"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const Expert = () => {
  const router = useRouter()
  return (
    <div className='select-none'>
            <div class="p-7 max-w-md mx-auto lg:container">
                <div class="flex items-center ">
                    <div className='mb-6'>
                        <div className='mr-4 cursor-pointer' onClick={() => router.back()}>

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

                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 class="text-2xl font-semibold text-center">MindfulTMS</h1>
                        <p class="text-center text-lg text-muted-foreground">Hebbal, Bangalore North</p>
                    </div>
                </div>
                
                <h2 class="mt-8 text-xl font-bold text-center">Choose an Expert</h2>
                <div class="relative mt-4">
                    <input type="text" class="w-full p-4 outline-orange-400 border-orange-400 border-2 pr-10  rounded-lg" placeholder="Search an Expert" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search absolute right-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </div>

                <div class="mt-4 space-y-2 grid grid-cols-1 lg:grid-cols-4 gap-1" >
                <div class="flex items-center bg-primary-div active:bg-orange-100 hover:bg-orange-200 p-3 bg-card rounded-lg shadow" onClick={()=> router.push("/consultation/booking")}>
                        <img src="/home/doctor1.png" alt="Profile picture" class="w-12 h-12 rounded-full" />
                        <div class="ml-4">
                            <p class="font-semibold">Dr. Neha Patel</p>
                            <p class="text-muted-foreground">Senior Psychiatrist</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#EF6623" stroke="#EF6623" stroke-width="1" class="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                    </div>
                    <div class="flex items-center bg-primary-div active:bg-orange-100 hover:bg-orange-200 p-3 bg-card rounded-lg shadow" onClick={()=> router.push("/consultation/booking")}>
                    <img src="/home/doctor1.png" alt="Profile picture" class="w-12 h-12 rounded-full" />
                        <div class="ml-4">
                            <p class="font-semibold">Dr. Ananya Chatterjee</p>
                            <p class="text-muted-foreground">Senior Psychiatrist</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#EF6623" stroke="#EF6623" stroke-width="1" class="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                    </div>
                    <div class="flex items-center bg-primary-div active:bg-orange-100 hover:bg-orange-200 p-3 bg-card rounded-lg shadow" onClick={()=> router.push("/consultation/booking")}>
                    <img src="/home/doctor1.png" alt="Profile picture" class="w-12 h-12 rounded-full" />
                        <div class="ml-4">
                            <p class="font-semibold">Dr. Neha Patel</p>
                            <p class="text-muted-foreground">Senior Psychiatrist</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#EF6623" stroke="#EF6623" stroke-width="1" class="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                    </div>
                    <div class="flex items-center bg-primary-div active:bg-orange-100 hover:bg-orange-200 p-3 bg-card rounded-lg shadow" onClick={()=> router.push("/consultation/booking")}>
                    <img src="/home/doctor1.png" alt="Profile picture" class="w-12 h-12 rounded-full" />
                        <div class="ml-4">
                            <p class="font-semibold">Dr. Prathamesh Deshmukh</p>
                            <p class="text-muted-foreground">Senior Psychiatrist</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#EF6623" stroke="#EF6623" stroke-width="1" class="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Expert