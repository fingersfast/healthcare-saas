"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Department {
  id: string;
  name: string;
  head: string;
  staffCount: number;
  bedsTotal: number;
  bedsAvailable: number;
  location: string;
  color: string;
}

interface Room {
  id: string;
  number: string;
  type: "standard" | "icu" | "operating" | "emergency" | "examination";
  status: "available" | "occupied" | "maintenance" | "cleaning";
  department: string;
  patient?: string;
  admissionDate?: string;
  position: { x: number; y: number };
  width: number;
  height: number;
}

export default function HospitalDepartments() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFloor, setActiveFloor] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "floor-plan">("floor-plan");
  const [selectedDepartment, setSelectedDepartment] = useState<string | "all">(
    "all"
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Mock departments data
      const departmentsData: Department[] = [
        {
          id: "1",
          name: "Emergency Department",
          head: "Dr. James Wilson",
          staffCount: 45,
          bedsTotal: 30,
          bedsAvailable: 8,
          location: "Ground Floor",
          color: "#EF4444",
        },
        {
          id: "2",
          name: "Internal Medicine",
          head: "Dr. Lisa Cuddy",
          staffCount: 38,
          bedsTotal: 40,
          bedsAvailable: 12,
          location: "2nd Floor",
          color: "#3B82F6",
        },
        {
          id: "3",
          name: "Surgery",
          head: "Dr. Gregory House",
          staffCount: 32,
          bedsTotal: 25,
          bedsAvailable: 5,
          location: "3rd Floor",
          color: "#10B981",
        },
        {
          id: "4",
          name: "Pediatrics",
          head: "Dr. Allison Cameron",
          staffCount: 28,
          bedsTotal: 35,
          bedsAvailable: 15,
          location: "1st Floor",
          color: "#F59E0B",
        },
        {
          id: "5",
          name: "Obstetrics & Gynecology",
          head: "Dr. Eric Foreman",
          staffCount: 24,
          bedsTotal: 20,
          bedsAvailable: 7,
          location: "2nd Floor",
          color: "#8B5CF6",
        },
        {
          id: "6",
          name: "Cardiology",
          head: "Dr. Robert Chase",
          staffCount: 22,
          bedsTotal: 25,
          bedsAvailable: 6,
          location: "3rd Floor",
          color: "#EC4899",
        },
      ];

      // Mock rooms data
      const roomsData: Room[] = [
        // Emergency Department Rooms
        {
          id: "101",
          number: "ER-101",
          type: "emergency",
          status: "occupied",
          department: "1",
          patient: "John Doe",
          admissionDate: "2023-10-23",
          position: { x: 50, y: 50 },
          width: 80,
          height: 60,
        },
        {
          id: "102",
          number: "ER-102",
          type: "emergency",
          status: "available",
          department: "1",
          position: { x: 140, y: 50 },
          width: 80,
          height: 60,
        },
        {
          id: "103",
          number: "ER-103",
          type: "emergency",
          status: "occupied",
          department: "1",
          patient: "Mary Smith",
          admissionDate: "2023-10-24",
          position: { x: 230, y: 50 },
          width: 80,
          height: 60,
        },
        {
          id: "104",
          number: "ER-104",
          type: "emergency",
          status: "cleaning",
          department: "1",
          position: { x: 50, y: 120 },
          width: 80,
          height: 60,
        },
        {
          id: "105",
          number: "ER-105",
          type: "emergency",
          status: "available",
          department: "1",
          position: { x: 140, y: 120 },
          width: 80,
          height: 60,
        },
        {
          id: "106",
          number: "ER-106",
          type: "emergency",
          status: "occupied",
          department: "1",
          patient: "Robert Johnson",
          admissionDate: "2023-10-24",
          position: { x: 230, y: 120 },
          width: 80,
          height: 60,
        },

        // Internal Medicine Rooms
        {
          id: "201",
          number: "IM-201",
          type: "standard",
          status: "occupied",
          department: "2",
          patient: "Sarah Williams",
          admissionDate: "2023-10-22",
          position: { x: 50, y: 200 },
          width: 70,
          height: 50,
        },
        {
          id: "202",
          number: "IM-202",
          type: "standard",
          status: "available",
          department: "2",
          position: { x: 130, y: 200 },
          width: 70,
          height: 50,
        },
        {
          id: "203",
          number: "IM-203",
          type: "standard",
          status: "maintenance",
          department: "2",
          position: { x: 210, y: 200 },
          width: 70,
          height: 50,
        },
        {
          id: "204",
          number: "IM-204",
          type: "standard",
          status: "occupied",
          department: "2",
          patient: "Michael Brown",
          admissionDate: "2023-10-21",
          position: { x: 290, y: 200 },
          width: 70,
          height: 50,
        },
        {
          id: "205",
          number: "IM-205",
          type: "standard",
          status: "available",
          department: "2",
          position: { x: 370, y: 200 },
          width: 70,
          height: 50,
        },

        // Surgery Rooms
        {
          id: "301",
          number: "SU-301",
          type: "operating",
          status: "occupied",
          department: "3",
          patient: "Emma Davis",
          admissionDate: "2023-10-24",
          position: { x: 50, y: 280 },
          width: 90,
          height: 70,
        },
        {
          id: "302",
          number: "SU-302",
          type: "operating",
          status: "cleaning",
          department: "3",
          position: { x: 150, y: 280 },
          width: 90,
          height: 70,
        },
        {
          id: "303",
          number: "SU-303",
          type: "operating",
          status: "available",
          department: "3",
          position: { x: 250, y: 280 },
          width: 90,
          height: 70,
        },

        // Pediatrics Rooms
        {
          id: "401",
          number: "PD-401",
          type: "standard",
          status: "occupied",
          department: "4",
          patient: "Tommy Jenkins",
          admissionDate: "2023-10-23",
          position: { x: 50, y: 380 },
          width: 65,
          height: 50,
        },
        {
          id: "402",
          number: "PD-402",
          type: "standard",
          status: "available",
          department: "4",
          position: { x: 125, y: 380 },
          width: 65,
          height: 50,
        },
        {
          id: "403",
          number: "PD-403",
          type: "standard",
          status: "occupied",
          department: "4",
          patient: "Lily Chen",
          admissionDate: "2023-10-22",
          position: { x: 200, y: 380 },
          width: 65,
          height: 50,
        },
        {
          id: "404",
          number: "PD-404",
          type: "standard",
          status: "available",
          department: "4",
          position: { x: 275, y: 380 },
          width: 65,
          height: 50,
        },
        {
          id: "405",
          number: "PD-405",
          type: "standard",
          status: "occupied",
          department: "4",
          patient: "Jake Thompson",
          admissionDate: "2023-10-24",
          position: { x: 350, y: 380 },
          width: 65,
          height: 50,
        },
      ];

      setDepartments(departmentsData);
      setRooms(roomsData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

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

  const filteredRooms =
    selectedDepartment === "all"
      ? rooms
      : rooms.filter((room) => room.department === selectedDepartment);

  const getDepartmentById = (id: string) => {
    return departments.find((dept) => dept.id === id);
  };

  // const getRoomStatusColor = (status: string) => {
  //   switch (status) {
  //     case "available":
  //       return "bg-green-500";
  //     case "occupied":
  //       return "bg-red-500";
  //     case "maintenance":
  //       return "bg-yellow-500";
  //     case "cleaning":
  //       return "bg-blue-500";
  //     default:
  //       return "bg-gray-500";
  //   }
  // };

  const handleRoomClick = (room: Room) => {
    setSelectedRoom(room);
  };

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/5 to-teal-400/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 space-y-6"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Hospital Departments
            </h1>
            <p className="text-sm text-gray-500">
              Manage departments, rooms, and bed availability
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center space-x-2 bg-white rounded-md shadow-sm p-1">
              <button
                onClick={() => setViewMode("list")}
                className={`px-3 py-1 rounded ${
                  viewMode === "list"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("floor-plan")}
                className={`px-3 py-1 rounded ${
                  viewMode === "floor-plan"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </button>
            </div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm"
            >
              <option value="all">All Departments</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
            <select
              value={activeFloor}
              onChange={(e) => setActiveFloor(Number(e.target.value))}
              className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm"
            >
              <option value={0}>Ground Floor</option>
              <option value={1}>1st Floor</option>
              <option value={2}>2nd Floor</option>
              <option value={3}>3rd Floor</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Add Department
            </button>
          </div>
        </motion.div>

        {/* Department Summary Cards */}
        {viewMode === "list" && (
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {departments.map((department) => (
              <div
                key={department.id}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
              >
                <div
                  className="h-2"
                  style={{ backgroundColor: department.color }}
                ></div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {department.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Head: {department.head}
                  </p>

                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-500">Staff</p>
                      <p className="text-lg font-medium text-gray-900">
                        {department.staffCount}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Beds</p>
                      <p className="text-lg font-medium text-gray-900">
                        {department.bedsTotal}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Available</p>
                      <p className="text-lg font-medium text-indigo-600">
                        {department.bedsAvailable}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {department.location}
                    </span>
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => {
                        setSelectedDepartment(department.id);
                        setViewMode("floor-plan");
                      }}
                    >
                      View Rooms
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Floor Plan View */}
        {viewMode === "floor-plan" && (
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-md border border-gray-100 p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">
                Floor Plan{" "}
                {activeFloor === 0
                  ? "Ground Floor"
                  : `${activeFloor}${
                      activeFloor === 1
                        ? "st"
                        : activeFloor === 2
                        ? "nd"
                        : activeFloor === 3
                        ? "rd"
                        : "th"
                    } Floor`}
              </h2>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                    <span>Available</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                    <span>Occupied</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                    <span>Maintenance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                    <span>Cleaning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Floor Plan */}
            <div className="relative bg-gray-100 border border-gray-200 rounded-lg w-full h-[500px] overflow-auto">
              {/* Room blocks */}
              {filteredRooms.map((room) => {
                const department = getDepartmentById(room.department);
                return (
                  <div
                    key={room.id}
                    className={`absolute border-2 rounded-md cursor-pointer hover:shadow-lg transition-shadow ${
                      room.status === "occupied"
                        ? "border-red-400"
                        : room.status === "available"
                        ? "border-green-400"
                        : room.status === "maintenance"
                        ? "border-yellow-400"
                        : "border-blue-400"
                    }`}
                    style={{
                      left: `${room.position.x}px`,
                      top: `${room.position.y}px`,
                      width: `${room.width}px`,
                      height: `${room.height}px`,
                      backgroundColor:
                        room.status === "occupied"
                          ? "#FEE2E2"
                          : room.status === "available"
                          ? "#D1FAE5"
                          : room.status === "maintenance"
                          ? "#FEF3C7"
                          : "#DBEAFE",
                    }}
                    onClick={() => handleRoomClick(room)}
                  >
                    <div className="p-2 text-xs">
                      <div className="font-medium">{room.number}</div>
                      <div>{department?.name.split(" ")[0]}</div>
                    </div>
                  </div>
                );
              })}

              {/* Department labels */}
              {selectedDepartment === "all" &&
                departments.map((dept) => (
                  <div
                    key={dept.id}
                    className="absolute bg-white bg-opacity-80 rounded px-2 py-1 shadow-sm"
                    style={{
                      left: "20px",
                      top: `${(parseInt(dept.id) - 1) * 80 + 20}px`,
                      borderLeft: `4px solid ${dept.color}`,
                    }}
                  >
                    <span className="text-sm font-medium">{dept.name}</span>
                  </div>
                ))}
            </div>
          </motion.div>
        )}

        {/* Room Detail Modal */}
        {selectedRoom && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-xl w-full">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium text-gray-900">
                    Room {selectedRoom.number}
                  </h3>
                  <button
                    onClick={() => setSelectedRoom(null)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <svg
                      className="h-6 w-6"
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

                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <span className="text-gray-500 w-32">Department:</span>
                    <span className="font-medium">
                      {getDepartmentById(selectedRoom.department)?.name}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-32">Room Type:</span>
                    <span className="font-medium capitalize">
                      {selectedRoom.type}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-32">Status:</span>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        selectedRoom.status === "available"
                          ? "bg-green-100 text-green-800"
                          : selectedRoom.status === "occupied"
                          ? "bg-red-100 text-red-800"
                          : selectedRoom.status === "maintenance"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {selectedRoom.status.charAt(0).toUpperCase() +
                        selectedRoom.status.slice(1)}
                    </span>
                  </div>

                  {selectedRoom.status === "occupied" && (
                    <>
                      <div className="flex items-center">
                        <span className="text-gray-500 w-32">Patient:</span>
                        <span className="font-medium">
                          {selectedRoom.patient}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 w-32">Admitted:</span>
                        <span className="font-medium">
                          {selectedRoom.admissionDate}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-6 flex space-x-3 justify-end">
                  {selectedRoom.status === "available" && (
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Assign Patient
                    </button>
                  )}
                  {selectedRoom.status === "occupied" && (
                    <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                      Discharge Patient
                    </button>
                  )}
                  <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                    Update Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
