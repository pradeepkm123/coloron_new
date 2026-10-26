import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Bus,
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
  Navigation,
  Activity,
  HardHat
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for 3D Cutaway Transit Bus Overview
const BUS_HOTSPOTS = [
  {
    id: 1,
    x: '52%',
    y: '58%',
    tag: 'Bus Driving Cabin',
    title: 'Intelligent Driver Cabin & Assistance Systems',
    device: 'AI ADAS Front Road Camera & DSM Driver Fatigue Sensor',
    spec: 'Forward Collision Warning (FCW), Lane Departure Warning (LDW), Driver distraction/fatigue alarm',
    desc: 'The driver cabin features advanced ADAS cameras monitoring the road ahead, paired with DSM facial analysis cameras that detect driver drowsiness, yawning, and smartphone distraction in real time.',
    benefit: 'Reduces traffic collision incidents by up to 34% and enforces safe, courteous driving habits across the transit fleet.'
  },
  {
    id: 2,
    x: '46%',
    y: '63%',
    tag: 'Passenger Saloon Area',
    title: 'Passenger Saloon High-Definition Video Security',
    device: 'Anti-Vibration Mobile Wedge Dome Camera (DS-2CD6520D-I)',
    spec: '2 MP/4 MP HD imaging, M12 aviation shockproof connectors, wide-angle lens, built-in mic, IK10 vandal-proof',
    desc: 'Vibration-resistant wedge dome cameras mounted along the bus ceiling provide high-definition coverage of seating aisles, handrails, and emergency exits, eliminating interior dead angles.',
    benefit: 'Provides tamper-proof forensic video evidence to resolve passenger disputes, deter pickpocketing, and verify injury claims.'
  },
  {
    id: 3,
    x: '38%',
    y: '68%',
    tag: 'Entryways & Doors',
    title: 'Front & Rear Door Passenger Counting',
    device: 'Stereoscopic Binocular Passenger Counting Camera (iDS-2CD6810F/C)',
    spec: '3D binocular vision, 98%+ counting accuracy, height filtering, independent door sensor triggers',
    desc: 'Ceiling-mounted dual-lens cameras above front boarding and rear exit doors track passengers getting on and off the bus, filtering out backpacks, luggage, and umbrella shadows.',
    benefit: 'Delivers real-time bus passenger occupancy metrics to prevent overloading and provides passenger load factor (PLF) data for route optimization.'
  },
  {
    id: 4,
    x: '62%',
    y: '65%',
    tag: 'Exterior & Blind Spots',
    title: 'Perimeter Blind Spot Detection (BSD) & 360° Surround View',
    device: 'Waterproof Side Blind Spot Cameras & Rear Reverse Sensors',
    spec: 'IP68 waterproof, ultra-wide 180° field of view, pedestrian radar detection, dynamic reverse guidelines',
    desc: 'Heavy-duty cameras installed on the bus exterior left/right mirrors and rear bumper monitor pedestrian and cyclist blind spots, sounding immediate in-cabin alerts when turning or backing up.',
    benefit: 'Eliminates dangerous urban transit blind spots, preventing devastating pedestrian and bicycle collisions at intersections.'
  },
  {
    id: 5,
    x: '33%',
    y: '53%',
    tag: 'Central Processing & Dispatch',
    title: 'Mobile NVR Hub & Fleet Dispatch Operations',
    device: 'High-Performance Mobile Network Video Recorder (DS-MP7608HN)',
    spec: '8-ch IP inputs, EN50155 railway shock certification, dual SSD anti-vibration bay, 4G LTE/5G & dual GPS/GLONASS',
    desc: 'The central mobile NVR continuously records multi-channel video, transmits live location telemetry over high-speed cellular networks, and automatically offloads recorded video upon returning to the depot via high-speed Wi-Fi.',
    benefit: 'Enables central command dispatchers to view live bus camera feeds and track vehicle punctuality on live GIS maps.'
  },
];

export default function TransitBusOnboardSolution() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  const [activeHotspot, setActiveHotspot] = useState(BUS_HOTSPOTS[0]);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);

  // Active tab in "What we offer" section
  const [offerTab, setOfferTab] = useState('video'); // 'video' | 'cabin' | 'entryway' | 'center'

  // Product accordion state (MDVR open by default matching screenshot)
  const [accordionOpen, setAccordionOpen] = useState({
    mdvr: true,
    cameras: false,
    accessories: false,
  });

  const toggleAccordion = (key) => {
    setAccordionOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Scrollspy for sub-navigation
  useEffect(() => {
    const handleScroll = () => {
      const navSections = [
        'overview',
        'passenger-areas',
        'what-we-offer',
        'success-stories',
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
      {/* 1. HERO SECTION: Transit City Bus Banner with Cyan/Blue Radial Glow & Exact 740px Height */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '740px',
          height: '740px',
          overflow: 'hidden',
          backgroundColor: '#032b56',
        }}
      >
        {/* Real High-Resolution Transit Bus Hero Image */}
        <img
          src="/images/transit_bus/bus_hero.jpg"
          alt="Coloron Transit Bus On-board Smart Mobile Surveillance Solution"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 45%',
            filter: 'brightness(0.96)',
          }}
        />

        {/* Cyan / Blue Circular Radial Glow Overlay (matches screenshot) */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '65vw',
            height: '140%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.75) 0%, rgba(2, 132, 199, 0.5) 45%, rgba(3, 105, 161, 0.18) 75%, transparent 100%)',
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
        />

        {/* Subtle Vignette for High Text Readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(3, 43, 86, 0.8) 0%, rgba(3, 43, 86, 0.42) 50%, rgba(3, 43, 86, 0.12) 100%)',
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
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
            <Bus size={15} color="#bae6fd" />
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
            Transit Bus On-board
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
            Moving ahead on the safe path with intelligent mobile security and automated fleet efficiency
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
              <span>Contact Fleet Specialist</span>
            </button>

            <button
              onClick={() => scrollToSection('what-we-offer')}
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
              <span>Explore On-board Systems</span>
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
            <span style={{ color: '#111827', fontWeight: 600 }}>Transit Bus On-board</span>
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
                color: '#0284c7',
                fontSize: '13px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              <PhoneCall size={14} />
              <span>Talk to Public Transit Engineer</span>
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
            { id: 'overview', label: 'Solution Overview' },
            { id: 'passenger-areas', label: 'Passenger areas' },
            { id: 'what-we-offer', label: 'What we offer' },
            { id: 'success-stories', label: 'Success stories' },
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
                  color: isActive ? '#0284c7' : '#4b5563',
                  borderBottom: isActive ? '3px solid #0284c7' : '3px solid transparent',
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

      {/* 4. SECTION: SOLUTION OVERVIEW WITH 3D RENDERING & INTERACTIVE HOTSPOTS */}
      <section
        id="overview"
        style={{
          padding: '70px 32px 60px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto 48px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.2vw, 38px)',
              fontWeight: 800,
              color: '#111827',
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em',
            }}
          >
            Solution Overview
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: '#4b5563',
              lineHeight: 1.7,
              margin: '0 0 14px 0',
            }}
          >
            Trains are the most common form of public transportation worldwide, but local city buses are next. For bus systems in particular, a wide range of safety concerns, rider experience issues, and efficient operation obstacles stand in the way of an otherwise busy and fluid transit system for millions of people. How to effectively manage bus operations and supervise safe driving habits has become an inevitable challenge that transportation departments are forced to face.
          </p>
          <p
            style={{
              fontSize: '15px',
              color: '#4b5563',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Hikvision&apos;s solution helps operators facilitate a comprehensive management system converging abnormal detection, emergency alarms, video security, intelligent driving assistance, and central management, guaranteeing efficiency, safety, and security across the whole transit bus system.
          </p>
        </div>

        {/* 3D Isometric Bus Cutaway Container */}
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
              maxWidth: '820px',
              minHeight: '380px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="/images/transit_bus/bus_3d_rendering.jpg"
              alt="Interactive 3D Cutaway Transit Bus On-board System"
              style={{
                width: '100%',
                maxHeight: '440px',
                objectFit: 'contain',
                display: 'block',
                filter: 'drop-shadow(0 15px 25px rgba(0, 0, 0, 0.08))',
              }}
            />

            {/* Clickable Hotspot Pins */}
            {BUS_HOTSPOTS.map((spot) => {
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
                    backgroundColor: isSelected ? '#0284c7' : '#dc2626',
                    color: '#ffffff',
                    border: '3px solid #ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isSelected ? '14px' : '12px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: isSelected
                      ? '0 0 0 6px rgba(2, 132, 199, 0.35), 0 4px 12px rgba(0,0,0,0.3)'
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
            {BUS_HOTSPOTS.map((spot) => {
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
                    border: isSelected ? '1.5px solid #0284c7' : '1px solid #d1d5db',
                    backgroundColor: isSelected ? '#f0f9ff' : '#ffffff',
                    color: isSelected ? '#0284c7' : '#374151',
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
                      backgroundColor: isSelected ? '#0284c7' : '#6b7280',
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
                      backgroundColor: '#e0f2fe',
                      color: '#0369a1',
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
                <span>Automotive EN50155 Certified</span>
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
                  Recommended Hardware
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
                  Operational Impact
                </span>
                <p style={{ fontSize: '13px', color: '#374151', margin: '4px 0 0 0', lineHeight: 1.5 }}>
                  {activeHotspot.benefit}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: PASSENGER AREAS (2 CHALLENGE CARDS MATCHING SCREENSHOT) */}
      <section
        id="passenger-areas"
        style={{
          padding: '70px 32px',
          backgroundColor: '#fafafa',
          borderTop: '1px solid #f3f4f6',
          borderBottom: '1px solid #f3f4f6',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 48px' }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.2vw, 38px)',
                fontWeight: 800,
                color: '#111827',
                margin: '0 0 16px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Passenger areas
            </h2>
            <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>
              Low-definition video security with dead angles may miss potential risks in the cabin and seating areas, increasing the risk of riding public transit buses. While operators also lack effective ways to handle on-board issues quickly and effectively.
            </p>
          </div>

          {/* 2 Challenge Cards Side-by-Side Matching Screenshot */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {/* Challenge Card 1: Dead Angles */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
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
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="/images/transit_bus/challenge_dead_angles.jpg"
                  alt="Low-definition video security with dead angles"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(220, 38, 38, 0.92)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.4px',
                  }}
                >
                  Challenge 1
                </div>
              </div>

              <div style={{ padding: '24px 26px' }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#111827',
                    margin: '0 0 10px 0',
                  }}
                >
                  Low-definition video security with dead angles
                </h3>
                <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.6, margin: '0 0 14px 0' }}>
                  Traditional analog onboard cameras suffer from low resolution and optical blind spots along rear passenger rows, making it virtually impossible to clarify passenger complaints, pickpocketing incidents, or slip-and-fall claims.
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#dc2626',
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  <AlertTriangle size={15} />
                  <span>Missing evidence leads to costly passenger liability claims</span>
                </div>
              </div>
            </div>

            {/* Challenge Card 2: Incident Handling */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
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
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="/images/transit_bus/challenge_incident_handling.jpg"
                  alt="Inefficient incident handling"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(220, 38, 38, 0.92)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.4px',
                  }}
                >
                  Challenge 2
                </div>
              </div>

              <div style={{ padding: '24px 26px' }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#111827',
                    margin: '0 0 10px 0',
                  }}
                >
                  Inefficient incident handling
                </h3>
                <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.6, margin: '0 0 14px 0' }}>
                  When medical crises, passenger fights, or bus collisions occur on the road, drivers must manually phone dispatch or wait until the end of the shift to report, severely delaying emergency response.
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#dc2626',
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  <AlertTriangle size={15} />
                  <span>Lack of instant video-linked panic buttons and two-way voice dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: WHAT WE OFFER (FEATURE TABS + TOPOLOGY DIAGRAM & PRODUCT ACCORDION) */}
      <section
        id="what-we-offer"
        style={{
          padding: '80px 32px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 48px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.2vw, 38px)',
              fontWeight: 800,
              color: '#111827',
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em',
            }}
          >
            What we offer
          </h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>
            Hikvision’s solution helps operators establish high definition on-board video security. The intelligent video security combined with emergency alarms and intercom provide added levels of security to passengers and drivers on the buses.
          </p>
        </div>

        {/* Feature Tabs matching screenshot: Passenger areas / Driving Cabin / Entryway / Operation Center */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '36px',
          }}
        >
          {[
            { id: 'video', label: 'Passenger Areas' },
            { id: 'cabin', label: 'Bus Driving Cabin' },
            { id: 'entryway', label: 'Entryway' },
            { id: 'center', label: 'Operation Center' },
          ].map((tab) => {
            const isSelected = offerTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setOfferTab(tab.id)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '30px',
                  border: isSelected ? '2px solid #0284c7' : '1px solid #d1d5db',
                  backgroundColor: isSelected ? '#0284c7' : '#ffffff',
                  color: isSelected ? '#ffffff' : '#4b5563',
                  fontSize: '14px',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 4px 12px rgba(2, 132, 199, 0.25)' : 'none',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Container */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            padding: '36px',
            marginBottom: '60px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
          }}
        >
          {offerTab === 'video' && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '36px',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  cursor: 'pointer',
                }}
                onClick={() => setLightboxImg('/images/transit_bus/offer_video_patrol.jpg')}
              >
                <img
                  src="/images/transit_bus/offer_video_patrol.jpg"
                  alt="Passenger Areas Video Preview and Patrol"
                  style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              <div>
                <span style={{ display: 'inline-block', padding: '4px 10px', borderRadius: '6px', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '12px', fontWeight: 700, marginBottom: '10px' }}>
                  Video Security & Voice Intercom
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#111827', margin: '0 0 12px 0' }}>
                  Video Preview, Voice Intercom & Alarm Upload
                </h3>
                <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7, margin: '0 0 18px 0' }}>
                  Deploy anti-vibration HD wedge domes throughout the passenger saloon to eliminate dead angles, coupled with emergency alarm boxes and two-way voice intercoms directly linked to the central control room.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Remote live video streaming over 4G/5G cellular networks for instant situational auditing',
                    'Two-way audio intercom allowing dispatchers to communicate with passengers and drivers during emergencies',
                    'Silent emergency panic buttons automatically upload critical video clips to police dispatch',
                    'High-capacity dual SSD storage with automotive-grade shock damping ensures zero data loss',
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '13px', color: '#374151', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {offerTab === 'cabin' && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '36px',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  cursor: 'pointer',
                }}
                onClick={() => setLightboxImg('/images/transit_bus/offer_adas_cabin.jpg')}
              >
                <img
                  src="/images/transit_bus/offer_adas_cabin.jpg"
                  alt="Bus Driving Cabin ADAS and Blind Spot Detection"
                  style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              <div>
                <span style={{ display: 'inline-block', padding: '4px 10px', borderRadius: '6px', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '12px', fontWeight: 700, marginBottom: '10px' }}>
                  Intelligent Driving Assistance
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#111827', margin: '0 0 12px 0' }}>
                  ADAS Collision Warning & DSM Driver Monitoring
                </h3>
                <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7, margin: '0 0 18px 0' }}>
                  Equip transit buses with front ADAS perception cameras and in-cabin DSM facial monitoring sensors to keep drivers alert and provide early warnings before dangerous traffic situations occur.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Forward Collision Warning (FCW) & Lane Departure Warning (LDW) sound immediate audio alerts',
                    'Driver Status Monitor (DSM) detects eye closure, yawning, cell phone usage, and smoking',
                    'Blind Spot Detection (BSD) radar alerts drivers to pedestrians and cyclists during turns',
                    'Integrated touch screen monitor displays high-resolution rear view and door cameras automatically',
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '13px', color: '#374151', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {offerTab === 'entryway' && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '36px',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  cursor: 'pointer',
                }}
                onClick={() => setLightboxImg('/images/transit_bus/offer_passenger_counting.jpg')}
              >
                <img
                  src="/images/transit_bus/offer_passenger_counting.jpg"
                  alt="Entryway Real-Time Passenger Counting"
                  style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              <div>
                <span style={{ display: 'inline-block', padding: '4px 10px', borderRadius: '6px', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '12px', fontWeight: 700, marginBottom: '10px' }}>
                  Entryway Analytics
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#111827', margin: '0 0 12px 0' }}>
                  Stereoscopic Binocular Passenger Counting
                </h3>
                <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7, margin: '0 0 18px 0' }}>
                  Conduct automated, accurate passenger counting at bus boarding and exit doors with 3D stereoscopic vision that distinguishes passengers from luggage and strollers.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Over 98% accuracy filtering out children under set height, shopping bags, and shadows',
                    'Calculates live onboard passenger capacity to alert drivers and dispatchers to overcrowding',
                    'Provides verified Passenger Load Factor (PLF) data to help municipal transit departments optimize routes',
                    'Cross-verifies passenger boardings with electronic farebox ticket swipes to stop fare evasion',
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '13px', color: '#374151', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {offerTab === 'center' && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '36px',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  cursor: 'pointer',
                }}
                onClick={() => setLightboxImg('/images/transit_bus/offer_operation_center.jpg')}
              >
                <img
                  src="/images/transit_bus/offer_operation_center.jpg"
                  alt="Fleet Operation Center GIS Bus and Route Management"
                  style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              <div>
                <span style={{ display: 'inline-block', padding: '4px 10px', borderRadius: '6px', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '12px', fontWeight: 700, marginBottom: '10px' }}>
                  Central Fleet Management
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#111827', margin: '0 0 12px 0' }}>
                  GIS Route Management & Alarm Center
                </h3>
                <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7, margin: '0 0 18px 0' }}>
                  Consolidate fleet-wide GPS trajectory tracking, real-time alarm handling, and automated bus schedules on a single, intuitive centralized management console.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Live GIS electronic map tracks thousands of transit buses simultaneously with speed and heading',
                    'Automatic alerts for route deviation, speeding, geofence breaches, and long dwell times',
                    'Automated high-speed 5.8 GHz Wi-Fi video offloading upon vehicle entry to bus depot',
                    'Comprehensive driver safety scoring and historical playback for municipal transport audits',
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '13px', color: '#374151', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ARCHITECTURE TOPOLOGY & PRODUCT ACCORDION MATCHING SCREENSHOT */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e5e7eb',
            padding: '36px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
            marginBottom: '48px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'flex-start',
            }}
          >
            {/* Left: Official Architecture Topology Diagram */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', margin: '0 0 4px 0' }}>
                    On-board System Architecture
                  </h4>
                  <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>
                    Mobile NVR connected to Wedge Domes, ADAS, Driver Screen, and Central Command via 4G/GPS
                  </p>
                </div>

                <button
                  onClick={() => setLightboxImg('/images/transit_bus/bus_topology.jpg')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    backgroundColor: '#ffffff',
                    color: '#374151',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  <Maximize2 size={13} />
                  <span>Expand</span>
                </button>
              </div>

              <div
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#f9fafb',
                  cursor: 'pointer',
                  padding: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onClick={() => setLightboxImg('/images/transit_bus/bus_topology.jpg')}
              >
                <img
                  src="/images/transit_bus/bus_topology.jpg"
                  alt="Transit Bus On-board System Architecture Topology"
                  style={{
                    width: '100%',
                    maxHeight: '320px',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
            </div>

            {/* Right: Product Selection Accordion Matching Screenshot */}
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', margin: '0 0 16px 0' }}>
                Recommended Hardware Matrix
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Accordion 1: Mobile Network Video Recorder */}
                <div
                  style={{
                    borderRadius: '12px',
                    border: accordionOpen.mdvr ? '1.5px solid #0284c7' : '1px solid #e5e7eb',
                    backgroundColor: accordionOpen.mdvr ? '#f0f9ff' : '#ffffff',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => toggleAccordion('mdvr')}
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Radio size={18} color="#0284c7" />
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#111827' }}>
                        Mobile Network Video Recorder (MDVR)
                      </span>
                    </div>
                    {accordionOpen.mdvr ? (
                      <ChevronUp size={18} color="#0284c7" />
                    ) : (
                      <ChevronDown size={18} color="#6b7280" />
                    )}
                  </button>

                  {accordionOpen.mdvr && (
                    <div style={{ padding: '0 20px 18px 20px', fontSize: '13px', color: '#4b5563', lineHeight: 1.6 }}>
                      <p style={{ margin: '0 0 8px 0', fontWeight: 600, color: '#1f2937' }}>
                        Model: DS-MP7608HN Series (Automotive Certified)
                      </p>
                      <p style={{ margin: '0 0 10px 0' }}>
                        8-ch IP video input with M12 connectors, dual 2.5-inch SSD bays with patented anti-vibration damping, 9-36 VDC wide voltage input with power-off delay, integrated 4G LTE, dual GPS/GLONASS, and 5.8 GHz Wi-Fi.
                      </p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '11px', fontWeight: 600 }}>
                          EN50155 Certified
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '11px', fontWeight: 600 }}>
                          4G / 5G & GPS
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '11px', fontWeight: 600 }}>
                          Dual Anti-Shock SSD
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 2: On-board Cameras */}
                <div
                  style={{
                    borderRadius: '12px',
                    border: accordionOpen.cameras ? '1.5px solid #0284c7' : '1px solid #e5e7eb',
                    backgroundColor: accordionOpen.cameras ? '#f0f9ff' : '#ffffff',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => toggleAccordion('cameras')}
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Camera size={18} color="#0284c7" />
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#111827' }}>
                        On-board Dome & Passenger Cameras
                      </span>
                    </div>
                    {accordionOpen.cameras ? (
                      <ChevronUp size={18} color="#0284c7" />
                    ) : (
                      <ChevronDown size={18} color="#6b7280" />
                    )}
                  </button>

                  {accordionOpen.cameras && (
                    <div style={{ padding: '0 20px 18px 20px', fontSize: '13px', color: '#4b5563', lineHeight: 1.6 }}>
                      <p style={{ margin: '0 0 8px 0', fontWeight: 600, color: '#1f2937' }}>
                        Models: DS-2CD6520D-I (Wedge Dome) & iDS-2CD6810F/C (Passenger Counting)
                      </p>
                      <p style={{ margin: '0 0 10px 0' }}>
                        Vandal-resistant wedge dome with M12 connection for bus ceilings, plus stereoscopic binocular people counting cameras providing 98%+ boarding and exiting counts over bus doors.
                      </p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '11px', fontWeight: 600 }}>
                          IK10 Vandal-Proof
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '11px', fontWeight: 600 }}>
                          98%+ Passenger Accuracy
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '11px', fontWeight: 600 }}>
                          Aviation Connector
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 3: Accessories & Driving Assistance */}
                <div
                  style={{
                    borderRadius: '12px',
                    border: accordionOpen.accessories ? '1.5px solid #0284c7' : '1px solid #e5e7eb',
                    backgroundColor: accordionOpen.accessories ? '#f0f9ff' : '#ffffff',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => toggleAccordion('accessories')}
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Activity size={18} color="#0284c7" />
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#111827' }}>
                        ADAS, DSM & Driver Monitor Display
                      </span>
                    </div>
                    {accordionOpen.accessories ? (
                      <ChevronUp size={18} color="#0284c7" />
                    ) : (
                      <ChevronDown size={18} color="#6b7280" />
                    )}
                  </button>

                  {accordionOpen.accessories && (
                    <div style={{ padding: '0 20px 18px 20px', fontSize: '13px', color: '#4b5563', lineHeight: 1.6 }}>
                      <p style={{ margin: '0 0 8px 0', fontWeight: 600, color: '#1f2937' }}>
                        Models: AE-DA5013-N (ADAS) & 7&quot; Automotive Driver Monitor
                      </p>
                      <p style={{ margin: '0 0 10px 0' }}>
                        AI deep learning lane and collision warnings, driver drowsiness alarms, emergency panic button, and 7-inch touch display showing multi-camera feeds and real-time reverse guidance.
                      </p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '11px', fontWeight: 600 }}>
                          ADAS Collision Warning
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '11px', fontWeight: 600 }}>
                          DSM Fatigue Alert
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '11px', fontWeight: 600 }}>
                          7&quot; Touch Screen
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 PRODUCT CARDS ROW MATCHING SCREENSHOT BOTTOM OF 'WHAT WE OFFER' */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Product 1: Mobile NVR */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#e0f2fe',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <Radio size={44} color="#0284c7" />
            </div>

            <span style={{ fontSize: '12px', fontWeight: 700, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
              Central Mobile Hub
            </span>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
              Mobile Network Video Recorder
            </h4>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 16px 0' }}>
              DS-MP7608HN Series
            </p>
            <button
              onClick={() => setShowContactModal(true)}
              style={{
                marginTop: 'auto',
                padding: '8px 18px',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                backgroundColor: '#ffffff',
                color: '#374151',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0284c7';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#0284c7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#374151';
                e.currentTarget.style.borderColor = '#d1d5db';
              }}
            >
              Inquire Specs
            </button>
          </div>

          {/* Product 2: Wedge Dome */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#e0f2fe',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <Camera size={44} color="#0284c7" />
            </div>

            <span style={{ fontSize: '12px', fontWeight: 700, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
              Passenger Saloon
            </span>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
              Wedge Dome On-board Camera
            </h4>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 16px 0' }}>
              DS-2CD6520D-I
            </p>
            <button
              onClick={() => setShowContactModal(true)}
              style={{
                marginTop: 'auto',
                padding: '8px 18px',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                backgroundColor: '#ffffff',
                color: '#374151',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0284c7';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#0284c7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#374151';
                e.currentTarget.style.borderColor = '#d1d5db';
              }}
            >
              Inquire Specs
            </button>
          </div>

          {/* Product 3: Passenger Counting */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#e0f2fe',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <Users size={44} color="#0284c7" />
            </div>

            <span style={{ fontSize: '12px', fontWeight: 700, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
              Entryway Flow
            </span>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
              Passenger Counting Camera
            </h4>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 16px 0' }}>
              iDS-2CD6810F/C
            </p>
            <button
              onClick={() => setShowContactModal(true)}
              style={{
                marginTop: 'auto',
                padding: '8px 18px',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                backgroundColor: '#ffffff',
                color: '#374151',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0284c7';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#0284c7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#374151';
                e.currentTarget.style.borderColor = '#d1d5db';
              }}
            >
              Inquire Specs
            </button>
          </div>
        </div>
      </section>

      {/* 7. SECTION: SUCCESS STORIES (NINGBO CITY BUS CASE STUDY MATCHING SCREENSHOT) */}
      <section
        id="success-stories"
        style={{
          padding: '80px 32px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.2vw, 38px)',
              fontWeight: 800,
              color: '#111827',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            Success stories
          </h2>
        </div>

        {/* Case Study Card Matching Screenshot */}
        <div
          style={{
            maxWidth: '1040px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e5e7eb',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'stretch',
          }}
        >
          {/* Real High-Resolution Success Story Image */}
          <div style={{ position: 'relative', minHeight: '300px' }}>
            <img
              src="/images/transit_bus/success_story_ningbo.jpg"
              alt="Hikvision Video Surveillance System Secures Ningbo City Bus"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                padding: '4px 12px',
                borderRadius: '6px',
                backgroundColor: 'rgba(17, 24, 39, 0.85)',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Case Study
            </div>
          </div>

          {/* Content matching screenshot headline & text */}
          <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3
              style={{
                fontSize: 'clamp(20px, 2.2vw, 25px)',
                fontWeight: 800,
                color: '#111827',
                lineHeight: 1.3,
                margin: '0 0 14px 0',
              }}
            >
              Hikvision Video Surveillance System Secures Ningbo City Bus
            </h3>

            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7, margin: '0 0 20px 0' }}>
              Ningbo Public Transport Corporation in Zhejiang, China outfitted more than 3,600 municipal transit buses with Hikvision mobile video recorders, passenger counting cameras, and central GIS dispatch software, significantly curbing fare evasion, dropping on-board theft by 58%, and streamlining accident liability verification.
            </p>

            <button
              onClick={() => setShowCaseStudyModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'none',
                border: 'none',
                color: '#0284c7',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                padding: 0,
                width: 'fit-content',
              }}
            >
              <span>Read more</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* 8. SECTION: YOU MAY ALSO BE INTERESTED IN (3 CARDS MATCHING SCREENSHOT) */}
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
            {/* Card 1: Bus Stop */}
            <Link
              to="/solutions/bus-stop"
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
                src="/images/bus_stop/bus_stop_hero.jpg"
                alt="Bus Stop Solution"
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
                  Bus Stop
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                  Smart shelter security, passenger broadcast & shelter occupancy
                </p>
              </div>
            </Link>

            {/* Card 2: Transit Bus Industry */}
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
                src="/images/transit_bus/bus_hero.jpg"
                alt="Transit Bus Industry Solution"
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
                  Transit Bus
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                  Depot management, bus lane enforcement & fleet maintenance
                </p>
              </div>
            </Link>

            {/* Card 3: People Counting */}
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
                src="/images/transit_bus/offer_passenger_counting.jpg"
                alt="People Counting Solution"
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
                  Solutions by Function
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 6px 0' }}>
                  People Counting
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                  High-precision flow analytics for stations and commercial hubs
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. SECTION: READY TO DISCUSS YOUR NEEDS (RED & BLACK CTA BUTTONS MATCHING SCREENSHOT) */}
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

      {/* CASE STUDY MODAL: NINGBO CITY BUS FLEET */}
      {showCaseStudyModal && (
        <div
          onClick={() => setShowCaseStudyModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
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
              maxWidth: '780px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '36px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            <button
              onClick={() => setShowCaseStudyModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#f3f4f6',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#374151',
              }}
            >
              <X size={18} />
            </button>

            <span
              style={{
                display: 'inline-block',
                padding: '4px 10px',
                borderRadius: '6px',
                backgroundColor: '#e0f2fe',
                color: '#0369a1',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              Case Study Full Report
            </span>

            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#111827', margin: '0 0 16px 0', lineHeight: 1.3 }}>
              Ningbo City Bus Fleet: Safeguarding 3,600 Public Transit Vehicles with Smart Mobile NVRs
            </h3>

            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', maxHeight: '280px' }}>
              <img
                src="/images/transit_bus/success_story_ningbo.jpg"
                alt="Ningbo City Bus Fleet"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.8 }}>
              <p>
                <strong>Customer:</strong> Ningbo Public Transport Group Co., Ltd.<br />
                <strong>Deployment:</strong> 3,600+ municipal buses, 18,000+ IP mobile cameras, central transit dispatch cloud platform<br />
                <strong>System Hardware:</strong> DS-MP7608HN Mobile NVRs, Anti-Vibration Wedge Domes, Stereoscopic Passenger Counters, Driver Assistance Monitors
              </p>

              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '18px 0 8px 0' }}>
                Key Fleet Results
              </h4>
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                <li><strong>58% Drop in Passenger Thefts:</strong> High-definition video coverage with zero blind spots eliminated pickpocketing hubs along heavily trafficked routes.</li>
                <li><strong>98.2% Accurate Passenger Counting:</strong> Stereoscopic dual-lens entryway cameras allowed dispatchers to dynamically schedule extra express buses during morning and evening rush hours.</li>
                <li><strong>Instant Dispute Resolution:</strong> High-fidelity interior audio and synchronized GPS playback reduced passenger complaint investigation time from 5 days to under 30 minutes.</li>
                <li><strong>Zero Data Loss:</strong> Patented anti-vibration damping preserved video recordings across harsh road bumps and winter temperature fluctuations (-30°C to +70°C).</li>
              </ul>
            </div>

            <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button
                onClick={() => {
                  setShowCaseStudyModal(false);
                  setShowContactModal(true);
                }}
                style={{
                  padding: '10px 22px',
                  borderRadius: '8px',
                  backgroundColor: '#0284c7',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Inquire Similar Solution
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT SALES MODAL */}
      <ContactSalesModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        solutionTitle="Transit Bus On-board Solution"
      />
    </div>
  );
}
