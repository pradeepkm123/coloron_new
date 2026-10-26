import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  ArrowRight,
  CheckCircle,
  Building,
  GraduationCap,
  Zap,
  HeartPulse,
  Truck,
  ShoppingBag,
  Car,
  Eye,
  Camera,
  Layers,
  Thermometer,
  Radio,
  Bell,
  UserCheck,
  Flame,
  Search,
  Users,
  Compass,
  FileText,
  Clock,
  HardHat,
  X,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import {
  SpeedMeasurementIcon,
  ViolationDetectionIcon,
  VehicleInfoDetectionIcon,
  IncidentDetectionIcon,
  PortableEnforcementIcon,
  PerimeterProtectionIcon,
  TimeAttendanceIcon,
  AccessControlIcon,
  PeopleCountingIcon,
  EntranceExitIcon,
  VisitorManagementIcon,
  LineHaulManagementIcon,
  StudentAttendanceIcon,
  ParcelTrackingIcon,
  DockManagementIcon,
  DistanceLearningIcon,
  InformationDisplayIcon,
  RemoteClassroomInspectionIcon,
  IntelligentInspectionIcon,
  ADASIcon,
  IndustrialThermographyIcon,
  RadarSensorCareIcon,
  ARLiveInteractionIcon,
  SolarSecurityIcon,
  RemoteAuditIcon,
  OnboardPassengerCountingIcon,
  GNSSTrajectoryIcon,
  CourseRecordingIcon,
  StudentPickupIcon
} from '../components/FunctionIcons';
import { ScrollReveal } from '../components/AppleScrollAnimations';
import ContactSalesModal from '../components/ContactSalesModal';

// 1. Industry Solutions Data
const industryData = [
  {
    id: 'education',
    name: 'Education',
    tagline: 'Smart Campus & Student Safety Ecosystem',
    description:
      'Unified campus perimeter defense, automated student attendance via biometric gates, and intelligent vehicle management for school buses and parent pickups.',
    image: '/images/industry_education.jpg',
    caseStudies: [
      {
        title: 'A Secure Project of Public Spring School in Dubai',
        desc: 'Deployed 180 4K ColorSense cameras and smart turnstiles with zero-latency face authentication for 2,400 students.',
        tag: 'Case Study',
      },
      {
        title: 'Campus Perimeter Security at Western Sydney University',
        desc: 'Automated campus lockdown protocols, parking permit validation, and emergency blue-light callboxes.',
        tag: 'Higher Ed',
      },
      {
        title: 'Classroom Operations & Remote Lecture Auditing',
        desc: 'Interactive dual-lens smart tracking cameras for hybrid classrooms and automated proctoring.',
        tag: 'Smart Class',
      },
    ],
  },
  {
    id: 'commercial',
    name: 'Commercial Buildings',
    tagline: 'Frictionless Access & Intelligent Facility Management',
    description:
      'Replace obsolete keycards with mobile QR and facial credentials while optimizing HVAC and lighting through occupant dwell heatmaps.',
    image: '/images/industry_commercial.jpg',
    caseStudies: [
      {
        title: 'Global Financial Tower Elevator Dispatch',
        desc: 'Turnstile-integrated destination dispatch cuts morning elevator wait times by 42% across 54 floors.',
        tag: 'High-Rise',
      },
      {
        title: 'Corporate Headquarters Multi-Tenant Access',
        desc: 'Tenant self-service visitor passes with temporary smartphone QR codes for frictionless lobby entry.',
        tag: 'Enterprise',
      },
      {
        title: 'Underground Parking Bandwidth Optimization',
        desc: 'ColorSense 4K cameras preserve vivid color in zero-lux subterranean garages with Ultra H.265+ compression.',
        tag: 'Parking',
      },
    ],
  },
  {
    id: 'energy',
    name: 'Energy & Utilities',
    tagline: 'Radiometric Thermal Guard & High-Voltage Asset Inspection',
    description:
      'Continuous thermal thermography monitors electrical switchgear, transformers, and photovoltaic solar fields for fire risks before ignition.',
    image: '/images/industry_energy.jpg',
    caseStudies: [
      {
        title: 'Perimeter Defense at Benban 250MWp Solar Complex',
        desc: 'Bi-spectrum thermal cameras detect perimeter intrusions through desert sandstorms up to 3 kilometers away.',
        tag: 'Solar Farm',
      },
      {
        title: 'High-Voltage Electrical Substation AI Inspection',
        desc: 'Autonomous PTZ patrol checks transformer bushing temperatures every 15 minutes, alerting engineers of thermal anomalies.',
        tag: 'Substation',
      },
      {
        title: 'Hydroelectric Dam Spillway Waterflow Tracking',
        desc: 'Explosion-proof cameras monitor dam crest gates and intake valves in 100% humidity environments.',
        tag: 'Hydro Plant',
      },
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Hospitals',
    tagline: 'Sensitive Ward Security & Patient Safety Monitoring',
    description:
      'Discreet radar fall detection in senior care rooms, restricted pharmaceutical dispensary access control, and neonatal ward protection.',
    image: '/images/industry_healthcare.jpg',
    caseStudies: [
      {
        title: 'Metropolitan Hospital Emergency Department Access',
        desc: 'Instant lockdown partitions and duress alarm integration safeguard triage rooms and staff during critical incidents.',
        tag: 'Hospital',
      },
      {
        title: 'Radar Non-Invasive Patient Fall Protection',
        desc: 'Micro-radar ceiling sensors detect patient bed exits without invading patient visual privacy.',
        tag: 'Elder Care',
      },
      {
        title: 'Narcotics Storage Vault Double-Credential Access',
        desc: 'Requires dual-custody simultaneous biometric verification plus timestamped HD audit log clips.',
        tag: 'Pharmacy',
      },
    ],
  },
  {
    id: 'logistics',
    name: 'Logistics & Seaports',
    tagline: 'Intermodal Container Tracking & Autonomous Yard Management',
    description:
      'High-speed ANPR and ISO container OCR cameras streamline gate check-ins while 36x optical PTZ domes monitor extensive loading docks.',
    image: '/images/industry_logistics.jpg',
    caseStudies: [
      {
        title: 'Automated Gate System at Port of Rotterdam',
        desc: 'Processes heavy freight trucks in under 15 seconds using automated license plate and container OCR capture.',
        tag: 'Seaport',
      },
      {
        title: 'Warehouse Fulfillment Center Conveyor Audit',
        desc: 'Barcode scanner synchronization ties high-resolution video directly to shipping tracking numbers.',
        tag: 'Logistics',
      },
      {
        title: 'Cold Storage Temperature & Flare Warning',
        desc: 'Sub-zero IP67 thermal cameras detect refrigerant leaks and freezer door seals.',
        tag: 'Cold Chain',
      },
    ],
  },
  {
    id: 'retail',
    name: 'Retail Stores & Malls',
    tagline: 'Loss Prevention, Foot-Traffic Heatmaps & Cashier Auditing',
    description:
      'Combat shrink and optimize store merchandising with cashier transaction video overlay, queue detection, and customer pathing analytics.',
    image: '/images/industry_retail.jpg',
    caseStudies: [
      {
        title: 'Supermarket POS Cash Drawer Video Integration',
        desc: 'Reduces cashier sweethearting and return fraud by 68% with real-time receipt text search on video.',
        tag: 'Supermarket',
      },
      {
        title: 'Shopping Mall Foot-Traffic & Dwell Time Analytics',
        desc: 'AI heatmaps demonstrate actual shopper engagement to optimize prime lease pricing.',
        tag: 'Mall',
      },
      {
        title: 'Queue Length Floor Manager Dispatch',
        desc: 'Automated alerts notify staff to open additional registers when checkout lines exceed 4 patrons.',
        tag: 'Checkout',
      },
    ],
  },
];

// 2. Scenarios Grid Data (27 scenarios matching screenshot)
const scenarioCards = [
  {
    title: 'Apartments',
    category: 'residential',
    image: '/images/scenarios/apartments.jpg',
  },
  {
    title: 'Factories',
    category: 'industrial',
    image: '/images/scenarios/factories.jpg',
  },
  {
    title: 'Classroom Hub',
    category: 'education',
    image: '/images/scenarios/classroom_hub.jpg',
  },
  {
    title: 'Urban Roadways',
    category: 'traffic',
    image: '/images/scenarios/urban_roadways.jpg',
  },
  {
    title: 'Offices',
    category: 'commercial',
    image: '/images/scenarios/offices.jpg',
  },
  {
    title: 'Stores',
    category: 'commercial',
    image: '/images/scenarios/stores.jpg',
  },
  {
    title: 'Bus Stop',
    category: 'traffic',
    image: '/images/scenarios/bus_stop.jpg',
  },
  {
    title: 'Car Dealerships',
    category: 'commercial',
    image: '/images/scenarios/car_dealerships.jpg',
  },
  {
    title: 'Conference Rooms',
    category: 'commercial',
    image: '/images/scenarios/conference_rooms.jpg',
  },
  {
    title: 'Construction Site',
    category: 'industrial',
    image: '/images/scenarios/construction_site.jpg',
  },
  {
    title: 'Electrical Substations',
    category: 'energy',
    image: '/images/scenarios/electrical_substations.jpg',
  },
  {
    title: 'Gas Stations',
    category: 'industrial',
    image: '/images/scenarios/gas_stations.jpg',
  },
  {
    title: 'Highways',
    category: 'traffic',
    image: '/images/scenarios/highways.jpg',
  },
  {
    title: 'Hotels',
    category: 'hospitality',
    image: '/images/scenarios/hotels.jpg',
  },
  {
    title: 'Monitoring Center',
    category: 'commercial',
    image: '/images/scenarios/monitoring_center.jpg',
  },
  {
    title: 'Parking Lots',
    category: 'traffic',
    image: '/images/scenarios/parking_lots.jpg',
  },
  {
    title: 'Schools',
    category: 'education',
    image: '/images/scenarios/schools.jpg',
  },
  {
    title: 'Shopping Malls',
    category: 'commercial',
    image: '/images/scenarios/shopping_malls.jpg',
  },
  {
    title: 'Transit Bus On-board',
    category: 'traffic',
    image: '/images/scenarios/transit_bus_onboard.jpg',
  },
  {
    title: 'Warehouses',
    category: 'logistics',
    image: '/images/scenarios/warehouses.jpg',
  },
  {
    title: 'Onshore Oilfields',
    category: 'energy',
    image: '/images/scenarios/onshore_oilfields.jpg',
  },
  {
    title: 'Supermarkets',
    category: 'commercial',
    image: '/images/scenarios/supermarkets.jpg',
  },
  {
    title: 'Offshore Oil Platform',
    category: 'energy',
    image: '/images/scenarios/offshore_oil_platform.jpg',
  },
  {
    title: 'Transmission Line Inspection',
    category: 'energy',
    image: '/images/scenarios/transmission_line_inspection.jpg',
  },
  {
    title: 'Pipeline Inspection',
    category: 'energy',
    image: '/images/scenarios/pipeline_inspection.jpg',
  },
  {
    title: 'Solar Farms',
    category: 'energy',
    image: '/images/scenarios/solar_farms.jpg',
  },
  {
    title: 'Hydroelectric Power Plants',
    category: 'energy',
    image: '/images/scenarios/hydroelectric_power_plants.jpg',
  },
];

// 3. Functional Matrix Data (29 functions matching exact screenshot order)
const functionCards = [
  { id: 1, name: 'Speed Measurement', cat: 'Traffic', icon: <SpeedMeasurementIcon />, desc: 'Radar-assisted speed validation with instant violation snapshots.', route: '/solutions/speed-measurement' },
  { id: 2, name: 'Violation Detection', cat: 'Traffic', icon: <ViolationDetectionIcon />, desc: 'Detects illegal parking, wrong-way driving, and red light crossing.', route: '/solutions/violation-detection' },
  { id: 3, name: 'Vehicle Information Detection', cat: 'Traffic', icon: <VehicleInfoDetectionIcon />, desc: 'High-speed vehicle classification, make, model, and plate recognition.', route: '/solutions/vehicle-information-detection' },
  { id: 4, name: 'Incident Detection', cat: 'Traffic', icon: <IncidentDetectionIcon />, desc: 'Autonomous detection of stopped vehicles, pedestrians, debris, and wrong-way traffic.', route: '/solutions/incident-detection' },
  { id: 5, name: 'Portable Enforcement', cat: 'Traffic', icon: <PortableEnforcementIcon />, desc: 'Mobile on-demand radar and optical enforcement for dynamic policing.', route: '/solutions/portable-enforcement' },
  { id: 6, name: 'Perimeter Protection', cat: 'General', icon: <PerimeterProtectionIcon />, desc: 'Active perimeter intrusion detection distinguishing humans and vehicles.', route: '/solutions/perimeter-protection' },
  { id: 7, name: 'Time Attendance', cat: 'General', icon: <TimeAttendanceIcon />, desc: 'Accurate contactless biometric time tracking and shift scheduling.', route: '/solutions/time-attendance' },
  { id: 8, name: 'Access Control', cat: 'General', icon: <AccessControlIcon />, desc: 'Frictionless speed gate and turnstile access with multi-credential authentication.', route: '/solutions/access-control' },
  { id: 9, name: 'People Counting', cat: 'Retail', icon: <PeopleCountingIcon />, desc: 'Bi-directional optical foot traffic audit and occupancy management.', route: '/solutions/people-counting' },
  { id: 10, name: 'Entrance & Exit Management', cat: 'Traffic', icon: <EntranceExitIcon />, desc: 'Automated barrier gate management with high-speed ANPR plate verification.', route: '/solutions/entrance-exit' },
  { id: 11, name: 'Visitor Management', cat: 'General', icon: <VisitorManagementIcon />, desc: 'Frictionless visitor registration, badge printing, and temporary QR passes.', route: '/solutions/visitor-management' },
  { id: 12, name: 'Line Haul Management', cat: 'Logistics', icon: <LineHaulManagementIcon />, desc: 'Long-haul freight trailer tracking, seal verification, and arrival auditing.', route: '/solutions/line-haul-management' },
  { id: 13, name: 'Student Attendance', cat: 'Education', icon: <StudentAttendanceIcon />, desc: 'Automated student check-in at school gates with instant parent SMS notices.', route: '/solutions/student-attendance' },
  { id: 14, name: 'Parcel Tracking', cat: 'Logistics', icon: <ParcelTrackingIcon />, desc: 'Real-time synchronization of parcel barcode scans with high-definition video clips.', route: '/solutions/visual-parcel-tracking' },
  { id: 15, name: 'Dock Management', cat: 'Logistics', icon: <DockManagementIcon />, desc: 'Logistics bay scheduling, trailer turn-around optimization, and dock safety.', route: '/solutions/dock-management' },
  { id: 16, name: 'Distance learning', cat: 'Education', icon: <DistanceLearningIcon />, desc: 'Interactive hybrid classroom lecture streaming with digital whiteboard sharing.', route: '/solutions/distance-learning' },
  { id: 17, name: 'Information Display', cat: 'General', icon: <InformationDisplayIcon />, desc: 'Ultra-bright commercial digital signage and operational data dashboards.', route: '/solutions/information-display' },
  { id: 18, name: 'Remote Classroom Inspection', cat: 'Education', icon: <RemoteClassroomInspectionIcon />, desc: 'Administrative remote classroom audits and teaching quality evaluations.', route: '/solutions/remote-classroom-inspection' },
  { id: 19, name: 'Intelligent Inspection', cat: 'Energy', icon: <IntelligentInspectionIcon />, desc: 'Autonomous PTZ and thermal patrol of energy substations and pipelines.', route: '/solutions/intelligent-inspection' },
  { id: 20, name: 'Advanced Driving Assistance', cat: 'Traffic', icon: <ADASIcon />, desc: 'Driver fatigue detection, lane departure warnings, and forward collision alarms.', route: '/solutions/advanced-driving-assistance' },
  { id: 21, name: 'Industrial Thermography', cat: 'Energy', icon: <IndustrialThermographyIcon />, desc: 'Continuous radiometric temperature monitoring for early fire detection.', route: '/solutions/industrial-thermography' },
  { id: 22, name: 'Radar Sensor-based Care', cat: 'Healthcare', icon: <RadarSensorCareIcon />, desc: 'Privacy-preserving micro-radar patient fall detection and bed exit alarms.' },
  { id: 23, name: 'AR Live Interaction', cat: 'General', icon: <ARLiveInteractionIcon />, desc: 'Augmented reality heads-up display linking field technicians with remote experts.' },
  { id: 24, name: 'Integrated Solar-Powered Security', cat: 'Energy', icon: <SolarSecurityIcon />, desc: 'Autonomous solar PV and battery-powered cellular security stations.' },
  { id: 25, name: 'Remote Audit', cat: 'General', icon: <RemoteAuditIcon />, desc: 'Centralized SOC remote auditing with interactive checklists and audit trails.' },
  { id: 26, name: 'Onboard Passenger Counting', cat: 'Traffic', icon: <OnboardPassengerCountingIcon />, desc: 'Stereoscopic overhead cameras tracking transit bus passenger boarding.' },
  { id: 27, name: 'GNSS Vehicle Trajectory Management', cat: 'Traffic', icon: <GNSSTrajectoryIcon />, desc: 'Sub-meter satellite vehicle positioning and historical route replay.' },
  { id: 28, name: 'Course Recording', cat: 'Education', icon: <CourseRecordingIcon />, desc: 'Automated presenter voice-tracking and high-definition classroom recording.' },
  { id: 29, name: 'Student Pick-up', cat: 'Education', icon: <StudentPickupIcon />, desc: 'Secure parent identity verification during after-school pickup dismissals.' },
];

// Hero Carousel Slides
const heroSlides = [
  {
    id: 'perimeter',
    title: 'Perimeter Protection Solution',
    subtitle: 'First line security, fast and accurate',
    image: '/images/perimeter_protection_hero.jpg',
    btnText: 'Explore More',
    link: '#overview',
  },
  {
    id: 'access-control',
    title: 'People and Vehicle Access Control',
    subtitle: 'Quick Pass. Smart Control. High-speed turnstiles & automated ANPR gates',
    image: '/images/solution_access_hero.jpg',
    btnText: 'Explore More',
    link: '#overview',
  },
];

export default function Solutions() {
  const [activeIndustryId, setActiveIndustryId] = useState('education');
  const [activeFunctionCat, setActiveFunctionCat] = useState('All');
  const [selectedFunctionModal, setSelectedFunctionModal] = useState(null);
  const [showContactSalesModal, setShowContactSalesModal] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const tabsRef = useRef(null);

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentIndustry = industryData.find((ind) => ind.id === activeIndustryId) || industryData[0];

  const functionCategories = [
    'All',
    'General',
    'Education',
    'Logistics',
    'Traffic',
    'Energy',
    'Retail',
    'Healthcare',
    'Public Transport'
  ];

  const filteredFunctions =
    activeFunctionCat === 'All'
      ? functionCards
      : functionCards.filter((f) => {
          const catMatch = f.cat?.toLowerCase() === activeFunctionCat.toLowerCase();
          const catsMatch = f.cats?.some((c) => c.toLowerCase() === activeFunctionCat.toLowerCase());
          return catMatch || catsMatch;
        });

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        paddingTop: '64px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
      }}
    >
      {/* 1. HERO BANNER: Cinematic Panoramic Carousel (Matching screenshot exactly) */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(460px, 48vw, 640px)',
          minHeight: '440px',
          overflow: 'hidden',
          backgroundColor: '#0b0f19',
        }}
      >
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: currentHeroSlide === idx ? 1 : 0,
              visibility: currentHeroSlide === idx ? 'visible' : 'hidden',
              transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.9s',
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Subtle contrast gradient scrim to keep text razor sharp without hiding the cyan perimeter line */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(90deg, rgba(5,10,20,0.5) 0%, rgba(5,10,20,0.25) 45%, rgba(5,10,20,0.05) 100%)',
                pointerEvents: 'none',
              }}
            />

            {/* Inner Content matching exact positioning from screenshot */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '1440px',
                height: '100%',
                margin: '0 auto',
                padding: '0 clamp(24px, 5vw, 64px)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  width: '100%',
                  maxWidth: '680px',
                  margin: '0 clamp(0px, 6vw, 140px)',
                }}
              >
                <h1
                  style={{
                    color: '#ffffff',
                    fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                    margin: '0 0 14px',
                    textShadow: '0 2px 14px rgba(0, 0, 0, 0.7)',
                  }}
                >
                  {slide.title}
                </h1>

                <p
                  style={{
                    color: 'rgba(255, 255, 255, 0.95)',
                    fontSize: 'clamp(1rem, 1.6vw, 1.25rem)',
                    fontWeight: 400,
                    lineHeight: 1.4,
                    margin: '0 0 26px',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
                  }}
                >
                  {slide.subtitle}
                </p>

                <div>
                  <a
                    href={slide.link || '#overview'}
                    onClick={(e) => {
                      if (slide.link?.startsWith('#')) {
                        e.preventDefault();
                        const el = document.querySelector(slide.link);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#d70015',
                      color: '#ffffff',
                      padding: '11px 32px',
                      borderRadius: '9999px',
                      fontSize: '0.96rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      boxShadow: '0 4px 18px rgba(215, 0, 21, 0.45)',
                      transition: 'transform 0.2s ease, background-color 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#b70012';
                      e.currentTarget.style.transform = 'scale(1.04)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#d70015';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {slide.btnText || 'Explore More'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom Pagination Indicators (matching screenshot '_ _') */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            zIndex: 10,
          }}
        >
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentHeroSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: currentHeroSlide === idx ? '36px' : '26px',
                height: '3px',
                borderRadius: '2px',
                backgroundColor: currentHeroSlide === idx ? '#ffffff' : 'rgba(255, 255, 255, 0.45)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: currentHeroSlide === idx ? '0 0 8px rgba(255,255,255,0.8)' : 'none',
              }}
            />
          ))}
        </div>
      </section>

      {/* 2. SUBNAV ANCHOR BAR (Apple-Style Sticky Strip) */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 40,
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          padding: '12px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '28px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <a
            href="#overview"
            style={{
              fontSize: '0.85rem',
              color: '#515154',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0071e3')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#515154')}
          >
            Overview
          </a>
          <a
            href="#industry"
            style={{
              fontSize: '0.85rem',
              color: '#515154',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0071e3')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#515154')}
          >
            By Industry
          </a>
          <a
            href="#scenario"
            style={{
              fontSize: '0.85rem',
              color: '#515154',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0071e3')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#515154')}
          >
            By Scenario
          </a>
          <a
            href="#function"
            style={{
              fontSize: '0.85rem',
              color: '#515154',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0071e3')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#515154')}
          >
            By Function
          </a>
        </div>
      </nav>

      {/* 3. OVERVIEW SECTION (Apple Clean Typography & 3 Metric Pillars) */}
      <section id="overview" style={{ padding: 'clamp(60px, 8vw, 90px) 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <h2
                style={{
                  fontSize: 'clamp(2.4rem, 4.4vw, 3.4rem)',
                  fontWeight: 800,
                  color: '#1d1d1f',
                  letterSpacing: '-0.03em',
                  margin: '0 0 12px',
                }}
              >
                Overview
              </h2>
            </div>

            <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'left' }}>
              <h3
                style={{
                  fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  letterSpacing: '-0.015em',
                  margin: '0 0 16px',
                  lineHeight: 1.4,
                }}
              >
                A rich portfolio of empowering and enabling solutions
              </h3>

              <p
                style={{
                  fontSize: '1.02rem',
                  color: '#515154',
                  lineHeight: 1.65,
                  margin: '0 0 16px',
                }}
              >
                Coloron offers an abundance of solution options to facilitate the digital transformation process. These solutions enable intelligent operations in many sectors of society.
              </p>

              <p
                style={{
                  fontSize: '1.02rem',
                  color: '#515154',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Beginning at video security and extending to AIoT-powered applications, our solutions are designed to provide comprehensive, end-to-end capabilities for diverse customers and industries, opening doors for new business opportunities, optimized operations, future-proof processes, and a winning edge in the competition.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. SOLUTIONS BY INDUSTRY (Interactive Apple Bento Showcase) */}
      <section
        id="industry"
        style={{
          padding: 'clamp(60px, 8vw, 100px) 24px',
          backgroundColor: '#f5f5f7',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#0071e3',
                marginBottom: '8px',
                display: 'block',
              }}
            >
              Tailored Deployments
            </span>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: 800,
                color: '#1d1d1f',
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              Solutions by Industry
            </h2>
          </div>

          {/* Industry Filter Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              paddingBottom: '16px',
              marginBottom: '32px',
            }}
          >
            {industryData.map((ind) => {
              const isActive = ind.id === activeIndustryId;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustryId(ind.id)}
                  style={{
                    backgroundColor: isActive ? '#0071e3' : '#ffffff',
                    color: isActive ? '#ffffff' : '#1d1d1f',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '9999px',
                    padding: '9px 20px',
                    fontSize: '0.88rem',
                    fontWeight: isActive ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 4px 14px rgba(0, 113, 227, 0.25)' : 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {ind.name}
                </button>
              );
            })}
          </div>

          {/* Full-Size Industry Showcase Image Banner */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '26px',
              overflow: 'hidden',
              boxShadow: '0 16px 44px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              marginBottom: '28px',
              backgroundColor: '#1d1d1f',
              lineHeight: 0,
            }}
          >
            <img
              key={currentIndustry.id}
              src={currentIndustry.image}
              alt={currentIndustry.name}
              style={{
                width: '100%',
                height: 'clamp(420px, 48vw, 680px)',
                objectFit: 'cover',
                display: 'block',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/images/cctv_hero_banner.png';
              }}
            />
          </div>

          {/* 3 Sub-Case Study Bento Cards underneath */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {currentIndustry.caseStudies.map((cs, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '24px',
                  borderRadius: '20px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 4px 18px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.07)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 0, 0, 0.03)';
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: '#0071e3',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    {cs.tag}
                  </span>
                  <h4 style={{ fontSize: '1.08rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 10px', lineHeight: 1.3 }}>
                    {cs.title}
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: '#6e6e73', lineHeight: 1.45, margin: 0 }}>{cs.desc}</p>
                </div>

                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.82rem', color: '#0071e3', fontWeight: 500 }}>
                  <span>Read Deployment Case</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS BY SCENARIO (27 Scenarios Visual 5-Column Grid matching screenshot) */}
      <section id="scenario" style={{ padding: 'clamp(60px, 8vw, 100px) 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          {/* Centered Heading */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                fontWeight: 800,
                color: '#1d1d1f',
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              Solutions by Scenario
            </h2>
          </div>

          {/* Subtitle & Descriptive Paragraph */}
          <div style={{ marginBottom: '36px' }}>
            <h3
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                color: '#1d1d1f',
                letterSpacing: '-0.01em',
                margin: '0 0 12px',
              }}
            >
              Focused on each business process
            </h3>
            <p
              style={{
                fontSize: '0.94rem',
                color: '#555558',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: '1280px',
              }}
            >
              Each industry consists of a finite number of scenarios. We believe that the key to the success of an entire solution is its ability to meet the requirements and challenges in each scenario. That&apos;s why we keep digging into the basic needs and untapped demands scenario by scenario, and direct our best engineering to offer dedicated solutions there.
            </p>
          </div>

          {/* 27 Scenarios 5-Column Grid */}
          <div className="scenario-5col-grid">
            {scenarioCards.map((sc, i) => {
              const lower = sc.title.toLowerCase();
              let targetRoute = null;
              if (lower === 'apartments') targetRoute = '/solutions/apartments';
              else if (lower === 'factories') targetRoute = '/solutions/factories';
              else if (lower === 'classroom hub' || lower.includes('classroom')) targetRoute = '/solutions/classroom-hub';
              else if (lower === 'urban roadways' || lower.includes('roadways')) targetRoute = '/solutions/urban-roadways';
              else if (lower === 'offices' || lower.includes('office')) targetRoute = '/solutions/offices';
              else if (lower === 'stores' || lower.includes('store') || lower === 'supermarkets' || lower.includes('supermarket')) targetRoute = '/solutions/supermarkets';
              else if (lower === 'bus stop' || lower.includes('bus stop')) targetRoute = '/solutions/bus-stop';
              else if (lower === 'car dealerships' || lower.includes('dealership')) targetRoute = '/solutions/car-dealerships';
              else if (lower === 'conference rooms' || lower.includes('conference')) targetRoute = '/solutions/conference-rooms';
              else if (lower === 'construction site' || lower.includes('construction')) targetRoute = '/solutions/construction-site';
              else if (lower === 'electrical substations' || lower.includes('substation')) targetRoute = '/solutions/electrical-substations';
              else if (lower === 'gas stations' || lower.includes('gas station')) targetRoute = '/solutions/gas-stations';
              else if (lower === 'highways' || lower.includes('highway') || lower.includes('expressway')) targetRoute = '/solutions/highways';
              else if (lower === 'hotels' || lower.includes('hotel')) targetRoute = '/solutions/hotels';
              else if (lower === 'monitoring center' || lower.includes('monitoring')) targetRoute = '/solutions/monitoring-center';
              else if (lower === 'parking lots' || lower.includes('parking')) targetRoute = '/solutions/parking-lots';
              else if (lower === 'schools' || lower.includes('school')) targetRoute = '/solutions/schools';
              else if (lower === 'shopping malls' || lower.includes('shopping') || lower.includes('mall')) targetRoute = '/solutions/shopping-malls';
              else if (lower.includes('transit bus') || lower.includes('on-board') || lower.includes('onboard')) targetRoute = '/solutions/transit-bus-onboard';
              else if (lower === 'warehouses' || lower.includes('warehouse')) targetRoute = '/solutions/warehouses';
              else if (lower === 'onshore oilfields' || lower.includes('oilfield') || lower.includes('oilfields')) targetRoute = '/solutions/onshore-oilfields';
              else if (lower === 'offshore oil platform' || lower.includes('offshore')) targetRoute = '/solutions/offshore-oil-platform';
              else if (lower === 'transmission line inspection' || lower.includes('transmission line') || lower.includes('transmission')) targetRoute = '/solutions/transmission-line-inspection';
              else if (lower === 'pipeline inspection' || lower.includes('pipeline')) targetRoute = '/solutions/pipeline-inspection';
              else if (lower === 'solar farms' || lower.includes('solar farm') || lower === 'solar-farms') targetRoute = '/solutions/solar-farms';
              else if (lower === 'hydroelectric power plants' || lower.includes('hydroelectric') || lower.includes('hydro-plant')) targetRoute = '/solutions/hydroelectric-power-plants';

              const CardComponent = targetRoute ? Link : 'div';
              const cardProps = targetRoute
                ? { to: targetRoute }
                : { onClick: () => setShowContactSalesModal(true) };

              return (
                <CardComponent
                  key={i}
                  {...cardProps}
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1.05)';
                    const title = e.currentTarget.querySelector('.scenario-title');
                    if (title) title.style.color = '#0071e3';
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1)';
                    const title = e.currentTarget.querySelector('.scenario-title');
                    if (title) title.style.color = '#1d1d1f';
                  }}
                >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '142px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    backgroundColor: '#f0f0f2',
                  }}
                >
                  <img
                    src={sc.image}
                    alt={sc.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/images/cctv_hero_banner.png';
                    }}
                  />
                </div>

                <div
                  className="scenario-title"
                  style={{
                    marginTop: '10px',
                    fontSize: '0.94rem',
                    fontWeight: 500,
                    color: '#1d1d1f',
                    lineHeight: 1.35,
                    transition: 'color 0.2s ease',
                  }}
                >
                  {sc.title}
                </div>
                </CardComponent>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. SOLUTIONS BY FUNCTION (Interactive 24 Functional Matrix with Category Tabs) */}
      <section
        id="function"
        style={{
          padding: '80px 24px 100px',
          backgroundColor: '#ffffff',
          borderTop: '1px solid #f0f0f4',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Main Title */}
          <h2
            style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
              fontWeight: 800,
              color: '#1d1d1f',
              textAlign: 'center',
              margin: '0 0 40px',
              letterSpacing: '-0.02em',
            }}
          >
            Solutions by Function
          </h2>

          {/* Subtitle & Paragraph matching screenshot */}
          <div style={{ marginBottom: '36px' }}>
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#1d1d1f',
                margin: '0 0 10px',
              }}
            >
              Designed to resolve everyday issues
            </h3>
            <p
              style={{
                fontSize: '0.94rem',
                color: '#6e6e73',
                lineHeight: 1.65,
                maxWidth: '1050px',
                margin: 0,
              }}
            >
              Taking a building-block approach, we create functional applications based on common technologies. As solutions in their smallest units, each functional application is designed to solve a particular problem. In accordance with the complexity of requirements, customers have the flexibility to combine functional applications on demand.
            </p>
          </div>

          {/* Category Tabs Strip with Both Left & Right Scroll Arrows */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid #e5e5ea',
              marginBottom: '44px',
              position: 'relative',
              gap: '10px',
            }}
          >
            {/* Left arrow scroll button */}
            <button
              onClick={() => scrollTabs('left')}
              title="Previous categories"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid #e5e5ea',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#6e6e73',
                marginBottom: '6px',
                flexShrink: 0,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#1d1d1f';
                e.currentTarget.style.color = '#1d1d1f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e5ea';
                e.currentTarget.style.color = '#6e6e73';
              }}
            >
              <ChevronLeft size={16} />
            </button>

            {/* Scrollable Tabs List */}
            <div
              ref={tabsRef}
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: '8px',
                overflowX: 'auto',
                scrollbarWidth: 'none',
                flex: 1,
                scrollBehavior: 'smooth',
              }}
            >
              {functionCategories.map((c) => {
                const isSelected = activeFunctionCat === c;
                return (
                  <button
                    key={c}
                    onClick={() => setActiveFunctionCat(c)}
                    style={{
                      backgroundColor: isSelected ? '#ffffff' : 'transparent',
                      color: isSelected ? '#e60012' : '#48484a',
                      border: isSelected ? '1px solid #e5e5ea' : '1px solid transparent',
                      borderBottom: isSelected ? '1px solid #ffffff' : '1px solid transparent',
                      borderRadius: isSelected ? '6px 6px 0 0' : '6px',
                      padding: '10px 22px',
                      fontSize: '0.94rem',
                      fontWeight: isSelected ? 600 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                      bottom: isSelected ? '-1px' : '0',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) e.currentTarget.style.color = '#1d1d1f';
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) e.currentTarget.style.color = '#48484a';
                    }}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            {/* Right arrow scroll button */}
            <button
              onClick={() => scrollTabs('right')}
              title="Next categories"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid #e5e5ea',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#6e6e73',
                marginBottom: '6px',
                flexShrink: 0,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#1d1d1f';
                e.currentTarget.style.color = '#1d1d1f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e5ea';
                e.currentTarget.style.color = '#6e6e73';
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* 6-Column Grid Layout matching screenshot exactly */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
              gap: '36px 20px',
              justifyItems: 'center',
            }}
          >
            {filteredFunctions.map((fn) => {
              const targetRoute = fn.route || null;
              const TileComponent = targetRoute ? Link : 'div';
              const tileProps = targetRoute
                ? { to: targetRoute }
                : { onClick: () => setSelectedFunctionModal(fn) };

              return (
                <TileComponent
                  key={fn.id}
                  {...tileProps}
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    width: '100%',
                    maxWidth: '180px',
                  }}
                >
                  {/* Top Square Card Container with soft shadow */}
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '1 / 1',
                      maxWidth: '150px',
                      backgroundColor: '#ffffff',
                      borderRadius: '18px',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 113, 227, 0.12)';
                      e.currentTarget.style.borderColor = 'rgba(0, 113, 227, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                    }}
                  >
                    {fn.icon}
                  </div>

                  {/* Centered Title Below Card */}
                  <span
                    style={{
                      marginTop: '12px',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: '#1d1d1f',
                      textAlign: 'center',
                      lineHeight: 1.35,
                      padding: '0 4px',
                    }}
                  >
                    {fn.name}
                  </span>
                </TileComponent>
              );
            })}
          </div>
        </div>
      </section>

      {/* Function Details Modal */}
      {selectedFunctionModal && (
        <div
          onClick={() => setSelectedFunctionModal(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.45)',
            backdropFilter: 'blur(10px)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '26px',
              maxWidth: '480px',
              width: '100%',
              padding: '36px',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              animation: 'modalFadeUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <button
              onClick={() => setSelectedFunctionModal(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#f5f5f7',
                border: 'none',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={16} />
            </button>

            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '18px',
                backgroundColor: '#f5f5f7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              {selectedFunctionModal.icon}
            </div>

            <span
              style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                color: '#0071e3',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                display: 'block',
                marginBottom: '4px',
              }}
            >
              {selectedFunctionModal.cat} Function
            </span>

            <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 12px' }}>
              {selectedFunctionModal.name}
            </h3>

            <p style={{ fontSize: '0.96rem', color: '#6e6e73', lineHeight: 1.5, margin: '0 0 24px' }}>
              {selectedFunctionModal.desc}
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <Link
                to="/quote-calculator"
                style={{
                  flex: 1,
                  textAlign: 'center',
                  backgroundColor: '#0071e3',
                  color: '#ffffff',
                  padding: '10px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Inquire Hardware
              </Link>
              <button
                onClick={() => setSelectedFunctionModal(null)}
                style={{
                  backgroundColor: '#f5f5f7',
                  color: '#1d1d1f',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. READY TO DISCUSS YOUR NEEDS? (Apple-Grade Consultation Banner with Consultant Graphic) */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 24px', backgroundColor: '#ffffff' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            backgroundColor: '#f5f5f7',
            borderRadius: '32px',
            overflow: 'hidden',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.04)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
          }}
        >
          {/* Left Text & Call to Action */}
          <div style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#d70015',
                marginBottom: '10px',
                display: 'block',
              }}
            >
              Expert Consultation
            </span>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 800,
                color: '#1d1d1f',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                margin: '0 0 16px',
              }}
            >
              Ready to discuss your needs?
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#6e6e73',
                lineHeight: 1.5,
                margin: '0 0 32px',
              }}
            >
              Speak directly with certified Coloron systems engineers to calculate optical field-of-view, server storage arrays, and network bandwidth topologies for your site.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setShowContactSalesModal(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#d70015',
                  color: '#ffffff',
                  padding: '12px 28px',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(215, 0, 21, 0.25)',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b70012')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
              >
                <span>Contact a Solutions Expert</span>
                <ArrowRight size={15} />
              </button>

              <Link
                to="/quote-calculator"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#ffffff',
                  color: '#1d1d1f',
                  border: '1px solid rgba(0, 0, 0, 0.12)',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f2')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
              >
                <span>Calculate Bandwidth & Storage</span>
              </Link>
            </div>
          </div>

          {/* Right Visual Graphic */}
          <div style={{ position: 'relative', height: '100%', minHeight: '340px' }}>
            <img
              src="/images/solution_consultant.jpg"
              alt="Security Architect System Layout"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Sales Form Modal */}
      <ContactSalesModal
        isOpen={showContactSalesModal}
        onClose={() => setShowContactSalesModal(false)}
      />

      <style>{`
        @keyframes modalFadeUp {
          from {
            opacity: 0;
            transform: translate3d(0, 20px, 0) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
