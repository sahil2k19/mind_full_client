"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const DoctorCard = ({ doctor }) => {
    const router = useRouter()
  return (
    <div className='p-4'>
      <div onClick={()=>router.push(`/admin/doctors/${doctor._id}`)} className="bg-primary-div shadow-md hover:shadow-lg h-[250px] overflow-hidden cursor-pointer rounded-lg p-2 ">
      <div className='flex justify-center'>
      <img
        src={doctor.profilePic}
        alt={doctor.name}
        className="w-[76px] h-[76px] object-cover rounded-full mb-4"
      />
      </div>
      <h2 className="text-2xl font-semibold text-center mb-2">{doctor.name}</h2>
      <p className="text-gray-600 text-center">{doctor.qualification}</p>
      <div className="mt-4">
        <p><strong>Experience:</strong> {doctor.experience} years</p>
        <p><strong>Location:</strong> {doctor.location}</p>
      </div>
    </div>
    </div>
  );
};

export default DoctorCard;



