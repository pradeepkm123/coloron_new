import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  Shield,
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
  AlertCircle
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

export default function TimeAttendanceSolution() {
  const [activeTab, setActiveTab] = useState('small'); // 'small' | 'enterprise'
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('what-we-offer');

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['what-we-offer', 'key-technology', 'recommended-solution', 'architecture', 'related-links'];
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
      
      {/* 1. HERO BANNER - FULL WIDTH WITH AUTHENTIC HIKVISION OFFICE & BLUE ARC */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '750px',
          minHeight: '750px',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url('/images/time-attendance/hero_banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
        }}
      >
        {/* Soft atmospheric gradient for text readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '100%',
            maxWidth: '820px',
            background: 'linear-gradient(105deg, rgba(16, 52, 120, 0.94) 0%, rgba(20, 68, 145, 0.90) 44%, rgba(28, 88, 175, 0.78) 65%, rgba(35, 110, 210, 0.35) 86%, transparent 100%)',
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
            <Clock size={17} color="#60a5fa" />
            <span>Solutions by Function</span>
          </div>

          {/* Hero Title */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              margin: '0 0 16px 0',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Time & Attendance
          </h1>

          {/* Hero Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.92)',
              maxWidth: '560px',
              lineHeight: 1.55,
              margin: '0 0 28px 0',
              fontWeight: 400,
            }}
          >
            Accurate, flexible, and contactless workforce attendance, biometric clock-in, and automated shift scheduling.
          </p>

          {/* Hero CTA Button */}
          <div>
            <button
              onClick={() => setShowSalesModal(true)}
              style={{
                backgroundColor: '#d70015',
                color: '#ffffff',
                border: 'none',
                padding: '12px 28px',
                borderRadius: '4px',
                fontSize: '0.98rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(215, 0, 21, 0.4)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b50012')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
            >
              <span>Contact an Expert</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. SUB-BREADCRUMB & STICKY SUB-NAVIGATION BAR */}
      <div
        style={{
          backgroundColor: '#f5f5f7',
          borderBottom: '1px solid #e5e5ea',
          fontSize: '0.85rem',
          color: '#86868b',
          padding: '8px 24px',
        }}
      >
        <div style={{ maxWidth: '1380px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link to="/" style={{ color: '#515154', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <Link to="/solutions" style={{ color: '#515154', textDecoration: 'none' }}>Solutions</Link>
          <ChevronRight size={13} />
          <span style={{ color: '#515154' }}>Solutions by Function</span>
          <ChevronRight size={13} />
          <span style={{ color: '#1d1d1f', fontWeight: 600 }}>Time & Attendance</span>
        </div>
      </div>

      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 40,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e5e5ea',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
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
            overflowX: 'auto',
          }}
        >
          <div style={{ fontWeight: 700, fontSize: '1rem', color: '#1d1d1f', padding: '16px 0', whiteSpace: 'nowrap', marginRight: '32px' }}>
            Time & Attendance Solution
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px', whiteSpace: 'nowrap' }}>
            {[
              { id: 'what-we-offer', label: 'What we offer' },
              { id: 'key-technology', label: 'Key technology' },
              { id: 'recommended-solution', label: 'Recommended solution' },
              { id: 'architecture', label: 'System architecture' },
              { id: 'related-links', label: 'You may also be interested in' },
            ].map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(nav.id);
                  setActiveNav(nav.id);
                }}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: activeNav === nav.id ? 600 : 500,
                  color: activeNav === nav.id ? '#d70015' : '#515154',
                  padding: '16px 0',
                  borderBottom: activeNav === nav.id ? '2px solid #d70015' : '2px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {nav.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setShowSalesModal(true)}
            style={{
              backgroundColor: '#d70015',
              color: '#ffffff',
              border: 'none',
              padding: '7px 18px',
              borderRadius: '4px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              flexShrink: 0,
              marginLeft: '20px'
            }}
          >
            Contact us
          </button>
        </div>
      </nav>

      {/* 3. SECTION: WHAT WE OFFER (Matches Screenshot Tiers) */}
      <section id="what-we-offer" style={{ padding: '72px 24px', maxWidth: '1380px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 52px auto' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '18px' }}>
            What we offer
          </h2>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: '#4b5563', margin: '0 0 16px 0' }}>
            Coloron’s Time & Attendance Solution simplifies and modernizes corporate and SMB workforce time management. The solution integrates contactless biometric authentication, automated shift scheduling, mobile clock-in, and centralized multi-branch attendance reporting across diverse industries.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: '#6b7280', margin: 0 }}>
            From standalone retail storefronts needing zero-server simplicity to multi-building corporate campuses requiring ERP payroll integration, Coloron provides agile, modular deployments.
          </p>
        </div>

        {/* 2 Tier Options: Small Scale vs Medium & Large Scale */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px', maxWidth: '960px', margin: '0 auto' }}>
          
          {/* Card 1: Small Scale Attendance */}
          <div
            onClick={() => {
              setActiveTab('small');
              scrollToSection('recommended-solution');
            }}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '36px 32px',
              border: activeTab === 'small' ? '2px solid #0071e3' : '1px solid #e5e7eb',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.05)',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 113, 227, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.05)';
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '16px',
                backgroundColor: '#eff6ff',
                color: '#0071e3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <Store size={36} />
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '10px' }}>
              Small Scale Attendance
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '20px' }}>
              For boutiques, cafes, clinics, and branch offices. Standalone Wi-Fi MinMoe terminals connected to Coloron Cloud for direct smartphone management without local servers.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0071e3', fontWeight: 600, fontSize: '0.88rem' }}>
              <span>View SMB Solution</span>
              <ChevronRight size={16} />
            </div>
          </div>

          {/* Card 2: Medium & Large Scale Attendance */}
          <div
            onClick={() => {
              setActiveTab('enterprise');
              scrollToSection('recommended-solution');
            }}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '36px 32px',
              border: activeTab === 'enterprise' ? '2px solid #0071e3' : '1px solid #e5e7eb',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.05)',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 113, 227, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.05)';
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '16px',
                backgroundColor: '#fef2f2',
                color: '#d70015',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <Building size={36} />
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '10px' }}>
              Medium & Large Scale Attendance
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '20px' }}>
              For enterprise headquarters, factories, schools, and distributed chains. Centralized HikCentral management, biometric turnstiles, and automated payroll API integration.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#d70015', fontWeight: 600, fontSize: '0.88rem' }}>
              <span>View Enterprise Solution</span>
              <ChevronRight size={16} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: KEY TECHNOLOGY (Matches Screenshot Biometric Methods) */}
      <section id="key-technology" style={{ backgroundColor: '#f9fafb', padding: '72px 24px', borderTop: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px auto' }}>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '14px' }}>
              Key technology
            </h2>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.6, color: '#4b5563', margin: 0 }}>
              Deep learning computer vision and multi-modal authentication deliver lightning-speed verification while stopping spoofing attempts.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '48px', alignItems: 'center' }}>
            {/* Left: Authentic Feature Photo with Floating Verification Badges */}
            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}>
              <img
                src="/images/time-attendance/biometric_face_terminal.jpg"
                alt="MinMoe Face Recognition Time Attendance Terminal"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />

              {/* Floating Verification Badges */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {[
                  { label: 'Face Recognition', icon: <Eye size={14} color="#0071e3" /> },
                  { label: 'Fingerprint', icon: <Fingerprint size={14} color="#059669" /> },
                  { label: 'Mobile QR Code', icon: <QrCode size={14} color="#702082" /> },
                  { label: 'RFID Card', icon: <CreditCard size={14} color="#d70015" /> },
                ].map((badge, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.94)',
                      backdropFilter: 'blur(8px)',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: '#111827',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    {badge.icon}
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '16px 20px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                  color: '#ffffff',
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>MinMoe Biometric Recognition Terminal</div>
                <div style={{ fontSize: '0.82rem', color: '#e5e7eb' }}>&lt; 0.2s Touchless Verification &bull; 99%+ Recognition Accuracy</div>
              </div>
            </div>

            {/* Right: Key Biometric Features */}
            <div>
              <div style={{ marginBottom: '28px' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#111827', marginBottom: '14px', lineHeight: 1.3 }}>
                  Biometric authentication methods
                </h3>
                <p style={{ fontSize: '0.98rem', color: '#4b5563', lineHeight: 1.65 }}>
                  Coloron's MinMoe series terminals utilize high-performance deep learning algorithms to provide touchless, instantaneous identification, ensuring smooth shift handovers with absolute identity certainty.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                {[
                  {
                    title: 'Ultra-Fast 0.2s Face Verification',
                    desc: 'Deep learning facial recognition verifies staff in less than 0.2 seconds at distances up to 3 meters, preventing entrance bottlenecks during peak shift changes.',
                  },
                  {
                    title: 'Deep Learning Anti-Spoofing Algorithm',
                    desc: 'Dual-lens stereo camera with infrared depth measurement detects live tissue, totally blocking fraud attempts using printed photographs, phone video playbacks, or 3D masks.',
                  },
                  {
                    title: 'Multi-Modal Identification Options',
                    desc: 'Accommodates every employee preference with face, fingerprint, RFID card, PIN, and dynamic smartphone Bluetooth / QR code credentials in a single terminal.',
                  },
                  {
                    title: 'WDR Low-Light & Backlight Performance',
                    desc: '120dB Wide Dynamic Range lenses maintain 99%+ accuracy even when mounted directly facing strong daylight glass storefronts or under dim ambient hallway lights.',
                  },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        minWidth: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: '#eff6ff',
                        color: '#0071e3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '2px',
                      }}
                    >
                      <Check size={15} strokeWidth={2.5} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#111827', marginBottom: '2px' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.55 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: '#0071e3',
                  color: '#ffffff',
                  border: 'none',
                  padding: '11px 26px',
                  borderRadius: '4px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.2s ease',
                  boxShadow: '0 4px 12px rgba(0, 113, 227, 0.3)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0077ed')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0071e3')}
              >
                <span>Select Attendance Hardware</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: RECOMMENDED SOLUTION (Matches Screenshot Tabs & Scenarios) */}
      <section id="recommended-solution" style={{ padding: '72px 24px', maxWidth: '1380px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px auto' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '14px' }}>
            Recommended solution
          </h2>
          
          {/* Solution Tabs */}
          <div style={{ display: 'inline-flex', backgroundColor: '#f3f4f6', padding: '4px', borderRadius: '8px', marginTop: '12px' }}>
            <button
              onClick={() => setActiveTab('small')}
              style={{
                backgroundColor: activeTab === 'small' ? '#ffffff' : 'transparent',
                color: activeTab === 'small' ? '#d70015' : '#6b7280',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '6px',
                fontSize: '0.92rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: activeTab === 'small' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              Small Scale Management
            </button>
            <button
              onClick={() => setActiveTab('enterprise')}
              style={{
                backgroundColor: activeTab === 'enterprise' ? '#ffffff' : 'transparent',
                color: activeTab === 'enterprise' ? '#d70015' : '#6b7280',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '6px',
                fontSize: '0.92rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: activeTab === 'enterprise' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              Medium & Large Scale Management
            </button>
          </div>
        </div>

        {/* Tab 1 Content: Small Scale Management */}
        {activeTab === 'small' && (
          <div>
            {/* Overview bullets */}
            <div style={{ maxWidth: '900px', margin: '0 auto 40px auto', backgroundColor: '#f9fafb', padding: '24px 32px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: '#111827', marginBottom: '12px' }}>
                Small Scale Solution Highlights:
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.7 }}>
                <li><strong>No local server required:</strong> Standalone MinMoe terminals connect via Wi-Fi to Coloron Cloud.</li>
                <li><strong>Mobile clock-in & check:</strong> Managers schedule shifts and view real-time clock-in records anytime via mobile app.</li>
                <li><strong>Hygienic touchless clock-in:</strong> Avoids cross-contamination and works reliably with face masks.</li>
                <li><strong>One-click export:</strong> Generates formatted Excel payroll and overtime reports in seconds.</li>
              </ul>
            </div>

            {/* 2 Scenario Cards: Small Restaurants & Shops */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '32px', marginBottom: '56px' }}>
              {/* Card 1: Small Restaurants */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src="/images/time-attendance/scenario_small_restaurant.jpg"
                    alt="Small Restaurants & Cafes Time Attendance"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: 'rgba(0,0,0,0.75)',
                      color: '#ffffff',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                    }}
                  >
                    FOOD & BEVERAGE
                  </div>
                </div>

                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '10px' }}>
                    Small Restaurants & Cafes
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                    Hygienic hands-free authentication for kitchen and waiting staff with wet or flour-covered hands. Shift scheduling adapts effortlessly to split shifts and hourly part-time servers.
                  </p>
                  <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 500 }}>MinMoe DS-K1T341 • Wi-Fi Enabled</span>
                    <button
                      onClick={() => setShowSalesModal(true)}
                      style={{ background: 'none', border: 'none', color: '#d70015', fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      Learn more <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2: Shops & Retail */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src="/images/time-attendance/scenario_retail_shop.jpg"
                    alt="Shops & Retail Boutiques Time Attendance"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: 'rgba(0,0,0,0.75)',
                      color: '#ffffff',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                    }}
                  >
                    RETAIL & STORES
                  </div>
                </div>

                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '10px' }}>
                    Shops & Retail Boutiques
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                    Eliminates buddy punching across retail chains. Store owners track punctuality across multiple locations from a single mobile dashboard with automated monthly payroll summaries.
                  </p>
                  <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 500 }}>MinMoe DS-K1T343 • Cloud Sync</span>
                    <button
                      onClick={() => setShowSalesModal(true)}
                      style={{ background: 'none', border: 'none', color: '#d70015', fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      Learn more <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2 Content: Enterprise Management */}
        {activeTab === 'enterprise' && (
          <div>
            <div style={{ maxWidth: '900px', margin: '0 auto 40px auto', backgroundColor: '#f9fafb', padding: '24px 32px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: '#111827', marginBottom: '12px' }}>
                Enterprise & Large Scale Highlights:
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.7 }}>
                <li><strong>Unified HikCentral Platform:</strong> Centralized management of up to 100,000 users and 1,024 turnstiles.</li>
                <li><strong>Complex Shift Scheduling:</strong> Supports rotating shifts, flex-time, night shifts, and holiday overtime rules.</li>
                <li><strong>Access Control Synergy:</strong> Integrates speed gates, biometric door locks, and CCTV video verification.</li>
                <li><strong>RESTful API & Database Integration:</strong> Direct sync with SAP, Oracle, Workday, and standard SQL payroll systems.</li>
              </ul>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '32px', marginBottom: '56px' }}>
              {/* Enterprise Offices */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: '14px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <div style={{ height: '260px', overflow: 'hidden' }}>
                  <img src="/images/scenarios/offices.jpg" alt="Enterprise Headquarters" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '28px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '10px' }}>
                    Corporate Headquarters & Offices
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '20px' }}>
                    Flawless multi-floor turnstile throughput with MinMoe face recognition speed gates, elevator destination dispatch, and mobile visitor pass integration.
                  </p>
                  <button onClick={() => setShowSalesModal(true)} style={{ background: 'none', border: 'none', color: '#d70015', fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Explore Headquarters Solution <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Enterprise Factories */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: '14px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <div style={{ height: '260px', overflow: 'hidden' }}>
                  <img src="/images/scenarios/warehouses.jpg" alt="Manufacturing Campus" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '28px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '10px' }}>
                    Manufacturing Plants & Industrial Campuses
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '20px' }}>
                    Manages thousands of rotating assembly line workers across three shifts, automated overtime logging, and perimeter turnstile verification.
                  </p>
                  <button onClick={() => setShowSalesModal(true)} style={{ background: 'none', border: 'none', color: '#d70015', fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Explore Manufacturing Solution <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 6. SYSTEM ARCHITECTURE (Matches Screenshot Topology Diagram) */}
        <div id="architecture" style={{ backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '40px 32px', maxWidth: '1000px', margin: '0 auto', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
              System Architecture Topology
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0 }}>
              End-to-end communication flow between management devices, cloud server, and edge recognition terminals.
            </p>
          </div>

          {/* Interactive Topology Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            
            {/* Layer 1: Admin PC & Mobile App */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', width: '100%' }}>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', minWidth: '220px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#0071e3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Server size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#111827' }}>Web / PC Portal</div>
                  <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Shift & Rule Config</div>
                </div>
              </div>

              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', minWidth: '220px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#fef2f2', color: '#d70015', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Smartphone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#111827' }}>Smartphone App</div>
                  <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Mobile Punch & Leave</div>
                </div>
              </div>
            </div>

            {/* Connecting Line 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '2px', height: '24px', backgroundColor: '#cbd5e1' }} />
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, backgroundColor: '#f1f5f9', padding: '2px 8px', borderRadius: '10px' }}>
                HTTPS / TLS Encryption
              </div>
              <div style={{ width: '2px', height: '24px', backgroundColor: '#cbd5e1' }} />
            </div>

            {/* Layer 2: Cloud Platform */}
            <div style={{ backgroundColor: '#ffffff', border: '2px solid #0071e3', borderRadius: '14px', padding: '20px 40px', display: 'flex', alignItems: 'center', gap: '18px', boxShadow: '0 4px 16px rgba(0, 113, 227, 0.1)', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#eff6ff', color: '#0071e3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Cloud size={26} />
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#111827' }}>Coloron Cloud / Hik-Connect Core</div>
                <div style={{ fontSize: '0.82rem', color: '#6b7280' }}>Zero On-Prem Server &bull; Automated Attendance Engine &bull; AWS / Azure Hosted</div>
              </div>
            </div>

            {/* Connecting Line 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '2px', height: '24px', backgroundColor: '#cbd5e1' }} />
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, backgroundColor: '#f1f5f9', padding: '2px 8px', borderRadius: '10px' }}>
                Wi-Fi / Ethernet PoE
              </div>
              <div style={{ width: '2px', height: '24px', backgroundColor: '#cbd5e1' }} />
            </div>

            {/* Layer 3: Edge Terminals */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px 32px', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', maxWidth: '520px', width: '100%' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '10px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Eye size={28} color="#0071e3" />
              </div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#111827' }}>MinMoe Face Recognition Terminals</div>
                <div style={{ fontSize: '0.82rem', color: '#6b7280', lineHeight: 1.5 }}>
                  DS-K1T341 / DS-K1T673 Series &bull; Live Anti-Spoofing &bull; 0.2s Verification
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: YOU MAY ALSO BE INTERESTED IN (Matches Screenshot 3 Cards) */}
      <section id="related-links" style={{ backgroundColor: '#f9fafb', padding: '72px 24px', borderTop: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1d1d1f', margin: 0 }}>
              You may also be interested in
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              {
                title: 'Visitor Management',
                subtitle: 'Streamline reception with self-service kiosk check-in, host alerts, and automated QR elevator passes.',
                image: '/images/time-attendance/visitor_management.jpg',
                link: '/solutions/offices',
              },
              {
                title: 'Offices',
                subtitle: 'Unified smart office solutions featuring ANPR parking, biometric speed gates, and 4K meeting room displays.',
                image: '/images/scenarios/offices.jpg',
                link: '/solutions/offices',
              },
              {
                title: 'Education',
                subtitle: 'Safe campus student attendance, dormitory turnstiles, and automated SMS notifications for parents.',
                image: '/images/industry_education.jpg',
                link: '/solutions/schools',
              },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.link}
                style={{
                  textDecoration: 'none',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)';
                }}
              >
                <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '16px',
                    }}
                  >
                    <h4 style={{ color: '#ffffff', margin: 0, fontSize: '1.2rem', fontWeight: 700 }}>
                      {item.title}
                    </h4>
                  </div>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <p style={{ margin: '0 0 16px 0', fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.5 }}>
                    {item.subtitle}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d70015', fontWeight: 600, fontSize: '0.88rem' }}>
                    <span>Explore Solution</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. READY TO DISCUSS YOUR NEEDS (Bottom Call-to-Action) */}
      <section
        style={{
          backgroundColor: '#f5f5f7',
          padding: '70px 24px',
          borderTop: '1px solid #e5e5ea',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '16px' }}>
            Ready to discuss your needs?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '32px' }}>
            Contact our certified workforce management architects to configure the ideal attendance and access control deployment for your business.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
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
              <span>CONTACT AN EXPERT</span>
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
