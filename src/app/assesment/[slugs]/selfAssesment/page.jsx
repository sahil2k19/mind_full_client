"use client"


import { Container } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'

const tests = [
  {
      title: 'PHQ-9 Depression Test',
      link: '/assesment/phq9/test',
      id: 'phq9',
      paragraph: `The PHQ-9 consists of 9 questions that ask about feelings of sadness, hopelessness, and loss of interest in activities, among
other symptoms.

By answering these questions, you can gain insights into your depressive symptoms and determine if you might benefit from further support or professional help.`
  },
  {
      title: 'PSS-10 Stress Assessment',
      link: '/assesment/pss10/test',
      id: 'pss10',
      paragraph: `This test measures your perception of stress and how you handle life's challenges

The PSS-10 consists of 10 questions that ask about your feelings and thoughts during the last month, including how often you felt nervous, stressed, or unable to control important things in your life.`
  },
  {
      title: 'GAD-7 Anxiety Test',
      link: '/assesment/gad7/test',
      id: 'gad7',
      paragraph: `This questionnaire helps you evaluate the severity of your anxiety symptoms over the past two weeks.

The GAD-7 consists of 7 questions that ask about feelings of nervousness, worry, and restlessness, among other symptoms. By answering these questions honestly, you can get a clearer picture of your anxiety levels and determine if you might benefit from further support or professional help.`
  },
  {
      title: 'K10 (Kessler Psychological Distress Scale)',
      link: '/assesment/k10/test',
      id: 'k10',
      paragraph: `The K10 is a simple and effective tool designed to measure your level of psychological distress over the past month. This test can help you gain insights into your mental health, especially if you're feeling anxious, depressed, or generally overwhelmed.

The K10 consists of 10 questions that ask about feelings of nervousness, hopelessness, restlessness, and fatigue, among other symptoms. By answering these questions, you can get a better understanding of your current emotional state and whether you might benefit from further support or professional help.`    
  }

]
const SelfAssesment = () => {
    const {slugs} = useParams()
    const router = useRouter()
    const test = tests.find(t => t.id === slugs)
    const [checked, setChecked] = useState(false);
  return (
    <Container maxWidth="lg">
    <div className='flex p-6 items-center'>
        <div className='mr' onClick={() => router.back()}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            // className="w-6 h-6"
            >
                <path d="M15 18l-6-6 6-6" />
            </svg>
        </div>
        <div>

        </div>
        <div>
            <h1 className="text-2xl font- ">Self-Assessment</h1>

        </div>


    </div>
    <div className='px-4 '>
        <div className='mb-4'>
            <h1 className='text-2xl text-primary-orange font-semibold mb-3'>{test?.title}</h1>
            <p className='text-sm font-semibold text-primary-orange'>Welcome to the {test?.title} Page</p>
        </div>
        <div className='mb-4 text-gray-500'>
           {test?.paragraph?.split('\n').map((p, index) => <p className='text-sm mb-2' key={index}>{p}</p>)}
        </div>
        <div className='mb-4'>
            <p className='text-primary-orange text-sm font-semibold'>Answer the following questions honestly
                to get the most accurate results.
                Your responses are confidential.</p>
        </div>

        <div className='mb-4'>
            <h1 className=' font-semibold text-xl mb-2'>Disclaimer:</h1>
            <p className='text-gray-500 text-[12px]'>Our self-assessment tools are designed to help you gain insights into your mental health. They are not a substitute for a professional diagnosis or treatment. The results of these tests should be discussed with a qualified healthcare provider who can offer you a thorough evaluation and appropriate care. If you are experiencing severe distress or have thoughts of harming yourself or others, please seek immediate help from a mental health professional or contact emergency services. Your privacy is important to us, and all responses are kept confidential.</p>
        </div>

        <div className='flex justify-center mb-4'>
            <input className='mr-4' type='checkbox' value={checked} onChange={() => setChecked(!checked)}/>
            <p className='text-primary-orange'>I understand</p>
        </div>

        <div className='flex justify-center'>
            <button disabled={!checked} onClick={() => router.push(test?.link)} className={` text-white p-3 rounded-lg font-semibold px-10 ${!checked ? 'cursor-not-allowed bg-gray-300' : 'bg-primary-orange active:bg-orange-500'}`}>TAKE THE TEST</button>
        </div>
    </div>
</Container>
  )
}

export default SelfAssesment