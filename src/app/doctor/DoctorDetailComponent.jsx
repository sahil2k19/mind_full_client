import React from 'react';
import TestimonialComponent from '../component/TestimonialComponent';

const doctorDetail = {
  _id: 1,
  name: 'Dr Subham',
  about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  profession_background: [
    'M.Phill - Clinical Psychologist',
    'M.Sc. - Psychology',
    'B.Sc. - Psychology',
  ],
  language_spoken: ['English', 'Kannada', 'Malayalam', 'Hindi', 'Tamil'],
  specialization: ['Anxiety', 'Depression', 'Bipolar Disorder', 'EMDR'],
  experience: 30,
  fees: 500,
  image: '/doctor/Dr Subham.jpg',
  address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  phone: '123-456-7890',
  email: '5bIaS@example.com',
  website: 'www.davidsamson.com',
  availability: 'Monday, Tuesday, Wednesday, Thursday, Friday',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
};

const DoctorDetailComponent = () => {
  return (
    <div className="p-5 md:p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Doctor's Basic Info */}
        <div className="p-6 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
          <img
            src={doctorDetail.image}
            alt="Doctor's profile"
            className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover"
          />
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-semibold">{doctorDetail.name}</h2>
            <p className="text-lg text-primary-orange mt-2">{doctorDetail.specialization.join(', ')}</p>
            <p className="mt-3 text-gray-600">
              <span className="font-semibold">Experience:</span> {doctorDetail.experience} years
            </p>
            <p className="text-gray-600">
              {/* <span className="font-semibold">Consultation Fees:</span> ₹{doctorDetail.fees} */}
            </p>
          </div>
        </div>

        {/* Doctor's Professional Background */}
        <div className="px-6 py-4 border-t">
          <h3 className="text-xl font-bold text-primary-orange">About</h3>
          <p className="mt-2 text-gray-700">{doctorDetail.about}</p>
        </div>

        {/* Specialization */}
        <div className="px-6 py-4 border-t">
          <h3 className="text-xl font-bold text-primary-orange">Specialization</h3>
          <ul className="mt-2 space-y-1 text-gray-700">
            {doctorDetail.specialization.map((spec, index) => (
              <li key={index}>&#8226; {spec}</li>
            ))}
          </ul>
        </div>

        {/* Professional Background */}
        <div className="px-6 py-4 border-t">
          <h3 className="text-xl font-bold text-primary-orange">Professional Background</h3>
          <ul className="mt-2 space-y-1 text-gray-700">
            {doctorDetail.profession_background.map((background, index) => (
              <li key={index}>&#8226; {background}</li>
            ))}
          </ul>
        </div>

        {/* Languages Spoken */}
        <div className="px-6 py-4 border-t">
          <h3 className="text-xl font-bold text-primary-orange">Languages Spoken</h3>
          <ul className="mt-2 space-y-1 text-gray-700">
            {doctorDetail.language_spoken.map((language, index) => (
              <li key={index}>&#8226; {language}</li>
            ))}
          </ul>
        </div>

        {/* Contact and Availability */}
        <div className="px-6 py-4 border-t flex flex-col lg:flex-row lg:justify-between">
          <div>
            <h3 className="text-xl font-bold text-primary-orange">Contact Information</h3>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold">Phone:</span> {doctorDetail.phone}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {doctorDetail.email}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Website:</span> {doctorDetail.website}
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            <h3 className="text-xl font-bold text-primary-orange">Availability</h3>
            <p className="mt-2 text-gray-700">{doctorDetail.availability}</p>
          </div>
        </div>
        <div className='py-8 px-4'>
                    {/* <VideoComponent /> */}
                    {/* <NewComponent videos={videos} /> */}
                    <div>
                      <h1 className='text-2xl text-primary-orange text-center  mb-4 font-semibold'>Testimonials</h1>
                    </div>
                    <TestimonialComponent />
                </div>

        {/* Book Appointment Button */}
        <div className="px-6 py-4 border-t text-center">
          <button className="w-full py-4 bg-primary-orange text-white font-bold rounded-lg hover:bg-orange-600 transition duration-200">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
   
    </div>
  );
};

export default DoctorDetailComponent;
