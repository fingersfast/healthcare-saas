"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PlusIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

interface Prescription {
  id: string;
  doctor: string;
  date: string;
  medications: Medication[];
  instructions: string;
  status: "active" | "completed" | "cancelled";
}

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
}

export default function PrescriptionManager() {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([
    {
      id: "1",
      doctor: "Dr. Sarah Johnson",
      date: "2024-04-10",
      medications: [
        {
          id: "1",
          name: "Lisinopril",
          dosage: "10mg",
          frequency: "Once daily",
          duration: "30 days",
        },
        {
          id: "2",
          name: "Metformin",
          dosage: "500mg",
          frequency: "Twice daily",
          duration: "30 days",
        },
      ],
      instructions: "Take with food. Monitor blood pressure regularly.",
      status: "active",
    },
  ]);
// selectedPrescription
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPrescription, setSelectedPrescription] =
    useState<Prescription | null>(null);

  const handleAddPrescription = () => {
    setShowAddModal(true);
  };

  const handleEditPrescription = (prescription: Prescription) => {
    setSelectedPrescription(prescription);
    setShowEditModal(true);
  };

  const handleDeletePrescription = (id: string) => {
    setPrescriptions(prescriptions.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Prescription Management
          </h1>
          <button
            onClick={handleAddPrescription}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Prescription
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {prescriptions.map((prescription) => (
            <motion.div
              key={prescription.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      Prescription #{prescription.id}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Prescribed by {prescription.doctor} on {prescription.date}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditPrescription(prescription)}
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDeletePrescription(prescription.id)}
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Medications
                </h3>
                <div className="space-y-4">
                  {prescription.medications.map((medication) => (
                    <div
                      key={medication.id}
                      className="bg-gray-50 rounded-lg p-4"
                    >
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            {medication.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {medication.dosage}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-900">
                            {medication.frequency}
                          </p>
                          <p className="text-sm text-gray-500">
                            {medication.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Instructions
                  </h3>
                  <p className="text-sm text-gray-600">
                    {prescription.instructions}
                  </p>
                </div>

                <div className="mt-6">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      prescription.status === "active"
                        ? "bg-green-100 text-green-800"
                        : prescription.status === "completed"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {prescription.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
