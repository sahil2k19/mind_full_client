"use client"
import React , { useState } from 'react'
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';

const AllTestWithSearch = () => {
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
                                <h3 className="text-[14px] md:text-lg font-semibold text-gray-800 capitalize">
                                    {test.name}
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
};

const allTest = [
    {
        _id: 1,
        name: "Blood Test",
        icon: "/iconsNew/therapy.png",
        detail: "Blood tests are used to evaluate your general health and detect a wide range of disorders."
    },
    {
        _id: 2,
        name: "MRI Scan",
        icon: "/iconsNew/psychiatry.png",
        detail: "MRI is a type of scan that uses magnetic fields and radio waves to produce detailed images of the inside of the body."
    },
    {
        _id: 3,
        name: "X-ray",
        icon: "/iconsNew/assessment.png",
        detail: "X-rays are used to produce images of the structures inside your body, particularly bones."
    },
    {
        _id: 4,
        name: "Ultrasound",
        icon: "/iconsNew/tms.png",
        detail: "Ultrasound imaging uses high-frequency sound waves to create images of the inside of the body."
    },
    {
        _id: 5,
        name: "COVID-19 Test",
        icon: "/iconsNew/therapy.png",
        detail: "A test that detects the presence of the virus that causes COVID-19 in respiratory samples."
    }
];

export default AllTestWithSearch;
