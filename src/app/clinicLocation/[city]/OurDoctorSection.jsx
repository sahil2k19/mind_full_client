import Link from 'next/link'
import React from 'react'

const OurDoctorSection = () => {
  return (
    <section className='py-8 px-4 '>
    <div className='mb-11 flex flex-col justify-center items-center'>
        <h1 className='text-3xl  font-semibold text-gray-800  text-center'>Our Experts</h1>
    </div>
    <div className='grid grid-cols-3 md:grid-cols-6 gap-4 text-center'>
        {
            allSection?.section7?.expertArray?.map((expert, index) => (
                <Link href='/consultation/booking' key={index} className=' flex flex-col items-center justify-center'>
                    <div className='mb-2 h-[71] w-[71] rounded-full'>
                        <img className='w-full h-full rounded-full' src={expert?.img} />
                    </div>
                    <div className='mb-1'>
                        <p className='font-semibold  text-[13px] text-gray-800'>{expert?.name}</p>
                        {/* <p className='text-[11px] text-gray-500'>{expert?.desig}</p> */}
                        <p className='text-[12px] text-gray-500 font-bold'>{expert?.location}</p>

                    </div>
                    {/* <div className='mb-2'>
                    </div> */}
                </Link>
            ))
        }


    </div>
</section>
  )
}

export default OurDoctorSection

const allSection = {
    heroSection: {
        banner: "/home/banner01.png",
        title: "You Deserve to Feel Better ",
        para: `Get the best care from our experienced psychologists, TMS experts and psychiatrists for help with depression,OCD and more.
With empathy and confidence, our professionals will guide you through every challenge.`,
        button: {
            text: "SCHEDULE CONSULTATION",
            link: "/consultation/location",
        }
    },
    section2: {
        para1: `Not sure what you need?`,
        para2: `These tests can help identify
what you may have and need`,
        para2: `Take a FREE TEST to identify your symptoms`,
        html1: `<p class='text-center mb-5 font-[15px] text-[#3A3A3A]'>These tests can help identify
                        what you may have and need</p>

                    <h1 class='text-2xl text-center text-gray-800'>
                        Take a <span class="font-semibold">FREE TEST</span> to identify your symptoms
                    </h1>`,
        button: {
            text: "FREE TEST",
            link: "/assesment",
        }
    },
    section3: {
        title: "TMS Treatment",
        para1: `A new approach to treat depression, anxiety, OCD and more.`,
        box: {
            banner: "/home/doctor.png",
            para: `<p class='font-bold mb-3 text-gray-700 text-md'>NON-INVASIVE</p>
                    <p class='font-bold mb-3 text-gray-700 text-md'>NO MEDICATION</p>
                    <p class='font-bold mb-3 text-gray-700 text-md'>SAFE</p>
                    <p class='font-bold mb-3 text-gray-700 text-md'>US FDA Approved</p>`
        },
        para2: `<p style="font-size: 15px; color: #3A3A3A; text-align: center">At MindfulTMS, we bring 5+ years of TMS experience with 10+ clinics in India and USA.</p>

        <p style="font-size: 15px; color: #3A3A3A; text-align: center">Is TMS for me? Learn how it works and if it is the right option for you. </p>`,
        button: {
            text: "MORE ABOUT TMS",
            link: "/blog/tms",
        }

    },
    section4: {
        header: `<h1 class='text-2xl font-[30px] text-center '>
                    Why choose <span class='font-semibold'>MindfulTMS?</span>
                </h1>`,
        para: `<p class='text-center'>
                    Your well being is our mission.
                </p>`,
        services: [
            {
                icon: '/home/medical.svg',
                text: 'Personalized care',
            },
            {
                icon: '/home/handshake.svg',
                text: 'Trust',
            },
            {
                icon: '/home/group.svg',
                text: 'Safe',
            },
            {
                icon: '/home/heart.svg',
                text: 'Holistic',
            },
        ]
    },
    section5: {
        header: 'Services we offer',
        services: [
            {
                title: 'Psychology/Therapy',
                array: [
                    {
                        img: "",
                        name: 'Lorem Ipsum dolor qioe',
                    },
                    {
                        img: "",
                        name: 'Lorem Ipsum dolor qioe',
                    },
                    {
                        img: "",
                        name: 'Lorem Ipsum dolor qioe',
                    },
                ],
                button: {
                    text: 'LEARN MORE',
                    link: '/services/Therapy Services'
                }
            }, {
                title: 'Psychiatry',
                array: [
                    {
                        img: "",
                        name: 'Lorem Ipsum dolor qioe',
                    },
                    {
                        img: "",
                        name: 'Lorem Ipsum dolor qioe',
                    },
                    {
                        img: "",
                        name: 'Lorem Ipsum dolor qioe',
                    },
                ],
                button: {
                    text: 'LEARN MORE',
                    link: '/services/TMS Treatment Services'
                }
            }
        ]
    },
    section6: {
        header: 'Our Locations',
        para: `Lorem ipsum dolor sit amet`,
        locations: [
            {
                title: 'Bangalore',
                locationArray: [
                    {
                        title: "Aster CMI",
                        address: "Bangalore North",
                    },
                    {
                        title: "Whitefield",
                        address: "Bangalore East",
                    },
                ]
            },
            {
                title: 'Delhi',
                locationArray: [
                    {
                        title: "Greater Kailash",
                        address: "Delhi",
                    },

                ]
            },
        ]
    },
    section7: {
        header: 'Our Experts',
        expertArray: [
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },

        ]
    }
}