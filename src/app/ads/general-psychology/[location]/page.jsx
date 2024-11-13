
import OurDoctorSection from '@/app/clinicLocation/[city]/OurDoctorSection'
import RequestAppointment from '@/app/clinicLocation/[city]/RequestAppointment'
import ClinicLocationDoctors from '@/app/component/ClinicLocationDoctors'
import CounterComponent from '@/app/component/CounterComponent'
import TestimonialComponent from '@/app/component/TestimonialComponent'
import { HomePageSections as allSection } from '@/example'
import Image from 'next/image'
import Link from 'next/link'


const servicesIcon = [
    {
        icon: '/iconsNew/therapy.png',
        link: '/services/therapy',
        name: 'Therapy'
    },
    {
        icon: '/iconsNew/psychiatry.png',
        link: '/services/psychiatry',
        name: 'Psychiatry'

    },
    {
        icon: '/iconsNew/assessment.png',
        link: '/assesment',
        name: 'Professional Assessment'

    },
    {
        icon: '/iconsNew/tms.png',
        link: '/services/tms-treatment-page',
        name: 'TMS'

    },
]
export default function Component({ params }) {
    // console.log('location', params.location)
    const city = params.location
    const location = city === 'gk' ? 'New Delhi - Greater Kailash 1' : city === 'wf' ? 'Bengaluru - Whitefield' : city === 'hb' ? 'Bengaluru - Hebbal' : '';



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




    // Automatically change testimonials every 2 seconds


    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     // Handle form submission
    // }

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
                        <form  className="space-y-4">
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
                                <img
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
                                        <img
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
                                        <img
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
                    <section className="mx-3 py-6">
                        <h2 className="mb-12 text-center text-3xl font-bold text-teal-700">
                            Our Expert Team of <span className="text-orange-500">Psychologists</span>
                        </h2>
                        <div className="mx-auto max-w-md text-center">
                            <img
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

    const NewMobileView = () => {
        return (
            <>
                {/* hero section */}
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
                            <p className="text-sm md:text-lg text-white font-bold text-end">
                                Our Experienced Psychologists are here to help you at our {location}
                            </p>
                        </div>
                    </div>
                </section>
                 {/* Contact Form */}
                 <section className="mx-auto max-w-md rounded-lg  p-6 ">
                        <form  className="space-y-4">
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
                                <img
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
                    
                {/* services */}
                <section className='py-5 px-4'>
                    <div className=''>
                        <div className='mb-5'>
                            <h1 className='text-3xl font-semibold text-gray-800 text-center'>Services We Offer</h1>
                        </div>
                        {
                            allSection?.section5?.services?.map((service, index) => (
                                <div key={index} className=''>
                                    <div className='grid grid-cols-2 items-center gap-6 justify-center'>
                                        {
                                            service?.array?.map((i, index) => (
                                                <Link href={servicesIcon[index]?.link} key={index} className='flex flex-col cursor-pointer justify-center items-center mb-2'>
                                                    <img src={servicesIcon[index]?.icon} className='w-[80px] h-[80px] mb-4' />
                                                    <p className='text- font-semibold text-center'>{servicesIcon[index]?.name}</p>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>

                {/* More about tms */}
                <section className=' py-10 px-4  bg-primary-div'>
                    <div className='mb-5'>
                        <h1 className='text-3xl text-center font-sans font-semibold'>
                            {allSection?.section3?.title}
                        </h1>
                        <p className='text-center mt-2 mb-2 text-[16px] text-[#545454] font-semibold'>A safe approach using magnets to treat <strong>Depression, Anxiety, OCD and more.</strong></p>
                    </div>

                    <div className='md:grid grid-cols-6 items-center justify-center md:bg-primary-div'>
                        {/* hide this on medium and show alternate */}
                        <div className='flex flex-col justify-between mb-10 items-center pb-4  md:px-8 rounded-lg gap-6 col-span-2 bg-orange-100  '>
                            <div className=''>
                                <img className='w-full h-full border-2 border-white  rounded-lg' src={"https://mindfultms1.s3.us-east-1.amazonaws.com/1731475215316-TMS-Illustration-Square-logo-min.png"} />
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                {/* <div dangerouslySetInnerHTML={{ __html: allSection?.section3?.box?.para }} /> */}
                                <div className='flex  items-center gap-1'>
                                    <svg fill="#ea580c" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 24 24">
                                        <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                                    </svg><p className='text-left text-gray-700 text-[13px] font-semibold'>NON-INVASIVE</p>
                                </div>
                                <div className='flex  items-center gap-1'>
                                    <svg fill="#ea580c" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 24 24">
                                        <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                                    </svg><p className='text-left text-gray-700 text-[13px] font-semibold'>NO MEDICATION</p>
                                </div>
                                <div className='flex  items-center gap-1'>
                                    <svg fill="#ea580c" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 24 24">
                                        <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                                    </svg><p className='text-left text-gray-700 text-[13px] font-semibold'>SAFE</p>
                                </div>
                                <div className='flex  items-center gap-1'>
                                    <svg fill="#ea580c" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 24 24">
                                        <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                                    </svg><p className='text-left text-gray-700 text-[13px] font-semibold'>US FDA Approved</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-4 md:bg-primary-div'>
                            {/* <div className='flex flex-col justify-center mb-5 px-8 bg-[rgba(239, 102, 35, 0.3)]'>
                                <div dangerouslySetInnerHTML={{ __html: allSection?.section3?.para2 }} />
                            </div> */}
                            <div className='mb-8'>
                                <CounterComponent />
                            </div>
                            <div>
                                <p className='text-center mb-8 text-gray-700 text-lg font-semibold'><strong>Is TMS for me?</strong> <br />Learn how it works and
                                    if it is the right option for you.</p>
                            </div>
                            <div className='flex justify-center'>
                                <Link href={"/pages/tms"} className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 font-semibold text-sm text-white'>
                                    {allSection?.section3?.button?.text}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>


                {/* wy tms */}
                <section className='py-8 px-4 mb-3'>
                    <div className='mb-8'>
                        <div dangerouslySetInnerHTML={{ __html: allSection?.section4?.header }} />

                        <div className='mt-2' dangerouslySetInnerHTML={{ __html: allSection?.section4?.para }} />
                    </div>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0  items-center  justify-center'>
                            {
                                allSection?.section4?.services?.map((service, index) => (
                                    <div key={index} className='flex flex-col justify-center  items-center'>
                                        <img className='w-[64px] h-[64px] text-center' src={service?.icon} />
                                        <p className='text-md font-semibold mt-3'>{service?.text}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </section>
                <hr className='border-1 border-gray-200' />

                {/* client speaks */}
                <section className='py-8 px-4'>
                    {/* <VideoComponent /> */}
                    {/* <NewComponent videos={videos} /> */}
                    <TestimonialComponent />
                    {/* <TestimonialComponents2/> */}

                </section>

                {/* our experts */}
                <div className='bg-primary-div'>
                    {/* <OurDoctorSection /> */}
                    <ClinicLocationDoctors city={city}/>
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
                            <form  className="space-y-1">
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
                                    <img
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
                       {/* services */}
                <section className='py-8 px-4  rounded-lg'>
                    <div className='mb-8'>
                        <div className='mb-8 py-5'>
                            <h1 className='text-3xl  font-semibold text-gray-800  text-center'>{allSection?.section5?.header}</h1>
                        </div>
                        {
                            allSection?.section5?.services?.map((service, index) => (
                                <div key={index} className='mb-6 '>
                                    {/* <h1 className='text-xl font-semibold mb-5 text-center'>{service?.title}</h1> */}
                                    <div className='grid grid-cols-2 md:grid-cols-4 items-center mb-11 gap-8 justify-center'>
                                        {
                                            service?.array?.map((i, index) => (
                                                <Link href={servicesIcon[index]?.link} key={index} className='flex cursor-pointer flex-col justify-center  items-center text-center '>
                                                    {/* <div className='w-[164px] h-[164px] rounded-full bg-[#EF6623] mb-3 '></div> */}
                                                    <div className='w-[164px] h-[164px] flex justify-center'>
                                                        <img src={servicesIcon[index]?.icon} className=' p-4 h-full w-full object-contain    mb-3 ' />
                                                    </div>
                                                    <p className='text-xl text-center font-semibold'>{i?.name}</p>
                                                </Link>
                                            ))
                                        }

                                    </div>
                                    {/* <div className='flex justify-center '>
                                            <Link href={service?.button?.link || "/"}>
                                                <button className='bg-[#F8A51C] hover:bg-yellow-500 active:bg-yellow-600 rounded-lg px-8 py-3 font-semibold text-sm text-white'>
                                                    {service?.button?.text}
                                                </button>
                                            </Link>
                                        </div> */}
                                </div>
                            ))
                        }
                    </div>

                </section>



                    {/* More about tms */}

                <section className=' py-10 px-4 mb-6 bg-primary-div'>
                    <div className='mb-10'>
                        <h1 className='text-4xl text-center font-sans mb-4 font-semibold'>
                            {allSection?.section3?.title}
                        </h1>
                        <p className='text-center mb-5 font-[15px] text-[#3A3A3A]'>{allSection?.section3?.para1}</p>
                    </div>

                    <div className=''>
                        {/* hide this on medium and show alternate */}
                        <div className='flex justify-center gap-8 mb-5 items-center py-6 rounded-lg '>
                            <div className=' flex p-6 rounded-lg bg-primary-div '>
                            <div className='h-[300px] w-[400px]'>
                                <img className='w-full h-full' src={allSection?.section3?.box?.banner} />
                            </div>
                            <div className='flex flex-col justify-center px-8 text-gray-700'>
                                <h3 className='font-semibold py-5 text-2xl'>NON-INVASIVE</h3>
                                <h3 className='font-semibold py-5 text-2xl'>NO MEDICATION</h3>
                                <h3 className='font-semibold py-5 text-2xl'>SAFE</h3>
                                <h3 className='font-semibold py-5 text-2xl'>US FDA Approved</h3>
                            </div>
                            </div>
                        </div>

                        <div className='col-span-4 md:bg-primary-div'>
                            <div className='flex flex-col justify-center mb-5 px-8  py-6 bg-[rgba(239, 102, 35, 0.3)]'>
                                {/* <div dangerouslySetInnerHTML={{ __html: allSection?.section3?.para2 }} /> */}
                                <p className='text-lg text-center'>At MindfulTMS, we bring 5+ years of TMS experience with 10+ clinics in India and USA.</p>
                                <p className='text-lg text-center'><span className='font-bold'>Is TMS for me? </span>Learn how it works and if it is the right option for you.</p>
                            </div>
                            <div className='flex justify-center  '>
                                <Link href={"/pages/tms"} className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 font-semibold text-sm text-white'>
                                    {allSection?.section3?.button?.text}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* wy tms */}
                <section className='py-4 px-4 mb-11'>
                    <div className='mb-10'>
                        <h1 className='text-4xl text-center font-sans mb-4'>Why Choose <span className='font-semibold'> MindfulTMS?</span></h1>

                        <p className='text-lg text-center'>Your well being is our mission</p>
                    </div>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-[70px]  items-center  justify-center'>
                            {
                                allSection?.section4?.services?.map((service, index) => (
                                    <div key={index} className='flex flex-col justify-center  items-center'>
                                        <img className='w-[132px] h-[132px] text-center' src={service?.icon} />
                                        <p className='text-2xl font-semibold mt-3'>{service?.text}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </section>

             

  {/* client speaks */}
  <section className='py-8 px-4 md:px-[100px] mt-4'>
                    {/* <VideoComponent /> */}
                    {/* <NewComponent videos={allSection?.section8?.videos} /> */}
                    <h1 className='text-3xl text-gray-800 font-semibold  text-center  mb-6'>Clients Speak</h1>
                    <TestimonialComponent />

                </section>
                     {/* our experts */}
                <div className='bg-primary-div'>
                    <OurDoctorSection />
                </div>

                  
                </div>
            </>
        )
    }


    return (
        <>
            <div className='md:hidden'>
                <NewMobileView />
            </div>
            <div className='hidden md:block'>
                <DesktopView />
            </div>
        </>
    )
}
