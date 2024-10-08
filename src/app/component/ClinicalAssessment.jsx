"use client"
import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';

const ClinicalAssessment = () => {
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
        <div className="mx-auto px-4 py-8 ">
            {/* Main Heading */}
            <div className="text-center mb-8 ">
                <h1 className="text-2xl font-bold text-primary-orange mb-2">Take a Self-Assessment</h1>
                <p className="text-gray-600">RCI Certified Clinicians provide various tests and Assessments</p>
            </div>

            {/* Featured Assessments Heading */}
            <div className="mb-6">
                <h3 className="text-xl text-center font-semibold text-gray-700">Featured Assessments</h3>
            </div>

            {/* Grid of Assessments */}
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                {tests.map((test, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={test.icon}
                            alt="test"
                            className="w-20 h-20 mb-4 object-cover"
                        />
                        <h3 className="text-[14px] md:text-lg font-medium text-gray-800 capitalize">{test.name}</h3>
                    </div>
                ))}
            </div>

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
            <div className="grid grid-cols-1  gap-6 h-[400px] overflow-y-scroll">
                {filteredTests.map((test) => (
                    <div
                        key={test._id}
                        className="bg-white shadow-lg rounded-lg px-2 flex "
                    >
                        <div className="  mb-4 w-[80px] md:min-w-[120px] mr-2">
                            <img
                                src={test.icon}
                                alt={test.name}
                                className="w-full  object-cover mr-4"
                            />

                        </div>
                        <div className='w-full'>
                            <h3 className="text-[14px] md:text-lg font-semibold text-gray-800 capitalize">{test.name}</h3>
                            <p className="text-gray-600 text-[12px] md:text-sm">
                                {expanded[test._id]
                                    ? test.detail
                                    : test.detail.substring(0, 50) + '...'}
                            </p>
                            {/* Read More Button */}
                            <div className='flex justify-between items-center'>
                                <IconButton
                                    onClick={() => toggleExpand(test._id)}
                                    className="text-blue-500 text-[12px]"
                                >
                                    <ExpandMoreIcon />
                                    {expanded[test._id] ? 'Read Less' : 'Read More'}
                                </IconButton>
                                <div className=''>
                                    <RequestAppointment name={"Contact Us"} customStyle={" bg-[#EF6623] hover:bg-orange-500 text-[12px] active:bg-orange-700 rounded-lg text-white py-1 px-2"} />
                                </div>
                            </div>
                        </div>



                    </div>
                ))}
            </div>
        </div>
    );
};

const tests = [
    {
        _id: 1,
        name: "test1",
        icon: "/iconsNew/therapy.png",
    },
    {
        _id: 2,
        name: "test2",
        icon: "/iconsNew/psychiatry.png",
    },
    {
        _id: 3,
        name: "test3",
        icon: "/iconsNew/assessment.png",
    },
    {
        _id: 4,
        name: "test4",
        icon: "/iconsNew/tms.png",
    },
    {
        _id: 5,
        name: "test5",
        icon: "/iconsNew/therapy.png",
    },
]


const allTest = [
    {
        _id: 1,
        name: "test1",
        icon: "/iconsNew/therapy.png",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus non elit vestibulum dictum. Sed non lectus sed nisl tincidunt convallis. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros"
    },
    {
        _id: 2,
        name: "test2",
        icon: "/iconsNew/psychiatry.png",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus non elit vestibulum dictum. Sed non lectus sed nisl tincidunt convallis. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros"
    },
    {
        _id: 3,
        name: "test3",
        icon: "/iconsNew/assessment.png",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus non elit vestibulum dictum. Sed non lectus sed nisl tincidunt convallis. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros"
    },
    {
        _id: 4,
        name: "test4",
        icon: "/iconsNew/tms.png",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus non elit vestibulum dictum. Sed non lectus sed nisl tincidunt convallis. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros"
    },
    {
        _id: 5,
        name: "test5",
        icon: "/iconsNew/therapy.png",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus non elit vestibulum dictum. Sed non lectus sed nisl tincidunt convallis. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros"
    },
    {
        _id: 6,
        name: "test6",
        icon: "/iconsNew/therapy.png",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus non elit vestibulum dictum. Sed non lectus sed nisl tincidunt convallis. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros"
    },
    {
        _id: 7,
        name: "test7",
        icon: "/iconsNew/psychiatry.png",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus non elit vestibulum dictum. Sed non lectus sed nisl tincidunt convallis. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros"
    },
    {
        _id: 8,
        name: "test8",
        icon: "/iconsNew/assessment.png",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus non elit vestibulum dictum. Sed non lectus sed nisl tincidunt convallis. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros tristique varius. Sed et nulla auctor, vestibulum magna sed, convallis ex. Cras eget tortor eget eros"
    },
    {
        _id: 9,
        name: "test9",
        icon: "/iconsNew/tms.png",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus non elit vestibulum dictum. Sed non lectus sed nisl"
    }
]

export default ClinicalAssessment;
