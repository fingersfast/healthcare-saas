"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";

// Define the patient type
interface Patient {
  name: string;
  id: string;
  lastVisit: string;
  status: string;
  avatar: string;
  email: string;
  phone: string;
  address: string;
  medicalHistory: string;
}

export default function PatientManagementMockup() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newPatient, setNewPatient] = useState<Partial<Patient>>({
    name: "",
    email: "",
    phone: "",
    address: "",
    medicalHistory: "",
  });
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Initialize with sample data
  useEffect(() => {
    setPatients([
      {
        name: "John Doe",
        id: "P001",
        lastVisit: "2023-06-15",
        status: "Active",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        email: "john.doe@example.com",
        phone: "+1 234-567-8901",
        address: "123 Main St, Anytown, USA",
        medicalHistory: "Hypertension, Type 2 Diabetes",
      },
      {
        name: "Jane Smith",
        id: "P002",
        lastVisit: "2023-06-10",
        status: "Active",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        email: "jane.smith@example.com",
        phone: "+1 234-567-8902",
        address: "456 Oak Ave, Somewhere, USA",
        medicalHistory: "Asthma, Allergies",
      },
      {
        name: "Mike Johnson",
        id: "P003",
        lastVisit: "2023-06-05",
        status: "Inactive",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        email: "mike.johnson@example.com",
        phone: "+1 234-567-8903",
        address: "789 Pine St, Elsewhere, USA",
        medicalHistory: "None",
      },
    ]);
  }, []);

  // Filter and search patients
  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || patient.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Add new patient
  const handleAddPatient = () => {
    const newId = `P${String(patients.length + 1).padStart(3, "0")}`;
    const patientToAdd: Patient = {
      ...(newPatient as Patient),
      id: newId,
      lastVisit: new Date().toISOString().split("T")[0],
      status: "Active",
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
        newPatient.name || "New"
      )}&background=random`,
    };
    setPatients([...patients, patientToAdd]);
    setIsAddModalOpen(false);
    setNewPatient({
      name: "",
      email: "",
      phone: "",
      address: "",
      medicalHistory: "",
    });
  };

  // Update patient
  const handleUpdatePatient = () => {
    if (!selectedPatient) return;
    setPatients(
      patients.map((p) => (p.id === selectedPatient.id ? selectedPatient : p))
    );
    setIsEditModalOpen(false);
  };

  // Delete patient
  const handleDeletePatient = (id: string) => {
    setPatients(patients.filter((p) => p.id !== id));
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
            Patient Management
          </h1>
          <p className="text-sm text-gray-500">
            Manage and view patient records
          </p>
        </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all duration-200"
            onClick={() => setIsAddModalOpen(true)}
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
          Add Patient
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden border border-gray-100"
        >
          <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50/30">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search patients..."
                    className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <select
                  className="p-2 text-gray-600 bg-white rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-gray-50 to-blue-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Visit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                <AnimatePresence>
                  {filteredPatients.map((patient) => (
                    <motion.tr
                      key={patient.id}
                      className="hover:bg-blue-50 transition-colors duration-150"
                      variants={itemVariants}
                      whileHover={{
                        backgroundColor: "rgba(239, 246, 255, 0.8)",
                        transition: { duration: 0.2 },
                      }}
                    >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 relative">
                        <img
                              className="h-10 w-10 rounded-full ring-2 ring-white shadow-sm object-cover"
                          src={patient.avatar}
                          alt=""
                        />
                            <span
                              className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white ${
                                patient.status === "Active"
                                  ? "bg-green-400"
                                  : "bg-gray-400"
                              }`}
                            ></span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {patient.name}
                        </div>
                            <div className="text-sm text-gray-500">
                              {patient.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 font-mono bg-gray-100 px-2 py-1 rounded-md inline-block">
                          {patient.id}
                        </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {patient.lastVisit}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        patient.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => {
                              setSelectedPatient(patient);
                              setIsEditModalOpen(true);
                            }}
                            className="text-blue-600 hover:text-blue-900"
                          >
                      Edit
                    </button>
                          <button
                            onClick={() => handleDeletePatient(patient.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        </div>
                  </td>
                    </motion.tr>
              ))}
                </AnimatePresence>
            </tbody>
          </table>
        </div>
        </motion.div>
      </motion.div>

      {/* Add Patient Modal */}
      <Dialog
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded-xl bg-white p-6 shadow-lg">
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
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newPatient.email}
                  onChange={(e) =>
                    setNewPatient({ ...newPatient, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newPatient.phone}
                  onChange={(e) =>
                    setNewPatient({ ...newPatient, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newPatient.address}
                  onChange={(e) =>
                    setNewPatient({ ...newPatient, address: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Medical History
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={3}
                  value={newPatient.medicalHistory}
                  onChange={(e) =>
                    setNewPatient({
                      ...newPatient,
                      medicalHistory: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                onClick={() => setIsAddModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                onClick={handleAddPatient}
              >
                Add Patient
              </button>
      </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Edit Patient Modal */}
      <Dialog
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded-xl bg-white p-6 shadow-lg">
            <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">
              Edit Patient
            </Dialog.Title>
            {selectedPatient && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={selectedPatient.name}
                    onChange={(e) =>
                      setSelectedPatient({
                        ...selectedPatient,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={selectedPatient.email}
                    onChange={(e) =>
                      setSelectedPatient({
                        ...selectedPatient,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={selectedPatient.phone}
                    onChange={(e) =>
                      setSelectedPatient({
                        ...selectedPatient,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={selectedPatient.address}
                    onChange={(e) =>
                      setSelectedPatient({
                        ...selectedPatient,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Medical History
                  </label>
                  <textarea
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    rows={3}
                    value={selectedPatient.medicalHistory}
                    onChange={(e) =>
                      setSelectedPatient({
                        ...selectedPatient,
                        medicalHistory: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={selectedPatient.status}
                    onChange={(e) =>
                      setSelectedPatient({
                        ...selectedPatient,
                        status: e.target.value,
                      })
                    }
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
            )}
            <div className="mt-6 flex justify-end space-x-3">
              <button
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                onClick={() => setIsEditModalOpen(false)}
              >
                Cancel
          </button>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                onClick={handleUpdatePatient}
              >
                Save Changes
          </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
