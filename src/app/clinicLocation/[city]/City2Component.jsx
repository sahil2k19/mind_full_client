import React, { useState } from 'react'
import { Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Link from 'next/link';
import DoctorCarousel from './DoctorCarousel'

const images = [
    { img: '/home/clinicImg2.jpg', alt: 'Company Image 1' },
    { img: '/home/clinicImg3.jpg', alt: 'Company Image 2' },
    { img: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
    { img: '/home/clinicImg2.jpg', alt: 'Company Image 1' },
    { img: '/home/clinicImg3.jpg', alt: 'Company Image 2' },
    { img: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
    { img: '/home/clinicImg2.jpg', alt: 'Company Image 1' },
    { img: '/home/clinicImg3.jpg', alt: 'Company Image 2' },
    { img: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
];

const experts = {
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
const City2Component = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        dateOfBirth: '',
        gender: '',
        location: '',
        clinic: '',
        doctor: '',
        appointmentDate: '',
        appointmentTime: '',
        mode: '',
        consent: false
    })
    const [activeTab, setActiveTab] = useState(0);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Handle form submission logic here
    }

    const tabs = [
        { label: "Clinic Address", },
        { label: "Request Appointment", },
        { label: "Our Doctors", },
        { label: "Photo Gallary", },
    ];

    return (
        <>
            <div className='bg-primary-div md:p-5  select-none'>
                <Container maxWidth="lg" className="py-[65px]">
                    <div className="mx-auto md:p-4">
                        <h1 className=" text-[28px] md:text-4xl font-bold text-primary-orange">Clinic Location:- New Delhi</h1>
                    </div>

                </Container>
                <Container maxWidth="lg" className="">
                    <div className="pb-6 md:p-0">
                        {/* Tabs */}
                        <div className="flex overflow-x-auto gap-2 px-2 whitespace-nowrap">
                            {tabs.map((tab, index) => (
                                <div
                                    key={index}
                                    className={`p-2 rounded cursor-pointer ${activeTab === index ? 'bg-orange-600' : 'bg-orange-400'}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    <span className={`text-sm text-white font-semibold `}>{tab.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>

            <Container maxWidth="lg" className="py-5">



                <div className="  ">
                    {
                        activeTab === 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 justify-center ">
                                {/* Clinic Address */}
                                <div className="mb-5">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-primary-orange mb-8 border-b ">Clinic Address</h2>
                                   <div className='flex h-full flex-col justify-start items-start'>
                                   <p className="font-semibold mb-4">Address:- New Delhi</p>
                                    <span> S-35 first floor, Greater Kailash-1, Masjid Moth, Greater Kailash, New Delhi, Delhi 110048</span>

                                   </div>

                                </div>
                                {/* Location Map Placeholder */}
                                <div>
                                    <h2 className="text-2xl md:text-3xl  font-semibold text-primary-orange mb-8 border-b ">Location Map</h2>
                                    <div className="bg-gray-300 h-64 flex items-center justify-center">
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


                            </div>
                        )
                    }

                    {
                        activeTab === 1 && (
                            <div className="w-full">
                                <h2 className="text-2xl md:text-3xl font-semibold text-primary-orange mb-4 border-b whitespace-nowrap ">Request An Appointment.</h2>
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            className="border p-2 rounded w-full"
                                            onChange={handleInputChange}
                                            value={formData.firstName}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            className="border p-2 rounded w-full"
                                            onChange={handleInputChange}
                                            value={formData.lastName}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="border p-2 rounded w-full"
                                            onChange={handleInputChange}
                                            value={formData.email}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            name="phoneNo"
                                            placeholder="Phone No."
                                            className="border p-2 rounded w-full"
                                            onChange={handleInputChange}
                                            value={formData.phoneNo}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="date"
                                            name="dateOfBirth"
                                            placeholder="Date of Birth"
                                            className="border p-2 rounded w-full"
                                            onChange={handleInputChange}
                                            value={formData.dateOfBirth}
                                        />
                                    </div>
                                    <div>
                                        <select
                                            name="gender"
                                            className="border p-2 rounded w-full"
                                            onChange={handleInputChange}
                                            value={formData.gender}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select
                                            name="location"
                                            className="border p-2 rounded w-full"
                                            onChange={handleInputChange}
                                            value={formData.location}
                                        >
                                            <option value="">Select Location</option>
                                            <option value="mysore">Mysore</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select
                                            name="clinic"
                                            className="border p-2 rounded w-full"
                                            onChange={handleInputChange}
                                            value={formData.clinic}
                                        >
                                            <option value="">Select Clinic</option>
                                            <option value="apollo">Apollo Clinic Mysore</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select
                                            name="doctor"
                                            className="border p-2 rounded w-full"
                                            onChange={handleInputChange}
                                            value={formData.doctor}
                                        >
                                            <option value="">Select Doctor</option>
                                            <option value="naveen">NAVEEN S</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input
                                            type="date"
                                            name="appointmentDate"
                                            className="border p-2 rounded w-full"
                                            onChange={handleInputChange}
                                            value={formData.appointmentDate}
                                        />
                                    </div>
                                    <div>
                                        <select
                                            name="appointmentTime"
                                            className="border p-2 rounded w-full"
                                            onChange={handleInputChange}
                                            value={formData.appointmentTime}
                                        >
                                            <option value="">Select Time</option>
                                            <option value="16:50-16:55">16:50-16:55</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select
                                            name="mode"
                                            className="border p-2 rounded w-full"
                                            onChange={handleInputChange}
                                            value={formData.mode}
                                        >
                                            <option value="">Select Mode</option>
                                            <option value="inPerson">In-Person</option>
                                            <option value="video">Video Consultation</option>
                                        </select>
                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="consent"
                                                className="mr-2"
                                                onChange={handleInputChange}
                                                checked={formData.consent}
                                            />
                                            <span>I Agree "Patient Information Consent"</span>
                                        </label>
                                    </div>
                                    <div className="col-span-1 md:col-span-2 flex justify-end gap-4">
                                        <button
                                            type="button"
                                            className="bg-gray-300 text-black px-4 py-2 rounded"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="bg-primary-orange text-white px-4 py-2 rounded"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )
                    }

                    {
                        activeTab === 2 && (
                            <DoctorCarousel />
                        )
                    }

                    {/* Photo Gallery */}
                 {
                    activeTab ===3 && (
                        <div className="">
                        <h2 className="text-2xl md:text-3xl  font-semibold text-primary-orange mb-4 border-b pb-2">Photo Gallery</h2>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {images.map((img, index) => (
                                <div key={index} className="bg-gray-200 h-32 flex items-center justify-center overflow-hidden rounded-lg">
                                    <img key={index} src={img?.img} alt={img?.alt} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                    )
                 }
                </div>

           
            </Container>
        </>
    )
}

export default City2Component