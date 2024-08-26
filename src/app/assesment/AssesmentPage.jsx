import { Container } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const AssesmentPage = ({ allSection }) => {
    return (
        <Container maxWidth="lg">
            {allSection && <div>
                <div className='flex p-6 justify-center items-center'>
                    <div></div>
                    <div className=''>
                        <h1 className="text-2xl md:text-3xl font-semibold">{allSection?.section1?.header}</h1>
                    </div>
                </div>

                <div className='p-4 mb-4'>
                    {
                        <div dangerouslySetInnerHTML={{ __html: allSection?.section1?.para1 }}></div>
                    }
                </div>

                <div className=''>
                    <div>
                        <h1 className='text-center text-xl md:text-2xl mb-4 underline'>Available tests:</h1>
                    </div>
                  <div className='flex justify-center'>
                  <div className='grid grid-cols-1 md:grid-cols-3  px-4 py-2 gap-4 '>
                        {
                            allSection?.section1?.AvailableTest?.map((test, index) => (
                                <Link key={index} href={test?.link ?? '#'} className='min-h-[250px] '>
                                    <div className='bg-secondary-yellow overflow-hidden rounded-xl h-full'>
                                        <div
                                            className=" flex justify-center items-center p-3 flex-col bg-center w-full h-[80%]"
                                            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${test?.img}')` }}
                                        >
                                            <h1 className="text-center text-2xl font-bold text-white">{test?.title2}</h1>
                                            <p className="text-white text-center">{test?.para}</p>
                                        </div>
                                        <div className='p-4'>
                                            <h1 className='text-white text-xl font-bold text-center'>{test?.title}</h1>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                  </div>

                    <div className='mt-7 p'>
                        <div className='flex px-4 flex-col items-center mb-6'>
                            <h1 className='text-center text-xl md:text-2xl font-bold mb-4'>{allSection?.section2?.header}</h1>
                            <div dangerouslySetInnerHTML={{ __html: allSection?.section2?.para }}></div>
                        </div>
                        <div className='flex justify-center w-full px-4 py-2 gap-4'>
                            <Link href={'/assesment/k10/selfAssesment'} className='min-h-[350px] md:w-[350px]'>
                                <div className='bg-secondary-yellow overflow-hidden rounded-xl h-full'>
                                    <div
                                        className=" flex justify-center items-center p-4 flex-col bg-center w-full h-[80%]"
                                        style={{ background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${allSection?.section2?.defaultTest?.img})` }}
                                    >
                                        <h1 className="text-center text-2xl font-bold text-white">{allSection?.section2?.defaultTest?.title2}</h1>
                                        <p className="text-white text-center">{allSection?.section2?.defaultTest?.para}</p>
                                    </div>
                                    <div className='p-4'>
                                        <h1 className='text-white text-xl font-bold text-center'>{allSection?.section2?.defaultTest?.title}</h1>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='p-8'>
                    <div className='grid grid-cols-3 gap-5 md:hidden justify-center items-center mb-6'>
                        {
                            allSection?.section3?.blogs?.map((blog, index) => (
                                <div key={index} className='flex flex-col items-center justify-center '>
                                    <div className='bg-primary-orange h-[67px] w-[67px] mb-2 rounded-full'></div>
                                    <h1 className='text-sm text-center'>{blog?.title}</h1>
                                </div>
                            ))
                        }
                    </div>
                    <div className='mb-4'>
                        <Link href={'/'} className='flex justify-center'>
                            <button className='text-white font-semibold bg-primary-orange active:bg-orange-400 p-4 rounded w-full md:w-[300px]'>
                                {allSection?.section3?.button?.text}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>}
        </Container>
    )
}

export default AssesmentPage
