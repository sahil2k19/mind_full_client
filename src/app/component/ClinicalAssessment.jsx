import React from 'react';
import AllTestWithSearch from './AllTestWithSearch';
const ClinicalAssessment = () => {


    return (
        <div className="mx-auto px-4 py-8 ">
            {/* Main Heading */}
            <div className="text-center mb-8 ">
                <h1 className="text-2xl font-bold text-primary-orange mb-2">Comprehensive Clinical Assessments</h1>
                <p className="text-gray-600">Whether for a diagnosis or progress tracking, our therapists and RCI-certified Clinical Psychologists will provide you with evidence-based, effective care that is customized to meet your needs.</p>
            </div>

            <div className=''>
                
            {/* Featured Assessments Heading */}
            <div className="mb-6">
                <h3 className="text-xl text-center font-semibold text-gray-700">Featured Assessments</h3>
            </div>

            {/* Grid of Assessments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6 mb-8 px-10 bg-primary-div p-6">
                {tests.map((test, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300 w-full"
                    >
                        <div className='border-2 border-primary-orange rounded-lg p-2 w-full flex justify-center'>
                            <h1>{test.shortForm}</h1>
                        </div>
                       <div className='p-2'>
                       <h3 className="text-lg md:text-lg font-medium text-gray-800 capitalize">{test.name}</h3>
                       </div>
                    </div>
                ))}
            </div>
            </div>


            <AllTestWithSearch />
        </div>
    );
};

const tests = [
    {
        _id: 1,
        name: "Thematic App Test",
        icon: "/iconsNew/therapy.png",
        shortForm: "TAT"
    },
    {
        _id: 2,
        name: "Rorschach Inkblot Test",
        icon: "/iconsNew/psychiatry.png",
        shortForm: "RIT"
    },
    {
        _id: 3,
        name: "Sentence Completion Test",
        icon: "/iconsNew/assessment.png",
        shortForm: "SCT"
    },
    {
        _id: 4,
        name: "Draw-A-Person Test",
        icon: "/iconsNew/tms.png",
        shortForm: "DAP"
    },
    {
        _id: 5,
        name: "House-Tree-Person Test",
        icon: "/iconsNew/therapy.png",
        shortForm: "HTP"
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
