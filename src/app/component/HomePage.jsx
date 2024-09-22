import React from 'react'
import Link from 'next/link';
// import VideoComponent from './VideoComponent'
import NewComponent from './newComponent';
import CounterComponent from './CounterComponent';
import { Container } from '@mui/material';
import OurDoctorSection from '../clinicLocation/[city]/OurDoctorSection';
// import Footer from '@/components/Footer'
const videos = [
    { id: 1, service: 'Therapy for Depression', speaker: 'Sanjana Mathur', src: '/home/random.mp4' },
    { id: 2, service: 'Anxiety Management', speaker: 'John Doe', src: '/home/health.mp4' },
    { id: 3, service: 'Stress Relief Techniques', speaker: 'Jane Smith', src: '/home/random.mp4' },
    { id: 4, service: 'Anxiety Management', speaker: 'John Doe', src: '/home/health.mp4' },
]

const servicesIcon = [
    {
        icon: '/home/therapyIcon.svg',
        link: '/services/therapy'
    },
    {
        icon: '/home/Psychiatry.svg',
        link: '/services/psychiatry'
    },
    {
        icon: '/home/assessmentsIcon.svg',
        link: '/assesment'
    },
    {
        icon: '/home/tmsIcon.svg',
        link: '/services/tms-treatment-page'
    },
]
const HomePage = ({ allSection }) => {

    const MobileScreen = () => {
        return (
            <>
                {/* hero section */}
                <section className='mb-5'>
                    <div className='md:grid grid-cols-2 items-center'>
                        <div className='flex justify-center w-full px-3  mb-4'>
                            <img className='w-full object-cover' src='/home/banner01.svg' />
                        </div>
                        <div>
                            <div className='flex flex-col justify-center px-2'>
                                {/* <h1 className=' text-3xl mb-5  text-center font-sans font-semibold '>
                                    {allSection?.heroSection?.title}
                                </h1> */}
                                <h1 className=' text-3xl mb-3  text-center font-sans font-semibold '>
                                    You Deserve to <br />
                                    Feel Better
                                </h1>
                                {/* {
                                    allSection?.heroSection?.para?.split("\n").map((para, index) => <p key={index} className='text-center mb-5 font-[15px] text-[#3A3A3A] '>{para}</p>

                                    )
                                } */}

                                {/* <div  dangerouslySetInnerHTML={{ __html: allSection?.heroSection?.para }}/> */}

                                <div className='mb-5'>
                                    <p className='mb-4  font-semibold text-lg  text-center text-gray-600'>Get the best care from our experts </p>
                                    <div className='mb-6'>
                                        <div className='flex gap-5 mb-2 items-center justify-center'>
                                            <div className='flex'>
                                                <img className='w-6' src='/home/mindfulIcon.png' /><span className='text-sm text-blue-500 whitespace-nowrap font-semibold' > Psychologists</span>
                                            </div>
                                            <div className='flex'>
                                                <img className='w-6' src='/home/mindfulIcon.png' /> <span className='text-sm  text-blue-500 whitespace-nowrap font-semibold'>TMS Experts</span>
                                            </div>
                                            <div className='flex'>
                                                <img className='w-6' src='/home/mindfulIcon.png' /> <span className='text-sm  text-blue-500 whitespace-nowrap font-semibold'>Psychiatry</span>
                                            </div>

                                        </div>
                                        {/* <div className='flex justify-center'>
                                            <div className='flex'>
                                                <img className='w-6' src='/home/mindfulIcon.png' /> <span className='text-sm  text-blue-500 font-semibold'>Psychiatry</span>
                                            </div>
                                        </div> */}
                                    </div>
                                    <p className='mb-2 mt-5 font-semibold text-center text-lg text-gray-600'>We help you win over </p>
                                    <div className='flex gap-3 justify-center mb-8'>
                                        <div className='flex items-center gap-2'>
                                            <img className='w-5' src='/home/Tick.png' /><span className='text-sm  text-gray-500 whitespace-nowrap font-semibold'>OCD</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <img className='w-5' src='/home/Tick.png' /><span className='text-sm  text-gray-500 whitespace-nowrap font-semibold'>Anxiety</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <img className='w-5' src='/home/Tick.png' /><span className='text-sm  text-gray-500 whitespace-nowrap font-semibold'>Depression</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <span className='text-sm  whitespace-nowrap text-gray-500 font-semibold'>{"& More..."}</span><img className='w-5 ' src='/home/mindfulIcon.png' />
                                        </div>

                                    </div>
                                    <p className='mb-4  font-semibold text-lg  text-center text-gray-600'>With empathy and confidence,
                                        our professionals will guide you
                                        through every challenge. </p>



                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <Link href={allSection?.heroSection?.button?.link}>
                                    <button

                                        className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 text-white text-sm font-semibold'
                                    >
                                        {allSection?.heroSection?.button?.text}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* free test */}
                <section className='bg-primary-div py-10'>
                    <div>
                        <h1 className='text-2xl  text-center font-sans mb-4 font-semibold'>
                            {allSection?.section2?.para1}
                        </h1>
                    </div>

                    <div className='flex flex-col justify-center mb-5  bg-[rgba(239, 102, 35, 0.3)]'>
                        {/* <div dangerouslySetInnerHTML={{ __html: allSection?.section2?.html1 }} /> */}
                        <div>
                            <img className='w-full' src='/home/bannerNew.jpg' />
                        </div>

                    </div>
                    <div className='flex justify-center'>
                        <Link href={allSection?.section2?.button?.link}>
                            <button className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 font-semibold text-sm text-white'>
                                {allSection?.section2?.button?.text}
                            </button>
                        </Link>
                    </div>
                </section>
                {/* services */}
                <section className='py-5 px-4'>
                    <div className='mb-'>
                        <div className='mb-8'>
                            <h1 className='text-3xl  font-semibold text-gray-800  text-center'>{allSection?.section5?.header}</h1>
                        </div>
                        {
                            allSection?.section5?.services?.map((service, index) => (
                                <div key={index} className='mb-6'>
                                    {/* <h1 className='text-xl font-semibold mb-5 text-center'>{service?.title}</h1> */}
                                    <div className='grid grid-cols-1 md:grid-cols-4 items-center  gap-3 justify-center px-[70px]'>
                                        {
                                            service?.array?.map((i, index) => (
                                                <Link href={servicesIcon[index]?.link} key={index} className='flex cursor-pointer justify-start  items-center  '>
                                                    <img src={servicesIcon[index]?.icon} className='w-[40px] h-[40px]   mb-3 mr-4 ' />
                                                    <p className=' text-lg ml-1 font-semibold '>{i?.name}</p>
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
                <section className=' py-10 px-4  bg-primary-div'>
                    <div className='mb-10'>
                        <h1 className='text-3xl text-center font-sans font-semibold'>
                            {allSection?.section3?.title}
                        </h1>
                        <p className='text-center mb-5 font-[15px] text-[#3A3A3A]'>{allSection?.section3?.para1}</p>
                    </div>

                    <div className='md:grid grid-cols-6 items-center justify-center md:bg-primary-div'>
                        {/* hide this on medium and show alternate */}
                        <div className='flex flex-col justify-between mb-5 items-center pb-4  md:px-8 rounded-lg gap-6 col-span-2  bg-white '>
                            <div className=''>
                                <img className='w-full h-full rounded-t-lg' src={"/home/bannerNew.jpg"} />
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                {/* <div dangerouslySetInnerHTML={{ __html: allSection?.section3?.box?.para }} /> */}
                                <div className='flex  items-center gap-1'>
                                    <img src='/home/Tick.png' className=' w-[17px]' /> <p className='text-left text-gray-700 text-[13px] font-semibold'>NON-INVASIVE</p>
                                </div>
                                <div className='flex  items-center gap-1'>
                                    <img src='/home/Tick.png' className=' w-[17px]' /> <p className='text-left text-gray-700 text-[13px] font-semibold'>NO MEDICATION</p>
                                </div>
                                <div className='flex  items-center gap-1'>
                                    <img src='/home/Tick.png' className=' w-[17px]' /> <p className='text-left text-gray-700 text-[13px] font-semibold'>SAFE</p>
                                </div>
                                <div className='flex  items-center gap-1'>
                                    <img src='/home/Tick.png' className=' w-[17px]' /> <p className='text-left text-gray-700 text-[13px] font-semibold'>US FDA Approved</p>
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
                                <p className='text-center mb-8 text-gray-700 text-lg font-semibold'>Is TMS for me? Learn how it works and
                                    if it is the right option for you.</p>
                            </div>
                            <div className='flex justify-center'>
                                <Link href={allSection?.section3?.button?.link} className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 font-semibold text-sm text-white'>
                                    {allSection?.section3?.button?.text}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>


                {/* wy tms */}
                <section className='py-8 px-4 mb-11'>
                    <div className='mb-8'>
                        <div dangerouslySetInnerHTML={{ __html: allSection?.section4?.header }} />

                        <div dangerouslySetInnerHTML={{ __html: allSection?.section4?.para }} />
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
                    <NewComponent videos={videos} />
                </section>
                {/* locations */}
                {/* no more needed now */}
                {/* <section className='py-8 px-4'>
                    <div className='mb-8 flex flex-col justify-center items-center'>
                        <h1 className='text-3xl  font-semibold text-gray-800  text-center'>{allSection?.section6?.header}</h1>
                        <p className='text-center text-sm text-gray-500'>{allSection?.section6?.para}</p>
                    </div>

                    <div className='md:px-8'>
                        {
                            allSection?.section6?.locations?.map((location, index) => (
                                <div key={index} className='md:mb-11'>
                                    <div className="flex items-center justify-center py-4 ">
                                        <div className="">
                                            <p className="text-xl text-center font-semibold top-[13px] left-[35%] px-2 bg-white ">{location?.title}</p>

                                        </div>

                                    </div>

                                    <div className='flex flex-col md:grid grid-cols-4 md:gap-5 justify-center'>
                                        {location?.locationArray?.map((i, index) => (
                                            <div key={index} className='bg-primary-div px-4 mb-4 py-4 rounded-lg'>
                                                <h1 className='text-xl font-semibold text-gray-700 '>{i?.title}</h1>
                                                <p className='text-sm text-[#EF6623]'>{i?.address}</p>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            ))
                        }

                    </div>


                </section> */}
                {/* our experts */}
               <div className='bg-primary-div'>
               <OurDoctorSection/>
               </div>
            </>
        )
    }

    const DesktopHeroSection = () => {
        return (
            <>
                <section className='mb-5'>
                    <div className='grid grid-cols-2  w-full px-3 cover mb-4 h-[545px] rounded-xl ' style={{
                        backgroundImage: `url('/home/banner02.svg')`,
                        backgroundSize: 'cover',  // This makes the background image cover the entire div
                        backgroundPosition: 'center', // This centers the background image
                    }}>
                        {/* <img className='w-full object-cover' src='/home/banner02.svg' /> */}
                        <div className='flex flex-col justify-center items-start'>
                            <div className='flex flex-col justify-center  items-start px-8'>
                                <h1 className=' text-6xl mb-5 text-[#3A3A3A]  text-start font-sans font-semibold '>
                                    {allSection?.heroSection?.title}
                                </h1>
                                {
                                    allSection?.heroSection?.para?.split("\n").map((para, index) => <p key={index} className=' mb-5 font-[400] text-[18px] text-[#3A3A3A] '>{para}</p>

                                    )
                                }
                                {/* <div dangerouslySetInnerHTML={{ __html: allSection?.heroSection?.para }} /> */}

                            </div>
                            <div className='flex justify-start px-8'>
                                <Link href={allSection?.heroSection?.button?.link}>
                                    <button

                                        className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-10 py-3 text-white text-lg hover:shadow-lg font-semibold'
                                    >
                                        {allSection?.heroSection?.button?.text}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </section>

                {/* free test */}
                <section className=' py-10'>
                    <div className='mb-8'>
                        <h1 className='text-4xl  text-center font-sans mb-4 font-semibold'>
                            {allSection?.section2?.para1}
                        </h1>
                        <p className='text-lg text-center'>{allSection?.section2?.para2}</p>
                    </div>

                    <div className='flex justify-around items-center bg-primary-div p-8 rounded-xl'>
                        <div className='flex flex-col justify-center mb-5  bg-[rgba(239, 102, 35, 0.3)] text-[#3A3A3A]'>
                            {/* <div className='text-3xl' dangerouslySetInnerHTML={{ __html: allSection?.section2?.html1 }} /> */}
                            <span className='text-3xl  mb-2'>Take a <span className='font-semibold'>FREE TEST </span></span>
                            <span className=' text-3xl'>to identify your symptoms</span>
                        </div>
                        <div className='flex justify-center'>
                            <Link href={allSection?.section2?.button?.link}>
                                <button className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-12 py-3 font-semibold text-lg text-white'>
                                    {/* {allSection?.section2?.button?.text} */}
                                    Start Test
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* More about tms */}

                <section className=' py-10 px-4 mb-6'>
                    <div className='mb-10'>
                        <h1 className='text-4xl text-center font-sans mb-4 font-semibold'>
                            {allSection?.section3?.title}
                        </h1>
                        <p className='text-center mb-5 font-[15px] text-[#3A3A3A]'>{allSection?.section3?.para1}</p>
                    </div>

                    <div className=''>
                        {/* hide this on medium and show alternate */}
                        <div className='flex justify-center gap-8 mb-5 items-center py-6 px-12 rounded-lg   bg-primary-div '>
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

                        <div className='col-span-4 md:bg-primary-div'>
                            <div className='flex flex-col justify-center mb-5 px-8  py-6 bg-[rgba(239, 102, 35, 0.3)]'>
                                {/* <div dangerouslySetInnerHTML={{ __html: allSection?.section3?.para2 }} /> */}
                                <p className='text-lg text-center'>At MindfulTMS, we bring 5+ years of TMS experience with 10+ clinics in India and USA.</p>
                                <p className='text-lg text-center'><span className='font-bold'>Is TMS for me? </span>Learn how it works and if it is the right option for you.</p>
                            </div>
                            <div className='flex justify-center  '>
                                <Link href={allSection?.section3?.button?.link} className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 font-semibold text-sm text-white'>
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

                {/* services */}
                <section className='py-8 px-4 bg-primary-div rounded-lg'>
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

                {/* client speaks */}
                <section className='py-8 px-4'>
                    {/* <VideoComponent /> */}
                    <NewComponent videos={allSection?.section8?.videos} />
                </section>

                {/* locations */}
                <section className='py-8 px-4'>
                    <div className='mb-8 flex flex-col justify-center items-center'>
                        <h1 className='text-3xl  font-semibold text-gray-800  text-center'>{allSection?.section6?.header}</h1>
                        <p className='text-center text-sm text-gray-500'>{allSection?.section6?.para}</p>
                    </div>

                    <div className='md:px-8 grid grid-cols-2 gap-8 justify-between'>
                        {
                            allSection?.section6?.locations?.map((location, index) => (
                                <div key={index} className='md:mb-11'>
                                    <div className="flex items-center justify-center py-4 ">
                                        <div className="">
                                            <p className="text-xl text-center font-semibold top-[13px] left-[35%] px-2 bg-white ">{location?.title}</p>

                                            {/* <div className="w-[30vw] h-px bg-black"></div> */}
                                        </div>

                                    </div>

                                    <div className='flex flex-col  justify-center'>
                                        {location?.locationArray?.map((i, index) => (
                                            <div key={index} className='bg-primary-div px-4 mb-4 py-4 rounded-lg'>
                                                <h1 className='text-xl font-semibold text-gray-700 '>{i?.title}</h1>
                                                <p className='text-sm text-[#EF6623]'>{i?.address}</p>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            ))
                        }

                    </div>


                </section>
                {/* our experts */}
                <section className='py-8 px-4'>
                    <div className='mb-11 flex flex-col justify-center items-center'>
                        <h1 className='text-3xl  font-semibold text-gray-800  text-center'>Our Experts</h1>
                    </div>
                    <div className='grid grid-cols-3 md:grid-cols-6 gap-4 text-center'>
                        {
                            allSection?.section7?.expertArray?.map((expert, index) => (
                                <div key={index} className=' flex flex-col items-center justify-center'>
                                    <div className='mb-2 h-[71] w-[71] rounded-full'>
                                        <img className='w-full h-full rounded-full' src={expert?.img} />
                                    </div>
                                    <div className='mb-1'>
                                        <h1 className='font-semibold mb-1 text-[13px] text-gray-800'>{expert?.name}</h1>
                                        <p className='text-[11px] text-gray-500'>{expert?.desig}</p>
                                    </div>
                                    <div className='mb-2'>
                                        <p className='text-[12px] text-gray-500 font-bold'>{expert?.location}</p>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </section>


            </>
        )
    }

    return (
        <div className="">
            {allSection &&
                <div className=" select-none">
                    {/* hero section */}
                    <div className='md:hidden'>
                        <MobileScreen />
                    </div>
                    <Container className='md:block hidden'>
                        <DesktopHeroSection />
                    </Container>


                </div>
            }
        </div>
    )
}

export default HomePage