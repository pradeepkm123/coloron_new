import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Clock,
  CheckCircle2,
  Users,
  Smartphone,
  Server,
  Cloud,
  ArrowRight,
  ChevronRight,
  Check,
  Building,
  Store,
  Calendar,
  Download,
  Fingerprint,
  QrCode,
  CreditCard,
  Eye,
  Sliders,
  Sparkles,
  Layers,
  FileSpreadsheet,
  AlertCircle,
  FileText,
  Lock,
  DoorClosed,
  KeyRound,
  Bell,
  Cpu,
  Zap,
  HelpCircle,
  Maximize2
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

export default function AccessControlSolution() {
  const [activeTab, setActiveTab] = useState('pedestrians'); // 'pedestrians' | 'high_security' | 'emergency'
  const [selectedTech, setSelectedTech] = useState('face'); // 'face' | 'fingerprint' | 'card' | 'mobile'
  const [activeArchitectureItem, setActiveArchitectureItem] = useState('controller'); // 'controller' | 'terminal' | 'turnstile'
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('what-we-offer');

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['what-we-offer', 'key-technology', 'recommended-solution', 'success-stories', 'download', 'related-links'];
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
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1d1d1f', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      
      {/* 1. HERO BANNER - FULL WIDTH (HEIGHT 750px) WITH AUTHENTIC SPEED GATES & BLUE ORGANIC ARC */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '750px',
          minHeight: '750px',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url('/images/access-control/hero_banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
        }}
      >
        {/* Deep blue organic curve overlay matching Hikvision visual identity */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '100%',
            maxWidth: '820px',
            background: 'linear-gradient(105deg, rgba(14, 50, 118, 0.95) 0%, rgba(18, 64, 142, 0.91) 42%, rgba(25, 82, 172, 0.78) 65%, rgba(35, 110, 210, 0.35) 86%, transparent 100%)',
            zIndex: 1,
          }}
        />

        {/* Content Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            maxWidth: '1380px',
            width: '100%',
            margin: '0 auto',
            padding: '70px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Breadcrumb / Scenario Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: '0.92rem',
              fontWeight: 600,
              marginBottom: '16px',
            }}
          >
            <Shield size={18} color="#60a5fa" />
            <span>Solutions by Function</span>
          </div>

          {/* Hero Title */}
          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5vw, 4rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              margin: '0 0 18px 0',
              lineHeight: 1.15,
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            Access Control
          </h1>

          {/* Subtitle / Value Proposition */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.3vw, 1.2rem)',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.92)',
              maxWidth: '560px',
              margin: '0 0 32px 0',
              fontWeight: 400,
            }}
          >
            Frictionless passage, high-level emergency management, and enhanced multi-factor security for modern buildings, corporate offices, and high-throughput facilities.
          </p>

          {/* Hero CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowSalesModal(true)}
              style={{
                backgroundColor: '#d70015',
                color: '#ffffff',
                border: 'none',
                padding: '13px 28px',
                borderRadius: '4px',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background-color 0.2s, transform 0.15s',
                boxShadow: '0 4px 14px rgba(215, 0, 21, 0.35)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b50012';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d70015';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Contact an Expert</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. BREADCRUMB BAR UNDER BANNER */}
      <div
        style={{
          borderBottom: '1px solid #f0f0f0',
          backgroundColor: '#fafafa',
          padding: '10px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1380px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.82rem',
            color: '#707070',
            gap: '8px',
          }}
        >
          <Link to="/" style={{ color: '#707070', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link to="/solutions" style={{ color: '#707070', textDecoration: 'none' }}>Solutions</Link>
          <span>›</span>
          <span style={{ color: '#707070' }}>Solutions by Function</span>
          <span>›</span>
          <span style={{ color: '#1d1d1f', fontWeight: 600 }}>Access Control</span>
        </div>
      </div>

      {/* 3. STICKY SUB-NAVIGATION BAR */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 90,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e5e5',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        }}
      >
        <div
          style={{
            maxWidth: '1380px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '56px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1d1d1f' }}>
              Access Control Solution
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              {[
                { id: 'what-we-offer', label: 'What we offer' },
                { id: 'key-technology', label: 'Key technology' },
                { id: 'recommended-solution', label: 'Recommended solution' },
                { id: 'success-stories', label: 'Success stories' },
                { id: 'download', label: 'Download' },
                { id: 'related-links', label: 'You may also be interested in' },
              ].map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '18px 0',
                      fontSize: '0.88rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? '#d70015' : '#606060',
                      cursor: 'pointer',
                      position: 'relative',
                      borderBottom: isActive ? '2px solid #d70015' : '2px solid transparent',
                      transition: 'color 0.2s, border-color 0.2s',
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => setShowSalesModal(true)}
            style={{
              backgroundColor: '#d70015',
              color: '#ffffff',
              border: 'none',
              padding: '8px 20px',
              borderRadius: '3px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b50012')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
          >
            Contact us
          </button>
        </div>
      </nav>

      {/* 4. WHAT WE OFFER SECTION */}
      <section id="what-we-offer" style={{ padding: '80px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, margin: '0 0 16px 0', color: '#111827' }}>
            What we offer
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#6b7280',
              lineHeight: 1.7,
              maxWidth: '880px',
              margin: '0 auto 56px auto',
            }}
          >
            Hikvision Access Control Solution covers full scenes from perimeter barriers to interior doors, providing touch-free entry, multi-credential authorization, and centralized real-time security management across enterprise facilities.
          </p>

          {/* 3 Column Feature Cards Matching Hikvision Official Icons */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              textAlign: 'center',
            }}
          >
            {/* Card 1: Touch-free access experience */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #eef0f3',
                borderRadius: '8px',
                padding: '40px 28px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.03)';
              }}
            >
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <img
                  src="/images/access-control/offer_icon01.jpg"
                  alt="Touch-free access experience"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
                Touch-free access experience
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                High recognition speed under 0.2s with MinMoe face recognition terminals and speed gates ensures effortless, hygienic walk-through traffic even during peak arrival hours.
              </p>
            </div>

            {/* Card 2: Access control with high security */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #eef0f3',
                borderRadius: '8px',
                padding: '40px 28px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.03)';
              }}
            >
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <img
                  src="/images/access-control/offer_icon02.jpg"
                  alt="Access control with high security"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
                Access control with high security
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Strict security measures including multi-factor authentication, anti-passback, interlock, first-card opening, and anti-tailgating sensors prevent unauthorized intrusion.
              </p>
            </div>

            {/* Card 3: Flexible & easy management */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #eef0f3',
                borderRadius: '8px',
                padding: '40px 28px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.03)';
              }}
            >
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <img
                  src="/images/access-control/offer_icon03.jpg"
                  alt="Flexible & easy management"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
                Flexible & easy management
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Centralized configuration on HikCentral Professional or Hik-Connect cloud platform simplifies remote authorization, visitor badges, emergency door lockdown, and audit reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KEY TECHNOLOGY SECTION */}
      <section id="key-technology" style={{ padding: '80px 24px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
              Key technology
            </h2>
            <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: '640px', margin: '0 auto' }}>
              Next-generation biometric authentication driven by deep-learning AI algorithms
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left: Terminal Photo with Floating Interactive Technology Tags */}
            <div
              style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
              }}
            >
              <img
                src="/images/access-control/key_technology.jpg"
                alt="MinMoe Face Recognition Access Terminal"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                  minHeight: '340px',
                }}
              />

              {/* Floating badges corresponding to authentication modes */}
              <div
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  zIndex: 2,
                }}
              >
                {[
                  { id: 'face', label: 'Face Recognition', icon: <Eye size={13} color="#2563eb" /> },
                  { id: 'fingerprint', label: 'Fingerprint', icon: <Fingerprint size={13} color="#059669" /> },
                  { id: 'card', label: 'RFID / Smart Card', icon: <CreditCard size={13} color="#d97706" /> },
                  { id: 'mobile', label: 'Bluetooth / QR / NFC', icon: <Smartphone size={13} color="#7c3aed" /> },
                ].map((item) => {
                  const isSel = selectedTech === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedTech(item.id)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: isSel ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.85)',
                        border: isSel ? '1.5px solid #2563eb' : '1px solid rgba(0,0,0,0.08)',
                        borderRadius: '20px',
                        padding: '6px 14px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: '#1e293b',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        cursor: 'pointer',
                        backdropFilter: 'blur(8px)',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Technical Features Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ borderBottom: '2px solid #e5e7eb', paddingBottom: '16px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#d70015', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  MULTI-FACTOR BIOMETRIC CREDENTIALS
                </span>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 700, color: '#111827', margin: '6px 0 0 0' }}>
                  Biometric authentication methods
                </h3>
              </div>

              {/* Bullet 1 */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    backgroundColor: '#fee2e2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Sparkles size={16} color="#d70015" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#111827', margin: '0 0 4px 0' }}>
                    High contactless speed & precision powered by deep learning
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.55, margin: 0 }}>
                    Proprietary deep-learning facial recognition algorithms achieve 99%+ accuracy in under 0.2 seconds per user, enabling continuous walk-through verification without slowing down building occupants.
                  </p>
                </div>
              </div>

              {/* Bullet 2 */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    backgroundColor: '#e0f2fe',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Shield size={16} color="#0284c7" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#111827', margin: '0 0 4px 0' }}>
                    Dual-lens anti-spoofing liveness detection
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.55, margin: 0 }}>
                    Dual-lens optical system with integrated infrared sensors actively distinguishes real human faces from high-resolution print photographs, smartphone video playbacks, and 3D silicone masks.
                  </p>
                </div>
              </div>

              {/* Bullet 3 */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    backgroundColor: '#ecfdf5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Layers size={16} color="#059669" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#111827', margin: '0 0 4px 0' }}>
                    Versatile authentication combinations
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.55, margin: 0 }}>
                    Adaptable to strict access policies: configure single-credential speed passage (Face only) or multi-tier verification (Face + PIN, Card + Fingerprint, or temporary dynamic QR codes for visitors).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RECOMMENDED SOLUTION SECTION WITH TABS, SCENARIOS & INTERACTIVE TOPOLOGY */}
      <section id="recommended-solution" style={{ padding: '80px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
              Recommended solution
            </h2>
            <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: '680px', margin: '0 auto' }}>
              Tailored architectures for high-speed pedestrian thoroughfares, multi-door enterprise security, and emergency evacuation management.
            </p>
          </div>

          {/* Solution Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              borderBottom: '1px solid #e5e7eb',
              marginBottom: '40px',
              gap: '32px',
              overflowX: 'auto',
            }}
          >
            {[
              { id: 'pedestrians', label: 'Quick Pass for Pedestrians' },
              { id: 'high_security', label: 'Access Control for High Security' },
              { id: 'emergency', label: 'Emergency Management for Specialized Scenarios' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '14px 12px',
                    fontSize: '1rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#d70015' : '#4b5563',
                    cursor: 'pointer',
                    position: 'relative',
                    borderBottom: isActive ? '3px solid #d70015' : '3px solid transparent',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* TAB 1: QUICK PASS FOR PEDESTRIANS */}
          {activeTab === 'pedestrians' && (
            <div>
              {/* Needs & Features bullets */}
              <div
                style={{
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px',
                  padding: '32px',
                  marginBottom: '40px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '32px',
                  border: '1px solid #f3f4f6',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', margin: '0 0 14px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Users size={18} color="#d70015" />
                    <span>Customer Needs</span>
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <li>Rapid passage without long queues during morning and evening rush hours.</li>
                    <li>Accurate prevention of tailgating and unauthorized access into office zones.</li>
                    <li>Clean, touch-free operation promoting health hygiene for tenants and guests.</li>
                    <li>Synchronized visitor pre-registration and access credential generation.</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', margin: '0 0 14px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={18} color="#059669" />
                    <span>Solution Features</span>
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <li>Sub-0.2s face recognition supporting up to 50,000 enrolled personnel profiles.</li>
                    <li>Smart speed gates with infrared sensors detecting reverse passage and tailgating.</li>
                    <li>Automatic fire alarm linkage opens all gates instantly for rapid emergency egress.</li>
                    <li>Unified attendance logs and automated shift sync with HR/payroll systems.</li>
                  </ul>
                </div>
              </div>

              {/* 2 Scenario Photo Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                  gap: '24px',
                  marginBottom: '56px',
                }}
              >
                {/* Scenario 1: Commercial buildings */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  }}
                >
                  <div style={{ height: '260px', overflow: 'hidden' }}>
                    <img
                      src="/images/access-control/scenario_commercial_building.jpg"
                      alt="Commercial Buildings Speed Gate Access"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                      Commercial buildings
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.55 }}>
                      Sleek stainless steel and glass swing barrier turnstiles complement corporate lobby aesthetics while handling thousands of tenants every morning with contactless face recognition.
                    </p>
                  </div>
                </div>

                {/* Scenario 2: Factories & warehouses */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  }}
                >
                  <div style={{ height: '260px', overflow: 'hidden' }}>
                    <img
                      src="/images/access-control/scenario_factory_warehouse.jpg"
                      alt="Factories and Warehouses Access Control"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                      Factories & warehouses
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.55 }}>
                      Heavy-duty outdoor flap turnstiles with IP65 weather-resistant terminals authenticate plant workers and contractors efficiently, with anti-passback preventing buddy clocking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Topology Architecture Diagram with Interactive Side Navigation */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '36px 32px',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1.4fr) minmax(300px, 0.8fr)',
                  gap: '36px',
                  alignItems: 'center',
                }}
              >
                {/* Left: Diagram Image */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>
                      System Architecture: Quick Pass for Pedestrians
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      HikCentral / Cloud Controller Topology
                    </span>
                  </div>
                  <div
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    <img
                      src="/images/access-control/topology_efficient_passing.jpg"
                      alt="Quick Pass for Pedestrians Topology"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                </div>

                {/* Right: Architecture Product List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px 0' }}>
                    Core Architecture Components
                  </h4>

                  {[
                    {
                      id: 'controller',
                      title: 'Access Controller & Reader',
                      model: 'DS-K2604T Series',
                      desc: '4-door network access controller supporting encrypted TCP/IP, OSDP and Wiegand interfaces with tamper-proof storage.',
                    },
                    {
                      id: 'terminal',
                      title: 'MinMoe Face Recognition Terminal',
                      model: 'DS-K1T673 Series',
                      desc: '7-inch LCD touch screen, 50,000 face capacity, 0.2s recognition, IP65 waterproof housing, and dual-lens liveness verification.',
                    },
                    {
                      id: 'turnstile',
                      title: 'Speed Gate & Turnstile',
                      model: 'DS-K3B601 Series',
                      desc: 'Stainless steel swing barrier with brushless servo motor, 60 persons/min throughput, and multiple pairs of anti-tailgate IR sensors.',
                    },
                  ].map((comp) => {
                    const isSelected = activeArchitectureItem === comp.id;
                    return (
                      <div
                        key={comp.id}
                        onClick={() => setActiveArchitectureItem(comp.id)}
                        style={{
                          backgroundColor: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
                          border: isSelected ? '1.5px solid #d70015' : '1px solid #e2e8f0',
                          borderRadius: '8px',
                          padding: '16px 18px',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          boxShadow: isSelected ? '0 4px 14px rgba(215, 0, 21, 0.08)' : 'none',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                          <span style={{ fontSize: '0.92rem', fontWeight: 700, color: isSelected ? '#d70015' : '#0f172a' }}>
                            {comp.title}
                          </span>
                          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b', backgroundColor: '#f1f5f9', padding: '2px 8px', borderRadius: '4px' }}>
                            {comp.model}
                          </span>
                        </div>
                        <p style={{ fontSize: '0.84rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                          {comp.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ACCESS CONTROL FOR HIGH SECURITY */}
          {activeTab === 'high_security' && (
            <div>
              <div
                style={{
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px',
                  padding: '32px',
                  marginBottom: '40px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '32px',
                  border: '1px solid #f3f4f6',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', margin: '0 0 14px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Lock size={18} color="#d70015" />
                    <span>High Security Requirements</span>
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <li>Strict authentication for financial vaults, server rooms, and R&D labs.</li>
                    <li>Dual-person authentication requiring two managers to unlock simultaneously.</li>
                    <li>Global anti-passback and multi-door interlock (mantrap security airlocks).</li>
                    <li>Instant duress alarms when an employee is coerced to unlock doors.</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', margin: '0 0 14px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Shield size={18} color="#059669" />
                    <span>Security Highlights</span>
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <li>Multi-factor verification: Face + Fingerprint + Card + PIN required.</li>
                    <li>Mantrap interlock prevents Door B from opening until Door A is firmly locked.</li>
                    <li>Real-time visual verification triggers camera popups on security consoles.</li>
                    <li>Encrypted hardware credentials with tamper-alarm transmission.</li>
                  </ul>
                </div>
              </div>

              {/* High Security Scenarios & Diagram */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                  gap: '32px',
                  alignItems: 'center',
                }}
              >
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
                  <img
                    src="/images/access-control/scenario_high_security_bank.jpg"
                    alt="Financial Vault Access Control"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '20px', backgroundColor: '#ffffff' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
                      Financial & banking vaults
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.55 }}>
                      Multi-door interlock airlocks and biometric verification ensure only authorized bullion or cash vault handlers enter under dual-custody verification.
                    </p>
                  </div>
                </div>

                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
                  <img
                    src="/images/access-control/topology_high_security.jpg"
                    alt="High Security Access Control Topology"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '20px', backgroundColor: '#ffffff' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
                      High-security network topology
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.55 }}>
                      Redundant controllers with encrypted card readers, magnetic locks, and CCTV integration with HikCentral Professional Security Management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: EMERGENCY MANAGEMENT */}
          {activeTab === 'emergency' && (
            <div>
              <div
                style={{
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px',
                  padding: '32px',
                  marginBottom: '40px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '32px',
                  border: '1px solid #f3f4f6',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', margin: '0 0 14px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Bell size={18} color="#d70015" />
                    <span>Emergency Preparedness</span>
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <li>Instant building-wide or floor-by-floor lockdown during active security alerts.</li>
                    <li>Fire alarm linkage immediately releases all magnetic door locks for safe evacuation.</li>
                    <li>Live muster station headcount accounting to identify trapped occupants.</li>
                    <li>Emergency first-responder override keys and remote dispatch access.</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', margin: '0 0 14px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Zap size={18} color="#059669" />
                    <span>Specialized Features</span>
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <li>One-click lockdown from HikCentral software, mobile app, or physical alarm buttons.</li>
                    <li>Hardware-level fail-safe relays guarantee door release even if network is offline.</li>
                    <li>Live evacuation maps showing headcount progress at outside muster zones.</li>
                    <li>Audit trail recording every second of emergency trigger and door state changes.</li>
                  </ul>
                </div>
              </div>

              {/* Emergency Scenarios & Diagram */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                  gap: '32px',
                  alignItems: 'center',
                }}
              >
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
                  <img
                    src="/images/access-control/scenario_emergency_office.jpg"
                    alt="Corporate Office Emergency Response"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '20px', backgroundColor: '#ffffff' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
                      Enterprise campus emergency response
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.55 }}>
                      Comprehensive fire alarm relay integration ensures stairwell exit doors unlock automatically to prevent stampedes during building evacuations.
                    </p>
                  </div>
                </div>

                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
                  <img
                    src="/images/access-control/topology_emergency_management.jpg"
                    alt="Emergency Management Access Control Topology"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '20px', backgroundColor: '#ffffff' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
                      Emergency management architecture
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.55 }}>
                      Direct dry-contact fire linkages, emergency break-glass buttons, and automated muster point roll-call integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 7. SUCCESS STORIES SECTION */}
      <section id="success-stories" style={{ padding: '80px 24px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
              Success stories
            </h2>
            <p style={{ fontSize: '1rem', color: '#6b7280' }}>
              Real-world deployment of Hikvision smart access control solutions across global institutions.
            </p>
          </div>

          {/* Large Success Story Showcase Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 1.1fr) minmax(320px, 1fr)',
              gap: 0,
            }}
          >
            {/* Story Image */}
            <div style={{ minHeight: '340px', overflow: 'hidden' }}>
              <img
                src="/images/access-control/success_story_malaysian_school.jpg"
                alt="Malaysian High School Smart Campus Revamp"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Story Content */}
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
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#6b7280',
                  marginBottom: '12px',
                }}
              >
                <Calendar size={14} color="#d70015" />
                <span>July 20, 2023</span>
                <span>•</span>
                <span style={{ color: '#d70015' }}>Education & Access Control</span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.25rem, 2vw, 1.6rem)',
                  fontWeight: 800,
                  color: '#111827',
                  margin: '0 0 16px 0',
                  lineHeight: 1.3,
                }}
              >
                Transforming challenges into opportunities: A Malaysian high school's smart campus revamp
              </h3>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#4b5563',
                  lineHeight: 1.65,
                  margin: '0 0 24px 0',
                }}
              >
                Hin Hua / Chung Ling High School in Malaysia modernized its campus by deploying Hikvision face recognition speed gates, automated vehicle access control, and smart interactive displays. The deployment completely eliminated morning gate bottlenecks for over 3,000 students while delivering real-time attendance tracking to parents and school administrators.
              </p>

              <div>
                <button
                  onClick={() => setShowSalesModal(true)}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#d70015',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: 0,
                  }}
                >
                  <span>Read case study</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DOWNLOAD SECTION */}
      <section id="download" style={{ padding: '70px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
            Download
          </h2>
          <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '40px' }}>
            Get comprehensive technical brochures, solution whitepapers, and product datasheets.
          </p>

          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#d70015';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.07)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.03)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    backgroundColor: '#fee2e2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <FileText size={24} color="#d70015" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', margin: '0 0 4px 0' }}>
                    Access Control Solutions Guide
                  </h4>
                  <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>
                    PDF | 8.4 MB | Comprehensive Architecture & Specifications
                  </span>
                </div>
              </div>

              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  setShowSalesModal(true);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#f3f4f6',
                  color: '#111827',
                  padding: '9px 16px',
                  borderRadius: '4px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e5e7eb')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f3f4f6')}
              >
                <Download size={15} />
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. YOU MAY ALSO BE INTERESTED IN */}
      <section id="related-links" style={{ padding: '80px 24px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, margin: '0 0 36px 0', textAlign: 'center', color: '#111827' }}>
            You may also be interested in
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {[
              {
                title: 'Entrance & Exit Management',
                desc: 'Automated barrier gate management with high-speed ANPR plate verification and vehicle flow control.',
                image: '/images/access-control/rel_entrance.jpg',
                link: '/solutions#entrance-exit',
              },
              {
                title: 'Offices',
                desc: 'Integrated corporate building management with smart video security, visitor registration, and interactive meeting rooms.',
                image: '/images/access-control/rel_office.jpg',
                link: '/solutions/offices',
              },
              {
                title: 'Logistics',
                desc: 'End-to-end logistics park protection, automated dock management, and multi-checkpoint container tracking.',
                image: '/images/access-control/rel_logistics.jpg',
                link: '/solutions/warehouses',
              },
            ].map((card, i) => (
              <Link
                key={i}
                to={card.link}
                style={{
                  position: 'relative',
                  height: '320px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '28px 24px',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.1)';
                }}
              >
                {/* Background Image */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                  }}
                />

                {/* Dark Vignette Gradient */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)',
                    zIndex: 1,
                  }}
                />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', margin: '0 0 8px 0' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', margin: '0 0 16px 0', lineHeight: 1.5 }}>
                    {card.desc}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#60a5fa',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                    }}
                  >
                    <span>Learn more</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BOTTOM BANNER - READY TO DISCUSS YOUR NEEDS */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#ffffff',
          borderTop: '1px solid #eef0f3',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Text and CTA Buttons */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
                fontWeight: 800,
                color: '#111827',
                margin: '0 0 16px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Ready to discuss your needs?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#4b5563',
                lineHeight: 1.6,
                margin: '0 0 36px 0',
                maxWidth: '480px',
              }}
            >
              Our access control engineers are ready to design a custom turnstile and door security blueprint tailored to your project requirements.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: '#d70015',
                  color: '#ffffff',
                  border: 'none',
                  padding: '13px 32px',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.2s',
                  boxShadow: '0 4px 12px rgba(215, 0, 21, 0.3)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b50012')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
              >
                <span>CONTACT SALES</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: '#d70015',
                  color: '#ffffff',
                  border: 'none',
                  padding: '13px 32px',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.2s',
                  boxShadow: '0 4px 12px rgba(215, 0, 21, 0.3)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b50012')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
              >
                <span>HOW TO BUY</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Right: Modern Illustration Matching Screenshot */}
          <div style={{ textAlign: 'center' }}>
            <img
              src="/images/access-control/contact-banner-illustration.jpg"
              alt="Ready to discuss your needs illustration"
              style={{
                width: '100%',
                maxWidth: '520px',
                height: 'auto',
                display: 'inline-block',
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Sales Modal */}
      {showSalesModal && (
        <ContactSalesModal
          isOpen={showSalesModal}
          onClose={() => setShowSalesModal(false)}
        />
      )}
    </div>
  );
}
