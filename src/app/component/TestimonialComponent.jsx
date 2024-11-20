"use client";

import React, { useState, useRef, useEffect } from "react";
import TestimonialComponents2 from "./TestimonialComponents2";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import axios from "axios";

export default function TestimonialComponent({ location, condition }) {
  const [testimonials, setTestimonials] = useState([]);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isQuoteModal, setisQuoteModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullTestimonial, setShowFullTestimonial] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [direction, setDirection] = useState(1); // To track the animation direction

  const variants = {
    enter: (direction) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
    exit: (direction) => ({
        x: direction > 0 ? -300 : 300,
        opacity: 0,
        transition: { duration: 0.5 },
    }),
};
  const modalRef = useRef(null);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}testimonials/search/testimonials?condition=${condition || ""}&location=${location || ""}`
      );
      setTestimonials(response.data || []);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, [condition, location]);

  const nextTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setShowFullTestimonial(false);
    }
  };

  useEffect(() => {
    if (testimonials.length > 0 && !isQuoteModal) {
      const interval = setInterval(() => {
        // nextTestimonial();
        setDirection(1); // Slide right

        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials, isQuoteModal]);

  const prevTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setShowFullTestimonial(false);
    }
  };

  const { title, type, fullTestimonial, shortQuote, videoUrl, patientName } =
    testimonials[currentIndex] || {};

  const truncatedTestimonial =
    fullTestimonial && fullTestimonial.length > 100
      ? fullTestimonial.substring(0, 380) + "..."
      : fullTestimonial;

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
      setShowVideoModal(false);
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

  const QuoteComponent = () => {
    if (!fullTestimonial) return null;
    return (
      <blockquote className="text-gray-600 mt-3">
        <div className="text-3xl text-gray-400 leading-none ml-3">
          <img
            className="h-[24px] scale-x-[1] scale-y-[-1]"
            src="/iconsNew/quote.svg"
            alt="Quote"
          />
        </div>
        <div className="px-5">
          <span className="text-gray-600 text-lg font-semibold md:hidden">
            {showFullTestimonial ? fullTestimonial : truncatedTestimonial}
          </span>
          <span className="text-gray-600 text-lg font-semibold hidden md:block">
            {fullTestimonial}
          </span>
        </div>
      </blockquote>
    );
  };

  if (testimonials.length === 0) {
    return <div>Loading testimonials...</div>;
  }

  return (
    <div className="mx-auto bg-white rounded-lg overflow-hidden  ">
      
      <motion.div
                    className="mx-auto max-w-md text-center"
                    key={testimonials[currentIndex]?._id}
                    custom={direction}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={variants}
                >
                <div className="p-3 text-center bg-primary-div">
        <h2 className="text-lg font-medium text-gray-800">{title || "No Title Available"}</h2>
      </div>
      <div className="space-y-4">
        {type === "text" ? (
          <QuoteComponent />
        ) : (
          <Dialog
            open={showVideoModal}
            onClose={() => setShowVideoModal(false)}
            PaperProps={{
              style: {
                borderRadius: "16px",
                overflow: "hidden",
              },
            }}
          >
            <DialogTitle className="text-gray-900 font-semibold bg-primary-div rounded-t-xl p-2">
              <span className="text-lg px-5 max-w-[405px] truncate">{title}</span>
              <IconButton onClick={() => setShowVideoModal(false)}>
                <img className="w-[30px]" src="/iconsNew/close.svg" alt="Close" />
              </IconButton>
            </DialogTitle>
            <DialogContent className="h-full flex justify-center items-center p-0 bg-black">
              <TestimonialComponents2 currentVideo={videoUrl} />
            </DialogContent>
          </Dialog>
        )}
        {/* prev next buttons */}
        <div className="flex justify-between items-center px-4 pb-6">
          <img
            onClick={prevTestimonial}
            className="text-white cursor-pointer"
            src="/icons/left arrow.svg"
            alt="Previous"
          />
          {fullTestimonial && (
            <button
              onClick={() => setisQuoteModal(true)}
              className="px-3 py-2 rounded-xl underline text-orange-500 font-semibold"
            >
              {showFullTestimonial ? "Show Less" : "Read More"}
            </button>
          )}
          <img
            onClick={nextTestimonial}
            className="text-white cursor-pointer"
            src="/icons/right arrow.svg"
            alt="Next"
          />
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
      </div>
      </motion.div>
    </div>
  );
}
