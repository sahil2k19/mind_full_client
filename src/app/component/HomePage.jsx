import React from 'react'
import Link from 'next/link';

const HomePage = ({ allSection }) => {
    return (
        <>
            {allSection &&
                <div className=" select-none">

                    <section className='mb-5'>
                        <div className='md:grid grid-cols-2 items-center'>
                            <div className='flex justify-center w-full px-3  mb-4'>
                                <img className='w-full object-cover' src='/home/banner01.png' />
                            </div>
                            <div>
                                <div className='flex flex-col justify-center px-8'>
                                    <h1 className=' text-3xl mb-5  text-center font-sans font-semibold '>
                                        {allSection?.heroSection?.title}
                                    </h1>
                                    {
                                        allSection?.heroSection?.para?.split("\n").map((para, index) => <p key={index} className='text-center mb-5 font-[15px] text-[#3A3A3A] '>{para}</p>

                                        )
                                    }


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
                    <section className='bg-primary-div py-10'>
                        <div>
                            <h1 className='text-2xl  text-center font-sans mb-4 font-semibold'>
                                {allSection?.section2?.para1}
                            </h1>
                        </div>

                        <div className='flex flex-col justify-center mb-5 px-8 bg-[rgba(239, 102, 35, 0.3)]'>
                            <div dangerouslySetInnerHTML={{ __html: allSection?.section2?.html1 }} />

                        </div>
                        <div className='flex justify-center'>
                            <Link href={allSection?.section2?.button?.link}>
                                <button className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 font-semibold text-sm text-white'>
                                    {allSection?.section2?.button?.text}
                                </button>
                            </Link>
                        </div>
                    </section>

                    <section className=' py-10 px-4'>
                        <div className='mb-10'>
                            <h1 className='text-3xl text-center font-sans font-semibold'>
                                {allSection?.section3?.title}
                            </h1>
                            <p className='text-center mb-5 font-[15px] text-[#3A3A3A]'>{allSection?.section3?.para1}</p>
                        </div>

                        <div className='md:grid grid-cols-6 items-center justify-center md:bg-primary-div'>
                                    {/* hide this on medium and show alternate */}
                            <div className='flex justify-between mb-5 items-center py-6 px-2 md:px-8 rounded-lg gap-6 col-span-2  bg-primary-div '>
                                <div className='h-[150px] w-[167px]'>
                                    <img className='w-full h-full' src={allSection?.section3?.box?.banner} />
                                </div>
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: allSection?.section3?.box?.para }} />
                                </div>
                            </div>
                       
                            <div className='col-span-4 md:bg-primary-div'>
                                <div className='flex flex-col justify-center mb-5 px-8 bg-[rgba(239, 102, 35, 0.3)]'>
                                    <div dangerouslySetInnerHTML={{ __html: allSection?.section3?.para2 }} />
                                </div>
                                <div className='flex justify-center'>
                                    <button className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 font-semibold text-sm text-white'>
                                        {allSection?.section3?.button?.text}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr className='border-1 border-gray-200'/>
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

                    <section className='py-8 px-4 bg-primary-div'>
                        <div className='mb-8'>
                            <div className='mb-8'>
                                <h1 className='text-3xl  font-semibold text-gray-800  text-center'>{allSection?.section5?.header}</h1>
                            </div>
                            {
                                allSection?.section5?.services?.map((service, index) => (
                                    <div key={index} className='mb-6'>
                                        <h1 className='text-xl font-semibold mb-5 text-center'>{service?.title}</h1>
                                        <div className='grid grid-cols-3 items-center mb-11 justify-center'>
                                            {
                                                service?.array?.map((i, index) => (
                                                    <div key={index} className='flex flex-col justify-center  items-center text-center '>
                                                        <div className='w-[64px] h-[64px] rounded-full bg-[#EF6623] '></div>
                                                        <p className='text-sm font-semibold'>{i?.name}</p>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                        <div className='flex justify-center '>
                                            <Link href={service?.button?.link || "/"}>
                                                <button className='bg-[#F8A51C] hover:bg-yellow-500 active:bg-yellow-600 rounded-lg px-8 py-3 font-semibold text-sm text-white'>
                                                    {service?.button?.text}
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </section>

                    <section className='py-8 px-4'>
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
                                                <p className="text-xl text-center top-[13px] left-[35%] px-2 bg-white ">{location?.title}</p>

                                                <div className="w-[90vw] h-px bg-black "></div>
                                                {/* <div className="w-[30vw] h-px bg-black"></div> */}
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


                    </section>

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

                    <section>
                        <div className='p-8'>
                            <div>
                                <h1 className='text-2xl font-semibold mb-6 text-center'>Clients Speak</h1>
                            </div>
                            <div className='  rounded-[20px] overflow-hidden bg-[#F8A51C]'>
                                <div className='flex items-center py-4 justify-center'>
                                    <h1 className='text-white text-lg font-semibold'>Therapy for Depression</h1>
                                </div>
                                {/* <div className="video-container mt-5 w-[100%] h-[400px]">
                <video ref={videoRef} className="video-element w-full h-full object-cover">
                    <source src="/home/health.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <button onClick={togglePlay} className="play-button">
                    {isPlaying ?
                        'Pause'
                        : <span><img src='/home/play.png' />'</span>

                    }
                </button>
            </div> */}
                            </div>

                        </div>
                    </section>

                    {/* <Footer /> */}
                </div>
            }
        </>
    )
}

export default HomePage