"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface DemoStep {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const demoSteps: DemoStep[] = [
  {
    id: "appointment",
    title: "Smart Appointment Scheduling",
    description:
      "Experience our intelligent scheduling system that optimizes your clinic's workflow.",
    image:
      "https://placehold.co/600x400/2563eb/FFFFFF?text=Appointment+Scheduling",
    features: [
      "Real-time availability",
      "Automated reminders",
      "Waitlist management",
      "Custom scheduling rules",
    ],
  },
  {
    id: "records",
    title: "Digital Medical Records",
    description: "Access and manage patient records securely from anywhere.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF?text=Medical+Records",
    features: [
      "Secure cloud storage",
      "Quick search and retrieval",
      "Document sharing",
      "Version history",
    ],
  },
  {
    id: "billing",
    title: "Streamlined Billing",
    description:
      "Simplify your billing process with automated invoicing and payment tracking.",
    image: "https://placehold.co/600x400/2563eb/FFFFFF?text=Billing",
    features: [
      "Automated invoicing",
      "Insurance claim processing",
      "Payment tracking",
      "Financial reporting",
    ],
  },
];

export default function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageError, setImageError] = useState(false);

  const nextStep = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentStep((prev) => (prev + 1) % demoSteps.length);
    setTimeout(() => setIsAnimating(false), 500);
    setImageError(false);
  };

  const prevStep = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentStep((prev) => (prev - 1 + demoSteps.length) % demoSteps.length);
    setTimeout(() => setIsAnimating(false), 500);
    setImageError(false);
  };

  // Create a simple placeholder for fallback
  const renderPlaceholder = () => {
    const colors = [
      "from-blue-500 to-blue-600",
      "from-purple-500 to-purple-600",
      "from-green-500 to-green-600",
    ];
    const currentColor = colors[currentStep % colors.length];

    return (
      <div
        className={`w-full h-64 flex items-center justify-center bg-gradient-to-r ${currentColor} text-white rounded-lg p-4 text-center`}
      >
        <div>
          <h3 className="text-xl font-bold mb-2">
            {demoSteps[currentStep].title}
          </h3>
          <p>{demoSteps[currentStep].description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50 py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Experience Our Platform
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Take a tour of our key features and see how we can transform your
            practice
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Demo content */}
            <div className="p-8 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {demoSteps[currentStep].title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {demoSteps[currentStep].description}
                    </p>
                    <ul className="space-y-3">
                      {demoSteps[currentStep].features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center text-gray-700"
                        >
                          <svg
                            className="h-5 w-5 text-green-500 mr-2"
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
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-8">
                    <button
                      onClick={prevStep}
                      className="flex items-center text-blue-600 hover:text-blue-700"
                      disabled={isAnimating}
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
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Previous
                    </button>
                    <div className="flex space-x-2">
                      {demoSteps.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentStep(index)}
                          className={`w-2 h-2 rounded-full ${
                            index === currentStep
                              ? "bg-blue-600"
                              : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={nextStep}
                      className="flex items-center text-blue-600 hover:text-blue-700"
                      disabled={isAnimating}
                    >
                      Next
                      <svg
                        className="h-5 w-5 ml-2"
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
              </AnimatePresence>
            </div>

            {/* Demo image */}
            <div className="bg-gray-50 p-8 lg:p-12 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg transform rotate-1"></div>
                  <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                    {imageError ? (
                      renderPlaceholder()
                    ) : (
                      <img
                        src={demoSteps[currentStep].image}
                        alt={demoSteps[currentStep].title}
                        className="w-full h-auto"
                        onError={() => setImageError(true)}
                      />
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg transition-all duration-200"
          >
            Start Your Free Trial
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.button>
          <p className="mt-4 text-sm text-gray-600">
            No credit card required • 14-day free trial
          </p>
        </div>
      </div>
    </div>
  );
}
