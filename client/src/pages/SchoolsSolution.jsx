import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Shield,
  Clock,
  CheckCircle2,
  ChevronRight,
  Share2,
  PhoneCall,
  FileText,
  AlertTriangle,
  ArrowRight,
  Maximize2,
  X,
  Tv,
  Cpu,
  Eye,
  Camera,
  Layers,
  Sparkles,
  Users,
  Compass,
  BellRing
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for 3D Cutaway Campus Overview
const CAMPUS_HOTSPOTS = [
  {
    id: 1,
    x: '58%',
    y: '57%',
    title: 'Main Entrance & School Bus Gates',
    desc: 'Deep Learning ANPR cameras, rapid speed gates, and barrier systems ensure safe vehicle flow and prevent unauthorized cars from entering pedestrian drop-off zones.',
  },
  {
    id: 2,
    x: '44%',
    y: '48%',
    title: 'Central Library & Academic Complex',
    desc: 'High-definition indoor cameras, automated contactless turnstiles, and electronic notice boards support quiet study environments and verified student access.',
  },
  {
    id: 3,
    x: '72%',
    y: '37%',
    title: 'Athletic Field & Outdoor Sports Complex',
    desc: 'TandemVu panoramic PTZ cameras monitor running tracks and sports grounds, providing ultra-wide situational awareness and detailed zoom during physical activities.',
  },
  {
    id: 4,
    x: '30%',
    y: '52%',
    title: 'Kindergarten & Playground Activity Area',
    desc: 'AcuSense AI cameras with ultra-low-light ColorVu technology protect play areas, automatically detecting perimeter crossing or stranger loitering.',
  },
  {
    id: 5,
    x: '62%',
    y: '22%',
    title: 'Student Dormitories & Campus Perimeter',
    desc: 'Smart thermal intrusion tripwires and facial recognition access terminals prevent non-residents from entering residence halls, alerting guards immediately.',
  },
];

export default function SchoolsSolution() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  const [activeHotspot, setActiveHotspot] = useState(CAMPUS_HOTSPOTS[0]);
  const [lightboxImg, setLightboxImg] = useState(null);

  // Entrance & Exit tab state (matches Parking Lots & Schools format)
  const [eeTab, setEeTab] = useState('access'); // 'records' | 'access'

  // Product accordion state
  const [accordionOpen, setAccordionOpen] = useState({
    unit: true,
    led: false,
    intercom: true,
    software: false,
  });

  const toggleAccordion = (key) => {
    setAccordionOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Scrollspy for sub-navigation
  useEffect(() => {
    const handleScroll = () => {
      const navSections = [
        'overview',
        'entrance-exit',
        'gates-dormitories',
        'public-areas',
        'perimeters',
        'classroom',
        'control-room',
        'success-stories',
        'related',
      ];
      const scrollPos = window.scrollY + 200;

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
      {/* 1. HERO SECTION: Panoramic Aerial Campus Banner with Green Radial Overlay & 740px Height */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '740px',
          height: '740px',
          overflow: 'hidden',
          backgroundColor: '#064e3b',
        }}
      >
        {/* Real High-Resolution School Campus Hero Image */}
        <img
          src="/images/schools/school_hero.jpg"
          alt="Coloron School Security Management Solution"
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

        {/* Emerald Green Circular Radial Glow Overlay (matches screenshot) */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '65vw',
            height: '140%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.72) 0%, rgba(5, 150, 105, 0.5) 45%, rgba(4, 120, 87, 0.2) 75%, transparent 100%)',
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
        />

        {/* Subtle Vignette for High Text Readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(6, 78, 59, 0.75) 0%, rgba(6, 78, 59, 0.38) 50%, rgba(6, 78, 59, 0.12) 100%)',
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
              backgroundColor: 'rgba(255, 255, 255, 0.18)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.4px',
              width: 'fit-content',
              marginBottom: '16px',
            }}
          >
            <GraduationCap size={15} color="#a7f3d0" />
            <span>Solutions by Scenario</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.12,
              margin: '0 0 14px 0',
              letterSpacing: '-0.02em',
              textShadow: '0 3px 18px rgba(0, 0, 0, 0.55)',
            }}
          >
            Schools
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(17px, 2vw, 22px)',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.95)',
              margin: 0,
              maxWidth: '660px',
              lineHeight: 1.45,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            Safer campus, better education
          </p>
        </div>
      </section>

      {/* 2. BREADCRUMBS & UTILITY BAR */}
      <section
        style={{
          borderBottom: '1px solid #e5e7eb',
          backgroundColor: '#fafafa',
          fontSize: '13px',
          color: '#6b7280',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '12px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link to="/" style={{ color: '#6b7280', textDecoration: 'none' }}>
              Coloron
            </Link>
            <span>/</span>
            <Link to="/solutions" style={{ color: '#6b7280', textDecoration: 'none' }}>
              Solutions
            </Link>
            <span>/</span>
            <span style={{ color: '#6b7280' }}>Solutions by Scenario</span>
            <span>/</span>
            <span style={{ color: '#111827', fontWeight: 600 }}>School Security Management Solution</span>
          </div>

          {/* Utility Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button
              onClick={() => setShowContactModal(true)}
              style={{
                background: 'none',
                border: 'none',
                color: '#059669',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <PhoneCall size={14} />
              <span>Contact Specialist</span>
            </button>

            <button
              onClick={handleShare}
              style={{
                background: 'none',
                border: 'none',
                color: '#4b5563',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <Share2 size={14} />
              <span>{copiedShare ? 'Copied URL!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. STICKY SUB-NAVIGATION BAR WITH SCROLLSPY */}
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
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {[
            { id: 'overview', label: 'Solution overview' },
            { id: 'entrance-exit', label: 'Entrance & exit management' },
            { id: 'gates-dormitories', label: 'School gates & dormitories' },
            { id: 'public-areas', label: 'Public areas' },
            { id: 'perimeters', label: 'Perimeters' },
            { id: 'classroom', label: 'Classroom' },
            { id: 'control-room', label: 'Control room' },
            { id: 'success-stories', label: 'Success stories' },
            { id: 'related', label: 'You may also be interested in' },
          ].map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: isActive ? '3px solid #059669' : '3px solid transparent',
                  padding: '16px 0',
                  color: isActive ? '#059669' : '#4b5563',
                  fontSize: '14px',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* 4. SOLUTION OVERVIEW SECTION */}
      <section
        id="overview"
        style={{
          padding: '64px 32px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto 48px auto' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#111827',
              margin: '0 0 16px 0',
              letterSpacing: '-0.01em',
            }}
          >
            Solution overview
          </h2>
          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.7,
              color: '#4b5563',
              margin: 0,
            }}
          >
            Schools need to maintain a secure and orderly campus environment to protect teachers and students. As incidents of
            bullying, unauthorized intrusions, and vehicle congestion outside school gates raise public concern, Coloron offers
            comprehensive, AI-empowered campus security solutions covering entrance management, student attendance, perimeter
            protection, classroom interaction, and unified SOC control.
          </p>
        </div>

        {/* 3D Cutaway School Campus Model Card with Interactive Hotspots */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#f8fafc',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            padding: '24px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '980px',
              margin: '0 auto',
            }}
          >
            <img
              src="/images/schools/school_3d_map.jpg"
              alt="School Campus 3D Architecture Map"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onClick={() => setLightboxImg('/images/schools/school_3d_map.jpg')}
            />

            {/* Clickable Hotspots overlaying the 3D map */}
            {CAMPUS_HOTSPOTS.map((spot) => {
              const isSelected = activeHotspot?.id === spot.id;
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
                    backgroundColor: isSelected ? '#059669' : '#ef4444',
                    border: '2px solid #ffffff',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: isSelected ? '14px' : '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: isSelected
                      ? '0 0 0 6px rgba(5, 150, 105, 0.35)'
                      : '0 2px 8px rgba(0, 0, 0, 0.35)',
                    transition: 'all 0.2s ease',
                    zIndex: 20,
                  }}
                  title={spot.title}
                >
                  {spot.id}
                </button>
              );
            })}
          </div>

          {/* Active Hotspot Detail Card below 3D map */}
          {activeHotspot && (
            <div
              style={{
                marginTop: '24px',
                padding: '18px 24px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#059669',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '14px',
                  flexShrink: 0,
                }}
              >
                {activeHotspot.id}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: 700, color: '#111827' }}>
                  {activeHotspot.title}
                </h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#4b5563', lineHeight: 1.6 }}>
                  {activeHotspot.desc}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. ENTRANCE & EXIT MANAGEMENT SECTION (Exact layout from user screenshot) */}
      <section
        id="entrance-exit"
        style={{
          padding: '64px 32px',
          maxWidth: '1360px',
          margin: '0 auto',
          borderTop: '1px solid #f1f5f9',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#111827',
              margin: '0 0 14px 0',
              letterSpacing: '-0.01em',
            }}
          >
            Entrance &amp; exit management
          </h2>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
            Ensure student pedestrian safety and prevent unauthorized vehicle entry with automated deep learning cameras and barrier control.
          </p>
        </div>

        {/* Challenges Subsection */}
        <div style={{ marginBottom: '56px' }}>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#111827',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <AlertTriangle size={20} color="#f59e0b" />
            <span>Challenges</span>
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Challenge 1 */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden', backgroundColor: '#f3f4f6' }}>
                <img
                  src="/images/schools/challenge_congestion.jpg"
                  alt="Rush hour congestion"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                  Rush hour congestion
                </h4>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                  Dropping off and picking up students causes massive traffic jams outside campus gates during morning and afternoon
                  peak hours, often blocking emergency fire lanes and pedestrian crossings.
                </p>
              </div>
            </div>

            {/* Challenge 2 */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden', backgroundColor: '#f3f4f6' }}>
                <img
                  src="/images/schools/challenge_unsafe_crossing.jpg"
                  alt="Unsafe E&E management"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                  Unsafe E&amp;E management
                </h4>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                  Mixing student pedestrians, cyclists, and incoming school buses or delivery trucks creates severe blind spot hazards
                  and accident risks when no automated segregation or speed enforcement exists.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer Subsection (Exact Layout Matching Screenshot) */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3
              style={{
                fontSize: '26px',
                fontWeight: 700,
                color: '#111827',
                margin: '0 0 10px 0',
              }}
            >
              What we offer
            </h3>
            <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
              Coloron's campus vehicle access solution automates school bus entry, detects illegal stopping, and prevents strangers from driving into school grounds.
            </p>
          </div>

          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            {/* Top Row: Camera Photo + Benefits/Features */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                gap: '48px',
                alignItems: 'flex-start',
                marginBottom: '56px',
              }}
            >
              {/* Top Left: School Gate ANPR Camera with Plate Detection Bounding Box */}
              <div
                style={{
                  borderRadius: '6px',
                  overflow: 'hidden',
                  backgroundColor: '#f3f4f6',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
                }}
              >
                <img
                  src="/images/schools/offer_entrance_anpr.jpg"
                  alt="School gate ANPR camera recognition"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    cursor: 'zoom-in',
                  }}
                  onClick={() => setLightboxImg('/images/schools/offer_entrance_anpr.jpg')}
                />
              </div>

              {/* Top Right: Benefits & Features with Italicized Headings */}
              <div style={{ paddingLeft: '8px' }}>
                <h4
                  style={{
                    fontStyle: 'italic',
                    textDecoration: 'underline',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#111827',
                    margin: '0 0 14px 0',
                  }}
                >
                  Benefits
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0' }}>
                  {[
                    'Improve traffic efficiency with smooth passing through experience',
                    'Enhanced security by authentication and video record',
                    'Manage temporary vehicles effectively with manual adjustment',
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '14px',
                        color: '#374151',
                        marginBottom: '10px',
                        lineHeight: 1.55,
                      }}
                    >
                      <span style={{ fontSize: '18px', lineHeight: '14px', color: '#4b5563' }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h4
                  style={{
                    fontStyle: 'italic',
                    textDecoration: 'underline',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#111827',
                    margin: '0 0 14px 0',
                  }}
                >
                  Features
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Support vehicle authentication, blocklist alarm, and passing vehicle monitoring',
                    'Manual license correction and barrier control',
                    'Call remote center for no-toll-booth scenario or when the booth is off-duty',
                    'Support statistics of operation data',
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '14px',
                        color: '#374151',
                        marginBottom: '10px',
                        lineHeight: 1.55,
                      }}
                    >
                      <span style={{ fontSize: '18px', lineHeight: '14px', color: '#4b5563' }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Row: Topology Architecture Diagram + Collapsible Product Accordion */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                gap: '48px',
                alignItems: 'flex-start',
              }}
            >
              {/* Bottom Left: Full System Topology Architecture Diagram */}
              <div
                style={{
                  borderRadius: '6px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
                }}
              >
                <img
                  src="/images/parking_lots/offer_access_screen.jpg"
                  alt="School Entrance and Exit Access System Topology Diagram"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    cursor: 'zoom-in',
                  }}
                  onClick={() => setLightboxImg('/images/parking_lots/offer_access_screen.jpg')}
                />
              </div>

              {/* Bottom Right: Clean Product Accordion */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* 1. Intelligent E&E video unit */}
                <div style={{ borderTop: '1px solid #e5e7eb' }}>
                  <div
                    onClick={() => toggleAccordion('unit')}
                    style={{
                      padding: '16px 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                  >
                    <span style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>
                      Intelligent E&amp;E video unit
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        color: '#9ca3af',
                        transform: accordionOpen.unit ? 'rotate(0deg)' : 'rotate(180deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      ▲
                    </span>
                  </div>

                  {accordionOpen.unit && (
                    <div
                      style={{
                        marginBottom: '16px',
                        padding: '14px 18px',
                        backgroundColor: '#f9fafb',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '18px',
                        border: '1px solid #f3f4f6',
                      }}
                    >
                      <div
                        style={{
                          width: '80px',
                          height: '56px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src="/images/parking_lots/prod_anpr_camera.png"
                          alt="iDS-2CD7A46G0/P-IZHS(Y)"
                          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                        />
                      </div>
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '3px' }}>
                          iDS-2CD7A46G0/P-IZHS(Y)
                        </div>
                        <div style={{ fontSize: '13px', color: '#6b7280' }}>
                          4MP DeepinView ANPR Moto Varifocal Bullet Camera
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. LED screen */}
                <div style={{ borderTop: '1px solid #e5e7eb' }}>
                  <div
                    onClick={() => toggleAccordion('led')}
                    style={{
                      padding: '16px 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                  >
                    <span style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>
                      LED screen
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        color: '#9ca3af',
                        transform: accordionOpen.led ? 'rotate(0deg)' : 'rotate(180deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      ▲
                    </span>
                  </div>

                  {accordionOpen.led && (
                    <div
                      style={{
                        marginBottom: '16px',
                        padding: '14px 18px',
                        backgroundColor: '#f9fafb',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '18px',
                        border: '1px solid #f3f4f6',
                      }}
                    >
                      <div
                        style={{
                          width: '80px',
                          height: '56px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          backgroundColor: '#ffffff',
                          borderRadius: '4px',
                          border: '1px solid #e5e7eb',
                        }}
                      >
                        <Tv size={26} color="#059669" />
                      </div>
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '3px' }}>
                          DS-TVL224-4-5Y
                        </div>
                        <div style={{ fontSize: '13px', color: '#6b7280' }}>
                          Outdoor School Gate Traffic Guidance LED Information Screen
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. Video Intercom */}
                <div style={{ borderTop: '1px solid #e5e7eb' }}>
                  <div
                    onClick={() => toggleAccordion('intercom')}
                    style={{
                      padding: '16px 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                  >
                    <span style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>
                      Video Intercom
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        color: '#9ca3af',
                        transform: accordionOpen.intercom ? 'rotate(0deg)' : 'rotate(180deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      ▲
                    </span>
                  </div>

                  {accordionOpen.intercom && (
                    <div
                      style={{
                        marginBottom: '16px',
                        padding: '14px 18px',
                        backgroundColor: '#f9fafb',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '18px',
                        border: '1px solid #f3f4f6',
                      }}
                    >
                      <div
                        style={{
                          width: '80px',
                          height: '56px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src="/images/parking_lots/prod_intercom.png"
                          alt="DS-KV8113-WME1(C)"
                          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                        />
                      </div>
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '3px' }}>
                          DS-KV8113-WME1(C)
                        </div>
                        <div style={{ fontSize: '13px', color: '#6b7280' }}>
                          1 Button Metal Villa Door Station
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 4. Software */}
                <div style={{ borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <div
                    onClick={() => toggleAccordion('software')}
                    style={{
                      padding: '16px 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                  >
                    <span style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>
                      Software
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        color: '#9ca3af',
                        transform: accordionOpen.software ? 'rotate(0deg)' : 'rotate(180deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      ▲
                    </span>
                  </div>

                  {accordionOpen.software && (
                    <div
                      style={{
                        marginBottom: '16px',
                        padding: '14px 18px',
                        backgroundColor: '#f9fafb',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '18px',
                        border: '1px solid #f3f4f6',
                      }}
                    >
                      <div
                        style={{
                          width: '80px',
                          height: '56px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          backgroundColor: '#ffffff',
                          borderRadius: '4px',
                          border: '1px solid #e5e7eb',
                        }}
                      >
                        <Cpu size={26} color="#059669" />
                      </div>
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '3px' }}>
                          Coloron Central Professional
                        </div>
                        <div style={{ fontSize: '13px', color: '#6b7280' }}>
                          Smart Campus Security &amp; Attendance Management Subsystem
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES SECTION */}
      <section
        id="success-stories"
        style={{
          padding: '64px 32px',
          maxWidth: '1360px',
          margin: '0 auto',
          borderTop: '1px solid #f1f5f9',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#111827',
              margin: '0 0 14px 0',
              letterSpacing: '-0.01em',
            }}
          >
            Success stories
          </h2>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
            Discover how leading educational institutions worldwide create safer learning environments with Coloron.
          </p>
        </div>

        {/* Featured Case Study Card */}
        <div
          style={{
            maxWidth: '1040px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          }}
        >
          <div style={{ minHeight: '300px', backgroundColor: '#064e3b', position: 'relative' }}>
            <img
              src="/images/schools/success_story_indonesia.jpg"
              alt="Indonesian university smart campus case study"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          <div
            style={{
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '4px 10px',
                borderRadius: '4px',
                backgroundColor: '#d1fae5',
                color: '#065f46',
                fontSize: '12px',
                fontWeight: 600,
                marginBottom: '14px',
                width: 'fit-content',
              }}
            >
              Case Study
            </div>
            <h3
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#111827',
                margin: '0 0 14px 0',
                lineHeight: 1.35,
              }}
            >
              Indonesian university bridges science education with digital innovation
            </h3>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.65,
                color: '#4b5563',
                margin: '0 0 24px 0',
              }}
            >
              Universitas Muhammadiyah Surakarta modernised its multi-campus educational facilities with Coloron AI perimeter
              surveillance, smart facial recognition entry gates, and interactive classroom learning hubs.
            </p>
            <button
              onClick={() => setShowContactModal(true)}
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#059669',
                background: 'none',
                border: 'none',
                padding: 0,
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              <span>Read case study</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. YOU MAY ALSO BE INTERESTED IN */}
      <section
        id="related"
        style={{
          padding: '64px 32px 80px 32px',
          maxWidth: '1360px',
          margin: '0 auto',
          borderTop: '1px solid #f1f5f9',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#111827',
              margin: '0 0 14px 0',
              letterSpacing: '-0.01em',
            }}
          >
            You may also be interested in
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {/* Card 1: Education Solution */}
          <Link
            to="/solutions"
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              height: '240px',
              textDecoration: 'none',
              display: 'block',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
            }}
          >
            <img
              src="/images/schools/interest_smart_education.jpg"
              alt="Education Solution"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.7)',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <span style={{ color: '#6ee7b7', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                Industry Solution
              </span>
              <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, margin: 0 }}>
                Smart Education
              </h4>
            </div>
          </Link>

          {/* Card 2: Classroom Hub */}
          <Link
            to="/solutions/classroom-hub"
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              height: '240px',
              textDecoration: 'none',
              display: 'block',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
            }}
          >
            <img
              src="/images/schools/interest_classroom_hub.jpg"
              alt="Classroom Hub"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.7)',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <span style={{ color: '#6ee7b7', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                Scenario Solution
              </span>
              <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, margin: 0 }}>
                Classroom Hub
              </h4>
            </div>
          </Link>

          {/* Card 3: Student Attendance */}
          <Link
            to="/solutions/factories"
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              height: '240px',
              textDecoration: 'none',
              display: 'block',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
            }}
          >
            <img
              src="/images/schools/interest_student_attendance.jpg"
              alt="Student Attendance"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.7)',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <span style={{ color: '#6ee7b7', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                Function Solution
              </span>
              <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, margin: 0 }}>
                Student Attendance
              </h4>
            </div>
          </Link>
        </div>
      </section>

      {/* 8. BOTTOM CTA SECTION */}
      <section
        style={{
          backgroundColor: '#064e3b',
          padding: '60px 32px',
          textAlign: 'center',
          color: '#ffffff',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>
            Ready to discuss your needs?
          </h2>
          <p style={{ fontSize: '15px', color: '#a7f3d0', marginBottom: '28px' }}>
            Speak with Coloron education security engineers to plan your campus-wide surveillance, gate access, and classroom technology.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowContactModal(true)}
              style={{
                padding: '12px 28px',
                backgroundColor: '#dc2626',
                color: '#ffffff',
                border: 'none',
                borderRadius: '24px',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b91c1c')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
            >
              Contact Sales
            </button>
            <Link
              to="/contact"
              style={{
                padding: '12px 28px',
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '24px',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#ffffff';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Contact a Distributor
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            cursor: 'zoom-out',
          }}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <img
              src={lightboxImg}
              alt="Enlarged view"
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0px',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
              }}
            >
              <X size={28} />
            </button>
          </div>
        </div>
      )}

      {/* Contact Sales / Specialist Modal */}
      <ContactSalesModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        defaultSubject="School Security Management Solution Inquiry"
      />
    </div>
  );
}
