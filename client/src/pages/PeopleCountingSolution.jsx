import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Eye,
  TrendingUp,
  Clock,
  Shield,
  Layers,
  Sparkles,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  BarChart3,
  Sliders,
  Calendar,
  Download,
  FileText,
  Play,
  Maximize2,
  Store,
  Building,
  Activity,
  AlertTriangle,
  Monitor
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

export default function PeopleCountingSolution() {
  const [activeTab, setActiveTab] = useState('traffic'); // 'traffic' | 'queue' | 'capacity'
  const [selectedTech, setSelectedTech] = useState('stereo');
  const [activeArchitectureItem, setActiveArchitectureItem] = useState('camera'); // 'camera' | 'nvr' | 'platform'
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('what-we-offer');

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['what-we-offer', 'key-technology', 'recommended-solution', 'success-stories', 'related-links'];
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
      
      {/* 1. HERO BANNER - FULL WIDTH (HEIGHT 750px) WITH CROWD TRANSIT CORRIDOR & BLUE ORGANIC ARC */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '750px',
          minHeight: '750px',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url('/images/people-counting/hero_banner.jpg')`,
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
            <Users size={18} color="#60a5fa" />
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
            People Counting
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
            High-precision pedestrian footfall analytics, real-time queue dwell monitoring, and space occupancy intelligence to optimize retail operations and venue management.
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
          <span style={{ color: '#1d1d1f', fontWeight: 600 }}>People Counting</span>
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
              People Counting Solution
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              {[
                { id: 'what-we-offer', label: 'What we offer' },
                { id: 'key-technology', label: 'Key technology' },
                { id: 'recommended-solution', label: 'Recommended solution' },
                { id: 'success-stories', label: 'Success stories' },
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
            Hikvision's People Counting Solution provides high-precision pedestrian footfall analytics and queue management, helping retailers and public venues optimize staffing, analyze shopper conversion, and ensure occupancy compliance.
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
            {/* Card 1: Traffic analysis */}
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
                  src="/images/people-counting/offer_icon01.jpg"
                  alt="Traffic Analysis"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
                Traffic analysis & business operation
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Tracks hourly, daily, and seasonal footfall at entrances and interior departments to measure sales conversion rates and align staff schedules with customer volume.
              </p>
            </div>

            {/* Card 2: Queue management */}
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
                  src="/images/people-counting/offer_icon02.jpg"
                  alt="Queue Management"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
                Queue management & dwell control
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Real-time queue monitoring tracks customer waiting durations at checkouts, automatically dispatching staff alerts when line thresholds exceed SLA limits.
              </p>
            </div>

            {/* Card 3: Density detection */}
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
                  src="/images/people-counting/offer_icon03.jpg"
                  alt="Density Detection"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
                Space density & capacity control
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Continuous area headcount calculation synchronizes with entrance digital displays (Green/Red Entry) to maintain fire safety regulations and prevent overcrowding.
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
              3D binocular stereo vision with deep-learning AI algorithms ensures unmatched footfall counting accuracy
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
            {/* Left: Atrium Photo with Floating Technology Badges */}
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
                src="/images/people-counting/key_technology.jpg"
                alt="3D Binocular People Counting Mall Atrium"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                  minHeight: '340px',
                }}
              />

              {/* Floating badges corresponding to technology modes */}
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
                  { id: 'stereo', label: '3D Binocular Stereo Vision', icon: <Eye size={13} color="#2563eb" /> },
                  { id: 'ai', label: 'Deep Learning Head Detection', icon: <Sparkles size={13} color="#d70015" /> },
                  { id: 'height', label: 'Height Filtering (>1.2m)', icon: <Sliders size={13} color="#059669" /> },
                  { id: 'shadow', label: 'Anti-Shadow & Glare Filter', icon: <Shield size={13} color="#7c3aed" /> },
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
                  DEEP LEARNING STEREO VISION
                </span>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 700, color: '#111827', margin: '6px 0 0 0' }}>
                  3D binocular stereo vision
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
                  <Eye size={16} color="#d70015" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#111827', margin: '0 0 4px 0' }}>
                    Dual-lens 3D spatial depth mapping (&gt;98% accuracy)
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.55, margin: 0 }}>
                    Dual high-resolution optical lenses simulate human binocular vision to generate real-time 3D spatial coordinate maps of human heads and shoulders, maintaining over 98% counting accuracy even in high-density crowds.
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
                  <Sliders size={16} color="#0284c7" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#111827', margin: '0 0 4px 0' }}>
                    Non-human object & height filtering
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.55, margin: 0 }}>
                    Intelligent height threshold filtering automatically discounts shopping carts, strollers, rolling luggage, and pets. Shadows, floor reflections, and light fluctuations are entirely filtered out.
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
                  <TrendingUp size={16} color="#059669" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#111827', margin: '0 0 4px 0' }}>
                    Bi-directional tracking & U-turn filtration
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.55, margin: 0 }}>
                    Calculates entrance, exit, and net occupancy in real time. Continuous vector tracking prevents double-counting when visitors pace back and forth or loiter across the threshold line.
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
              Comprehensive architectures for footfall traffic analytics, checkout queue optimization, and building capacity control.
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
              { id: 'traffic', label: 'Traffic management' },
              { id: 'queue', label: 'Queue management' },
              { id: 'capacity', label: 'Capacity & density control' },
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

          {/* TAB 1: TRAFFIC MANAGEMENT */}
          {activeTab === 'traffic' && (
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
                    <li>Measure overall shopper foot traffic across entrances, floors, and flagship zones.</li>
                    <li>Correlate entrance visitor counts with POS registers to calculate conversion rates.</li>
                    <li>Benchmark store performance and window display effectiveness across retail chains.</li>
                    <li>Identify peak hours to optimize sales staffing and cleaning shift rotations.</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', margin: '0 0 14px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={18} color="#059669" />
                    <span>Solution Features</span>
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <li>Bi-directional line-crossing counting with separate IN and OUT metrics.</li>
                    <li>Visual heat maps displaying customer dwell duration and cold/hot merchandise aisles.</li>
                    <li>Customizable automated daily/weekly email reports and POS API integration.</li>
                    <li>Multi-site centralized benchmarking across unlimited branch stores on HikCentral.</li>
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
                {/* Scenario 1: Entrances */}
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
                      src="/images/people-counting/scenario_entrance_counting.jpg"
                      alt="Entrances People Counting"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                      Entrances
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.55 }}>
                      Dual-lens 3D cameras mounted overhead at main sliding doors and glass lobbies accurately count high-density visitor traffic with line-crossing precision.
                    </p>
                  </div>
                </div>

                {/* Scenario 2: Aisle & Store front */}
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
                      src="/images/people-counting/scenario_retail_cashier.jpg"
                      alt="Aisle & Store Front People Counting"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                      Aisle & store front
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.55 }}>
                      Captures pass-by pedestrian volume versus walk-in customers to evaluate window display appeal and product category dwell times.
                    </p>
                  </div>
                </div>
              </div>

              {/* Topology Architecture Diagram with Component Selector */}
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
                      System Architecture: People Counting & Traffic Management
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      HikCentral Professional Retail
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
                      src="/images/people-counting/topology_people_counting.jpg"
                      alt="People Counting System Architecture"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                </div>

                {/* Right: Architecture Product List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px 0' }}>
                    Featured Products
                  </h4>

                  {[
                    {
                      id: 'camera',
                      title: 'Dual-Lens People Counting Camera',
                      model: 'DS-2CD6825G0/C-IVS',
                      desc: 'Dual-lens 3D binocular camera, 98%+ counting accuracy, height filtering, PoE support, and IP66 weatherproofing.',
                    },
                    {
                      id: 'nvr',
                      title: 'DeepinMind Smart NVR',
                      model: 'iDS-96000NXI-I16 Series',
                      desc: 'High-density recording with integrated customer traffic aggregation, POS data overlay, and automated weekly report generation.',
                    },
                    {
                      id: 'platform',
                      title: 'HikCentral Professional Retail Platform',
                      model: 'HCP-Retail Module',
                      desc: 'Unified business intelligence software featuring conversion rate calculators, multi-store traffic comparison, and interactive customer heatmaps.',
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

          {/* TAB 2: QUEUE MANAGEMENT */}
          {activeTab === 'queue' && (
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
                    <Clock size={18} color="#d70015" />
                    <span>Queue Challenges</span>
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <li>Excessive checkout wait times lead to abandoned baskets and customer dissatisfaction.</li>
                    <li>Unpredictable shopper arrivals cause sudden register congestion during peak shifts.</li>
                    <li>Lack of real-time metrics prevents managers from opening extra tills proactively.</li>
                    <li>Inability to measure individual cashier efficiency and transaction service durations.</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', margin: '0 0 14px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Activity size={18} color="#059669" />
                    <span>Queue Management Benefits</span>
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <li>Dual metrics: tracks both queue person headcount and individual dwell duration.</li>
                    <li>Configurable thresholds automatically send instant push alarms to store managers.</li>
                    <li>Service speed auditing benchmarks checkout performance across retail staff.</li>
                    <li>Comprehensive historical wait time logs support predictive staffing schedules.</li>
                  </ul>
                </div>
              </div>

              {/* Queue Scenarios & Topology */}
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
                    src="/images/people-counting/scenario_retail_cashier.jpg"
                    alt="Supermarket Checkout Queue Management"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '20px', backgroundColor: '#ffffff' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
                      Retail cashiers & service counters
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.55 }}>
                      Overhead smart cameras monitor queue lengths across multiple cashiers, automatically alerting supervisors when lines exceed 3 persons.
                    </p>
                  </div>
                </div>

                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
                  <img
                    src="/images/people-counting/topology_queue_management.jpg"
                    alt="Queue Management System Topology"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '20px', backgroundColor: '#ffffff' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
                      Queue management architecture
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.55 }}>
                      Direct linkage with mobile handheld terminals for floor staff, public queue display screens, and central retail operations center.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CAPACITY & DENSITY CONTROL */}
          {activeTab === 'capacity' && (
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
                    <AlertTriangle size={18} color="#d70015" />
                    <span>Safety & Regulatory Needs</span>
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <li>Strict compliance with maximum fire safety building occupancy thresholds.</li>
                    <li>Avoid dangerous stampedes and crowding in shopping malls, event halls, and stadiums.</li>
                    <li>Automated entry gating when current occupancy reaches regulatory limits.</li>
                    <li>Real-time dynamic headcount reports accessible to on-site security marshals.</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', margin: '0 0 14px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Monitor size={18} color="#059669" />
                    <span>Capacity Control Solutions</span>
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <li>Dynamic calculations subtracting exits from entries across all building portals.</li>
                    <li>Digital signage integration showing Green (Entry Allowed) and Red (Please Wait).</li>
                    <li>Multi-door synchronization for complex buildings with dozens of entry points.</li>
                    <li>Instant audio broadcasts and automatic turnstile gating upon capacity breach.</li>
                  </ul>
                </div>
              </div>

              {/* Capacity Scenarios & Topology */}
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
                    src="/images/people-counting/scenario_mall_flow.jpg"
                    alt="Shopping Mall Density Management"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '20px', backgroundColor: '#ffffff' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
                      Shopping malls & convention centers
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.55 }}>
                      Comprehensive flow monitoring across multiple atrium levels, elevators, and corridors guarantees crowd safety during sales events and holiday festivals.
                    </p>
                  </div>
                </div>

                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
                  <img
                    src="/images/people-counting/topology_flow_control.jpg"
                    alt="Flow Control Architecture Topology"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '20px', backgroundColor: '#ffffff' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
                      Capacity flow control topology
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.55 }}>
                      Central controller links all entrance counting cameras with commercial LED displays, sound sirens, and automatic turnstile speed gates.
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
              Real-world deployment of Hikvision intelligent people counting solutions across world-class commercial centers.
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
            {/* Story Image with Play Icon Overlay */}
            <div style={{ position: 'relative', minHeight: '340px', overflow: 'hidden' }}>
              <img
                src="/images/people-counting/success_story_vialia_vigo.png"
                alt="Vialia Vigo Shopping Center People Counting"
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
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.65)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  backdropFilter: 'blur(4px)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                }}
                onClick={() => setShowSalesModal(true)}
              >
                <Play size={24} style={{ marginLeft: '3px' }} fill="#ffffff" />
              </div>
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
                <span>May 15, 2024</span>
                <span>•</span>
                <span style={{ color: '#d70015' }}>Retail & Commercial Hub</span>
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
                Hikvision helps Vialia Vigo Shopping Center boost safety, efficiency and customer satisfaction
              </h3>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#4b5563',
                  lineHeight: 1.65,
                  margin: '0 0 24px 0',
                }}
              >
                Vialia Estación de Vigo in Spain, a massive 120,000 m² multi-modal hub integrating high-speed AVE rail and over 120 retail shops, deployed Hikvision's 3D dual-lens people counting cameras. The system automates real-time crowd density tracking, prevents bottlenecks at transit concourses, and empowers retail tenants with precise foot traffic analytics.
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

      {/* 8. YOU MAY ALSO BE INTERESTED IN */}
      <section id="related-links" style={{ padding: '80px 24px', backgroundColor: '#ffffff' }}>
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
                desc: 'Automated barrier gate management with high-speed ANPR plate verification and vehicle throughput control.',
                image: '/images/people-counting/rel_entrance.jpg',
                link: '/solutions#entrance-exit',
              },
              {
                title: 'Traffic & Store Analytics',
                desc: 'Intelligent retail store video security, checkout line analytics, and multi-branch management.',
                image: '/images/people-counting/rel_store.jpg',
                link: '/solutions/supermarkets',
              },
              {
                title: 'Retail Solutions',
                desc: 'Comprehensive smart retail solutions integrating footfall, heat maps, queue management, and digital signage.',
                image: '/images/people-counting/rel_retail.png',
                link: '/solutions#retail',
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

      {/* 9. BOTTOM BANNER - READY TO DISCUSS YOUR NEEDS */}
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
              Our retail analytics and people counting engineers are ready to design a custom footfall audit solution for your business.
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
              src="/images/people-counting/contact-banner-illustration.jpg"
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
