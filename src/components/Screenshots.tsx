"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import DashboardMockup from "./mockups/DashboardMockup";
import PatientManagementMockup from "./mockups/PatientManagementMockup";
import AppointmentSchedulingMockup from "./mockups/AppointmentSchedulingMockup";
import MedicalRecordsMockup from "./mockups/MedicalRecordsMockup";

const screenshots = [
  {
    title: "Dashboard Overview",
    description: "Comprehensive analytics and key metrics at a glance",
    component: DashboardMockup,
    alt: "Healthcare SaaS Dashboard showing analytics and metrics",
  },
  {
    title: "Patient Management",
    description: "Efficient patient records and appointment management",
    component: PatientManagementMockup,
    alt: "Patient management interface with records and appointments",
  },
  {
    title: "Appointment Scheduling",
    description: "Intuitive calendar and scheduling system",
    component: AppointmentSchedulingMockup,
    alt: "Appointment scheduling calendar interface",
  },
  {
    title: "Medical Records",
    description: "Secure and organized patient medical history",
    component: MedicalRecordsMockup,
    alt: "Electronic health records interface",
  },
];

export default function Screenshots() {
  const [selectedScreenshot, setSelectedScreenshot] = useState<number | null>(
    null
  );

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Platform Preview
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            See Our Solution in Action
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Take a look at our intuitive and powerful healthcare management
            platform
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {screenshots.map((screenshot, index) => {
            const Component = screenshot.component;
            return (
              <motion.div
                key={screenshot.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative h-64 bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-full h-full">
                    <Component />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold text-white">
                      {screenshot.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-200">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal for enlarged view */}
        {selectedScreenshot !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            onClick={() => setSelectedScreenshot(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                onClick={() => setSelectedScreenshot(null)}
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
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                {(() => {
                  const Component = screenshots[selectedScreenshot].component;
                  return <Component />;
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
