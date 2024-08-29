"use client"
import React, { useEffect, useState } from 'react'
import ImageGallary from './ImageGallary';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';
import PractoWidget from './PractoWidget';

const MobileComponent = ({ data, images }) => {
    const [requestModal, setRequestModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        doctor: '',
        location: '',
        message: ''
    });
    const [isBusinessHours, setIsBusinessHours] = useState(false);

    useEffect(() => {
        const handlePopState = () => {
            if (requestModal) {
                setRequestModal(false);
            }
        };

        if (requestModal) {
            window.history.pushState(null, '');
            window.addEventListener('popstate', handlePopState);
        }

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [requestModal]);

    useEffect(() => {
        const checkBusinessHours = () => {
            const now = new Date();
            const hours = now.getHours();
            if (hours >= 10 && hours < 18) {
                setIsBusinessHours(true);
            } else {
                setIsBusinessHours(false);
            }
        };
        checkBusinessHours();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        toggleRequestModal();
    }

    const toggleRequestModal = () => {
        setRequestModal(prev => !prev);
        setFormData({
            name: '',
            email: '',
            phone: '',
            doctor: '',
            location: '',
            message: '',
            preferredTime: ''
        });
    }

    const isFormValid = () => {
        return formData.name && formData.email && formData.phone && formData.location;
    }

    return (
        <div className='px-4 py-3'>
            <div className='mb-6'>
                <h1 className='text-2xl text-primary-orange text-center font-[700]'>{data?.addressTitle}</h1>
            </div>

            <div className='mb-8'>
                <ImageGallary images={images} />
            </div>

            <section className='py-8 px-4 mb-6 bg-[#f7f7f7] rounded'>
                <div className='mb-11 flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-semibold text-gray-800 text-center'>Our Doctors</h1>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-6 gap-4 text-center '>
                    {allSection?.section7?.expertArray?.map((expert, index) => (
                        <div key={index} className='flex flex-col items-center justify-center'>
                            <div className='mb-2 h-[71px] w-[71px] rounded-full'>
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
                    ))}
                </div>
            </section>

            <section className='select-none'>
                <div className='flex justify-center'>
                    <button onClick={toggleRequestModal} className='text-xl active:bg-orange-400 active:shadow-lg bg-primary-orange text-white px-6 py-2 rounded-lg font-semibold text-center'>Request an Appointment</button>
                </div>
            </section>

            <Dialog open={requestModal} onClose={toggleRequestModal}>
                <DialogTitle className='text-center font-semibold'>Request an Appointment</DialogTitle>
                <DialogContent>
                    {!isFormValid() && <div>
                        <p className='text-center text-red-600 font-semibold'>Please fill in the form below to request an appointment.</p>
                    </div>}
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        label="Phone Number"
                        type="tel"
                        fullWidth
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <FormControl fullWidth margin="dense">
                        <InputLabel id="location-label">Location</InputLabel>
                        <Select
                            labelId="location-label"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                        >
                            <MenuItem value="Delhi">Delhi</MenuItem>
                            <MenuItem value="Bangalore 1">Bangalore 1</MenuItem>
                            <MenuItem value="Bangalore 2">Bangalore 2</MenuItem>
                        </Select>
                        <div className='py-4 flex flex-col justify-center items-center gap-5'>
                            <div className='w-full mb-3'>
                                {!isBusinessHours &&

                                    <>
                                        <TextField
                                            margin="dense"
                                            name="preferredTime"
                                            label="Preferred Time for Callback"
                                            type="time"
                                            fullWidth
                                            value={formData.preferredTime}
                                            onChange={handleChange}
                                        />

                                        {
                                            (!formData?.preferredTime || !isFormValid()) && <p className='text-center text-sm underline font-semibold text-red-500'>Provide  Time For Callback</p>
                                        }
                                    </>
                                }
                            </div>

                            {isFormValid() ? <div>
                                <PractoWidget />
                            </div>
                                : <div className='w-full'>
                                    <button
                                        className={`select-none flex gap-2 items-center w-full justify-center text-white rounded-lg  px-4 py-3 font-semibold text-center ${isFormValid() ? 'cursor-pointer active:shadow-xl active:bg-green-600 bg-green-500  ' : 'cursor-not-allowed bg-gray-300'}`}
                                        disabled={!isFormValid()}
                                       
                                    >
                                        Request an Appointment
                                    </button>
                                </div>
                            }
                            {isBusinessHours ? (
                                <button
                                    className={`select-none flex gap-2 w-full items-center justify-center text-white rounded-lg px-4 py-2 font-semibold text-center ${isFormValid() ? 'cursor-pointer active:shadow-xl active:bg-green-600 bg-green-500' : 'cursor-not-allowed bg-gray-300'}`}
                                    disabled={!isFormValid()}
                                    onClick={() => window.open(`https://wa.me/+919911155819?text=${encodeURIComponent(`Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Location: ${formData.location}, Message: ${formData.message}`)}`, "_blank")}
                                >
                                    Contact on <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                    </svg>
                                </button>
                            ) : (
                                <>

                                    <button
                                        className={`select-none flex w-full  gap-2 justify-center items-center text-white rounded-lg px-4 py-3  font-semibold text-center ${isFormValid() && formData?.preferredTime ? 'cursor-pointer active:shadow-xl active:bg-blue-600 bg-blue-500' : 'cursor-not-allowed bg-gray-300'}`}
                                        disabled={!isFormValid() || !formData?.preferredTime}
                                        onClick={handleSubmit}
                                    >
                                        Request a Callback
                                    </button>

                                </>
                            )}
                        </div>
                    </FormControl>
                </DialogContent>

            </Dialog>
        </div>
    );
}

export default MobileComponent;

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