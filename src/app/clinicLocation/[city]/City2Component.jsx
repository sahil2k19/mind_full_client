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

const dataArray = [
    {
        addressTitle:'New Delhi',
        city:'New-Delhi',
        address:`S-35 first floor, Greater Kailash-1, Masjid Moth, Greater Kailash, New Delhi, Delhi 110048`,
        googleMapLink:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.749635826523!2d77.2155231871582!3d28.549114000000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1da20c0c681%3A0x4bb15098e31edc9c!2smindful%20TMS%20Neurocare%20-%20Best%20Psychiatrist%20%7C%20Clinical%20Psychologist%20%7C%20(TMS)%20%7C%20Anxiety%20%7C%20Depression%20%7C%20OCD%20%7C%20in%20Delhi!5e0!3m2!1sen!2sin!4v1724673517475!5m2!1sen!2sin',
        call:`011 – 415 000 11 / +91 96060 67372`


    },
    {
        addressTitle:'Bengaluru Whitefield',
        city:'Bengaluru-Whitefield',
        address:`704, 2nd Floor, ASN Signature, Varthur Road, near Laughing Waters Siddapura, Ramagondanahalli, Bengaluru, Karnataka 560066`,
        googleMapLink:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.231653179486!2d77.73074949678954!3d12.95702330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae132558211f3b%3A0x5a7282022d462888!2sMindful%20TMS%20Whitefield%20Clinic%20-%20Psychiatrist%20%7C%20Clinical%20Psychologist%20%7C%20(TMS)%20%7C%20Anxiety%20%7C%20Depression%20%7C%20OCD%20%7C%20Bengaluru!5e0!3m2!1sen!2sin!4v1724673750137!5m2!1sen!2sin',
        call:`080- 41500055 / +91 81973 41114`

    },

    {
        addressTitle:'Bengaluru Hebbal',
        city:'Bengaluru-Hebbal',
        address:`#43/2, New Airport Road, NH-7, Outer Ring Rd, Sahakar Nagar, Bengaluru, Karnataka 560092`,
        googleMapLink:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7041049286468!2d77.58899097470847!3d13.054496987268534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15250dbbd083%3A0x4e8aba2a52fa8613!2sMindful%20TMS%20Aster%20CMI%20Clinic%20-%20Best%20Psychiatrist%20%7C%20Clinical%20Psychologist%20%7C%20(TMS)%20%7C%20Anxiety%20%7C%20Depression%20%7C%20OCD%20%7C%20Sahakar%20Nagar!5e0!3m2!1sen!2sin!4v1724673904955!5m2!1sen!2sin',
        call:`080 – 415 000 11 / +91 96069 69296`

    },
]

const City2Component = ({city}) => {
    const data = dataArray.find(item => item.city === city)
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
                        <h1 className=" text-[28px] md:text-4xl font-bold text-primary-orange">Clinic Location:- {data?.addressTitle}</h1>
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
                                            src={data?.googleMapLink}
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
                                            <span>{`I Agree "Patient Information Consent"`}</span>
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