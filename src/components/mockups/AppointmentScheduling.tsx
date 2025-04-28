"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";

// Define types
interface Appointment {
  id: string;
  patientName: string;
  time: string;
  duration: string;
  type: string;
  status: string;
  date: Date;
  notes?: string;
  patientId?: string;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

export default function AppointmentScheduling() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [formData, setFormData] = useState<Partial<Appointment>>({
    patientName: "",
    time: "",
    duration: "30 min",
    type: "Checkup",
    notes: "",
  });
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");

  // Initialize with sample data
  useEffect(() => {
    const initialAppointments: Appointment[] = [
      {
        id: "apt-1",
        patientName: "John Doe",
        time: "09:00 AM",
        duration: "30 min",
        type: "Checkup",
        status: "Confirmed",
        date: new Date(),
        notes: "Regular checkup",
        patientId: "P001",
      },
      {
        id: "apt-2",
        patientName: "Jane Smith",
        time: "10:30 AM",
        duration: "45 min",
        type: "Consultation",
        status: "Pending",
        date: new Date(),
        notes: "Initial consultation",
        patientId: "P002",
      },
    ];
    setAppointments(initialAppointments);
  }, []);

  // Available time slots
  const timeSlots: TimeSlot[] = [
    { time: "09:00 AM", available: true },
    { time: "09:30 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "10:30 AM", available: true },
    { time: "11:00 AM", available: true },
    { time: "11:30 AM", available: true },
    { time: "02:00 PM", available: true },
    { time: "02:30 PM", available: true },
    { time: "03:00 PM", available: true },
    { time: "03:30 PM", available: true },
    { time: "04:00 PM", available: true },
    { time: "04:30 PM", available: true },
  ];

  // Filter available time slots based on existing appointments
  const getAvailableTimeSlots = (date: Date) => {
    const dateAppointments = appointments.filter(
      (apt) => apt.date.toDateString() === date.toDateString()
    );
    return timeSlots.map((slot) => ({
      ...slot,
      available: !dateAppointments.some((apt) => apt.time === slot.time),
    }));
  };

  // Handle appointment creation
  const handleCreateAppointment = () => {
    const newAppointment: Appointment = {
      id: `apt-${Date.now()}`,
      patientName: formData.patientName || "",
      time: selectedTimeSlot,
      duration: formData.duration || "30 min",
      type: formData.type || "Checkup",
      status: "Pending",
      date: selectedDate,
      notes: formData.notes,
    };

    setAppointments([...appointments, newAppointment]);
    setShowForm(false);
    resetForm();
  };

  // Handle appointment update
  const handleUpdateAppointment = () => {
    if (!selectedAppointment) return;

    const updatedAppointments = appointments.map((apt) =>
      apt.id === selectedAppointment.id
        ? {
            ...selectedAppointment,
            patientName:
              formData.patientName || selectedAppointment.patientName,
            time: selectedTimeSlot || selectedAppointment.time,
            duration: formData.duration || selectedAppointment.duration,
            type: formData.type || selectedAppointment.type,
            notes: formData.notes || selectedAppointment.notes,
          }
        : apt
    );

    setAppointments(updatedAppointments);
    setShowForm(false);
    setIsEditMode(false);
    resetForm();
  };

  // Handle appointment deletion
  const handleDeleteAppointment = (id: string) => {
    setAppointments(appointments.filter((apt) => apt.id !== id));
  };

  // Handle appointment status update
  const handleStatusUpdate = (id: string, newStatus: string) => {
    setAppointments(
      appointments.map((apt) =>
        apt.id === id ? { ...apt, status: newStatus } : apt
      )
    );
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      patientName: "",
      time: "",
      duration: "30 min",
      type: "Checkup",
      notes: "",
    });
    setSelectedTimeSlot("");
    setSelectedAppointment(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [];

    // Add empty slots for days before the 1st of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: "", date: null, appointments: [] });
    }

    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      const dayAppointments = appointments.filter(
        (apt) => apt.date.toDateString() === currentDate.toDateString()
      );
      days.push({
        day: i.toString(),
        date: currentDate,
        appointments: dayAppointments,
      });
    }

    return days;
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthName = selectedDate.toLocaleString("default", { month: "long" });
  const year = selectedDate.getFullYear();
  const calendarDays = getDaysInMonth(selectedDate);

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-blue-50 p-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-teal-400/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between mb-6"
        >
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Appointment Scheduling
            </h1>
            <p className="text-sm text-gray-500">
              Schedule and manage patient appointments
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all duration-200"
            onClick={() => {
              setIsEditMode(false);
              setShowForm(true);
            }}
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Appointment
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {`${monthName} ${year}`}
              </h2>
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
                  onClick={() => {
                    const prevMonth = new Date(selectedDate);
                    prevMonth.setMonth(prevMonth.getMonth() - 1);
                    setSelectedDate(prevMonth);
                  }}
                >
                  <svg
                    className="w-5 h-5"
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
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
                  onClick={() => setSelectedDate(new Date())}
                >
                  Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
                  onClick={() => {
                    const nextMonth = new Date(selectedDate);
                    nextMonth.setMonth(nextMonth.getMonth() + 1);
                    setSelectedDate(nextMonth);
                  }}
                >
                  <svg
                    className="w-5 h-5"
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
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-gray-500 py-2"
                >
                  {day}
                </div>
              ))}
              {calendarDays.map((day, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative p-2 min-h-[100px] rounded-lg border ${
                    day.date
                      ? "border-gray-200 hover:border-blue-500 cursor-pointer"
                      : "border-transparent"
                  } ${
                    day.date?.toDateString() === selectedDate.toDateString()
                      ? "bg-blue-50 border-blue-500"
                      : "bg-white"
                  }`}
                  onClick={() => day.date && setSelectedDate(day.date)}
                >
                  {day.day && (
                    <>
                      <span
                        className={`text-sm ${
                          day.date?.toDateString() === new Date().toDateString()
                            ? "bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center"
                            : "text-gray-700"
                        }`}
                      >
                        {day.day}
                      </span>
                      <div className="mt-2 space-y-1">
                        {day.appointments.map((apt) => (
                          <motion.div
                            key={apt.id}
                            className={`text-xs p-1 rounded ${
                              apt.status === "Confirmed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedAppointment(apt);
                              setFormData({
                                patientName: apt.patientName,
                                duration: apt.duration,
                                type: apt.type,
                                notes: apt.notes,
                              });
                              setSelectedTimeSlot(apt.time);
                              setIsEditMode(true);
                              setShowForm(true);
                            }}
                          >
                            {apt.time} - {apt.patientName}
                          </motion.div>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Appointment List */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {selectedDate.toLocaleDateString("default", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </h2>
            <div className="space-y-4">
              {appointments
                .filter(
                  (apt: Appointment) =>
                    apt.date.toDateString() === selectedDate.toDateString()
                )
                .map((apt: Appointment) => (
                  <motion.div
                    key={apt.id}
                    variants={itemVariants}
                    className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors duration-200"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {apt.patientName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {apt.time} ({apt.duration})
                        </p>
                        <p className="text-sm text-gray-500">{apt.type}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <select
                          className={`text-sm rounded-full px-2 py-1 ${
                            apt.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                          value={apt.status}
                          onChange={(e) =>
                            handleStatusUpdate(apt.id, e.target.value)
                          }
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirmed</option>
                        </select>
                        <button
                          className="text-blue-600 hover:text-blue-800"
                          onClick={() => {
                            setSelectedAppointment(apt);
                            setFormData({
                              patientName: apt.patientName,
                              duration: apt.duration,
                              type: apt.type,
                              notes: apt.notes,
                            });
                            setSelectedTimeSlot(apt.time);
                            setIsEditMode(true);
                            setShowForm(true);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800"
                          onClick={() => handleDeleteAppointment(apt.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    {apt.notes && (
                      <p className="mt-2 text-sm text-gray-600">{apt.notes}</p>
                    )}
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Appointment Form Modal */}
      <Dialog
        open={showForm}
        onClose={() => {
          setShowForm(false);
          resetForm();
        }}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded-xl bg-white p-6 shadow-lg">
            <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">
              {isEditMode ? "Edit Appointment" : "New Appointment"}
            </Dialog.Title>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Patient Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.patientName}
                  onChange={(e) =>
                    setFormData({ ...formData, patientName: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Time Slot
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={selectedTimeSlot}
                  onChange={(e) => setSelectedTimeSlot(e.target.value)}
                >
                  <option value="">Select a time</option>
                  {getAvailableTimeSlots(selectedDate).map((slot) => (
                    <option
                      key={slot.time}
                      value={slot.time}
                      disabled={!slot.available}
                    >
                      {slot.time}
                      {!slot.available ? " (Unavailable)" : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Duration
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.duration}
                  onChange={(e) =>
                    setFormData({ ...formData, duration: e.target.value })
                  }
                >
                  <option value="15 min">15 minutes</option>
                  <option value="30 min">30 minutes</option>
                  <option value="45 min">45 minutes</option>
                  <option value="60 min">1 hour</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                >
                  <option value="Checkup">Checkup</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Follow-up">Follow-up</option>
                  <option value="Initial Consultation">
                    Initial Consultation
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Notes
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                onClick={() => {
                  setShowForm(false);
                  resetForm();
                }}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                onClick={
                  isEditMode ? handleUpdateAppointment : handleCreateAppointment
                }
                disabled={!formData.patientName || !selectedTimeSlot}
              >
                {isEditMode ? "Save Changes" : "Create Appointment"}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
