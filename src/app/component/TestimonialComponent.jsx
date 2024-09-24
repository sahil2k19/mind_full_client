"use client"

import React, { useState } from 'react'

export default function TestimonialComponent() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false)

  const fullTestimonial = `"I feel more balanced and equipped to face challenges. The therapy sessions have provided me with valuable tools and insights that I use in my daily life. It's been a transformative experience, and I'm grateful for the support I've received."`

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <div className="p-3 text-center bg-primary-div">
        <h2 className="text-lg font-medium text-gray-800">Therapy for Anxiety & Stress</h2>
      </div>
      <div className="p-6 space-y-4">
        <blockquote className="text-gray-600">
          <p className="text-lg italic">{`"I feel more balanced and equipped to face challenges."`}</p>
        </blockquote>
        <div 
          className="bg-yellow-300 rounded-lg p-4 aspect-video flex items-center justify-center cursor-pointer"
          onClick={() => setIsVideoModalOpen(true)}
        >
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <button 
          className="w-full bg-gray-100 text-orange-500 py-3 px-4 rounded-md hover:bg-gray-200 transition duration-300 font-medium"
          onClick={() => setIsTestimonialModalOpen(true)}
        >
          Read Full Testimonial
        </button>
      </div>

      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-medium">Testimonial Video</h3>
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
                <p>Video Player Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {isTestimonialModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-medium">Full Testimonial</h3>
              <button 
                onClick={() => setIsTestimonialModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <p className="text-gray-600">{fullTestimonial}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}