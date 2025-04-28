"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full text-sm font-semibold tracking-wide text-blue-600 bg-blue-100"
              >
                <span className="flex items-center">
                  <span className="flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Trusted by 1000+ Healthcare Providers
                </span>
              </motion.div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Transform Your</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mt-1">
                  Healthcare Practice
                </span>
              </h1>
              <p className="mt-4 text-base text-gray-600 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                Streamline your clinic operations with our comprehensive
                healthcare management solution. From patient registration to
                follow-up care, we&apos;ve got you covered.
              </p>
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-md shadow-lg"
                >
                  <Link
                    href="/dashboard"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                  >
                    Explore Dashboard
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-md shadow-lg"
                >
                  <Link
                    href="/enterprise"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                  >
                    Enterprise Features
                  </Link>
                </motion.div>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 hidden sm:block">
                <p className="text-sm font-medium text-gray-500">
                  Trusted by leading hospitals and clinics
                </p>
                <div className="mt-3 grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="h-12 bg-white rounded-lg shadow-sm p-2 flex items-center justify-center"
                    >
                      <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ${
                isHovered ? "rotate-0 scale-105" : "rotate-2"
              }`}
            >
              <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-80"></div>
                <div className="absolute top-0 left-0 right-0 h-20 bg-white rounded-b-full transform translate-y-10 opacity-20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-white rounded-t-full transform -translate-y-10 opacity-20"></div>
                <div className="relative z-10 px-6 py-8 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-white text-4xl font-bold mb-4"
                  >
                    HealthcareSaaS
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-blue-100 text-lg"
                  >
                    Modern Patient Management
                  </motion.div>
                </div>
              </div>

              <div className="bg-white p-6">
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded"></div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded"></div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6"></div>
                  </div>
                  <div className="h-10 bg-gradient-to-r from-blue-100 to-blue-50 rounded-md"></div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-1/4 -right-8 w-20 h-20 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-1/4 -left-8 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#f3f4f6"
            fillOpacity="1"
            d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
