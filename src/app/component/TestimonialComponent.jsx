"use client";

import React, { useState, useRef, useEffect } from "react";
import TestimonialComponents2 from "./TestimonialComponents2";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";

const testimonials = [
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
    patientName: "Emily Johnson",
    doctor: "Dr. Smith",
    condition: "Stress",
    treatment: "Stress Relief Techniques",
    location: "New Delhi",
    title: "Stress Relief Techniques",
    shortQuote: `These sessions have helped me find peace in chaos."`,
    fullTestimonial: `These sessions have helped me find peace in chaos. I'm now able to handle stressful situations much more effectively. The techniques I've learned are easy to implement, and they work wonders in calming my mind."`,
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
        setisQuoteModal(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsVideoModalOpen(false);
        setisQuoteModal(false);
      }
    };

    const handlePopState = () => {
      setShowVideoModal(false); // Close modal on back press
      setisQuoteModal(false);
    };

    if (isVideoModalOpen || showVideoModal || isQuoteModal) {
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
  }, [isVideoModalOpen, showVideoModal, isQuoteModal]);
// quote 
  const QuoteComponent = ()=>{
    return (
      <blockquote className="text-gray-600 mt-3">
      <div className="text-3xl text-gray-400 leading-none ml-3"><img className="h-[32px]" src="/iconsNew/quote1.png" /></div>
      <div className=" px-5">
        <span className="text-gray-600 text-lg font-semibold md:hidden">
          {showFullTestimonial ? fullTestimonial : truncatedTestimonial}
        </span>
        <span className="text-gray-600 text-lg font-semibold hidden md:block">
        {fullTestimonial}
        </span>
      
      </div>
    </blockquote>
    )
  }

  return (
    <div className=" mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <div className="p-3 text-center bg-primary-div">
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
      </div>
      <div className="space-y-4 ">
        {type === "text" ? (
        <>
        {/* <div>
            <img className="h-[184.5px] object-cover w-full" src="https://placehold.co/1920x1080" />
          </div> */}
         <QuoteComponent />
        </>
        ) : (
          <>
            {/* <div className="relative" onClick={() => setShowVideoModal(true)}>
              <div
                // onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center text-white"
              >
                <img className="h-[66px]" src="/iconsNew/newplay.svg" />
              </div>
             <div className="md:flex justify-center">
             <video
                className="w-full  h-[184.5px] object-cover md:px-11 md:w-[700px]  md:rounded-lg"
                src={videoUrl}
              />
             </div>
            </div> */}
            <Dialog
              open={showVideoModal}
              onClose={() => setShowVideoModal(false)}
              className="m-0"
              PaperProps={{
            style: {
              borderRadius: '16px',  // Set the dialog corners to be 30px rounded
              overflow: 'hidden' // Ensure content doesn't overflow the edges
            }
          }}
          BackdropProps={{
            style: {
              // borderRadius: '16px' // Ensures backdrop follows the same rounding 
            }
          }}
            >
              <DialogTitle
                className="text-gray-900 font-semibold bg-primary-div rounded-t-xl p-2"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <span className="text-lg px-5 max-w-[405px] truncate">{title}</span>
                <IconButton onClick={() => setShowVideoModal(false)}>
                <img className="w-[30px]" src="/iconsNew/close.svg"/>
                </IconButton>
              </DialogTitle>
              <DialogContent className="h-full flex justify-center items-center p-0 bg-black">
                <TestimonialComponents2 currentVideo={videoUrl} />
              </DialogContent>
            </Dialog>
         {fullTestimonial &&   <QuoteComponent />}
          </>
        )}


        {/* patient name */}
        <div className="flex justify-between items-center px-3">
          <div className="flex px-3">
            <div className="w-1 h-10 bg-primary-orange mr-3"></div>
            <div>
              <p className="text-lg font-semibold text-gray-700">{patientName}</p>
              <p className="text-[12px] text-gray-500">Review on Google</p>
            </div>
          </div>
         
        </div>
        {/* treatment section */}
        <div className="px-3 ">
         <div className="mb-5">
            <h3 className="text-xl font-semibold text-gray-900">Treatment: </h3>
            <div className="mt-3 flex  gap-3">
              <div className="px-3 py-2 bg-green-100 text-green-800 rounded-full">
                  <span className="text-sm">   Therapy</span>
              </div>
              <div className="px-3 py-2 bg-green-100 text-green-800 rounded-full">
              <span className="text-sm">   TMS</span>
              </div>
            </div>
         </div>
         <div className="">
            <h3 className="text-xl font-semibold text-gray-900">Conditions: </h3>
            <div className="mt-3 flex  gap-3">
              <div className="px-3 py-2 bg-green-100 text-green-800 rounded-full">
                  <span className="text-sm">   Depresion</span>
              </div>
              <div className="px-3 py-2 bg-green-100 text-green-800 rounded-full">
              <span className="text-sm">   Stress</span>
              </div>
            </div>
         </div>
        </div>

        <Dialog
          open={isQuoteModal}
          onClose={() => setisQuoteModal(false)}
          PaperProps={{
            style: {
              borderRadius: '16px',  // Set the dialog corners to be 30px rounded
              overflow: 'hidden' // Ensure content doesn't overflow the edges
            }
          }}
          BackdropProps={{
            style: {
              // borderRadius: '16px' // Ensures backdrop follows the same rounding 
            }
          }}
          className="m-0"
        >
          <DialogTitle
            className="text-gray-800 font-semibold bg-primary-div text-lg rounded-t-xl p-2"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <span className="px-8 max-w-[405px] truncate">{title}</span>
            <IconButton onClick={() => setisQuoteModal(false)}>
            <img className="w-[30px]" src="/iconsNew/close.svg"/>
            </IconButton>
          </DialogTitle>
          <DialogContent className="px-0">
              <div className="text-3xl text-gray-400 mt-3 px-2">
                <img className="h-[32px]" src="/iconsNew/quote1.png" />
              </div>
        <div className="px-4">
        <blockquote className="text-gray-600 mb-6 mt-3">
              <div>
                <span className="text-gray-600 text-lg font-semibold">
                  {fullTestimonial}
                </span>
              </div>
            </blockquote>
            <div className="flex">
              <div className="w-1 h-10 bg-primary-orange mr-3"></div>
              <div>
                <p className="text-lg font-semibold text-gray-700">{patientName}</p>
                <p className="text-[12px] text-gray-500">Review on Google</p>
              </div>
            </div>
        </div>
          </DialogContent>
        </Dialog>


        {/* prev next button */}
        <div className="flex justify-between items-center px-4 pb-6">
          <img
            onClick={prevTestimonial}
            className="text-white cursor-pointer"
            src="/icons/left arrow.svg"
            alt="Previous"
          />
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
              className="px-3 py-2 rounded-xl underline text-orange-500 font-semibold">
              {showFullTestimonial ? "Show Less" : "Read More"}</button>}
          </div>
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
