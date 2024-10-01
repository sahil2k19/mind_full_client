"use client"
import React, { useState } from "react";

const Testimonials = () => {
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

  // State for the filter values
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // Extract unique values for filters
  const doctors = [...new Set(testimonials.map((t) => t.doctor))];
  const conditions = [...new Set(testimonials.map((t) => t.condition))];
  const treatments = [...new Set(testimonials.map((t) => t.treatment))];
  const locations = [...new Set(testimonials.map((t) => t.location))];

  // Filter testimonials based on selected values
  const filteredTestimonials = testimonials.filter((testimonial) => {
    return (
      (selectedDoctor === "" || testimonial.doctor === selectedDoctor) &&
      (selectedCondition === "" || testimonial.condition === selectedCondition) &&
      (selectedTreatment === "" || testimonial.treatment === selectedTreatment) &&
      (selectedLocation === "" || testimonial.location === selectedLocation)
    );
  });

  return (
    <div className="p-8">
      <h2 className="text-3xl text-primary-orange font-bold text-center mb-6">
        Testimonials
      </h2>

      {/* Filter Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Doctor
          </label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">All Doctors</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Condition
          </label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
            value={selectedCondition}
            onChange={(e) => setSelectedCondition(e.target.value)}
          >
            <option value="">All Conditions</option>
            {conditions.map((condition, index) => (
              <option key={index} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Treatment
          </label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
            value={selectedTreatment}
            onChange={(e) => setSelectedTreatment(e.target.value)}
          >
            <option value="">All Treatments</option>
            {treatments.map((treatment, index) => (
              <option key={index} value={treatment}>
                {treatment}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Location
          </label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Testimonials Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-primary-div flex flex-col justify-between rounded-lg shadow-lg overflow-hidden p-6"
          >
            <div>
              <h3 className="text-xl text-primary-orange font-semibold mb-4">
                {testimonial.title}
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Patient Name:</strong> {testimonial.patientName}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Doctor:</strong> {testimonial.doctor}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Condition:</strong> {testimonial.condition}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Treatment:</strong> {testimonial.treatment}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Location:</strong> {testimonial.location}
              </p>

              {/* Render either the full testimonial text or video based on the type */}
              {testimonial.type === "text" ? (
                <>
                  <p className="italic mb-4">{testimonial.shortQuote}</p>
                  <p className="text-gray-700 mb-4">
                    {testimonial.fullTestimonial}
                  </p>
                </>
              ) : (
                <video
                  controls
                  className="w-full h-48 rounded-lg object-cover"
                  src={testimonial.videoUrl}
                ></video>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
