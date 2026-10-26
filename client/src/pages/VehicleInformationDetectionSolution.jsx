import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  Shield,
  Camera,
  Layers,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Maximize2,
  X,
  PhoneCall,
  Mail,
  Zap,
  Radio,
  Eye,
  FileCheck,
  Server,
  MapPin,
  Calendar,
  Tag,
  Plus,
  Check,
  Play,
  Pause,
  Volume2,
  VolumeX,
  AlertTriangle,
  Download,
  FileText,
  Sliders,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Cpu,
  MonitorCheck,
  Car,
  Truck,
  Search,
  ScanLine
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Dedicated Interactive Vehicle Scenario Card with Metadata Telemetry Overlay
function ScenarioCard({ sc, onOpenModal }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        height: '320px',
        borderRadius: '18px',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: '#0a192f',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        setIsHovered(true);
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 113, 227, 0.22)';
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
      }}
      onClick={() => onOpenModal(sc)}
    >
      {/* Background Scenario Image */}
      <img
        src={sc.img}
        alt={sc.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.5s ease',
          transform: isHovered ? 'scale(1.04)' : 'scale(1)'
        }}
      />

      {/* Vignette Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.85) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Top Left: Live Status Badge */}
      <div
        style={{
          position: 'absolute',
          top: '14px',
          left: '14px',
          backgroundColor: 'rgba(10, 20, 35, 0.85)',
          backdropFilter: 'blur(8px)',
          padding: '4px 12px',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          zIndex: 2
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#34c759',
            boxShadow: '0 0 8px #34c759',
            display: 'inline-block'
          }}
        />
        <span style={{ fontSize: '0.74rem', color: '#ffffff', fontWeight: 600, letterSpacing: '0.04em' }}>
          AI ANPR ACTIVE
        </span>
      </div>

      {/* Top Right: Zoom / View Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpenModal(sc);
        }}
        title="Zoom Scenario"
        style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          backgroundColor: 'rgba(10, 20, 35, 0.75)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          color: '#ffffff',
          borderRadius: '50%',
          width: '34px',
          height: '34px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 2,
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 113, 227, 0.9)';
          e.currentTarget.style.transform = 'scale(1.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(10, 20, 35, 0.75)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <Maximize2 size={15} />
      </button>

      {/* Bottom Left: Location Title */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          backgroundColor: 'rgba(10, 20, 35, 0.88)',
          backdropFilter: 'blur(12px)',
          color: '#ffffff',
          padding: '6px 16px',
          borderRadius: '9999px',
          fontSize: '0.86rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          zIndex: 2
        }}
      >
        <MapPin size={14} color="#0071e3" />
        {sc.title}
      </div>

      {/* Bottom Right: Authentic Vehicle Feature Telemetry HUD */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          backgroundColor: 'rgba(12, 24, 44, 0.92)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '10px',
          padding: '8px 14px',
          color: '#ffffff',
          fontSize: '0.8rem',
          lineHeight: 1.4,
          boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
          zIndex: 2,
          minWidth: '170px'
        }}
      >
        <div
          style={{
            color: '#34c759',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: '3px',
            borderBottom: '1px solid rgba(255,255,255,0.12)',
            paddingBottom: '3px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <ScanLine size={12} color="#34c759" />
          {sc.telemetry?.mode || 'Vehicle Recognition'}
        </div>
        <div style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.72rem' }}>
          Plate: <strong style={{ color: '#ffffff' }}>{sc.telemetry?.plate || '2849-HJK'}</strong>
        </div>
        <div style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.72rem' }}>
          Type: <strong style={{ color: '#ffffff' }}>{sc.telemetry?.type || 'Heavy Truck'}</strong>
        </div>
        <div style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.72rem' }}>
          Color: <strong style={{ color: '#5ac8fa' }}>{sc.telemetry?.color || 'Yellow/Orange'}</strong>
        </div>
      </div>
    </div>
  );
}

export default function VehicleInformationDetectionSolution() {
  const [activeTab, setActiveTab] = useState('features');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [activeScenarioModal, setActiveScenarioModal] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactSubject, setContactSubject] = useState('Vehicle Information Detection Solution');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({
    'cat-capture': true,
    'cat-flash': false,
    'cat-terminals': false,
    'cat-allrounder': true,
    'cat-terminals-allinone': false,
    'cat-detectors': true,
    'cat-lights': false,
    'cat-terminals-flow': false
  });
  const [toastMessage, setToastMessage] = useState(null);

  // Auto-dismiss toast
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const toggleAccordion = (catId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const handleOpenContact = (subject = 'Vehicle Information Detection Solution') => {
    setContactSubject(subject);
    setShowContactModal(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Recommended Solution Tab Definitions
  const tabs = [
    { id: 'features', name: 'Vehicle feature information detection' },
    { id: 'trafficdata', name: 'Traffic data information detection' }
  ];

  // Recommended Solution Content per Tab
  const solutionData = {
    features: {
      id: 'features',
      headline: 'Quick incident resolution with fast evidence locating',
      bullets: [
        'Improves case solving efficiency with high-value vehicle metadata and multi-dimensional characteristic queries',
        'Recognizes license plate (LPR accuracy > 98%), vehicle color, manufacturer, vehicle classification and speed',
        'Detects phone use while driving, seatbelt status, and other hazardous in-cabin violations with high accuracy',
        'The violations and vehicle features are combined to locate target evidence quickly across expansive city networks'
      ],
      scenarios: [
        {
          title: 'Urban roads',
          img: '/images/vehicle-info/scenario_urban_roads.jpg',
          telemetry: {
            mode: 'Urban Arterial ANPR',
            plate: 'MH01 AV 9942',
            type: 'Sedan / SUV',
            color: 'Pearl White',
            speed: '54 km/h'
          }
        },
        {
          title: 'Highways',
          img: '/images/vehicle-info/scenario_highways.jpg',
          telemetry: {
            mode: 'Expressway Multi-Lane',
            plate: 'KA03 MP 7811',
            type: 'Commercial Heavy Truck',
            color: 'Amber Orange',
            speed: '88 km/h'
          }
        }
      ],
      architectures: [
        {
          id: 'arch-capture-units',
          title: 'Solution with capture units',
          topoImg: '/images/vehicle-info/topo_capture_units.jpg',
          categories: [
            {
              id: 'cat-capture',
              title: 'Capture units',
              items: [
                {
                  name: 'Coloron 9 MP DeepinView Intelligent Vehicle Capture Camera',
                  model: 'CLR-TC900-ANPR',
                  desc: '1" Global Shutter CMOS sensor providing multi-lane coverage. Extracts license plate characters, vehicle color, brand logo, sub-category, driver seatbelt, and phone call status with over 99% accuracy.',
                  badge: 'Flagship 9 MP'
                },
                {
                  name: 'Coloron 4K Roadside Forensic Feature Camera',
                  model: 'CLR-TC400-VF',
                  desc: 'High-speed motorized varifocal lens with integrated deep learning coprocessor. Delivers crystal-clear facial and in-vehicle imagery even through polarized or tinted windshields.',
                  badge: 'Anti-Polarization'
                }
              ]
            },
            {
              id: 'cat-flash',
              title: 'Flash lamps',
              items: [
                {
                  name: 'Coloron Synchronous LED Strobe Flash Lamp',
                  model: 'CLR-STR-150W',
                  desc: 'Pulsed white light strobe synchronized to camera exposure at microsecond precision. Guarantees true color reproduction of vehicle body and plate day or night without motorist blinding.',
                  badge: 'Synchronous Flash'
                }
              ]
            },
            {
              id: 'cat-terminals',
              title: 'Terminals',
              items: [
                {
                  name: 'Coloron Edge Vehicle Data Processing Terminal',
                  model: 'CLR-ETM-3200',
                  desc: 'Roadside cabinet server aggregating multiple capture units, performing real-time metadata structuring, vehicle image deduplication, and encrypted cloud synchronization.',
                  badge: 'Edge Server'
                }
              ]
            }
          ]
        },
        {
          id: 'arch-allrounder',
          title: 'Solution with all-rounder traffic cameras',
          topoImg: '/images/vehicle-info/topo_allinone.jpg',
          categories: [
            {
              id: 'cat-allrounder',
              title: 'All-rounder traffic cameras',
              items: [
                {
                  name: 'Coloron All-in-One AI Traffic Radar-Video Camera',
                  model: 'CLR-AIT-9500',
                  desc: 'Integrates high-definition optical camera, 77 GHz tracking Doppler radar, supplementary LED illuminator, and edge neural processing inside one rugged IP67 enclosure.',
                  badge: 'Radar + Optical'
                }
              ]
            },
            {
              id: 'cat-terminals-allinone',
              title: 'Terminals',
              items: [
                {
                  name: 'Coloron Central Traffic Telemetry Terminal',
                  model: 'CLR-CTM-4800',
                  desc: 'Industrial edge workstation supporting up to 32 video streams, hardware RAID, dual gigabit optical uplinks, and RESTful API export to third-party police command systems.',
                  badge: 'Industrial Gateway'
                }
              ]
            }
          ]
        }
      ]
    },
    trafficdata: {
      id: 'trafficdata',
      headline: 'Smart traffic management with valuable data',
      bullets: [
        'Provides effective data support for adaptive traffic signal control and intelligent city traffic guidance management',
        'Collects comprehensive traffic data including traffic flow, speed, queue lengths, time headway, and space headway',
        'Monitors average delay, space occupancy, time occupancy, average parking time, and roadway congestion status in real time',
        'Enables municipal authorities to detect regional travel patterns, optimize bus corridors, and alleviate urban bottlenecks'
      ],
      scenarios: [
        {
          title: 'Crossroads',
          img: '/images/vehicle-info/scenario_flow_intersection.jpg',
          telemetry: {
            mode: 'Intersection Signal Flow',
            plate: 'FLOW: 2,480 vph',
            type: 'Queue Length: 42m',
            color: 'Congestion: Level 2',
            speed: 'Avg 38 km/h'
          }
        },
        {
          title: 'Highways',
          img: '/images/vehicle-info/scenario_flow_highspeed.jpg',
          telemetry: {
            mode: 'Corridor Traffic Volume',
            plate: 'FLOW: 5,120 vph',
            type: 'Headway: 1.8s',
            color: 'Density: Free Flow',
            speed: 'Avg 94 km/h'
          }
        }
      ],
      architectures: [
        {
          id: 'arch-traffic-data',
          title: 'Solution with vehicle detectors & continuous lights',
          topoImg: '/images/vehicle-info/topo_traffic_data.jpg',
          categories: [
            {
              id: 'cat-detectors',
              title: 'Vehicle detectors',
              items: [
                {
                  name: 'Coloron AI Micro-Radar Traffic Flow Detector',
                  model: 'CLR-VFD-77G',
                  desc: 'High-frequency 77 GHz radar tracking up to 256 individual targets simultaneously over 300 meters. Accurately reports lane speeds, headway, vehicle classification, and queue spillbacks in all weather.',
                  badge: '77 GHz Radar'
                },
                {
                  name: 'Coloron Panoramic Traffic Intersection Flow Camera',
                  model: 'CLR-PFC-360',
                  desc: 'Wide-area 4-lens 360-degree camera capturing complete intersection approaches to calculate turn-by-turn volume ratios and pedestrian crossing demands.',
                  badge: '360° Flow'
                }
              ]
            },
            {
              id: 'cat-lights',
              title: 'Continuous lights',
              items: [
                {
                  name: 'Coloron High-Efficiency Continuous LED Illuminator',
                  model: 'CLR-CL-80W',
                  desc: 'Continuous environmental light providing constant multi-lane optical illumination with low power consumption and zero flicker.',
                  badge: 'Constant Illumination'
                }
              ]
            },
            {
              id: 'cat-terminals-flow',
              title: 'Terminals',
              items: [
                {
                  name: 'Coloron Traffic Signal Coordination Server',
                  model: 'CLR-TSS-1600',
                  desc: 'Connects directly with standard NEMA TS2 and 2070 traffic signal controllers for adaptive green-wave split timing and real-time corridor optimization.',
                  badge: 'Signal Controller'
                }
              ]
            }
          ]
        }
      ]
    }
  };

  const currentTab = solutionData[activeTab];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#1d1d1f' }}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: 'rgba(10, 20, 35, 0.95)',
            color: '#ffffff',
            padding: '12px 22px',
            borderRadius: '12px',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            fontSize: '0.9rem',
            fontWeight: 500,
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <Check size={16} color="#34c759" />
          {toastMessage}
        </div>
      )}

      {/* 1. HERO BANNER - Exact 750px Height with Curved Arc Overlay & Night Highway Truck / Traffic */}
      <section
        style={{
          position: 'relative',
          height: '750px',
          overflow: 'hidden',
          backgroundColor: '#0a192f',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Background Image: Night Freeway Traffic with Heavy Truck & Headlights */}
        <img
          src="/images/vehicle-info/hero_banner.jpg"
          alt="Vehicle Information Detection Solution"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        />

        {/* Signature Deep Blue Organic Arc Overlay (Exact match to screenshot) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '58%',
            minWidth: '420px',
            background: 'linear-gradient(135deg, rgba(13, 44, 108, 0.96) 0%, rgba(20, 58, 130, 0.92) 65%, rgba(23, 66, 145, 0.85) 100%)',
            clipPath: 'ellipse(92% 100% at 0% 50%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 'max(40px, 8vw)',
            paddingRight: '60px',
            zIndex: 2
          }}
        >
          {/* Badge: Solutions by Function */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              padding: '6px 14px',
              borderRadius: '9999px',
              width: 'fit-content',
              marginBottom: '16px',
              backdropFilter: 'blur(8px)'
            }}
          >
            <Activity size={14} color="#ffffff" />
            <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600, letterSpacing: '0.02em' }}>
              Solutions by Function
            </span>
          </div>

          {/* Main Title: Vehicle Information Detection */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: 0
            }}
          >
            Vehicle Information Detection
          </h1>
        </div>
      </section>

      {/* 2. STICKY SUB-NAVIGATION BAR (Exact match to screenshot) */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 40,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e5ea',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '52px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            gap: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <button
              onClick={() => scrollToSection('what-we-offer')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#1d1d1f',
                cursor: 'pointer',
                padding: '6px 0',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d92323')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#1d1d1f')}
            >
              What we offer
            </button>
            <button
              onClick={() => scrollToSection('recommended-solution')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#d92323',
                cursor: 'pointer',
                padding: '6px 0',
                borderBottom: '2px solid #d92323'
              }}
            >
              Recommended solution
            </button>
            <button
              onClick={() => scrollToSection('success-stories')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#1d1d1f',
                cursor: 'pointer',
                padding: '6px 0',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d92323')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#1d1d1f')}
            >
              Success stories
            </button>
            <button
              onClick={() => scrollToSection('interested-in')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#1d1d1f',
                cursor: 'pointer',
                padding: '6px 0',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d92323')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#1d1d1f')}
            >
              You may also be interested in
            </button>
          </div>

          <button
            onClick={() => handleOpenContact('Vehicle Information Detection Inquiry')}
            style={{
              backgroundColor: '#d92323',
              color: '#ffffff',
              border: 'none',
              padding: '7px 18px',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.2s ease, transform 0.15s ease',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#b71c1c';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#d92323';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Ask about solutions
          </button>
        </div>
      </nav>

      {/* 3. "WHAT WE OFFER" SECTION - Exact 2 3D Icons Layout */}
      <section
        id="what-we-offer"
        style={{
          padding: '80px 24px 60px',
          maxWidth: '1240px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            marginBottom: '16px',
            letterSpacing: '-0.01em'
          }}
        >
          What we offer
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.6,
            color: '#515154',
            maxWidth: '840px',
            margin: '0 auto 60px'
          }}
        >
          Coloron's Vehicle Information Detection system, engineered with deep learning algorithms, recognizes vehicle features including license plate characters, color, type, and manufacturer, and detects phone use, seatbelt status, and other violations with much higher efficiency. What’s more, Coloron’s advanced solutions also offer information detection like positioning of multiple targets, lane use, speed and direction, and a wealth of traffic data.
        </p>

        {/* 2 Feature Items Grid (Exact layout from user screenshot) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '80px',
            flexWrap: 'wrap'
          }}
        >
          {/* Item 1: Vehicle basic information detection */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              maxWidth: '220px'
            }}
            onClick={() => {
              setActiveTab('features');
              scrollToSection('recommended-solution');
            }}
          >
            <div
              style={{
                width: '100px',
                height: '100px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img
                src="/images/vehicle-info/offer_icon_1.jpg"
                alt="Vehicle basic information detection"
                style={{ width: '90px', height: '90px', objectFit: 'contain' }}
              />
            </div>
            <h3
              style={{
                fontSize: '0.96rem',
                fontWeight: 600,
                color: '#1d1d1f',
                lineHeight: 1.35,
                margin: 0
              }}
            >
              Vehicle basic information<br />detection
            </h3>
          </div>

          {/* Item 2: Traffic data information detection */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              maxWidth: '220px'
            }}
            onClick={() => {
              setActiveTab('trafficdata');
              scrollToSection('recommended-solution');
            }}
          >
            <div
              style={{
                width: '100px',
                height: '100px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img
                src="/images/vehicle-info/offer_icon_2.jpg"
                alt="Traffic data information detection"
                style={{ width: '90px', height: '90px', objectFit: 'contain' }}
              />
            </div>
            <h3
              style={{
                fontSize: '0.96rem',
                fontWeight: 600,
                color: '#1d1d1f',
                lineHeight: 1.35,
                margin: 0
              }}
            >
              Traffic data information<br />detection
            </h3>
          </div>
        </div>
      </section>

      {/* 4. "RECOMMENDED SOLUTION" SECTION - 2 Tabs, Scenario Cards & Topologies */}
      <section id="recommended-solution" style={{ padding: '80px 24px', maxWidth: '1240px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            textAlign: 'center',
            marginBottom: '40px'
          }}
        >
          Recommended solution
        </h2>

        {/* 2 Tabs Bar */}
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid #d2d2d7',
            marginBottom: '48px',
            overflowX: 'auto',
            gap: '8px'
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '14px 20px',
                  fontSize: '0.98rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#d92323' : '#6e6e73',
                  borderBottom: isActive ? '2px solid #d92323' : '2px solid transparent',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  outline: 'none'
                }}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Active Tab Content */}
        <div>
          {/* Subheading & Bullet Points */}
          <div style={{ marginBottom: '40px' }}>
            <h3
              style={{
                fontSize: '1.45rem',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '16px'
              }}
            >
              {currentTab.headline}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {currentTab.bullets.map((bullet, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#d92323',
                      marginTop: '8px',
                      flexShrink: 0
                    }}
                  />
                  <p style={{ fontSize: '0.96rem', color: '#424245', lineHeight: 1.55, margin: 0 }}>
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Scenario Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '56px'
            }}
          >
            {currentTab.scenarios.map((sc, idx) => (
              <ScenarioCard key={idx} sc={sc} onOpenModal={(scenario) => setActiveScenarioModal(scenario)} />
            ))}
          </div>

          {/* Solution Topologies / System Architecture */}
          {currentTab.architectures && currentTab.architectures.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
              {currentTab.architectures.map((arch) => (
                <div
                  key={arch.id}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e5ea',
                    borderRadius: '16px',
                    padding: '36px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <h4
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#1d1d1f',
                      marginBottom: '28px',
                      borderBottom: '1px solid #f0f0f2',
                      paddingBottom: '12px'
                    }}
                  >
                    {arch.title}
                  </h4>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                      gap: '40px',
                      alignItems: 'start'
                    }}
                  >
                    {/* Topology Diagram with Lightbox */}
                    <div
                      style={{
                        backgroundColor: '#f5f5f7',
                        borderRadius: '12px',
                        padding: '16px',
                        cursor: 'pointer',
                        border: '1px solid #e5e5ea',
                        position: 'relative',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                      }}
                      onClick={() => setLightboxImg(arch.topoImg)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <img
                        src={arch.topoImg}
                        alt={arch.title}
                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '12px',
                          right: '12px',
                          backgroundColor: 'rgba(0,0,0,0.65)',
                          color: '#ffffff',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}
                      >
                        <Maximize2 size={12} />
                        Click to zoom
                      </div>
                    </div>

                    {/* Accordion Product Categories */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {arch.categories.map((cat) => {
                        const isOpen = expandedCategories[cat.id];
                        return (
                          <div
                            key={cat.id}
                            style={{
                              border: '1px solid #e5e5ea',
                              borderRadius: '10px',
                              overflow: 'hidden',
                              backgroundColor: '#ffffff'
                            }}
                          >
                            <button
                              onClick={() => toggleAccordion(cat.id)}
                              style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '16px 20px',
                                background: isOpen ? '#fbfbfd' : '#ffffff',
                                border: 'none',
                                cursor: 'pointer',
                                textAlign: 'left',
                                transition: 'background-color 0.2s'
                              }}
                            >
                              <span style={{ fontSize: '1rem', fontWeight: 600, color: '#1d1d1f' }}>
                                {cat.title}
                              </span>
                              {isOpen ? <ChevronUp size={18} color="#6e6e73" /> : <ChevronDown size={18} color="#6e6e73" />}
                            </button>

                            {isOpen && (
                              <div style={{ padding: '0 20px 20px', borderTop: '1px solid #f0f0f2' }}>
                                {cat.items.map((item, idx) => (
                                  <div
                                    key={idx}
                                    style={{
                                      paddingTop: '16px',
                                      marginTop: idx > 0 ? '16px' : '0',
                                      borderTop: idx > 0 ? '1px dashed #e5e5ea' : 'none'
                                    }}
                                  >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '6px' }}>
                                      <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1d1d1f', margin: 0 }}>
                                        {item.name}
                                      </h5>
                                      {item.badge && (
                                        <span
                                          style={{
                                            backgroundColor: '#fef2f2',
                                            color: '#d92323',
                                            fontSize: '0.72rem',
                                            fontWeight: 600,
                                            padding: '2px 8px',
                                            borderRadius: '9999px',
                                            border: '1px solid #fecaca',
                                            whiteSpace: 'nowrap'
                                          }}
                                        >
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                    <div style={{ fontSize: '0.82rem', color: '#0071e3', fontWeight: 600, marginBottom: '6px' }}>
                                      Model: {item.model}
                                    </div>
                                    <p style={{ fontSize: '0.86rem', color: '#6e6e73', lineHeight: 1.5, margin: 0 }}>
                                      {item.desc}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. "SUCCESS STORIES" SECTION - Spanish Municipality Case Study */}
      <section
        id="success-stories"
        style={{
          padding: '80px 24px',
          backgroundColor: '#f5f5f7'
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              textAlign: 'center',
              marginBottom: '50px'
            }}
          >
            Success stories
          </h2>

          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onClick={() =>
              setSelectedCaseStudy({
                title: 'Spanish municipality optimizes traffic management and public safety with Coloron smart city solution',
                date: 'October 30, 2021',
                img: '/images/vehicle-info/success_story.jpg',
                tags: ['Camera products', 'Incident detection', 'Smart city', 'Vehicle information detection', 'Traffic'],
                content: `The City Council of Tres Cantos, located north of Madrid, implemented a comprehensive smart city and vehicle information detection infrastructure across key municipal access corridors and urban roundabouts.

With rapid residential expansion and thousands of commuter vehicles entering and exiting daily, local law enforcement required real-time optical recognition and forensic vehicle classification to streamline traffic flows, detect infractions, and improve general civic safety.

Coloron deployed deep-learning vehicle capture cameras and central intelligence terminals:
• High-precision automated number plate recognition (ANPR) with > 99% accuracy across all European standard plates
• Continuous vehicle classification extracting vehicle make, model, color, and trajectory
• Real-time alerting for stolen or unauthorized vehicles entering municipal borders
• Full integration with the local municipal police command center and urban transit management systems`
              })
            }
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.06)';
            }}
          >
            <div style={{ height: '340px', overflow: 'hidden' }}>
              <img
                src="/images/vehicle-info/success_story.jpg"
                alt="Spanish municipality smart city traffic management"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#86868b',
                  fontSize: '0.85rem',
                  marginBottom: '14px'
                }}
              >
                <Calendar size={14} />
                October 30, 2021
              </div>

              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  lineHeight: 1.3,
                  marginBottom: '16px'
                }}
              >
                Spanish municipality optimizes traffic management and public safety with Coloron smart city solution
              </h3>

              <p style={{ fontSize: '0.94rem', color: '#515154', lineHeight: 1.55, marginBottom: '24px' }}>
                Deploying deep learning vehicle capture units and intelligent ANPR terminals across city gates to streamline commuter traffic and enhance community safety.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Camera products', 'Incident detection', 'Smart city', 'Vehicle information detection', 'Traffic'].map((t, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: '#f5f5f7',
                      color: '#1d1d1f',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 500
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "YOU MAY ALSO BE INTERESTED IN" SECTION */}
      <section id="interested-in" style={{ padding: '80px 24px', maxWidth: '1240px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            textAlign: 'center',
            marginBottom: '50px'
          }}
        >
          You may also be interested in
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}
        >
          {/* Card 1: Speed Measurement */}
          <Link
            to="/solutions/speed-measurement"
            style={{
              textDecoration: 'none',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#1c1c1e',
              padding: '36px 30px',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Solutions by Function
              </span>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '8px 0 12px', color: '#ffffff' }}>
                Speed Measurement
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#a1a1a6', lineHeight: 1.5, margin: 0 }}>
                Radar and optical velocity verification with automatic instant snapshot capture and average speed tracking.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d92323', fontWeight: 600, fontSize: '0.9rem', marginTop: '20px' }}>
              Learn more <ArrowRight size={16} />
            </div>
          </Link>

          {/* Card 2: Highways */}
          <Link
            to="/solutions/highways"
            style={{
              textDecoration: 'none',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#1c1c1e',
              padding: '36px 30px',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Solutions by Scenario
              </span>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '8px 0 12px', color: '#ffffff' }}>
                Highways
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#a1a1a6', lineHeight: 1.5, margin: 0 }}>
                Expressway toll collection, gantry surveillance, incident detection, and multi-lane free-flow enforcement.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d92323', fontWeight: 600, fontSize: '0.9rem', marginTop: '20px' }}>
              Learn more <ArrowRight size={16} />
            </div>
          </Link>

          {/* Card 3: Urban Roadways */}
          <Link
            to="/solutions/urban-roadways"
            style={{
              textDecoration: 'none',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#1c1c1e',
              padding: '36px 30px',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Solutions by Scenario
              </span>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '8px 0 12px', color: '#ffffff' }}>
                Urban Roadways
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#a1a1a6', lineHeight: 1.5, margin: 0 }}>
                Arterial traffic coordination, bus-lane prioritization, pedestrian crosswalk safety, and signal control.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d92323', fontWeight: 600, fontSize: '0.9rem', marginTop: '20px' }}>
              Learn more <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </section>

      {/* 7. "READY TO DISCUSS YOUR NEEDS?" CTA BANNER */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#f5f5f7',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.5rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              marginBottom: '28px'
            }}
          >
            Ready to discuss your needs?
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleOpenContact('Vehicle Information Detection Solution Consultation')}
              style={{
                backgroundColor: '#d92323',
                color: '#ffffff',
                border: 'none',
                padding: '14px 32px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(217, 35, 35, 0.3)',
                transition: 'background-color 0.2s, transform 0.15s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b71c1c';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d92323';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact Sales
            </button>

            <button
              onClick={() => handleOpenContact('Vehicle Information Detection Technical Advisory')}
              style={{
                backgroundColor: '#ffffff',
                color: '#d92323',
                border: '1.5px solid #d92323',
                padding: '14px 32px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background-color 0.2s, transform 0.15s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fff5f5';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* SCENARIO DETAIL MODAL */}
      {activeScenarioModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '24px'
          }}
          onClick={() => setActiveScenarioModal(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '960px',
              backgroundColor: '#0a192f',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 24px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(10, 20, 35, 0.9)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#34c759',
                    boxShadow: '0 0 10px #34c759'
                  }}
                />
                <h3 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                  {activeScenarioModal.title} — High-Speed Vehicle Metadata Extraction
                </h3>
              </div>

              <button
                onClick={() => setActiveScenarioModal(null)}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#ffffff',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Image in Modal */}
            <div style={{ position: 'relative', maxHeight: '65vh', backgroundColor: '#000000' }}>
              <img
                src={activeScenarioModal.img}
                alt={activeScenarioModal.title}
                style={{ width: '100%', maxHeight: '65vh', objectFit: 'contain', display: 'block' }}
              />
            </div>

            {/* Telemetry Footer */}
            <div
              style={{
                padding: '18px 24px',
                backgroundColor: 'rgba(10, 20, 35, 0.95)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ color: '#86868b', fontSize: '0.75rem', textTransform: 'uppercase' }}>Mode</div>
                  <div style={{ color: '#34c759', fontWeight: 700, fontSize: '0.95rem' }}>
                    {activeScenarioModal.telemetry?.mode}
                  </div>
                </div>
                <div>
                  <div style={{ color: '#86868b', fontSize: '0.75rem', textTransform: 'uppercase' }}>License Plate</div>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                    {activeScenarioModal.telemetry?.plate}
                  </div>
                </div>
                <div>
                  <div style={{ color: '#86868b', fontSize: '0.75rem', textTransform: 'uppercase' }}>Classification</div>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                    {activeScenarioModal.telemetry?.type}
                  </div>
                </div>
                <div>
                  <div style={{ color: '#86868b', fontSize: '0.75rem', textTransform: 'uppercase' }}>Color / Speed</div>
                  <div style={{ color: '#5ac8fa', fontWeight: 600, fontSize: '0.95rem' }}>
                    {activeScenarioModal.telemetry?.color} ({activeScenarioModal.telemetry?.speed})
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setToastMessage('Forensic vehicle metadata snapshot exported successfully.');
                }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Download size={14} /> Export Forensic Metadata
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '24px'
          }}
          onClick={() => setLightboxImg(null)}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: 'absolute',
                top: '-45px',
                right: '0',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                color: '#ffffff',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>
            <img
              src={lightboxImg}
              alt="Zoomed diagram"
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                borderRadius: '12px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                display: 'block'
              }}
            />
          </div>
        </div>
      )}

      {/* CASE STUDY MODAL */}
      {selectedCaseStudy && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '24px'
          }}
          onClick={() => setSelectedCaseStudy(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '780px',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ height: '280px', position: 'relative' }}>
              <img
                src={selectedCaseStudy.img}
                alt={selectedCaseStudy.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setSelectedCaseStudy(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  border: 'none',
                  color: '#ffffff',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ padding: '36px' }}>
              <div style={{ fontSize: '0.85rem', color: '#86868b', marginBottom: '8px' }}>
                {selectedCaseStudy.date}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '20px' }}>
                {selectedCaseStudy.title}
              </h3>
              <div style={{ whiteSpace: 'pre-line', fontSize: '0.96rem', lineHeight: 1.65, color: '#424245' }}>
                {selectedCaseStudy.content}
              </div>

              <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #f0f0f2', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    handleOpenContact('Spanish Municipality Case Study Consultation');
                  }}
                  style={{
                    backgroundColor: '#d92323',
                    color: '#ffffff',
                    border: 'none',
                    padding: '10px 24px',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Request Case Study Whitepaper
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT SALES MODAL */}
      <ContactSalesModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        initialSubject={contactSubject}
      />
    </div>
  );
}
