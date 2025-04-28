"use client";

import React, { useState } from "react";
import PatientManagementMockup from "@/components/mockups/PatientManagementMockup";
import DashboardOverview from "@/components/mockups/DashboardOverview";
import AppointmentScheduling from "@/components/mockups/AppointmentScheduling";
import MedicalRecords from "@/components/mockups/MedicalRecords";
import Link from "next/link";
import PrescriptionManager from "@/components/PrescriptionManager";

export default function MockupsDashboard() {
  const [activeMockup, setActiveMockup] = useState<string>("dashboard");

  const renderMockup = () => {
    switch (activeMockup) {
      case "dashboard":
        return <DashboardOverview />;
      case "patients":
        return <PatientManagementMockup />;
      case "appointments":
        return <AppointmentScheduling />;
      case "records":
        return <MedicalRecords />;
      case "prescriptions":
        return <PrescriptionManager />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Healthcare SaaS Mockups
            </h1>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Healthcare SaaS Mockup Components
          </h2>
          <p className="text-gray-600 mb-4">
            These mockups demonstrate different modules of the healthcare
            platform with modern UI and interactive elements. Click on any tab
            below to view the corresponding mockup component.
          </p>
          <div className="flex border-b border-gray-200 overflow-x-auto">
            {[
              { id: "dashboard", label: "Dashboard Overview" },
              { id: "patients", label: "Patient Management" },
              { id: "appointments", label: "Appointment Scheduling" },
              { id: "records", label: "Medical Records" },
              { id: "prescriptions", label: "Prescriptions" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMockup(tab.id)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                  activeMockup === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {renderMockup()}
        </div>
      </div>
    </div>
  );
}
