import React from 'react';
import DoctorCard from '../../component/DoctorCard';

const doctors = [
  {
    name: 'Dr. John Smith',
    profilePic: '/doctor/Dr Subham.jpg',
    experience: 10,
    location: 'New York, USA',
    qualification: 'MD, PhD in Cardiology',
  },
  {
    name: 'Dr. Jane Doe',
        profilePic: '/doctor/Dr Subham.jpg',

    experience: 8,
    location: 'Los Angeles, USA',
    qualification: 'MBBS, MS in Surgery',
  },
  {
    name: 'Dr. Mark Lee',
        profilePic: '/doctor/Dr Subham.jpg',

    experience: 12,
    location: 'San Francisco, USA',
    qualification: 'MD, PhD in Neurology',
  },
  {
    name: 'Dr. Jane Doe',
        profilePic: '/doctor/Dr Subham.jpg',

    experience: 8,
    location: 'Los Angeles, USA',
    qualification: 'MBBS, MS in Surgery',
  },
  {
    name: 'Dr. Mark Lee',
        profilePic: '/doctor/Dr Subham.jpg',

    experience: 12,
    location: 'San Francisco, USA',
    qualification: 'MD, PhD in Neurology',
  },
  {
    name: 'Dr. Jane Doe',
        profilePic: '/doctor/Dr Subham.jpg',

    experience: 8,
    location: 'Los Angeles, USA',
    qualification: 'MBBS, MS in Surgery',
  },
  {
    name: 'Dr. Mark Lee',
        profilePic: '/doctor/Dr Subham.jpg',

    experience: 12,
    location: 'San Francisco, USA',
    qualification: 'MD, PhD in Neurology',
  },
  {
    name: 'Dr. Jane Doe',
        profilePic: '/doctor/Dr Subham.jpg',

    experience: 8,
    location: 'Los Angeles, USA',
    qualification: 'MBBS, MS in Surgery',
  },
  {
    name: 'Dr. Mark Lee',
        profilePic: '/doctor/Dr Subham.jpg',

    experience: 12,
    location: 'San Francisco, USA',
    qualification: 'MD, PhD in Neurology',
  },
];

const Page = () => {
  return (
    <div className="m-10">
      <div className="flex justify-center">
        <h1 className="text-3xl md:text-5xl text-primary-orange font-semibold">Our Doctors</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4  gap-3 mt-10">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Page;
