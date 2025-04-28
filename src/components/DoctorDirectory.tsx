"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  availability: string;
  image: string;
  bio: string;
  availableSlots?: string[];
  online?: boolean;
  videoConsultation?: boolean;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15 years",
    availability: "Mon-Fri, 9AM-5PM",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Dr. Johnson is a board-certified cardiologist with extensive experience in treating heart conditions. She specializes in preventative cardiology and heart health management.",
    availableSlots: ["09:00", "10:30", "14:00", "15:30"],
    online: true,
    videoConsultation: true,
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Pediatrician",
    experience: "12 years",
    availability: "Mon-Thu, 10AM-6PM",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Dr. Chen is dedicated to providing comprehensive care for children of all ages. He focuses on developmental monitoring and preventative healthcare for kids.",
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Dermatologist",
    experience: "8 years",
    availability: "Tue-Sat, 9AM-5PM",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Dr. Rodriguez specializes in medical and cosmetic dermatology. She is passionate about helping patients with skin conditions and achieving healthy skin.",
  },
  {
    name: "Dr. David Kim",
    specialty: "Orthopedist",
    experience: "20 years",
    availability: "Mon-Fri, 8AM-4PM",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Dr. Kim is an experienced orthopedic surgeon specializing in sports medicine and joint replacement surgery. He focuses on minimally invasive techniques for faster recovery.",
  },
];

export default function DoctorDirectory() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showVideoConsultation, setShowVideoConsultation] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });
  const [chatMessages, setChatMessages] = useState<
    Array<{ sender: string; message: string; time: string }>
  >([]);
  const [newMessage, setNewMessage] = useState("");
  const [videoStatus, setVideoStatus] = useState<
    "connecting" | "connected" | "disconnected"
  >("disconnected");

  const handleBooking = () => {
    if (!selectedSlot) return;

    // Here you would typically make an API call to your backend
    console.log("Booking appointment with:", {
      doctor: selectedDoctor?.name,
      slot: selectedSlot,
      details: bookingDetails,
    });

    // Show success message
    alert(
      "Appointment booked successfully! You will receive a confirmation email shortly."
    );
    setSelectedDoctor(null);
    setShowBookingForm(false);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message = {
      sender: "You",
      message: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setChatMessages([...chatMessages, message]);
    setNewMessage("");

    // Simulate doctor's response after 1 second
    setTimeout(() => {
      const response = {
        sender: selectedDoctor?.name || "Doctor",
        message: "Thank you for your message. I'll get back to you shortly.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setChatMessages((prev) => [...prev, response]);
    }, 1000);
  };

  const startVideoConsultation = () => {
    setVideoStatus("connecting");
    // Simulate connection delay
    setTimeout(() => {
      setVideoStatus("connected");
    }, 2000);
  };

  return (
    <section id="doctors" className="py-16 bg-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-10">
          <svg width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern
                id="doctor-grid"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-blue-900"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#doctor-grid)" />
          </svg>
        </div>
        <div className="hidden xl:block absolute top-0 right-0 opacity-10">
          <svg width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern
                id="doctor-grid-right"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-blue-900"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#doctor-grid-right)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center justify-center px-4 py-1 mb-3 rounded-full text-sm font-semibold tracking-wide text-blue-600 bg-blue-100">
            Expert Healthcare Providers
          </span>
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Our Doctors
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Healthcare Professionals
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our team of experienced and caring doctors is dedicated to providing
            you with the highest quality healthcare services.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-60">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent z-10"></div>
                  <img
                    className="w-full h-full object-cover"
                    src={doctor.image}
                    alt={doctor.name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                    <h3 className="text-lg font-semibold text-white">
                      {doctor.name}
                    </h3>
                    <p className="text-sm font-medium text-blue-100">
                      {doctor.specialty}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-500">
                        <span className="font-medium text-gray-700">
                          Experience:
                        </span>{" "}
                        {doctor.experience}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-500">
                        <span className="font-medium text-gray-700">
                          Availability:
                        </span>{" "}
                        {doctor.availability}
                      </p>
                    </div>
                  </div>

                  <button
                    className="mt-5 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedDoctor(doctor);
                    }}
                  >
                    View Profile
                    <svg
                      className="ml-2 -mr-1 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Doctor profile modal */}
        {selectedDoctor && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={(e) => {
              // Only close if directly clicking the backdrop
              if (e.target === e.currentTarget) {
                setSelectedDoctor(null);
              }
            }}
          >
            {/* Blurred backdrop instead of gray overlay */}
            <div className="absolute inset-0 backdrop-blur-sm bg-white/30"></div>

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full mx-4 z-10"
              onClick={(e) => e.stopPropagation()} // Prevent clicks from closing modal
            >
              {/* Doctor image header */}
              <div className="relative h-44 w-full bg-gradient-to-r from-blue-500 to-blue-700">
                <div className="absolute inset-0 opacity-20">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 80 80"
                    fill="none"
                  >
                    <path
                      d="M0 8a8 8 0 018-8h64a8 8 0 018 8v64a8 8 0 01-8 8H8a8 8 0 01-8-8V8z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <div className="flex items-end">
                    <div className="h-24 w-24 rounded-full border-4 border-white overflow-hidden mr-4 shadow-lg">
                      <img
                        src={selectedDoctor.image}
                        alt={selectedDoctor.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">
                        {selectedDoctor.name}
                      </h3>
                      <p className="text-blue-100">
                        {selectedDoctor.specialty}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Close button */}
                <button
                  className="absolute top-4 right-4 text-white bg-black/20 rounded-full p-1 hover:bg-black/30 transition-colors"
                  onClick={() => setSelectedDoctor(null)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                {/* Bio */}
                <div className="mb-6">
                  <h4 className="text-sm uppercase text-gray-500 font-semibold mb-2">
                    About
                  </h4>
                  <p className="text-gray-700">{selectedDoctor.bio}</p>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-full text-blue-600 mr-3">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Experience</div>
                        <div className="font-medium">
                          {selectedDoctor.experience}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-full text-blue-600 mr-3">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">
                          Availability
                        </div>
                        <div className="font-medium">
                          {selectedDoctor.availability}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex space-x-4 mt-6">
                  <button
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
                    onClick={() => setShowBookingForm(true)}
                  >
                    Book Appointment
                  </button>
                  <button
                    className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                    onClick={() => setShowChat(true)}
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    Chat
                  </button>
                  {selectedDoctor?.videoConsultation && (
                    <button
                      className="flex items-center justify-center bg-green-100 hover:bg-green-200 text-green-700 py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                      onClick={() => setShowVideoConsultation(true)}
                    >
                      <svg
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Video Call
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Booking Form Modal */}
        {showBookingForm && selectedDoctor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Book Appointment with {selectedDoctor.name}
                </h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowBookingForm(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedDoctor.availableSlots?.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-2 rounded-md border ${
                          selectedSlot === slot
                            ? "bg-blue-100 border-blue-500 text-blue-700"
                            : "border-gray-300 hover:border-blue-300"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={bookingDetails.name}
                    onChange={(e) =>
                      setBookingDetails({
                        ...bookingDetails,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={bookingDetails.email}
                    onChange={(e) =>
                      setBookingDetails({
                        ...bookingDetails,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={bookingDetails.phone}
                    onChange={(e) =>
                      setBookingDetails({
                        ...bookingDetails,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reason for Visit
                  </label>
                  <textarea
                    value={bookingDetails.reason}
                    onChange={(e) =>
                      setBookingDetails({
                        ...bookingDetails,
                        reason: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    placeholder="Briefly describe the reason for your visit"
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setShowBookingForm(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md text-sm font-medium hover:from-blue-700 hover:to-blue-800 shadow-sm"
                    onClick={handleBooking}
                    disabled={
                      !selectedSlot ||
                      !bookingDetails.name ||
                      !bookingDetails.email
                    }
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Chat Modal */}
        {showChat && selectedDoctor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md h-[600px] flex flex-col"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={selectedDoctor.image}
                      alt={selectedDoctor.name}
                    />
                    {selectedDoctor.online && (
                      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-400 ring-2 ring-white"></span>
                    )}
                  </div>
                  <div className="ml-3">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {selectedDoctor.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {selectedDoctor.online ? "Online" : "Offline"}
                    </p>
                  </div>
                </div>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowChat(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.sender === "You" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.sender === "You"
                          ? "bg-blue-100 text-blue-900"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Type your message..."
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Video Consultation Modal */}
        {showVideoConsultation && selectedDoctor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white rounded-xl shadow-xl p-6 w-full max-w-4xl h-[600px] flex flex-col"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={selectedDoctor.image}
                      alt={selectedDoctor.name}
                    />
                    {selectedDoctor.online && (
                      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-400 ring-2 ring-white"></span>
                    )}
                  </div>
                  <div className="ml-3">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Video Consultation with {selectedDoctor.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {videoStatus === "connecting"
                        ? "Connecting..."
                        : videoStatus === "connected"
                        ? "Connected"
                        : "Disconnected"}
                    </p>
                  </div>
                </div>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    setShowVideoConsultation(false);
                    setVideoStatus("disconnected");
                  }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex-1 relative bg-gray-900 rounded-lg overflow-hidden">
                {videoStatus === "connecting" ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                ) : videoStatus === "connected" ? (
                  <div className="grid grid-cols-2 gap-4 h-full">
                    {/* Doctor's video */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gray-800 rounded-lg">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img
                            className="h-32 w-32 rounded-full"
                            src={selectedDoctor.image}
                            alt={selectedDoctor.name}
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                        {selectedDoctor.name}
                      </div>
                    </div>
                    {/* Patient's video */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gray-800 rounded-lg">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-32 w-32 rounded-full bg-blue-600 flex items-center justify-center">
                            <svg
                              className="h-16 w-16 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                        You
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={startVideoConsultation}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Start Video Consultation
                    </button>
                  </div>
                )}
              </div>

              {videoStatus === "connected" && (
                <div className="flex justify-center space-x-4 mt-4">
                  <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </button>
                  <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                  <button className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
