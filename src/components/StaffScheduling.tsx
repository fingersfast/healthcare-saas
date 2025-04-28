"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Staff {
  id: string;
  name: string;
  role: string;
  department: string;
  specialties: string[];
  certifications: string[];
  avatar: string;
  schedule: DaySchedule[];
}

interface DaySchedule {
  date: string;
  shift: "morning" | "afternoon" | "night" | "off";
  hours: string;
}

interface Department {
  id: string;
  name: string;
}

export default function StaffScheduling() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<"calendar" | "list">(
    "calendar"
  );
  const [currentWeek, setCurrentWeek] = useState<Date[]>([]);
  const [filterDepartment, setFilterDepartment] = useState<string>("all");
  const [filterRole, setFilterRole] = useState<string>("all");
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
  const [showingStaffDetails, setShowingStaffDetails] = useState(false);

  // Generate days for the current week
  useEffect(() => {
    const today = new Date();
    const day = today.getDay(); // 0 is Sunday, 1 is Monday, etc.

    // Calculate the date of the Monday of the current week
    const monday = new Date(today);
    monday.setDate(today.getDate() - day + (day === 0 ? -6 : 1)); // If today is Sunday, go back to the previous Monday

    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      weekDays.push(date);
    }

    setCurrentWeek(weekDays);
  }, []);

  // Fetch staff and departments data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Mock departments data
      const departmentsData: Department[] = [
        { id: "1", name: "Emergency" },
        { id: "2", name: "Internal Medicine" },
        { id: "3", name: "Surgery" },
        { id: "4", name: "Pediatrics" },
        { id: "5", name: "Obstetrics & Gynecology" },
        { id: "6", name: "Cardiology" },
      ];

      // Mock staff data
      const staffData: Staff[] = [
        {
          id: "1",
          name: "Dr. James Wilson",
          role: "Physician",
          department: "1",
          specialties: ["Emergency Medicine", "Trauma"],
          certifications: ["ACLS", "ATLS", "BLS"],
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          schedule: generateRandomSchedule(),
        },
        {
          id: "2",
          name: "Dr. Lisa Cuddy",
          role: "Physician",
          department: "2",
          specialties: ["Internal Medicine", "Nephrology"],
          certifications: ["ABIM", "BLS"],
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          schedule: generateRandomSchedule(),
        },
        {
          id: "3",
          name: "Dr. Gregory House",
          role: "Physician",
          department: "3",
          specialties: ["Surgery", "Diagnostics"],
          certifications: ["ABMS", "ACLS"],
          avatar: "https://randomuser.me/api/portraits/men/45.jpg",
          schedule: generateRandomSchedule(),
        },
        {
          id: "4",
          name: "Dr. Allison Cameron",
          role: "Physician",
          department: "4",
          specialties: ["Pediatrics", "Immunology"],
          certifications: ["ABP", "BLS"],
          avatar: "https://randomuser.me/api/portraits/women/23.jpg",
          schedule: generateRandomSchedule(),
        },
        {
          id: "5",
          name: "Nurse Joy Williams",
          role: "Nurse",
          department: "1",
          specialties: ["Emergency", "Triage"],
          certifications: ["RN", "BLS", "ACLS"],
          avatar: "https://randomuser.me/api/portraits/women/17.jpg",
          schedule: generateRandomSchedule(),
        },
        {
          id: "6",
          name: "Nurse Thomas Chen",
          role: "Nurse",
          department: "3",
          specialties: ["Surgical", "Critical Care"],
          certifications: ["RN", "CCRN", "BLS"],
          avatar: "https://randomuser.me/api/portraits/men/78.jpg",
          schedule: generateRandomSchedule(),
        },
        {
          id: "7",
          name: "Dr. Eric Foreman",
          role: "Physician",
          department: "5",
          specialties: ["Obstetrics", "Gynecology"],
          certifications: ["ABOG", "BLS"],
          avatar: "https://randomuser.me/api/portraits/men/55.jpg",
          schedule: generateRandomSchedule(),
        },
        {
          id: "8",
          name: "Dr. Robert Chase",
          role: "Physician",
          department: "6",
          specialties: ["Cardiology", "Interventional"],
          certifications: ["ABIM-CV", "ACLS"],
          avatar: "https://randomuser.me/api/portraits/men/62.jpg",
          schedule: generateRandomSchedule(),
        },
      ];

      setDepartments(departmentsData);
      setStaff(staffData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // Helper function to generate a random schedule
  function generateRandomSchedule(): DaySchedule[] {
    const shifts = ["morning", "afternoon", "night", "off"];
    const hoursMap = {
      morning: "7:00 AM - 3:00 PM",
      afternoon: "3:00 PM - 11:00 PM",
      night: "11:00 PM - 7:00 AM",
      off: "-",
    };

    const schedule: DaySchedule[] = [];

    for (let i = 0; i < 7; i++) {
      const randomShift = shifts[Math.floor(Math.random() * shifts.length)] as
        | "morning"
        | "afternoon"
        | "night"
        | "off";
      const date = new Date();
      date.setDate(date.getDate() - date.getDay() + i + 1); // Monday is 1, Sunday is 7

      schedule.push({
        date: date.toISOString().split("T")[0],
        shift: randomShift,
        hours: hoursMap[randomShift],
      });
    }

    return schedule;
  }

  // Filter staff based on department and role
  const filteredStaff = staff.filter((member) => {
    return (
      (filterDepartment === "all" || member.department === filterDepartment) &&
      (filterRole === "all" || member.role === filterRole)
    );
  });

  // Get department name by ID
  const getDepartmentName = (id: string) => {
    const department = departments.find((dept) => dept.id === id);
    return department ? department.name : "Unknown";
  };

  // Get the color for the shift
  const getShiftColor = (shift: string) => {
    switch (shift) {
      case "morning":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "afternoon":
        return "bg-green-100 text-green-800 border-green-200";
      case "night":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "off":
        return "bg-gray-100 text-gray-500 border-gray-200";
      default:
        return "bg-gray-100 text-gray-500 border-gray-200";
    }
  };

  // Format date as day name (e.g., "Mon")
  const formatDayName = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  // Format date as month/day (e.g., "10/24")
  const formatDayDate = (date: Date) => {
    return `${date.getMonth() + 1}/${date.getDate()}`;
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

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-blue-50 p-6 overflow-x-auto">
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
              Staff Scheduling
            </h1>
            <p className="text-sm text-gray-500">
              Manage staff schedules, specialties, and certifications
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center space-x-2 bg-white rounded-md shadow-sm p-1">
              <button
                onClick={() => setCurrentView("calendar")}
                className={`px-3 py-1 rounded ${
                  currentView === "calendar"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Calendar
              </button>
              <button
                onClick={() => setCurrentView("list")}
                className={`px-3 py-1 rounded ${
                  currentView === "list"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                List
              </button>
            </div>
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
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
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm"
            >
              <option value="all">All Roles</option>
              <option value="Physician">Physicians</option>
              <option value="Nurse">Nurses</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Add Staff
            </button>
          </div>
        </motion.div>

        {/* Week Selector */}
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center"
        >
          <button className="p-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <svg
              className="h-5 w-5 text-gray-500"
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
          </button>
          <h2 className="text-lg font-medium text-gray-900">
            {currentWeek.length > 0 ? (
              <>
                {new Date(currentWeek[0]).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}{" "}
                -{" "}
                {new Date(currentWeek[6]).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </>
            ) : (
              "Current Week"
            )}
          </h2>
          <button className="p-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <svg
              className="h-5 w-5 text-gray-500"
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
        </motion.div>

        {/* Calendar View */}
        {currentView === "calendar" && (
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-64"
                    >
                      Staff
                    </th>
                    {currentWeek.map((date, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-32"
                      >
                        <div>{formatDayName(date)}</div>
                        <div className="text-gray-800 font-bold">
                          {formatDayDate(date)}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredStaff.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={member.avatar}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div
                              className="text-sm font-medium text-blue-600 cursor-pointer hover:underline"
                              onClick={() => {
                                setSelectedStaff(member);
                                setShowingStaffDetails(true);
                              }}
                            >
                              {member.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {member.role} •{" "}
                              {getDepartmentName(member.department)}
                            </div>
                          </div>
                        </div>
                      </td>
                      {member.schedule.map((day, index) => (
                        <td
                          key={index}
                          className="px-6 py-4 whitespace-nowrap text-center"
                        >
                          <div
                            className={`inline-block px-2 py-1 rounded border ${getShiftColor(
                              day.shift
                            )}`}
                          >
                            <div className="text-xs font-medium capitalize">
                              {day.shift}
                            </div>
                            <div className="text-xs">
                              {day.hours !== "-" ? day.hours : ""}
                            </div>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* List View */}
        {currentView === "list" && (
          <motion.div variants={itemVariants} className="space-y-4">
            {filteredStaff.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={member.avatar}
                      alt=""
                    />
                    <div className="ml-4">
                      <div
                        className="text-lg font-medium text-blue-600 cursor-pointer hover:underline"
                        onClick={() => {
                          setSelectedStaff(member);
                          setShowingStaffDetails(true);
                        }}
                      >
                        {member.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {member.role} • {getDepartmentName(member.department)}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {specialty}
                      </span>
                    ))}
                    {member.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-7 gap-2">
                  {member.schedule.map((day, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xs font-medium text-gray-500">
                        {formatDayName(currentWeek[index])}
                      </div>
                      <div
                        className={`mt-1 p-2 rounded border ${getShiftColor(
                          day.shift
                        )}`}
                      >
                        <div className="text-xs font-medium capitalize">
                          {day.shift}
                        </div>
                        <div className="text-xs">
                          {day.hours !== "-" ? day.hours : ""}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Staff Detail Modal */}
        {showingStaffDetails && selectedStaff && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={selectedStaff.avatar}
                      alt=""
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-medium text-gray-900">
                        {selectedStaff.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {selectedStaff.role} •{" "}
                        {getDepartmentName(selectedStaff.department)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowingStaffDetails(false)}
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

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedStaff.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Certifications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedStaff.certifications.map((cert, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                    Schedule
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-7 gap-2">
                      {selectedStaff.schedule.map((day, index) => (
                        <div key={index} className="text-center">
                          <div className="text-xs font-medium text-gray-500">
                            {formatDayName(currentWeek[index])}
                          </div>
                          <div className="text-xs text-gray-400">
                            {formatDayDate(currentWeek[index])}
                          </div>
                          <div
                            className={`mt-1 p-2 rounded border ${getShiftColor(
                              day.shift
                            )}`}
                          >
                            <div className="text-xs font-medium capitalize">
                              {day.shift}
                            </div>
                            <div className="text-xs">
                              {day.hours !== "-" ? day.hours : ""}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    Edit Schedule
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Update Profile
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
