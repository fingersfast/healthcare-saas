"use client";

import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Streamlined Operations",
      description:
        "Automate routine tasks and reduce administrative burden, allowing your staff to focus on patient care.",
    },
    {
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Enhanced Security",
      description:
        "HIPAA-compliant platform ensuring your patient data is secure and protected at all times.",
    },
    {
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
      title: "Patient-Centric Design",
      description:
        "Focus on improving patient satisfaction with streamlined appointments, reminders, and access to medical records.",
    },
    {
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
      title: "Data-Driven Insights",
      description:
        "Powerful analytics to track performance, identify trends, and make informed decisions for your practice.",
    },
  ];

  return (
    <div
      id="about"
      className="relative bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20">
          <svg
            viewBox="0 0 1208 1024"
            className="w-[75rem] h-[64rem]"
            aria-hidden="true"
          >
            <path
              fill="url(#a-about)"
              d="M121.6 289.3 403.9.7l284.4 288.6-284.3 287.7z"
            />
            <path
              fill="url(#b-about)"
              d="m520.1 578.6 284.4-288.6 284.3 288.6-284.3 287.7z"
            />
            <path
              fill="url(#c-about)"
              d="m922.2 868 284.4-288.7 284.2 288.7-284.2 287.7z"
            />
            <defs>
              <linearGradient
                id="a-about"
                x1="0"
                x2="1"
                y1="0"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#3b82f6" />
                <stop offset="1" stopColor="#1e40af" />
              </linearGradient>
              <linearGradient
                id="b-about"
                x1="0"
                x2="1"
                y1="0"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#3b82f6" />
                <stop offset="1" stopColor="#1e40af" />
              </linearGradient>
              <linearGradient
                id="c-about"
                x1="0"
                x2="1"
                y1="0"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#3b82f6" />
                <stop offset="1" stopColor="#1e40af" />
              </linearGradient>
            </defs>
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
            Why Choose Us
          </span>
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            About Our Solution
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Our Healthcare Platform?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our platform is built by healthcare professionals for healthcare
            professionals, designed to solve the unique challenges of modern
            medical practices.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute -top-6 left-6 inline-flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
                  {feature.icon}
                </div>
                <p className="mt-8 text-lg font-semibold text-gray-900">
                  {feature.title}
                </p>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:flex lg:flex-col lg:justify-center">
              <div className="max-w-lg mx-auto lg:mx-0">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Built for healthcare providers
                </h3>
                <p className="mt-4 text-lg text-gray-500">
                  Our platform is designed with the specific needs of healthcare
                  providers in mind, offering intuitive workflows that match
                  your daily practice routines.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Reduce no-shows with automatic reminders",
                    "Streamline billing and insurance claims",
                    "Access patient records securely from anywhere",
                    "Minimize data entry with smart forms and templates",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
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
                      </div>
                      <p className="ml-3 text-base text-gray-500">{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
            <div className="relative lg:col-start-2 lg:row-start-1">
              <div className="h-full w-full object-cover bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center py-12 px-8">
                <div className="relative mx-auto">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="h-1.5 w-full bg-gray-200 flex space-x-1 px-1 py-0.5 items-center">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="h-40 sm:h-60 bg-gray-50 p-3">
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-10 bg-gray-100 rounded flex items-center justify-between px-3 mt-4">
                          <div className="h-3 bg-gray-300 rounded w-16"></div>
                          <div className="h-5 bg-blue-100 rounded w-20"></div>
                        </div>
                        <div className="h-10 bg-gray-100 rounded flex items-center justify-between px-3">
                          <div className="h-3 bg-gray-300 rounded w-16"></div>
                          <div className="h-5 bg-blue-100 rounded w-20"></div>
                        </div>
                        <div className="h-10 bg-gray-100 rounded flex items-center justify-between px-3">
                          <div className="h-3 bg-gray-300 rounded w-16"></div>
                          <div className="h-5 bg-blue-100 rounded w-20"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
