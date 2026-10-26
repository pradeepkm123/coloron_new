import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Maximize2,
  ChevronDown,
  ChevronRight,
  X,
  Shield,
  Truck,
  Bus,
  AlertTriangle,
  Eye,
  CheckCircle,
  PhoneCall,
  Activity
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

export default function AdvancedDrivingAssistanceSolution() {
  const [activeNav, setActiveNav] = useState('what-we-offer');
  const [activeTab, setActiveTab] = useState('dsm'); // 'dsm' | 'adas'
  const [dsmVariant, setDsmVariant] = useState('dsm-only'); // 'dsm-only' | 'dsm-adas'
  const [adasVariant, setAdasVariant] = useState('all-three'); // 'all-three' | 'dsm-adas'
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [openAccordions, setOpenAccordions] = useState({
    'nvr': true,
    'dsm-cam': true,
    'adas-cam': true,
    'terminal': true,
    'bsd-cam': true,
  });

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['what-we-offer', 'recommended-solution', 'related-links'];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
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
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveNav(id);
    }
  };

  const handleSelectTab = (tab) => {
    setActiveTab(tab);
    scrollToSection('recommended-solution');
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', color: '#1d1d1f' }}>
      
      {/* 1. HERO BANNER - 750px Height Exactly */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '750px',
          minHeight: '750px',
          backgroundImage: "url('/images/adas/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Sapphire / Deep Royal Blue Curved Gradient Overlay matching screenshot */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '65%',
            background: 'radial-gradient(ellipse at 15% 45%, rgba(26, 75, 175, 0.88) 0%, rgba(30, 64, 175, 0.65) 45%, rgba(15, 23, 42, 0.35) 75%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        {/* Soft dark vignette to enhance readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.3) 45%, rgba(0, 0, 0, 0.05) 100%)',
            zIndex: 1,
          }}
        />

        <div
          style={{
            maxWidth: '1440px',
            width: '100%',
            margin: '0 auto',
            padding: '48px 32px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Breadcrumbs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '28px',
            }}
          >
            <Link to="/" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Home size={15} />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link to="/solutions" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>
              Solutions
            </Link>
            <span>/</span>
            <Link to="/solutions#functions" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>
              Solutions by Function
            </Link>
            <span>/</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Advanced Driving Assistance</span>
          </div>

          {/* Eyebrow badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px',
            }}
          >
            <svg width="22" height="14" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8C5 2 9 14 13 8C17 2 21 14 23 8" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <span
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '0.01em',
              }}
            >
              Solutions by Function
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              margin: '0 0 24px 0',
              maxWidth: '850px',
              letterSpacing: '-0.02em',
              textShadow: '0 3px 12px rgba(0, 0, 0, 0.35)',
            }}
          >
            Advanced Driving Assistance
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.92)',
              maxWidth: '680px',
              lineHeight: 1.6,
              margin: '0 0 36px 0',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            Paving the way for safer, more efficient transport with video analytics, driver fatigue monitoring, lane departure alerts, and blind spot detection.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowSalesModal(true)}
              style={{
                backgroundColor: '#d7150e',
                color: '#ffffff',
                border: 'none',
                borderRadius: '9999px',
                padding: '14px 36px',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(215, 21, 14, 0.45)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b91c1c';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d7150e';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact Sales
            </button>
            <button
              onClick={() => scrollToSection('recommended-solution')}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                border: '1.5px solid rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(8px)',
                borderRadius: '9999px',
                padding: '14px 36px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.borderColor = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.7)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Explore Solution
            </button>
          </div>
        </div>
      </section>

      {/* 2. STICKY SUBNAV BAR */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 90,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '48px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          {[
            { id: 'what-we-offer', label: 'What we offer' },
            { id: 'recommended-solution', label: 'Recommended solution' },
            { id: 'related-links', label: 'Related links' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                padding: '18px 4px',
                fontSize: '0.98rem',
                fontWeight: activeNav === item.id ? 700 : 500,
                color: activeNav === item.id ? '#d7150e' : '#4b5563',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.2s ease',
              }}
            >
              {item.label}
              {activeNav === item.id && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    backgroundColor: '#d7150e',
                    borderRadius: '2px 2px 0 0',
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* 3. SECTION: WHAT WE OFFER */}
      <section
        id="what-we-offer"
        style={{
          padding: '88px 32px 72px',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '1020px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            What we offer
          </h2>
          <p
            style={{
              fontSize: '1.08rem',
              lineHeight: 1.75,
              color: '#4b5563',
              marginBottom: '56px',
            }}
          >
            Long-hour driving, harsh weather, and additional hazards are posing burdens on driving. At-risk driving is dangerous for merchandise, drivers, and road safety. Coloron combines video analysis and deep learning algorithm to enable intelligent driving and environmental perception, including Forward Collision Warning (FCW), Lane Departure Warning (LDW), Headway Monitoring Warning (HMW), Pedestrian Collision Warning (PCW), Blind Spot Detection (BSD), and Driver Status Monitoring (DSM). With its advanced features and intelligent capabilities, advanced driving assistance solution is paving the way for safer, more efficient, and more enjoyable driving experiences.
          </p>

          {/* 2 Feature Badges Matching Screenshot */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '64px',
              flexWrap: 'wrap',
            }}
          >
            {/* Feature 1: DSM */}
            <div
              onClick={() => handleSelectTab('dsm')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                cursor: 'pointer',
                transition: 'transform 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: activeTab === 'dsm' ? '3px solid #d7150e' : '2px solid #e5e7eb',
                  boxShadow: activeTab === 'dsm' ? '0 8px 24px rgba(215, 21, 14, 0.2)' : '0 4px 14px rgba(0,0,0,0.06)',
                  padding: '4px',
                  backgroundColor: '#ffffff',
                }}
              >
                <img
                  src="/images/adas/icon_dsm.jpg"
                  alt="Driver Status Monitoring"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }}
                />
              </div>
              <span
                style={{
                  fontSize: '1.02rem',
                  fontWeight: 600,
                  color: activeTab === 'dsm' ? '#d7150e' : '#1d1d1f',
                  maxWidth: '220px',
                  lineHeight: 1.4,
                }}
              >
                Drivers navigate prudently with optimal awareness
              </span>
            </div>

            {/* Feature 2: ADAS */}
            <div
              onClick={() => handleSelectTab('adas')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                cursor: 'pointer',
                transition: 'transform 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: activeTab === 'adas' ? '3px solid #d7150e' : '2px solid #e5e7eb',
                  boxShadow: activeTab === 'adas' ? '0 8px 24px rgba(215, 21, 14, 0.2)' : '0 4px 14px rgba(0,0,0,0.06)',
                  padding: '4px',
                  backgroundColor: '#ffffff',
                }}
              >
                <img
                  src="/images/adas/icon_adas.jpg"
                  alt="Intelligent driving assistance"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }}
                />
              </div>
              <span
                style={{
                  fontSize: '1.02rem',
                  fontWeight: 600,
                  color: activeTab === 'adas' ? '#d7150e' : '#1d1d1f',
                  maxWidth: '220px',
                  lineHeight: 1.4,
                }}
              >
                Intelligent driving assistance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: RECOMMENDED SOLUTION */}
      <section
        id="recommended-solution"
        style={{
          padding: '88px 32px',
          backgroundColor: '#f8f9fa',
          borderTop: '1px solid #f1f5f9',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              textAlign: 'center',
              marginBottom: '36px',
              letterSpacing: '-0.02em',
            }}
          >
            Recommended solution
          </h2>

          {/* Tab Switcher */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '48px',
            }}
          >
            <button
              onClick={() => setActiveTab('dsm')}
              style={{
                backgroundColor: activeTab === 'dsm' ? '#d7150e' : '#ffffff',
                color: activeTab === 'dsm' ? '#ffffff' : '#4b5563',
                border: activeTab === 'dsm' ? '1px solid #d7150e' : '1px solid #d1d5db',
                padding: '10px 28px',
                borderRadius: '4px',
                fontSize: '0.98rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Driver Status Monitoring
            </button>
            <button
              onClick={() => setActiveTab('adas')}
              style={{
                backgroundColor: activeTab === 'adas' ? '#d7150e' : '#ffffff',
                color: activeTab === 'adas' ? '#ffffff' : '#4b5563',
                border: activeTab === 'adas' ? '1px solid #d7150e' : '1px solid #d1d5db',
                padding: '10px 28px',
                borderRadius: '4px',
                fontSize: '0.98rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Intelligent driving assistance
            </button>
          </div>

          {/* TAB 1: DRIVER STATUS MONITORING */}
          {activeTab === 'dsm' && (
            <div>
              {/* Subtitle & Bullets */}
              <div style={{ maxWidth: '1080px', margin: '0 auto 40px' }}>
                <h3
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    marginBottom: '18px',
                  }}
                >
                  Enforce safe and prudent driving with optimal awareness
                </h3>
                <ul
                  style={{
                    fontSize: '1.02rem',
                    lineHeight: 1.8,
                    color: '#4b5563',
                    paddingLeft: '22px',
                    margin: 0,
                  }}
                >
                  <li style={{ marginBottom: '10px' }}>
                    Intelligently detect potential dangers, including fatigued driving, yawning, smoking, and other unsafe driving practices.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    Remind drivers of standard driving practices. The system supports analysis of driving status and prompts alerts to the command center when an anomaly is detected. The command center then communicates with drivers via intercom.
                  </li>
                </ul>
              </div>

              {/* Scenario Card: Transit Bus with Blue Pill Badge matching screenshot */}
              <div
                style={{
                  maxWidth: '1080px',
                  margin: '0 auto 48px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
                }}
              >
                <div style={{ height: '360px', width: '100%', position: 'relative' }}>
                  <img
                    src="/images/adas/scenario_transit_bus.jpg"
                    alt="Transit Bus"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  {/* Blue Pill Badge in bottom-left matching screenshot */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '24px',
                      left: '24px',
                      backgroundColor: '#1e40af',
                      color: '#ffffff',
                      padding: '10px 24px',
                      borderRadius: '4px',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      boxShadow: '0 4px 16px rgba(30, 64, 175, 0.4)',
                    }}
                  >
                    <Bus size={22} />
                    <span>Transit Bus</span>
                  </div>
                </div>
              </div>

              {/* Architecture Diagram (Left) & Product Accordions (Right) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
                  gap: '32px',
                  alignItems: 'start',
                  backgroundColor: '#ffffff',
                  padding: '36px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  maxWidth: '1280px',
                  margin: '0 auto',
                }}
              >
                {/* Left: Topology Diagram with Variant Switcher */}
                <div>
                  {/* Variant Switcher */}
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                    <button
                      onClick={() => setDsmVariant('dsm-only')}
                      style={{
                        padding: '6px 16px',
                        fontSize: '0.86rem',
                        fontWeight: 600,
                        borderRadius: '20px',
                        border: dsmVariant === 'dsm-only' ? '1px solid #d7150e' : '1px solid #e5e7eb',
                        backgroundColor: dsmVariant === 'dsm-only' ? '#fee2e2' : '#f9fafb',
                        color: dsmVariant === 'dsm-only' ? '#d7150e' : '#4b5563',
                        cursor: 'pointer',
                      }}
                    >
                      Solution with DSM Cameras
                    </button>
                    <button
                      onClick={() => setDsmVariant('dsm-adas')}
                      style={{
                        padding: '6px 16px',
                        fontSize: '0.86rem',
                        fontWeight: 600,
                        borderRadius: '20px',
                        border: dsmVariant === 'dsm-adas' ? '1px solid #d7150e' : '1px solid #e5e7eb',
                        backgroundColor: dsmVariant === 'dsm-adas' ? '#fee2e2' : '#f9fafb',
                        color: dsmVariant === 'dsm-adas' ? '#d7150e' : '#4b5563',
                        cursor: 'pointer',
                      }}
                    >
                      Solution with DSM and ADAS Cameras
                    </button>
                  </div>

                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: '1px solid #e5e7eb',
                      backgroundColor: '#f3f4f6',
                      cursor: 'pointer',
                    }}
                    onClick={() =>
                      setLightboxImg(
                        dsmVariant === 'dsm-only'
                          ? '/images/adas/diagram_dsm.jpg'
                          : '/images/adas/diagram_dsm_adas.jpg'
                      )
                    }
                  >
                    <img
                      src={
                        dsmVariant === 'dsm-only'
                          ? '/images/adas/diagram_dsm.jpg'
                          : '/images/adas/diagram_dsm_adas.jpg'
                      }
                      alt="DSM Solution Topology"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        color: '#ffffff',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '0.82rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <Maximize2 size={13} />
                      <span>Click to enlarge</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '12px', textAlign: 'center' }}>
                    Topology Architecture: Mobile NVR + Driver Status Monitoring Camera + Audio Alarm & Central Dispatch
                  </p>
                </div>

                {/* Right: Products Accordion */}
                <div>
                  <h4
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#1d1d1f',
                      marginBottom: '20px',
                      paddingBottom: '12px',
                      borderBottom: '2px solid #e5e7eb',
                    }}
                  >
                    Solution with DSM Cameras
                  </h4>

                  {/* Accordion 1: Mobile NVR */}
                  <div style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <button
                      onClick={() => toggleAccordion('nvr')}
                      style={{
                        width: '100%',
                        padding: '16px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: '#1d1d1f',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span>Mobile NVR</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: openAccordions['nvr'] ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>
                    {openAccordions['nvr'] && (
                      <div style={{ paddingBottom: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            padding: '12px 16px',
                            backgroundColor: '#f9fafb',
                            borderRadius: '8px',
                            border: '1px solid #f3f4f6',
                          }}
                        >
                          <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                              src="/images/adas/prod_mn7083.png"
                              alt="AE-MN7083(RJ45)"
                              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            />
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#111827' }}>
                              AE-MN7083(RJ45)
                            </div>
                            <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                              Mobile NVR with high-vibration resistance, GPS positioning, 4G wireless transmission, and AI analytics
                            </div>
                          </div>
                        </div>

                        {dsmVariant === 'dsm-adas' && (
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '16px',
                              padding: '12px 16px',
                              backgroundColor: '#f9fafb',
                              borderRadius: '8px',
                              border: '1px solid #f3f4f6',
                            }}
                          >
                            <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <img
                                src="/images/adas/prod_mh0408.png"
                                alt="AE-MH0408(RJ45)"
                                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                              />
                            </div>
                            <div>
                              <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#111827' }}>
                                AE-MH0408(RJ45)
                              </div>
                              <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                                12-ch, H.264/H.265, 2 x HDD/SSD Mobile HDVR
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Accordion 2: DSM Camera */}
                  <div style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <button
                      onClick={() => toggleAccordion('dsm-cam')}
                      style={{
                        width: '100%',
                        padding: '16px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: '#1d1d1f',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span>DSM Camera</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: openAccordions['dsm-cam'] ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>
                    {openAccordions['dsm-cam'] && (
                      <div style={{ paddingBottom: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            padding: '12px 16px',
                            backgroundColor: '#f9fafb',
                            borderRadius: '8px',
                            border: '1px solid #f3f4f6',
                          }}
                        >
                          <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                              src="/images/adas/prod_vc1b1i.png"
                              alt="AE-VC1B1I-ISF"
                              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            />
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#111827' }}>
                              AE-VC1B1I-ISF
                            </div>
                            <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                              DSM camera with specialized 940 nm non-glare infrared LEDs and driver eye/yawn tracking
                            </div>
                          </div>
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            padding: '12px 16px',
                            backgroundColor: '#f9fafb',
                            borderRadius: '8px',
                            border: '1px solid #f3f4f6',
                          }}
                        >
                          <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                              src="/images/adas/prod_vc154t.png"
                              alt="AE-VC154T-IT"
                              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            />
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#111827' }}>
                              AE-VC154T-IT
                            </div>
                            <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                              720P 1/2.8” CMOS infrared array DSM camera
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Accordion 3: ADAS Camera */}
                  <div style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <button
                      onClick={() => toggleAccordion('adas-cam')}
                      style={{
                        width: '100%',
                        padding: '16px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: '#1d1d1f',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span>ADAS Camera</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: openAccordions['adas-cam'] ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>
                    {openAccordions['adas-cam'] && (
                      <div style={{ paddingBottom: '18px', color: '#4b5563', fontSize: '0.94rem', lineHeight: 1.6 }}>
                        <div style={{ padding: '12px 16px', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
                          <div style={{ fontWeight: 600, color: '#111827', marginBottom: '4px' }}>Forward-facing ADAS Sensor</div>
                          <div>Real-time Forward Collision Warning (FCW), Lane Departure Warning (LDW), and Pedestrian Collision Warning (PCW) forward optical sensor.</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INTELLIGENT DRIVING ASSISTANCE */}
          {activeTab === 'adas' && (
            <div>
              {/* Subtitle & Bullets */}
              <div style={{ maxWidth: '1080px', margin: '0 auto 40px' }}>
                <h3
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    marginBottom: '18px',
                  }}
                >
                  Add an extra level of intelligence to safe transportation
                </h3>
                <ul
                  style={{
                    fontSize: '1.02rem',
                    lineHeight: 1.8,
                    color: '#4b5563',
                    paddingLeft: '22px',
                    margin: 0,
                  }}
                >
                  <li style={{ marginBottom: '10px' }}>
                    The advanced driving assistance system integrates FCW, LDW, HMW, PCW, BSD, and DSM functions through AI deep-learning video analysis.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    Provides a comprehensive solution to guarantee safe transport, including video security, intelligent driving assistance, merchandise management, and real-time command center telemetry.
                  </li>
                </ul>
              </div>

              {/* Scenario Card: Transit Bus */}
              <div
                style={{
                  maxWidth: '1080px',
                  margin: '0 auto 48px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
                }}
              >
                <div style={{ height: '360px', width: '100%', position: 'relative' }}>
                  <img
                    src="/images/adas/scenario_transit_bus.jpg"
                    alt="Transit Bus"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '24px',
                      left: '24px',
                      backgroundColor: '#1e40af',
                      color: '#ffffff',
                      padding: '10px 24px',
                      borderRadius: '4px',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      boxShadow: '0 4px 16px rgba(30, 64, 175, 0.4)',
                    }}
                  >
                    <Bus size={22} />
                    <span>Transit Bus</span>
                  </div>
                </div>
              </div>

              {/* Architecture Diagram (Left) & Product Accordions (Right) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
                  gap: '32px',
                  alignItems: 'start',
                  backgroundColor: '#ffffff',
                  padding: '36px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  maxWidth: '1280px',
                  margin: '0 auto',
                }}
              >
                {/* Left: Diagram */}
                <div>
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: '1px solid #e5e7eb',
                      backgroundColor: '#f3f4f6',
                      cursor: 'pointer',
                    }}
                    onClick={() => setLightboxImg('/images/adas/diagram_adas_dsm_bsd.jpg')}
                  >
                    <img
                      src="/images/adas/diagram_adas_dsm_bsd.jpg"
                      alt="ADAS & DSM & BSD Topology"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        color: '#ffffff',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '0.82rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <Maximize2 size={13} />
                      <span>Click to enlarge</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '12px', textAlign: 'center' }}>
                    Full Ecosystem: Intelligent Terminal + ADAS + DSM + Blind Spot Detection (BSD)
                  </p>
                </div>

                {/* Right: Product Accordions */}
                <div>
                  <h4
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#1d1d1f',
                      marginBottom: '20px',
                      paddingBottom: '12px',
                      borderBottom: '2px solid #e5e7eb',
                    }}
                  >
                    Solution with ADAS & DSM & BSD Systems
                  </h4>

                  {/* Accordion 1: Intelligent Vehicle Terminal */}
                  <div style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <button
                      onClick={() => toggleAccordion('terminal')}
                      style={{
                        width: '100%',
                        padding: '16px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: '#1d1d1f',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span>Intelligent Vehicle Terminal / DVR</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: openAccordions['terminal'] ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>
                    {openAccordions['terminal'] && (
                      <div style={{ paddingBottom: '18px' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            padding: '12px 16px',
                            backgroundColor: '#f9fafb',
                            borderRadius: '8px',
                            border: '1px solid #f3f4f6',
                          }}
                        >
                          <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                              src="/images/adas/prod_ac1130.png"
                              alt="AE-AC1130-A"
                              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            />
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#111827' }}>
                              AE-AC1130-A
                            </div>
                            <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                              Intelligent Vehicle Terminal with integrated AI multi-algorithm chip and high reliability power design
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Accordion 2: DSM Camera */}
                  <div style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <button
                      onClick={() => toggleAccordion('dsm-cam')}
                      style={{
                        width: '100%',
                        padding: '16px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: '#1d1d1f',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span>DSM Camera</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: openAccordions['dsm-cam'] ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>
                    {openAccordions['dsm-cam'] && (
                      <div style={{ paddingBottom: '18px' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            padding: '12px 16px',
                            backgroundColor: '#f9fafb',
                            borderRadius: '8px',
                            border: '1px solid #f3f4f6',
                          }}
                        >
                          <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                              src="/images/adas/prod_vc154t.png"
                              alt="AE-VC154T-IT"
                              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            />
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#111827' }}>
                              AE-VC154T-IT
                            </div>
                            <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                              720P 1/2.8” CMOS infrared array DSM camera
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Accordion 3: BSD Camera */}
                  <div style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <button
                      onClick={() => toggleAccordion('bsd-cam')}
                      style={{
                        width: '100%',
                        padding: '16px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: '#1d1d1f',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span>BSD Camera (Blind Spot Detection)</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: openAccordions['bsd-cam'] ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>
                    {openAccordions['bsd-cam'] && (
                      <div style={{ paddingBottom: '18px' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            padding: '12px 16px',
                            backgroundColor: '#f9fafb',
                            borderRadius: '8px',
                            border: '1px solid #f3f4f6',
                          }}
                        >
                          <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                              src="/images/adas/prod_vc136t.png"
                              alt="AE-VC136T"
                              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            />
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#111827' }}>
                              AE-VC136T
                            </div>
                            <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                              720P 1/2.9” CMOS low-light color camera with IP68 weatherproof rating for vehicle exterior blind spots
                            </div>
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

      {/* 5. SECTION: RELATED LINKS (3 CARDS MATCHING SCREENSHOT) */}
      <section
        id="related-links"
        style={{
          padding: '88px 32px',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            textAlign: 'center',
            marginBottom: '48px',
            letterSpacing: '-0.02em',
          }}
        >
          Related links
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            maxWidth: '1240px',
            margin: '0 auto',
          }}
        >
          {[
            {
              category: 'Solutions by industry',
              title: 'Public Transport',
              desc: 'Coloron empowers municipal transit networks with comprehensive security, automated fleet safety, and passenger protection.',
              image: '/images/adas/rel_public_transport.png',
              link: '/solutions/transit-bus-onboard',
            },
            {
              category: 'Solutions by scenario',
              title: 'Transit Bus On-board',
              desc: 'High-definition onboard mobile recording, wireless telemetry, emergency response, and passenger count analytics.',
              image: '/images/adas/rel_transit_bus.png',
              link: '/solutions/transit-bus-onboard',
            },
            {
              category: 'Solutions by scenario',
              title: 'Bus Stop',
              desc: 'Intelligent bus shelter passenger information displays, panoramic surveillance, and passenger crowd density management.',
              image: '/images/adas/rel_bus_stop.jpg',
              link: '/solutions/bus-stop',
            },
          ].map((card, idx) => (
            <Link
              key={idx}
              to={card.link}
              style={{
                position: 'relative',
                height: '340px',
                borderRadius: '8px',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'block',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              {/* Dark Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.55) 45%, rgba(0, 0, 0, 0.1) 85%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '28px 24px',
                }}
              >
                <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.75)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                  {card.category}
                </div>
                <h3
                  style={{
                    color: '#ffffff',
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    margin: '0 0 10px 0',
                    lineHeight: 1.25,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    margin: 0,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. SECTION: READY TO DISCUSS YOUR NEEDS? (MATCHING BOTTOM CTA & ARTWORK) */}
      <section
        style={{
          backgroundColor: '#ffffff',
          borderTop: '1px solid #e5e7eb',
          padding: '88px 32px',
        }}
      >
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '48px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Text & CTA Buttons */}
          <div style={{ flex: '1 1 480px' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '28px',
                letterSpacing: '-0.02em',
              }}
            >
              Ready to discuss your needs?
            </h2>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: '#d7150e',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '12px 32px',
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(215, 21, 14, 0.25)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b91c1c')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d7150e')}
              >
                Contact Us
              </button>
              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: '#d7150e',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '12px 32px',
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(215, 21, 14, 0.25)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b91c1c')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d7150e')}
              >
                Contact Specialists
              </button>
            </div>
          </div>

          {/* Right Vector Illustration Graphic matching Hikvision's artwork */}
          <div
            style={{
              flex: '0 1 440px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <svg width="400" height="280" viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="180" y="246" width="200" height="4" rx="2" fill="#cbd5e1" />
              <rect x="230" y="172" width="130" height="6" rx="2" fill="#1e293b" />
              <rect x="245" y="178" width="6" height="68" fill="#1e293b" />
              <rect x="345" y="178" width="6" height="68" fill="#1e293b" />
              <rect x="245" y="220" width="106" height="4" fill="#334155" />

              <rect x="272" y="152" width="38" height="20" rx="2" fill="#1e293b" />
              <rect x="275" y="155" width="32" height="15" rx="1" fill="#38bdf8" />
              <polygon points="264,172 318,172 312,168 270,168" fill="#64748b" />

              <circle cx="260" cy="116" r="14" fill="#fed7aa" />
              <path d="M250 110 Q260 98 272 108 Q274 116 270 120 Q262 110 252 114 Z" fill="#1e293b" />
              
              <path d="M256 102 C265 102 272 108 272 116" stroke="#d7150e" strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="272" cy="116" r="5" fill="#d7150e" />
              <path d="M272 118 L264 126" stroke="#d7150e" strokeWidth="2" strokeLinecap="round" />

              <path d="M250 130 C242 142 242 165 242 185 L278 185 C278 165 274 142 268 130 Z" fill="#1e293b" />
              <path d="M260 130 L260 142" stroke="#ffffff" strokeWidth="2" />
              <path d="M256 142 Q270 156 280 166" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
              <path d="M246 145 Q262 160 274 168" stroke="#334155" strokeWidth="5" strokeLinecap="round" />

              <rect x="232" y="148" width="6" height="42" rx="2" fill="#d7150e" />
              <rect x="230" y="186" width="32" height="6" rx="2" fill="#d7150e" />
              <rect x="242" y="192" width="6" height="48" fill="#475569" />
              <path d="M232 240 L258 240" stroke="#475569" strokeWidth="4" strokeLinecap="round" />

              <path d="M210 246 Q185 210 195 170 Q215 205 210 246 Z" fill="#059669" />
              <path d="M210 246 Q225 215 218 185 Q205 215 210 246 Z" fill="#10b981" />
              <path d="M205 246 Q165 230 180 205 Q200 225 205 246 Z" fill="#047857" />

              <path d="M375 246 Q395 215 385 185 Q370 215 375 246 Z" fill="#10b981" />
              <path d="M370 246 Q360 225 362 205 Q375 225 370 246 Z" fill="#059669" />

              <g transform="translate(195, 120)">
                <circle cx="16" cy="16" r="14" stroke="#475569" strokeWidth="4" strokeDasharray="5 3" fill="none" />
                <circle cx="16" cy="16" r="5" fill="#475569" />
              </g>
              <g transform="translate(216, 96)">
                <circle cx="12" cy="12" r="10" stroke="#64748b" strokeWidth="3" strokeDasharray="4 2" fill="none" />
                <circle cx="12" cy="12" r="3.5" fill="#64748b" />
              </g>

              <circle cx="230" cy="74" r="14" fill="#334155" />
              <path d="M230 65 L230 74 L237 74" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

              <rect x="306" y="70" width="36" height="24" rx="4" fill="#334155" />
              <polygon points="320,94 326,94 322,99" fill="#334155" />
              <path d="M312 76 L324 84 L336 76" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '24px',
          }}
          onClick={() => setLightboxImg(null)}
        >
          <div
            style={{ position: 'relative', maxWidth: '94vw', maxHeight: '92vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: 'absolute',
                top: '-44px',
                right: '0',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>
            <img
              src={lightboxImg}
              alt="Preview"
              style={{
                maxWidth: '94vw',
                maxHeight: '88vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 12px 48px rgba(0,0,0,0.5)',
              }}
            />
          </div>
        </div>
      )}

      {/* SALES CONTACT MODAL */}
      <ContactSalesModal
        isOpen={showSalesModal}
        onClose={() => setShowSalesModal(false)}
        defaultSubject="Inquiry: Advanced Driving Assistance Solution"
      />

    </div>
  );
}
