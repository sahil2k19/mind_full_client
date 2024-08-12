// import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const Assesment = () => {
    // const router = useRouter()
  return (
    <div>
                <div className='flex p-6 items-center'>
                    {/* <div className='mr' onClick={() => router.back()}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        // className="w-6 h-6"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </div> */}
                    <div>

                    </div>
                    <div>
                        <h1 class="text-2xl font- ">Take a Self-Assessment</h1>

                    </div>


                </div>
                <div className='p-4 mb-4' >
                    <p className='text-sm text-center mb-5'>
                        Welcome to our self-assessment page.
                        Here, you can choose from a variety of tests to help you understand your mental health better.
                    </p>

                    <p className='text-sm text-center'>
                        Select the test that best matches your current feelings and concerns.
                    </p>
                </div>
                <div className=''>
                    <div>
                        <h1 className='text-center text-xl mb-4 underline'>Available tests:</h1>
                    </div>
                    <div className='grid grid-cols-1 px-4 py-2 gap-4'>
                       <Link href={'/assesment/phq9/selfAssesment'} className='min-h-[250px]'>
                       <div
                        //  onClick={()=>navigate('/test/phq9')}
                          className='bg-secondary-yellow overflow-hidden rounded-xl h-full'>
                            <div
                                className="bg-cover flex justify-center items-center p-3 flex-col bg-center  w-full h-[80%] "
                                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/home/depression.svg')" }}
                            >
                                <h1 className="text-center text-2xl font-bold text-white">Test for Depression</h1>
                                <p className="text-white text-center">This test helps evaluate the severity of depression symptoms.</p>
                            </div>
                            <div className='p-4'>
                                <h1 className='text-white text-xl font-bold text-center'>Take the PHQ-9 Test</h1>
                            </div>
                        </div>
                       </Link>
                        <Link className='min-h-[250px]' href={'/assesment/gad7/selfAssesment'}>
                        <div
                        //  onClick={()=>navigate('/test/gad7')} 
                        className='bg-secondary-yellow overflow-hidden rounded-xl h-full'>
                            <div
                                className="bg-cover flex justify-center items-center flex-col bg-center p-3  w-full h-[80%] "
                                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/home/anxiety.svg')" }}
                            >
                                <h1 className="text-center text-2xl font-bold text-white">Test for Anxiety</h1>
                                <p className="text-white text-center">This test helps evaluate the severity of anxiety symptoms.</p>
                            </div>
                            <div className='p-4'>
                                <h1 className='text-white text-xl font-bold text-center'>Take the GAD-7 Test</h1>
                            </div>
                        </div>
                        </Link>
                       <Link href={ '/assesment/pss10/selfAssesment'} className='min-h-[250px]'>
                       <div 
                        // onClick={()=>navigate('/test/pss10')}
                         className='bg-secondary-yellow overflow-hidden rounded-xl h-full'>
                            <div
                                className="bg-cover p-3 flex justify-center items-center flex-col bg-center  w-full h-[80%] "
                                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/home/stress.svg')" }}
                            >
                                <h1 className="text-center text-2xl font-bold text-white">Test for Stress</h1>
                                <p className="text-white text-center">This test assesses how stressful you find your life situations</p>
                            </div>
                            <div className='p-4'>
                                <h1 className='text-white text-xl font-bold text-center'>Take the PSS-10 Test</h1>
                            </div>
                        </div>
                       </Link>
                    </div>
                    <div className='mt-7 p'>
                        <div className='flex px-4 flex-col items-center mb-6'>
                            <h1 className='text-center text-xl font-bold mb-4'>Not sure which test to take?</h1>
                            <p className='text-center text-sm'>The K10 is designed to measure general psychological distress and can be an effective initial screening tool to identify whether you may need further assessment or support.  </p>

                        </div>
                        <div className='grid grid-cols-1 px-4 py-2 gap-4'>
                            <Link href={'/assesment/k10/selfAssesment'} className='min-h-[350px]'>
                            <div 
                            // onClick={()=>navigate('/test/k10')} 
                            className='bg-secondary-yellow overflow-hidden rounded-xl h-full'>
                                <div
                                    className="bg-cover flex justify-center items-center p-4 flex-col bg-center  w-full h-[80%] "
                                    style={{ background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/home/brain.svg')" }}
                                >
                                    <h1 className="text-center text-2xl font-bold text-white">K10 (Kessler Psychological
                                        Distress Scale)</h1>
                                    <p className="text-white text-center">This test assesses the level of distress you have experienced in the past month. It helps identify symptoms of anxiety and depression, emotional and physical fatigue, and the impact on daily functioning. </p>
                                </div>
                                <div className='p-4'>
                                    <h1 className='text-white text-xl font-bold text-center'>Take the K10 Test</h1>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='p-8'>
                    <div className='grid grid-cols-3 gap-5 justify-center items-center mb-6'>
                        <div className='flex flex-col items-center justify-center '>
                            <div className='bg-primary-orange h-[67px] w-[67px] mb-2 rounded-full'></div>
                            <h1 className='text-sm text-center'>TMS for
                            Depression</h1>
                        </div>
                        <div className='flex flex-col items-center justify-center '>
                            <div className='bg-primary-orange h-[67px] w-[67px] mb-2 rounded-full'></div>
                            <h1 className='text-sm text-center'>TMS for
                            Depression</h1>
                        </div>
                        <div className='flex flex-col items-center justify-center '>
                            <div className='bg-primary-orange h-[67px] w-[67px] mb-2 rounded-full'></div>
                            <h1 className='text-sm text-center'>TMS for
                            Depression</h1>
                        </div>
                    </div>
                    <div className='mb-4'>
                    <Link href={'/'}>
                    <button 
                        // onClick={()=>navigate('/')}
                         className='text-white font-semibold  bg-primary-orange  active:bg-orange-400 p-4 rounded w-full'>LEARN MORE</button>
                   
                    </Link>
                        </div>
                </div>
            </div>
  )
}

export default Assesment