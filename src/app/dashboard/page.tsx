"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import HospitalDepartments from "@/components/HospitalDepartments";
import StaffScheduling from "@/components/StaffScheduling";
import SecurityDashboard from "@/components/SecurityDashboard";
import HospitalAnalytics from "@/components/HospitalAnalytics";

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>("overview");

  // Set active tab based on URL parameter if available
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (
      tab &&
      ["overview", "departments", "staff", "analytics", "security"].includes(
        tab
      )
    ) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Hospital Administration Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Comprehensive hospital management system with enterprise-grade
            features
          </p>
        </div>
      </header>

      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "overview"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("departments")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "departments"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Departments
              </button>
              <button
                onClick={() => setActiveTab("staff")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "staff"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Staff Scheduling
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "analytics"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Analytics
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "security"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Security & Compliance
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "overview" && (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Welcome to Advanced Hospital Management
                </h2>
                <p className="text-gray-600 mb-6">
                  This comprehensive platform provides enterprise-grade tools to
                  manage your hospital effectively. Navigate through the tabs to
                  access different modules.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div
                    className="bg-blue-50 border border-blue-100 rounded-lg p-6 cursor-pointer hover:bg-blue-100"
                    onClick={() => setActiveTab("departments")}
                  >
                    <h3 className="text-lg font-medium text-blue-900">
                      Department Management
                    </h3>
                    <p className="mt-2 text-sm text-blue-700">
                      Manage hospital departments, track bed availability, and
                      view interactive floor plans.
                    </p>
                  </div>

                  <div
                    className="bg-green-50 border border-green-100 rounded-lg p-6 cursor-pointer hover:bg-green-100"
                    onClick={() => setActiveTab("staff")}
                  >
                    <h3 className="text-lg font-medium text-green-900">
                      Staff Scheduling
                    </h3>
                    <p className="mt-2 text-sm text-green-700">
                      Schedule staff shifts, track certifications, and manage
                      specialties across departments.
                    </p>
                  </div>

                  <div
                    className="bg-purple-50 border border-purple-100 rounded-lg p-6 cursor-pointer hover:bg-purple-100"
                    onClick={() => setActiveTab("analytics")}
                  >
                    <h3 className="text-lg font-medium text-purple-900">
                      Analytics & Reports
                    </h3>
                    <p className="mt-2 text-sm text-purple-700">
                      Access advanced analytics, including predictive AI
                      insights and financial reporting.
                    </p>
                  </div>

                  <div
                    className="bg-yellow-50 border border-yellow-100 rounded-lg p-6 cursor-pointer hover:bg-yellow-100"
                    onClick={() => setActiveTab("security")}
                  >
                    <h3 className="text-lg font-medium text-yellow-900">
                      Security & Compliance
                    </h3>
                    <p className="mt-2 text-sm text-yellow-700">
                      Ensure HIPAA compliance with comprehensive security
                      features and audit logs.
                    </p>
                  </div>

                  <div className="bg-red-50 border border-red-100 rounded-lg p-6 cursor-pointer hover:bg-red-100">
                    <h3 className="text-lg font-medium text-red-900">
                      Emergency Response
                    </h3>
                    <p className="mt-2 text-sm text-red-700">
                      Coordinate emergency responses with real-time status
                      updates and resource allocation.
                    </p>
                  </div>

                  <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6 cursor-pointer hover:bg-indigo-100">
                    <h3 className="text-lg font-medium text-indigo-900">
                      Patient Management
                    </h3>
                    <p className="mt-2 text-sm text-indigo-700">
                      Access patient records, manage appointments, and handle
                      billing in one place.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <h3 className="text-md font-medium text-blue-900">
                    Enterprise Edition Features
                  </h3>
                  <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-700">
                    <li className="flex items-center">
                      <svg
                        className="h-4 w-4 mr-2 text-blue-500"
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
                      HIPAA Compliance Dashboard
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-4 w-4 mr-2 text-blue-500"
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
                      Interactive Floor Plans
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-4 w-4 mr-2 text-blue-500"
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
                      AI-Powered Predictive Analytics
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-4 w-4 mr-2 text-blue-500"
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
                      Staff Certification Tracking
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-4 w-4 mr-2 text-blue-500"
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
                      Role-Based Access Controls
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-4 w-4 mr-2 text-blue-500"
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
                      Financial Reporting & Analytics
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "departments" && <HospitalDepartments />}
            {activeTab === "staff" && <StaffScheduling />}
            {activeTab === "analytics" && <HospitalAnalytics />}
            {activeTab === "security" && <SecurityDashboard />}
          </div>
        </div>
      </div>
    </div>
  );
}
