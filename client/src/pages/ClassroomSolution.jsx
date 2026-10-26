import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  MapPin,
  GraduationCap,
  Building,
  Video,
  Layers,
  FileText,
  ChevronRight,
  PhoneCall,
  Check,
  AlertCircle,
  Clock,
  Tv,
  Mic,
  Cast,
  Download,
  Share2,
  Sparkles,
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for the 3D School Classroom Complex
const classroomHotspots = [
  {
    id: 'interactive-room',
    title: 'In-Class Interactive Room',
    desc: '4K Ultra HD anti-glare interactive touch displays, dual-pen writing, and 4-way wireless screen projection.',
    top: '25%',
    left: '33%',
    device: '4K Interactive Flat Panel (86")',
  },
  {
    id: 'hybrid-auditing',
    title: 'Hybrid Lecture Auditing',
    desc: 'Auto-tracking AI presenter camera following teacher movements with ceiling beamforming microphone arrays.',
    top: '22%',
    left: '53%',
    device: 'Presenter Tracking PTZ Camera',
  },
  {
    id: 'teacher-prep',
    title: 'Teacher Preparation Office',
    desc: 'Curriculum cloud synchronization, automated assignment grading station, and interactive lesson builder.',
    top: '60%',
    left: '49%',
    device: 'Interactive Workstation',
  },
  {
    id: 'lecture-hall',
    title: 'Multi-Function Lecture Hall',
    desc: 'Large-scale auditorium LED video walls, wireless conference mics, and campus-wide broadcasting matrix.',
    top: '56%',
    left: '72%',
    device: 'Auditorium Video Matrix',
  },
];

// Recommended Hardware Deck
const recommendedProducts = [
  {
    name: 'Interactive Flat Panel 86"',
    code: 'DS-D5B86RB/D',
    category: 'Touch Display',
    desc: '4K UHD optical bonding display, 40-point touch, dual OS (Android/Windows), built-in 48MP camera and mic array.',
    icon: <Tv size={24} color="#d70015" />,
  },
  {
    name: 'Classroom Tracking PTZ',
    code: 'DS-2DE4425IW-DE',
    category: 'Auto-Tracking Camera',
    desc: 'AI dual-lens camera with presenter auto-framing, blackboard zoom, and zero-distortion panoramic student view.',
    icon: <Video size={24} color="#0071e3" />,
  },
  {
    name: 'Ceiling Array Microphone',
    code: 'DS-2DC8A840',
    category: 'Classroom Audio',
    desc: '8-meter 360° voice pickup with deep learning acoustic echo cancellation and background noise suppression.',
    icon: <Mic size={24} color="#34c759" />,
  },
  {
    name: 'Wireless Screen Dongle',
    code: 'DS-D5AS-W',
    category: 'Connectivity',
    desc: 'One-click USB/Type-C screen casting from Mac, Windows, Chromebook, iPad, and smartphones with zero latency.',
    icon: <Cast size={24} color="#ff9500" />,
  },
  {
    name: 'HikCentral Education Suite',
    code: 'VMS-HCP-EDU',
    category: 'Management Platform',
    desc: 'Centralized cloud management for classroom attendance, remote lecture recording, and campus digital signage.',
    icon: <Layers size={24} color="#af52de" />,
  },
];

export default function ClassroomSolution() {
  const [activeHotspot, setActiveHotspot] = useState(classroomHotspots[0]);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'in-class-apps', 'what-we-offer', 'resources', 'related-links'];
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
    setActiveNav(id);
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
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        color: '#1d1d1f',
      }}
    >
      {/* 1. HERO BANNER (Modern Classroom Panoramic matching screenshot) */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(440px, 42vw, 560px)',
          minHeight: '400px',
          overflow: 'hidden',
          backgroundColor: '#0a0a0c',
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('/images/classroom/classroom-hub-banner-pc.jpg')`,
            backgroundPosition: 'center right',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Subtle Dark Gradient Overlay on Left to ensure white text readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.35) 35%, rgba(0, 0, 0, 0.05) 60%, rgba(0,0,0,0) 80%)',
            pointerEvents: 'none',
          }}
        />

        {/* Content Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1360px',
            height: '100%',
            margin: '0 auto',
            padding: '0 clamp(24px, 5vw, 64px)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            {/* Breadcrumb Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#ffffff',
                fontSize: '0.92rem',
                fontWeight: 600,
                letterSpacing: '0.02em',
                marginBottom: '14px',
                textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                }}
              />
              <span>Solutions by Scenario</span>
            </div>

            {/* Main Title */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                margin: '0 0 16px',
                textShadow: '0 3px 18px rgba(0,0,0,0.5)',
              }}
            >
              Classroom hub
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 400,
                lineHeight: 1.45,
                margin: '0 0 28px',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                maxWidth: '560px',
              }}
            >
              Inspiring educational spaces with 4K interactive flat panels, automated presenter tracking, and wireless hybrid classroom connectivity.
            </p>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => setShowSalesModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#d70015',
                color: '#ffffff',
                padding: '12px 30px',
                borderRadius: '9999px',
                fontSize: '0.96rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(215, 0, 21, 0.4)',
                transition: 'transform 0.2s ease, background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b70012';
                e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d70015';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span>Contact Solution Expert</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. STICKY SUBNAV BAR (Matching Screenshot Navigation) */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 40,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          padding: '0 24px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {[
              { id: 'overview', label: 'Solution overview' },
              { id: 'in-class-apps', label: 'In-class applications' },
              { id: 'what-we-offer', label: 'What we offer' },
              { id: 'resources', label: 'Related Resources' },
              { id: 'related-links', label: 'Related links' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: activeNav === item.id ? '2px solid #d70015' : '2px solid transparent',
                  color: activeNav === item.id ? '#d70015' : '#6e6e73',
                  fontSize: '0.92rem',
                  fontWeight: activeNav === item.id ? 600 : 500,
                  padding: '16px 0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeNav !== item.id) e.currentTarget.style.color = '#1d1d1f';
                }}
                onMouseLeave={(e) => {
                  if (activeNav !== item.id) e.currentTarget.style.color = '#6e6e73';
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShowSalesModal(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#1d1d1f',
              color: '#ffffff',
              padding: '7px 18px',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1d1d1f')}
          >
            <PhoneCall size={13} />
            <span>Consult Specialist</span>
          </button>
        </div>
      </nav>

      {/* 3. SECTION 1: SOLUTION OVERVIEW WITH 3D INTERACTIVE COMPLEX */}
      <section id="overview" style={{ padding: 'clamp(56px, 7vw, 90px) 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              letterSpacing: '-0.025em',
              margin: '0 0 16px',
            }}
          >
            Solution overview
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.02rem, 1.6vw, 1.15rem)',
              color: '#6e6e73',
              lineHeight: 1.65,
              maxWidth: '960px',
              margin: '0 auto 48px',
            }}
          >
            The classroom hub solution combines intelligent hardware and intuitive software to create an active, engaging learning environment for schools and universities. Integrating 4K interactive flat panels, automated presenter-tracking cameras, and wireless screen sharing, the solution bridges the gap between in-person students and remote participants while streamlining lesson recording and campus-wide broadcasting.
          </p>

          {/* 3D Isometric Classroom Hub Graphic Box */}
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: '#f5f5f7',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.06)',
              maxWidth: '1080px',
              margin: '0 auto',
            }}
          >
            <img
              src="/images/classroom/SBS-Classroom-hub_3D-image.jpg"
              alt="Classroom Hub Multi-Room Education Architecture 3D Map"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
                maxHeight: '680px',
              }}
            />

            {/* Interactive Pins Overlay */}
            {classroomHotspots.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  type="button"
                  onClick={() => setActiveHotspot(spot)}
                  aria-label={`Inspect ${spot.title}`}
                  style={{
                    position: 'absolute',
                    top: spot.top,
                    left: spot.left,
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: isSelected ? '#d70015' : 'rgba(255, 255, 255, 0.95)',
                    color: isSelected ? '#ffffff' : '#1d1d1f',
                    padding: '8px 14px',
                    borderRadius: '9999px',
                    border: isSelected ? '2px solid #ffffff' : '1px solid rgba(0,0,0,0.12)',
                    boxShadow: isSelected
                      ? '0 6px 20px rgba(215, 0, 21, 0.5)'
                      : '0 4px 14px rgba(0, 0, 0, 0.15)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    zIndex: isSelected ? 15 : 10,
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#1d1d1f';
                      e.currentTarget.style.color = '#ffffff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                      e.currentTarget.style.color = '#1d1d1f';
                    }
                  }}
                >
                  <MapPin size={14} color={isSelected ? '#ffffff' : '#d70015'} />
                  <span>{spot.title}</span>
                </button>
              );
            })}
          </div>

          {/* Hotspot Detailed Information Drawer */}
          {activeHotspot && (
            <div
              style={{
                marginTop: '28px',
                padding: '20px 28px',
                backgroundColor: '#fbfbfd',
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                maxWidth: '820px',
                margin: '28px auto 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                textAlign: 'left',
              }}
            >
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#d70015', textTransform: 'uppercase' }}>
                  Zone Focus
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1d1d1f', margin: '2px 0 4px' }}>
                  {activeHotspot.title}
                </div>
                <div style={{ fontSize: '0.94rem', color: '#6e6e73' }}>{activeHotspot.desc}</div>
              </div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(0,0,0,0.08)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#0071e3',
                }}
              >
                {activeHotspot.device}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. SECTION 2: IN-CLASS APPLICATIONS (Challenges matching screenshot) */}
      <section
        id="in-class-apps"
        style={{
          padding: 'clamp(56px, 7vw, 90px) 24px',
          backgroundColor: '#f5f5f7',
          borderTop: '1px solid rgba(0, 0, 0, 0.05)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: '0 0 14px',
              }}
            >
              In-class applications
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#6e6e73', lineHeight: 1.5, margin: 0 }}>
              Traditional educational setups struggle to maintain student focus and lack modern tools for interactive hybrid collaboration.
            </p>
          </div>

          {/* 2 Challenge Cards Matching Screenshot */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {/* Card 1: Inefficient Traditional Teaching */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img
                  src="/images/classroom/Inefficient-teaching-tools.jpg"
                  alt="Teacher stressed with blackboard teaching"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              <div style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <AlertCircle size={18} color="#d70015" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#d70015', textTransform: 'uppercase' }}>
                    Challenge 01
                  </span>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 10px' }}>
                  Inefficient traditional teaching
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                  Static chalkboards waste valuable lecture time with repetitive writing and wiping, cannot replay past lessons, and leave remote students excluded from live annotations.
                </p>
              </div>
            </div>

            {/* Card 2: Limited Teaching Resources */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img
                  src="/images/classroom/Limited-teaching-materials.jpg"
                  alt="Student disengaged in passive traditional class"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              <div style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Clock size={18} color="#d70015" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#d70015', textTransform: 'uppercase' }}>
                    Challenge 02
                  </span>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 10px' }}>
                  Limited teaching resources
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                  Passive one-way lecture delivery without interactive quizzes, wireless student tablet projection, or digital 3D models leads to rapid attention loss and lower retention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: WHAT WE OFFER (Interactive Display + Categorized Specs matching screenshot) */}
      <section id="what-we-offer" style={{ padding: 'clamp(56px, 7vw, 90px) 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: '0 0 14px',
              }}
            >
              What we offer
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#6e6e73', lineHeight: 1.5, margin: 0 }}>
              An intuitive smart classroom ecosystem powered by 4K optical bonding touch displays, AI auto-tracking cameras, and wireless multi-screen collaboration.
            </p>
          </div>

          {/* Row 1: Interactive Display Visual + Categorized Bullets */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'center',
              marginBottom: '64px',
            }}
          >
            {/* Visual */}
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(0,0,0,0.08)',
                border: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <img
                src="/images/classroom/in-class-applications.jpg"
                alt="Teacher using 4K Interactive Flat Panel in Classroom"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Bullets Grouped by Categories from Screenshot */}
            <div>
              {/* Category 1: Interactive Teaching */}
              <div style={{ marginBottom: '22px' }}>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#d70015',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Interactive Teaching
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.96rem', color: '#1d1d1f' }}>
                    <Check size={16} color="#d70015" />
                    <span>4K Ultra HD anti-glare touch display with natural pen-on-paper writing feel</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.96rem', color: '#1d1d1f' }}>
                    <Check size={16} color="#d70015" />
                    <span>Wireless 4-way screen projection from tablets, laptops, and smartphones</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.96rem', color: '#1d1d1f' }}>
                    <Check size={16} color="#d70015" />
                    <span>Instant PDF/QR export of lesson whiteboard notes directly to students</span>
                  </li>
                </ul>
              </div>

              {/* Category 2: Hybrid & Lecture Capture */}
              <div>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#0071e3',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Hybrid & Lecture Capture
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.96rem', color: '#1d1d1f' }}>
                    <Check size={16} color="#0071e3" />
                    <span>Dual-lens presenter auto-tracking camera following instructor movements</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.96rem', color: '#0071e3' }}>
                    <Check size={16} color="#0071e3" />
                    <span>8-meter ceiling beamforming microphone with AI acoustic noise reduction</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.96rem', color: '#0071e3' }}>
                    <Check size={16} color="#0071e3" />
                    <span>One-click cloud recording integrated with campus LMS and Google Classroom</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recommended Hardware & System Components Deck */}
          <div>
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              Recommended Hardware & System Components
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '18px',
              }}
            >
              {recommendedProducts.map((prod, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '16px',
                    padding: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#d70015';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div>
                    <div style={{ marginBottom: '14px' }}>{prod.icon}</div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#6e6e73',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {prod.category}
                    </span>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1d1d1f', margin: '4px 0 6px' }}>
                      {prod.name}
                    </h4>
                    <div style={{ fontSize: '0.82rem', fontFamily: 'monospace', color: '#0071e3', marginBottom: '8px' }}>
                      {prod.code}
                    </div>
                    <p style={{ fontSize: '0.86rem', color: '#6e6e73', lineHeight: 1.45, margin: 0 }}>
                      {prod.desc}
                    </p>
                  </div>

                  <Link
                    to="/quote-calculator"
                    style={{
                      marginTop: '18px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: '#d70015',
                      textDecoration: 'none',
                    }}
                  >
                    <span>Request Specs</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: RELATED RESOURCES (Matching screenshot) */}
      <section
        id="resources"
        style={{
          padding: 'clamp(56px, 7vw, 90px) 24px',
          backgroundColor: '#f5f5f7',
          borderTop: '1px solid rgba(0, 0, 0, 0.05)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              margin: '0 0 36px',
            }}
          >
            Related Resources
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {[
              {
                title: 'Interactive Flat Panel Solution for Education',
                type: 'Brochure PDF • 4.2 MB',
                desc: 'Complete technical breakdown of optical bonding, Android OS apps, and classroom audio acoustics.',
              },
              {
                title: 'Smart Campus & Hybrid Classroom Hub Whitepaper',
                type: 'Whitepaper • 8.6 MB',
                desc: 'Best practices for university-wide lecture capture, automated tracking cameras, and LMS integration.',
              },
            ].map((res, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '18px',
                  padding: '28px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '18px',
                  transition: 'transform 0.25s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(215,0,21,0.08)',
                    padding: '12px',
                    borderRadius: '12px',
                    color: '#d70015',
                  }}
                >
                  <FileText size={26} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#d70015', textTransform: 'uppercase' }}>
                    {res.type}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1d1d1f', margin: '4px 0 8px' }}>
                    {res.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#6e6e73', lineHeight: 1.45, margin: '0 0 16px' }}>
                    {res.desc}
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowSalesModal(true)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#0071e3',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    <Download size={14} />
                    <span>Download Resource</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: RELATED LINKS (Matching screenshot) */}
      <section id="related-links" style={{ padding: 'clamp(56px, 7vw, 90px) 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              margin: '0 0 44px',
            }}
          >
            Related links
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                title: 'Education',
                subtitle: 'Comprehensive smart campus & student safety ecosystem',
                image: '/images/classroom/SBI-Smart-Education_split-banner.jpg',
                link: '/solutions',
              },
              {
                title: 'Campus Security',
                subtitle: 'Automated student turnstiles & blue-light emergency poles',
                image: '/images/classroom/SBI-Campus-Security-split-banner.jpg',
                link: '/solutions',
              },
              {
                title: 'Smart Classrooms',
                subtitle: 'Interactive displays, wireless projection & remote lecture auditing',
                image: '/images/classroom/SBI-smart-classroom-_split-banner.jpg',
                link: '/technologies',
              },
            ].map((rel, idx) => (
              <Link
                key={idx}
                to={rel.link}
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  height: '240px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px',
                  textDecoration: 'none',
                  boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <img
                  src={rel.image}
                  alt={rel.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 1,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.85) 100%)',
                    zIndex: 2,
                  }}
                />
                <div style={{ position: 'relative', zIndex: 3 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: '0 0 6px' }}>
                    {rel.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.4 }}>
                    {rel.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SECTION 6: READY TO DISCUSS YOUR NEEDS */}
      <section
        style={{
          padding: 'clamp(56px, 7vw, 84px) 24px',
          backgroundColor: '#fbfbfd',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '48px',
          }}
        >
          {/* Left CTA Action */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
                fontWeight: 800,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: '0 0 16px',
              }}
            >
              Ready to discuss your needs?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#6e6e73', lineHeight: 1.5, margin: '0 0 28px' }}>
              Connect directly with our educational solution architects for customized campus room layouts, interactive display demos, and academic discount pricing.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setShowSalesModal(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#d70015',
                  color: '#ffffff',
                  padding: '12px 28px',
                  borderRadius: '9999px',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 18px rgba(215, 0, 21, 0.35)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#b70012';
                  e.currentTarget.style.transform = 'scale(1.03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#d70015';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span>Contact Sales</span>
                <ArrowRight size={16} />
              </button>

              <Link
                to="/quote-calculator"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#ffffff',
                  color: '#d70015',
                  border: '1.5px solid #d70015',
                  padding: '10.5px 26px',
                  borderRadius: '9999px',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(215, 0, 21, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
              >
                <span>Calculate Pricing</span>
              </Link>
            </div>
          </div>

          {/* Right Illustration */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="/images/apartment/apartment_discuss_illu.png"
              alt="Ready to discuss needs consultation illustration"
              style={{
                maxWidth: '440px',
                width: '100%',
                height: 'auto',
                display: 'block',
                mixBlendMode: 'multiply',
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Sales Modal */}
      <ContactSalesModal isOpen={showSalesModal} onClose={() => setShowSalesModal(false)} />
    </div>
  );
}
