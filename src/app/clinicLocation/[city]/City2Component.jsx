import React from 'react';
import { Container } from '@mui/material';
import DoctorCarousel from './DoctorCarousel';
import AppointmentForm from './AppointmentForm';
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
    { img: '/home/clinicImg2.jpg', alt: 'Company Image 1' },
    { img: '/home/clinicImg3.jpg', alt: 'Company Image 2' },
    { img: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
];

const dataArray = [
    {
        addressTitle: 'New Delhi',
        city: 'New-Delhi',
        address: 'S-35 first floor, Greater Kailash-1, Masjid Moth, Greater Kailash, New Delhi, Delhi 110048',
        googleMapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.749635826523!2d77.2155231871582!3d28.549114000000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1da20c0c681%3A0x4bb15098e31edc9c!2smindful%20TMS%20Neurocare%20-%20Best%20Psychiatrist%20%7C%20Clinical%20Psychologist%20%7C%20(TMS)%20%7C%20Anxiety%20%7C%20Depression%20%7C%20OCD%20%7C%20in%20Delhi!5e0!3m2!1sen!2sin!4v1724673517475!5m2!1sen!2sin',
        call: '011 – 415 000 11 / +91 96060 67372',
    },
    {
        addressTitle: 'Bengaluru Whitefield',
        city: 'Bengaluru-Whitefield',
        address: '704, 2nd Floor, ASN Signature, Varthur Road, near Laughing Waters Siddapura, Ramagondanahalli, Bengaluru, Karnataka 560066',
        googleMapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.231653179486!2d77.73074949678954!3d12.95702330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae132558211f3b%3A0x5a7282022d462888!2sMindful%20TMS%20Whitefield%20Clinic%20-%20Psychiatrist%20%7C%20Clinical%20Psychologist%20%7C%20(TMS)%20%7C%20Anxiety%20%7C%20Depression%20%7C%20OCD%20%7C%20Bengaluru!5e0!3m2!1sen!2sin!4v1724673750137!5m2!1sen!2sin',
        call: '080- 41500055 / +91 81973 41114',
    },
    {
        addressTitle: 'Bengaluru Hebbal',
        city: 'Bengaluru-Hebbal',
        address: '#43/2, New Airport Road, NH-7, Outer Ring Rd, Sahakar Nagar, Bengaluru, Karnataka 560092',
        googleMapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7041049286468!2d77.58899097470847!3d13.054496987268534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15250dbbd083%3A0x4e8aba2a52fa8613!2sMindful%20TMS%20Aster%20CMI%20Clinic%20-%20Best%20Psychiatrist%20%7C%20Clinical%20Psychologist%20%7C%20(TMS)%20%7C%20Anxiety%20%7C%20Depression%20%7C%20OCD%20%7C%20Sahakar%20Nagar!5e0!3m2!1sen!2sin!4v1724673904955!5m2!1sen!2sin',
        call: '080 – 415 000 11 / +91 96069 69296',
    },
];

const City2Component = ({ city }) => {
    const data = dataArray.find(item => item.city === city);


    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="bg-primary-div md:p-5 select-none">
                <Container maxWidth="lg" className="py-[65px]">
                    <div className="mx-auto md:p-4">
                        <h1 className="text-[28px] md:text-4xl font-bold text-primary-orange">
                            Clinic Location: {data?.addressTitle}
                        </h1>
                    </div>
                </Container>

                <Container maxWidth="lg" className="">
                    <div className="flex gap-4 pb-6 md:p-0 overflow-x-scroll">
                        <a
                            href="#clinic-location"
                            // onClick={() => scrollToSection(addressRef)}
                            className="p-2 whitespace-nowrap rounded bg-orange-400 hover:bg-orange-600 text-sm text-white font-semibold"
                        >
                            Clinic Address
                        </a>
                        <a
                            href="#request-appointment"
                            // onClick={() => scrollToSection(appointmentRef)}
                            className="p-2 whitespace-nowrap rounded bg-orange-400  hover:bg-orange-600 text-sm text-white font-semibold"
                        >
                            Request Appointment
                        </a>
                        <a
                            href="#our-doctors"
                            // onClick={() => scrollToSection(doctorsRef)}
                            className="p-2 whitespace-nowrap rounded bg-orange-400  hover:bg-orange-600 text-sm text-white font-semibold"
                        >
                            Our Doctors
                        </a>
                        <a
                            href="#photo-gallery"
                            // onClick={() => scrollToSection(galleryRef)}
                            className="p-2 whitespace-nowrap rounded bg-orange-400 hover:bg-orange-600 text-sm text-white font-semibold"
                        >
                            Photo Gallery
                        </a>
                    </div>
                </Container>
            </div>

            <Container maxWidth="lg" className="py-5">
                <div id='clinic-location' className="mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
                        <div className="mb-5">
                            <h2 className="text-2xl md:text-3xl font-semibold text-primary-orange mb-8 border-b">
                                Clinic Address
                            </h2>
                            <div className="flex h-full flex-col justify-start items-start">
                                <p className="font-semibold mb-4">Address: {data?.addressTitle}</p>
                                <span>{data?.address}</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-primary-orange mb-8 border-b">
                                Location Map
                            </h2>
                            <div className="bg-gray-300 h-64 flex items-center justify-center">
                                <iframe
                                    title="Google Map"
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
                </div>

                <div id='request-appointment' className="mb-10">
                    <AppointmentForm/>
                </div>

                <div id='our-doctors' className="mb-10">
                    <DoctorCarousel />
                </div>

                <div id='photo-gallery'>
                    <h2 className="text-2xl md:text-3xl font-semibold text-primary-orange mb-4 border-b pb-2">
                        Photo Gallery
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {images.map((img, index) => (
                            <div key={index} className="bg-gray-200 h-32 flex items-center justify-center overflow-hidden rounded-lg">
                                <img src={img?.img} alt={img?.alt} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default City2Component;
