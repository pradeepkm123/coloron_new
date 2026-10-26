import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Download,
  ChevronRight,
  ChevronDown,
  Home,
  Monitor,
  Camera,
  Layers,
  ArrowRight,
  Shield,
  Eye,
  CheckCircle,
  ExternalLink,
  X,
  Maximize2,
  Calendar,
  Tag
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

export default function IntelligentInspectionSolution() {
  const [activeNav, setActiveNav] = useState('what-we-offer');
  const [activeTab, setActiveTab] = useState('remote'); // 'remote' | 'ai'
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [openAccordions, setOpenAccordions] = useState({
    'vms': true,
    'ptz': true,
    'explosion': true,
    'ai-nvr': true,
    'ai-thermal': true,
    'ai-camera': true,
  });

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['what-we-offer', 'recommended-solution', 'success-stories', 'related-resources', 'related-links'];
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
          backgroundImage: "url('/images/intelligent-inspection/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Amber / Orange Curved Gradient Overlay matching screenshot */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '65%',
            background: 'radial-gradient(ellipse at 15% 45%, rgba(217, 119, 6, 0.72) 0%, rgba(180, 83, 9, 0.45) 45%, rgba(0, 0, 0, 0.25) 75%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        {/* Soft dark vignette to enhance readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.25) 45%, rgba(0, 0, 0, 0.05) 100%)',
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
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Intelligent Inspection</span>
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
            {/* Wave / curve decorative icon */}
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
              fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              margin: '0 0 24px 0',
              maxWidth: '850px',
              letterSpacing: '-0.02em',
              textShadow: '0 3px 12px rgba(0, 0, 0, 0.35)',
            }}
          >
            Intelligent Inspection
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
            Traceable, regulated, and automated inspection processes powered by high-definition video imaging, radiometric thermal inspection, and AI analytics.
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
            gap: '36px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          {[
            { id: 'what-we-offer', label: 'What we offer' },
            { id: 'recommended-solution', label: 'Recommended solution' },
            { id: 'success-stories', label: 'Success stories' },
            { id: 'related-resources', label: 'Related Resources' },
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
        <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
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
            At industrial parks, security and maintenance personnel regularly complete periodic checks in critical areas, on equipment, and on materials to prevent safety hazards. Coloron’s Intelligent Inspection Solution uses the latest video technology, thermal-imaging technology and AI-powered products for a state-of-the-art traceable, regulated, efficient, and fully-analyzed inspection process, thus guaranteeing safe and efficient operations.
          </p>

          {/* 2 Feature Badges / Buttons Matching Screenshot */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '64px',
              flexWrap: 'wrap',
            }}
          >
            {/* Feature 1: Remote Inspection */}
            <div
              onClick={() => handleSelectTab('remote')}
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
                  border: activeTab === 'remote' ? '3px solid #d7150e' : '2px solid #e5e7eb',
                  boxShadow: activeTab === 'remote' ? '0 8px 24px rgba(215, 21, 14, 0.2)' : '0 4px 14px rgba(0,0,0,0.06)',
                  padding: '4px',
                  backgroundColor: '#ffffff',
                }}
              >
                <img
                  src="/images/intelligent-inspection/icon_remote_inspection.jpg"
                  alt="Remote Inspection"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }}
                />
              </div>
              <span
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: activeTab === 'remote' ? '#d7150e' : '#1d1d1f',
                }}
              >
                Remote Inspection
              </span>
            </div>

            {/* Feature 2: AI Inspection */}
            <div
              onClick={() => handleSelectTab('ai')}
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
                  border: activeTab === 'ai' ? '3px solid #d7150e' : '2px solid #e5e7eb',
                  boxShadow: activeTab === 'ai' ? '0 8px 24px rgba(215, 21, 14, 0.2)' : '0 4px 14px rgba(0,0,0,0.06)',
                  padding: '4px',
                  backgroundColor: '#ffffff',
                }}
              >
                <img
                  src="/images/intelligent-inspection/icon_ai_inspection.jpg"
                  alt="AI Inspection"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }}
                />
              </div>
              <span
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: activeTab === 'ai' ? '#d7150e' : '#1d1d1f',
                }}
              >
                AI Inspection
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
              onClick={() => setActiveTab('remote')}
              style={{
                backgroundColor: activeTab === 'remote' ? '#d7150e' : '#ffffff',
                color: activeTab === 'remote' ? '#ffffff' : '#4b5563',
                border: activeTab === 'remote' ? '1px solid #d7150e' : '1px solid #d1d5db',
                padding: '10px 28px',
                borderRadius: '4px',
                fontSize: '0.98rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Remote Inspection
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              style={{
                backgroundColor: activeTab === 'ai' ? '#d7150e' : '#ffffff',
                color: activeTab === 'ai' ? '#ffffff' : '#4b5563',
                border: activeTab === 'ai' ? '1px solid #d7150e' : '1px solid #d1d5db',
                padding: '10px 28px',
                borderRadius: '4px',
                fontSize: '0.98rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              AI Inspection
            </button>
          </div>

          {/* TAB 1: REMOTE INSPECTION */}
          {activeTab === 'remote' && (
            <div>
              {/* Subtitle & Bullets */}
              <div style={{ maxWidth: '1080px', margin: '0 auto 48px' }}>
                <h3
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    marginBottom: '18px',
                  }}
                >
                  Safe and efficient inspections based on video imaging
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
                    Integrated central management enables online planning, inspection, and real-time response, standardizing workflows for efficient operation.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    Security managers or personnel can remotely check all sites with video clips or pictures from high-definition cameras, significantly preventing unnecessary risks.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    Detailed inspection processes and results are reported for each item on the Coloron central platform, with statistics and charts on issue rates, coverage, rectification, and more, helping managers or other staff to trace back to problems and assist in decision-making.
                  </li>
                </ul>
              </div>

              {/* 2 Scenario Cards: Industrial Parks & Electrical Substations */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                  gap: '24px',
                  maxWidth: '1080px',
                  margin: '0 auto 64px',
                }}
              >
                {/* Scenario 1: Industrial Parks */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <div style={{ height: '260px', overflow: 'hidden' }}>
                    <img
                      src="/images/intelligent-inspection/scenario_industrial_parks.jpg"
                      alt="Industrial Parks"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <h4 style={{ fontSize: '1.18rem', fontWeight: 700, margin: 0, color: '#1d1d1f' }}>
                      Industrial Parks
                    </h4>
                  </div>
                </div>

                {/* Scenario 2: Electrical Substations */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <div style={{ height: '260px', overflow: 'hidden' }}>
                    <img
                      src="/images/intelligent-inspection/scenario_substations.jpg"
                      alt="Electrical Substations"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <h4 style={{ fontSize: '1.18rem', fontWeight: 700, margin: 0, color: '#1d1d1f' }}>
                      Electrical Substations
                    </h4>
                  </div>
                </div>
              </div>

              {/* Topology Diagram (Left) & Products Category Accordions (Right) */}
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
                {/* Left: Topology Diagram */}
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
                    onClick={() => setLightboxImg('/images/intelligent-inspection/diagram_remote_inspection.jpg')}
                  >
                    <img
                      src="/images/intelligent-inspection/diagram_remote_inspection.jpg"
                      alt="Remote Inspection Topology"
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
                    System Architecture: Coloron VMS + NVR + PTZ & Explosion-proof Positioning Cameras
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
                    Remote Inspection
                  </h4>

                  {/* Accordion 1: NVR */}
                  <div style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <button
                      onClick={() => toggleAccordion('vms')}
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
                      <span>NVR & Management Platform</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: openAccordions['vms'] ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>
                    {openAccordions['vms'] && (
                      <div style={{ paddingBottom: '18px', color: '#4b5563', fontSize: '0.94rem', lineHeight: 1.6 }}>
                        <div style={{ padding: '12px 16px', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
                          <div style={{ fontWeight: 600, color: '#111827', marginBottom: '4px' }}>Coloron VMS & Ultra NVR</div>
                          <div>Centralized management platform supporting online route planning, scheduled patrol checkpoints, high-throughput multi-stream storage, and audit logs.</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Accordion 2: PTZ Cameras */}
                  <div style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <button
                      onClick={() => toggleAccordion('ptz')}
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
                      <span>PTZ Cameras</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: openAccordions['ptz'] ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>
                    {openAccordions['ptz'] && (
                      <div style={{ paddingBottom: '18px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        {/* Product 1 */}
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
                              src="/images/intelligent-inspection/prod_ptz_1.png"
                              alt="DS-2DY5225IX-AE(T5)"
                              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            />
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#111827' }}>
                              DS-2DY5225IX-AE(T5)
                            </div>
                            <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                              5-inch 2 MP 25X DarkFighter IR Network Positioning System
                            </div>
                          </div>
                        </div>

                        {/* Product 2 */}
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
                              src="/images/intelligent-inspection/prod_ptz_2.png"
                              alt="iDS-2SK8144IXS-D/J"
                              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            />
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#111827' }}>
                              iDS-2SK8144IXS-D/J
                            </div>
                            <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                              8-inch 4 MP 40X DarkFighter IR Network Speed Dome
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Accordion 3: Explosion-proof Cameras */}
                  <div style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <button
                      onClick={() => toggleAccordion('explosion')}
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
                      <span>Explosion-proof Cameras</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: openAccordions['explosion'] ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>
                    {openAccordions['explosion'] && (
                      <div style={{ paddingBottom: '18px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        {/* Product 1 */}
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
                              src="/images/intelligent-inspection/prod_ex_1.png"
                              alt="DS-2DF6223-CX(T5/316L)"
                              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            />
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#111827' }}>
                              DS-2DF6223-CX(T5/316L)
                            </div>
                            <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                              316L 2MP 23x Explosion-proof Network Speed Dome
                            </div>
                          </div>
                        </div>

                        {/* Product 2 */}
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
                              src="/images/intelligent-inspection/prod_ex_2.png"
                              alt="DS-2XE6222F-IS/316L(D)"
                              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            />
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#111827' }}>
                              DS-2XE6222F-IS/316L(D)
                            </div>
                            <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                              316L 2MP Explosion-Proof Fixed Bullet
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

          {/* TAB 2: AI INSPECTION */}
          {activeTab === 'ai' && (
            <div>
              {/* Subtitle & Bullets */}
              <div style={{ maxWidth: '1080px', margin: '0 auto 48px' }}>
                <h3
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    marginBottom: '18px',
                  }}
                >
                  Upgraded inspection processes with intelligent functions
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
                    Artificial intelligence-based inspections add intelligence on top of remote methods, thermal imaging and AI cameras, which automatically identifies issues according to pre-set rules and vastly reduces labor and time costs.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    Automatic detection with round-the-clock coverage for various safety issues – such as absence detection, equipment installation location & detection, emergency exit detection, and more – offers a smarter approach to quickly respond to any problem.
                  </li>
                </ul>
              </div>

              {/* 2 Scenario Cards: Industrial Parks & Electrical Substations */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                  gap: '24px',
                  maxWidth: '1080px',
                  margin: '0 auto 64px',
                }}
              >
                {/* Scenario 1: Industrial Parks */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <div style={{ height: '260px', overflow: 'hidden' }}>
                    <img
                      src="/images/intelligent-inspection/scenario_industrial_parks.jpg"
                      alt="Industrial Parks"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <h4 style={{ fontSize: '1.18rem', fontWeight: 700, margin: 0, color: '#1d1d1f' }}>
                      Industrial Parks
                    </h4>
                  </div>
                </div>

                {/* Scenario 2: Electrical Substations */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <div style={{ height: '260px', overflow: 'hidden' }}>
                    <img
                      src="/images/intelligent-inspection/scenario_substations.jpg"
                      alt="Electrical Substations"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <h4 style={{ fontSize: '1.18rem', fontWeight: 700, margin: 0, color: '#1d1d1f' }}>
                      Electrical Substations
                    </h4>
                  </div>
                </div>
              </div>

              {/* Topology Diagram (Left) & Products Category Accordions (Right) */}
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
                {/* Left: AI Topology Diagram */}
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
                    onClick={() => setLightboxImg('/images/intelligent-inspection/diagram_ai_inspection.jpg')}
                  >
                    <img
                      src="/images/intelligent-inspection/diagram_ai_inspection.jpg"
                      alt="AI Inspection Topology"
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
                    AI System Architecture: DeepinMind NVR + Thermal & Optical Bi-spectrum Cameras + AI Analytics
                  </p>
                </div>

                {/* Right: AI Products Accordion */}
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
                    AI Inspection
                  </h4>

                  {/* Accordion 1: DeepinMind NVR */}
                  <div style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <button
                      onClick={() => toggleAccordion('ai-nvr')}
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
                      <span>DeepinMind NVR</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: openAccordions['ai-nvr'] ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>
                    {openAccordions['ai-nvr'] && (
                      <div style={{ paddingBottom: '18px', color: '#4b5563', fontSize: '0.94rem', lineHeight: 1.6 }}>
                        <div style={{ padding: '12px 16px', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
                          <div style={{ fontWeight: 600, color: '#111827', marginBottom: '4px' }}>iDS-9664NXI-I8/X(B)</div>
                          <div>DeepinMind 64-Channel Ultra Series NVR with AI behavior analysis, false alarm filtering, and smart metadata indexing.</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Accordion 2: Thermal Cameras */}
                  <div style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <button
                      onClick={() => toggleAccordion('ai-thermal')}
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
                      <span>Thermal Cameras</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: openAccordions['ai-thermal'] ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>
                    {openAccordions['ai-thermal'] && (
                      <div style={{ paddingBottom: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ padding: '10px 14px', backgroundColor: '#f9fafb', borderRadius: '6px', fontSize: '0.9rem' }}>
                          <div style={{ fontWeight: 600, color: '#111827' }}>DS-2TD4137T-9/W</div>
                          <div style={{ color: '#6b7280' }}>Thermographic Thermal & Optical Bi-spectrum Network Speed Dome</div>
                        </div>
                        <div style={{ padding: '10px 14px', backgroundColor: '#f9fafb', borderRadius: '6px', fontSize: '0.9rem' }}>
                          <div style={{ fontWeight: 600, color: '#111827' }}>DS-2TD4137T-25/W</div>
                          <div style={{ color: '#6b7280' }}>Thermographic Thermal & Optical Bi-spectrum Network Speed Dome</div>
                        </div>
                        <div style={{ padding: '10px 14px', backgroundColor: '#f9fafb', borderRadius: '6px', fontSize: '0.9rem' }}>
                          <div style={{ fontWeight: 600, color: '#111827' }}>DS-2TD3017T-2/V</div>
                          <div style={{ color: '#6b7280' }}>Thermographic Cube Camera for Electrical Cabinets</div>
                        </div>
                        <div style={{ padding: '10px 14px', backgroundColor: '#f9fafb', borderRadius: '6px', fontSize: '0.9rem' }}>
                          <div style={{ fontWeight: 600, color: '#111827' }}>DS-2TD3017T-3/V</div>
                          <div style={{ color: '#6b7280' }}>Thermographic Cube Camera with Continuous Temperature Alarm</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Accordion 3: AI Cameras */}
                  <div style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <button
                      onClick={() => toggleAccordion('ai-camera')}
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
                      <span>AI Cameras</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: openAccordions['ai-camera'] ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>
                    {openAccordions['ai-camera'] && (
                      <div style={{ paddingBottom: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ padding: '10px 14px', backgroundColor: '#f9fafb', borderRadius: '6px', fontSize: '0.9rem' }}>
                          <div style={{ fontWeight: 600, color: '#111827' }}>iDS-2CD7A46G0/S-IZHS(Y)</div>
                          <div style={{ color: '#6b7280' }}>4MP DeepinView Moto Varifocal Bullet Camera with Perimeter & PPE Analytics</div>
                        </div>
                        <div style={{ padding: '10px 14px', backgroundColor: '#f9fafb', borderRadius: '6px', fontSize: '0.9rem' }}>
                          <div style={{ fontWeight: 600, color: '#111827' }}>iDS-2CD7126G0-IZS</div>
                          <div style={{ color: '#6b7280' }}>2MP DeepinView Indoor Moto Varifocal Dome Camera with Absence & Exit Detection</div>
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

      {/* 5. SECTION: SUCCESS STORIES */}
      <section
        id="success-stories"
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
          Success stories
        </h2>

        {/* Feature Story Card Matching Screenshot */}
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            border: '1px solid #f1f5f9',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            alignItems: 'stretch',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
          }}
        >
          {/* Story Left Image */}
          <div style={{ minHeight: '340px', position: 'relative' }}>
            <img
              src="/images/intelligent-inspection/success_coal_mine.jpg"
              alt="Jiangzhuang Coal Mine"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Story Right Content */}
          <div
            style={{
              padding: '44px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.88rem',
                color: '#6b7280',
                marginBottom: '14px',
              }}
            >
              <Calendar size={15} />
              <span>August 10, 2020</span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                lineHeight: 1.3,
                marginBottom: '16px',
                letterSpacing: '-0.01em',
              }}
            >
              Coloron helps Jiangzhuang Coal Mine to create a ‘zero-accident’ working environment
            </h3>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.65,
                color: '#4b5563',
                marginBottom: '28px',
              }}
            >
              Utilizing Coloron intelligent inspection cameras and automated anomaly detection underground, mining engineers replaced dangerous manual patrols in hazardous shafts, achieving continuous zero-accident workplace records.
            </p>

            {/* Topics Tags */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#374151' }}>Topic:</span>
              {['Camera products', 'Energy', 'Intelligent inspection'].map((topic, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: '#f3f4f6',
                    color: '#4b5563',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: RELATED RESOURCES */}
      <section
        id="related-resources"
        style={{
          padding: '72px 32px 88px',
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
              marginBottom: '48px',
              letterSpacing: '-0.02em',
            }}
          >
            Related Resources
          </h2>

          <div style={{ maxWidth: '480px', margin: '0 auto' }}>
            <div
              onClick={() => setLightboxImg('/images/intelligent-inspection/resource_infographic.jpg')}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                padding: '24px 28px',
                boxShadow: '0 4px 18px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e5e7eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#d7150e';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(215, 21, 14, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#d7150e',
                  }}
                >
                  <FileText size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Infographic
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '2px 0 0' }}>
                    Industrial Inspection
                  </h3>
                </div>
              </div>

              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#f3f4f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#374151',
                }}
              >
                <Download size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: YOU MAY ALSO BE INTERESTED IN (3 PHOTO CARDS MATCHING SCREENSHOT) */}
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
          You may also be interested in
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
              title: 'Energy',
              desc: 'Coloron provides comprehensive system solutions to enhance safety and efficiency for energy businesses, optimizing operational awareness and management through the value chains.',
              image: '/images/intelligent-inspection/interest_energy.jpg',
              link: '/solutions/electrical-substations',
            },
            {
              category: 'Solutions by industry',
              title: 'Oil & Gas',
              desc: 'Provides advanced technologies and products that empower your businesses and employees with automated inspection and explosion-proof safety.',
              image: '/images/intelligent-inspection/interest_oil_gas.jpg',
              link: '/solutions/onshore-oilfields',
            },
            {
              category: 'Solutions by industry',
              title: 'Operational management',
              desc: 'Provides oil and gas companies with intelligent and automated approaches and tools to collect operational equipment data.',
              image: '/images/intelligent-inspection/interest_operational.jpg',
              link: '/solutions/transmission-line-inspection',
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
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.6) 45%, rgba(0, 0, 0, 0.1) 85%, transparent 100%)',
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

      {/* 8. SECTION: READY TO DISCUSS YOUR NEEDS? (MATCHING SCREENSHOT VECTOR ILLUSTRATION) */}
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

          {/* Right Vector Illustration Graphic matching Hikvision's exact artwork in screenshot */}
          <div
            style={{
              flex: '0 1 440px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <svg width="400" height="280" viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Floor Base */}
              <rect x="180" y="246" width="200" height="4" rx="2" fill="#cbd5e1" />

              {/* Desk Frame */}
              <rect x="230" y="172" width="130" height="6" rx="2" fill="#1e293b" />
              <rect x="245" y="178" width="6" height="68" fill="#1e293b" />
              <rect x="345" y="178" width="6" height="68" fill="#1e293b" />
              <rect x="245" y="220" width="106" height="4" fill="#334155" />

              {/* Laptop on Desk */}
              <rect x="272" y="152" width="38" height="20" rx="2" fill="#1e293b" />
              <rect x="275" y="155" width="32" height="15" rx="1" fill="#38bdf8" />
              <polygon points="264,172 318,172 312,168 270,168" fill="#64748b" />

              {/* Specialist Head & Hair */}
              <circle cx="260" cy="116" r="14" fill="#fed7aa" />
              <path d="M250 110 Q260 98 272 108 Q274 116 270 120 Q262 110 252 114 Z" fill="#1e293b" />
              
              {/* Red Headset & Ear Cup */}
              <path d="M256 102 C265 102 272 108 272 116" stroke="#d7150e" strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="272" cy="116" r="5" fill="#d7150e" />
              <path d="M272 118 L264 126" stroke="#d7150e" strokeWidth="2" strokeLinecap="round" />

              {/* Torso & Arms */}
              <path d="M250 130 C242 142 242 165 242 185 L278 185 C278 165 274 142 268 130 Z" fill="#1e293b" />
              <path d="M260 130 L260 142" stroke="#ffffff" strokeWidth="2" />
              {/* Typing arms */}
              <path d="M256 142 Q270 156 280 166" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
              <path d="M246 145 Q262 160 274 168" stroke="#334155" strokeWidth="5" strokeLinecap="round" />

              {/* Chair Back and Base */}
              <rect x="232" y="148" width="6" height="42" rx="2" fill="#d7150e" />
              <rect x="230" y="186" width="32" height="6" rx="2" fill="#d7150e" />
              <rect x="242" y="192" width="6" height="48" fill="#475569" />
              <path d="M232 240 L258 240" stroke="#475569" strokeWidth="4" strokeLinecap="round" />

              {/* Plant on Left (Large Emerald Leaves) */}
              <path d="M210 246 Q185 210 195 170 Q215 205 210 246 Z" fill="#059669" />
              <path d="M210 246 Q225 215 218 185 Q205 215 210 246 Z" fill="#10b981" />
              <path d="M205 246 Q165 230 180 205 Q200 225 205 246 Z" fill="#047857" />

              {/* Plant on Right */}
              <path d="M375 246 Q395 215 385 185 Q370 215 375 246 Z" fill="#10b981" />
              <path d="M370 246 Q360 225 362 205 Q375 225 370 246 Z" fill="#059669" />

              {/* Floating Mechanical Gears */}
              <g transform="translate(195, 120)">
                <circle cx="16" cy="16" r="14" stroke="#475569" strokeWidth="4" strokeDasharray="5 3" fill="none" />
                <circle cx="16" cy="16" r="5" fill="#475569" />
              </g>
              <g transform="translate(216, 96)">
                <circle cx="12" cy="12" r="10" stroke="#64748b" strokeWidth="3" strokeDasharray="4 2" fill="none" />
                <circle cx="12" cy="12" r="3.5" fill="#64748b" />
              </g>

              {/* Clock on Left */}
              <circle cx="230" cy="74" r="14" fill="#334155" />
              <path d="M230 65 L230 74 L237 74" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

              {/* Message / Email Bubble on Right */}
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
        defaultSubject="Inquiry: Intelligent Inspection Solution"
      />

    </div>
  );
}
