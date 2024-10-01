"use client";

import React, { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    type: "text",
    patientName: "John Doe",
    doctor: "Dr. Smith",
    condition: "Anxiety and Stress",
    treatment: "Therapy for Anxiety & Stress",
    location: "Bangalore 1",
    title: "Therapy for Anxiety & Stress",
    shortQuote: `"I feel more balanced and equipped to face challenges."`,
    fullTestimonial: `"I feel more balanced and equipped to face challenges. The therapy sessions have provided me with valuable tools and insights that I use in my daily life. It's been a transformative experience, and I'm grateful for the support I've received."`,
  },
  {
    type: "video",
    patientName: "Jane Smith",
    doctor: "Dr. Williams",
    condition: "Depression",
    treatment: "Depression Management",
    location: "Bangalore 2",
    title: "Depression Management",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
  {
    type: "text",
    patientName: "Emily Johnson",
    doctor: "Dr. Smith",
    condition: "Stress",
    treatment: "Stress Relief Techniques",
    location: "New Delhi",
    title: "Stress Relief Techniques",
    shortQuote: `"These sessions have helped me find peace in chaos."`,
    fullTestimonial: `"These sessions have helped me find peace in chaos. I'm now able to handle stressful situations much more effectively. The techniques I've learned are easy to implement, and they work wonders in calming my mind."`,
  },
  {
    type: "video",
    patientName: "Michael Brown",
    doctor: "Dr. Williams",
    condition: "Low Self-Esteem",
    treatment: "Therapy for Self-Esteem Improvement",
    location: "Bangalore 1",
    title: "Improved Self-Esteem",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    type: "text",
    patientName: "Sarah Wilson",
    doctor: "Dr. Smith",
    condition: "Personal Growth",
    treatment: "Therapy for Personal Growth",
    location: "Bangalore 2",
    title: "Personal Growth Journey",
    shortQuote: `"This experience has helped me grow emotionally and mentally."`,
    fullTestimonial: `"This experience has helped me grow emotionally and mentally. I'm more aware of my thoughts and emotions, and I've gained tools to continuously improve myself. It's been a fulfilling journey."`,
  },
];

export default function TestimonialComponent() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullTestimonial, setShowFullTestimonial] = useState(false);
  const videoRef = useRef(null);
  const modalRef = useRef(null);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setShowFullTestimonial(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setShowFullTestimonial(false);
  };

  const { title, type, fullTestimonial, shortQuote, videoUrl } = testimonials[currentIndex];

  const truncatedTestimonial = fullTestimonial && fullTestimonial.length > 100
    ? fullTestimonial.substring(0, 50) + "..."
    : fullTestimonial;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsVideoModalOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsVideoModalOpen(false);
      }
    };

    const handlePopState = () => {
      setIsVideoModalOpen(false);
    };

    if (isVideoModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      window.history.pushState(null, null, window.location.href);
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isVideoModalOpen]);

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <div className="p-3 text-center bg-primary-div">
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
      </div>
      <div className="p-6 space-y-4">
        {type === "text" ? (
          <blockquote className="text-gray-600">
            <span className="text-lg italic mb-5">
              {showFullTestimonial ? fullTestimonial : truncatedTestimonial}
            </span>
            {!showFullTestimonial && fullTestimonial && (
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setShowFullTestimonial(true)}
              >
                Read More
              </button>
            )}
            {showFullTestimonial && fullTestimonial && (
              <button
                className="text-blue-500 ml-4 hover:underline"
                onClick={() => setShowFullTestimonial(false)}
              >
                Show Less
              </button>
            )}
          </blockquote>
        ) : (
          <div className="relative">
            <div className="relative aspect-video">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                src={videoUrl}
                muted
                loop
                playsInline
                preload="metadata"
              />
              <button
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <svg
                    className="w-8 h-8 text-gray-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm-0.445-10.832A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-between">
          <img
            onClick={prevTestimonial}
            className="text-white cursor-pointer"
            src="/icons/left arrow.svg"
            alt="Previous"
          />
          <img
            onClick={nextTestimonial}
            className="text-white cursor-pointer"
            src="/icons/right arrow.svg"
            alt="Next"
          />
        </div>
      </div>

      {isVideoModalOpen && type === "video" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div ref={modalRef} className="bg-white rounded-lg max-w-lg w-full">
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
              <div className="relative w-full h-0 pb-[177.78%]">
                <video ref={videoRef} controls className="absolute top-0 left-0 w-full h-full object-cover">
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
