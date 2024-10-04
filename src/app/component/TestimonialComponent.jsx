"use client";

import React, { useState, useRef, useEffect } from "react";
import TestimonialComponents2 from "./TestimonialComponents2";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";

const testimonials = [
  {
    type: "text",
    patientName: "John Doe",
    doctor: "Dr. Smith",
    condition: "Anxiety and Stress",
    treatment: "Therapy for Anxiety & Stress",
    location: "Bangalore 1",
    title: "Therapy for Anxiety & Stress",
    shortQuote: `I feel more balanced and equipped to face challenges."`,
    fullTestimonial: `I feel more balanced and equipped to face challenges. The therapy sessions have provided me with valuable tools and insights that I use in my daily life. It's been a transformative experience, and I'm grateful for the support I've received."`,
  },
  {
    type: "video",
    patientName: "Jane Smith",
    doctor: "Dr. Williams",
    condition: "Depression",
    treatment: "Depression Management",
    location: "Bangalore 2",
    title: "Depression Management",
    // fullTestimonial: `"These sessions have helped me find peace in chaos. I'm now able to handle stressful situations much more effectively. The techniques I've learned are easy to implement, and they work wonders in calming my mind."`,
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
    shortQuote: `These sessions have helped me find peace in chaos."`,
    fullTestimonial: `These sessions have helped me find peace in chaos. I'm now able to handle stressful situations much more effectively. The techniques I've learned are easy to implement, and they work wonders in calming my mind."`,
  },
  {
    type: "video",
    patientName: "Michael Brown",
    doctor: "Dr. Williams",
    condition: "Low Self-Esteem",
    treatment: "Therapy for Self-Esteem Improvement",
    location: "Bangalore 1",
    title: "Improved Self-Esteem",
    fullTestimonial: `These sessions have helped me find peace in chaos. I'm now able to handle stressful situations much more effectively. The techniques I've learned are easy to implement, and they work wonders in calming my mind."`,
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
    shortQuote: `This experience has helped me grow emotionally and mentally."`,
    fullTestimonial: `This experience has helped me grow emotionally and mentally. I'm more aware of my thoughts and emotions, and I've gained tools to continuously improve myself. It's been a fulfilling journey."`,
  },
];

export default function TestimonialComponent() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isQuoteModal, setisQuoteModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullTestimonial, setShowFullTestimonial] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const modalRef = useRef(null);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setShowFullTestimonial(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setShowFullTestimonial(false);
  };

  const { title, type, fullTestimonial, shortQuote, videoUrl, patientName } =
    testimonials[currentIndex];

  const truncatedTestimonial =
    fullTestimonial && fullTestimonial.length > 100
      ? fullTestimonial.substring(0, 80) + "..."
      : fullTestimonial;

  // Handle closing modal on popstate
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
      setShowVideoModal(false); // Close modal on back press
    };

    if (isVideoModalOpen || showVideoModal) {
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
  }, [isVideoModalOpen, showVideoModal]);

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <div className="p-3 text-center bg-primary-div">
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
      </div>
      <div className="space-y-4 mt-5">
        {type === "text" ? (
          <blockquote className="text-gray-600">
            <span className="text-3xl text-gray-400 leading-none"><img className="h-[32px]" src="/iconsNew/quote2.svg" /></span>
            <div>
              <span className="text-gray-600 text-lg font-semibold">
                {showFullTestimonial ? fullTestimonial : truncatedTestimonial}
              </span>
              {/* {!showFullTestimonial && fullTestimonial && (
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
            )} */}
            </div>
          </blockquote>
        ) : (
          <>
            <div className="relative" onClick={() => setShowVideoModal(true)}>
              <div
                // onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center text-white"
              >
                <img className="h-[66px]" src="/iconsNew/newplay.svg" />
              </div>
              <video
                className="w-full h-[350px] object-cover"
                src={videoUrl}
              />
            </div>
            <Dialog
              open={showVideoModal}
              onClose={() => setShowVideoModal(false)}
              className="m-0"
            >
              <DialogTitle
                className="text-gray-900 font-semibold bg-primary-div rounded-t-xl p-4"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <span>{title}</span>
                <IconButton onClick={() => setShowVideoModal(false)}>
                  X
                </IconButton>
              </DialogTitle>
              <DialogContent className="h-full flex justify-center items-center p-0 bg-black">
                <TestimonialComponents2 currentVideo={videoUrl} />
              </DialogContent>
            </Dialog>
            <blockquote className="text-gray-600 mb-6">
              <span className="text-3xl text-gray-400 leading-none"><img className="h-[32px]" src="/iconsNew/quote2.svg" /></span>
              <div>
                <span className="text-gray-600 text-lg font-semibold">
                  {showFullTestimonial ? fullTestimonial : truncatedTestimonial}
                </span>

              </div>
            </blockquote>
          </>
        )}


        {/* patient name */}
        <div className="flex justify-between items-center">
          <div className="flex ">
            <div className="w-1 h-10 bg-primary-orange mr-3"></div>
            <div>
              <p className="text-lg font-semibold text-gray-700">{patientName}</p>
              <p className="text-[12px] text-gray-500">Review on Google</p>
            </div>
          </div>
          <div>
            {fullTestimonial && <button
              // onClick={() => {
              //   if (!showFullTestimonial && fullTestimonial) {
              //     setShowFullTestimonial(true)
              //   } else {
              //     setShowFullTestimonial(false)
              //   }
              // }} 
              onClick={() => setisQuoteModal(true)}
              className="px-3 py-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-200 rounded-xl text-orange-500 font-semibold">
              {showFullTestimonial ? "Show Less" : "Read More"}</button>}
          </div>
        </div>

        <Dialog open={isQuoteModal} className="m-0" onClose={() => { setisQuoteModal(false) }}>
          <DialogTitle
            className="text-gray-900 font-semibold bg-primary-div rounded-t-xl p-4"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <span>{title}</span>
            <IconButton onClick={() => setisQuoteModal(false)}>
              X
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <blockquote className="text-gray-600 mb-6">
              <span className="text-3xl text-gray-400 leading-none"><img className="h-[32px]" src="/iconsNew/quote2.svg" /></span>
              <div>
                <span className="text-gray-600 text-lg font-semibold">
                  {fullTestimonial}
                </span>

              </div>
            </blockquote>
            <div className="flex ">
              <div className="w-1 h-10 bg-primary-orange mr-3"></div>
              <div>
                <p className="text-lg font-semibold text-gray-700">{patientName}</p>
                <p className="text-[12px] text-gray-500">Review on Google</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* prev next button */}
        <div className="flex justify-between px-2 pb-6">
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
            <div className="flex justify-between bg-primary-div items-center p-4 border-b">
              <h3 className="text-lg font-medium">{title}</h3>
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
