"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const pages = [
  {
    name: 'Home Section',
    slug: 'homesection'
  },
  {
    name: 'Consultation',
    slug: 'consultation'
  },
  {
    name: 'Assesment',
    slug: 'assesment'
  }
]


const Admin = () => {
    const router = useRouter()

    
  return (
    <div className='px-6 py-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {
          pages.map((page, index) => (
            <div className='px-2 py-5 rounded-lg hover:shadow-lg bg-orange-400 cursor-pointer flex justify-center' key={index} onClick={() => router.push(`/admin/${page.slug}`)}>
                <h1 className='text-white text-2xl font-semibold'>{page.name}</h1>
            </div>
          ))
        }
       
        </div>
    </div>
  )
}

export default Admin