import React from 'react';
import AllTestWithSearch from './AllTestWithSearch';
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';
const ClinicalAssessment = () => {


    return (
        <div className="mx-auto py-8 ">
            {/* Main Heading */}
            <div className="text-center  px-4 mb-8 ">
                <h1 className="text-2xl font-bold text-primary-orange mb-2">Comprehensive Clinical Assessments</h1>
                <p className="text-gray-600">Whether for a diagnosis or progress tracking, our therapists and RCI-certified Clinical Psychologists will provide you with evidence-based, effective care that is customized to meet your needs.</p>
            </div>

            <div className='flex justify-center mb-6'>
            <RequestAppointment
                        name={"Get in Touch"}
                        customStyle={" bg-[#EF6623] hover:bg-orange-500 text-xl active:bg-orange-700 rounded-lg text-white py-1 px-5"}
                    />
            </div>

            <div className=''>

                {/* Featured Assessments Heading */}

                {/* Grid of Assessments */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-2 mb-8 px-10 bg-primary-div p-6">
                    <div className="mb-4 text-center">
                        <h3 className="text-xl text-center font-semibold text-gray-700 mb-2">Featured Assessments</h3>
                        
                    </div>

                    {tests.map((test, index) => (
                        <div
                            key={index}
                            className="bg-orange-100  p-4 rounded-lg flex  items-center justify-start  w-full"
                        >
                            <h1 className='text-xl font-semibold whitespace-nowrap'>{test.shortForm} -</h1>
                            <div className='p-2'>
                                <h3 className="text-sm  text-gray-800 capitalize">{test.name}</h3>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>

           <div className='text-center mb-6'>
           <p className="text-gray-600">We offer over 90 assessments </p>
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
