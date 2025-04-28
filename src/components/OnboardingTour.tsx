"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface TourStep {
  id: string;
  title: string;
  description: string;
  target: string;
  position: "top" | "right" | "bottom" | "left";
}

const tourSteps: TourStep[] = [
  {
    id: "dashboard",
    title: "Welcome to Your Dashboard",
    description:
      "This is your central hub for managing your practice. From here, you can access all key features.",
    target: "#dashboard",
    position: "bottom",
  },
  {
    id: "appointments",
    title: "Appointment Management",
    description:
      "Schedule, view, and manage appointments with our intuitive calendar interface.",
    target: "#appointments",
    position: "right",
  },
  {
    id: "patients",
    title: "Patient Records",
    description:
      "Access and manage patient information securely. All records are HIPAA compliant.",
    target: "#patients",
    position: "left",
  },
  {
    id: "reports",
    title: "Analytics & Reports",
    description:
      "Track your practice's performance with detailed analytics and reports.",
    target: "#reports",
    position: "top",
  },
];

export default function OnboardingTour() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasCompletedTour, setHasCompletedTour] = useState(true);

  useEffect(() => {
    // Check if user has completed the tour before
    const completed = localStorage.getItem("tourCompleted") === "true";
    setHasCompletedTour(completed);
    if (!completed) {
      setIsVisible(true);
    }
  }, []);

  const restartTour = () => {
    setCurrentStep(0);
    setIsVisible(true);
  };

  const nextStep = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentStep((prev) => {
      if (prev === tourSteps.length - 1) {
        completeTour();
        return prev;
      }
      return prev + 1;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevStep = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentStep((prev) => (prev - 1 + tourSteps.length) % tourSteps.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const completeTour = () => {
    localStorage.setItem("tourCompleted", "true");
    setHasCompletedTour(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Restart Tour Button */}
      {hasCompletedTour && !isVisible && (
        <button
          onClick={restartTour}
          className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 flex items-center z-40"
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          Tour Guide
        </button>
      )}

      {/* Tour Modal */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {tourSteps[currentStep].title}
                      </h3>
                      <button
                        onClick={completeTour}
                        className="text-gray-400 hover:text-gray-500"
                      >
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-600 mb-6">
                      {tourSteps[currentStep].description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {tourSteps.map((_, index) => (
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
                      <div className="flex space-x-4">
                        {currentStep > 0 && (
                          <button
                            onClick={prevStep}
                            className="text-gray-600 hover:text-gray-900"
                            disabled={isAnimating}
                          >
                            Previous
                          </button>
                        )}
                        <button
                          onClick={nextStep}
                          className="text-blue-600 hover:text-blue-700"
                          disabled={isAnimating}
                        >
                          {currentStep === tourSteps.length - 1
                            ? "Finish"
                            : "Next"}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
