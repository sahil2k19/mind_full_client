"use client"
import React, { useState } from 'react'
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';

const AllTherapyWithSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expanded, setExpanded] = useState({});
    const [testsToShow, setTestsToShow] = useState(4);

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

    const testsToDisplay = filteredTests

    const quickLinks = ["Talk Therapy", "CBT", "Art Therapy"]; // Array for Quick Links

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='mb-6'>
                <h1 className='text-4xl font-semibold text-gray-800' >FAQs</h1>
            </div>
            <div className='md:w-[60%]'>
                {/* Search Bar */}
                <div className="mb-6">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search by therapy name..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <div className="absolute right-3">
                            <img src="/home/search.svg" alt="search" className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className='flex mb-6 gap-2'>
                    {quickLinks.map((link, index) => (
                        <div onClick={()=>setSearchTerm(link)} key={index} className="flex items-center bg-green-100 text-sm text-gray-700 px-4 py-2 rounded-full">
                            <span>{link}</span>
                        </div>
                    ))}
                </div>

                {/* Search Results */}
                <div className="grid grid-cols-1 gap-2 h-[400px] overflow-y-scroll mb-6  rounded-lg">
                    {testsToDisplay.length > 0 ? (
                        testsToDisplay.map((test) => (
                            <div
                                key={test._id}
                                onClick={() => toggleExpand(test._id)}
                                className={`bg-white  max-w-[320px] rounded-lg cursor-pointer ${expanded[test._id]}`}
                            >
                              <div className='bg-primary-div p-2 rounded-md'>
                              <h3 className="text-[14px] md:text-lg text-gray-800 capitalize">
                                    What is <span className='font-bold'>{test.name}</span>?
                                </h3>
                              </div>
                           {   expanded[test._id] && <div className='p-2'>
                               <p className="text-gray-600 text-[12px] md:text-sm">
                                    {test.detail }
                                </p>
                               </div>}
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-gray-800">No Therapy found</h3>
                            <p className="text-gray-600 text-center mb-4">{`We couldn't find any Therapy matching your search.`}</p>
                            <RequestAppointment
                                name={"Contact Us"}
                                customStyle={" bg-[#EF6623] hover:bg-orange-500 text-lg font-semibold active:bg-orange-700 rounded-lg text-white py-2 px-4"}
                            />
                        </div>
                    )}
                </div>

                <div className="flex justify-center">
                    <RequestAppointment
                        name={"Contact Us"}
                        customStyle={" bg-[#EF6623] hover:bg-orange-500 text-xl active:bg-orange-700 rounded-lg text-white py-1 px-2"}
                    />
                </div>
            </div>
        </div>
    );
}

export default AllTherapyWithSearch;

const allTest = [
    {
        _id: 1,
        name: "Talk Therapy",
        icon: "/iconsNew/therapy.png",
        detail: "Talk therapy, also known as psychotherapy, involves discussing emotional or psychological issues with a licensed therapist to improve mental well-being."
    },
    {
        _id: 2,
        name: "Cognitive Behavioral Therapy (CBT)",
        icon: "/iconsNew/psychiatry.png",
        detail: "CBT is a structured, short-term therapy that helps individuals identify and challenge negative thought patterns and behaviors."
    },
    {
        _id: 3,
        name: "Art Therapy",
        icon: "/iconsNew/assessment.png",
        detail: "Art therapy encourages self-expression through creative techniques like drawing or painting to improve mental health and emotional well-being."
    },
    {
        _id: 4,
        name: "Music Therapy",
        icon: "/iconsNew/tms.png",
        detail: "Music therapy uses music and sound to help improve physical and mental health through activities like singing or listening to music."
    },
    {
        _id: 5,
        name: "Family Therapy",
        icon: "/iconsNew/therapy.png",
        detail: "Family therapy involves treating the entire family as a system to improve communication, resolve conflicts, and strengthen family bonds."
    },
    {
        _id: 4,
        name: "Music Therapy",
        icon: "/iconsNew/tms.png",
        detail: "Music therapy uses music and sound to help improve physical and mental health through activities like singing or listening to music."
    },
    {
        _id: 5,
        name: "Family Therapy",
        icon: "/iconsNew/therapy.png",
        detail: "Family therapy involves treating the entire family as a system to improve communication, resolve conflicts, and strengthen family bonds."
    },
    {
        _id: 4,
        name: "Music Therapy",
        icon: "/iconsNew/tms.png",
        detail: "Music therapy uses music and sound to help improve physical and mental health through activities like singing or listening to music."
    },
    {
        _id: 5,
        name: "Family Therapy",
        icon: "/iconsNew/therapy.png",
        detail: "Family therapy involves treating the entire family as a system to improve communication, resolve conflicts, and strengthen family bonds."
    }
];
