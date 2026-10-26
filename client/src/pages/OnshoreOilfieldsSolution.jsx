import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  Shield,
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Share2,
  PhoneCall,
  FileText,
  Download,
  AlertTriangle,
  Compass,
  BarChart3,
  Layers,
  Sparkles,
  Maximize2,
  X,
  ArrowRight,
  Eye,
  Camera,
  Cpu,
  Tv,
  Users,
  TrendingUp,
  MapPin,
  Check,
  Radio,
  Gauge,
  Truck,
  Scan,
  UserCheck,
  Lock,
  Zap,
  Activity
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for 3D Cutaway Digital Oilfield Overview
const OILFIELD_HOTSPOTS = [
  {
    id: 1,
    x: '38%',
    y: '68%',
    tag: 'Checkpoint & Perimeter Gate',
    title: 'Site Checkpoint & Multi-Tier Perimeter Gate',
    device: 'Speed Enforcement Radar, Explosion-Proof ANPR & AI X-Ray Cargo Scanner',
    spec: 'Continuous radar speed tracking, 98%+ tanker plate recognition, dual-energy X-ray luggage inspection',
    desc: 'The primary access barrier before entering the hazardous extraction zone. Automatically verifies arriving crude transport tankers, enforces strict 20 km/h speed limits, and screens contractor belongings for flammable contraband.',
    benefit: 'Stops unauthorized vehicles, eliminates speed violations, and guarantees zero uncertified personnel enter active production areas.'
  },
  {
    id: 2,
    x: '46%',
    y: '48%',
    tag: 'Well Pads & Pumpjacks',
    title: 'Wellhead Area & Pumpjack Mechanical Inspection',
    device: 'ATEX Explosion-Proof Thermal & Optical Bi-Spectrum Camera (DS-2TD2466T-25/X)',
    spec: 'ATEX/IECEx certified Ex d IIC T6, 0.05°C thermal sensitivity, 360° pan continuous rotation',
    desc: 'Automates 24/7 condition monitoring of nodding donkey pumpjack bearings, belts, and stuffing boxes. Thermography algorithms detect overheated motors and hydraulic oil leaks before mechanical breakdown occurs.',
    benefit: 'Prevents costly wellhead shutdowns, eliminates hazardous manual maintenance patrols, and detects volatile hydrocarbon leaks early.'
  },
  {
    id: 3,
    x: '56%',
    y: '42%',
    tag: 'Processing Plants & Tank Farm',
    title: 'Crude Storage Tank Farm & Refining Facilities',
    device: 'Optical Gas Imaging (OGI) & Radiometric Thermography Speed Dome',
    spec: 'VOC gas plume visualization, liquid level thermal gradient tracking, flare stack flame verification',
    desc: 'High-precision thermal cameras monitor crude oil storage tank shells to detect sludge build-up and liquid level boundaries, while optical gas sensors visualize fugitive methane and VOC emissions.',
    benefit: 'Protects multi-million dollar storage assets, avoids environmental EPA fines, and gives early warning of tank overflow or thermal runaway.'
  },
  {
    id: 4,
    x: '44%',
    y: '60%',
    tag: 'Vehicles & Crude Tankers',
    title: 'Mobile Transport Fleet & Tanker Safety Monitoring',
    device: 'Heavy-Vehicle Mobile NVR with ADAS & Driver Status Monitor (DSM)',
    spec: 'GPS/GLONASS geofenced speed limiting, forward collision warning, driver drowsiness/smoking alert',
    desc: 'Monitors crude oil transport trucks navigating unpaved desert or arctic field access roads. Alerts drivers to lane departure risks and alerts central dispatch to harsh braking or route deviation.',
    benefit: 'Reduces tanker rollover accidents by 42% and provides real-time GPS tracking for hazardous chemical convoys.'
  },
  {
    id: 5,
    x: '64%',
    y: '58%',
    tag: 'Office Areas & SCADA Center',
    title: 'Central Command Dispatch & SCADA Operations',
    device: 'HikCentral Enterprise Energy Module & 4K Ultra-Narrow Bezel Video Wall',
    spec: 'Unified GIS map, automated AI alarm clustering, SCADA sensor overlay, two-way broadcast intercom',
    desc: 'Consolidates video surveillance, perimeter thermal tripwires, wellhead telemetry, and access control logs across hundreds of square kilometers into a single, intuitive centralized management console.',
    benefit: 'Empowers safety directors with instant situational awareness, enabling fast coordinated emergency response across remote facilities.'
  },
];

export default function OnshoreOilfieldsSolution() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  const [activeHotspot, setActiveHotspot] = useState(OILFIELD_HOTSPOTS[0]);
  const [lightboxImg, setLightboxImg] = useState(null);

  // Accordions for Checkpoint sections matching screenshot
  const [openAccordions, setOpenAccordions] = useState({
    speed: true,
    anpr: true,
    barrier: false,
    xray: true,
    face: true,
    turnstile: false,
  });

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Scrollspy for sub-navigation
  useEffect(() => {
    const handleScroll = () => {
      const navSections = [
        'overview',
        'checkpoints',
        'resources',
        'related',
      ];
      const scrollPos = window.scrollY + 220;

      for (let i = navSections.length - 1; i >= 0; i--) {
        const sectionId = navSections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  const handleBrochureDownload = () => {
    alert('Thank you for downloading the Digital Oilfield Solution Brochure. Your PDF document has been queued.');
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        paddingTop: '64px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, sans-serif',
        color: '#1d1d1f',
      }}
    >
      {/* 1. HERO SECTION: Oilfield Pumpjack Banner with Amber Radial Glow & Exact 740px Height */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '740px',
          height: '740px',
          overflow: 'hidden',
          backgroundColor: '#451a03',
        }}
      >
        {/* Real High-Resolution Onshore Oilfield Pumpjack Hero Image */}
        <img
          src="/images/onshore_oilfields/oilfield_hero.jpg"
          alt="Coloron Onshore Oilfields Intelligent Safety & Production Solution"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            filter: 'brightness(0.96)',
          }}
        />

        {/* Golden-Amber / Warm Orange Circular Radial Glow Overlay (matches screenshot) */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '65vw',
            height: '140%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.75) 0%, rgba(217, 119, 6, 0.5) 45%, rgba(180, 83, 9, 0.18) 75%, transparent 100%)',
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
        />

        {/* Subtle Vignette for High Text Readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(69, 26, 3, 0.78) 0%, rgba(69, 26, 3, 0.4) 50%, rgba(69, 26, 3, 0.12) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Hero Content Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '1360px',
            margin: '0 auto',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 32px',
          }}
        >
          {/* Badge: Solutions by Scenario */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.22)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.38)',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.4px',
              width: 'fit-content',
              marginBottom: '16px',
            }}
          >
            <Flame size={15} color="#fed7aa" />
            <span>Solutions by Scenario</span>
          </div>

          {/* Title matching screenshot */}
          <h1
            style={{
              fontSize: 'clamp(36px, 4.6vw, 58px)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.12,
              margin: '0 0 14px 0',
              letterSpacing: '-0.02em',
              textShadow: '0 3px 18px rgba(0, 0, 0, 0.55)',
            }}
          >
            Onshore Oilfields
          </h1>

          {/* Subtitle matching official Hikvision copy */}
          <p
            style={{
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: 1.5,
              maxWidth: '680px',
              margin: '0 0 28px 0',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.45)',
            }}
          >
            Unlock the power of digital transformation
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowContactModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 28px',
                borderRadius: '8px',
                backgroundColor: '#dc2626',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(220, 38, 38, 0.45)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b91c1c')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
            >
              <PhoneCall size={16} />
              <span>Contact Energy Specialist</span>
            </button>

            <button
              onClick={() => scrollToSection('checkpoints')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 26px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.45)',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.32)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
            >
              <span>Explore Checkpoints</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. BREADCRUMB & UTILITY BAR */}
      <section
        style={{
          borderBottom: '1px solid #e5e7eb',
          backgroundColor: '#f9fafb',
          padding: '12px 32px',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '13px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* Breadcrumb links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4b5563' }}>
            <Link to="/" style={{ color: '#6b7280', textDecoration: 'none' }}>
              Home
            </Link>
            <span>/</span>
            <Link to="/solutions" style={{ color: '#6b7280', textDecoration: 'none' }}>
              Solutions
            </Link>
            <span>/</span>
            <span style={{ color: '#6b7280' }}>Solutions by Scenario</span>
            <span>/</span>
            <span style={{ color: '#111827', fontWeight: 600 }}>Onshore Oilfields</span>
          </div>

          {/* Utility Tools */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={handleShare}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'none',
                border: 'none',
                color: '#4b5563',
                fontSize: '13px',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              <Share2 size={14} />
              <span>{copiedShare ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={() => setShowContactModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'none',
                border: 'none',
                color: '#d97706',
                fontSize: '13px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              <PhoneCall size={14} />
              <span>Talk to Oil & Gas Engineer</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. STICKY SUB-NAVIGATION */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 40,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            padding: '0 32px',
            scrollbarWidth: 'none',
          }}
        >
          {[
            { id: 'overview', label: 'Digital Oilfield Solution' },
            { id: 'checkpoints', label: 'Checkpoints' },
            { id: 'resources', label: 'Related Resources' },
            { id: 'related', label: 'You may also be interested in' },
          ].map((tab) => {
            const isActive = activeNav === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                style={{
                  padding: '16px 20px',
                  fontSize: '14px',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#d97706' : '#4b5563',
                  borderBottom: isActive ? '3px solid #d97706' : '3px solid transparent',
                  background: 'none',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  flexShrink: 0,
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* 4. SECTION: DIGITAL OILFIELD SOLUTION WITH 3D INTERACTIVE MAP */}
      <section
        id="overview"
        style={{
          padding: '70px 32px 60px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        {/* Section Header matching official Hikvision copy */}
        <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto 48px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.2vw, 38px)',
              fontWeight: 800,
              color: '#111827',
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em',
            }}
          >
            Digital Oilfield Solution
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: '#4b5563',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Onshore oilfields are the primary source of crude oil production and have become a vital component of the global energy mix. Hikvision’s cutting-edge digital oilfield solution utilizes smart technologies and products to improve physical security, assist production, and ensure the safety of personnel. Explore the solution by clicking on the Checkpoints, Well Pads and Pipelines, Processing Plants, Vehicles and Office Areas buttons below. Discover how this comprehensive management system, integrated with smart technologies, significantly advances the operational safety and efficiency of onshore oilfields.
          </p>
        </div>

        {/* 3D Isometric Oilfield Cutaway Container */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#f8fafc',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            padding: '30px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
          }}
        >
          {/* Visual Interactive Map Area */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '840px',
              minHeight: '380px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="/images/onshore_oilfields/oilfield_3d_map.jpg"
              alt="Interactive 3D Cutaway Digital Oilfield Map"
              style={{
                width: '100%',
                maxHeight: '440px',
                objectFit: 'contain',
                display: 'block',
                filter: 'drop-shadow(0 15px 25px rgba(0, 0, 0, 0.08))',
              }}
            />

            {/* Clickable Hotspot Pins */}
            {OILFIELD_HOTSPOTS.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  style={{
                    position: 'absolute',
                    top: spot.y,
                    left: spot.x,
                    transform: 'translate(-50%, -50%)',
                    width: isSelected ? '34px' : '28px',
                    height: isSelected ? '34px' : '28px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? '#d97706' : '#dc2626',
                    color: '#ffffff',
                    border: '3px solid #ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isSelected ? '14px' : '12px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: isSelected
                      ? '0 0 0 6px rgba(217, 119, 6, 0.35), 0 4px 12px rgba(0,0,0,0.3)'
                      : '0 2px 8px rgba(0,0,0,0.25)',
                    transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    zIndex: isSelected ? 20 : 10,
                  }}
                  title={spot.title}
                >
                  {spot.id}
                </button>
              );
            })}
          </div>

          {/* Quick zone tabs beneath map */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
              marginTop: '28px',
              padding: '0 12px',
            }}
          >
            {OILFIELD_HOTSPOTS.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '30px',
                    border: isSelected ? '1.5px solid #d97706' : '1px solid #d1d5db',
                    backgroundColor: isSelected ? '#fffbeb' : '#ffffff',
                    color: isSelected ? '#d97706' : '#374151',
                    fontSize: '13px',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? '#d97706' : '#6b7280',
                      color: '#ffffff',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 700,
                    }}
                  >
                    {spot.id}
                  </span>
                  <span>{spot.tag}</span>
                </button>
              );
            })}
          </div>

          {/* Active Hotspot Detailed Drawer Card */}
          <div
            style={{
              marginTop: '24px',
              width: '100%',
              maxWidth: '920px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              padding: '24px 28px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '3px 9px',
                      borderRadius: '6px',
                      backgroundColor: '#fef3c7',
                      color: '#92400e',
                      fontSize: '12px',
                      fontWeight: 700,
                    }}
                  >
                    Zone {activeHotspot.id} • {activeHotspot.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                  {activeHotspot.title}
                </h3>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  backgroundColor: '#f0fdf4',
                  borderRadius: '20px',
                  color: '#15803d',
                  fontSize: '12px',
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={14} />
                <span>ATEX/IECEx Explosion-Proof Certified</span>
              </div>
            </div>

            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.6, margin: '8px 0 16px 0' }}>
              {activeHotspot.desc}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '14px',
                paddingTop: '14px',
                borderTop: '1px solid #f3f4f6',
              }}
            >
              <div>
                <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Recommended Systems
                </span>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#1f2937', margin: '4px 0 0 0' }}>
                  {activeHotspot.device}
                </p>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: '2px 0 0 0' }}>
                  {activeHotspot.spec}
                </p>
              </div>

              <div>
                <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Safety & Production Value
                </span>
                <p style={{ fontSize: '13px', color: '#374151', margin: '4px 0 0 0', lineHeight: 1.5 }}>
                  {activeHotspot.benefit}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: CHECKPOINTS - SECURING THE FIRST LINE OF PROTECTION */}
      <section
        id="checkpoints"
        style={{
          padding: '80px 32px',
          backgroundColor: '#fafafa',
          borderTop: '1px solid #f3f4f6',
          borderBottom: '1px solid #f3f4f6',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          {/* Section Header matching screenshot */}
          <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 56px' }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.2vw, 38px)',
                fontWeight: 800,
                color: '#111827',
                margin: '0 0 6px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Checkpoints:
            </h2>
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#4b5563',
                margin: '0 0 16px 0',
              }}
            >
              securing the first line of protection
            </h3>
            <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.7, margin: '0 0 18px 0' }}>
              The checkpoint is the first barrier before entering the oilfield and presents a few challenges:
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#dc2626', fontWeight: 600 }}>
                <AlertTriangle size={15} /> Inefficient access control management
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#dc2626', fontWeight: 600 }}>
                <AlertTriangle size={15} /> Demand for quick threat response
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>
              Hikvision addresses these issues by offering cutting-edge technologies and products. These tools help monitor passing vehicles and personnel at checkpoints, identify potential threats, and allow for quick responses, aiding in enhancing fleet efficiency.
            </p>
          </div>

          {/* 4 CHECKPOINT FEATURE BLOCKS WITH IMAGE LEFT & ACCORDION RIGHT MATCHING SCREENSHOT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px', maxWidth: '1100px', margin: '0 auto' }}>
            {/* Block 1: Automatic speed measurement */}
            <div>
              <div style={{ marginBottom: '14px' }}>
                <h4 style={{ fontSize: '19px', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
                  Automatic speed measurement
                </h4>
                <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: 1.6 }}>
                  Hikvision’s automatic speed measurement system monitors passing vehicles to ensure safe driving. Speeding violations are reported to the command center and displayed on an LED screen.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '32px',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
                    cursor: 'pointer',
                  }}
                  onClick={() => setLightboxImg('/images/onshore_oilfields/checkpoint_speed.jpg')}
                >
                  <img
                    src="/images/onshore_oilfields/checkpoint_speed.jpg"
                    alt="Automatic speed measurement"
                    style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Right Accordion: Speed Measurement Products */}
                <div
                  style={{
                    borderRadius: '12px',
                    border: openAccordions.speed ? '1.5px solid #d97706' : '1px solid #e5e7eb',
                    backgroundColor: openAccordions.speed ? '#fffbeb' : '#ffffff',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => toggleAccordion('speed')}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#111827' }}>
                      Speed Measurement Products
                    </span>
                    {openAccordions.speed ? (
                      <ChevronUp size={18} color="#d97706" />
                    ) : (
                      <ChevronDown size={18} color="#6b7280" />
                    )}
                  </button>

                  {openAccordions.speed && (
                    <div style={{ padding: '0 20px 18px 20px', fontSize: '13px', color: '#4b5563', lineHeight: 1.6 }}>
                      <p style={{ margin: '0 0 6px 0', fontWeight: 600, color: '#1f2937' }}>
                        Traffic Radar & Integrated Capture Camera (iDS-TCM403-BI)
                      </p>
                      <p style={{ margin: '0 0 10px 0' }}>
                        High-precision continuous radar Doppler velocity tracking accurately clocks tankers from 10 to 120 km/h, automatically capturing front plate images and transmitting speed violation alerts to variable message signs.
                      </p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 600 }}>
                          Multi-Target Radar
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 600 }}>
                          High Speed Capture
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 600 }}>
                          LED Speed Display Link
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Block 2: Entrance & exit management */}
            <div>
              <div style={{ marginBottom: '14px' }}>
                <h4 style={{ fontSize: '19px', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
                  Entrance and exit management
                </h4>
                <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: 1.6 }}>
                  Hikvision&apos;s barrier gate system efficiently manages entrances and exits by detecting and recording vehicle information. Only authorized vehicles are allowed, further securing the site.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '32px',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
                    cursor: 'pointer',
                  }}
                  onClick={() => setLightboxImg('/images/onshore_oilfields/checkpoint_anpr.jpg')}
                >
                  <img
                    src="/images/onshore_oilfields/checkpoint_anpr.jpg"
                    alt="Entrance and exit management"
                    style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Right Accordion: ANPR Camera & Barrier */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div
                    style={{
                      borderRadius: '12px',
                      border: openAccordions.anpr ? '1.5px solid #d97706' : '1px solid #e5e7eb',
                      backgroundColor: openAccordions.anpr ? '#fffbeb' : '#ffffff',
                      overflow: 'hidden',
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion('anpr')}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>
                        ANPR Camera
                      </span>
                      {openAccordions.anpr ? (
                        <ChevronUp size={16} color="#d97706" />
                      ) : (
                        <ChevronDown size={16} color="#6b7280" />
                      )}
                    </button>

                    {openAccordions.anpr && (
                      <div style={{ padding: '0 18px 14px 18px', fontSize: '13px', color: '#4b5563', lineHeight: 1.5 }}>
                        <p style={{ margin: '0 0 4px 0', fontWeight: 600, color: '#1f2937' }}>
                          DeepinView ANPR Bullet (iDS-2CD7A46G0/P-IZHS)
                        </p>
                        <p style={{ margin: 0 }}>
                          High-accuracy license plate recognition for hazardous oil tankers, hazardous material transport manifest integration, and vehicle color/type classification.
                        </p>
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      borderRadius: '12px',
                      border: openAccordions.barrier ? '1.5px solid #d97706' : '1px solid #e5e7eb',
                      backgroundColor: openAccordions.barrier ? '#fffbeb' : '#ffffff',
                      overflow: 'hidden',
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion('barrier')}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>
                        Barrier Gate
                      </span>
                      {openAccordions.barrier ? (
                        <ChevronUp size={16} color="#d97706" />
                      ) : (
                        <ChevronDown size={16} color="#6b7280" />
                      )}
                    </button>

                    {openAccordions.barrier && (
                      <div style={{ padding: '0 18px 14px 18px', fontSize: '13px', color: '#4b5563', lineHeight: 1.5 }}>
                        <p style={{ margin: '0 0 4px 0', fontWeight: 600, color: '#1f2937' }}>
                          Digital Barrier Gate with Anti-Fall Radar (DS-TMG4B0 Series)
                        </p>
                        <p style={{ margin: 0 }}>
                          High-speed brushless DC motor barrier gate with integrated anti-smash microwave radar to prevent arm descent while heavy tankers pass underneath.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Block 3: Effective security inspections */}
            <div>
              <div style={{ marginBottom: '14px' }}>
                <h4 style={{ fontSize: '19px', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
                  Effective security inspection
                </h4>
                <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: 1.6 }}>
                  Hikvision&apos;s AI-based X-ray system accurately detects prohibited items, reducing pressure on personnel and improving screening efficiency. The system can integrate with video monitoring for easy event tracing.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '32px',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
                    cursor: 'pointer',
                  }}
                  onClick={() => setLightboxImg('/images/onshore_oilfields/checkpoint_xray.png')}
                >
                  <img
                    src="/images/onshore_oilfields/checkpoint_xray.png"
                    alt="Effective security inspection"
                    style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Right Accordion: Security Inspection Products */}
                <div
                  style={{
                    borderRadius: '12px',
                    border: openAccordions.xray ? '1.5px solid #d97706' : '1px solid #e5e7eb',
                    backgroundColor: openAccordions.xray ? '#fffbeb' : '#ffffff',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => toggleAccordion('xray')}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#111827' }}>
                      Security Inspection Products
                    </span>
                    {openAccordions.xray ? (
                      <ChevronUp size={18} color="#d97706" />
                    ) : (
                      <ChevronDown size={18} color="#6b7280" />
                    )}
                  </button>

                  {openAccordions.xray && (
                    <div style={{ padding: '0 20px 18px 20px', fontSize: '13px', color: '#4b5563', lineHeight: 1.6 }}>
                      <p style={{ margin: '0 0 6px 0', fontWeight: 600, color: '#1f2937' }}>
                        Dual-Energy X-Ray Inspection System (IS-SC5030A / IS-SC6550A)
                      </p>
                      <p style={{ margin: '0 0 10px 0' }}>
                        AI deep learning contraband detection automatically highlights lighters, matches, fireworks, unauthorized radio transmitters, and dangerous weapons in red bounding boxes on dual operator monitors.
                      </p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 600 }}>
                          AI Contraband Auto-Detection
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 600 }}>
                          Dual-Energy Penetration
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Block 4: Personnel access control */}
            <div>
              <div style={{ marginBottom: '14px' }}>
                <h4 style={{ fontSize: '19px', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
                  Personnel access control
                </h4>
                <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: 1.6 }}>
                  The employee authentication system uses biometric information to ensure accurate staff access records and enhance the security of the oilfield. The online visitor management system provides full-journey control over all personnel.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '32px',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
                    cursor: 'pointer',
                  }}
                  onClick={() => setLightboxImg('/images/onshore_oilfields/checkpoint_access.png')}
                >
                  <img
                    src="/images/onshore_oilfields/checkpoint_access.png"
                    alt="Personnel access control"
                    style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Right Accordion: Face Recognition Terminal & Barrier */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div
                    style={{
                      borderRadius: '12px',
                      border: openAccordions.face ? '1.5px solid #d97706' : '1px solid #e5e7eb',
                      backgroundColor: openAccordions.face ? '#fffbeb' : '#ffffff',
                      overflow: 'hidden',
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion('face')}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>
                        Face Recognition Terminal
                      </span>
                      {openAccordions.face ? (
                        <ChevronUp size={16} color="#d97706" />
                      ) : (
                        <ChevronDown size={16} color="#6b7280" />
                      )}
                    </button>

                    {openAccordions.face && (
                      <div style={{ padding: '0 18px 14px 18px', fontSize: '13px', color: '#4b5563', lineHeight: 1.5 }}>
                        <p style={{ margin: '0 0 4px 0', fontWeight: 600, color: '#1f2937' }}>
                          Minmoe Pro Face Terminal (DS-K1T673DX)
                        </p>
                        <p style={{ margin: 0 }}>
                          Touchless biometric facial authentication with PPE hard hat recognition and anti-spoofing algorithms, verifying worker safety certifications in under 0.2 seconds.
                        </p>
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      borderRadius: '12px',
                      border: openAccordions.turnstile ? '1.5px solid #d97706' : '1px solid #e5e7eb',
                      backgroundColor: openAccordions.turnstile ? '#fffbeb' : '#ffffff',
                      overflow: 'hidden',
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion('turnstile')}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>
                        Access Turnstile
                      </span>
                      {openAccordions.turnstile ? (
                        <ChevronUp size={16} color="#d97706" />
                      ) : (
                        <ChevronDown size={16} color="#6b7280" />
                      )}
                    </button>

                    {openAccordions.turnstile && (
                      <div style={{ padding: '0 18px 14px 18px', fontSize: '13px', color: '#4b5563', lineHeight: 1.5 }}>
                        <p style={{ margin: '0 0 4px 0', fontWeight: 600, color: '#1f2937' }}>
                          Outdoor Speed Gate Turnstile (DS-K3B601SX)
                        </p>
                        <p style={{ margin: 0 }}>
                          SUS304 stainless steel weather-sealed speed turnstile with infrared anti-tailgating sensors, designed for harsh desert sandstorms and sub-zero field environments.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: RELATED RESOURCES / DOWNLOAD MATCHING SCREENSHOT */}
      <section
        id="resources"
        style={{
          padding: '60px 32px 70px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h2
            style={{
              fontSize: 'clamp(26px, 3vw, 34px)',
              fontWeight: 800,
              color: '#111827',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            Related Resources
          </h2>
        </div>

        <div
          style={{
            maxWidth: '580px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: '#fffbeb',
                color: '#d97706',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <FileText size={22} />
            </div>

            <div>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', margin: '0 0 2px 0' }}>
                Digital Oilfield Solution (PDF)
              </h4>
              <span style={{ fontSize: '12px', color: '#6b7280' }}>
                Complete Oilfield Architecture & ATEX Product Catalog • 6.4 MB
              </span>
            </div>
          </div>

          <button
            onClick={handleBrochureDownload}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 18px',
              borderRadius: '8px',
              backgroundColor: '#fffbeb',
              color: '#d97706',
              border: 'none',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#d97706';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fffbeb';
              e.currentTarget.style.color = '#d97706';
            }}
          >
            <Download size={15} />
            <span>Download</span>
          </button>
        </div>
      </section>

      {/* 7. SECTION: YOU MAY ALSO BE INTERESTED IN (3 CARDS MATCHING SCREENSHOT) */}
      <section
        id="related"
        style={{
          padding: '70px 32px',
          backgroundColor: '#fafafa',
          borderTop: '1px solid #f3f4f6',
          borderBottom: '1px solid #f3f4f6',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: 'clamp(24px, 2.8vw, 32px)',
                fontWeight: 800,
                color: '#111827',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              You may also be interested in
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {/* Card 1: Energy */}
            <Link
              to="/solutions"
              style={{
                position: 'relative',
                height: '180px',
                borderRadius: '16px',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img
                src="/images/onshore_oilfields/interest_energy.jpg"
                alt="Energy Industry Solution"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.65)',
                }}
              />
              <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#ffffff', padding: '0 20px' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.85)', display: 'block', marginBottom: '4px' }}>
                  Solutions by Industry
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 6px 0' }}>
                  Energy
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                  Intelligent inspection & thermal safety for power, solar, and utility assets
                </p>
              </div>
            </Link>

            {/* Card 2: Oil & Gas */}
            <Link
              to="/solutions"
              style={{
                position: 'relative',
                height: '180px',
                borderRadius: '16px',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img
                src="/images/onshore_oilfields/interest_oil_gas.jpg"
                alt="Oil & Gas Industry Solution"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.65)',
                }}
              />
              <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#ffffff', padding: '0 20px' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.85)', display: 'block', marginBottom: '4px' }}>
                  Solutions by Industry
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 6px 0' }}>
                  Oil &amp; Gas
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                  Explosion-proof thermography, flare stack auditing & refinery perimeter guard
                </p>
              </div>
            </Link>

            {/* Card 3: Pipeline Inspection */}
            <Link
              to="/solutions"
              style={{
                position: 'relative',
                height: '180px',
                borderRadius: '16px',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img
                src="/images/onshore_oilfields/interest_pipeline.jpg"
                alt="Pipeline Inspection Solution"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.65)',
                }}
              />
              <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#ffffff', padding: '0 20px' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.85)', display: 'block', marginBottom: '4px' }}>
                  Solutions by Scenario
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 6px 0' }}>
                  Pipeline Inspection
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                  Long-range acoustic leak detection, fiber optic sensing & right-of-way intrusion
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. SECTION: READY TO DISCUSS YOUR NEEDS (RED & BLACK CTA BUTTONS MATCHING SCREENSHOT) */}
      <section
        style={{
          padding: '60px 32px 80px',
          backgroundColor: '#ffffff',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 2.8vw, 32px)',
              fontWeight: 800,
              color: '#111827',
              margin: '0 0 24px 0',
              letterSpacing: '-0.02em',
            }}
          >
            Ready to discuss your needs?
          </h2>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => setShowContactModal(true)}
              style={{
                padding: '12px 30px',
                borderRadius: '24px',
                backgroundColor: '#dc2626',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(220, 38, 38, 0.4)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b91c1c')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
            >
              Get in Touch
            </button>

            <button
              onClick={() => setShowContactModal(true)}
              style={{
                padding: '12px 30px',
                borderRadius: '24px',
                backgroundColor: '#dc2626',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(220, 38, 38, 0.4)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b91c1c')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
            >
              Find a Partner
            </button>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL FOR TOPOLOGY DIAGRAM & FEATURE IMAGES */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            backdropFilter: 'blur(6px)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '92vh',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                color: '#ffffff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              <X size={20} />
            </button>
            <img
              src={lightboxImg}
              alt="Expanded view"
              style={{
                width: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>
      )}

      {/* CONTACT SALES MODAL */}
      <ContactSalesModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        solutionTitle="Onshore Oilfields Solution"
      />
    </div>
  );
}
