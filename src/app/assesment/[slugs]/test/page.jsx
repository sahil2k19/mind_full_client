"use client"


import { Container } from '@mui/material'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const tests = [
  {
      title: 'PHQ-9 Depression Test',
      link: '/assesment-page/phq9',
      id: 'phq9',
      condition:"Depression",
      paragraph: `The PHQ-9 consists of 9 questions that ask about feelings of sadness, hopelessness, and loss of interest in activities, among
other symptoms.

By answering these questions, you can gain insights into your depressive symptoms and determine if you might benefit from further support or professional help.`
  },
  {
      title: 'PSS-10 Stress Assessment',
      link: '/assesment-page/pss10',
      id: 'pss10',
      condition:"Stress",
      paragraph: `This test measures your perception of stress and how you handle life's challenges

The PSS-10 consists of 10 questions that ask about your feelings and thoughts during the last month, including how often you felt nervous, stressed, or unable to control important things in your life.`
  },
  {
      title: 'GAD-7 Anxiety Test',
      link: '/assesment-page/gad7',
      id: 'gad7',
      condition:"Anxiety",
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
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(null);
  const [testId, setTestId] = useState(null);
  const test = tests.find(t => t.id === slugs)

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}tests/getQuestions/${test.condition}`);
        setQuestions(response.data.questions);
        // console.log(response.data.questions);
        setTestId(response.data.questions[0].testId);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    if (test) fetchQuestions();
  }, []);

  const handleAnswerChange = (questionId, selectedChoiceIndex) => {
    setAnswers({
      ...answers,
      [questionId]: selectedChoiceIndex,
    });
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        email:"sahilgagan227@gmail.com" , // replace with actual user ID
        testId: testId,
        answers: Object.keys(answers).map((questionId) => ({
          questionId,
          selectedChoiceIndex: answers[questionId],
        })),
      };

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}tests/submitTest`, payload);
      setTotalScore(response.data.totalScore);
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };


return (
   <Container maxWidth="lg">
      <div className="flex p-6 items-center">
        <div className="mr" onClick={() => router.back()}>
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
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold ">{test.title}</h1>
      </div>

      <div className="p-4 max-w-md mx-auto">
        <h2 className="font-semibold mb-4 text-primary-orange">
          Please select the answer that is applicable to you
        </h2>

        {questions?.map((question, index) => (
          <div className="mb-6" key={question._id}>
            <p className="mb-2">{index + 1}. {question.questionText}</p>
            <div className="ml-4">
              {question.choices.map((choice, choiceIndex) => (
                <label className="flex items-center mb-2" key={choiceIndex}>
                  <input
                    type="radio"
                    name={`question-${question._id}`}
                    className="form-radio text-primary"
                    onChange={() => handleAnswerChange(question._id, choiceIndex)}
                  />
                  <span className="ml-2">{choice}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-center mb-6">
          <button
            onClick={handleSubmit}
            className="bg-primary-orange text-white py-3 px-14 rounded-lg font-semibold"
          >
            SUBMIT
          </button>
        </div>

        {totalScore !== null && (
          <div className="text-center mt-6">
            <h2 className="text-lg font-bold text-primary">Your Total Score: {totalScore}</h2>
          </div>
        )}
      </div>
    </Container>
)
}

export default Test