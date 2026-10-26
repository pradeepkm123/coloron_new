import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Home,
  Check,
  ArrowRight,
  Maximize2,
  X,
  Shield,
  Zap,
  Activity,
  Radio,
  Camera,
  Layers,
  BarChart3,
  Flame,
  AlertTriangle,
  FileText,
  PhoneCall,
  Sliders
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Sub-scenario data matching Hikvision Transmission Line Inspection structure
const scenariosData = [
  {
    id: 'corridor-inspection',
    number: 1,
    title: 'Corridor inspection',
    shortName: 'Corridor Inspection',
    pinCoords: { left: '40%', top: '28%' },
    challengeIntro: 'Maintaining transmission lines in hazardous and remote environments poses significant challenges.\nThis leads to infrequent inspections and delayed maintenance.',
    challenges: [
      {
        id: 'c1',
        title: 'Complex operations in harsh environments',
        image: '/images/transmission-line/Complex-operations-in-harsh-environments.png',
        desc: 'Transmission lines stretch across high mountains, snow terrains, dense forests, and untamed wilderness where ground access is perilous.',
      },
      {
        id: 'c2',
        title: 'Inspection inefficiency',
        image: '/images/transmission-line/Inspection-inefficiency.png',
        desc: 'Traditional manual tower climbing and corridor patrolling are labor-intensive, time-consuming, and carry inherent human fall risks.',
      },
    ],
    offerIntro: 'Coloron offers a reliable video-based system for 24/7 monitoring of electrical operations. Real-time detection and alarms enable quick response and optimal performance.',
    offerItems: [
      {
        id: 'o1',
        title: 'Radar-based solution',
        desc: 'Coloron’s radar integrated with video cameras detects potential intrusions by personnel, vehicles and machinery.',
        bullets: [
          'Send alarms to the command center for timely safety measures',
          'Reduce false alarms caused by trees, brush, and weather anomalies',
          'Prevent accidental damages to power equipment and high-voltage spans',
        ],
        image: '/images/transmission-line/Radar-based-solution.png',
        imageSide: 'left',
      },
      {
        id: 'o2',
        title: 'Solar-powered video solution',
        desc: 'Solar-Powered Cameras are perfect for remote, long-range transmission line corridors without accessible power grids.',
        bullets: [
          'Detect and report intrusions, equipment issues, smoke, or fire',
          'Operate 24/7 without grid power supply constraints via high-efficiency PV arrays',
          'Provide continuous, high-resolution optical and thermal monitoring',
        ],
        image: '/images/transmission-line/Solar-powered-video-solution.png',
        imageSide: 'right',
      },
    ],
    products: [
      {
        id: 'radar-500m',
        model: 'DS-TDSB0G-FK/500m',
        name: '500m Security Radar',
        image: '/images/transmission-line/product-radar-ds-tdsb0g.png',
        specs: 'Millimeter-wave radar, 500m detection range, 120° coverage, IP67 weatherproof',
        category: 'Security Radar',
      },
    ],
  },
  {
    id: 'tower-line-inspection',
    number: 2,
    title: 'Tower & Line inspection',
    shortName: 'Tower & Line Inspection',
    pinCoords: { left: '33%', top: '12%' },
    challengeIntro: 'Field inspections can be dangerous, making efficient and safe inspection of electrical devices important.',
    challenges: [
      {
        id: 'c3',
        title: 'Safety hazards at heights',
        image: '/images/transmission-line/Safety-hazards-at-heights.png',
        desc: 'Inspecting high-tension insulators, vibration dampers, and conductor hardware requires dangerous live-line work at extreme altitudes.',
      },
      {
        id: 'c4',
        title: 'Difficulty in timely fault detection',
        image: '/images/transmission-line/Difficulty-in-timely-fault-detection.png',
        desc: 'Micro-cracks, insulator flashovers, and localized overheating are nearly invisible to the naked human eye until catastrophic failures occur.',
      },
    ],
    offerIntro: 'The video security system performs routine inspections by automatically capturing high-definition images of transmission components. This allows managers to stay informed about on-site situations, even from a remote office.',
    offerItems: [
      {
        id: 'o3',
        title: 'Remote image inspection',
        desc: 'Coloron’s platform captures images of tower components based on a predefined checklist, enabling inspectors to quickly assess equipment status online.',
        bullets: [
          'Automated preset tour captures pins, fittings, insulators, and grounding leads',
          'Deep-learning defect classification detects broken strands, foreign objects, and bird nests',
          'Reduces on-site climb frequency by more than 85%',
        ],
        image: '/images/transmission-line/Remote-image-inspection.png',
        imageSide: 'left',
      },
      {
        id: 'o4',
        title: 'Thermal temperature inspection',
        desc: 'Thermal cameras detect temperature changes due to poor connections or overloads. They automatically check specified points and provide optical images to help assess the condition of electrical equipment.',
        bullets: [
          'Continuous radiometric thermography with ±2°C accuracy',
          'Instant thermal spike alarms triggered before insulator arcing',
          'Bi-spectrum optical and thermal fusion for pinpoint fault location',
        ],
        image: '/images/transmission-line/Thermal-temperature-inspection.png',
        imageSide: 'right',
      },
    ],
    products: [
      {
        id: 'ptz-positioning',
        model: 'DS-2DY5225IX-AE(T5)',
        name: '5-inch 2 MP 25X DarkFighter IR Network Positioning System',
        image: '/images/transmission-line/product-ptz-ds-2dy5225ix.png',
        specs: '2 MP 1/2.8" CMOS, 25× optical zoom, 150m IR range, anti-vibration pan/tilt',
        category: 'Positioning Systems',
      },
      {
        id: 'solar-thermal-kit',
        model: 'DS-2TXS2628-10P/QA/GLT/CH36S80',
        name: 'Solar-powered Thermal Camera Kit',
        image: '/images/transmission-line/product-solar-thermal-ds-2txs2628.png',
        specs: 'Thermal + optical dual-spectrum, integrated 80W PV panel & lithium battery, 4G LTE',
        category: 'Solar Thermal Kits',
      },
    ],
  },
  {
    id: 'field-operation-safety',
    number: 3,
    title: 'Field operation safety management',
    shortName: 'Field Operation Safety',
    pinCoords: { left: '60%', top: '10%' },
    challengeIntro: 'Maintaining power facilities in remote or high locations may sometimes pose safety risks for personnel.',
    challenges: [
      {
        id: 'c5',
        title: 'Lack of on-site operation records',
        image: '/images/transmission-line/Lack-of-on-site-operation-records.png',
        desc: 'Without automated video and telemetry logs, verifying adherence to high-voltage maintenance protocols and safety clearances is unreliable.',
      },
      {
        id: 'c6',
        title: 'Difficulty ensuring standardized operations',
        image: '/images/transmission-line/Difficulty-ensuring-standardized-operations.png',
        desc: 'Ensuring every field crew member dons proper insulated PPE, hard hats, safety harnesses, and grounding cables requires continuous oversight.',
      },
    ],
    offerIntro: 'Coloron’s digital products enhance field operations, ensuring they are standardized and safe through visualized verification.',
    offerItems: [
      {
        id: 'o5',
        title: 'Real-time recording of operational processes',
        desc: 'Portable Cameras record operations from the worker’s or third-person view. The monitoring center can verify safety procedures and offer assistance via two-way intercom.',
        bullets: [
          'High-definition body-worn cameras with stabilized first-person video',
          'Two-way audio intercom links remote dispatchers with live crews',
          'GPS tracking logs precise crew coordinates along high-voltage spans',
        ],
        image: '/images/transmission-line/Real-time-recording-of-operational-processes.png',
        imageSide: 'left',
      },
      {
        id: 'o6',
        title: 'Streamlined Operation Supervision',
        desc: 'The Coloron Platform efficiently allocates devices and manages planning. It backs up work documents and video evidence, which can be used for training purposes.',
        bullets: [
          'Automated inspection checklists and digital work ticket verification',
          'Cloud and on-premise evidentiary archiving for safety compliance audit',
          'Post-operation debriefing videos with incident bookmarking',
        ],
        image: '/images/transmission-line/Streamlined-Operation-Supervision.png',
        imageSide: 'right',
      },
    ],
    products: [
      {
        id: 'body-camera',
        model: 'DS-MCW407/32G/GPS/WIFI',
        name: 'Smart 4G Body Worn Camera',
        image: '/images/transmission-line/product-ptz-ds-2dy5225ix.png',
        specs: '1080p recording, 4G / Wi-Fi live streaming, GPS/BDS positioning, IP68 drop-resistant',
        category: 'Body Worn Cameras',
      },
    ],
  },
  {
    id: 'centralized-system-management',
    number: 4,
    title: 'Centralized system management',
    shortName: 'Centralized System Management',
    pinCoords: { left: '50%', top: '72%' },
    challengeIntro: 'Fragmented management systems hinder efficiency and timely responses to issues.',
    challenges: [
      {
        id: 'c7',
        title: 'Lack of unified management platforms',
        image: '/images/transmission-line/Lack-of-unified-management-platforms.png',
        desc: 'Siloed monitoring systems for cameras, radars, drones, and telemetry create blind spots and slow down emergency reaction times.',
      },
      {
        id: 'c8',
        title: 'Difficulty ensuring standardized operations',
        image: '/images/transmission-line/Difficulty-ensuring-standardized-operation.png',
        desc: 'Heterogeneous transmission corridors across different utility regional divisions lead to non-uniform data formats and cumbersome reporting.',
      },
    ],
    offerIntro: 'Coloron provides a comprehensive platform for data visualization and analysis, enhancing incident handling and maintenance efficiency.',
    offerItems: [
      {
        id: 'o7',
        title: 'Visualized dashboard',
        desc: 'It provides crystal clear insights using visualized data.',
        bullets: [
          'Get real-time status of ongoing site operations and transmission grid status',
          'Monitor from an all-inclusive dashboard with intuitive geospatial mapping',
          'Promptly respond to emergencies and automated intrusion/fire alarms',
        ],
        image: '/images/transmission-line/Visualized-dashboard.png',
        imageSide: 'left',
      },
      {
        id: 'o8',
        title: 'Multi-dimensional reports',
        desc: 'Coloron’s software consolidates defect records, temperature telemetry, and historical alarm trends into automated regulatory reports.',
        bullets: [
          'Automated health index scoring for individual transmission line spans',
          'Exportable standardized maintenance schedules and compliance manifests',
          'Big-data predictive failure analysis based on historical thermal trends',
        ],
        image: '/images/transmission-line/Multi-dimensional-reports.png',
        imageSide: 'right',
      },
    ],
    products: [
      {
        id: 'coloron-power-vms',
        model: 'ColoronCentral - Power & Utilities',
        name: 'Smart Grid Visual Management Platform',
        image: '/images/transmission-line/Visualized-dashboard.png',
        specs: 'Unified GIS map, AI video analytics, SCADA integration, automated alarm linkage',
        category: 'Software Platform',
      },
    ],
  },
];

// Related interest cards
const relatedInterests = [
  {
    title: 'Energy',
    tag: '/ Solutions by industry /',
    desc: 'Coloron provides comprehensive system solutions to enhance safety and efficiency for energy businesses, optimizing operational awareness and management through the value chains.',
    image: '/images/transmission-line/Top-banner_Mo.jpg',
    link: '/solutions',
  },
  {
    title: 'Oil & Gas',
    tag: '/ Solutions by industry /',
    desc: 'Provides advanced technologies and products that empower your businesses and employees with certified explosion-proof video and thermal imaging.',
    image: '/images/transmission-line/oil-gas-industry.jpg',
    link: '/solutions/offshore-oil-platform',
  },
  {
    title: 'Intelligent Inspection',
    tag: '/ Solutions by function /',
    desc: 'Coloron’s Intelligent Inspection Solution uses the latest video technology, thermal-imaging technology and AI-powered products for a state-of-the-art traceable, regulated, efficient inspection process.',
    image: '/images/transmission-line/Intelligent-Inspection.jpg',
    link: '/solutions/electrical-substations',
  },
];

export default function TransmissionLineInspectionSolution() {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [comparedProducts, setComparedProducts] = useState({});
  const [lightboxImg, setLightboxImg] = useState(null);

  const activeScenario = scenariosData[activeScenarioIndex];

  // Scroll to active scenario section smoothly when requested
  const handleSelectScenario = (index) => {
    setActiveScenarioIndex(index);
    const el = document.getElementById('scenario-details-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleCompare = (prodId) => {
    setComparedProducts((prev) => ({
      ...prev,
      [prodId]: !prev[prodId],
    }));
  };

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#1d1d1f', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      
      {/* 1. HERO BANNER (Exact Hikvision visual banner with sunset transmission line towers & orange arc badge) */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '440px',
          height: 'clamp(420px, 42vw, 560px)',
          overflow: 'hidden',
          backgroundColor: '#0a0d14',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Background Image: Sunset Sky with High Voltage Transmission Towers */}
        <picture style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}>
          <source media="(max-width: 768px)" srcSet="/images/transmission-line/Transmission-Line-Inspection-banner-mo.png" />
          <img
            src="/images/transmission-line/Transmission-Line-Inspection-banner.jpg"
            alt="Transmission Line Inspection"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center right',
              display: 'block',
            }}
          />
        </picture>

        {/* Sunset Orange Vignette / Overlay on Left Side (re-creating the warm glowing sun circle) */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: 'clamp(360px, 60vw, 750px)',
            height: 'clamp(360px, 60vw, 750px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(242, 137, 34, 0.72) 0%, rgba(224, 98, 18, 0.45) 50%, rgba(180, 70, 10, 0) 75%)',
            filter: 'blur(30px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Content Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1360px',
            width: '100%',
            margin: '0 auto',
            padding: '0 32px',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            {/* "Solutions by Scenario" badge matching exact SBS-logo icon */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
                color: '#ffffff',
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
            >
              <img
                src="/images/transmission-line/SBS-logo.png"
                alt="Solutions by Scenario Logo"
                style={{ height: '32px', width: 'auto', display: 'block', objectFit: 'contain' }}
              />
              <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.01em' }}>
                Solutions by Scenario
              </span>
            </div>

            {/* Main Title */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                margin: '0 0 14px 0',
                textShadow: '0 2px 14px rgba(0, 0, 0, 0.45)',
              }}
            >
              Transmission Line Inspection
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.95)',
                margin: 0,
                lineHeight: 1.4,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.35)',
              }}
            >
              Ensuring safe and reliable power flow
            </p>
          </div>
        </div>
      </section>

      {/* 2. SUBHEADER BREADCRUMB / STICKY NAV STRIP */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 40,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '12px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Title with back arrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link
              to="/solutions"
              style={{
                color: '#6e6e73',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                padding: '4px 6px',
                borderRadius: '6px',
                transition: 'color 0.2s ease',
              }}
              title="Back to Solutions"
            >
              <Home size={17} />
            </Link>
            <ChevronRight size={14} color="#86868b" />
            <span style={{ fontSize: '0.94rem', fontWeight: 600, color: '#1d1d1f' }}>
              Transmission Line Inspection Solution
            </span>
          </div>

          {/* Right Navigation Anchors & Quick Scenario Switchers */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', overflowX: 'auto', scrollbarWidth: 'none' }}>
            <a
              href="#overview"
              style={{
                fontSize: '0.85rem',
                color: '#424245',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0071e3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#424245')}
            >
              Overview
            </a>
            {scenariosData.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => handleSelectScenario(idx)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 0',
                  fontSize: '0.85rem',
                  fontWeight: activeScenarioIndex === idx ? 700 : 500,
                  color: activeScenarioIndex === idx ? '#d70015' : '#424245',
                  borderBottom: activeScenarioIndex === idx ? '2px solid #d70015' : '2px solid transparent',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {s.shortName}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setShowSalesModal(true)}
              style={{
                backgroundColor: '#d70015',
                color: '#ffffff',
                border: 'none',
                borderRadius: '9999px',
                padding: '6px 16px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background-color 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b70012';
                e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d70015';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Inquire Now
            </button>
          </div>
        </div>
      </nav>

      {/* 3. SECTION: SOLUTION OVERVIEW (with the 3D isometric overview image and interactive pins) */}
      <section id="overview" style={{ padding: '64px 24px 50px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          {/* Section Header */}
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              letterSpacing: '-0.02em',
              margin: '0 0 20px 0',
            }}
          >
            Solution overview
          </h2>

          {/* Subtitle / Paragraph */}
          <div style={{ maxWidth: '880px', margin: '0 auto 44px', color: '#555558', fontSize: '1rem', lineHeight: 1.65 }}>
            <p style={{ margin: '0 0 12px 0' }}>
              Electricity generated at power plants must travel long distances and undergo voltage conversion before reaching consumers. Transmission lines are critical components in this process, requiring continuous monitoring to prevent failures and ensure smooth operation.
            </p>
            <p style={{ margin: 0 }}>
              Coloron’s advanced solution uses smart technologies to enhance security, streamline maintenance, and ensure cost-effective, safe operations. Read on to learn more.
            </p>
          </div>

          {/* 3D Advanced Map Diagram with Interactive Numbered Hotspots */}
          <div
            style={{
              position: 'relative',
              maxWidth: '920px',
              margin: '0 auto 36px',
              borderRadius: '16px',
              backgroundColor: '#fbfbfd',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              overflow: 'hidden',
              padding: '16px',
            }}
          >
            <div style={{ position: 'relative', width: '100%', display: 'inline-block' }}>
              <img
                src="/images/transmission-line/Transmission-Line-Inspection-Solution-overview.png"
                alt="Transmission Line Inspection Solution Overview 3D Map"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '10px',
                }}
              />

              {/* Hotspot Markers (Exact coords from Hikvision source: 1: 40%, 28% | 2: 33%, 12% | 3: 60%, 10% | 4: 50%, 72%) */}
              {scenariosData.map((sc, i) => {
                const isActive = activeScenarioIndex === i;
                return (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => handleSelectScenario(i)}
                    style={{
                      position: 'absolute',
                      left: sc.pinCoords.left,
                      top: sc.pinCoords.top,
                      transform: 'translate(-50%, -50%)',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      zIndex: 10,
                      outline: 'none',
                    }}
                    aria-label={`Inspect ${sc.title}`}
                  >
                    {/* Pulsing ring when active */}
                    <div
                      style={{
                        position: 'relative',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {isActive && (
                        <span
                          style={{
                            position: 'absolute',
                            inset: '-4px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(215, 0, 21, 0.35)',
                            animation: 'ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite',
                          }}
                        />
                      )}
                      {/* Pin Circle */}
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          backgroundColor: isActive ? '#d70015' : 'rgba(29, 29, 31, 0.85)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.88rem',
                          fontWeight: 700,
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                          transition: 'all 0.25s ease',
                          transform: isActive ? 'scale(1.15)' : 'scale(1)',
                        }}
                      >
                        {sc.number}
                      </div>

                      {/* Floating tooltip with sub-scenario title */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '100%',
                          left: '50%',
                          transform: 'translateX(-50%) translateY(-6px)',
                          backgroundColor: 'rgba(15, 15, 17, 0.9)',
                          color: '#ffffff',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          whiteSpace: 'nowrap',
                          pointerEvents: 'none',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
                          opacity: isActive ? 1 : 0.85,
                          transition: 'opacity 0.2s',
                        }}
                      >
                        {sc.title}
                        <div
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            borderWidth: '4px',
                            borderStyle: 'solid',
                            borderColor: 'rgba(15, 15, 17, 0.9) transparent transparent transparent',
                          }}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Interactive instruction hint */}
            <div style={{ marginTop: '12px', fontSize: '0.82rem', color: '#86868b' }}>
              💡 Click on any numbered pin above or choose a scenario below to explore dedicated challenges & solutions
            </div>
          </div>

          {/* 4-Item Scenario Selector Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              margin: '0 auto',
            }}
          >
            {scenariosData.map((sc, i) => {
              const isActive = activeScenarioIndex === i;
              return (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => handleSelectScenario(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 20px',
                    borderRadius: '9999px',
                    border: isActive ? '1.5px solid #d70015' : '1px solid rgba(0, 0, 0, 0.12)',
                    backgroundColor: isActive ? 'rgba(215, 0, 21, 0.05)' : '#ffffff',
                    color: isActive ? '#d70015' : '#1d1d1f',
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    fontWeight: isActive ? 700 : 500,
                    boxShadow: isActive ? '0 4px 14px rgba(215, 0, 21, 0.12)' : '0 2px 6px rgba(0, 0, 0, 0.02)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? '#d70015' : '#e5e5ea',
                      color: isActive ? '#ffffff' : '#48484a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}
                  >
                    {sc.number}
                  </span>
                  <span>{sc.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SECTION: DEDICATED SUB-SCENARIO DETAILS (Corridor Inspection, etc.) */}
      <section
        id="scenario-details-section"
        style={{
          padding: '60px 24px 80px',
          backgroundColor: '#f5f5f7',
          borderTop: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          {/* Sub-scenario Title */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#d70015',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '8px',
              }}
            >
              Scenario {activeScenario.number} of {scenariosData.length}
            </span>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              {activeScenario.title}
            </h2>
          </div>

          {/* SUBSECTION: CHALLENGES */}
          <div style={{ marginBottom: '64px' }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  marginBottom: '10px',
                }}
              >
                Challenges
              </h3>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#6e6e73',
                  maxWidth: '720px',
                  margin: '0 auto',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line',
                }}
              >
                {activeScenario.challengeIntro}
              </p>
            </div>

            {/* 2 Challenge Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
              }}
            >
              {activeScenario.challenges.map((c) => (
                <div
                  key={c.id}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                    border: '1px solid rgba(0, 0, 0, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16 / 10',
                      backgroundColor: '#1d1d1f',
                      overflow: 'hidden',
                      cursor: 'zoom-in',
                    }}
                    onClick={() => setLightboxImg(c.image)}
                  >
                    <img
                      src={c.image}
                      alt={c.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        right: '12px',
                        bottom: '12px',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: '#ffffff',
                        padding: '6px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      title="Enlarge Image"
                    >
                      <Maximize2 size={14} />
                    </div>
                  </div>

                  <div style={{ padding: '24px 24px 28px' }}>
                    <h4
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: '#1d1d1f',
                        margin: '0 0 10px 0',
                        lineHeight: 1.35,
                      }}
                    >
                      {c.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: '#6e6e73',
                        lineHeight: 1.55,
                        margin: 0,
                      }}
                    >
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SUBSECTION: WHAT WE OFFER */}
          <div style={{ marginBottom: '64px' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  marginBottom: '10px',
                }}
              >
                What we offer
              </h3>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#6e6e73',
                  maxWidth: '780px',
                  margin: '0 auto',
                  lineHeight: 1.6,
                }}
              >
                {activeScenario.offerIntro}
              </p>
            </div>

            {/* Alternating Feature Showcase Rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {activeScenario.offerItems.map((item, idx) => {
                const isImageLeft = item.imageSide === 'left';
                return (
                  <div
                    key={item.id}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                      alignItems: 'center',
                    }}
                  >
                    {/* Media Block (ordered depending on side) */}
                    <div
                      style={{
                        order: isImageLeft ? 1 : 2,
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        minHeight: '280px',
                        backgroundColor: '#0c1017',
                        overflow: 'hidden',
                        cursor: 'zoom-in',
                      }}
                      onClick={() => setLightboxImg(item.image)}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          transition: 'transform 0.4s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          right: '12px',
                          bottom: '12px',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          color: '#ffffff',
                          padding: '6px',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Maximize2 size={14} />
                      </div>
                    </div>

                    {/* Text Block */}
                    <div
                      style={{
                        order: isImageLeft ? 2 : 1,
                        padding: 'clamp(28px, 4vw, 48px)',
                      }}
                    >
                      <h4
                        style={{
                          fontSize: 'clamp(1.25rem, 2vw, 1.55rem)',
                          fontWeight: 700,
                          color: '#1d1d1f',
                          margin: '0 0 14px 0',
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontSize: '0.94rem',
                          color: '#555558',
                          lineHeight: 1.6,
                          margin: '0 0 20px 0',
                        }}
                      >
                        {item.desc}
                      </p>

                      {/* Bullet list */}
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                        }}
                      >
                        {item.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              fontSize: '0.9rem',
                              color: '#3a3a3c',
                              lineHeight: 1.45,
                            }}
                          >
                            <span
                              style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                backgroundColor: '#d70015',
                                marginTop: '7px',
                                flexShrink: 0,
                              }}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SUBSECTION: PRODUCT RECOMMENDATION */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  margin: 0,
                }}
              >
                Product Recommendation
              </h3>
            </div>

            {/* Product Cards Row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '24px',
                flexWrap: 'wrap',
              }}
            >
              {activeScenario.products.map((prod) => {
                const isCompared = !!comparedProducts[prod.id];
                return (
                  <div
                    key={prod.id}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '14px',
                      padding: '24px',
                      width: '100%',
                      maxWidth: '320px',
                      boxShadow: '0 4px 18px rgba(0, 0, 0, 0.04)',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 10px 26px rgba(0, 0, 0, 0.07)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 0, 0, 0.04)';
                    }}
                  >
                    {/* Product Image */}
                    <div
                      style={{
                        width: '100%',
                        height: '180px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fbfbfd',
                        borderRadius: '8px',
                        marginBottom: '16px',
                        padding: '12px',
                      }}
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        style={{
                          maxHeight: '150px',
                          maxWidth: '100%',
                          objectFit: 'contain',
                          display: 'block',
                        }}
                      />
                    </div>

                    {/* Product Info */}
                    <div style={{ width: '100%', marginBottom: '16px' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          color: '#0071e3',
                          letterSpacing: '0.04em',
                          display: 'block',
                          marginBottom: '4px',
                        }}
                      >
                        {prod.category}
                      </span>
                      <h4
                        style={{
                          fontSize: '1.02rem',
                          fontWeight: 700,
                          color: '#1d1d1f',
                          margin: '0 0 6px 0',
                          lineHeight: 1.3,
                        }}
                      >
                        {prod.model}
                      </h4>
                      <p
                        style={{
                          fontSize: '0.84rem',
                          color: '#6e6e73',
                          margin: '0 0 10px 0',
                          lineHeight: 1.4,
                        }}
                      >
                        {prod.name}
                      </p>
                      <p
                        style={{
                          fontSize: '0.78rem',
                          color: '#86868b',
                          margin: 0,
                          lineHeight: 1.45,
                        }}
                      >
                        {prod.specs}
                      </p>
                    </div>

                    {/* Compare Checkbox & Action */}
                    <div
                      style={{
                        width: '100%',
                        borderTop: '1px solid rgba(0,0,0,0.06)',
                        paddingTop: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <label
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.82rem',
                          color: '#555558',
                          cursor: 'pointer',
                          userSelect: 'none',
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isCompared}
                          onChange={() => toggleCompare(prod.id)}
                          style={{
                            cursor: 'pointer',
                            accentColor: '#0071e3',
                          }}
                        />
                        <span>add to compare</span>
                      </label>

                      <Link
                        to="/compare"
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: '#0071e3',
                          textDecoration: 'none',
                        }}
                      >
                        Compare &gt;
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 5. SECTION: "YOU MAY ALSO BE INTERESTED IN" */}
      <section style={{ padding: '70px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              You may also be interested in
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {relatedInterests.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                style={{
                  position: 'relative',
                  height: '240px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '28px',
                  color: '#ffffff',
                  boxShadow: '0 4px 18px rgba(0, 0, 0, 0.08)',
                }}
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Dark Vignette / Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.45) 55%, rgba(0, 0, 0, 0.2) 100%)',
                  }}
                />

                {/* Text Content */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      margin: '0 0 4px 0',
                      color: '#ffffff',
                    }}
                  >
                    {item.title}
                  </h3>
                  {item.tag && (
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 500,
                        color: 'rgba(255, 255, 255, 0.75)',
                        display: 'block',
                        marginBottom: '8px',
                      }}
                    >
                      {item.tag}
                    </span>
                  )}
                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: 'rgba(255, 255, 255, 0.88)',
                      lineHeight: 1.45,
                      margin: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION: "READY TO DISCUSS YOUR NEEDS?" CTA BANNER */}
      <section
        style={{
          padding: '64px 24px 72px',
          backgroundColor: '#ffffff',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              letterSpacing: '-0.02em',
              margin: '0 0 28px 0',
            }}
          >
            Ready to discuss your needs?
          </h2>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <button
              type="button"
              onClick={() => setShowSalesModal(true)}
              style={{
                backgroundColor: '#d70015',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                padding: '12px 28px',
                fontSize: '0.92rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background-color 0.2s ease, transform 0.2s ease',
                boxShadow: '0 4px 14px rgba(215, 0, 21, 0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b70012';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d70015';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact Coloron Sales
            </button>

            <Link
              to="/contact"
              style={{
                backgroundColor: '#ffffff',
                color: '#d70015',
                border: '1.5px solid #d70015',
                borderRadius: '4px',
                padding: '11px 26px',
                fontSize: '0.92rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(215, 0, 21, 0.05)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact a Distributor
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Full-Resolution Image Inspection */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImg}
              alt="Enlarged preview"
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              }}
            />
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: 'absolute',
                top: '-16px',
                right: '-16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                color: '#1d1d1f',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Sales Inquiries Modal */}
      <ContactSalesModal
        isOpen={showSalesModal}
        onClose={() => setShowSalesModal(false)}
        initialSolution="Transmission Line Inspection Solution"
      />
    </div>
  );
}
