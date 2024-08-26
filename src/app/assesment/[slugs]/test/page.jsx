"use client"


import { Container } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const tests = [
  {
      title: 'PHQ-9 Depression Test',
      link: '/assesment-page/phq9',
      id: 'phq9',
      paragraph: `The PHQ-9 consists of 9 questions that ask about feelings of sadness, hopelessness, and loss of interest in activities, among
other symptoms.

By answering these questions, you can gain insights into your depressive symptoms and determine if you might benefit from further support or professional help.`
  },
  {
      title: 'PSS-10 Stress Assessment',
      link: '/assesment-page/pss10',
      id: 'pss10',
      paragraph: `This test measures your perception of stress and how you handle life's challenges

The PSS-10 consists of 10 questions that ask about your feelings and thoughts during the last month, including how often you felt nervous, stressed, or unable to control important things in your life.`
  },
  {
      title: 'GAD-7 Anxiety Test',
      link: '/assesment-page/gad7',
      id: 'gad7',
      paragraph: `This questionnaire helps you evaluate the severity of your anxiety symptoms over the past two weeks.

The GAD-7 consists of 7 questions that ask about feelings of nervousness, worry, and restlessness, among other symptoms. By answering these questions honestly, you can get a clearer picture of your anxiety levels and determine if you might benefit from further support or professional help.`
  },
  {
      title: 'K10 (Kessler Psychological Distress Scale)',
      link: '/assesment-page/k10',
      id: 'k10',
      paragraph: `The K10 is a simple and effective tool designed to measure your level of psychological distress over the past month. This test can help you gain insights into your mental health, especially if you're feeling anxious, depressed, or generally overwhelmed.

The K10 consists of 10 questions that ask about feelings of nervousness, hopelessness, restlessness, and fatigue, among other symptoms. By answering these questions, you can get a better understanding of your current emotional state and whether you might benefit from further support or professional help.`    
  }

]

const Test = () => {
  const {slugs} = useParams()
  const router = useRouter()
  const test = tests.find(t => t.id === slugs)
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
                      <h1 className="text-xl font-semibold ">{test.title}</h1>

                  </div>


              </div>
   
          <div className="p-4 lg:container max-w-md mx-auto">
              <h2 className="font-semibold mb-4 text-primary-orange">Please select the answer that is applicable to you</h2>
              <div className="mb-6">
                  <p className="mb-2">1. Little interest or pleasure in doing things</p>
                  <div className="ml-4">
                      <label className="flex items-center mb-2">
                          <input type="radio" name="question1" className="form-radio text-primary" />
                          <span className="ml-2">Not at all</span>
                      </label>
                      <label className="flex items-center mb-2">
                          <input type="radio" name="question1" className="form-radio text-primary"  />
                          <span className="ml-2">Several Days</span>
                      </label>
                      <label className="flex items-center mb-2">
                          <input type="radio" name="question1" className="form-radio text-primary" />
                          <span className="ml-2">Atleast half of the days</span>
                      </label>
                      <label className="flex items-center mb-2">
                          <input type="radio" name="question1" className="form-radio text-primary" />
                          <span className="ml-2">Nearly Everyday</span>
                      </label>
                  </div>
              </div>
              <div className="mb-6">
                  <p className="mb-2">2. Feeling down, depressed, or hopeless</p>
                  <div className="ml-4">
                      <label className="flex items-center mb-2">
                          <input type="radio" name="question2" className="form-radio text-primary"  />
                          <span className="ml-2">Not at all</span>
                      </label>
                      <label className="flex items-center mb-2">
                          <input type="radio" name="question2" className="form-radio text-primary" />
                          <span className="ml-2">Several Days</span>
                      </label>
                      <label className="flex items-center mb-2">
                          <input type="radio" name="question2" className="form-radio text-primary" />
                          <span className="ml-2">Atleast half of the days</span>
                      </label>
                      <label className="flex items-center mb-2">
                          <input type="radio" name="question2" className="form-radio text-primary" />
                          <span className="ml-2">Nearly Everyday</span>
                      </label>
                  </div>
              </div>
              <div className="mb-6">
                  <p className="mb-2">3. Trouble falling or staying asleep, or sleeping too much</p>
                  <div className="ml-4">
                      <label className="flex items-center mb-2">
                          <input type="radio" name="question3" className="form-radio text-primary" />
                          <span className="ml-2">Not at all</span>
                      </label>
                      <label className="flex items-center mb-2">
                          <input type="radio" name="question3" className="form-radio text-primary" />
                          <span className="ml-2">Several Days</span>
                      </label>
                      <label className="flex items-center mb-2">
                          <input type="radio" name="question3" className="form-radio text-primary" />
                          <span className="ml-2">Atleast half of the days</span>
                      </label>
                      <label className="flex items-center mb-2">
                          <input type="radio" name="question3" className="form-radio text-primary"  />
                          <span className="ml-2">Nearly Everyday</span>
                      </label>
                  </div>
              </div>


          </div>
          <div className='flex justify-center mb-6'>

          <button onClick={() => router.push(`/assesment/${slugs}/result`)} className="bg-primary-orange text-white py-3 px-14 rounded-lg font-semibold">SUBMIT</button>
          </div>

      </Container>
)
}

export default Test