import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Home,
  Maximize2,
  X,
  Shield,
  Zap,
  Activity,
  Flame,
  Camera,
  Cpu,
  Layers,
  BarChart3,
  AlertTriangle,
  FileText,
  PhoneCall,
  Sliders,
  Check,
  ChevronDown,
  ChevronUp,
  Waves
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Sub-scenarios data matching Hikvision Hydroelectric Power Plants structure
const scenariosData = [
  {
    id: 'reservoir-dam',
    number: 1,
    title: 'Reservoir & Dam',
    shortName: 'Reservoir & Dam',
    pinCoords: { left: '30%', top: '20%' },
    challengeIntro: 'Operating in vast open water and mountainous wilderness presents multiple security and safety risks:',
    challenges: [
      {
        id: 'h-c1',
        title: 'Difficulty in monitoring water level changes',
        image: '/images/hydro-plants/Difficulty-in-monitoring-water-level-changes.png',
        desc: 'Rapid water level fluctuations during monsoon floods, dam discharges, and seasonal snowmelts demand continuous millimeter-accurate telemetry without manual gauge reading.',
      },
      {
        id: 'h-c2',
        title: 'Geological changes pose safety hazards',
        image: '/images/hydro-plants/Geological-changes-pose-safety-hazards.png',
        desc: 'Reservoir bank landslides, slope instabilities, and dam crest structural deformation can lead to catastrophic breach hazards if micro-shifts are not caught early.',
      },
    ],
    offerIntro: 'Coloron offers solutions that provide timely detection and alerts for events threatening safe operations, enabling quick resolution of potential problems and enhancing operational efficiency.',
    offerItems: [
      {
        id: 'h-o1',
        title: 'Unauthorized ship detection',
        desc: 'Coloron’s millimeter-wave radar integrated with long-range thermal and optical PTZ cameras detects potential vessel intrusions up to 2 kilometers away in all weather conditions.',
        bullets: [
          'Automatic radar slew-to-cue locks onto drifting boats and barges approaching spillway exclusion zones',
          'Intelligent AI classification distinguishes navigation buoys, floating driftwood, and unauthorized watercraft',
          'Integrated acoustic sound-cannon triggers directional warning sirens to turn back trespassing boats',
        ],
        image: '/images/hydro-plants/Unauthorized-ship-detection.png',
        imageSide: 'right',
      },
      {
        id: 'h-o2',
        title: 'Water level detection',
        desc: 'Coloron’s 3C Series water-level detection speed domes use high-definition optical recognition algorithms to read staff gauges and water surface boundaries automatically.',
        bullets: [
          'Continuous sub-centimeter automated gauge telemetry without manual binoculars reading',
          'Integrated infrared illumination guarantees precise water elevation measurement even in pitch darkness',
          'Instant high-water and low-water alarm linkage notifies dam floodgate controllers',
        ],
        image: '/images/hydro-plants/Water-level-detection.png',
        imageSide: 'left',
      },
      {
        id: 'h-o3',
        title: 'Water flow measurement',
        desc: 'Non-contact radar surface velocity cameras monitor spillway discharge speed and tailrace volumetric rates in real time, preventing sensor washout during torrents.',
        bullets: [
          'Surface velocity measurement unaffected by high-velocity turbulence or floating debris',
          'Automated cross-sectional hydraulic discharge calculation for power generation efficiency',
          'Continuous historical telemetry logging for hydrologic compliance archives',
        ],
        image: '/images/hydro-plants/Water-flow-measurement.png',
        imageSide: 'right',
      },
      {
        id: 'h-o4',
        title: 'Displacement monitoring',
        desc: 'Coloron’s structural displacement monitoring cameras track micro-millimeter shifts across dam abutments, spillway piers, and surrounding reservoir canyon slopes.',
        bullets: [
          'High-precision optical pattern matching detects structural tilting and masonry micro-shifts',
          'Continuous 24/7 baseline comparison triggers warning alarms upon abnormal slope subsidence',
          'Integrates seamlessly with GNSS geodesy receivers and piezometer telemetry networks',
        ],
        image: '/images/hydro-plants/Displacement-monitoring.png',
        imageSide: 'left',
      },
      {
        id: 'h-o5',
        title: 'Underwater monitoring of the intake',
        desc: 'Ruggedized 316L marine-grade stainless steel underwater cameras inspect penstock intake trash racks, bottom sluice gates, and turbine runners submerged in deep water.',
        bullets: [
          'High-pressure underwater casing rated for deep-water submersion up to 50 meters',
          'Monitors trash rack clogging, silt sedimentation, and floating debris build-up in real time',
          'Dramatically reduces dangerous commercial diver underwater inspection hours',
        ],
        image: '/images/hydro-plants/Underwater-monitoring-of-the-intake.png',
        imageSide: 'right',
      },
      {
        id: 'h-o6',
        title: 'AR live interaction',
        desc: 'Augmented Reality panoramic cameras map real-time water levels, turbine megawatts, gate opening percentages, and CCTV tags directly onto the live dam video.',
        bullets: [
          'Bird’s-eye live interactive dam map linking major hydraulic structures to real-time telemetry',
          'One-click zoom to any water intake, powerhouse bay, or tailrace gate directly on the AR screen',
          'Streamlines emergency dispatching and situational assessment during peak flood release operations',
        ],
        image: '/images/hydro-plants/AR-live-interaction.png',
        imageSide: 'left',
      },
    ],
    products: [
      {
        id: 'hm-td71c8',
        model: 'HM-TD71C8-55/W',
        name: 'Thermal Panoramic Scanner',
        image: '/images/hydro-plants/product-thermal-scanner.png',
        specs: 'Panoramic 360° thermal scanning, long-range fire & intrusion detection, IP67 weather-sealed',
        category: 'Thermal Scanners',
      },
      {
        id: 'ds-2td8167',
        model: 'DS-2TD8167-150ZE2F/W',
        name: 'Thermal & Optical Bi-spectrum Stable PTZ',
        image: '/images/hydro-plants/product-bi-spectrum-ptz.png',
        specs: '640×512 thermal sensor, 60x optical zoom, gyro-stabilized heavy-duty pan/tilt',
        category: 'Heavy-Duty PTZ',
      },
      {
        id: 'ds-tdsb0g-2km',
        model: 'DS-TDSB0G-FC/2km',
        name: '2Km Security Radar',
        image: '/images/hydro-plants/product-radar-2km.png',
        specs: 'Millimeter-wave radar, 2,000m vessel tracking range, 120° azimuth coverage',
        category: 'Security Radar',
      },
      {
        id: 'ds-2df3c400',
        model: 'DS-2DF3C400SCG-D',
        name: '4MP Water-Level Detection Speed Dome',
        image: '/images/hydro-plants/product-water-level-ptz.png',
        specs: 'AI staff gauge recognition, smart infrared illumination, automated stage telemetry',
        category: 'Specialized Cameras',
      },
    ],
  },
  {
    id: 'step-up-substation',
    number: 2,
    title: 'Step-Up Substation',
    shortName: 'Step-Up Substation',
    pinCoords: { left: '59%', top: '16%' },
    challengeIntro: 'Step-up substations handle extreme voltages from hydro turbines, operating in harsh electromagnetic and high-risk environments.',
    challenges: [
      {
        id: 'h-c3',
        title: 'Harsh environments complicate on-site supervision tasks',
        image: '/images/hydro-plants/Harsh-environments-complicate-on-site-supervision-tasks.png',
        desc: 'High electromagnetic induction, extreme weather variations, and high-voltage electrical hazards make manual switchyard inspection perilous.',
      },
      {
        id: 'h-c4',
        title: 'Critical operations require continuous monitoring',
        image: '/images/hydro-plants/Critical-operations-require-continuous-monitoring.png',
        desc: 'Generator step-up transformers, SF6 gas circuit breakers, and busbar disconnectors require constant thermal telemetry to avoid power grid blackout.',
      },
    ],
    offerIntro: 'Coloron uses cutting-edge technologies and products to ensure smooth electrical operations, helping managers predict and address risks before faults occur.',
    offerItems: [
      {
        id: 'h-o7',
        title: 'Industrial thermography',
        desc: 'Continuous radiometric thermal cameras monitor transformer bushings, oil cooling radiators, and high-voltage terminations with ±2°C accuracy.',
        bullets: [
          'Pre-alarm threshold triggers before catastrophic dielectric breakdown or transformer fire',
          'Optical and thermal bi-spectrum picture-in-picture pinpoints exact loose bolted connections',
          'Automatic thermal trend graphs export into SCADA predictive maintenance logs',
        ],
        image: '/images/hydro-plants/Industrial-thermography.png',
        imageSide: 'left',
      },
      {
        id: 'h-o8',
        title: 'AI-powered gauge reading',
        desc: 'DeepinView macro cameras read analog dial pointer meters, oil sight glasses, and digital counters across high-voltage switchgear cabinets automatically.',
        bullets: [
          'Sub-millisecond dial pointer recognition replaces error-prone manual clipboard logging',
          'Instant discrepancy alarm if transformer oil level drops or SF6 gas pressure falls below nominal',
          'Standardized digital telemetry feeds directly into central hydropower SCADA systems',
        ],
        image: '/images/hydro-plants/AI-powered-gauge-reading.png',
        imageSide: 'right',
      },
    ],
    products: [
      {
        id: 'thermal-bullet-2637',
        model: 'DS-2TD2637-25/QY',
        name: 'Thermal & Optical Bi-spectrum Bullet Camera',
        image: '/images/solar-farms/product-thermal-bullet.png',
        specs: 'Radiometric thermal + 4K optical, anti-corrosion casing, integrated strobe & siren',
        category: 'Thermal Cameras',
      },
    ],
  },
  {
    id: 'field-operation-area',
    number: 3,
    title: 'Field Operation Area',
    shortName: 'Field Operation Area',
    pinCoords: { left: '62%', top: '50%' },
    challengeIntro: 'Hydroelectric turbine galleries, penstock tunnels, and generator shafts are confined spaces where worker safety is paramount.',
    challenges: [
      {
        id: 'h-c5',
        title: 'Shortage of qualified inspection personnel',
        image: '/images/hydro-plants/Shortage-of-qualified-inspection-personnel.png',
        desc: 'Operating and maintaining giant Francis or Kaplan turbines requires senior electrical and mechanical specialists who cannot be stationed at every remote cavern.',
      },
      {
        id: 'h-c6',
        title: 'Complex operational processes hinder effective management',
        image: '/images/hydro-plants/Complex-operational-processes-hinder-effective-management.png',
        desc: 'Lockout/tagout procedures during turbine overhauls require rigorous step-by-step verification to eliminate fatal electric shock risks.',
      },
    ],
    offerIntro: 'Coloron provides smart digital wearable products to enhance safety and ensure standardized operations through real-time audio-video verification.',
    offerItems: [
      {
        id: 'h-o9',
        title: 'Real-time process recording',
        desc: 'High-definition 4G body cameras capture operations from the technician’s first-person view, linking the control center with remote powerhouse galleries.',
        bullets: [
          'Live video streaming allows chief engineers to guide maintenance crews through complicated turbine alignment',
          'Two-way noise-cancelled intercom ensures clear communication inside noisy turbine halls',
          'GPS and indoor Bluetooth beacons log precise technician locations across multi-level powerhouse shafts',
        ],
        image: '/images/hydro-plants/Real-time-process-recording.png',
        imageSide: 'left',
      },
      {
        id: 'h-o10',
        title: 'PPE & safety operational detection',
        desc: 'AI edge cameras audit safety adherence continuously across turbine generator pits, gantry cranes, and switchyard catwalks.',
        bullets: [
          'Detects missing hard hats, lack of safety harnesses, and improper high-voltage protective gloves',
          'Instant audio alerts warn personnel approaching open shaft railings or energized equipment zones',
          'Generates automated safety compliance audit scores across all hydropower station work shifts',
        ],
        image: '/images/hydro-plants/PPE-and-safety-operational-detection.png',
        imageSide: 'right',
      },
    ],
    products: [
      {
        id: 'mcw407-body-cam',
        model: 'DS-MCW407',
        name: 'Ultra Series 4G Body Camera',
        image: '/images/transmission-line/product-ptz-ds-2dy5225ix.png',
        specs: '1080p 60fps recording, 4G / Wi-Fi live streaming, GPS/BDS tracking, IP68 drop-resistant',
        category: 'Body Worn Cameras',
      },
    ],
  },
  {
    id: 'perimeter-entrance',
    number: 4,
    title: 'Perimeter & Entrance',
    shortName: 'Perimeter & Entrance',
    pinCoords: { left: '28%', top: '40%' },
    challengeIntro: 'Hydropower dams cover vast geographic frontiers where public roads, hiking trails, and reservoir waters intersect with critical energy infrastructure.',
    challenges: [
      {
        id: 'h-c7',
        title: 'Extensive perimeter coverage',
        image: '/images/hydro-plants/Extensive-perimeter-coverage.png',
        desc: 'Mountainous perimeter fence lines spanning dozens of kilometers are vulnerable to illegal trespassers, wildlife breaches, and unauthorized tourist access.',
      },
      {
        id: 'h-c8',
        title: 'Inefficient access control management',
        image: '/images/hydro-plants/Inefficient-access-control-management.png',
        desc: 'Heavy contractor traffic, government visitors, and delivery trucks slow down entrance gates without automated credentialing systems.',
      },
    ],
    offerIntro: 'Coloron delivers comprehensive perimeter protection and intelligent vehicle access control tailored for vital national infrastructure.',
    offerItems: [
      {
        id: 'h-o11',
        title: 'Perimeter protection',
        desc: 'Thermal bullet cameras and fiber-optic fence sensors detect trespassers over long perimeters, distinguishing humans and vehicles from wildlife.',
        bullets: [
          'Deep-learning perimeter analytics eliminate 99% of false alarms caused by tree branches or animals',
          'Active deterrence spotlights and audible voice sirens turn back trespassers before fence scaling',
          'Fiber-optic vibration cables protect remote cliff boundaries without field power wiring',
        ],
        image: '/images/hydro-plants/Perimeter-protection.png',
        imageSide: 'left',
      },
      {
        id: 'h-o12',
        title: 'Vehicle & visitor management',
        desc: 'AI ANPR cameras recognize license plates in sub-seconds and synchronize with smart barrier gates for seamless authorized entry.',
        bullets: [
          'Automatic license plate recognition with high-speed motorized barrier gate linkage',
          'Face recognition turnstiles and contactless visitor self-service kiosk registration',
          'Real-time headcount tracking ensuring all visitors and contractors are accounted for in emergencies',
        ],
        image: '/images/hydro-plants/Vehicle-management.png',
        imageSide: 'right',
      },
    ],
    products: [
      {
        id: 'ids-2cd7a47g0',
        model: 'iDS-2CD7A47G0-XZHS(Y)',
        name: '4MP DarkFighterS DeepinView Bullet Camera',
        image: '/images/hydro-plants/product-deepinview-bullet.png',
        specs: '1/1.8" CMOS, DarkFighterS ultra-low light, ANPR and perimeter protection, IP67/IK10',
        category: 'DeepinView Cameras',
      },
    ],
  },
  {
    id: 'control-center',
    number: 5,
    title: 'Control Center',
    shortName: 'Control Center',
    pinCoords: { left: '45%', top: '70%' },
    challengeIntro: 'Operating multiple hydropower stations requires centralized dispatching, unified alarm correlation, and intuitive data visualization.',
    challenges: [
      {
        id: 'h-c9',
        title: 'Lack of integrated management platforms',
        image: '/images/hydro-plants/Lack-of-integrated-management-platforms.png',
        desc: 'Siloed systems for hydrology telemetry, dam deformation sensors, perimeter intrusion, and turbine video impede rapid emergency response.',
      },
      {
        id: 'h-c10',
        title: 'Limited visibility across facilities',
        image: '/images/hydro-plants/Limited-visibility-across-facilities.png',
        desc: 'Without unified video wall dashboards, dispatchers struggle to correlate water reservoir inflow rates with powerhouse generation dispatch in real time.',
      },
    ],
    offerIntro: 'Coloron provides an enterprise-class visual operations center platform, unifying GIS maps, SCADA metrics, and video intelligence.',
    offerItems: [
      {
        id: 'h-o13',
        title: 'Visualized dashboard',
        desc: 'ColoronCentral Power & Utilities platform consolidates real-time water levels, turbine megawatts, floodgate statuses, and security alarms onto an interactive digital twin.',
        bullets: [
          'Unified 3D dam model with live video feeds and hydrological gauge widgets',
          'Automated emergency dispatching links spillway alarms to regional civil protection centers',
          'High-density video wall controllers deliver crystal-clear 4K situational awareness',
        ],
        image: '/images/hydro-plants/Visualized-dashboard.png',
        imageSide: 'left',
      },
      {
        id: 'h-o14',
        title: 'Inspection management platform',
        desc: 'Digitizes routine inspection work tickets, automated thermal camera routes, and maintenance histories into standardized compliance documentation.',
        bullets: [
          'Pre-scheduled automated camera patrol tours inspect critical dam gates and switchyard disconnectors',
          'Consolidated audit trails archive all maintenance logs and evidentiary inspection photos',
          'AI-driven predictive failure reporting alerts operators to equipment anomalies weeks before failure',
        ],
        image: '/images/hydro-plants/Inspection-management-platform.png',
        imageSide: 'right',
      },
    ],
    products: [
      {
        id: 'ids-9632nxi',
        model: 'iDS-9632NXI-I8/X-AI',
        name: '32-ch 2U 4K DeepinMind NVR',
        image: '/images/hydro-plants/product-deepinmind-nvr.png',
        specs: 'Up to 32 IP cameras, AI facial recognition & perimeter defense, 8 SATA interfaces, 4K HDMI',
        category: 'AI NVR Servers',
      },
      {
        id: 'ds-d2046tl',
        model: 'DS-D2046TL-1B',
        name: '46" Ultra-Narrow Bezel LCD Video Wall Display',
        image: '/images/hydro-plants/ds-d2046tl-1b.jpg',
        specs: '1.7mm ultra-narrow bezel, 500 nits brightness, direct LED backlight, 24/7 continuous operation',
        category: 'Control Room Displays',
      },
    ],
  },
];

// Related interests
const relatedInterests = [
  {
    title: 'Power & Utilities',
    tag: '/ Solutions by industry /',
    desc: 'Coloron provides comprehensive system solutions to enhance safety and efficiency for energy businesses, optimizing operational awareness and management through the value chains.',
    image: '/images/transmission-line/Top-banner_Mo.jpg',
    link: '/solutions',
  },
  {
    title: 'Water Conservancy & Hydro',
    tag: '/ Solutions by function /',
    desc: 'Advanced optical and acoustic solutions providing intelligent water level telemetry, surface flow measurement, and structural deformation monitoring for large dams.',
    image: '/images/transmission-line/Intelligent-Inspection.jpg',
    link: '/solutions/electrical-substations',
  },
  {
    title: 'Solar-powered Security Camera Series',
    tag: '/ Core Products /',
    desc: 'High-performance standalone solar security cameras designed for remote wilderness installations with no grid power or wired internet connections.',
    image: '/images/solar-farms/solar-power-kit2.jpg',
    link: '/products',
  },
];

export default function HydroelectricPowerPlantsSolution() {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [comparedProducts, setComparedProducts] = useState({});
  const [lightboxImg, setLightboxImg] = useState(null);

  const activeScenario = scenariosData[activeScenarioIndex];

  const handleSelectScenario = (index) => {
    setActiveScenarioIndex(index);
    const el = document.getElementById('hydro-scenario-content');
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
      
      {/* 1. HERO BANNER (Exact Hikvision visual banner with hydroelectric dam & spillway torrent under golden twilight) */}
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
        {/* Background Image: Hydroelectric Dam Spillway at Sunset */}
        <picture style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}>
          <source media="(max-width: 768px)" srcSet="/images/hydro-plants/Hydroelectric-Power-Plants-solution-mobile-banner.png" />
          <img
            src="/images/hydro-plants/Hydroelectric-Power-Plants-solution-banner.png"
            alt="Hydroelectric Power Plants Solution Banner"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center right',
              display: 'block',
            }}
          />
        </picture>

        {/* Sunset Amber Radial Gradient Disc Overlay (matching exact visual banner) */}
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
            {/* Scenario Icon Badge */}
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
              Hydroelectric Power Plants
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
              Preserving clean energy and water resources
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
              Coloron Hydroelectric Power Plants Solution
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
            Solution Overview
          </h2>

          {/* Subtitle / Paragraph */}
          <div style={{ maxWidth: '880px', margin: '0 auto 44px', color: '#555558', fontSize: '1rem', lineHeight: 1.65 }}>
            <p style={{ margin: '0 0 12px 0' }}>
              The global pursuit of clean energy is gaining increasing attention, with hydropower stations emerging as an ideal choice due to their stable power generation and environmentally friendly nature.
            </p>
            <p style={{ margin: 0 }}>
              Coloron’s advanced solution uses smart technologies and AIoT products to enhance safety and ensure cost-effective, efficient operations and management. Read on to learn more.
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
                src="/images/hydro-plants/hikvision-hydroelectric-Power-Plants-solution-overview.png"
                alt="Hydroelectric Power Plants Solution Overview 3D Map"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '10px',
                }}
              />

              {/* Hotspot Markers (Coords: 1: Reservoir (30%, 20%), 2: Substation (59%, 16%), 3: Field (62%, 50%), 4: Perimeter (28%, 40%), 5: Control (45%, 70%)) */}
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

                      {/* Floating tooltip */}
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

            {/* Hint */}
            <div style={{ marginTop: '12px', fontSize: '0.82rem', color: '#86868b' }}>
              💡 Click on any numbered pin above or choose a sub-scenario below to explore dedicated challenges & solutions
            </div>
          </div>

          {/* 5-Item Scenario Selector Pills */}
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

      {/* 4. SECTION: DEDICATED SUB-SCENARIO DETAILS */}
      <section
        id="hydro-scenario-content"
        style={{
          padding: '60px 24px 80px',
          backgroundColor: '#f5f5f7',
          borderTop: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          {/* Sub-scenario Title */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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

            {/* Challenge Cards Grid */}
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

            {/* Alternating Feature Showcase Rows matching screenshot */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {activeScenario.offerItems.map((item) => {
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
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '20px',
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
                      padding: '24px 20px',
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
                        height: '160px',
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
                          maxHeight: '130px',
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
                          fontSize: '0.98rem',
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
                          fontSize: '0.82rem',
                          color: '#6e6e73',
                          margin: '0 0 10px 0',
                          lineHeight: 1.4,
                        }}
                      >
                        {prod.name}
                      </p>
                      <p
                        style={{
                          fontSize: '0.76rem',
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

      {/* 5. SECTION: CONTACT OUR SOLUTION EXPERT TODAY */}
      <section
        style={{
          padding: '64px 24px 72px',
          backgroundColor: '#ffffff',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
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
              margin: '0 0 24px 0',
            }}
          >
            Contact Our Solution Expert Today
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
                padding: '12px 32px',
                fontSize: '0.94rem',
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
              Contact Us
            </button>

            <Link
              to="/contact"
              style={{
                backgroundColor: '#ffffff',
                color: '#d70015',
                border: '1.5px solid #d70015',
                borderRadius: '4px',
                padding: '11px 26px',
                fontSize: '0.94rem',
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

      {/* 6. SECTION: "YOU MAY ALSO BE INTERESTED IN" */}
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
        initialSolution="Hydroelectric Power Plants Solution"
      />
    </div>
  );
}
