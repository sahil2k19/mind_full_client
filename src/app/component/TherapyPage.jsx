import React from 'react'
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment'
import { Container } from '@mui/material'
import TakeTest from './TakeTest'
import AllTherapyWithSearch from './AllTherapyWithSearch'
const conditions = [
    {
        id: 1,
        name: 'Depressed',
        icon: '/services/depressed.jpg'
    },
    {
        id: 2,
        name: 'Anxious',
        icon: '/services/anxiety.jpg'
    },
    {
        id: 3,
        name: 'Stressed',
        icon: '/services/stressed.jpg'
    },
]

const conditionBubble = [
    {
        id: 1,
        name: 'Depressed',
        icon: '/services/depressed.jpg'
    },
    {
        id: 2,
        name: 'Anxious',
        icon: '/services/anxiety.jpg'
    },

    {
        id: 3,
        name: 'Stressed',
        icon: '/services/stressed.jpg'
    },
    {
        id: 2,
        name: 'Anxious',
        icon: '/services/anxiety.jpg'
    },
    {
        id: 3,
        name: 'Stressed',
        icon: '/services/stressed.jpg'
    },
    {
        id: 1,
        name: 'Depressed',
        icon: '/services/depressed.jpg'
    },
    {
        id: 2,
        name: 'Anxious',
        icon: '/services/anxiety.jpg'
    },
]

const TherapyPage = () => {
    return (
        <>
            <div maxWidth="lg" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-12 gap-8">
                    {/* Text Section */}
                    <div className="text-center md:text-left mx-2">
                        <h1 className="text-3xl md:text-[38px] font-semibold leading-snug text-primary mb-6">
                        Personalised Therapy for a Healthier You
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8">
                        Discover a safe space with our experienced therapists. We offer tailored support to help you overcome challenges with confidence. </p>
                        <div className="flex justify-center md:justify-start">
                            <RequestAppointment name="Book a Consultation" customStyle="px-6 py-3 rounded-full text-lg transition bg-primary-orange text-white font-semibold hover:bg-orange-500 active:bg-orange-600" />
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img className="w-full md:w-[400px] lg:w-[450px] transition-transform duration-300 transform hover:scale-105" alt="Therapy Banner" src="https://mindfultms1.s3.amazonaws.com/GK-1VIP+COUNSELING+ROOM+(2).jpg" />
                    </div>
                </div>
            </div>

            {/* Feeling Section */}
            {/* <div className="bg-primary-div py-12 mb-8">
                <h3 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-primary">
                    Are You Feeling ?
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-3 gap-6 px-2 justify-center items-center">
                    {conditions?.map((feeling, idx) => (
                        <div key={feeling.id} className="flex flex-col items-center ">
                            <img className="w-[100px] h-[100px] md:w-[250px] md:h-[250px] rounded-full border-4 border-orange-400 object-cover shadow-md" src={feeling.icon} alt={feeling.name} />
                            <span className="mt-4 text-lg font-semibold text-gray-700">{feeling.name}</span>
                        </div>
                    ))}
                </div>
            </div> */}
            <div className="max-w-4xl mx-auto px-4 pt-4 pb-[50px]">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                 {`   MindfulTMS's experts specialise in treating a variety of conditions`}
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                    {conditionBubble.map((condition) => (
                        <div
                            key={condition.name}
                            className="flex items-center bg-green-100 text-sm text-gray-700 px-4 py-2 rounded-full"
                        >
                            <span>{condition.name}</span>
                        </div>
                    ))}
                    <div className="flex items-center text-sm bg-green-100 text-gray-700 px-4 py-2 rounded-full">
                        <span>and more...</span>
                    </div>
                </div>
            </div>

            {/* Take Test */}
            <div className='md:hidden bg-primary-div'>
                <TakeTest />
            </div>

            <div className='px-4  py-12'>
                <AllTherapyWithSearch />
            </div>

         



        </>
    )
}

export default TherapyPage
