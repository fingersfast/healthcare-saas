"use client";

import React, { useEffect, useRef } from "react";
import DashboardMockup from "./DashboardMockup";
import PatientManagementMockup from "./PatientManagementMockup";
import AppointmentSchedulingMockup from "./AppointmentSchedulingMockup";
import MedicalRecordsMockup from "./MedicalRecordsMockup";

export default function MockupRenderer() {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const patientsRef = useRef<HTMLDivElement>(null);
  const schedulingRef = useRef<HTMLDivElement>(null);
  const recordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is where we would implement the actual screenshot capture logic
    // For now, we'll just render the mockups
    console.log("Mockups rendered and ready for capture");
  }, []);

  return (
    <div className="hidden">
      <div ref={dashboardRef} className="w-[1200px] h-[800px]">
        <DashboardMockup />
      </div>
      <div ref={patientsRef} className="w-[1200px] h-[800px]">
        <PatientManagementMockup />
      </div>
      <div ref={schedulingRef} className="w-[1200px] h-[800px]">
        <AppointmentSchedulingMockup />
      </div>
      <div ref={recordsRef} className="w-[1200px] h-[800px]">
        <MedicalRecordsMockup />
      </div>
    </div>
  );
}
