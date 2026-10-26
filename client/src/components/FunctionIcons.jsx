import React from 'react';

// Dedicated high-fidelity custom SVG icons matching the exact visual style from the user screenshot

export function SpeedMeasurementIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="26" fill="#f0f7ff" stroke="#b9dcff" strokeWidth="1.5" />
      <path d="M18 42 A18 18 0 1 1 46 42" stroke="#0071e3" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 3" />
      <path d="M18 42 A18 18 0 0 1 36 14" stroke="#00c7be" strokeWidth="3.5" strokeLinecap="round" />
      {/* Gauge needle */}
      <circle cx="32" cy="32" r="4.5" fill="#0d2c6c" />
      <path d="M32 32 L41 21" stroke="#0d2c6c" strokeWidth="2.5" strokeLinecap="round" />
      {/* Alert exclamation badge */}
      <polygon points="44,48 40,55 48,55" fill="#ff9500" stroke="#ffffff" strokeWidth="1.2" />
      <path d="M44 50v2M44 53.5v0.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function ViolationDetectionIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Parking spot lines */}
      <path d="M14 48 L14 26 L22 26" stroke="#00c7be" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 48 L50 26 L42 26" stroke="#00c7be" strokeWidth="2" strokeLinecap="round" />
      {/* Car body */}
      <rect x="20" y="32" width="24" height="14" rx="4" fill="#0d2c6c" />
      <path d="M23 32 L26 23 L38 23 L41 32 Z" fill="#2b5998" />
      <circle cx="24" cy="46" r="3" fill="#1d1d1f" />
      <circle cx="40" cy="46" r="3" fill="#1d1d1f" />
      <circle cx="23" cy="36" r="1.8" fill="#ffd60a" />
      <circle cx="41" cy="36" r="1.8" fill="#ffd60a" />
      {/* Parking Violation badge */}
      <circle cx="45" cy="19" r="8" fill="#ffffff" stroke="#0071e3" strokeWidth="1.8" />
      <text x="45" y="23" fill="#0071e3" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">P</text>
    </svg>
  );
}

export function VehicleInfoDetectionIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Radar waves around vehicle */}
      <circle cx="32" cy="32" r="25" stroke="#00c7be" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
      <circle cx="32" cy="32" r="19" stroke="#0071e3" strokeWidth="1.5" strokeOpacity="0.4" />
      {/* Car front silhouette */}
      <rect x="20" y="28" width="24" height="14" rx="4" fill="#0d2c6c" />
      <path d="M23 28 L26 20 L38 20 L41 28 Z" fill="#3b72b9" />
      <circle cx="23" cy="34" r="2.2" fill="#00c7be" />
      <circle cx="41" cy="34" r="2.2" fill="#00c7be" />
      <rect x="27" y="36" width="10" height="3" rx="1" fill="#ffffff" />
      {/* Top and bottom scan brackets */}
      <path d="M22 15 L32 12 L42 15" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 49 L32 52 L42 49" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IncidentDetectionIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tunnel Arch */}
      <path d="M16 48 L16 32 C16 20 48 20 48 32 L48 48" stroke="#0071e3" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 48 L20 34 C20 24 44 24 44 34 L44 48" fill="#e8f3ff" />
      {/* Car in tunnel */}
      <rect x="24" y="36" width="16" height="9" rx="2.5" fill="#0d2c6c" />
      <path d="M26 36 L28 30 L36 30 L38 36 Z" fill="#2b5998" />
      <circle cx="26" cy="40" r="1.5" fill="#ff453a" />
      <circle cx="38" cy="40" r="1.5" fill="#ff453a" />
      {/* Warning Alert Icon */}
      <polygon points="32,15 28,23 36,23" fill="#ff9500" stroke="#ffffff" strokeWidth="1" />
      <path d="M32 17v3M32 21.5v0.5" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function PortableEnforcementIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tripod legs */}
      <path d="M32 34 L21 54" stroke="#0d2c6c" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 34 L43 54" stroke="#0d2c6c" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 34 L32 54" stroke="#0d2c6c" strokeWidth="2.5" strokeLinecap="round" />
      {/* Radar Speed Camera Box */}
      <rect x="22" y="18" width="20" height="15" rx="3.5" fill="#0071e3" />
      <circle cx="28" cy="25" r="4" fill="#ffffff" stroke="#0d2c6c" strokeWidth="1.5" />
      <circle cx="28" cy="25" r="2" fill="#00c7be" />
      <circle cx="37" cy="23" r="1.8" fill="#ffd60a" />
      {/* Wireless signal waves */}
      <path d="M44 16 A6 6 0 0 1 48 24" stroke="#00c7be" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M47 13 A10 10 0 0 1 52 26" stroke="#00c7be" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function PerimeterProtectionIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Fence / Zone Polygon */}
      <polygon points="16,22 48,16 44,48 20,44" fill="#e8f3ff" stroke="#0071e3" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="16" cy="22" r="3" fill="#0071e3" />
      <circle cx="48" cy="16" r="3" fill="#0071e3" />
      <circle cx="44" cy="48" r="3" fill="#0071e3" />
      <circle cx="20" cy="44" r="3" fill="#0071e3" />
      {/* Intrusion Warning Shield */}
      <polygon points="32,24 40,28 38,38 32,42 26,38 24,28" fill="#ff453a" />
      <path d="M32 29v4M32 35.5v0.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function TimeAttendanceIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Calendar Card */}
      <rect x="15" y="16" width="34" height="34" rx="6" fill="#0071e3" />
      <rect x="15" y="24" width="34" height="26" rx="2" fill="#ffffff" />
      <rect x="22" y="12" width="4" height="6" rx="2" fill="#0d2c6c" />
      <rect x="38" y="12" width="4" height="6" rx="2" fill="#0d2c6c" />
      {/* Checkmarks / Attendance Grid */}
      <circle cx="23" cy="31" r="2.2" fill="#00c7be" />
      <circle cx="32" cy="31" r="2.2" fill="#00c7be" />
      <circle cx="41" cy="31" r="2.2" fill="#00c7be" />
      <circle cx="23" cy="39" r="2.2" fill="#00c7be" />
      <circle cx="32" cy="39" r="2.2" fill="#00c7be" />
      {/* Employee Avatar Badge */}
      <circle cx="45" cy="45" r="9" fill="#0d2c6c" stroke="#ffffff" strokeWidth="1.8" />
      <circle cx="45" cy="42" r="3" fill="#ffffff" />
      <path d="M39 49 C39 46 51 46 51 49" fill="#ffffff" />
    </svg>
  );
}

export function AccessControlIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Access Gate / Doorway */}
      <rect x="14" y="14" width="10" height="36" rx="2" fill="#0071e3" />
      <rect x="40" y="14" width="10" height="36" rx="2" fill="#0071e3" />
      {/* Open Turnstile Wings */}
      <path d="M24 28 L30 35 L24 42" stroke="#00c7be" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 28 L34 35 L40 42" stroke="#00c7be" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Person walking through */}
      <circle cx="32" cy="22" r="3.5" fill="#0d2c6c" />
      <path d="M32 26 L32 36 L27 46M32 36 L37 46" stroke="#0d2c6c" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M26 31 L32 29 L38 31" stroke="#0d2c6c" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PeopleCountingIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Two people silhouettes */}
      <circle cx="24" cy="28" r="4.5" fill="#0071e3" />
      <path d="M16 46 C16 38 32 38 32 46" fill="#0071e3" />
      <circle cx="38" cy="28" r="4.5" fill="#0d2c6c" />
      <path d="M30 46 C30 38 46 38 46 46" fill="#0d2c6c" />
      {/* Counter Badge with '001' */}
      <rect x="20" y="12" width="24" height="10" rx="3" fill="#00c7be" />
      <text x="32" y="19.5" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">001</text>
    </svg>
  );
}

export function EntranceExitIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Boom barrier post */}
      <rect x="42" y="24" width="7" height="26" rx="2" fill="#0d2c6c" />
      {/* Barrier gate arm */}
      <path d="M42 28 L14 18" stroke="#ff3b30" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 28 L14 18" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" />
      {/* Vehicle approaching */}
      <rect x="14" y="34" width="22" height="14" rx="3" fill="#0071e3" />
      <circle cx="18" cy="48" r="2.5" fill="#1d1d1f" />
      <circle cx="31" cy="48" r="2.5" fill="#1d1d1f" />
      <circle cx="34" cy="38" r="1.5" fill="#ffd60a" />
    </svg>
  );
}

export function VisitorManagementIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Face Scan Bounding Frame */}
      <path d="M16 22 L16 16 L22 16" stroke="#0071e3" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M48 22 L48 16 L42 16" stroke="#0071e3" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M16 42 L16 48 L22 48" stroke="#0071e3" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M48 42 L48 48 L42 48" stroke="#0071e3" strokeWidth="2.5" strokeLinecap="round" />
      {/* Visitor avatar */}
      <circle cx="32" cy="27" r="6" fill="#0d2c6c" />
      <path d="M22 45 C22 37 42 37 42 45" fill="#0071e3" />
      {/* RFID Visitor Badge badge */}
      <rect x="27" y="42" width="10" height="7" rx="1.5" fill="#00c7be" stroke="#ffffff" strokeWidth="1" />
      <line x1="32" y1="38" x2="32" y2="42" stroke="#0d2c6c" strokeWidth="1.2" />
    </svg>
  );
}

export function LineHaulManagementIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Freight Cargo Container Frame */}
      <rect x="12" y="18" width="40" height="28" rx="4" fill="#e8f3ff" stroke="#0071e3" strokeWidth="1.8" strokeDasharray="3 3" />
      {/* Transport Truck */}
      <rect x="16" y="24" width="20" height="15" rx="2" fill="#0d2c6c" />
      <rect x="36" y="28" width="10" height="11" rx="2" fill="#00c7be" />
      <circle cx="22" cy="42" r="3" fill="#1d1d1f" />
      <circle cx="31" cy="42" r="3" fill="#1d1d1f" />
      <circle cx="42" cy="42" r="3" fill="#1d1d1f" />
      {/* Route Arrow */}
      <path d="M22 14 L42 14 M38 11 L43 14 L38 17" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StudentAttendanceIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Attendance Board */}
      <rect x="15" y="16" width="34" height="34" rx="5" fill="#0071e3" />
      <rect x="15" y="23" width="34" height="27" rx="2" fill="#ffffff" />
      {/* Checkmarks */}
      <path d="M20 29 L23 32 L28 27" stroke="#00c7be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 37 L23 40 L28 35" stroke="#00c7be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Student with Grad Cap */}
      <circle cx="43" cy="38" r="4.5" fill="#0d2c6c" />
      <path d="M35 48 C35 44 51 44 51 48" fill="#0d2c6c" />
      {/* Graduation Cap */}
      <polygon points="43,28 35,31 43,34 51,31" fill="#0d2c6c" />
      <rect x="39" y="33" width="8" height="3" fill="#0d2c6c" />
      <path d="M51 31 L53 35" stroke="#ff9500" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function ParcelTrackingIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cardboard Box isometric */}
      <path d="M32 20 L48 28 L32 36 L16 28 Z" fill="#b9dcff" stroke="#0071e3" strokeWidth="1.5" />
      <path d="M16 28 L32 36 L32 50 L16 42 Z" fill="#0071e3" />
      <path d="M48 28 L32 36 L32 50 L48 42 Z" fill="#0d2c6c" />
      {/* Tape on Box */}
      <path d="M24 24 L32 28 L40 24" stroke="#ffffff" strokeWidth="1.5" />
      {/* Circular Crosshair Tracking Ring */}
      <circle cx="32" cy="34" r="18" stroke="#00c7be" strokeWidth="1.8" strokeDasharray="3 3" />
      <circle cx="32" cy="34" r="3" fill="#00c7be" />
    </svg>
  );
}

export function DockManagementIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Warehouse Logistics Dock Bay */}
      <path d="M14 36 L14 18 L32 12 L50 18 L50 36" fill="#e8f3ff" stroke="#0071e3" strokeWidth="2" />
      <rect x="22" y="20" width="20" height="16" fill="#b9dcff" stroke="#0071e3" strokeWidth="1.5" />
      <line x1="22" y1="24" x2="42" y2="24" stroke="#0071e3" strokeWidth="1" />
      <line x1="22" y1="28" x2="42" y2="28" stroke="#0071e3" strokeWidth="1" />
      <line x1="22" y1="32" x2="42" y2="32" stroke="#0071e3" strokeWidth="1" />
      {/* Cargo Truck docked */}
      <rect x="20" y="34" width="24" height="14" rx="2" fill="#0d2c6c" />
      <circle cx="26" cy="49" r="2.5" fill="#1d1d1f" />
      <circle cx="38" cy="49" r="2.5" fill="#1d1d1f" />
    </svg>
  );
}

export function DistanceLearningIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Computer Screen */}
      <rect x="14" y="16" width="36" height="24" rx="3.5" fill="#0d2c6c" stroke="#0071e3" strokeWidth="1.8" />
      <rect x="17" y="19" width="30" height="18" fill="#e8f3ff" />
      {/* Stand */}
      <path d="M32 40 L32 46 M24 46 L40 46" stroke="#0d2c6c" strokeWidth="2" strokeLinecap="round" />
      {/* Online Teacher Avatar */}
      <circle cx="26" cy="26" r="3" fill="#0071e3" />
      <path d="M21 34 C21 30 31 30 31 34" fill="#0071e3" />
      {/* Video Call Widget */}
      <rect x="35" y="21" width="9" height="7" rx="1.5" fill="#00c7be" />
      <circle cx="32" cy="17.5" r="1" fill="#00c7be" />
    </svg>
  );
}

export function InformationDisplayIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Big Commercial Display Screen */}
      <rect x="14" y="18" width="36" height="24" rx="3" fill="#0d2c6c" />
      <rect x="16" y="20" width="32" height="20" fill="#ffffff" />
      {/* Analytics chart inside display */}
      <rect x="19" y="29" width="4" height="8" rx="1" fill="#0071e3" />
      <rect x="25" y="25" width="4" height="12" rx="1" fill="#00c7be" />
      <rect x="31" y="23" width="4" height="14" rx="1" fill="#0071e3" />
      <path d="M19 26 L26 22 L32 24 L42 20" stroke="#ff9500" strokeWidth="1.8" strokeLinecap="round" />
      {/* Floor stand mount */}
      <path d="M26 44 L38 44 M32 42 L32 46" stroke="#0d2c6c" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function RemoteClassroomInspectionIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Classroom building */}
      <path d="M16 28 L32 16 L48 28 L48 46 L16 46 Z" fill="#e8f3ff" stroke="#0071e3" strokeWidth="1.8" />
      <rect x="28" y="32" width="8" height="14" fill="#0d2c6c" />
      <rect x="20" y="32" width="5" height="5" fill="#00c7be" />
      <rect x="39" y="32" width="5" height="5" fill="#00c7be" />
      {/* Inspection Magnifying Glass */}
      <circle cx="44" cy="42" r="7" fill="#ffffff" stroke="#0071e3" strokeWidth="2" />
      <line x1="49" y1="47" x2="55" y2="53" stroke="#0071e3" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M42 42 L46 42" stroke="#00c7be" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IntelligentInspectionIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Route Trajectory Curve */}
      <path d="M18 42 C18 28 32 30 32 22 C32 16 46 16 46 26" stroke="#0071e3" strokeWidth="2.5" strokeLinecap="round" fill="none" strokeDasharray="3 3" />
      {/* Inspection waypoints */}
      <circle cx="18" cy="42" r="4" fill="#00c7be" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="32" cy="22" r="4" fill="#ff9500" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="46" cy="26" r="4" fill="#0071e3" stroke="#ffffff" strokeWidth="1.5" />
      {/* Inspection device / tablet */}
      <rect x="38" y="34" width="16" height="12" rx="2" fill="#0d2c6c" />
      <rect x="40" y="36" width="12" height="8" fill="#e8f3ff" />
      <circle cx="46" cy="40" r="1.5" fill="#00c7be" />
    </svg>
  );
}

export function ADASIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Car top-front silhouette */}
      <rect x="22" y="28" width="20" height="18" rx="4" fill="#0d2c6c" />
      <path d="M25 28 L27 20 L37 20 L39 28 Z" fill="#0071e3" />
      {/* ADAS Sensor Radar Waves beaming forward */}
      <path d="M25 16 A12 12 0 0 1 39 16" stroke="#00c7be" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 12 A18 18 0 0 1 44 12" stroke="#00c7be" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M16 8 A24 24 0 0 1 48 8" stroke="#00c7be" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      {/* Sensor Dot */}
      <circle cx="32" cy="20" r="2.5" fill="#ffd60a" />
    </svg>
  );
}

export function IndustrialThermographyIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Industrial Tank / Pipes */}
      <rect x="16" y="24" width="14" height="26" rx="3" fill="#0d2c6c" />
      <rect x="34" y="18" width="16" height="32" rx="3" fill="#0071e3" />
      <path d="M24 18 L24 24 M42 14 L42 18" stroke="#0d2c6c" strokeWidth="2" />
      {/* Radiometric Heat Map Overlay on tank */}
      <circle cx="42" cy="26" r="4.5" fill="#ff3b30" />
      <circle cx="42" cy="26" r="7" stroke="#ff9500" strokeWidth="1.5" />
      <circle cx="23" cy="34" r="3" fill="#ffd60a" />
    </svg>
  );
}

export function RadarSensorCareIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Micro-radar sensor in center */}
      <rect x="22" y="22" width="20" height="20" rx="5" fill="#0d2c6c" stroke="#0071e3" strokeWidth="2" />
      <circle cx="32" cy="32" r="4" fill="#00c7be" />
      {/* Surrounding protection wave pulses */}
      <path d="M14 26 C12 30 12 34 14 38" stroke="#00c7be" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 26 C52 30 52 34 50 38" stroke="#00c7be" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M26 14 C30 12 34 12 38 14" stroke="#00c7be" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M26 50 C30 52 34 52 38 50" stroke="#00c7be" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function ARLiveInteractionIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* User with AR Smart Goggles */}
      <circle cx="32" cy="30" r="15" fill="#e8f3ff" stroke="#0071e3" strokeWidth="1.8" />
      {/* AR Visor / Goggles */}
      <rect x="22" y="26" width="20" height="8" rx="3" fill="#0d2c6c" />
      <circle cx="27" cy="30" r="2" fill="#00c7be" />
      <circle cx="37" cy="30" r="2" fill="#00c7be" />
      {/* 3D Holographic Cube Badge */}
      <rect x="42" y="38" width="12" height="10" rx="2" fill="#0071e3" />
      <text x="48" y="45" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">3D</text>
    </svg>
  );
}

export function SolarSecurityIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Solar Panel Grid */}
      <polygon points="20,24 44,20 48,40 16,40" fill="#0071e3" stroke="#0d2c6c" strokeWidth="1.5" />
      <line x1="28" y1="22" x2="26" y2="40" stroke="#ffffff" strokeWidth="1" />
      <line x1="36" y1="21" x2="38" y2="40" stroke="#ffffff" strokeWidth="1" />
      <line x1="18" y1="32" x2="46" y2="30" stroke="#ffffff" strokeWidth="1" />
      {/* Sun / Energy Lightning Bolt Badge */}
      <circle cx="46" cy="44" r="8" fill="#ffd60a" stroke="#ffffff" strokeWidth="1.5" />
      <path d="M47 39 L43 44 L46 44 L45 49 L49 43 L46 43 Z" fill="#0d2c6c" />
    </svg>
  );
}

export function RemoteAuditIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Desktop Audit Monitor */}
      <rect x="14" y="18" width="36" height="24" rx="3" fill="#0d2c6c" />
      <rect x="17" y="21" width="30" height="18" fill="#ffffff" />
      <circle cx="32" cy="30" r="4" fill="#0071e3" />
      <path d="M21 24 H27 M21 28 H25" stroke="#00c7be" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 42 L32 48 M24 48 L40 48" stroke="#0d2c6c" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function OnboardPassengerCountingIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Transit Bus front */}
      <rect x="18" y="22" width="28" height="26" rx="4" fill="#0071e3" />
      <rect x="22" y="26" width="20" height="10" rx="2" fill="#e8f3ff" />
      <circle cx="23" cy="43" r="2.5" fill="#ffd60a" />
      <circle cx="41" cy="43" r="2.5" fill="#ffd60a" />
      <circle cx="22" cy="48" r="3" fill="#1d1d1f" />
      <circle cx="42" cy="48" r="3" fill="#1d1d1f" />
      {/* Passenger Count Badge */}
      <rect x="22" y="12" width="20" height="9" rx="2.5" fill="#00c7be" />
      <text x="32" y="18.5" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">002</text>
    </svg>
  );
}

export function GNSSTrajectoryIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Curved Road Path */}
      <path d="M14 44 C24 44 26 34 36 34 C44 34 46 24 50 20" stroke="#0071e3" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 3" />
      {/* Vehicle on path */}
      <rect x="18" y="38" width="14" height="9" rx="2" fill="#0d2c6c" />
      {/* GPS Location Pin */}
      <path d="M44 14 C40 14 38 17 38 21 C38 27 44 32 44 32 C44 32 50 27 50 21 C50 17 48 14 44 14 Z" fill="#00c7be" />
      <circle cx="44" cy="20" r="2.5" fill="#ffffff" />
    </svg>
  );
}

export function CourseRecordingIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Classroom building / blackboard */}
      <rect x="16" y="20" width="32" height="26" rx="3" fill="#e8f3ff" stroke="#0071e3" strokeWidth="1.8" />
      <rect x="22" y="24" width="20" height="12" fill="#0d2c6c" />
      {/* Auto-tracking Camera Badge */}
      <circle cx="46" cy="44" r="8" fill="#0071e3" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="46" cy="44" r="3" fill="#ffffff" />
      <circle cx="46" cy="44" r="1.5" fill="#00c7be" />
    </svg>
  );
}

export function StudentPickupIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Parent and Child holding hands */}
      <circle cx="28" cy="24" r="4.5" fill="#0071e3" />
      <path d="M20 44 C20 36 34 36 34 44" fill="#0071e3" />
      <circle cx="42" cy="30" r="3.5" fill="#0d2c6c" />
      <path d="M36 44 C36 38 48 38 48 44" fill="#0d2c6c" />
      {/* Verified check badge */}
      <circle cx="36" cy="16" r="6" fill="#00c7be" stroke="#ffffff" strokeWidth="1.5" />
      <path d="M33 16 L35 18 L39 14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
