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
  Download,
  Sun,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Sub-scenarios data matching Hikvision Solar Farms structure
const scenariosData = [
  {
    id: 'perimeter-vehicle',
    number: 1,
    title: 'Securing Perimeter & Vehicle Access',
    shortName: 'Perimeter & Vehicle Access',
    pinCoords: { left: '35%', top: '67%' },
    intro: 'In solar farms where there is limited supervision, Coloron’s thermal and AI-based technologies help make perimeter protection and vehicle management much easier.',
    sections: [
      {
        id: 'perimeter-protection',
        title: 'Perimeter protection',
        desc: 'Coloron’s high-quality products expertly detect and protect against security threats, making them ideal for safeguarding solar farms.',
        bullets: [
          'Thermal cameras: Ensure 24/7 real-time monitoring even in harsh weather, desert dust, and low-light darkness',
          'Radar & PTZ linkages: Capture multi-angle footage with automated tracking for comprehensive video evidence',
          'Solar-powered cameras: Offer cost-effective perimeter security without extra power cabling or trenching',
          'Fiber-optic vibration sensing products: Deliver ultra-long distance perimeter fence protection with precision',
        ],
        image: '/images/solar-farms/Perimeter-protection.png',
        accordions: [
          {
            title: 'Thermal Camera',
            isOpenDefault: true,
            products: [
              {
                model: 'DS-2TD2138-10/Q',
                name: 'Thermal Network Bullet Camera',
                image: '/images/solar-farms/product-thermal-bullet.png',
                desc: 'Deep-learning perimeter protection with radiometric heat monitoring.',
              },
              {
                model: 'DS-2TD2168-15/Q',
                name: 'High-Resolution Thermal Camera',
                image: '/images/solar-farms/product-thermal-bullet.png',
                desc: 'Extended range human & vehicle classification up to 450 meters.',
              },
            ],
          },
          {
            title: 'Radar & Speed Dome Linkage',
            isOpenDefault: false,
            products: [
              {
                model: 'DS-TDSB0G-FK/500m',
                name: '500m Security Radar',
                image: '/images/transmission-line/product-radar-ds-tdsb0g.png',
                desc: 'Millimeter-wave radar detecting intruders in zero visibility.',
              },
            ],
          },
          {
            title: 'Fiber-Optic Fencing Server',
            isOpenDefault: false,
            desc: 'Buried or fence-mounted vibration sensing fiber detects cutting, climbing, and sabotage over tens of kilometers without field power.',
          },
          {
            title: 'Solar-Powered Security Camera',
            isOpenDefault: false,
            products: [
              {
                model: 'DS-2TXS2628-10P/QA',
                name: 'Autonomous Solar Bullet Camera',
                image: '/images/transmission-line/product-solar-thermal-ds-2txs2628.png',
                desc: 'Standalone PV powered unit with 4G LTE communication for distant fence lines.',
              },
            ],
          },
        ],
      },
      {
        id: 'vehicle-management',
        title: 'Vehicle management',
        desc: 'Coloron provides efficient entrance and exit control for vehicles in solar farms. AI-powered cameras identify vehicles even in low-light conditions, offering detailed attribute data to help administrators verify entry.',
        bullets: [
          'Automatic License Plate Recognition (ANPR) with >99% recognition accuracy',
          'Automated barrier gate integration for authorized maintenance crews and delivery trucks',
          'Vehicle color, brand, and type categorization for forensic audit logs',
        ],
        image: '/images/solar-farms/Vehicle-management.png',
        accordions: [
          {
            title: 'ANPR Camera & Smart Barrier',
            isOpenDefault: true,
            products: [
              {
                model: 'iDS-2CD7A46G0/P-IZHS',
                name: 'DeepinView ANPR Bullet Camera',
                image: '/images/solar-farms/product-thermal-bullet.png',
                desc: 'Sub-second plate recognition, anti-glare vehicle headlight suppression, and motorized zoom.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'personnel-safety',
    number: 2,
    title: 'Improving Personnel Safety at All Times',
    shortName: 'Personnel Safety',
    pinCoords: { left: '20%', top: '52%' },
    intro: 'Coloron’s solar farm solution boosts health and safety for personnel with continuous monitoring of critical areas using AI-powered analytics. The solution can further identify, manage, and prevent potential risks.',
    sections: [
      {
        id: 'access-control',
        title: 'Access control management',
        desc: 'The employee authentication system enhances personnel safety by ensuring strict control and authorized access in critical areas. Visitors can conveniently check-in and -out by preregistering on the ColoronCentral platform.',
        bullets: [
          'Contactless facial recognition access terminals at substation gates and inverter shelters',
          'Anti-passback and role-based permissions preventing unauthorized entry into high-voltage switchgear',
          'Automated visitor badge generation and temporary credential management',
        ],
        image: '/images/solar-farms/Access-control-management.png',
        accordions: [
          {
            title: 'Biometric Access Terminals',
            isOpenDefault: true,
            products: [
              {
                model: 'DS-K1T673DX',
                name: 'Face Recognition Terminal',
                image: '/images/solar-farms/product-cube-camera.png',
                desc: 'Deep-learning face verification with anti-spoofing and IP65 weatherproof casing.',
              },
            ],
          },
        ],
      },
      {
        id: 'safety-compliance',
        title: 'Personnel safety compliance',
        desc: 'Coloron’s AI-based devices verify the presence of personal protective equipment, preventing safety hazards while achieving legal safety compliance.',
        bullets: [
          'Real-time PPE detection verifies hard hats, high-visibility reflective vests, and insulated gloves',
          'Instant audio alerts on local loudspeakers when workers approach live step-up transformers without PPE',
          'Automated compliance scoring and infraction logging in the central safety portal',
        ],
        image: '/images/solar-farms/Personnel-safety-compliance.png',
        accordions: [
          {
            title: 'AI Safety Audit Camera',
            isOpenDefault: true,
            desc: 'DeepinView edge AI camera continuously auditing safety harness compliance and unauthorized hazardous zone proximity.',
          },
        ],
      },
    ],
  },
  {
    id: 'operation-maintenance',
    number: 3,
    title: 'Enabling Efficient Operation and Maintenance',
    shortName: 'Operation & Maintenance',
    pinCoords: { left: '40%', top: '25%' },
    intro: 'By remote monitoring with early detection of equipment issues, Coloron’s solution streamlines and digitizes the inspection process, minimizing operational downtime and maximizing efficiency.',
    sections: [
      {
        id: 'standardized-inspection',
        title: 'Standardized inspection process',
        desc: 'Coloron simplifies the inspection process by bringing planning, execution and reporting online. With ColoronCentral software, every step is traceable. Detailed processes and results for each item are presented with statistics and charts.',
        bullets: [
          'Automated thermographic inspection routes across PV arrays, combiner boxes, and central inverters',
          'Thermal hot spot detection flags micro-cracked solar cells, diode bypass failures, and dust soiling',
          'Digitized work order dispatching links defects directly to field maintenance mobile apps',
        ],
        image: '/images/solar-farms/enabling-efficient-operation-and-maintenance.png',
        accordions: [
          {
            title: 'Inspection Methods',
            isOpenDefault: true,
            desc: 'Features remote inspection with high-precision radiometric thermal PTZ cameras, optical zoom patrols, and handheld thermal imagers for field technicians.',
          },
        ],
      },
      {
        id: 'product-mix-options',
        title: 'Diversified product mix options',
        desc: 'Coloron offers a range of product mix options for remote and on-site inspections, empowering security managers to maintain situational awareness of solar assets.',
        bullets: [
          'High-precision optical & thermal bi-spectrum speed domes with 360° pan and continuous tilt',
          'Fixed thermal cube cameras inside inverter cabinets monitoring capacitor temperatures',
          'Handheld radiometric cameras for fine-grained electrical connection troubleshooting',
        ],
        image: '/images/solar-farms/Remote-inspection-with-thermal-products.png',
        products: [
          {
            id: 'ds-2td4137t',
            model: 'DS-2TD4137T-9/W',
            name: 'Thermographic Bi-spectrum Speed Dome',
            image: '/images/solar-farms/product-speed-dome.png',
            desc: 'High-speed PTZ with radiometric thermal measurement and 32x optical zoom for wide PV farms.',
          },
          {
            id: 'ds-2td3017t',
            model: 'DS-2TD3017T-2/V',
            name: 'Thermographic Cube Camera',
            image: '/images/solar-farms/product-cube-camera.png',
            desc: 'Compact radiometric thermal cube tailored for inverter cabinets and combiner boxes.',
          },
          {
            id: 'hm-td5537t',
            model: 'HM-TD5537T-25/W',
            name: 'Bi-spectrum Thermography Mini Positioning System',
            image: '/images/transmission-line/product-ptz-ds-2dy5225ix.png',
            desc: 'Stable mini positioning system engineered for rooftop and ground PV tracker arrays.',
          },
          {
            id: 'ds-2dp8a440',
            model: 'DS-2DP8A440IXG-LEF/624',
            name: '24MP 270° Panoramic & PTZ Camera',
            image: '/images/solar-farms/product-panoramic-ptz.png',
            desc: 'Seamless 270° ultra-high-definition panoramic view integrated with a 40x optical tracking PTZ.',
          },
        ],
      },
    ],
  },
  {
    id: 'centralized-management',
    number: 4,
    title: 'Visualizing Data for Better Insights',
    shortName: 'Centralized Management',
    pinCoords: { left: '55%', top: '55%' },
    intro: 'ColoronCentral platform and video wall system offers a centralized management solution for solar farms. With visualized data collection and analysis, operators gain insights into operational performance and address security risks quickly.',
    sections: [
      {
        id: 'data-visualization',
        title: 'Visualizing Data for Better Insights',
        desc: 'Operators monitor the entire solar park through an interactive digital twin GIS map, unifying alarm events, thermal heatmaps, power generation telemetry, and access logs.',
        bullets: [
          'Unified 3D E-Map showing real-time location and status of every PV string and perimeter sensor',
          'Consolidated video wall management for regional centralized dispatch control centers',
          'Comprehensive analytics reporting on equipment degradation and intrusion patterns',
        ],
        image: '/images/solar-farms/Visualizing-data-for-better-insights.png',
        accordions: [
          {
            title: 'ColoronCentral Solar Energy Suite',
            isOpenDefault: true,
            desc: 'Enterprise VMS and SCADA integration platform unifying thousands of CCTV cameras, thermal sensors, and perimeter radars into a centralized operations dashboard.',
          },
        ],
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
    title: 'Industrial Thermography',
    tag: '/ Solutions by function /',
    desc: 'Cutting-edge radiometric thermal cameras detecting abnormal thermal rises in electrical terminals, transformers, and industrial machinery before failure occurs.',
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

export default function SolarFarmsSolution() {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [comparedProducts, setComparedProducts] = useState({});
  const [lightboxImg, setLightboxImg] = useState(null);
  const [openAccordions, setOpenAccordions] = useState({});

  const activeScenario = scenariosData[activeScenarioIndex];

  const handleSelectScenario = (index) => {
    setActiveScenarioIndex(index);
    const el = document.getElementById('solar-scenario-content');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleCompare = (prodId) => {
    setComparedProducts((prev) => ({
      ...prev,
      [prodId]: !prev[prodId],
    }));
  };

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#1d1d1f', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      
      {/* 1. HERO BANNER (Exact Hikvision visual banner with solar PV panels under golden sunlight & amber disc overlay) */}
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
        {/* Background Image: Rooftop & Ground Solar Panels Array */}
        <picture style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}>
          <source media="(max-width: 768px)" srcSet="/images/solar-farms/Hikvision-solution-for-Solar-Farms-mo.png" />
          <img
            src="/images/solar-farms/Hikvision-solution-for-Solar-Farms.jpg"
            alt="Solar Farms Solution Banner"
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
              Solar Farms
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
              Safeguarding sustainable energy in a better way
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
              Coloron Solar Farms Solution
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
              Solar farms, typically located in remote mountainous areas or deserts, present challenges for overall security management. Traditional manual security patrols and spot inspections are costly and inefficient.
            </p>
            <p style={{ margin: 0 }}>
              Coloron’s Solar Farm Solution leverages smart technologies to simplify operations, enhance security, and create a safer working environment for workers.
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
                src="/images/solar-farms/Hikvision-solution-for-Solar-Farms-overview.png"
                alt="Solar Farm Solution Overview 3D Map"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '10px',
                }}
              />

              {/* Hotspot Markers (Exact coords: 1: Perimeter (35%, 67%), 2: Personnel (20%, 52%), 3: O&M (40%, 25%), 4: Centralized (55%, 55%)) */}
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
              💡 Click on any numbered pin above or choose a section below to explore dedicated challenges & solutions
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

      {/* 4. SECTION: DEDICATED SUB-SCENARIO DETAILS */}
      <section
        id="solar-scenario-content"
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
                margin: '0 0 12px 0',
              }}
            >
              {activeScenario.title}
            </h2>
            <p
              style={{
                fontSize: '0.96rem',
                color: '#6e6e73',
                maxWidth: '780px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              {activeScenario.intro}
            </p>
          </div>

          {/* Sub-sections (Perimeter protection, Vehicle management, etc.) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            {activeScenario.sections.map((sec) => (
              <div
                key={sec.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: 'clamp(28px, 4vw, 44px)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                }}
              >
                {/* Header */}
                <h3
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    margin: '0 0 12px 0',
                  }}
                >
                  {sec.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: '#555558',
                    lineHeight: 1.6,
                    margin: '0 0 24px 0',
                  }}
                >
                  {sec.desc}
                </p>

                {/* Bullets */}
                {sec.bullets && (
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 32px 0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    {sec.bullets.map((b, bIdx) => (
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
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Media & Accordions Grid matching the screenshot */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '32px',
                    alignItems: 'start',
                  }}
                >
                  {/* Left Column: Feature Media */}
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      backgroundColor: '#0c1017',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                      cursor: 'zoom-in',
                    }}
                    onClick={() => setLightboxImg(sec.image)}
                  >
                    <img
                      src={sec.image}
                      alt={sec.title}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
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

                  {/* Right Column: Accordions or Products */}
                  <div>
                    {sec.accordions && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {sec.accordions.map((acc, aIdx) => {
                          const accKey = `${sec.id}-${aIdx}`;
                          const isAccOpen = openAccordions[accKey] !== undefined ? openAccordions[accKey] : acc.isOpenDefault;
                          return (
                            <div
                              key={aIdx}
                              style={{
                                border: '1px solid rgba(0, 0, 0, 0.08)',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                backgroundColor: isAccOpen ? '#ffffff' : '#fbfbfd',
                                transition: 'all 0.2s ease',
                              }}
                            >
                              {/* Accordion Header */}
                              <button
                                type="button"
                                onClick={() => toggleAccordion(accKey)}
                                style={{
                                  width: '100%',
                                  padding: '16px 20px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  background: 'none',
                                  border: 'none',
                                  cursor: 'pointer',
                                  textAlign: 'left',
                                  fontWeight: 600,
                                  fontSize: '0.96rem',
                                  color: '#1d1d1f',
                                }}
                              >
                                <span>{acc.title}</span>
                                {isAccOpen ? <ChevronUp size={18} color="#86868b" /> : <ChevronDown size={18} color="#86868b" />}
                              </button>

                              {/* Accordion Body */}
                              {isAccOpen && (
                                <div
                                  style={{
                                    padding: '0 20px 20px',
                                    borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                                    paddingTop: '16px',
                                  }}
                                >
                                  {acc.desc && (
                                    <p style={{ fontSize: '0.86rem', color: '#6e6e73', lineHeight: 1.5, margin: '0 0 14px 0' }}>
                                      {acc.desc}
                                    </p>
                                  )}

                                  {acc.products && (
                                    <div
                                      style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                                        gap: '12px',
                                      }}
                                    >
                                      {acc.products.map((p, pIdx) => {
                                        const isCompared = !!comparedProducts[p.model];
                                        return (
                                          <div
                                            key={pIdx}
                                            style={{
                                              backgroundColor: '#f5f5f7',
                                              borderRadius: '8px',
                                              padding: '14px',
                                              display: 'flex',
                                              flexDirection: 'column',
                                              justifyContent: 'space-between',
                                            }}
                                          >
                                            <div>
                                              <img
                                                src={p.image}
                                                alt={p.model}
                                                style={{
                                                  height: '70px',
                                                  width: '100%',
                                                  objectFit: 'contain',
                                                  marginBottom: '8px',
                                                  display: 'block',
                                                }}
                                              />
                                              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d1d1f' }}>
                                                {p.model}
                                              </div>
                                              <div style={{ fontSize: '0.74rem', color: '#6e6e73', margin: '2px 0 6px 0' }}>
                                                {p.name}
                                              </div>
                                              <div style={{ fontSize: '0.72rem', color: '#86868b', lineHeight: 1.35 }}>
                                                {p.desc}
                                              </div>
                                            </div>

                                            <label
                                              style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                fontSize: '0.75rem',
                                                color: '#555558',
                                                cursor: 'pointer',
                                                marginTop: '10px',
                                                paddingTop: '8px',
                                                borderTop: '1px solid rgba(0,0,0,0.06)',
                                              }}
                                            >
                                              <input
                                                type="checkbox"
                                                checked={isCompared}
                                                onChange={() => toggleCompare(p.model)}
                                                style={{ accentColor: '#0071e3', cursor: 'pointer' }}
                                              />
                                              <span>add to compare</span>
                                            </label>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Products Grid if defined directly */}
                    {sec.products && (
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                          gap: '14px',
                        }}
                      >
                        {sec.products.map((p) => {
                          const isCompared = !!comparedProducts[p.model];
                          return (
                            <div
                              key={p.id}
                              style={{
                                backgroundColor: '#f9f9fb',
                                borderRadius: '10px',
                                padding: '16px',
                                border: '1px solid rgba(0,0,0,0.06)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                              }}
                            >
                              <div>
                                <img
                                  src={p.image}
                                  alt={p.model}
                                  style={{
                                    height: '80px',
                                    width: '100%',
                                    objectFit: 'contain',
                                    marginBottom: '10px',
                                    display: 'block',
                                  }}
                                />
                                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1d1d1f' }}>
                                  {p.model}
                                </div>
                                <div style={{ fontSize: '0.76rem', color: '#6e6e73', margin: '2px 0 6px 0' }}>
                                  {p.name}
                                </div>
                                <div style={{ fontSize: '0.72rem', color: '#86868b', lineHeight: 1.35 }}>
                                  {p.desc}
                                </div>
                              </div>

                              <label
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  fontSize: '0.75rem',
                                  color: '#555558',
                                  cursor: 'pointer',
                                  marginTop: '12px',
                                  paddingTop: '8px',
                                  borderTop: '1px solid rgba(0,0,0,0.06)',
                                }}
                              >
                                <input
                                  type="checkbox"
                                  checked={isCompared}
                                  onChange={() => toggleCompare(p.model)}
                                  style={{ accentColor: '#0071e3', cursor: 'pointer' }}
                                />
                                <span>add to compare</span>
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SECTION: DOWNLOAD BROCHURE (matching screenshot) */}
      <section style={{ padding: '60px 24px', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              marginBottom: '28px',
            }}
          >
            Download
          </h2>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              padding: '18px 28px',
              borderRadius: '12px',
              backgroundColor: '#fbfbfd',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: 'rgba(215, 0, 21, 0.08)',
                color: '#d70015',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FileText size={24} />
            </div>

            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#1d1d1f' }}>
                Coloron Solar Farm Solution
              </div>
              <div style={{ fontSize: '0.78rem', color: '#86868b' }}>
                Comprehensive Architecture & Deployment Guide (PDF, 4.2 MB)
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowSalesModal(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#1d1d1f',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '10px 18px',
                fontSize: '0.84rem',
                fontWeight: 600,
                cursor: 'pointer',
                marginLeft: '12px',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1d1d1f')}
            >
              <Download size={15} />
              <span>Download</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. SECTION: CONTACT OUR SOLUTION EXPERT TODAY (matching screenshot) */}
      <section
        style={{
          padding: '64px 24px 72px',
          backgroundColor: '#f5f5f7',
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
        </div>
      </section>

      {/* 7. SECTION: "YOU MAY ALSO BE INTERESTED IN" */}
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
        initialSolution="Solar Farms Solution"
      />
    </div>
  );
}
