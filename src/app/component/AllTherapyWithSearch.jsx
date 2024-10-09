"use client"
import React , { useState } from 'react'
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';
const AllTherapyWithSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expanded, setExpanded] = useState({});

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const toggleExpand = (id) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [id]: !prevExpanded[id],
        }));
    };

    const filteredTests = allTest.filter((test) =>
        test.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className=' flex flex-col justify-center items-center'>
          <div className=' md:w-[60%]'>
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search by test name..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <div className="absolute right-3">
                        {/* Search Icon */}
                        <img src="/home/search.svg" alt="search" className="w-5 h-5" />
                    </div>
                </div>
            </div>

            {/* Search Results */}
            <div className="grid grid-cols-1 gap-6 h-[400px] overflow-y-scroll">
                {filteredTests.length > 0 ? (
                    filteredTests.map((test) => (
                        <div
                            key={test._id}
                            className="bg-white shadow-lg rounded-lg px-2 flex "
                        >
                            <div className="mb-4 w-[80px] md:min-w-[120px] mr-2">
                                <img
                                    src={test.icon}
                                    alt={test.name}
                                    className="w-full object-cover mr-4"
                                />
                            </div>
                            <div className="w-full">
                                <h3 className="text-[14px] md:text-lg  text-gray-800 capitalize">
                                  What is  <span className='font-bold'>{test.name}</span> ?
                                </h3>
                                <p className="text-gray-600 text-[12px] md:text-sm">
                                    {expanded[test._id]
                                        ? test.detail
                                        : test.detail.substring(0, 50) + '...'}
                                </p>
                                {/* Read More Button */}
                                <div className="flex justify-between items-center">
                                    <IconButton
                                        onClick={() => toggleExpand(test._id)}
                                        className="text-blue-500 text-[12px]"
                                    >
                                        <ExpandMoreIcon />
                                        {expanded[test._id] ? 'Read Less' : 'Read More'}
                                    </IconButton>
                                    <div className="">
                                        <RequestAppointment
                                            name={"Contact Us"}
                                            customStyle={" bg-[#EF6623] hover:bg-orange-500 text-[12px] active:bg-orange-700 rounded-lg text-white py-1 px-2"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex flex-col items-center  bg-white shadow-lg rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-800">No tests found</h3>
                        <p className="text-gray-600 text-center mb-4">{`We couldn't find any tests matching your search.`}</p>
                        <RequestAppointment
                            name={"Contact Us"}
                            customStyle={" bg-[#EF6623] hover:bg-orange-500 text-lg font-semibold active:bg-orange-700 rounded-lg text-white py-2 px-4"}
                        />
                    </div>
                )}
            </div>
          </div>
        </div>
    );
}

export default AllTherapyWithSearch


const allTest =[
    {
        _id: 1,
        name: "Talk Therapy",
        icon: "/iconsNew/therapy.png", // Reusing the icon for Blood Test
        detail: "Talk therapy, also known as psychotherapy, involves discussing emotional or psychological issues with a licensed therapist to improve mental well-being."
    },
    {
        _id: 2,
        name: "Cognitive Behavioral Therapy (CBT)",
        icon: "/iconsNew/psychiatry.png", // Reusing the icon for MRI Scan
        detail: "CBT is a structured, short-term therapy that helps individuals identify and challenge negative thought patterns and behaviors."
    },
    {
        _id: 3,
        name: "Art Therapy",
        icon: "/iconsNew/assessment.png", // Reusing the icon for X-ray
        detail: "Art therapy encourages self-expression through creative techniques like drawing or painting to improve mental health and emotional well-being."
    },
    {
        _id: 4,
        name: "Music Therapy",
        icon: "/iconsNew/tms.png", // Reusing the icon for Ultrasound
        detail: "Music therapy uses music and sound to help improve physical and mental health through activities like singing or listening to music."
    },
    {
        _id: 5,
        name: "Family Therapy",
        icon: "/iconsNew/therapy.png", // Reusing the icon for COVID-19 Test
        detail: "Family therapy involves treating the entire family as a system to improve communication, resolve conflicts, and strengthen family bonds."
    }
];
