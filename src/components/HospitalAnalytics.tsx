"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnalyticMetric {
  title: string;
  value: string | number;
  change: string;
  trend: "positive" | "negative" | "neutral";
  icon: React.ReactNode;
}

interface ChartData {
  label: string;
  value: number;
}

interface PredictionData {
  date: string;
  predicted: number;
  actual?: number;
}

export default function HospitalAnalytics() {
  const [isLoading, setIsLoading] = useState(true);
  const [metrics, setMetrics] = useState<AnalyticMetric[]>([]);
  const [departmentOccupancy, setDepartmentOccupancy] = useState<ChartData[]>(
    []
  );
  const [admissionTrend, setAdmissionTrend] = useState<ChartData[]>([]);
  const [admissionPrediction, setAdmissionPrediction] = useState<
    PredictionData[]
  >([]);
  const [timeRange, setTimeRange] = useState<"weekly" | "monthly" | "yearly">(
    "monthly"
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Mock metrics data
      const metricsData: AnalyticMetric[] = [
        {
          title: "Bed Occupancy",
          value: "78%",
          change: "+5.2%",
          trend: "negative",
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          ),
        },
        {
          title: "Avg Length of Stay",
          value: "4.3 days",
          change: "-0.8 days",
          trend: "positive",
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          ),
        },
        {
          title: "Emergency Visits",
          value: "243",
          change: "+12.5%",
          trend: "negative",
          icon: (
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
        },
        {
          title: "Patient Satisfaction",
          value: "91%",
          change: "+2.1%",
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
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
        },
      ];

      // Mock department occupancy data
      const departmentOccupancyData: ChartData[] = [
        { label: "Emergency", value: 85 },
        { label: "ICU", value: 92 },
        { label: "Surgery", value: 68 },
        { label: "Pediatrics", value: 72 },
        { label: "Cardiology", value: 78 },
        { label: "Obstetrics", value: 64 },
        { label: "Neurology", value: 57 },
      ];

      // Mock admission trend data
      const admissionTrendData: ChartData[] = [
        { label: "Jan", value: 320 },
        { label: "Feb", value: 350 },
        { label: "Mar", value: 410 },
        { label: "Apr", value: 380 },
        { label: "May", value: 390 },
        { label: "Jun", value: 420 },
        { label: "Jul", value: 450 },
        { label: "Aug", value: 470 },
        { label: "Sep", value: 440 },
        { label: "Oct", value: 420 },
        { label: "Nov", value: 380 },
        { label: "Dec", value: 410 },
      ];

      // Mock admission prediction data
      const admissionPredictionData: PredictionData[] = [
        { date: "Jan 1", predicted: 320, actual: 325 },
        { date: "Feb 1", predicted: 340, actual: 350 },
        { date: "Mar 1", predicted: 400, actual: 410 },
        { date: "Apr 1", predicted: 390, actual: 380 },
        { date: "May 1", predicted: 380, actual: 390 },
        { date: "Jun 1", predicted: 430, actual: 420 },
        { date: "Jul 1", predicted: 460, actual: 450 },
        { date: "Aug 1", predicted: 450, actual: 470 },
        { date: "Sep 1", predicted: 430, actual: 440 },
        { date: "Oct 1", predicted: 410, actual: 420 },
        { date: "Nov 1", predicted: 390, actual: 380 },
        { date: "Dec 1", predicted: 400 },
      ];

      setMetrics(metricsData);
      setDepartmentOccupancy(departmentOccupancyData);
      setAdmissionTrend(admissionTrendData);
      setAdmissionPrediction(admissionPredictionData);
      setIsLoading(false);
    };

    fetchData();
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

  // Find the max value in a dataset for scaling
  const getMaxValue = (data: ChartData[] | PredictionData[]) => {
    let max = 0;
    data.forEach((item) => {
      if ("value" in item && item.value > max) max = item.value;
      if ("predicted" in item && item.predicted > max) max = item.predicted;
      if ("actual" in item && item.actual && item.actual > max)
        max = item.actual;
    });
    return max;
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
              Hospital Analytics
            </h1>
            <p className="text-sm text-gray-500">
              Monitor performance metrics and predictive insights
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white rounded-md shadow-sm p-1">
              <button
                onClick={() => setTimeRange("weekly")}
                className={`px-3 py-1 rounded ${
                  timeRange === "weekly"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Weekly
              </button>
              <button
                onClick={() => setTimeRange("monthly")}
                className={`px-3 py-1 rounded ${
                  timeRange === "monthly"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setTimeRange("yearly")}
                className={`px-3 py-1 rounded ${
                  timeRange === "yearly"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Yearly
              </button>
            </div>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <svg
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Export Report
            </button>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric, index) => (
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
                      : "text-red-600"
                  }`}
                >
                  {metric.change}
                </span>{" "}
                <span className="text-sm text-gray-500">from last period</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Department Occupancy Chart */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Department Bed Occupancy
            </h2>
            <div className="mt-4 space-y-3">
              {departmentOccupancy.map((dept, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">
                      {dept.label}
                    </span>
                    <span className="text-sm font-semibold">{dept.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        dept.value > 90
                          ? "bg-red-600"
                          : dept.value > 75
                          ? "bg-yellow-500"
                          : "bg-green-600"
                      }`}
                      style={{ width: `${dept.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Admission Trend Chart */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Monthly Patient Admissions
            </h2>
            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-end px-2">
                {admissionTrend.map((month, index) => {
                  const height =
                    (month.value / getMaxValue(admissionTrend)) * 100;
                  return (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div
                        className="w-full bg-blue-500 rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                      <div className="text-xs text-gray-500 mt-1">
                        {month.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Predictive Analytics */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">
                Admission Predictions
              </h2>
              <div className="flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                <svg
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                AI Predicted
              </div>
            </div>
            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-end px-2">
                {admissionPrediction.map((data, index) => {
                  const maxValue = getMaxValue(admissionPrediction);
                  const predictedHeight = (data.predicted / maxValue) * 100;
                  const actualHeight = data.actual
                    ? (data.actual / maxValue) * 100
                    : 0;

                  return (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div className="relative w-full h-full flex items-end">
                        {/* Predicted bar */}
                        <div
                          className="w-5 bg-blue-300 rounded-t mx-auto"
                          style={{ height: `${predictedHeight}%` }}
                        ></div>

                        {/* Actual bar (if data exists) */}
                        {data.actual && (
                          <div
                            className="w-5 bg-blue-600 rounded-t absolute inset-x-0 mx-auto"
                            style={{ height: `${actualHeight}%` }}
                          ></div>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {data.date}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-6 text-sm">
              <div className="flex items-center">
                <div className="h-3 w-3 bg-blue-300 mr-2"></div>
                <span>Predicted</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 bg-blue-600 mr-2"></div>
                <span>Actual</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Financial Metrics */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Financial Performance
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expenses
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Profit
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Change
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Emergency
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    $824,500
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    $625,800
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-green-600">
                    $198,700
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">
                    +8.3%
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Surgery
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    $1,284,300
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    $952,100
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-green-600">
                    $332,200
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">
                    +12.5%
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Cardiology
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    $976,200
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    $745,800
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-green-600">
                    $230,400
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">
                    +5.7%
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Obstetrics
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    $645,900
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    $520,300
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-green-600">
                    $125,600
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">
                    -2.1%
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Pediatrics
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    $542,700
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    $387,200
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-green-600">
                    $155,500
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">
                    +4.2%
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                    Total
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">
                    $4,273,600
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">
                    $3,231,200
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-green-600">
                    $1,042,400
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-green-600">
                    +7.3%
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
