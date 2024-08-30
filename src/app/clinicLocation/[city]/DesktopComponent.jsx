
import { Container } from '@mui/material';
import DoctorCarousel from './DoctorCarousel';
import AppointmentForm from './AppointmentForm';
import ImageGallary from './ImageGallary';
import ImageCarousel from './ImageCarousel';

const DesktopComponent = ({ images, data }) => {
    return (
        <>
            <div className="bg-primary-div md:p-5 select-none mb-8">
                <Container maxWidth="lg" className="py-[65px]">
                    <div className="mx-auto md:p-4">
                        <h1 className="text-[28px] md:text-4xl font-bold text-center text-primary-orange">
                          {data?.addressTitle}
                        </h1>
                    </div>
                </Container>
                {/* 
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
            </Container> */}
            </div>

            <Container maxWidth="lg" className="py-5">
                <div className='grid md:grid-cols-5 gap-12 '>
                    <div id='photo-gallery' className="col-span-3">
                        <ImageCarousel images={images} />
                    </div>
                    <div id='clinic-location' className="mb-10 col-span-2">
                        <div className="grid grid-cols-1 justify-center">
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
                </div>

                {/* <div id='request-appointment' className="mb-10">
                <AppointmentForm/>
            </div> */}

                <div id='our-doctors' className="mb-10">
                    <DoctorCarousel />
                </div>


            </Container>
        </>
    )
}

export default DesktopComponent