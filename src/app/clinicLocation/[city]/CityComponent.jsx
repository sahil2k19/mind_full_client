"use client";
import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Link from 'next/link';

const carouselItems = [
    { img: '/home/clinicImg2.jpg', alt: 'Company Image 1' },
    { img: '/home/clinicImg3.jpg', alt: 'Company Image 2' },
    { img: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
];

const experts = {
    header:'Our Experts',
    expertArray:[
        {
            img:'/home/doctor1.png',
            name:'Dr.Sheela Rao',
            desig:'Clinical Psychologist',
            location:'Bangalore',
        },
        {
            img:'/home/doctor1.png',
            name:'Dr.Sheela Rao',
            desig:'Clinical Psychologist',
            location:'Bangalore',
        },
        {
            img:'/home/doctor1.png',
            name:'Dr.Sheela Rao',
            desig:'Clinical Psychologist',
            location:'Bangalore',
        },
        {
            img:'/home/doctor1.png',
            name:'Dr.Sheela Rao',
            desig:'Clinical Psychologist',
            location:'Bangalore',
        },
        {
            img:'/home/doctor1.png',
            name:'Dr.Sheela Rao',
            desig:'Clinical Psychologist',
            location:'Bangalore',
        },
        {
            img:'/home/doctor1.png',
            name:'Dr.Sheela Rao',
            desig:'Clinical Psychologist',
            location:'Bangalore',
        },
     
    ]
};

const services = {
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
}
const ExpertCard = ({ name, qualification, img }) => (
    <Card className="max-w-sm mx-auto">
        <CardMedia
            component="img"
            height="200"
            image={img}
            alt={name}
            className="object-cover h-48"
        />
        <CardContent>
            <Typography variant="h6" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {qualification}
            </Typography>
        </CardContent>
    </Card>
);

export default function CityComponent() {
    return (
        <div>
            <Container maxWidth="lg" className="py-8">
                <Box className="mb-12">
                    <Carousel>
                        {carouselItems.map((item, index) => (
                            <img key={index} src={item.img} alt={item.alt} className="w-full h-[400px] md:h-[500px] object-cover" />
                        ))}
                    </Carousel>
                </Box>
            </Container>

          <div className='md:grid grid-cols-2 md:bg-gray-100'>
              {/* Google Map Section */}
              <Box className=" bg-gray-100 p-4 ">
                <h1 className="mb-4 text-3xl text-center font-semibold">
                    Location Details
                </h1>
                <div className=' flex justify-center'>
                    <div className='md:w-[400px] w-[300px] h-[300px] md:h-[400px]'>
                        <iframe
                            title="Google Map of Delhi"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83905019456!2d77.06889766572564!3d28.527279282196026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5642a1a2bc1%3A0x2c4ef79cba3194e2!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1693746312190!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </Box>
            {/* services */}
            <section className='py-8  px-4 bg-primary-div md:bg-gray-100'>
                <div className='mb-8'>
                    <div className='mb-8'>
                        <h1 className='text-3xl  font-semibold text-gray-800  text-center'>{services?.header}</h1>
                    </div>
                    {
                        services?.services?.map((service, index) => (
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
          </div>


            {/* our experts */}
            <section className='py-8 px-4'>
                <div className='mb-11 flex flex-col justify-center items-center'>
                    <h1 className='text-3xl  font-semibold text-gray-800  text-center'>Our Experts</h1>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-6 gap-4 text-center'>
                    {
                        experts?.expertArray?.map((expert, index) => (
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
          
        </div>
    );
}
