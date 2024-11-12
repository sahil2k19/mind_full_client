'use client'

import RequestAppointment from '@/app/clinicLocation/[city]/RequestAppointment'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Component({ params }) {
    console.log('location', params.location)
    const city = params.location
    const location = city === 'gk' ? 'New Delhi - Greater Kailash 1' : city === 'wf' ? 'Bengaluru - Whitefield' : city === 'hb' ? 'Bengaluru - Hebbal': '';

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contact: '',
        timeSlot: '',
        comment: ''
    })

    const conditions = [
        { name: 'Depression', image: '/ads/depression1.png' },
        { name: 'Anxiety', image: '/ads/anxiety.png' },
        { name: 'Obsessive Compulsive Disorder (OCD)', image: '/ads/ocd1.png' },
        { name: 'Adult ADHD', image: '/ads/adhd1.png' }
    ]

    const symptoms = [
        { name: 'Feeling Sad', icon: '/ads/sad.png' },
        { name: 'Grief', icon: '/ads/grief.png' },
        { name: 'Hopelessness', icon: '/ads/hopeless.png' },
        { name: 'Excessive worry', icon: '/ads/excessive.png' },
        { name: 'Fear', icon: '/ads/fear.png' },
        { name: 'Panic of doom', icon: '/ads/panic.png' },
        { name: 'Feeling Irritable', icon: '/ads/feeling.png' },
        { name: 'Fear of contamination / germs', icon: '/ads/fear-of.png' },
        { name: 'Washing hand extensively', icon: '/ads/washing.png' },
        { name: 'Unwanted thoughts', icon: '/ads/unwanted.png' },
    ]

    const testimonials = [
        {
            text: "“Dr. Shilpi has been a great help to deal with the stress and turmoil that I have been facing. She is very friendly and easy to talk to. She lends her ear and attention to all the issues and emotional blips that I have been going through. She helps to see things with a different perspective and induces positivity which has greatly helped me cope up with my issues.”.",
            author: "Practo Patient"
        },
        {
            text: "“Dr. Shilpi's non-judgmental demeanor and practical advice during my recent visit left a lasting impression. She genuinely listens, provides achievable solutions, and remains available beyond sessions, which has significantly improved my perspective. Without a doubt, I highly recommend her for her invaluable guidance.”. ",
            author: "Practo Patient"
        },
        {
            text: "“I had severe anxiety & depression few days ago whish was making my life miserable, sooner or later my mom realized that I need to be treated and then we went to Dr. Shilpi…. she is the most calm & humble person I have ever met in my life…. She listened to all my problems patiently & made me understand that sometimes its ok to not be ok…. she is the person whom I trust a lot…. always smiling & her welcoming nature makes me forget all my problems…. Thank u so much Dr. Shilpi for treating me”",
            author: "Saanchi Kochhar"
        }
    ]

    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const nextTestimonial = () => {
        setCurrentTestimonial((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        )
    }

    // Automatically change testimonials every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial()
        }, 2000)

        return () => clearInterval(interval) // Clear the interval on component unmount
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
    }

    const MobileView = () => {
        return (
            <>
                <div className=" bg-gray-50">
                    {/* Hero Section */}
                    <section
                        className="relative min-h-[200px] bg-cover bg-center flex items-center"
                        style={{ backgroundImage: "url('/ads/ad1.png')" }}
                    >
                        <div className="bg-opacity-75 w-full h-full flex items-center">
                            <div className="w-full p-2">
                                <div className='flex justify-end'>
                                    <div className='w-1/2 text-end'>
                                        <span className="mb-4 text-[13px] md:text-2xl font-semibold">
                                            Are you or a loved one experiencing symptoms of depression, anxiety, ADHD, OCD or any other condition?
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm md:text-lg text-orange-400 font-bold text-end">
                                    Our Experienced Psychologists are here to help you at our {location}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Contact Form */}
                    <section className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full rounded border p-3 focus:outline-none "
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Id"
                                className="w-full rounded border p-3 focus:outline-none "
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Contact No*"
                                className="w-full rounded border p-3 focus:outline-none "
                                required
                            />
                            <select className="w-full rounded border p-3 focus:outline-none text-gray-400">
                                <option className='text-gray-400'>Select time slot to call back</option>
                                <option className='text-gray-400'>10am-12pm</option>
                                <option className='text-gray-400'>12pm-2pm</option>
                                <option className='text-gray-400'>2pm-4pm</option>
                                <option className='text-gray-400'>4pm-6pm</option>
                            </select>
                            <textarea
                                placeholder="Comment"
                                className="h-32 w-full rounded border p-3 focus:outline-none "
                            ></textarea>
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500"
                            >
                                <Image
                                    src="/home/whatsapp2.svg"
                                    alt="WhatsApp"
                                    width={24}
                                    height={24}
                                    className="h-6 w-6"
                                />
                                Request an Appointment
                            </button>
                        </form>
                    </section>

                    {/* What We Treat */}
                    <section className="bg-[#e9f7ff] mx-auto py-6">
                        <h2 className="mb-12 text-center text-3xl font-bold text-teal-700">What We Treat</h2>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 px-2">
                            {conditions.map((condition) => (
                                <div key={condition.name} className="rounded-lg p-4 ">
                                    <div>
                                        <Image
                                            src={condition.image}
                                            alt={condition.name}
                                            width={100}
                                            height={100}
                                            className="mb-4 h-[150px] w-full rounded object-cover"
                                        />
                                        <p className="text-center text-teal-700">{condition.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex items-center justify-center'>
                            <RequestAppointment customStyle={"flex w-full items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 mx-10"} name="Book a Consultation" />
                        </div>
                    </section>

                    {/* Symptoms */}
                    <section className="bg-gray-100 py-6">
                        <div className="mx-auto">
                            <h2 className="mb-4 text-center text-3xl font-bold text-teal-700">
                                Are you experiencing any of the following symptoms?
                            </h2>
                            <p className="mb-8 text-center text-gray-600">
                                If Yes, you may benefit from talking to someone
                            </p>
                            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
                                {symptoms.map((symptom) => (
                                    <div key={symptom.name} className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow">
                                        {/* <span className="mb-2 text-3xl">{symptom.icon}</span> */}
                                        <Image
                                            src={symptom.icon}
                                            alt={symptom.name}
                                            width={100}
                                            height={100}
                                            className="mb-4 h-[100px] w-full rounded object-cover"
                                        />
                                        <span className="text-sm text-gray-600">{symptom.name}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 text-center">
                                <button className="rounded bg-orange-500 px-8 py-3 text-white hover:bg-orange-600">
                                    Request an Appointment
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Expert Team */}
                    <section className="mx-auto py-6">
                        <h2 className="mb-12 text-center text-3xl font-bold text-teal-700">
                            Our Expert Team of <span className="text-orange-500">Psychologists</span>
                        </h2>
                        <div className="mx-auto max-w-md text-center">
                            <Image
                                src="https://mindfultms1.s3.us-east-1.amazonaws.com/1730960278075-Dr.Shilpi.jpg"
                                alt="Ms. Shilpi Sharma"
                                width={200}
                                height={200}
                                className="mx-auto mb-4 rounded-full"
                            />
                            <h3 className="text-xl font-bold text-blue-600">Ms. Shilpi Sharma</h3>
                            <p className="font-semibold text-pink-500 text-base">SERVICES</p>
                            <p className="mb-2">Therapy & Assessment</p>
                            <p className="text-pink-500 font-semibold text-base">SPECIALIZATION</p>
                            <p className="mb-4 font-semibold text-sm">Depression, Anxiety, OCD, Bipolar, Marital counselling</p>
                            <div className='flex items-center justify-center'>
                                <RequestAppointment customStyle={"flex w-full items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 mx-10"} name="Request an Appointment" />
                            </div>
                        </div>
                    </section>

                    {/* Testimonials Carousel */}
                    <section className="bg-gray-100 py-6">
                        <div className="mx-auto max-w-2xl">
                            <h2 className="mb-12 text-center text-3xl font-bold text-teal-700">Patient Testimonials</h2>
                            <div className="relative">
                                <div className="text-center p-8 bg-white h-[400px] rounded-lg shadow">
                                    <p className="text-gray-600 mb-4">
                                        {testimonials[currentTestimonial].text}
                                    </p>
                                    <p className="font-bold text-blue-600">- {testimonials[currentTestimonial].author}</p>
                                </div>
                                {/* Carousel Controls */}
                                {/* <div className="absolute top-1/2 transform -translate-y-1/2 flex w-full justify-between px-4">
                            <button
                                onClick={prevTestimonial}
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center"
                            >
                                ‹
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center"
                            >
                                ›
                            </button>
                        </div> */}
                                {/* Indicators */}
                                <div className="flex justify-center gap-2 mt-4">
                                    {testimonials.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`h-2 w-2 rounded-full ${index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Us */}
                    <section className="mx-auto ">
                        <h2 className="mb-4 text-center text-3xl font-bold text-orange-500">
                            Why Choose Us?
                        </h2>
                        <div className="mx-4 space-y-8 ">
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-teal-700">
                                    Experienced Clinical Psychologists:
                                </h3>
                                <p className="text-gray-600">
                                    They are trained to assess and diagnose and provide right therapy for you.
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-teal-700">
                                    Confidential and Supportive Environment:
                                </h3>
                                <p className="text-gray-600">
                                    Your privacy is our priority. We provide a safe and welcoming space for you to discuss your concerns and work towards recovery.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }

    const DesktopView = () => {
        return (
            <>
                <div className=" bg-gray-50">
                    {/* Hero Section */}
                    <section
                        className=" bg-cover h-[70vh] bg-center flex items-center justify-between md:px-[10px] lg:px-[50px] xl:px-[100px] "
                        style={{ backgroundImage: "url('/ads/banner.png')" }}
                    >
                        <div className="bg-opacity-75 w-full h-full flex items-end px-6">
                            <div className="w-full p-2">
                                <div className='mb-6'>
                                    <span className="mb-4 text-[13px] md:text-2xl text-white  font-bold ">
                                        Are you or a loved one experiencing symptoms of depression, anxiety, ADHD, OCD or any other condition?
                                    </span>
                                </div>
                                <p className="text-sm md:text-2xl text-orange-400 font-bold text-start">
                                    Our Experienced Psychologists are here to help you at our {location}
                                </p>
                            </div>
                        </div>
                        {/* Contact Form */}
                        <div className="max-w-[350px] rounded-lg bg-white p-6 m-6 shadow-lg">
                            <form onSubmit={handleSubmit} className="space-y-1">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full rounded border p-3 focus:outline-none "
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email Id"
                                    className="w-full rounded border p-3 focus:outline-none "
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Contact No*"
                                    className="w-full rounded border p-3 focus:outline-none "
                                    required
                                />
                                <select className="w-full rounded border p-3 focus:outline-none text-gray-400">
                                    <option className='text-gray-400'>Select time slot to call back</option>
                                    <option className='text-gray-400'>10am-12pm</option>
                                    <option className='text-gray-400'>12pm-2pm</option>
                                    <option className='text-gray-400'>2pm-4pm</option>
                                    <option className='text-gray-400'>4pm-6pm</option>
                                </select>
                                <textarea
                                    placeholder="Comment"
                                    className="h-32 w-full rounded border p-3 focus:outline-none "
                                ></textarea>
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500"
                                >
                                    <Image
                                        src="/home/whatsapp2.svg"
                                        alt="WhatsApp"
                                        width={24}
                                        height={24}
                                        className="h-6 w-6"
                                    />
                                    Request an Appointment
                                </button>
                            </form>
                        </div>

                    </section>



                    {/* What We Treat */}
                    <section className="bg-[#e9f7ff] mx-auto py-6">
                        <h2 className="mb-12 text-center text-3xl font-bold text-teal-700">What We Treat</h2>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 px-2">
                            {conditions.map((condition) => (
                                <div key={condition.name} className="rounded-lg p-4 ">
                                    <div>
                                        <Image
                                            src={condition.image}
                                            alt={condition.name}
                                            width={100}
                                            height={100}
                                            className="mb-4 h-[150px] w-full rounded object-cover"
                                        />
                                        <p className="text-center text-teal-700">{condition.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex items-center justify-center'>
                            <RequestAppointment customStyle={"flex w-1/3 items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 mx-10"} name="Book a Consultation" />
                        </div>
                    </section>

                    {/* Symptoms */}
                    <section className="bg-gray-100 py-6">
                        <div className="mx-auto">
                            <h2 className="mb-4 text-center text-3xl font-bold text-teal-700">
                                Are you experiencing any of the following symptoms?
                            </h2>
                            <p className="mb-8 text-center text-gray-600">
                                If Yes, you may benefit from talking to someone
                            </p>
                            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
                                {symptoms.map((symptom) => (
                                    <div key={symptom.name} className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow">
                                        {/* <span className="mb-2 text-3xl">{symptom.icon}</span> */}
                                        <Image
                                            src={symptom.icon}
                                            alt={symptom.name}
                                            width={100}
                                            height={100}
                                            className="mb-4 h-[100px] w-full rounded object-cover"
                                        />
                                        <span className="text-sm text-gray-600">{symptom.name}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 text-center">
                                <button className="rounded bg-orange-500 px-8 py-3 text-white hover:bg-orange-600">
                                    Request an Appointment
                                </button>
                            </div>
                        </div>
                    </section>


                    <section>

                        <h2 className="mb-12 text-center text-3xl font-bold text-teal-700">
                            Our Expert Team of <span className="text-orange-500">Psychologists</span>
                        </h2>
                        <div className='grid grid-cols-2 justify-between bg-[#e9f7ff]'>
                            {/* Expert Team */}

                            <div className="mx-auto py-6">

                                <div className="mx-auto max-w-md text-center">
                                    <Image
                                        src="https://mindfultms1.s3.us-east-1.amazonaws.com/1730960278075-Dr.Shilpi.jpg"
                                        alt="Ms. Shilpi Sharma"
                                        width={200}
                                        height={200}
                                        className="mx-auto mb-4 rounded-full"
                                    />
                                    <h3 className="text-xl font-bold text-blue-600">Ms. Shilpi Sharma</h3>
                                    <p className="font-semibold text-pink-500 text-base">SERVICES</p>
                                    <p className="mb-2">Therapy & Assessment</p>
                                    <p className="text-pink-500 font-semibold text-base">SPECIALIZATION</p>
                                    <p className="mb-4 font-semibold text-sm">Depression, Anxiety, OCD, Bipolar, Marital counselling</p>
                                    <div className='flex items-center justify-center'>
                                        <RequestAppointment customStyle={"flex w-full items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 mx-10"} name="Request an Appointment" />
                                    </div>
                                </div>
                            </div>

                            {/* Testimonials Carousel */}
                            <div className=" py-6">
                                <div className="">
                                    <h2 className="mb-12 text-center text-3xl font-bold text-teal-700">Patient Testimonials</h2>
                                    <div className="">
                                        <div className="text-center mx-[100px] p-8 bg-white h-[300px] rounded-lg shadow">
                                            <p className="text-gray-600 mb-4">
                                                {testimonials[currentTestimonial].text}
                                            </p>
                                            <p className="font-bold text-blue-600">- {testimonials[currentTestimonial].author}</p>
                                        </div>

                                        <div className="flex justify-center gap-2 mt-4">
                                            {testimonials.map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`h-2 w-2 rounded-full ${index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Us */}
                    <div className="bg-gray-100 grid grid-cols-3 p-10 rounded-lg ">
                        {/* Image Section */}
                        <div className=" mb-6 md:mb-0">
                            <Image
                                src="/ads/why.jpg"
                                alt="Mindful TMS"
                                width={500}
                                height={500}
                                className="rounded-lg shadow-md h-[400px] object-cover"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="col-span-2 md:pl-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">Why Choose Us?</h2>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-teal-700">Experienced Clinical Psychologists:</h3>
                                <p className="text-gray-700 mt-2">
                                    They are trained to assess and diagnose and provide the right therapy for you.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-teal-700">Confidential and Supportive Environment:</h3>
                                <p className="text-gray-700 mt-2">
                                    Your privacy is our priority. We provide a safe and welcoming space for you to discuss your concerns and work towards recovery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    return (
        <>
            <div className='md:hidden'>
                <MobileView />
            </div>
            <div className='hidden md:block'>
                <DesktopView />
            </div>
        </>
    )
}
