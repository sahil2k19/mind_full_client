"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect } from 'react'

const OurDoctorSection = () => {
    const [ourExperts, setOurExperts] = React.useState([])


    const getAllDoctors = ()=>{
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}doctors`)
        .then(res=>{
            setOurExperts(res.data)
        }).catch((err)=>console.log(err))
    }
    useEffect(()=>{
        getAllDoctors()
    },[])
  return (
    <section className='py-8 px-4 '>
    <div className='mb-11 flex flex-col justify-center items-center'>
        <h1 className='text-3xl  font-semibold text-gray-800  text-center'>Our Experts</h1>
    </div>
    <div className='grid grid-cols-3 md:grid-cols-6 gap-4 text-center'>
        {
            ourExperts?.map((expert, index) => (
                <Link href='/doctor/1' key={index} className=' flex flex-col items-center justify-center'>
                    <div className='mb-2 h-[71] w-[71]'>
                        <img className='h-[75px] w-[75px] object-cover border-[3px] border-orange-400 rounded-full' src={expert?.image} />
                    </div>
                    <div className='mb-1'>
                        <p className='font-semibold  text-[13px] text-gray-800'>{expert?.name}</p>
                

                    </div>
                 
                </Link>
            ))
        }


    </div>
</section>
  )
}

export default OurDoctorSection


