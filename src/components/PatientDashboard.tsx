"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BellIcon,
  CalendarIcon,
  DocumentTextIcon,
  CreditCardIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

interface Appointment {
  id: string;
  doctor: string;
  date: string;
  time: string;
  status: "upcoming" | "completed" | "cancelled";
  type: "in-person" | "video";
}

interface MedicalRecord {
  id: string;
  date: string;
  doctor: string;
  diagnosis: string;
  prescription: string;
  notes: string;
}

interface Notification {
  id: string;
  type: "appointment" | "prescription" | "payment";
  message: string;
  time: string;
  read: boolean;
}

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "appointment",
      message:
        "Your appointment with Dr. Sarah Johnson is tomorrow at 10:30 AM",
      time: "2 hours ago",
      read: false,
    },
    {
      id: "2",
      type: "prescription",
      message: "New prescription available for review",
      time: "1 day ago",
      read: false,
    },
  ]);

  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: "1",
      doctor: "Dr. Sarah Johnson",
      date: "2024-04-15",
      time: "10:30 AM",
      status: "upcoming",
      type: "video",
    },
    {
      id: "2",
      doctor: "Dr. Michael Chen",
      date: "2024-04-20",
      time: "02:00 PM",
      status: "upcoming",
      type: "in-person",
    },
  ]);

  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([
    {
      id: "1",
      date: "2024-03-15",
      doctor: "Dr. Sarah Johnson",
      diagnosis: "Hypertension",
      prescription: "Lisinopril 10mg daily",
      notes: "Follow up in 3 months",
    },
  ]);

  const markNotificationAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const cancelAppointment = (id: string) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: "cancelled" }
          : appointment
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Patient Dashboard
          </h1>
          <div className="relative">
            <button className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
              <BellIcon className="h-6 w-6" />
              {notifications.some((n) => !n.read) && (
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              )}
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              "overview",
              "appointments",
              "medical-records",
              "payments",
              "profile",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
              >
                {tab.replace("-", " ")}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Upcoming Appointments */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Upcoming Appointments
                  </h2>
                  <div className="space-y-4">
                    {appointments
                      .filter((a) => a.status === "upcoming")
                      .map((appointment) => (
                        <div
                          key={appointment.id}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div>
                            <p className="font-medium text-gray-900">
                              {appointment.doctor}
                            </p>
                            <p className="text-sm text-gray-500">
                              {appointment.date} at {appointment.time}
                            </p>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                appointment.type === "video"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-green-100 text-green-800"
                              }`}
                            >
                              {appointment.type}
                            </span>
                          </div>
                          <button
                            onClick={() => cancelAppointment(appointment.id)}
                            className="text-red-600 hover:text-red-800 text-sm font-medium"
                          >
                            Cancel
                          </button>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Recent Medical Records */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Recent Medical Records
                  </h2>
                  <div className="space-y-4">
                    {medicalRecords.map((record) => (
                      <div
                        key={record.id}
                        className="p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-900">
                              {record.doctor}
                            </p>
                            <p className="text-sm text-gray-500">
                              {record.date}
                            </p>
                          </div>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            {record.diagnosis}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          {record.notes}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "appointments" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow p-6"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  All Appointments
                </h2>
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900">
                          {appointment.doctor}
                        </p>
                        <p className="text-sm text-gray-500">
                          {appointment.date} at {appointment.time}
                        </p>
                        <div className="flex space-x-2 mt-1">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              appointment.type === "video"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {appointment.type}
                          </span>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              appointment.status === "upcoming"
                                ? "bg-yellow-100 text-yellow-800"
                                : appointment.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {appointment.status}
                          </span>
                        </div>
                      </div>
                      {appointment.status === "upcoming" && (
                        <button
                          onClick={() => cancelAppointment(appointment.id)}
                          className="text-red-600 hover:text-red-800 text-sm font-medium"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "medical-records" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow p-6"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Medical Records
                </h2>
                <div className="space-y-6">
                  {medicalRecords.map((record) => (
                    <div
                      key={record.id}
                      className="border-b border-gray-200 pb-6 last:border-0"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium text-gray-900">
                            {record.doctor}
                          </p>
                          <p className="text-sm text-gray-500">{record.date}</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {record.diagnosis}
                        </span>
                      </div>
                      <div className="mt-4">
                        <h3 className="text-sm font-medium text-gray-900">
                          Prescription
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {record.prescription}
                        </p>
                      </div>
                      <div className="mt-4">
                        <h3 className="text-sm font-medium text-gray-900">
                          Notes
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {record.notes}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Notifications
              </h2>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg ${
                      notification.read ? "bg-gray-50" : "bg-blue-50"
                    }`}
                  >
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-900">
                        {notification.message}
                      </p>
                      {!notification.read && (
                        <button
                          onClick={() =>
                            markNotificationAsRead(notification.id)
                          }
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          Mark as read
                        </button>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      {notification.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100">
                  <CalendarIcon className="h-6 w-6 text-blue-600" />
                  <span className="mt-2 text-sm font-medium text-gray-900">
                    Book Appointment
                  </span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-lg hover:bg-green-100">
                  <DocumentTextIcon className="h-6 w-6 text-green-600" />
                  <span className="mt-2 text-sm font-medium text-gray-900">
                    View Records
                  </span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100">
                  <CreditCardIcon className="h-6 w-6 text-purple-600" />
                  <span className="mt-2 text-sm font-medium text-gray-900">
                    Pay Bills
                  </span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100">
                  <UserCircleIcon className="h-6 w-6 text-yellow-600" />
                  <span className="mt-2 text-sm font-medium text-gray-900">
                    Update Profile
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
