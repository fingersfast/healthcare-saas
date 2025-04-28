"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  resource: string;
  ipAddress: string;
  status: "success" | "warning" | "error";
}

interface SecurityMetric {
  title: string;
  value: string;
  change: string;
  trend: "positive" | "negative" | "neutral";
  icon: React.ReactNode;
}

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  userCount: number;
}

export default function SecurityDashboard() {
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [securityMetrics, setSecurityMetrics] = useState<SecurityMetric[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"overview" | "audit" | "roles">(
    "overview"
  );
  const [timeRange, setTimeRange] = useState<"24h" | "7d" | "30d">("7d");

  useEffect(() => {
    const fetchSecurityData = async () => {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Mock security metrics
      setSecurityMetrics([
        {
          title: "Security Score",
          value: "94%",
          change: "+2.5%",
          trend: "positive",
          icon: (
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          ),
        },
        {
          title: "Active Sessions",
          value: "187",
          change: "+12.3%",
          trend: "neutral",
          icon: (
            <svg
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ),
        },
        {
          title: "Failed Logins",
          value: "7",
          change: "-3.5%",
          trend: "positive",
          icon: (
            <svg
              className="h-6 w-6 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          ),
        },
        {
          title: "Data Encryption",
          value: "100%",
          change: "0%",
          trend: "neutral",
          icon: (
            <svg
              className="h-6 w-6 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          ),
        },
      ]);

      // Mock audit logs
      setAuditLogs([
        {
          id: "1",
          timestamp: "2023-10-24 14:32:15",
          user: "Dr. Sarah Johnson",
          action: "View",
          resource: "Patient Record #12587",
          ipAddress: "192.168.1.45",
          status: "success",
        },
        {
          id: "2",
          timestamp: "2023-10-24 14:15:22",
          user: "Admin User",
          action: "Update",
          resource: "System Settings",
          ipAddress: "192.168.1.10",
          status: "success",
        },
        {
          id: "3",
          timestamp: "2023-10-24 13:45:10",
          user: "Nurse Practitioner",
          action: "Create",
          resource: "New Appointment",
          ipAddress: "192.168.1.101",
          status: "success",
        },
        {
          id: "4",
          timestamp: "2023-10-24 12:37:05",
          user: "Unknown User",
          action: "Login Attempt",
          resource: "Admin Portal",
          ipAddress: "203.45.78.32",
          status: "error",
        },
        {
          id: "5",
          timestamp: "2023-10-24 12:22:18",
          user: "Dr. Michael Chen",
          action: "Export",
          resource: "Lab Results",
          ipAddress: "192.168.1.87",
          status: "warning",
        },
        {
          id: "6",
          timestamp: "2023-10-24 11:18:42",
          user: "Front Desk Staff",
          action: "Update",
          resource: "Patient Contact Information",
          ipAddress: "192.168.1.56",
          status: "success",
        },
        {
          id: "7",
          timestamp: "2023-10-24 10:47:31",
          user: "System",
          action: "Backup",
          resource: "Database",
          ipAddress: "192.168.1.5",
          status: "success",
        },
      ]);

      // Mock roles
      setRoles([
        {
          id: "1",
          name: "Administrator",
          description: "Full system access and management",
          permissions: [
            "manage_users",
            "view_all_records",
            "edit_settings",
            "manage_roles",
            "audit_logs",
          ],
          userCount: 3,
        },
        {
          id: "2",
          name: "Physician",
          description: "Manage patients and medical records",
          permissions: [
            "view_patients",
            "edit_medical_records",
            "manage_prescriptions",
            "schedule_appointments",
          ],
          userCount: 24,
        },
        {
          id: "3",
          name: "Nurse",
          description: "Assist with patient care and record keeping",
          permissions: [
            "view_patients",
            "update_vitals",
            "administer_medications",
            "view_appointments",
          ],
          userCount: 45,
        },
        {
          id: "4",
          name: "Front Desk",
          description: "Manage appointments and patient information",
          permissions: [
            "schedule_appointments",
            "update_patient_info",
            "collect_payments",
            "check_in_patients",
          ],
          userCount: 12,
        },
        {
          id: "5",
          name: "Lab Technician",
          description: "Manage lab results and testing",
          permissions: ["view_orders", "update_lab_results", "manage_samples"],
          userCount: 8,
        },
      ]);

      setIsLoading(false);
    };

    fetchSecurityData();
  }, [timeRange]);

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
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-blue-50 p-6 relative overflow-x-auto">
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
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Security Dashboard
            </h1>
            <p className="text-sm text-gray-500">
              Monitor, audit, and manage system security
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              HIPAA Compliant
            </div>
            <select
              value={timeRange}
              onChange={(e) =>
                setTimeRange(e.target.value as "24h" | "7d" | "30d")
              }
              className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          variants={itemVariants}
          className="border-b border-gray-200"
        >
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "overview"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } transition-colors duration-150`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("audit")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "audit"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } transition-colors duration-150`}
            >
              Audit Logs
            </button>
            <button
              onClick={() => setActiveTab("roles")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "roles"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } transition-colors duration-150`}
            >
              Role Management
            </button>
          </nav>
        </motion.div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <>
            {/* HIPAA Compliance */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
            >
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                HIPAA Compliance Status
              </h2>
              <div className="flex flex-wrap gap-4">
                <div className="bg-green-50 p-4 rounded-lg flex items-start space-x-3 flex-1 min-w-[250px]">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Data Encryption
                    </h3>
                    <p className="text-sm text-gray-600">
                      All data encrypted at rest and in transit
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg flex items-start space-x-3 flex-1 min-w-[250px]">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Access Controls
                    </h3>
                    <p className="text-sm text-gray-600">
                      Role-based access control implemented
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg flex items-start space-x-3 flex-1 min-w-[250px]">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Audit Logging</h3>
                    <p className="text-sm text-gray-600">
                      Comprehensive audit trail in place
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg flex items-start space-x-3 flex-1 min-w-[250px]">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Automatic Logouts
                    </h3>
                    <p className="text-sm text-gray-600">
                      Sessions time out after 15 minutes of inactivity
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Security Metrics */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {securityMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        {metric.title}
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-gray-900">
                        {metric.value}
                      </p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center">
                      {metric.icon}
                    </div>
                  </div>
                  <div className="mt-2">
                    <span
                      className={`text-sm font-medium ${
                        metric.trend === "positive"
                          ? "text-green-600"
                          : metric.trend === "negative"
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      {metric.change}
                    </span>{" "}
                    <span className="text-sm text-gray-500">
                      from last period
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </>
        )}

        {activeTab === "audit" && (
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Audit Logs</h2>
              <div className="flex space-x-2">
                <button className="border border-gray-300 rounded-md px-3 py-1 text-sm bg-white hover:bg-gray-50">
                  Export
                </button>
                <button className="border border-gray-300 rounded-md px-3 py-1 text-sm bg-white hover:bg-gray-50">
                  Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Timestamp
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Resource
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      IP Address
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {auditLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {log.timestamp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {log.user}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {log.action}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {log.resource}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {log.ipAddress}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            log.status === "success"
                              ? "bg-green-100 text-green-800"
                              : log.status === "warning"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === "roles" && (
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">
                Role Management
              </h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                Add New Role
              </button>
            </div>
            <div className="space-y-4">
              {roles.map((role) => (
                <div
                  key={role.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {role.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {role.description}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        Edit
                      </button>
                      <span className="text-gray-300">|</span>
                      <button className="text-red-600 hover:text-red-800">
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-600 mb-2">
                      Users:{" "}
                      <span className="font-medium">{role.userCount}</span>
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {role.permissions.map((permission, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                          {permission.replace(/_/g, " ")}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
