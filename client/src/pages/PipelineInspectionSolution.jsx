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
  Check
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Sub-scenarios data matching Hikvision Pipeline Inspection structure
const scenariosData = [
  {
    id: 'pipelines',
    number: 1,
    title: 'Pipelines',
    shortName: 'Pipelines',
    pinCoords: { left: '68%', top: '30%' },
    challengeIntro: 'Crude oil and natural gas travel through various types of pipelines from collection points to distribution stations. Long-distance pipelines present several challenges, including:',
    challenges: [
      {
        id: 'p-c1',
        title: 'Delayed leak and theft detection',
        image: '/images/pipeline/Delayed-leak-and-theft-detection.png',
        desc: 'Pipeline routes span thousands of kilometers across uninhabited wilderness. Unreported pinhole leaks, pipe ruptures, and illegal hot-tapping can cause severe product loss and environmental damage before detection.',
      },
      {
        id: 'p-c2',
        title: 'High costs due to remote locations',
        image: '/images/pipeline/High-costs-due-to-remote-locations.png',
        desc: 'Traversing deserts, alpine mountains, and dense boreal forests for routine visual patrols incurs exorbitant logistics expenses, helicopter charters, and extreme safety risks for patrol personnel.',
      },
    ],
    offerIntro: 'Coloron offers sensing solutions and solar-powered products for efficient pipeline monitoring.',
    offerItems: [
      {
        id: 'p-o1',
        title: 'Intrusion & Theft protection',
        desc: 'Coloron’s vibration fiber optic sensing solution uses buried optical fibers along pipelines for real-time detection. The optical fibers cover long distances and accurately identify the types and locations of anomalies. It also integrates with Coloron’s cameras for site monitoring.',
        bullets: [
          'Distributed Acoustic Sensing (DAS) detects excavation, vehicle passage, and footsteps up to 50 km per channel',
          'Intelligent AI algorithms filter out railway or roadway interference to prevent false alarms',
          'Automatic PTZ camera slew-to-cue locks onto the exact intrusion coordinate with instant visual verification',
        ],
        image: '/images/pipeline/Intrusion-Theft-protection.png',
        imageSide: 'left',
      },
      {
        id: 'p-o2',
        title: 'Remote inspection',
        desc: 'Solar-powered cameras are perfect for remote pipeline environments with limited power and network access. These cameras provide continuous 24/7 monitoring, capture high-resolution images via PTZ presets, and enable managers to respond quickly to any threats.',
        bullets: [
          'Fully autonomous power supply with high-efficiency photovoltaic panels and smart low-temperature lithium cells',
          '4G / 5G / Satellite broadband transmission streams high-definition video even in cellular dead-zones',
          'Scheduled preset patrols automatically monitor valve vaults, river crossings, and critical cathodic protection stations',
        ],
        image: '/images/pipeline/Remote-inspection.png',
        imageSide: 'right',
      },
    ],
    products: [
      {
        id: 'solar-thermal-pipeline',
        model: 'DS-2TXS2628-10P/QA/GLT/CH36S80',
        name: 'Solar-powered Thermal Camera Kit',
        image: '/images/transmission-line/product-solar-thermal-ds-2txs2628.png',
        specs: 'Bi-spectrum thermal + optical, built-in 80W solar panel & bracket, 4G LTE, IP67 weather-sealed',
        category: 'Solar Thermal Kits',
      },
    ],
  },
  {
    id: 'pump-compressor-station',
    number: 2,
    title: 'Pump & Compressor Station',
    shortName: 'Pump & Compressor Station',
    pinCoords: { left: '18%', top: '50%' },
    challengeIntro: 'Pump and compressor stations contain essential production equipment and operate in flammable and explosive environments. Even small accidents can lead to severe consequences.',
    challenges: [
      {
        id: 'p-c3',
        title: 'High risk of accidents in flammable & explosive environments',
        image: '/images/pipeline/High-risk-of-accidents-in-flammable-and-explosive-environments.png',
        desc: 'High gas pressures and volatile hydrocarbon vapors mean standard non-rated electrical devices can generate electrostatic sparks, risking devastating explosions.',
      },
      {
        id: 'p-c4',
        title: 'Ensuring safety & reliability of essential equipment',
        image: '/images/pipeline/Ensuring-safety-and-reliability-of-essential-equipment.png',
        desc: 'Compressor turbines, high-pressure pump manifolds, and valve skids suffer from continuous mechanical stress, where undetected thermal spikes or packing seal leaks trigger unplanned shutdowns.',
      },
    ],
    offerIntro: 'Coloron offers comprehensive solutions for pump and compressor station monitoring, enhancing safety and operational efficiency.',
    offerItems: [
      {
        id: 'p-o3',
        title: 'Perimeter protection',
        desc: 'Fiber optic products enable inspections without blind spots or explosion risks, meeting high safety standards. These products detect potential intrusions effectively, including climbing, crossing, and excavation, and provide timely alarm reports with detailed event information.',
        bullets: [
          'Intrinsically safe fiber optic perimeter fence barriers with zero electrical spark risk in hazardous zones',
          'Seamless integration with explosion-proof PTZ cameras and automated audible warning horns',
          'Deep-learning human/vehicle classification eliminates 98% of environmental false triggers',
        ],
        image: '/images/pipeline/Perimeter-protection.png',
        imageSide: 'left',
      },
      {
        id: 'p-o4',
        title: 'Gas leakage detection',
        desc: 'Coloron\'s devices for gas leakage detection cover wide areas. TDLAS Camera quickly detects gas leaks qualitatively and quantitatively, ensuring environmental and personnel safety. Gas Cloud Imaging Camera visualizes and locates gas leak distribution.',
        bullets: [
          'Optical Gas Imaging (OGI) and TDLAS laser telemetry detect fugitive methane and VOC gas plumes in real time',
          'Colorized gas cloud visualization overlays invisible vapors directly onto live video feeds',
          'Instant safety interlock triggers automated ventilation systems and emergency isolation valves',
        ],
        image: '/images/pipeline/Gas-leakage-detection01.png',
        imageSide: 'right',
      },
      {
        id: 'p-o5',
        title: 'Asset condition monitoring',
        desc: 'Thermal imaging data from thermography cameras provides insights into equipment conditions. Accurate temperature detection helps assess whether equipment is functioning normally.',
        bullets: [
          'Continuous radiometric temperature measurement accurate to ±2°C across critical bearings, motors, and flanges',
          'Dynamic thermal heatmaps identify mechanical friction hotspots and insulation deterioration before breakdown',
          'Automated alarm linkage logs temperature trends into SCADA predictive maintenance logs',
        ],
        image: '/images/pipeline/Asset-condition-monitoring.png',
        imageSide: 'left',
      },
    ],
    products: [
      {
        id: 'ex-proof-bullet',
        model: 'DS-2TD2568T-5/G0/T1Y',
        name: 'Explosion-Proof Thermographic Network Bullet Camera',
        image: '/images/pipeline/product-explosion-proof-bullet.png',
        specs: 'ATEX / IECEx certified, 316L stainless steel enclosure, radiometric temperature thermography, IP68',
        category: 'Explosion-Proof Cameras',
      },
    ],
  },
  {
    id: 'construction-site',
    number: 3,
    title: 'Construction Site',
    shortName: 'Construction Site',
    pinCoords: { left: '38%', top: '23%' },
    challengeIntro: 'Ensuring safe and regulated operations at construction sites poses several challenges:',
    challenges: [
      {
        id: 'p-c5',
        title: 'Lack of video recording of on-site operations',
        image: '/images/pipeline/Lack-of-video-recording-of-on-site-operations.png',
        desc: 'During pipeline trenching, stringing, welding, and non-destructive joint testing, lacking continuous video records prevents quality assurance and safety compliance auditing.',
      },
      {
        id: 'p-c6',
        title: 'Lack of timely assistance in emergencies',
        image: '/images/pipeline/Lack-of-timely-assistance-in-emergencies.png',
        desc: 'Workers stationed at isolated pipeline right-of-ways may experience trench collapses, medical emergencies, or flash fires without rapid dispatch support.',
      },
    ],
    offerIntro: 'Coloron provides a comprehensive solution to enhance safety and management at pipeline construction sites.',
    offerItems: [
      {
        id: 'p-o6',
        title: 'Field operation safety management',
        desc: 'Portable Cameras capture operations from the worker’s or a third-person perspective. The monitoring center can verify safety procedures and offer assistance via a two-way intercom. All field operation documentation is recorded on a single platform for unified management.',
        bullets: [
          'Ruggedized 4G body-worn cameras stream live POV video from welders and pipeline technicians',
          'Two-way voice intercom allows headquarters specialists to guide complex pipeline tie-in operations remotely',
          'Automated AI detects safety violations such as missing helmets, harnesses, and lack of ground observer presence',
        ],
        image: '/images/pipeline/Field-operation-safety-management.png',
        imageSide: 'left',
      },
    ],
    products: [
      {
        id: 'body-camera-mcw407',
        model: 'DS-MCW407',
        name: 'Ultra Series H.265 Wi-Fi & 4G Body Camera',
        image: '/images/transmission-line/product-ptz-ds-2dy5225ix.png',
        specs: '1080p 60fps recording, 4G / Wi-Fi live transmission, GPS/BDS tracking, IP68 waterproof, 2m drop-proof',
        category: 'Body Worn Cameras',
      },
    ],
  },
  {
    id: 'command-center',
    number: 4,
    title: 'Command Center',
    shortName: 'Command Center',
    pinCoords: { left: '50%', top: '72%' },
    challengeIntro: 'Efficient and unified management is crucial given the number of dispersed sites, workforce, and equipment.',
    challenges: [
      {
        id: 'p-c7',
        title: 'Lack of unified management platforms',
        image: '/images/pipeline/Lack-of-unified-management-platforms.png',
        desc: 'SCADA flowmeters, fiber optic vibration sensors, CCTV feeds, and drone patrol data are frequently segregated across incompatible legacy software systems.',
      },
      {
        id: 'p-c8',
        title: 'Difficulty securing dispersed sites',
        image: '/images/pipeline/Difficulty-securing-dispersed-sites.png',
        desc: 'Managing dozens of block valve stations, scraper traps, and compressor hubs dispersed across thousands of miles leads to delayed incident response and fragmented situational awareness.',
      },
    ],
    offerIntro: 'Coloron provides a comprehensive platform for data visualization and analysis, enhancing incident handling and maintenance efficiency.',
    offerItems: [
      {
        id: 'p-o7',
        title: 'AR live interaction',
        desc: 'Access a bird’s-eye view on a live map, linking major assets to video streaming and production data through system integration. Users can reach any location with a click, facilitating quicker and easier emergency response.',
        bullets: [
          'High-altitude Augmented Reality (AR) panoramic cameras map live CCTV, pressure telemetry, and emergency valves onto a single screen',
          'Clickable AR tags on pipeline corridors instantly launch corresponding ground cameras and valve controls',
          'Automated incident workflows guide dispatchers through emergency isolation and emergency repair protocols',
        ],
        image: '/images/pipeline/AR-live-interaction.png',
        imageSide: 'left',
      },
    ],
    products: [
      {
        id: 'coloron-central-oilgas',
        model: 'ColoronCentral - Oil & Gas Suite',
        name: 'Integrated Pipeline Supervisory & Security Platform',
        image: '/images/pipeline/AR-live-interaction.png',
        specs: 'Unified GIS digital twin, fiber vibration alarm linkage, SCADA telemetry bridge, AR panoramic fusion',
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

export default function PipelineInspectionSolution() {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [comparedProducts, setComparedProducts] = useState({});
  const [lightboxImg, setLightboxImg] = useState(null);

  const activeScenario = scenariosData[activeScenarioIndex];

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
      
      {/* 1. HERO BANNER (Exact Hikvision visual banner with giant pipeline under golden sunlight reflections & orange arc badge) */}
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
        {/* Background Image: Giant Pipeline with sunlight glint */}
        <picture style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}>
          <source media="(max-width: 768px)" srcSet="/images/pipeline/hikvision-Pipeline-Inspection-solution-banner-mo.png" />
          <img
            src="/images/pipeline/hikvision-Pipeline-Inspection-solution-banner.png"
            alt="Pipeline Inspection Banner"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center right',
              display: 'block',
            }}
          />
        </picture>

        {/* Sunset Orange Vignette / Overlay on Left Side (matching the warm circular gradient disc) */}
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
              Pipeline Inspection
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
              Ensuring reliable energy resource delivery
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
              Pipeline Inspection Solution
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
              Pipelines are the safe and most critical infrastructure for long-distance transportation of oil, gas, and petroleum products. These energy arteries demand constant monitoring and rapid maintenance, especially in remote areas.
            </p>
            <p style={{ margin: 0 }}>
              Coloron’s advanced solution uses smart technologies and products to enable efficient, intelligent inspections, ensuring the secure and continuous flow of energy resources.
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
                src="/images/pipeline/hikvision-Pipeline-Inspection-solution-overview.png"
                alt="Pipeline Inspection Solution Overview 3D Map"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '10px',
                }}
              />

              {/* Hotspot Markers (Exact coords: 1: Pipelines (68%, 30%), 2: Pump & Compressor (18%, 50%), 3: Construction (38%, 23%), 4: Command Center (50%, 72%)) */}
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
              💡 Click on any numbered pin above or choose a sub-scenario below to explore dedicated challenges & solutions
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

      {/* 4. SECTION: DEDICATED SUB-SCENARIO DETAILS (Pipelines, Pump & Compressor Station, etc.) */}
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

            {/* Alternating Feature Showcase Rows */}
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
        initialSolution="Pipeline Inspection Solution"
      />
    </div>
  );
}
