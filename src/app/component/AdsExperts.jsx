"use client"
import React, { useState, useEffect } from 'react';
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';
import axios from 'axios';

const doctors = [
    {
        "_id": "66fbeb587d61644c9bde4c12",
        "name": "Ms. Ayana Sunil Variar",
        "designation": "Clinical Psychologist",
        "about": "I believe in a holistic and patient-centred approach to mental health care, where understanding the individual's background, experiences, and cultural context is crucial for effective treatment. My extensive training in various psychotherapies, allows me to tailor my approach to meet the unique needs of each patient. My thesis on the influence of religious beliefs on the quality of life among cancer patients reflects my interest in exploring how personal beliefs and values impact mental health and well-being. \n\nFluent in English, Malayalam, Kannada, Tamil, and Hindi, I am committed to breaking down language barriers and providing accessible care to a broad patient population. I strive to create a safe and supportive environment where patients feel heard, understood, and empowered to overcome their challenges.I am dedicated to continuous learning and staying updated with the latest advancements in psychology to provide the best possible care. My goal is to help my patients achieve lasting positive change and improve their overall quality of life.",
        "profession_background": [
            "M.Phil – Clinical Psychology",
            "MSc – Clinical Psychology",
            "BSc – Psychology"
        ],
        "language_spoken": [
            "English",
            "Malayalam",
            "Kannada",
            "Tamil",
            "Hindi"
        ],
        "specialization": [
            "Anxiety",
            "Depression",
            "Bipolar Disorder",
            "Schizophrenia",
            "Psychosis",
            "Borderline Personality Disorder",
            "EMDR",
            "Emotional Focused Therapy",
            "Acceptance Commitment Therapy",
            "Dialectical Behaviour Therapy",
            "Trauma PTSD",
            "Trauma-Informed Approach",
            "Psychometric Assessments"
        ],
        "experience": 7,
        "image": "https://mindfultms1.s3.us-east-1.amazonaws.com/1729160826078-ayana.png",
        "phone": "",
        "email": "",
        "website": "",
        "availability": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "createdAt": "2024-10-01T12:30:16.424Z",
        "updatedAt": "2024-11-07T07:19:55.416Z",
        "__v": 0,
        "location": "Bangalore - Whitefield",
        " order": 2,
        "order": 0
    },
    {
        "_id": "66fbe61e7d61644c9bde4bd3",
        "name": "Ms. Navya Shree",
        "designation": "Clinical Psychologist",
        "about": "I am a dedicated Clinical Psychologist who believes that everyone has the potential to be their best self. I focus on understanding and providing personalized care to each of my clients. I have lots of experience working with people of all ages, from children to the elderly, and I am skilled in various psychological assessments and therapy techniques. \n\nI have also researched men’s mental health, especially the experiences of first-time fathers. My internships at hospitals in Bengaluru and Hyderabad, along with my job as an Assistant Professor of Psychology, have given me a lot of valuable knowledge. I am committed to helping my clients achieve mental wellness and personal growth through therapy. \n\nIf you are looking for a therapist who listens with empathy, understands your unique challenges, and is dedicated to supporting your mental health journey, I am here to help. Together, we can work towards reaching your personal goals and improving your overall well-being. ",
        "profession_background": [
            "M.Phil – Clinical Psychology",
            "MSc – Clinical Psychology",
            "BSc – Psychology"
        ],
        "language_spoken": [
            "English",
            "Malayalam",
            "Kannada",
            "Tamil",
            "Hindi"
        ],
        "specialization": [
            "Anxiety",
            "Depression",
            "Bipolar Disorder",
            "Schizophrenia",
            "Psychosis",
            "Borderline Personality Disorder",
            "Cognitive Behaviour Therapy (CBT)",
            "Dialectical Behaviour Therapy (DBT)",
            "Motivation Enhancement Therapy (MET)",
            "Exposure Response Prevention (ERP)",
            "Interpersonal Therapy (IPT)"
        ],
        "experience": 8,
        "image": "https://mindfultms1.s3.us-east-1.amazonaws.com/1729160837559-navya.png",
        "phone": "",
        "email": "",
        "website": "",
        "availability": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday"
        ],
        "createdAt": "2024-10-01T12:07:58.038Z",
        "updatedAt": "2024-11-07T07:41:23.902Z",
        "__v": 0,
        "location": "Bangalore - Whitefield",
        "order": 1
    },
    {
        "_id": "66fe27b11941768d6b3e9fc3",
        "name": "Ms. Kavya K",
        "designation": "Clinical Psychologist",
        "about": "I am committed to providing tailored interventions that address the unique circumstances of each client. My practice is grounded in empathy and a deep commitment to facilitating personal growth and resilience. I continuously update my knowledge with the latest advancements in my field to provide the highest quality care. Fluent in English, Malayalam, Tamil, and Hindi, I ensure my services are accessible to a diverse patient population. My compassionate approach and dedication to my clients have garnered positive feedback and heartfelt testimonials from those I have helped.",
        "profession_background": [
            "M.Phil – Clinical Psychology",
            "MSc – Psychology",
            "BSc – Psychology"
        ],
        "language_spoken": [
            "English",
            "Tamil",
            "Malayalam",
            "Hindi"
        ],
        "specialization": [
            "Cognitive Behavioral Therapy (CBT)",
            "Relationship Counselling",
            "Child Psychology",
            "Psychotherapy Adult",
            "Complex Trauma",
            "Individual psychotherapy",
            "Affective and Emotional Difficulties",
            "Anger Management"
        ],
        "experience": 7,
        "image": "https://mindfultms1.s3.us-east-1.amazonaws.com/1730960254795-Dr.Kavya.jpg",
        "phone": "",
        "email": "",
        "website": "",
        "availability": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "createdAt": "2024-10-03T05:12:17.432Z",
        "updatedAt": "2024-11-07T07:15:09.921Z",
        "__v": 0,
        "location": "Bangalore - Whitefield",
        "order": 3
    },
    {
        "_id": "66fe2dffd3d7faee0fe9c1bf",
        "name": "Ms. Sradha P",
        "designation": "Clinical Psychologist",
        "location": "Bangalore - Hebbal",
        "about": "Hello! I’m Sradha, a dedicated clinical psychologist passionate about helping individuals overcome mental health challenges. From a young age, I’ve been fascinated by the human mind and emotional well-being, driving me to specialize in both child and adult psychiatry.  \n\nI create a nurturing environment for children with behavioral and neurodevelopmental conditions, employing techniques like behavioral and play therapy. For adults, I aim to build supportive therapeutic relationships, helping clients feel heard and empowered to make positive changes. I utilize various psychotherapies tailored to individual needs. As a trauma-informed therapist, I focus on core emotional struggles, often stemming from childhood experiences. \n\nFluent in multiple languages, I strive to make my services accessible to a diverse population. My practice is grounded in compassion and continuous learning, ensuring the highest quality care.  \n\nLet’s work together towards your personal growth. I’m here to support you on your mental health journey with care and dedication. ",
        "profession_background": [
            "M.Phil – Clinical Psychology",
            "MSc – Clinical Psychology",
            "BSc – Psychology"
        ],
        "language_spoken": [
            "English",
            "Malayalam",
            "Kannada",
            "Hindi"
        ],
        "specialization": [
            "Anxiety",
            "Depression",
            "Bipolar Disorder",
            "Schizophrenia",
            "Psychosis",
            "Borderline Personality Disorder",
            "EMDR",
            "Emotion-Focused Therapy",
            "Acceptance Commitment Therapy",
            "Dialectical Behaviour Therapy (DBT)"
        ],
        "experience": 7,
        "image": "https://mindfultms1.s3.us-east-1.amazonaws.com/1729160861824-sradha.png",
        "phone": "",
        "email": "",
        "website": "",
        "availability": [
            "Thursday",
            "Wednesday",
            "Tuesday",
            "Monday",
            "Friday",
            "Saturday"
        ],
        "createdAt": "2024-10-03T05:39:11.212Z",
        "updatedAt": "2024-11-07T07:40:49.397Z",
        "__v": 0,
        "order": 4
    },
]
const AdsExperts = ({ expertText, location, condition }) => {
    const [doctorsData, setDoctorsData] = useState([]); // To store doctors data
    const [currentIndex, setCurrentIndex] = useState(0); // To track the current doctor index


    const getDoctor = ()=>{
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}doctors/search/doctors?location=${(location||"")}&specialization=${condition||""}`)
        .then(res=>{
            console.log(location)
            setDoctorsData(res.data)
        })
    }
    
    useEffect(()=>{
        getDoctor()
    },[])

    useEffect(() => {
        // Carousel interval logic
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % doctorsData.length);
        }, 3500); // Change doctor every 3.5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [doctorsData]);

    const DoctorComponent = ({ data }) => {
        if (!data) return null;
        return (
            <>
               {expertText? <h2 className="mb-12 text-center text-3xl font-bold text-teal-700">
                    Our Expert Team of <span className="text-orange-500">{expertText}
                    </span>
                </h2>:
                <h2 className="mb-12 text-center text-3xl font-bold text-teal-700">
                    Our Expert
                </h2>
                }
                <div className="mx-auto max-w-md text-center">
                    <img
                        src={data?.image}
                        alt={data?.name}
                        width={200}
                        height={200}
                        className="mx-auto mb-4 rounded-full"
                    />
                    <h3 className="text-xl font-bold text-blue-600">{data?.name}</h3>
                    <p className="font-semibold text-pink-500 text-base">SERVICES</p>
                    <p className="mb-2">{data?.designation}</p>
                    <p className="text-pink-500 font-semibold text-base">SPECIALIZATION</p>
                    <p className="mb-4 font-semibold text-sm">
                        {data?.specialization?.join(', ')}
                    </p>
                </div>
            </>
        );
    };

    return (
        <section className="mx-3 py-6">
            {doctorsData.length > 0 && (
                <DoctorComponent data={doctorsData[currentIndex]} />
            )}
            <div className="flex items-center justify-center">
                <RequestAppointment
                    customStyle={
                        "flex w-full items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 mx-10"
                    }
                    name="Request an Appointment"
                />
            </div>
        </section>
    );
};

export default AdsExperts;
