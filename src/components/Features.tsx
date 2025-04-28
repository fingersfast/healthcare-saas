"use client";

import { motion } from "framer-motion";

const features = [
  {
    name: "Registration",
    description:
      "Streamlined patient registration process with digital forms and document upload capabilities.",
    icon: (
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
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
        />
      </svg>
    ),
  },
  {
    name: "Appointment",
    description:
      "Smart scheduling system with automated reminders and calendar integration.",
    icon: (
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
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Patient Records",
    description:
      "Comprehensive electronic health records with secure access and real-time updates.",
    icon: (
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    name: "Follow-up",
    description:
      "Automated follow-up scheduling and patient engagement tools for better care continuity.",
    icon: (
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
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Doctor Directory",
    description:
      "Comprehensive directory of healthcare providers with specialties and availability.",
    icon: (
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    name: "Admin Dashboard",
    description:
      "Powerful analytics and management tools for efficient clinic operations.",
    icon: (
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
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <div
      id="features"
      className="relative bg-gradient-to-b from-white to-blue-50 py-20 sm:py-28"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 flex justify-center overflow-hidden">
        <div className="flex">
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-400/20 to-blue-300/20 rounded-full blur-3xl right-1/3 -top-32"></div>
          <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-full blur-3xl -top-16 -right-32"></div>
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
            Powerful Features
          </span>
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your practice
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our comprehensive platform provides all the tools healthcare
            professionals need to streamline operations and improve patient
            care.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-3 text-base text-gray-500">
                  {feature.description}
                </p>
                <div className="absolute top-0 right-0 -mt-2 -mr-2 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    className="h-4 w-4 text-blue-600"
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 sm:p-12">
              <span className="inline-flex items-center justify-center px-3 py-0.5 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                Enterprise-Grade
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-gray-900 tracking-tight">
                Built for healthcare organizations of all sizes
              </h3>
              <p className="mt-4 text-lg text-gray-500">
                From small practices to large hospitals, our platform scales to
                meet your needs. Get started quickly and expand as your
                organization grows.
              </p>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Schedule a demo
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 sm:p-12 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 max-w-md">
                {[
                  "Multi-location support",
                  "Role-based access",
                  "Advanced reporting",
                  "Custom workflows",
                  "API integrations",
                  "Priority support",
                  "HIPAA compliance",
                  "Audit logs",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 text-blue-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,229.3C384,235,480,277,576,282.7C672,288,768,256,864,224C960,192,1056,160,1152,170.7C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
