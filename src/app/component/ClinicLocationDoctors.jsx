"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ClinicLocationDoctors = ({ city }) => {
    const [ourExperts, setOurExperts] = useState([])

    const getOurExperts = async () => {
        console.log('getOurExperts')
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}doctors`, {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            },
        });

        // Filter doctors based on the city
        const filteredExperts = res.data.filter(expert => {
            if (city === "New-Delhi") {
                return expert.location === "Delhi - Greater Kailash 1";
            } else if (city === "Bengaluru-Whitefield") {
                return expert.location === "Bangalore - Whitefield";
            } else if (city === "Bengaluru-Hebbal") {
                return expert.location === "Bangalore - Hebbal";
            }
            return true; // If no specific city match, return all experts (or you can change this to return an empty array)
        });

        setOurExperts(filteredExperts);
    }

    useEffect(() => {
        getOurExperts();
    }, [])

    return (
        <section className='py-8 px-4'>
            <div className='mb-11 flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-semibold text-gray-800 text-center'>Our Experts</h1>
            </div>
            <div className={`grid grid-cols-3 md:grid-cols-6 gap-4 text-center ${ourExperts?.length < 2 ? 'justify-center' : ''}`}>
    {ourExperts?.map((expert, index) => (
        <Link href={`/doctor/${expert?._id}`} key={index} className={`flex flex-col items-center ${ourExperts.length < 2 ? 'col-start-2' : ''}`}>
            <div className='mb-2 h-[71px] w-[71px] flex flex-col items-center'>
                <img className='h-[75px] w-[75px] object-cover border-[3px] border-orange-400 rounded-full' style={{ objectPosition: "top" }} src={expert?.image} alt={expert?.name} />
            </div>
            <div className='mb-1'>
                <p className='font-semibold text-[14px] text-gray-800 max-w-[105px]'>{expert?.name}</p>
                <p className='text-[10px] text-gray-800 max-w-[105px]'>{expert?.designation}</p>
            </div>
        </Link>
    ))}
</div>

        </section>
    )
}

export default ClinicLocationDoctors;
