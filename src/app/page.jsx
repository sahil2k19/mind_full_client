import Link from 'next/link';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



export default function Home() {
//   const router = useRouter();
  
//   const videoRef = useRef(null);  // Reference to the video element
//     const [isPlaying, setIsPlaying] = useState(false);  // State to track play/pause

//     const togglePlay = () => {
//         if (isPlaying) {
//             videoRef.current.pause();
//         } else {
//             videoRef.current.play();
//         }
//         setIsPlaying(!isPlaying);
//     };
  return (
    <div className=" select-none">
           
            <section className='mb-5'>
                <div className='flex justify-center mb-4'>
                    <img src='/home/banner01.png' />
                </div>
                <div className='flex flex-col justify-center px-8'>
                    <h1 className=' text-3xl mb-5  text-center font-sans font-semibold '>
                        You Deserve to Feel Better
                    </h1>
                    <p className='text-center mb-5 font-[15px] text-[#3A3A3A] '>
                        Get the best care from our experienced psychologists, TMS experts and
                        psychiatrists for help with
                        depression,OCD and more.
                    </p>
                    <p className='text-center mb-5 font-[15px] text-[#3A3A3A] '>
                        With empathy and confidence,
                        our professionals will guide you
                        through every challenge.
                    </p>
                </div>
                <div className='flex justify-center'>
               <Link href={'/consultation/location'}>
               <button
            
            className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 text-white text-sm font-semibold'
        >
            SCHEDULE CONSULTATION
        </button>
               </Link>
                </div>
            </section>
            <section className='bg-primary-div py-10'>


                <div className='flex flex-col justify-center mb-5 px-8 bg-[rgba(239, 102, 35, 0.3)]'>
                    <h1 className=' text-lg mb-3 font-semibold text-black text-center'> Not sure what you need?</h1>

                    <p className='text-center mb-5 font-[15px] text-[#3A3A3A]'>These tests can help identify
                        what you may have and need</p>

                    <h1 className='text-2xl text-center text-gray-800'>
                        Take a <span className="font-semibold">FREE TEST</span> to identify your symptoms
                    </h1>

                </div>
                <div className='flex justify-center'>
                   <Link href={'/selfAssesment'}>
                   <button  className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 font-semibold text-sm text-white'>
                        FREE TEST
                    </button>
                   </Link>
                </div>
            </section>

            <section className=' py-10 px-4'>
                <div>
                    <h1 className='text-3xl font-[30px] text-center font-sans font-semibold'>
                        TMS Treatment
                    </h1>
                    <p className='text-center mb-5 font-[15px] text-[#3A3A3A]'>A new approach to treat
                        depression, anxiety, OCD and more.</p>
                </div>

                <div className='flex justify-between mb-5 items-center py-6 px-2 rounded-lg gap-6  bg-primary-div'>
                    <div className='h-[150px] w-[167px]'>
                        <img className='w-full h-full' src="/home/doctor.png" />
                    </div>
                    <div>
                        <p className='font-bold mb-3 text-gray-700 text-md'>NON-INVASIVE</p>
                        <p className='font-bold mb-3 text-gray-700 text-md'>NO MEDICATION</p>
                        <p className='font-bold mb-3 text-gray-700 text-md'>SAFE</p>
                        <p className='font-bold mb-3 text-gray-700 text-md'>US FDA Approved</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center mb-5 px-8 bg-[rgba(239, 102, 35, 0.3)]'>
                    <p className='text-center mb-5 font-[15px] text-[#3A3A3A]'>
                        At MindfulTMS, we bring 5+ years of TMS experience with 10+ clinics in
                        India and USA.
                    </p>
                    <p className='text-center mb-5 font-[15px] text-[#3A3A3A]'>
                        <span className='font-semibold'>Is TMS for me? </span>Learn how it works and
                        if it is the right option for you.
                    </p>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 font-semibold text-sm text-white'>
                        MORE ABOUT TMS
                    </button>
                </div>
            </section>

            <section className='py-8 px-4'>
                <div className='mb-8'>
                    <h1 className='text-2xl font-[30px] text-center '>
                        Why choose <span className='font-semibold'>MindfulTMS?</span>
                    </h1>

                    <p className='text-center'>
                        Your well being is our mission.
                    </p>
                </div>
                <div className='grid grid-cols-2 gap-5 text-center  justify-center'>
                    <div className='flex flex-col justify-center  items-center'>
                        <img className='w-[64px] h-[64px] text-center' src='/home/medical.svg' />
                        <p className='text-md font-semibold mt-3'>Personalized care</p>
                    </div>
                    <div className='flex flex-col justify-center  items-center'>
                        <img className='w-[64px] h-[64px]' src='/home/handshake.svg' />
                        <p className='text-md font-semibold mt-3'>Trust</p>
                    </div>
                    <div className='flex flex-col justify-center  items-center'>
                        <img className='w-[64px] h-[64px]' src='/home/group.svg' />
                        <p className='text-md font-semibold mt-3'>Safe</p>
                    </div><div className='flex flex-col justify-center  items-center'>
                        <img className='w-[64px] h-[64px]' src='/home/heart.svg' />
                        <p className='text-md font-semibold mt-3'>Holistic</p>
                    </div>

                </div>
            </section>

            <section className='py-8 px-4 bg-primary-div'>
                <div className='mb-8'>
                    <div className='mb-8'>
                        <h1 className='text-3xl  font-semibold text-gray-800  text-center'>Services we offer</h1>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold mb-5 text-center'>Psychology/Therapy</h1>
                        <div className='grid grid-cols-3 items-center mb-8 justify-center'>
                            <div className='flex flex-col justify-center  items-center text-center '>
                                <div className='w-[64px] h-[64px] rounded-full bg-[#EF6623] '></div>
                                <p className='text-sm font-semibold'>Lorem Ipsum
                                    dolor qioe </p>
                            </div>
                            <div className='flex flex-col justify-center items-center text-center'>
                                <div className='w-[64px] h-[64px] rounded-full bg-[#EF6623]'></div>
                                <p className='text-sm font-semibold'>Lorem Ipsum
                                    dolor qioe </p>
                            </div>
                            <div className='flex flex-col justify-center items-center text-center'>
                                <div className='w-[64px] h-[64px] rounded-full bg-[#EF6623]'></div>
                                <p className='text-sm font-semibold'>Lorem Ipsum
                                    dolor qioe </p>
                            </div>
                        </div>
                        <div className='flex justify-center '>
                           <Link href="/service/Therapy Services">
                           <button  className='bg-[#F8A51C] hover:bg-yellow-500 active:bg-yellow-600 rounded-lg px-8 py-3 font-semibold text-sm text-white'>
                                LEARN MORE
                            </button>
                           </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className='text-xl font-semibold mb-5 text-center'>Psychiatry</h1>
                        <div className='grid grid-cols-3 items-center mb-8 justify-center'>
                            <div className='flex flex-col justify-center  items-center text-center'>
                                <div className='w-[64px] h-[64px] rounded-full bg-[#EF6623]'></div>
                                <p className='text-sm font-semibold'>Lorem Ipsum
                                    dolor qioe </p>
                            </div>
                            <div className='flex flex-col justify-center items-center text-center'>
                                <div className='w-[64px] h-[64px] rounded-full bg-[#EF6623]'></div>
                                <p className='text-sm font-semibold'>Lorem Ipsum
                                    dolor qioe </p>
                            </div>
                            <div className='flex flex-col justify-center items-center text-center'>
                                <div className='w-[64px] h-[64px] rounded-full bg-[#EF6623]'></div>
                                <p className='text-sm font-semibold'>Lorem Ipsum
                                    dolor qioe </p>
                            </div>
                        </div>
                        <div className='flex justify-center '>
                           <Link href={"/service/TMS Treatment Services"}>
                           <button  className='bg-[#F8A51C] rounded-lg px-8 py-3 hover:bg-yellow-500 active:bg-yellow-600 font-semibold text-sm text-white'>
                                LEARN MORE
                            </button>
                           </Link>
                        </div>
                    </div> 
                </div>
            </section>

            <section className='py-8 px-4'>
                <div className='mb-8 flex flex-col justify-center items-center'>
                    <h1 className='text-3xl  font-semibold text-gray-800  text-center'>Our Locations</h1>
                    <p className='text-center text-sm text-gray-500'>Lorem ipsum dolor sit amet</p>
                </div>
                <div>
                    <div className="flex items-center justify-center py-4">
                        <div className="">
                            <span className="text-xl relative top-[13px] left-[35%] px-2 bg-white ">Banglore</span>

                            <div className="w-[90vw] h-px bg-black "></div>
                            {/* <div className="w-[30vw] h-px bg-black"></div> */}
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='bg-primary-div px-4 mb-4 py-4 rounded-lg'>
                            <h1 className='text-xl font-semibold text-gray-700 '>Aster CMI</h1>
                            <p className='text-sm text-[#EF6623]'>Bangalore North</p>
                        </div>
                        <div className='bg-primary-div px-4 mb-4 py-4 rounded-lg'>
                            <h1 className='text-xl font-semibold text-gray-700 '>Whitefield</h1>
                            <p className='text-sm text-[#EF6623]'>Bangalore North</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-center py-4">
                        <div className="">
                            <span className="text-xl relative top-[13px] left-[40%] px-2 bg-white ">Delhi</span>
                            <div className="w-[90vw] h-px bg-black "></div>

                            {/* <div className="w-[30vw] h-px bg-black"></div> */}
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='bg-primary-div px-4 mb-4 py-4 rounded-lg'>
                            <h1 className='text-xl font-semibold text-gray-700 '>Greater Kailash</h1>
                            <p className='text-sm text-[#EF6623]'>Delhi</p>
                        </div>

                    </div>
                </div>

            </section>

            <section className='py-8 px-4'>
                <div className='mb-8 flex flex-col justify-center items-center'>
                    <h1 className='text-3xl  font-semibold text-gray-800  text-center'>Our Experts</h1>
                </div>
                <div className='grid grid-cols-3 gap-4 text-center'>
                    <div className=' flex flex-col items-center justify-center'>
                        <div className='mb-2 h-[71] w-[71] rounded-full'>
                            <img className='w-full h-full rounded-full' src='/home/doctor1.png' />
                        </div>
                        <div className='mb-1'>
                            <h1 className='font-semibold mb-1 text-[13px] text-gray-800'>Dr.Sheela Rao</h1>
                            <p className='text-[11px] text-gray-500'>Clinical Psychologist</p>
                        </div>
                        <div className='mb-2'>
                            <p className='text-[12px] text-gray-500 font-bold'>Bangalore</p>
                        </div>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <div className='mb-2 h-[71] w-[71] rounded-full'>
                            <img className='w-full h-full rounded-full' src='/home/doctor1.png' />
                        </div>
                        <div className='mb-1'>
                            <h1 className='font-semibold mb-1 text-[13px] text-gray-800'>Dr.Sheela Rao</h1>
                            <p className='text-[11px] text-gray-500'>Clinical Psychologist</p>
                        </div>
                        <div className='mb-2'>
                            <p className='text-[12px] text-gray-500 font-bold'>Bangalore</p>
                        </div>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <div className='mb-2 h-[71] w-[71] rounded-full'>
                            <img className='w-full h-full rounded-full' src='/home/doctor1.png' />
                        </div>
                        <div className='mb-1'>
                            <h1 className='font-semibold mb-1 text-[13px] text-gray-800'>Dr.Sheela Rao</h1>
                            <p className='text-[11px] text-gray-500'>Clinical Psychologist</p>
                        </div>
                        <div className='mb-2'>
                            <p className='text-[12px] text-gray-500 font-bold'>Bangalore</p>
                        </div>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <div className='mb-2 h-[71] w-[71] rounded-full'>
                            <img className='w-full h-full rounded-full' src='/home/doctor1.png' />
                        </div>
                        <div className='mb-1'>
                            <h1 className='font-semibold mb-1 text-[13px] text-gray-800'>Dr.Sheela Rao</h1>
                            <p className='text-[11px] text-gray-500'>Clinical Psychologist</p>
                        </div>
                        <div className='mb-2'>
                            <p className='text-[12px] text-gray-500 font-bold'>Bangalore</p>
                        </div>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <div className='mb-2 h-[71] w-[71] rounded-full'>
                            <img className='w-full h-full rounded-full' src='/home/doctor1.png' />
                        </div>
                        <div className='mb-1'>
                            <h1 className='font-semibold mb-1 text-[13px] text-gray-800'>Dr.Sheela Rao</h1>
                            <p className='text-[11px] text-gray-500'>Clinical Psychologist</p>
                        </div>
                        <div className='mb-2'>
                            <p className='text-[12px] text-gray-500 font-bold'>Bangalore</p>
                        </div>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <div className='mb-2 h-[71] w-[71] rounded-full'>
                            <img className='w-full h-full rounded-full' src='/home/doctor1.png' />
                        </div>
                        <div className='mb-1'>
                            <h1 className='font-semibold mb-1 text-[13px] text-gray-800'>Dr.Sheela Rao</h1>
                            <p className='text-[11px] text-gray-500'>Clinical Psychologist</p>
                        </div>
                        <div className='mb-2'>
                            <p className='text-[12px] text-gray-500 font-bold'>Bangalore</p>
                        </div>
                    </div>

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
  );
}
