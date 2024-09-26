import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-primary-div shadow-md hover:shadow-lg cursor-pointer rounded-lg p-2 m-4 w-80">
      <img
        src={doctor.profilePic}
        alt={doctor.name}
        className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-semibold text-center mb-2">{doctor.name}</h2>
      <p className="text-gray-600 text-center">{doctor.qualification}</p>
      <div className="mt-4">
        <p><strong>Experience:</strong> {doctor.experience} years</p>
        <p><strong>Location:</strong> {doctor.location}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
