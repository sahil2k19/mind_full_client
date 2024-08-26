// import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import AssesmentPage from './AssesmentPage'


const AvailableTest = [
    {
        id: 1,
        title: "Take the PHQ-9 Test",
        title2: "Test for Depression",
        para: `This test helps evaluate the severity of depression symptoms.`,
        img: '/home/positive2.svg',
        link:'/assesment/phq9/selfAssesment'
    },
    {
        id: 2,
        title: "Take the GAD-7 Test",
        title2: "Test for Anxiety",
        para: `This test helps evaluate the severity of anxiety symptoms.`,
        img: '/home/positive3.svg',
        link:'/assesment/gad7/selfAssesment'
    },
    {
        id: 3,
        title: "Take the PSS-10 Test",
        title2: "Test for Stress",
        para: `This test assesses how stressful you find your life situations.`,
        img: '/home/positive4.svg',
        link:'/assesment/pss10/selfAssesment'
    },

]

const defaultTest = {
    id: 4,
    title: "Take the K10 Test",
    title2: "K10 (Kessler Psychological Distress Scale)",
    para: `This test assesses the level of distress you have experienced in the past month. It helps identify symptoms of anxiety and depression, emotional and physical fatigue, and the impact on daily functioning. `,
    img: '/home/positive1.svg',
}

const section1 = {
    header: "Take a Self-Assessment",
    para1: `<p class='text-sm text-center mb-5'>
                        Welcome to our self-assessment page.
                        Here, you can choose from a variety of tests to help you understand your mental health better.
                    </p>

                    <p class='text-sm text-center'>
                        Select the test that best matches your current feelings and concerns.
                    </p>`,
    AvailableTest,

}
const section2 = {
    header: "Not sure which test to take?",
    para: `<p class='text-center text-sm'>The K10 is designed to measure general psychological distress and can be an effective initial screening tool to identify whether you may need further assessment or support.  </p>`,
    defaultTest,
}

const section3 = {
    blogs: [
        {
            id: 1,
            img: "",
            title: "TMS for Depression"
        },
        {
            id: 2,
            img: "",
            title: "TMS for OCD"
        },
        {
            id: 3,
            img: "",
            title: "TMS for Anxiety"
        },
    ],
    button: {
        text: "Learn More",
        link: "/",
    }
}

const allSection = {
    section1,
    section2,
    section3
}
const Assesment = () => {
    // const router = useRouter()
  return (
    <>
        <AssesmentPage allSection={allSection} />
    </>
  )
}

export default Assesment