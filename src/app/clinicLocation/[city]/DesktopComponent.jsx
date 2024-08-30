
import { Container } from '@mui/material';
import DoctorCarousel from './DoctorCarousel';
import AppointmentForm from './AppointmentForm';
import ImageGallary from './ImageGallary';
import ImageCarousel from './ImageCarousel';
import RequestAppointment from './RequestAppointment';
import ClinicAddress from './ClinicAddress';
import OurDoctorSection from './OurDoctorSection';
const DesktopComponent = ({ images, data, city }) => {
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
                        {/* clinic location here */}
                        <div className='mb-8'>
                            <RequestAppointment city={city} />
                        </div>
                        <div>
                            <ClinicAddress images={images} data={data} />
                        </div>
                    </div>
                </div>

                <div>
                    <OurDoctorSection />
                </div>


            </Container>
        </>
    )
}

export default DesktopComponent