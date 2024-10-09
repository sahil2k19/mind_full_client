import { Container } from '@mui/material'
import React from 'react'

const PsychiatryPage = () => {
    const psychiatryData = [
        {
            id: 1,
            name: "Shubham ",
            img: "https://mindfultms1.s3.us-east-1.amazonaws.com/1728029237361-Dr%20Subham%20%281%29.jpg",
            location: "New Delhi"
        },
        {
            id: 2,
            name: "Sandeep Govil",
            img: "https://mindfultms1.s3.us-east-1.amazonaws.com/1728029275117-Dr%20Sandeep%20Govil%20Pictures.jpg",
            location: "Bangalore"
        },
        {
            id: 3,
            name: "Abhishek",
            img: "https://mindfultms1.s3.us-east-1.amazonaws.com/1728029376714-Dr%20Abhishek%20.jpg",
            location: "New Delhi"
        },
    ]
    return (
        <>
            <div className='mt-8'>
                {/* Main Heading */}
               <Container maxWidth="lg">
               <div className='px-3 text-center'>
                    <h1 className='text-3xl md:text-5xl text-gray-700 font-bold'>
                        Rediscovering Happiness
                    </h1>
                    <p className='text-lg md:text-xl text-gray-600 mt-4'>
                        Your mental well-being matters. Consult our expert psychiatrists today!
                    </p>
                </div>

                {/* Section for Consulting a Psychiatrist */}
                <div className='mt-8 grid grid-cols-1 md:grid-cols-2 items-center'>
                    <div>
                        <h3 className='text-3xl md:text-5xl text-center md:text-start text-gray-700 font-semibold'>
                            When to Consult a <span className='font-bold'>Psychiatrist</span>?
                        </h3>
                        <p className='text-center md:text-start text-gray-500 mt-2 '>
                            If you're experiencing prolonged periods of sadness, anxiety, or overwhelming stress, it's time to seek help from a professional. If you're experiencing prolonged periods of sadness, anxiety, or overwhelming stress,
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <img className=' h-[350px] object-cover' src={'https://img.freepik.com/free-vector/mental-health-understanding-brain-vector_53876-79082.jpg?t=st=1728383713~exp=1728387313~hmac=08813df46e028933b3672c919c7ae240791d87261d0107527d59ba8b693ab5f5&w=740'} alt='Consult a Psychiatrist' />
                    </div>
                </div>
               </Container>

                {/* Psychiatrists List */}
                <div className='mt-12'>
                    <h3 className='text-3xl md:text-4xl text-center text-gray-700 font-semibold'>
                        Our Psychiatrists
                    </h3>
                    <div className='grid grid-cols-3 gap-2 mt-8 px-4'>
                        {
                            psychiatryData.map((item) => (
                                <div
                                    key={item.id}
                                    className='flex flex-col items-center bg-white rounded-lg px-10 '
                                >
                                    <div className='w-[90px] md:w-[150px] h-[90px] md:h-[150px]'>
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className='w-full h-full object-cover rounded-full border-2 border-orange-500'
                                        />
                                    </div>
                                    <div className='mt-4 text-center'>
                                        <span className='text-sm font-semibold text-gray-800 truncate block w-[100px]'>
                                            {item.name}
                                        </span>
                                        <p className='text-[12px] text-gray-500'>
                                            {item.location}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PsychiatryPage
