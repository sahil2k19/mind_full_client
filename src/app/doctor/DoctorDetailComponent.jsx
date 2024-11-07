import React from 'react';
import TestimonialComponent from '../component/TestimonialComponent';
import axios from 'axios';
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';
import AboutComponent from './AboutComponent';
const DoctorDetailComponent = async ({ doctorId }) => {
  let doctorDetail = {};
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}doctors/${doctorId}`);
  doctorDetail = res.data;

  return (
    <div className="p-5 md:p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Doctor's Basic Info */}
        <div className="p-6 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
          <img
            src={doctorDetail?.image}
            alt="Doctor's profile"
            className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover"
          />
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-semibold">{doctorDetail?.name}</h2>
            <p className="text-lg text-primary-orange mt-2">
              {doctorDetail?.designation}
            </p>
            <p className="mt-3 text-gray-600">
              <span className="font-semibold">Experience:</span> {doctorDetail?.experience} years
            </p>
          </div>
        </div>
        <div className='flex justify-center mb-6'>
          <RequestAppointment name={"BOOK APPOINTMENT"} />

        </div>

          {/* About Section with Read More */}
          {doctorDetail?.about && (
          <AboutComponent aboutText={doctorDetail.about} />
        )}

        {/* Specialization Section */}
        {doctorDetail?.specialization && doctorDetail.specialization.length > 0 && (
          <div className="px-6 py-4 border-t">
            <h3 className="text-xl font-bold text-primary-orange">Specialization</h3>
            <ul className="mt-2 space-y-1 text-gray-700">
              {doctorDetail.specialization.map((spec, index) => (
                <li key={index}>&#8226; {spec}</li>
              ))}
            </ul>
          </div>
        )}

       

        {/* Languages Spoken Section */}
        {doctorDetail?.language_spoken && doctorDetail.language_spoken.length > 0 && (
          <div className="px-6 py-4 border-t">
            <h3 className="text-xl font-bold text-primary-orange">Languages Spoken</h3>
            <ul className="mt-2 space-y-1 text-gray-700">
              {doctorDetail.language_spoken.map((language, index) => (
                <li key={index}>&#8226; {language}</li>
              ))}
            </ul>
          </div>
        )}

      

        {/* Testimonials Section */}
        <div className="py-8 px-4">
          <h1 className="text-2xl text-primary-orange text-center mb-4 font-semibold">Testimonials</h1>
          <TestimonialComponent />
        </div>

        {/* Request Appointment Button */}
        <div className='flex justify-center mb-6'>
          <RequestAppointment name={"BOOK APPOINTMENT"} />

        </div>
         {/* Professional Background Section */}
         {doctorDetail?.profession_background && doctorDetail.profession_background.length > 0 && (
          <div className="px-6 py-4 border-t">
            <h3 className="text-xl font-bold text-primary-orange">Professional Background</h3>
            <ul className="mt-2 space-y-1 text-gray-700">
              {doctorDetail.profession_background.map((background, index) => (
                <li key={index}>&#8226; {background}</li>
              ))}
            </ul>
          </div>
        )}

          {/* Contact and Availability Section */}
          <div className="px-6 py-4 border-t flex flex-col lg:flex-row lg:justify-between">
          {/* <div>
            <h3 className="text-xl font-bold text-primary-orange">Contact Information</h3>
            <p className="mt-2 text-gray-700 mb-1">
              <span className="font-semibold">Phone:</span> {doctorDetail?.phone}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Email:</span> {doctorDetail?.email}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Website:</span> {doctorDetail?.website}
            </p>
          </div> */}
          <div className="mt-6 lg:mt-0">
            <h3 className="text-base font-medium text-primary-orange">Availability</h3>
            <div className="mt-2 text-gray-700">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-sm">{day}</span>
                  {doctorDetail?.availability.includes(day) ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default DoctorDetailComponent;
