"use client";

import React from "react";

export default function AppointmentSchedulingMockup() {
  return (
    <div className="w-full h-full bg-gray-50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Appointment Scheduling
          </h1>
          <p className="text-sm text-gray-500">
            Manage and schedule patient appointments
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          New Appointment
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Calendar</h2>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-600 hover:text-gray-900">
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <span className="text-sm font-medium text-gray-900">
                    June 2023
                  </span>
                  <button className="p-2 text-gray-600 hover:text-gray-900">
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-7 gap-1">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-sm font-medium text-gray-500 py-2"
                    >
                      {day}
                    </div>
                  )
                )}
                {Array.from({ length: 35 }).map((_, i) => {
                  const day = i + 1;
                  const isToday = day === 15;
                  const hasAppointment = [5, 12, 15, 23, 28].includes(day);
                  return (
                    <div
                      key={i}
                      className={`relative p-2 text-center ${
                        isToday
                          ? "bg-blue-100 text-blue-600 font-semibold rounded-lg"
                          : "text-gray-900"
                      }`}
                    >
                      <span>{day}</span>
                      {hasAppointment && (
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                Today's Schedule
              </h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {[
                  {
                    time: "09:00 AM",
                    patient: "John Doe",
                    type: "Check-up",
                    duration: "30 min",
                  },
                  {
                    time: "10:30 AM",
                    patient: "Jane Smith",
                    type: "Follow-up",
                    duration: "45 min",
                  },
                  {
                    time: "02:00 PM",
                    patient: "Mike Johnson",
                    type: "Consultation",
                    duration: "60 min",
                  },
                  {
                    time: "04:15 PM",
                    patient: "Sarah Williams",
                    type: "New Patient",
                    duration: "45 min",
                  },
                ].map((appointment, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-shrink-0 w-16">
                      <p className="text-sm font-medium text-gray-900">
                        {appointment.time}
                      </p>
                      <p className="text-xs text-gray-500">
                        {appointment.duration}
                      </p>
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {appointment.patient}
                      </p>
                      <p className="text-xs text-blue-600 bg-blue-100 inline-block px-2 py-1 rounded mt-1">
                        {appointment.type}
                      </p>
                    </div>
                    <div className="ml-4">
                      <button className="text-gray-400 hover:text-gray-500">
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
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
