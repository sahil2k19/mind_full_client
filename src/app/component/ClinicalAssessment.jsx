import React from 'react';
import AllTestWithSearch from './AllTestWithSearch';
const ClinicalAssessment = () => {


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
            <div className="flex flex-wrap justify-center gap-6 mb-8">
                {tests.map((test, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300 w-1/4 sm:w-1/3 md:w-1/4 lg:w-1/5"
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


            <AllTestWithSearch />
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
