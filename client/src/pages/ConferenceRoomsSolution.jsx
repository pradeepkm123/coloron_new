import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Mic,
  Video,
  Cast,
  ArrowRight,
  ChevronRight,
  PhoneCall,
  Download,
  Share2,
  Sparkles,
  Users,
  Eye,
  ChevronDown,
  ChevronUp,
  Volume2,
  Layers,
  Laptop,
  Tv,
  Camera,
  AlertCircle
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for 3D Cutaway Conference Room Overview
const conferenceHotspots = [
  {
    id: 'large-room',
    title: 'Large conference room',
    desc: 'Spacious 18-30 person executive conference room equipped with 86" 4K interactive flat panel display, optical bonding whiteboard, dual PTZ tracking cameras, and ceiling beamforming microphone array delivering crystal-clear speech without cable clutter.',
    top: '42%',
    left: '38%',
    device: '86" 4K Interactive Flat Panel & Dual PTZ Camera',
    spec: '86" 4K UHD anti-glare touch screen, 45-point IR touch, dual tracking PTZ cameras, ceiling mic array',
    capacity: '18 - 30 People / 40 - 60 m²',
  },
  {
    id: 'medium-room',
    title: 'Small and medium-sized meeting',
    desc: 'Versatile 5-8 person collaboration space with 65" interactive display, All-in-One video bar with 120° wide-angle camera, beamforming microphones, and driver-free wireless screen-sharing dongle for effortless instant collaboration.',
    top: '60%',
    left: '72%',
    device: 'All-in-One Video Bar & Wireless Presentation Hub',
    spec: '120° FOV 4K camera, 6-mic beamforming array, auto-framing speaker tracking, plug-and-play USB-C',
    capacity: '3 - 8 People / 15 - 20 m²',
  },
];

export default function ConferenceRoomsSolution() {
  const [activeHotspot, setActiveHotspot] = useState(conferenceHotspots[1]);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  // 'standard' or 'ultra' (matches the two tabs in screenshot)
  const [activeTab, setActiveTab] = useState('ultra');

  // Accordions matching the screenshot (Conference cameras & Conference flat panel)
  const [openAccordions, setOpenAccordions] = useState({
    cameras: false,
    flatPanel: true,
  });

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'challenges', 'what-we-offer', 'topology', 'related-links'];
      const scrollPos = window.scrollY + 200;

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
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
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
      {/* 1. HERO SECTION: Exact Panoramic Banner with Left Cyan Glow & Crisp Typography */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '440px',
          height: 'clamp(440px, 44vw, 560px)',
          overflow: 'hidden',
          backgroundColor: '#0a1d37',
        }}
      >
        {/* Background photo of conference room meeting - Official 1920x640 crisp image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('/images/conference_rooms/conference_hero_hik.jpg')`,
            backgroundPosition: 'center right',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Content Overlay */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '0 32px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            {/* Breadcrumb path */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.82rem',
                color: 'rgba(255, 255, 255, 0.85)',
                marginBottom: '16px',
                fontWeight: 500,
              }}
            >
              <Link to="/solutions" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>
                Solutions
              </Link>
              <span>/</span>
              <span>Solutions by Scenario</span>
              <span>/</span>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Conference Rooms</span>
            </div>

            {/* Solutions by Scenario badge with icon */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#ffffff',
                fontSize: '0.98rem',
                fontWeight: 600,
                letterSpacing: '0.01em',
                marginBottom: '12px',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.22)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Monitor size={17} color="#ffffff" />
              </div>
              <span style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Solutions by Scenario</span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                margin: '0 0 12px',
                textShadow: '0 2px 10px rgba(0,0,0,0.35)',
              }}
            >
              Conference Rooms
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)',
                fontWeight: 400,
                color: '#e0f2fe',
                letterSpacing: '-0.01em',
                margin: '0 0 28px',
                textShadow: '0 1px 6px rgba(0,0,0,0.3)',
              }}
            >
              Connect, Communicate, Collaborate.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: '#d70015',
                  color: '#ffffff',
                  border: 'none',
                  padding: '12px 28px',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 6px 16px rgba(215, 0, 21, 0.4)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b50012')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
              >
                <PhoneCall size={16} />
                <span>Get In Touch</span>
              </button>

              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  color: '#1d1d1f',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)')}
              >
                <Download size={16} />
                <span>Download Solution Guide</span>
              </button>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Conference Rooms Solution - Coloron',
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Page link copied to clipboard!');
                  }
                }}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                title="Share this solution"
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY SUB-NAVIGATION BAR */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 40,
          backgroundColor: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
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
            justifyContent: 'space-between',
            overflowX: 'auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', minWidth: 'max-content' }}>
            {[
              { id: 'overview', label: 'Solution overview' },
              { id: 'challenges', label: 'Small and Medium-sized conferencing' },
              { id: 'what-we-offer', label: 'What we offer' },
              { id: 'topology', label: 'System architecture' },
              { id: 'related-links', label: 'You may also be interested in' },
            ].map((nav) => {
              const isActive = activeNav === nav.id;
              return (
                <button
                  key={nav.id}
                  onClick={() => scrollToSection(nav.id)}
                  style={{
                    padding: '16px 0',
                    background: 'none',
                    border: 'none',
                    fontSize: '0.94rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#0071e3' : '#6e6e73',
                    borderBottom: isActive ? '2px solid #0071e3' : '2px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {nav.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setShowSalesModal(true)}
            style={{
              backgroundColor: '#0071e3',
              color: '#ffffff',
              border: 'none',
              padding: '7px 18px',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>Consult Specialist</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </nav>

      {/* 3. SECTION 1: SOLUTION OVERVIEW */}
      <section
        id="overview"
        style={{
          padding: '72px 32px 80px',
          maxWidth: '1360px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2rem, 3vw, 2.5rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            letterSpacing: '-0.02em',
            margin: '0 0 16px',
          }}
        >
          Solution overview
        </h2>

        <p
          style={{
            maxWidth: '920px',
            margin: '0 auto 48px',
            fontSize: '1rem',
            color: '#515154',
            lineHeight: 1.65,
          }}
        >
          Audio and video conferencing has become an everyday necessity for corporate workspaces. However, complicated
          equipment connections and unexpected issues during meetings can severely impact communication efficiency. To
          avoid these issues, our video conferencing solutions provide easy-to-use, efficient, and reliable
          collaboration tools for modern workspaces.
        </p>

        {/* 3D Cutaway Conference Room Complex - Official Crisp 1920x860 Asset */}
        <div
          style={{
            position: 'relative',
            maxWidth: '1100px',
            margin: '0 auto 36px',
            borderRadius: '20px',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
          }}
        >
          <img
            src="/images/conference_rooms/Conference-room-map.jpg"
            alt="3D Cutaway Conference Room Overview"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
            }}
          />

          {/* Interactive clickable Hotspots */}
          {conferenceHotspots.map((spot) => {
            const isSelected = activeHotspot.id === spot.id;
            return (
              <button
                key={spot.id}
                onClick={() => setActiveHotspot(spot)}
                style={{
                  position: 'absolute',
                  top: spot.top,
                  left: spot.left,
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: isSelected ? '#d70015' : 'rgba(255, 255, 255, 0.95)',
                  color: isSelected ? '#ffffff' : '#1d1d1f',
                  border: isSelected ? '2px solid #ffffff' : '1px solid rgba(0,0,0,0.15)',
                  borderRadius: '9999px',
                  padding: '7px 15px',
                  boxShadow: isSelected
                    ? '0 6px 18px rgba(215, 0, 21, 0.45)'
                    : '0 4px 12px rgba(0,0,0,0.15)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  zIndex: 5,
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = '#1d1d1f';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.06)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    e.currentTarget.style.color = '#1d1d1f';
                    e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                  }
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? '#ffffff' : '#d70015',
                  }}
                />
                <span>{spot.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Active Hotspot Detail Card */}
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            backgroundColor: '#f5f7fa',
            borderRadius: '18px',
            padding: '24px 30px',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: '#0071e3',
                letterSpacing: '0.04em',
                marginBottom: '6px',
              }}
            >
              <Sparkles size={14} />
              <span>Selected Conference Zone</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 8px' }}>
              {activeHotspot.title}
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#515154', lineHeight: 1.55, margin: '0 0 8px' }}>
              {activeHotspot.desc}
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#334155', fontWeight: 600 }}>
              <Users size={15} color="#0071e3" />
              <span>Recommended Capacity: {activeHotspot.capacity}</span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '16px 20px',
              borderRadius: '12px',
              border: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              minWidth: '260px',
            }}
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase' }}>
              Core Hardware
            </span>
            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0071e3' }}>
              {activeHotspot.device}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#515154' }}>
              {activeHotspot.spec}
            </span>
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: SMALL AND MEDIUM-SIZED CONFERENCING (CHALLENGES) */}
      <section
        id="challenges"
        style={{
          padding: '64px 32px 72px',
          backgroundColor: '#fafbfc',
          borderTop: '1px solid rgba(0, 0, 0, 0.05)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 2.8vw, 2.3rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              letterSpacing: '-0.02em',
              margin: '0 0 12px',
            }}
          >
            Small and Medium-sized conferencing
          </h2>

          <span
            style={{
              display: 'inline-block',
              fontSize: '0.92rem',
              fontWeight: 700,
              color: '#0071e3',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '14px',
            }}
          >
            Challenges
          </span>

          <p
            style={{
              maxWidth: '880px',
              margin: '0 auto 48px',
              fontSize: '0.98rem',
              color: '#515154',
              lineHeight: 1.6,
            }}
          >
            Meeting rooms are frequently affected by complicated wiring, poor microphone pickup, and clumsy screen
            sharing setups, which cause delays and frustration for meeting participants.
          </p>

          {/* 3 Challenge Problem Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '24px',
              maxWidth: '1100px',
              margin: '0 auto',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '28px 24px',
                border: '1px solid rgba(0, 0, 0, 0.07)',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: '#fee2e2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <AlertCircle size={24} color="#dc2626" />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 8px' }}>
                Cable Clutter & Complex Wiring
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                HDMI, VGA, USB, and 3.5mm audio cords tangled across the meeting table confuse users and waste 10–15
                minutes at the beginning of each session.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '28px 24px',
                border: '1px solid rgba(0, 0, 0, 0.07)',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: '#fef3c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <Mic size={24} color="#d97706" />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 8px' }}>
                Distant Audio & Background Noise
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                Standard laptop mics create reverberation, hollow voice pickup, and capture keyboard clicking, leaving
                remote participants struggling to understand speakers.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '28px 24px',
                border: '1px solid rgba(0, 0, 0, 0.07)',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: '#e0e7ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <Cast size={24} color="#4338ca" />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 8px' }}>
                Clumsy Screen Sharing
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                Complicated wireless dongles requiring software drivers, network permissions, or OS compatibility
                checks disrupt multi-user collaborative brainstorming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: WHAT WE OFFER (Two Tabs matching reference screenshot) */}
      <section
        id="what-we-offer"
        style={{
          padding: '80px 32px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              letterSpacing: '-0.02em',
              margin: '0 0 12px',
            }}
          >
            What we offer
          </h2>
          <p
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              fontSize: '0.98rem',
              color: '#515154',
              lineHeight: 1.6,
            }}
          >
            Easy-to-deploy HD displays for interactive idea sharing and smarter engineering for better audio and video.
          </p>
        </div>

        {/* Two Tabs matching Hikvision screenshot: Standard AV vs Ultra-HD AV */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            marginBottom: '42px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
            paddingBottom: '12px',
          }}
        >
          <button
            onClick={() => setActiveTab('standard')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1rem',
              fontWeight: activeTab === 'standard' ? 700 : 500,
              color: activeTab === 'standard' ? '#d70015' : '#64748b',
              borderBottom: activeTab === 'standard' ? '3px solid #d70015' : '3px solid transparent',
              paddingBottom: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Standard AV conferencing solution
          </button>
          <button
            onClick={() => setActiveTab('ultra')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1rem',
              fontWeight: activeTab === 'ultra' ? 700 : 500,
              color: activeTab === 'ultra' ? '#d70015' : '#64748b',
              borderBottom: activeTab === 'ultra' ? '3px solid #d70015' : '3px solid transparent',
              paddingBottom: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Ultra-HD AV conferencing solution
          </button>
        </div>

        {/* Tab Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1.15fr) minmax(320px, 1fr)',
            gap: '48px',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Left Photo: Ultra-HD vs Standard official asset */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              backgroundColor: '#ffffff',
            }}
          >
            <img
              src={
                activeTab === 'ultra'
                  ? '/images/conference_rooms/Ultra-HD-audio-and-video.jpg'
                  : '/images/conference_rooms/conference_offer_official.jpg'
              }
              alt={activeTab === 'ultra' ? 'Ultra-HD AV Conferencing Solution' : 'Standard AV Conferencing Solution'}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Right Grouped Bullet Checklist matching screenshot */}
          {activeTab === 'ultra' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 8px' }}>
                  Visuals
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', color: '#515154', fontSize: '0.92rem', lineHeight: 1.7 }}>
                  <li>4K Ultra-HD interactive flat panel display with optical bonding</li>
                  <li>Fluid handwriting and whiteboard with OCR annotation tools</li>
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 8px' }}>
                  Wireless
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', color: '#515154', fontSize: '0.92rem', lineHeight: 1.7 }}>
                  <li>Effortless wireless projection without driver installation</li>
                  <li>Instant multi-device split-screen display and touchback control</li>
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 8px' }}>
                  Audio
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', color: '#515154', fontSize: '0.92rem', lineHeight: 1.7 }}>
                  <li>Sound Cube S1 omnidirectional speakerphone with 360° voice pickup</li>
                  <li>Advanced acoustic echo cancellation (AEC) and background noise suppression</li>
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 8px' }}>
                  Collaboration on any platform
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', color: '#515154', fontSize: '0.92rem', lineHeight: 1.7 }}>
                  <li>Native compatibility with Microsoft Teams, Zoom, Cisco Webex, and Google Meet</li>
                  <li>Single USB cable connection linking display, camera, and microphones to laptop</li>
                </ul>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 8px' }}>
                  Simple
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', color: '#515154', fontSize: '0.92rem', lineHeight: 1.7 }}>
                  <li>Convenient and highly professional communication</li>
                  <li>Easy deployment and simple cable connections</li>
                  <li>Driver-free plug-and-play screen sharing from anywhere</li>
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 8px' }}>
                  Efficient and powerful presentation
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', color: '#515154', fontSize: '0.92rem', lineHeight: 1.7 }}>
                  <li>Crisp and powerful wireless presentation</li>
                  <li>Simple and effortless whiteboard collaboration</li>
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 8px' }}>
                  Audience
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', color: '#515154', fontSize: '0.92rem', lineHeight: 1.7 }}>
                  <li>15–20 m² / 3–8 people capacity</li>
                  <li>120° wide-angle view camera covering all participants</li>
                  <li>Compact, all-in-one design with integrated camera, 6-mic array, and speaker</li>
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 8px' }}>
                  Conference on your favorite app
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', color: '#515154', fontSize: '0.92rem', lineHeight: 1.7 }}>
                  <li>All-in-one plug-and-play USB connection</li>
                  <li>Certified compatibility with Zoom, Microsoft Teams, Cisco Webex, and Google Meet</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. SECTION 4: MEETING ROOM SYSTEM TOPOLOGY & ACCORDIONS */}
      <section
        id="topology"
        style={{
          padding: '72px 32px 80px',
          backgroundColor: '#fafbfc',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3vw, 2.4rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.02em',
                margin: '0 0 12px',
              }}
            >
              Meeting Room Architecture & System Topology
            </h2>
            <p
              style={{
                maxWidth: '780px',
                margin: '0 auto',
                fontSize: '0.96rem',
                color: '#515154',
                lineHeight: 1.6,
              }}
            >
              Simplified single-cable and wireless topology connecting the wall-mounted interactive flat panel display
              with the central soundbar / speakerphone, laptop projection hub, and attendee seating.
            </p>
          </div>

          <div
            className="topology-accordion-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 1.15fr) minmax(320px, 1fr)',
              gap: '40px',
              alignItems: 'start',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {/* Left: Meeting Room Table Topology - Official 85KB razor-sharp diagram */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={
                  activeTab === 'ultra'
                    ? '/images/conference_rooms/Ultra-HD-topology.jpg'
                    : '/images/conference_rooms/conference_topo_official.jpg'
                }
                alt="Conference Room Architecture Topology"
                style={{
                  width: '100%',
                  maxHeight: '480px',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>

            {/* Right: Expandable Product Accordions (Matching Hikvision screenshot) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Accordion 1: Conference cameras */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                }}
              >
                <button
                  onClick={() => toggleAccordion('cameras')}
                  style={{
                    width: '100%',
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: '#dcfce7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Camera size={20} color="#16a34a" />
                    </div>
                    <span style={{ fontSize: '1.02rem', fontWeight: 700, color: '#1d1d1f' }}>
                      Conference cameras
                    </span>
                  </div>
                  {openAccordions.cameras ? <ChevronUp size={20} color="#64748b" /> : <ChevronDown size={20} color="#64748b" />}
                </button>

                {openAccordions.cameras && (
                  <div style={{ padding: '0 22px 20px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                    <p style={{ fontSize: '0.88rem', color: '#515154', lineHeight: 1.6, margin: '12px 0' }}>
                      Ultra HD 4K conference cameras (UC8 series and PTZ cameras) with intelligent speaker auto-framing,
                      120° wide-angle optical lens, and digital pan-tilt-zoom capturing every in-room participant clearly.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      <span style={{ fontSize: '0.78rem', backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', color: '#475569' }}>
                        4K Ultra-HD Sensor
                      </span>
                      <span style={{ fontSize: '0.78rem', backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', color: '#475569' }}>
                        Auto Speaker Tracking
                      </span>
                      <span style={{ fontSize: '0.78rem', backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', color: '#475569' }}>
                        120° Ultra-Wide FOV
                      </span>
                      <span style={{ fontSize: '0.78rem', backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', color: '#475569' }}>
                        USB 3.0 Plug & Play
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 2: Conference flat panel */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                }}
              >
                <button
                  onClick={() => toggleAccordion('flatPanel')}
                  style={{
                    width: '100%',
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: '#e0f2fe',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Tv size={20} color="#0071e3" />
                    </div>
                    <span style={{ fontSize: '1.02rem', fontWeight: 700, color: '#1d1d1f' }}>
                      Conference flat panel
                    </span>
                  </div>
                  {openAccordions.flatPanel ? <ChevronUp size={20} color="#64748b" /> : <ChevronDown size={20} color="#64748b" />}
                </button>

                {openAccordions.flatPanel && (
                  <div style={{ padding: '0 22px 20px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                    <p style={{ fontSize: '0.88rem', color: '#515154', lineHeight: 1.6, margin: '12px 0' }}>
                      Ultra-responsive 4K UHD interactive flat panel display featuring 45-point infrared touch, optical
                      bonding technology, anti-glare scratch-resistant glass, and dual Windows/Android operating systems.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      <span style={{ fontSize: '0.78rem', backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', color: '#475569' }}>
                        65" / 75" / 86" Sizes
                      </span>
                      <span style={{ fontSize: '0.78rem', backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', color: '#475569' }}>
                        45-point IR Touch
                      </span>
                      <span style={{ fontSize: '0.78rem', backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', color: '#475569' }}>
                        Optical Bonding
                      </span>
                      <span style={{ fontSize: '0.78rem', backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', color: '#475569' }}>
                        Dual OS OPS Slot
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: YOU MAY ALSO BE INTERESTED IN (Exact Cards from Screenshot) */}
      <section
        id="related-links"
        style={{
          padding: '72px 32px 80px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '42px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              letterSpacing: '-0.02em',
              margin: '0 0 10px',
            }}
          >
            You may also be interested in
          </h2>
          <p style={{ fontSize: '0.94rem', color: '#6e6e73', margin: 0 }}>
            Complementary intelligent collaboration and smart education hardware.
          </p>
        </div>

        {/* 3 Related Cards with Official Crisp Images */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {/* Card 1: Webcam */}
          <Link
            to="/products"
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              textDecoration: 'none',
              height: '240px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '24px',
              boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.06)';
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url('/images/conference_rooms/webcam_series.jpg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundColor: '#1e293b',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.85) 100%)',
              }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: '0 0 6px' }}>
                Webcam
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#e2e8f0', margin: 0, lineHeight: 1.4 }}>
                Bridge any distance
              </p>
            </div>
          </Link>

          {/* Card 2: Speakerphone */}
          <Link
            to="/products"
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              textDecoration: 'none',
              height: '240px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '24px',
              boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.06)';
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url('/images/conference_rooms/speakerphone.jpg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundColor: '#cbd5e1',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.85) 100%)',
              }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: '0 0 6px' }}>
                Speakerphone
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#e2e8f0', margin: 0, lineHeight: 1.4 }}>
                Acoustic Echo Cancellation Wireless Conference Hub
              </p>
            </div>
          </Link>

          {/* Card 3: Distance Learning */}
          <Link
            to="/solutions/classroom-hub"
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              textDecoration: 'none',
              height: '240px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '24px',
              boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.06)';
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url('/images/conference_rooms/distance_learning.jpg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundColor: '#334155',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.85) 100%)',
              }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: '0 0 6px' }}>
                Distance Learning
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#e2e8f0', margin: 0, lineHeight: 1.4 }}>
                Interactive Classrooms & Hybrid Education
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* 8. SECTION 6: READY TO DISCUSS YOUR NEEDS (CTA + SPECIALIST ILLUSTRATION) */}
      <section
        style={{
          padding: '80px 32px',
          backgroundColor: '#fafbfc',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '48px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left CTA text & Action Buttons */}
          <div style={{ flex: 1, minWidth: '320px', maxWidth: '640px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.4vw, 3rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                margin: '0 0 16px',
              }}
            >
              Ready to discuss your needs?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#515154',
                lineHeight: 1.6,
                margin: '0 0 36px',
              }}
            >
              Schedule a personalized conference room audio-video consultation with our enterprise collaboration
              architects. We will design the optimal display, soundbar, and screen-sharing setup for your office layout.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: '#d70015',
                  color: '#ffffff',
                  border: 'none',
                  padding: '14px 34px',
                  borderRadius: '9999px',
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  boxShadow: '0 6px 18px rgba(215, 0, 21, 0.35)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#b50012';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#d70015';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                CONTACT SALES TEAM
              </button>

              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#d70015',
                  border: '1.5px solid #d70015',
                  padding: '14px 34px',
                  borderRadius: '9999px',
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff5f5';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                REQUEST A QUOTE
              </button>

              <Link
                to="/solutions"
                style={{
                  backgroundColor: '#1d1d1f',
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '14px 34px',
                  borderRadius: '9999px',
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#000000';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1d1d1f';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                EXPLORE MORE SOLUTIONS
              </Link>
            </div>
          </div>

          {/* Right Specialist Illustration */}
          <div
            style={{
              flex: 1,
              minWidth: '280px',
              maxWidth: '440px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="/images/car_dealerships/discuss_illustration.png"
              alt="Consultant Ready to Discuss Your Conference Room Needs"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Sales Modal */}
      {showSalesModal && (
        <ContactSalesModal
          solutionName="Conference Rooms AV Collaboration Solution"
          onClose={() => setShowSalesModal(false)}
        />
      )}

      <style>{`
        @media (max-width: 860px) {
          .topology-accordion-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </div>
  );
}
