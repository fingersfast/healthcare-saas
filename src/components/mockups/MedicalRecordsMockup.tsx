"use client";

import React from "react";

export default function MedicalRecordsMockup() {
  return (
    <div className="w-full h-full bg-gray-50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Medical Records</h1>
          <p className="text-sm text-gray-500">Patient: John Doe (ID: P001)</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-gray-700 px-4 py-2 rounded-lg flex items-center border border-gray-300">
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export
          </button>
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
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Edit Record
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                Medical History
              </h2>
            </div>
            <div className="p-4">
              <div className="space-y-6">
                {[
                  {
                    date: "2023-06-15",
                    title: "Annual Check-up",
                    doctor: "Dr. Sarah Johnson",
                    notes:
                      "Patient is in good health. Blood pressure and heart rate are normal. Recommended regular exercise and balanced diet.",
                    attachments: ["Blood Test Results", "ECG Report"],
                  },
                  {
                    date: "2023-03-10",
                    title: "Follow-up Consultation",
                    doctor: "Dr. Michael Chen",
                    notes:
                      "Follow-up for previous treatment. Patient reports improvement in symptoms. Prescribed continuation of current medication.",
                    attachments: ["Prescription"],
                  },
                  {
                    date: "2023-01-05",
                    title: "Initial Consultation",
                    doctor: "Dr. Emily Rodriguez",
                    notes:
                      "First visit. Patient reported symptoms of fatigue and mild fever. Initial diagnosis suggests viral infection.",
                    attachments: ["Lab Results", "Prescription"],
                  },
                ].map((record, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">
                        {record.title}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {record.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Doctor: {record.doctor}
                    </p>
                    <p className="mt-2 text-gray-700">{record.notes}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {record.attachments.map((attachment, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          <svg
                            className="mr-1.5 h-2 w-2 text-blue-400"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          {attachment}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                Patient Info
              </h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Age
                  </label>
                  <p className="mt-1 text-sm text-gray-900">45</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Gender
                  </label>
                  <p className="mt-1 text-sm text-gray-900">Male</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Blood Type
                  </label>
                  <p className="mt-1 text-sm text-gray-900">O+</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Allergies
                  </label>
                  <p className="mt-1 text-sm text-gray-900">Penicillin</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                Current Medications
              </h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {[
                  {
                    name: "Lisinopril",
                    dosage: "10mg",
                    frequency: "Once daily",
                  },
                  {
                    name: "Metformin",
                    dosage: "500mg",
                    frequency: "Twice daily",
                  },
                ].map((medication, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {medication.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {medication.dosage}
                      </p>
                    </div>
                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {medication.frequency}
                    </span>
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
