import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Car,
  Shield,
  Clock,
  CheckCircle2,
  ChevronRight,
  Share2,
  PhoneCall,
  FileText,
  Download,
  AlertTriangle,
  Compass,
  CreditCard,
  BarChart3,
  Layers,
  Sparkles,
  Maximize2,
  X,
  ArrowRight,
  Eye,
  Camera,
  Cpu,
  Tv
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for 3D Cutaway Parking Garage Overview
const OVERVIEW_HOTSPOTS = [
  {
    id: 1,
    x: '58%',
    y: '22%',
    title: 'Rooftop & Upper Deck Space Detectors',
    desc: 'Weatherproof high-altitude dual-lens cameras monitor outdoor parking rows with long-range license plate capture and real-time bay occupancy reporting.',
  },
  {
    id: 2,
    x: '52%',
    y: '53%',
    title: 'Entrance & Exit ANPR Speed Barriers',
    desc: 'High-speed brushless barrier gates (<1.5s) combined with Deep Learning ANPR capture cameras for ticketless, frictionless vehicle throughput.',
  },
  {
    id: 3,
    x: '38%',
    y: '42%',
    title: 'Indoor Multi-Space Guidance Indicators',
    desc: 'High-definition dual-direction indicator cameras track up to 6 parking spaces per unit, illuminating ultra-bright Green (available) or Red (occupied).',
  },
  {
    id: 4,
    x: '72%',
    y: '48%',
    title: 'Central Command & Pay Station Kiosks',
    desc: 'Automated self-service pay stations and Find-My-Car search terminals integrated with central SOC monitoring for 24/7 remote fee auditing.',
  },
];

export default function ParkingLotsSolution() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  const [activeHotspot, setActiveHotspot] = useState(OVERVIEW_HOTSPOTS[1]);
  const [lightboxImg, setLightboxImg] = useState(null);

  // Entrance & Exit tab state (defaults to 'access' to match screenshot)
  const [eeTab, setEeTab] = useState('access'); // 'records' | 'access'

  // Accordion state for product categories
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
        'indoor-guidance',
        'fee-rules',
        'operation-management',
        'success-stories',
        'download',
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
      {/* 1. HERO SECTION: Panoramic Smart Parking Garage Banner with 740px Height */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '740px',
          height: '740px',
          overflow: 'hidden',
          backgroundColor: '#0a192f',
        }}
      >
        {/* Real High-Resolution Parking Lot Hero Image */}
        <img
          src="/images/parking_lots/parking_hero.jpg"
          alt="Coloron Smart Parking Lot Management Solution"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 45%',
            filter: 'brightness(0.95)',
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
            background: 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.68) 0%, rgba(2, 132, 199, 0.48) 45%, rgba(3, 105, 161, 0.18) 75%, transparent 100%)',
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
        />

        {/* Vignette Shadow Overlay for Sharp High Contrast Text */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(10, 25, 47, 0.72) 0%, rgba(10, 25, 47, 0.42) 50%, rgba(10, 25, 47, 0.15) 100%)',
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
            <Car size={15} color="#bae6fd" />
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
            Parking Lots
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
            Professional Smart Parking Solution for Seamless Vehicle Flow and Safe Management
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
            <span style={{ color: '#111827', fontWeight: 600 }}>Solutions for Parking Lots</span>
          </div>

          {/* Utility Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button
              onClick={() => setShowContactModal(true)}
              style={{
                background: 'none',
                border: 'none',
                color: '#0284c7',
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
            { id: 'indoor-guidance', label: 'Indoor parking guidance' },
            { id: 'fee-rules', label: 'Parking fee rules' },
            { id: 'operation-management', label: 'Operation & management' },
            { id: 'success-stories', label: 'Success stories' },
            { id: 'download', label: 'Download' },
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
                  borderBottom: isActive ? '3px solid #0284c7' : '3px solid transparent',
                  padding: '16px 0',
                  color: isActive ? '#0284c7' : '#4b5563',
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
            Parking lots of modern commercial buildings, shopping plazas, hospitals, and transit hubs require an efficient,
            frictionless, and automated management system. As driver volume increases and manual ticket kiosks cause bottleneck
            delays, Coloron provides an AI-powered end-to-end parking management system covering ANPR entry access, multi-space
            indoor guidance, flexible automated fee rules, and centralized operational analytics.
          </p>
        </div>

        {/* 3D Cutaway Parking Garage Graphic Card with Interactive Hotspots */}
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
              src="/images/parking_lots/parking_3d_map.jpg"
              alt="Parking Lot 3D Architecture Map"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onClick={() => setLightboxImg('/images/parking_lots/parking_3d_map.jpg')}
            />

            {/* Clickable Hotspots overlaying the 3D map */}
            {OVERVIEW_HOTSPOTS.map((spot) => {
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
                    backgroundColor: isSelected ? '#0284c7' : '#ef4444',
                    border: '2px solid #ffffff',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: isSelected ? '14px' : '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: isSelected
                      ? '0 0 0 6px rgba(2, 132, 199, 0.35)'
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
                  backgroundColor: '#0284c7',
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

      {/* 5. ENTRANCE & EXIT MANAGEMENT SECTION */}
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
            Automate lane access and speed up throughput with AI DeepinView ANPR cameras and high-speed boom barriers.
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
                  src="/images/parking_lots/challenge_congestion.jpg"
                  alt="Rush hour congestion"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                  Rush hour congestion
                </h4>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                  Manual paper ticketing and coin payment dispensers cause long queues at entry barriers, leading to severe
                  traffic backlogs that spill onto adjacent public roadways during morning and evening rush hours.
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
                  src="/images/parking_lots/challenge_manual_fee.jpg"
                  alt="Difficult record retrieval"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                  Difficult record retrieval
                </h4>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                  Without automated license plate identification, verifying lost paper parking slips requires security guards to
                  spend dozens of minutes manually cross-checking paper log books or scrolling through hours of raw CCTV clips.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer Subsection */}
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
              Coloron's intelligent vehicle access control system provides ticketless entry, 99.5%+ plate recognition, and
              instant whitelist gate opening.
            </p>
          </div>

          {/* Sub-tab selection (matches screenshot styling) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              borderBottom: '1px solid #e5e7eb',
              marginBottom: '36px',
            }}
          >
            <button
              onClick={() => setEeTab('records')}
              style={{
                padding: '10px 24px',
                border: eeTab === 'records' ? '1px solid #e5e7eb' : 'none',
                borderBottom: eeTab === 'records' ? '1px solid #ffffff' : 'none',
                borderTopLeftRadius: '6px',
                borderTopRightRadius: '6px',
                backgroundColor: eeTab === 'records' ? '#ffffff' : 'transparent',
                color: eeTab === 'records' ? '#d71920' : '#374151',
                fontWeight: eeTab === 'records' ? 600 : 500,
                fontSize: '14px',
                cursor: 'pointer',
                marginBottom: '-1px',
                transition: 'all 0.2s ease',
              }}
            >
              Vehicle records
            </button>
            <button
              onClick={() => setEeTab('access')}
              style={{
                padding: '10px 24px',
                border: eeTab === 'access' ? '1px solid #e5e7eb' : 'none',
                borderBottom: eeTab === 'access' ? '1px solid #ffffff' : 'none',
                borderTopLeftRadius: '6px',
                borderTopRightRadius: '6px',
                backgroundColor: eeTab === 'access' ? '#ffffff' : 'transparent',
                color: eeTab === 'access' ? '#d71920' : '#374151',
                fontWeight: eeTab === 'access' ? 600 : 500,
                fontSize: '14px',
                cursor: 'pointer',
                marginBottom: '-1px',
                transition: 'all 0.2s ease',
              }}
            >
              Access authentication
            </button>
          </div>

          {/* Tab Content: Access Authentication (matches user uploaded screenshot exactly) */}
          {eeTab === 'access' && (
            <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
              {/* Top Row: Photo + Benefits/Features */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                  gap: '48px',
                  alignItems: 'flex-start',
                  marginBottom: '56px',
                }}
              >
                {/* Top Left: Car ANPR Photo with Bounding Box and Open Barrier Arm */}
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
                    src="/images/parking_lots/offer_access_barrier.jpg"
                    alt="Access authentication ANPR barrier capture"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      cursor: 'zoom-in',
                    }}
                    onClick={() => setLightboxImg('/images/parking_lots/offer_access_barrier.jpg')}
                  />
                </div>

                {/* Top Right: Benefits and Features Text with Italic Headings */}
                <div style={{ paddingLeft: '8px' }}>
                  {/* Benefits */}
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

                  {/* Features */}
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

              {/* Bottom Row: Topology Diagram + Collapsible Product Accordion */}
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
                    alt="Entrance and Exit Access Authentication System Topology Diagram"
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
                          <Tv size={26} color="#0284c7" />
                        </div>
                        <div>
                          <div style={{ fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '3px' }}>
                            DS-TVL224-4-5Y
                          </div>
                          <div style={{ fontSize: '13px', color: '#6b7280' }}>
                            High Brightness Parking Entrance Dynamic Guidance LED Display
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
                          <Cpu size={26} color="#0284c7" />
                        </div>
                        <div>
                          <div style={{ fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '3px' }}>
                            Coloron Central Professional
                          </div>
                          <div style={{ fontSize: '13px', color: '#6b7280' }}>
                            Vehicle Access &amp; Parking Management Subsystem
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content: Vehicle Records */}
          {eeTab === 'records' && (
            <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
              {/* Top Row: Photo + Benefits/Features */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                  gap: '48px',
                  alignItems: 'flex-start',
                  marginBottom: '56px',
                }}
              >
                {/* Top Left: ANPR Camera Lane Capture Photo */}
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
                    src="/images/parking_lots/offer_vehicle_record_cam.jpg"
                    alt="Vehicle records ANPR camera in lane"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      cursor: 'zoom-in',
                    }}
                    onClick={() => setLightboxImg('/images/parking_lots/offer_vehicle_record_cam.jpg')}
                  />
                </div>

                {/* Top Right: Benefits and Features Text */}
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
                      'Improve traffic throughput with fast and reliable vehicle identification',
                      'Capture accurate plate, vehicle model, and color information day and night',
                      'Simplify vehicle monitoring with comprehensive database records',
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
                      'Deep learning vehicle license plate recognition exceeding 99.5% accuracy',
                      'Capture vehicle make, model, color, and heading direction in real time',
                      'Automatic plate matching against whitelist and blocklist databases',
                      'Real-time vehicle entry/exit snapshot and continuous HD video linkage',
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

              {/* Bottom Row: Topology Diagram + Collapsible Product Accordion */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                  gap: '48px',
                  alignItems: 'flex-start',
                }}
              >
                {/* Bottom Left: Vehicle Record Architecture Diagram */}
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
                    src="/images/parking_lots/offer_vehicle_record_diagram.jpg"
                    alt="Vehicle Record System Topology Architecture"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      cursor: 'zoom-in',
                    }}
                    onClick={() => setLightboxImg('/images/parking_lots/offer_vehicle_record_diagram.jpg')}
                  />
                </div>

                {/* Bottom Right: Product Accordion */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                          <Cpu size={26} color="#0284c7" />
                        </div>
                        <div>
                          <div style={{ fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '3px' }}>
                            Coloron Central Professional
                          </div>
                          <div style={{ fontSize: '13px', color: '#6b7280' }}>
                            Vehicle Access &amp; Parking Management Subsystem
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. INDOOR PARKING GUIDANCE SECTION */}
      <section
        id="indoor-guidance"
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
            Indoor parking guidance
          </h2>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
            Direct drivers quickly to vacant parking spots and assist them in locating their parked cars with smart bay cameras
            and wayfinding screens.
          </p>
        </div>

        {/* Challenges Subsection */}
        <div style={{ marginBottom: '48px' }}>
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
                  src="/images/parking_lots/challenge_indoor_guidance.jpg"
                  alt="Difficult finding available parking spaces"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                  Difficult finding available parking spaces
                </h4>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                  Drivers wander aimlessly through multi-level subterranean basements searching for vacant bays, resulting in high
                  fuel consumption, carbon monoxide buildup, and immense customer frustration.
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
                  src="/images/parking_lots/offer_guidance_display.jpg"
                  alt="Forget where vehicle is parked"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                  Forget where vehicle is parked
                </h4>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                  In massive malls with thousands of identical parking stalls, shoppers frequently forget their parking section or
                  floor, tying up mall security staff to help hunt down missing cars.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '36px',
            alignItems: 'center',
            backgroundColor: '#f8fafc',
            padding: '36px',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
          }}
        >
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0284c7', margin: '0 0 16px 0' }}>
              Guidance Benefits &amp; Technology
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
              {[
                'Multi-space bay detection: Dual-lens cameras detect up to 6 spaces simultaneously with built-in RGB indicator lights',
                'Color-coded bay indicators: Green (vacant), Red (occupied), Blue (handicapped/reserved), Yellow (EV charging)',
                'Electronic aisle signage: Directional dynamic arrows guide motorists at every intersection to rows with vacant stalls',
                '"Find My Car" kiosks: Shoppers input their license plate on lobby touchscreen kiosks to see exact parking slot & walking map',
              ].map((txt, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '14px',
                    color: '#334155',
                    marginBottom: '10px',
                    lineHeight: 1.5,
                  }}
                >
                  <CheckCircle2 size={16} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{txt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="/images/parking_lots/offer_guidance_display.jpg"
              alt="Parking space guidance system"
              style={{
                width: '100%',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              }}
            />
          </div>
        </div>
      </section>

      {/* 7. PARKING FEE RULES SECTION */}
      <section
        id="fee-rules"
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
            Parking fee rules
          </h2>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
            Establish customizable charging tiers, streamline cashless digital payment, and eliminate cashier revenue leakage.
          </p>
        </div>

        {/* Challenges Subsection */}
        <div style={{ marginBottom: '48px' }}>
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
                  src="/images/parking_lots/challenge_fee_rules.jpg"
                  alt="Rush hour processing efficiency"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                  Rush hour processing efficiency
                </h4>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                  Collecting paper bills and handing back cash coins at exit booths takes 30-45 seconds per car, stalling the
                  entire line when thousands leave concurrently after events.
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
                  src="/images/parking_lots/offer_fee_rules.jpg"
                  alt="Wrongful charges and attempted fraud"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                  Wrongful charges and attempted fraud
                </h4>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                  Manipulated timestamps on paper tickets and unauthorized cashier discounts cause considerable loss of parking
                  proceeds for commercial property managers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '36px',
            alignItems: 'center',
            backgroundColor: '#f8fafc',
            padding: '36px',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
          }}
        >
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0284c7', margin: '0 0 16px 0' }}>
              Fee Management Capabilities
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
              {[
                'Flexible fee rule engine: Configure hourly rates, free grace periods, weekend surcharges, and tenant passes',
                'Multiple payment avenues: QR code scanning on pillar posters, lobby self-service kiosks, or contactless tap-to-pay',
                'Automatic pre-payment validation: Drivers pay in the elevator lobby and exit freely within a 15-minute grace window',
                'Complete audit trail: Every rupee collected is cryptographically paired with license plate entry/exit snapshots',
              ].map((txt, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '14px',
                    color: '#334155',
                    marginBottom: '10px',
                    lineHeight: 1.5,
                  }}
                >
                  <CheckCircle2 size={16} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{txt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="/images/parking_lots/offer_fee_rules.jpg"
              alt="Cashless parking fee payment terminal"
              style={{
                width: '100%',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              }}
            />
          </div>
        </div>
      </section>

      {/* 8. OPERATION & MANAGEMENT SECTION */}
      <section
        id="operation-management"
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
            Operation &amp; management
          </h2>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
            Unified command software with real-time lane status, visual occupancy analytics, and cross-subsystem event linking.
          </p>
        </div>

        {/* Challenges Subsection */}
        <div style={{ marginBottom: '48px' }}>
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
                  src="/images/parking_lots/challenge_operation.jpg"
                  alt="Lack of video evidence for disputes"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                  Lack of video evidence for disputes
                </h4>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                  Vehicle scratches, hit-and-runs, and barrier contact allegations cannot be resolved without high-resolution video
                  linked directly to the entry gate passage record.
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
                  src="/images/parking_lots/offer_operation.jpg"
                  alt="Weak operation without statistics"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                  Weak operation without statistics
                </h4>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                  Property managers lack accurate data on peak parking hours, turnover rates, or revenue discrepancies, making it
                  impossible to optimize bay allocation or dynamic pricing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '36px',
            alignItems: 'center',
            backgroundColor: '#f8fafc',
            padding: '36px',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
          }}
        >
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0284c7', margin: '0 0 16px 0' }}>
              Central Platform Benefits
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
              {[
                'Single-pane-of-glass software: View real-time lane barrier status, live camera streams, and revenue logs',
                'Visual occupancy heatmaps: Monitor parking bay utilization across all basement levels in real time',
                'Automated business reports: Generate daily, monthly, and annual financial statements with one click',
                'Remote lane override: Control barrier arms, intercom audio, and manual license approvals from the central SOC',
              ].map((txt, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '14px',
                    color: '#334155',
                    marginBottom: '10px',
                    lineHeight: 1.5,
                  }}
                >
                  <CheckCircle2 size={16} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{txt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="/images/parking_lots/offer_operation.jpg"
              alt="Centralized parking management software dashboard"
              style={{
                width: '100%',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              }}
            />
          </div>
        </div>
      </section>

      {/* 9. SUCCESS STORIES SECTION */}
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
            Explore how modern operators transform customer satisfaction and revenue collection with Coloron smart parking solutions.
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
          <div style={{ minHeight: '300px', backgroundColor: '#0f172a', position: 'relative' }}>
            <img
              src="/images/parking_lots/success_story_philippine.jpg"
              alt="Philippine parking operator case study"
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
                backgroundColor: '#e0f2fe',
                color: '#0369a1',
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
              How a Philippine parking operator boosts revenue &amp; client retention
            </h3>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.65,
                color: '#4b5563',
                margin: '0 0 24px 0',
              }}
            >
              By installing Coloron ANPR cameras, speed barrier gates, and automated fee calculators, the operator reduced peak
              exit queues by 75% and achieved a 25% revenue surge through transparent digital logging.
            </p>
            <button
              onClick={() => setShowContactModal(true)}
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#0284c7',
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

      {/* 10. DOWNLOAD SECTION */}
      <section
        id="download"
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
            Download
          </h2>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
            Get comprehensive architectural diagrams, device specifications, and parking software brochures.
          </p>
        </div>

        {/* Download Card */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                backgroundColor: '#eff6ff',
                color: '#0284c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <FileText size={24} />
            </div>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700, color: '#111827' }}>
                Coloron Parking Lot Solution Infographic
              </h4>
              <p style={{ margin: 0, fontSize: '13px', color: '#6b7280' }}>
                PDF | 2.8 MB | High Resolution System Diagram
              </p>
            </div>
          </div>

          <a
            href="/images/parking_lots/infographic_preview.png"
            download="Coloron_Parking_Lot_Solution_Infographic.png"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '14px',
              transition: 'background-color 0.2s ease',
              flexShrink: 0,
            }}
          >
            <Download size={16} />
            <span>Download</span>
          </a>
        </div>
      </section>

      {/* 11. YOU MAY ALSO BE INTERESTED IN */}
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
          {/* Card 1: Entrance & Exit Management */}
          <Link
            to="/solutions/urban-roadways"
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
              src="/images/parking_lots/interest_entrance.jpg"
              alt="Entrance & Exit Management"
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
              <span style={{ color: '#38bdf8', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                Function Solution
              </span>
              <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, margin: 0 }}>
                Entrance &amp; Exit Management
              </h4>
            </div>
          </Link>

          {/* Card 2: AI Vehicle Identification */}
          <Link
            to="/technologies"
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
              src="/images/parking_lots/interest_vehicle_ai.jpg"
              alt="Vehicle Identification"
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
              <span style={{ color: '#38bdf8', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                Core Technology
              </span>
              <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, margin: 0 }}>
                AI Vehicle Identification
              </h4>
            </div>
          </Link>

          {/* Card 3: Coloron Central Professional */}
          <Link
            to="/products"
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
              src="/images/parking_lots/interest_hikcentral.jpg"
              alt="Coloron Central Professional"
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
              <span style={{ color: '#38bdf8', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                Central Software Platform
              </span>
              <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, margin: 0 }}>
                Coloron Central Professional
              </h4>
            </div>
          </Link>
        </div>
      </section>

      {/* 12. BOTTOM CTA SECTION */}
      <section
        style={{
          backgroundColor: '#0a192f',
          padding: '60px 32px',
          textAlign: 'center',
          color: '#ffffff',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>
            Ready to optimize your parking operations?
          </h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', marginBottom: '28px' }}>
            Get in touch with our smart parking design engineers to discuss your facility requirements, bay counts, and custom
            integrations.
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
              Get in Touch
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
              Find a Distributor
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
        defaultSubject="Smart Parking Lot Management Solution Inquiry"
      />
    </div>
  );
}
