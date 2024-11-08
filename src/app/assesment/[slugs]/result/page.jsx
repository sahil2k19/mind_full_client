"use client";

import RequestAppointment from '@/app/clinicLocation/[city]/RequestAppointment';
import { Container } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import React from 'react';

// Define score ranges, messages, and emojis for each test type
const resultMessages = {
    Depression: [
        { range: [0, 4], label: "Minimal Depression", message: "You're experiencing minimal symptoms of depression. Continue to take care of your mental health.", emoji: "😊" },
        { range: [5, 9], label: "Mild Depression", message: "You may be experiencing mild depressive symptoms. Consider reaching out to a mental health professional for support.", emoji: "🙂" },
        { range: [10, 14], label: "Moderate Depression", message: "Your responses indicate moderate depression. It's advisable to seek professional guidance.", emoji: "😐" },
        { range: [15, 19], label: "Moderately Severe Depression", message: "You may be dealing with moderately severe depression. Please consult a mental health specialist.", emoji: "😟" },
        { range: [20, 27], label: "Severe Depression", message: "Your results suggest severe depression. It's important to seek immediate professional help.", emoji: "😢" }
    ],
    Anxiety: [
        { range: [0, 4], label: "Minimal Anxiety", message: "You're experiencing minimal anxiety symptoms. Keep maintaining your mental well-being.", emoji: "😊" },
        { range: [5, 9], label: "Mild Anxiety", message: "You may be feeling mildly anxious. Consider practices like meditation or consulting a professional.", emoji: "🙂" },
        { range: [10, 14], label: "Moderate Anxiety", message: "Your responses indicate moderate anxiety. It may be beneficial to seek support from a mental health professional.", emoji: "😐" },
        { range: [15, 21], label: "Severe Anxiety", message: "You may be experiencing severe anxiety. It's important to reach out to a mental health specialist promptly.", emoji: "😟" }
    ],
    Stress: [
        { range: [0, 13], label: "Low Stress", message: "You're experiencing low levels of stress. Continue your current practices to maintain balance.", emoji: "😊" },
        { range: [14, 26], label: "Moderate Stress", message: "You're currently managing moderate stress. Consider stress-reduction techniques or consulting a professional.", emoji: "😐" },
        { range: [27, 40], label: "High Stress", message: "You're experiencing high levels of stress. It's advisable to seek support from a mental health expert.", emoji: "😟" }
    ]
};

// Function to get the message based on score and test type, including the emoji
const getMessageForScore = (score, testType) => {
    const messages = resultMessages[testType];
    if (!messages) return { label: "Unknown", message: "No message available for this score.", emoji: "🤔" };

    for (let i = 0; i < messages.length; i++) {
        const { range, label, message, emoji } = messages[i];
        if (score >= range[0] && score <= range[1]) {
            return { label, message, emoji };
        }
    }
    return { label: "Unknown", message: "No message available for this score.", emoji: "🤔" };
};

const Result = () => {
    const searchParams = useSearchParams();
    const score = parseInt(searchParams.get('score'), 10);
    const testType = searchParams.get('test');

    // Get the appropriate label, message, and emoji based on the score and test type
    const { label, message, emoji } = getMessageForScore(score, testType);

    return (
        <Container maxWidth="lg">
            <div>
                <div className='mt-8 flex justify-center'>
                    <span className="text-6xl bounce">{emoji}</span> {/* Display the moving emoji */}
                </div>
                <div className="items-center p-4 gap-4">

                    <div className="text-center">
                        <p className="text-primary-orange mt-4 font-semibold mb-4">Your score is</p>
                        <p className="text-6xl font-bold">{score}</p>
                        <div className="p-2 rounded-lg mt-2 mb-5">
                            <h1 className="font-semibold mb-1 text-lg text-gray-700">{label}</h1>
                            <p className='text-sm'>{message}</p>
                        </div>
                    </div>
                    <div className='flex justify-center flex-col items-center gap-4 mb-4'>
                        <p className="font-semibold">Get a detailed report</p>
                        <input type="text" placeholder="Enter your WhatsApp Number" className="border-2 border-orange-400 outline-none p-2 rounded-lg px-6 text-center" />
                    </div>
                    <div className='flex justify-center mb-6'>
                        <button className="bg-primary-orange text-white font-semibold w-[75%] md:w-1/3 rounded-lg py-3">GET OTP</button>
                    </div>
                    <div className='flex justify-center flex-col items-center px-4 mb-3 '>
                        <p className="text-center text-sm text-muted-foreground mb-4">You&apos;ll receive a message on WhatsApp shortly. If you haven&apos;t received it yet, <a href="#" className="font-bold underline text-blue-800">click here</a></p>
                        <hr/>
                        <div className=''>
                            <RequestAppointment name={"BOOK A CONSULTATION"} />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Result;
