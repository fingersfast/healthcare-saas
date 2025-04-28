"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";

// Define types
interface MedicalRecord {
  id: string;
  patientName: string;
  date: Date;
  type: string;
  status: string;
  notes?: string;
  attachments?: string[];
  doctor?: string;
  diagnosis?: string;
  treatment?: string;
  followUp?: string;
}

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  lastVisit: Date;
  medicalHistory: string[];
}

export default function MedicalRecords() {
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [selectedRecord, setSelectedRecord] = useState<MedicalRecord | null>(
    null
  );
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [formData, setFormData] = useState<Partial<MedicalRecord>>({
    patientName: "",
    type: "Consultation",
    status: "Active",
    notes: "",
    diagnosis: "",
    treatment: "",
    followUp: "",
  });
  const [showPatientForm, setShowPatientForm] = useState<boolean>(false);
  const [newPatient, setNewPatient] = useState<Partial<Patient>>({
    name: "",
    age: 0,
    gender: "",
    medicalHistory: [],
  });

  // Initialize with sample data
  useEffect(() => {
    const initialRecords: MedicalRecord[] = [
      {
        id: "rec-1",
        patientName: "John Doe",
        date: new Date(),
        type: "Consultation",
        status: "Active",
        notes: "Regular checkup, patient in good health",
        doctor: "Dr. Smith",
        diagnosis: "Healthy",
        treatment: "No treatment required",
        followUp: "6 months",
      },
      {
        id: "rec-2",
        patientName: "Jane Smith",
        date: new Date(),
        type: "Lab Results",
        status: "Completed",
        notes: "Blood work results normal",
        doctor: "Dr. Johnson",
        diagnosis: "Normal blood work",
        treatment: "Continue current medication",
        followUp: "3 months",
      },
    ];

    const initialPatients: Patient[] = [
      {
        id: "pat-1",
        name: "John Doe",
        age: 45,
        gender: "Male",
        lastVisit: new Date(),
        medicalHistory: ["Hypertension", "Type 2 Diabetes"],
      },
      {
        id: "pat-2",
        name: "Jane Smith",
        age: 32,
        gender: "Female",
        lastVisit: new Date(),
        medicalHistory: ["Asthma", "Allergies"],
      },
    ];

    setRecords(initialRecords);
    setPatients(initialPatients);
  }, []);

  // Handle record creation
  const handleCreateRecord = () => {
    const newRecord: MedicalRecord = {
      id: `rec-${Date.now()}`,
      patientName: formData.patientName || "",
      date: new Date(),
      type: formData.type || "Consultation",
      status: formData.status || "Active",
      notes: formData.notes,
      diagnosis: formData.diagnosis,
      treatment: formData.treatment,
      followUp: formData.followUp,
    };

    setRecords([...records, newRecord]);
    setShowForm(false);
    resetForm();
  };

  // Handle record update
  const handleUpdateRecord = () => {
    if (!selectedRecord) return;

    const updatedRecords = records.map((rec) =>
      rec.id === selectedRecord.id
        ? {
            ...selectedRecord,
            patientName: formData.patientName || selectedRecord.patientName,
            type: formData.type || selectedRecord.type,
            status: formData.status || selectedRecord.status,
            notes: formData.notes || selectedRecord.notes,
            diagnosis: formData.diagnosis || selectedRecord.diagnosis,
            treatment: formData.treatment || selectedRecord.treatment,
            followUp: formData.followUp || selectedRecord.followUp,
          }
        : rec
    );

    setRecords(updatedRecords);
    setShowForm(false);
    setIsEditMode(false);
    resetForm();
  };

  // Handle record deletion
  const handleDeleteRecord = (id: string) => {
    setRecords(records.filter((rec) => rec.id !== id));
  };

  // Handle record status update
  const handleStatusUpdate = (id: string, newStatus: string) => {
    setRecords(
      records.map((rec) =>
        rec.id === id ? { ...rec, status: newStatus } : rec
      )
    );
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      patientName: "",
      type: "Consultation",
      status: "Active",
      notes: "",
      diagnosis: "",
      treatment: "",
      followUp: "",
    });
    setSelectedRecord(null);
  };

  // Filter records
  const filteredRecords = records.filter((rec) => {
    const matchesSearch = rec.patientName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || rec.type === filterType;
    const matchesStatus = filterStatus === "all" || rec.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  // Handle patient creation
  const handleCreatePatient = () => {
    const newPatientData: Patient = {
      id: `pat-${Date.now()}`,
      name: newPatient.name || "",
      age: newPatient.age || 0,
      gender: newPatient.gender || "",
      lastVisit: new Date(),
      medicalHistory: newPatient.medicalHistory || [],
    };

    setPatients([...patients, newPatientData]);
    setShowPatientForm(false);
    setNewPatient({
      name: "",
      age: 0,
      gender: "",
      medicalHistory: [],
    });
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
              Medical Records
            </h1>
            <p className="text-sm text-gray-500">
              Manage and track patient medical records
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all duration-200"
              onClick={() => setShowPatientForm(true)}
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
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              Add Patient
            </motion.button>
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
              New Record
            </motion.button>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <input
                type="text"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search by patient name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="Consultation">Consultation</option>
                <option value="Lab Results">Lab Results</option>
                <option value="Prescription">Prescription</option>
                <option value="Diagnosis">Diagnosis</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Records List */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
        >
          <div className="space-y-4">
            {filteredRecords.map((rec) => (
              <motion.div
                key={rec.id}
                variants={itemVariants}
                className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors duration-200"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {rec.patientName}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {rec.date.toLocaleDateString()} - {rec.type}
                    </p>
                    {rec.diagnosis && (
                      <p className="text-sm text-gray-600 mt-1">
                        Diagnosis: {rec.diagnosis}
                      </p>
                    )}
                    {rec.treatment && (
                      <p className="text-sm text-gray-600">
                        Treatment: {rec.treatment}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <select
                      className={`text-sm rounded-full px-2 py-1 ${
                        rec.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : rec.status === "Completed"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                      value={rec.status}
                      onChange={(e) =>
                        handleStatusUpdate(rec.id, e.target.value)
                      }
                    >
                      <option value="Active">Active</option>
                      <option value="Completed">Completed</option>
                      <option value="Pending">Pending</option>
                    </select>
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => {
                        setSelectedRecord(rec);
                        setFormData({
                          patientName: rec.patientName,
                          type: rec.type,
                          status: rec.status,
                          notes: rec.notes,
                          diagnosis: rec.diagnosis,
                          treatment: rec.treatment,
                          followUp: rec.followUp,
                        });
                        setIsEditMode(true);
                        setShowForm(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDeleteRecord(rec.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {rec.notes && (
                  <p className="mt-2 text-sm text-gray-600">{rec.notes}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Record Form Modal */}
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
          <Dialog.Panel className="mx-auto max-w-2xl w-full rounded-xl bg-white p-6 shadow-lg">
            <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">
              {isEditMode ? "Edit Medical Record" : "New Medical Record"}
            </Dialog.Title>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Patient Name
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.patientName}
                  onChange={(e) =>
                    setFormData({ ...formData, patientName: e.target.value })
                  }
                >
                  <option value="">Select a patient</option>
                  {patients.map((patient) => (
                    <option key={patient.id} value={patient.name}>
                      {patient.name}
                    </option>
                  ))}
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
                  <option value="Consultation">Consultation</option>
                  <option value="Lab Results">Lab Results</option>
                  <option value="Prescription">Prescription</option>
                  <option value="Diagnosis">Diagnosis</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                >
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Diagnosis
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.diagnosis}
                  onChange={(e) =>
                    setFormData({ ...formData, diagnosis: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Treatment
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.treatment}
                  onChange={(e) =>
                    setFormData({ ...formData, treatment: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Follow-up
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.followUp}
                  onChange={(e) =>
                    setFormData({ ...formData, followUp: e.target.value })
                  }
                />
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
                onClick={isEditMode ? handleUpdateRecord : handleCreateRecord}
                disabled={!formData.patientName}
              >
                {isEditMode ? "Save Changes" : "Create Record"}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Patient Form Modal */}
      <Dialog
        open={showPatientForm}
        onClose={() => {
          setShowPatientForm(false);
          setNewPatient({
            name: "",
            age: 0,
            gender: "",
            medicalHistory: [],
          });
        }}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-2xl w-full rounded-xl bg-white p-6 shadow-lg">
            <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">
              Add New Patient
            </Dialog.Title>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newPatient.name}
                  onChange={(e) =>
                    setNewPatient({ ...newPatient, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Age
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newPatient.age}
                  onChange={(e) =>
                    setNewPatient({
                      ...newPatient,
                      age: parseInt(e.target.value),
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newPatient.gender}
                  onChange={(e) =>
                    setNewPatient({ ...newPatient, gender: e.target.value })
                  }
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Medical History (comma-separated)
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newPatient.medicalHistory?.join(", ")}
                  onChange={(e) =>
                    setNewPatient({
                      ...newPatient,
                      medicalHistory: e.target.value
                        .split(",")
                        .map((item) => item.trim()),
                    })
                  }
                />
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                  onClick={() => setShowPatientForm(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  onClick={handleCreatePatient}
                >
                  Add Patient
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
