"use client"
import React, { useState } from 'react';
const EditTestimonial = () => {
  // Initial state for form fields
  const [formData, setFormData] = useState({
    title: "Therapy for Anxiety & Stress",
    shortQuote: `"I feel more balanced and equipped to face challenges."`,
    fullTestimonial: `"I feel more balanced and equipped to face challenges. The therapy sessions have provided me with valuable tools and insights that I use in my daily life. It's been a transformative experience, and I'm grateful for the support I've received."`,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    doctor: "",
    location: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Edit Testimonial</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Short Quote */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortQuote">Short Quote</label>
          <input
            type="text"
            name="shortQuote"
            value={formData.shortQuote}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Full Testimonial */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullTestimonial">Full Testimonial</label>
          <textarea
            name="fullTestimonial"
            rows="4"
            value={formData.fullTestimonial}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Video */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Video</label>
          <video controls className="w-full h-auto rounded-md shadow-md mb-4">
            <source src={formData.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <input
            type="text"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Video URL"
          />
        </div>

        {/* Doctor Dropdown */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doctor">Doctor</label>
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. John">Dr. John</option>
            <option value="Dr. Maria">Dr. Maria</option>
          </select>
        </div>

        {/* Location Dropdown */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Location</option>
            <option value="Bangalore 1">Bangalore 1</option>
            <option value="Bangalore 2">Bangalore 2</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-primary-orange font-semibold text-white p-3 rounded-md hover:bg-orange-700 transition-colors duration-200"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTestimonial;
