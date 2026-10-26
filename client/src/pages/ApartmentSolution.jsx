import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Car,
  Building2,
  Video,
  Layers,
  FileText,
  ChevronRight,
  PhoneCall,
  Check,
  AlertCircle,
  Clock,
  Sparkles,
  Smartphone,
  Eye,
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for the 3D Apartment Complex
const complexHotspots = [
  {
    id: 'vehicle',
    title: 'Vehicle Entrance & Exit',
    desc: 'High-speed ANPR camera with anti-tailgating radar boom gates.',
    top: '78%',
    left: '72%',
    device: 'ANPR Camera + Radar Barrier',
  },
  {
    id: 'lobby',
    title: 'Tower Lobby Entrance',
    desc: 'Facial recognition intercom terminal with temporary QR visitor pass reader.',
    top: '55%',
    left: '32%',
    device: 'Face Terminal Intercom',
  },
  {
    id: 'parking',
    title: 'Underground Garage',
    desc: 'Dual-lens vehicle tracking and parking space status indicator lights.',
    top: '84%',
    left: '26%',
    device: 'Parking Guidance Camera',
  },
  {
    id: 'perimeter',
    title: 'Estate Perimeter',
    desc: 'AcuSense perimeter tripwire cameras with strobe light & acoustic alarm.',
    top: '38%',
    left: '68%',
    device: 'AcuSense PTZ Camera',
  },
  {
    id: 'center',
    title: 'Security Control Room',
    desc: 'HikCentral central video wall matrix, access audit logs, and instant SOS dispatch.',
    top: '20%',
    left: '46%',
    device: 'HikCentral Workstation',
  },
];

// Recommended Product Deck
const recommendedProducts = [
  {
    name: 'DeepinView ANPR Camera',
    code: 'iDS-2CD7A46G0/P-IZHS',
    category: 'Vehicle Access',
    desc: '4K dual-sensor license plate capture with deep learning plate classification.',
    icon: <Car size={24} color="#d70015" />,
  },
  {
    name: 'Smart Radar Barrier Gate',
    code: 'DS-TMG4B0-LA',
    category: 'Boom Barrier',
    desc: 'High-speed brushless DC motor barrier with integrated anti-smash vehicle radar.',
    icon: <Shield size={24} color="#0071e3" />,
  },
  {
    name: 'Apartment Face Station',
    code: 'DS-KD9203-E6',
    category: 'Video Intercom',
    desc: '4.3-inch color LCD touch terminal with dual-lens anti-spoofing facial unlock.',
    icon: <Building2 size={24} color="#34c759" />,
  },
  {
    name: 'Android Indoor Station',
    code: 'DS-KH9510-WTE1',
    category: 'Resident Unit',
    desc: '10.1-inch IPS touchscreen for unit-to-unit calling, live CCTV preview, and door unlock.',
    icon: <Smartphone size={24} color="#ff9500" />,
  },
  {
    name: 'HikCentral Residential',
    code: 'VMS-HCP-RES',
    category: 'Software Platform',
    desc: 'Centralized web management for resident whitelist, parking billing, and visitor pass QR.',
    icon: <Layers size={24} color="#af52de" />,
  },
];

export default function ApartmentSolution() {
  const [activeHotspot, setActiveHotspot] = useState(complexHotspots[0]);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'vehicle-access', 'what-we-offer', 'case-studies', 'related-solutions'];
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
      {/* 1. HERO BANNER (Golden Architectural Panoramic matching screenshot) */}
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
            backgroundImage: `url('/images/apartment/apartment_hero.jpg')`,
            backgroundPosition: 'center right',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Golden Sun Arc Gradient Overlay on Left matching screenshot */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 18% 45%, rgba(220, 160, 70, 0.88) 0%, rgba(220, 160, 70, 0.65) 30%, rgba(220, 160, 70, 0.25) 50%, rgba(0,0,0,0) 70%), linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)',
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
              <span>Solution by Scenario</span>
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
              Apartments
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
              Smart and safe residential communities with comfortable living, high-speed vehicle pass, and integrated digital video intercom.
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
              { id: 'vehicle-access', label: 'Vehicle entrance & exit' },
              { id: 'what-we-offer', label: 'What we offer' },
              { id: 'case-studies', label: 'Success studies' },
              { id: 'related-solutions', label: 'You may also be interested in' },
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
            <span>Consult Engineer</span>
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
              maxWidth: '920px',
              margin: '0 auto 48px',
            }}
          >
            Hikvision&apos;s apartment solution provides a comprehensive security system tailored for residential communities. Featuring an intuitive management platform, high-definition video surveillance, smart intercom, and seamless vehicle and visitor access, the solution protects residents 24/7 while empowering property managers with effortless digital operations.
          </p>

          {/* 3D Isometric Residential Graphic Box */}
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
              src="/images/apartment/apartment_3d_overview.jpg"
              alt="Apartment Smart Security Architecture 3D Map"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
                maxHeight: '620px',
              }}
            />

            {/* Interactive Pins Overlay */}
            {complexHotspots.map((spot) => {
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
                maxWidth: '780px',
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

      {/* 4. SECTION 2: VEHICLE ENTRANCE & EXIT (Challenges matching screenshot) */}
      <section
        id="vehicle-access"
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
              Vehicle entrance & exit
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#6e6e73', lineHeight: 1.5, margin: 0 }}>
              Bottlenecks at residential gates create traffic chaos during morning rushes and pose critical security risks when manual checks fail.
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
            {/* Card 1: Traffic Congestion */}
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
                  src="/images/apartment/apartment_traffic_jam.jpg"
                  alt="Peak hour vehicle congestion at gate"
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
                    Challenge 01
                  </span>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 10px' }}>
                  Congestion at peak hours
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                  Manual verification by guards leads to extensive vehicle queuing at gates, causing frustration for residents and slowing down emergency service vehicles.
                </p>
              </div>
            </div>

            {/* Card 2: Manual Logbook */}
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
                  src="/images/apartment/apartment_manual_logbook.jpg"
                  alt="Inefficient manual visitor logbook"
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
                    Challenge 02
                  </span>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 10px' }}>
                  Inefficient manual logbooks
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                  Paper logbooks are slow to fill, easily manipulated, and impossible to search quickly during security incidents or police verification audits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: WHAT WE OFFER (Camera + Specs + Software Mockup matching screenshot) */}
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
              An automated, frictionless vehicle experience powered by high-speed ANPR camera recognition, anti-smash barrier radar, and automated digital visitor approval.
            </p>
          </div>

          {/* Row 1: Camera Hardware + Bullet points */}
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
                src="/images/apartment/apartment_anpr_camera.jpg"
                alt="High-accuracy ANPR Camera at Apartment Gate"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Bullets */}
            <div>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#d70015',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'block',
                  marginBottom: '10px',
                }}
              >
                High-Speed AI Recognition
              </span>
              <h3
                style={{
                  fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  margin: '0 0 18px',
                  letterSpacing: '-0.02em',
                }}
              >
                Automated Drive-Through Entry
              </h3>
              <p style={{ fontSize: '1rem', color: '#6e6e73', lineHeight: 1.6, margin: '0 0 24px' }}>
                Residents enjoy hands-free gate access in under 1 second without rolling down windows or swiping cards, even during heavy rain or extreme darkness.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  {
                    title: '99.8% License Plate Recognition Accuracy',
                    desc: 'Deep learning neural networks recognize clean and dirt-obscured plates across all state standards.',
                  },
                  {
                    title: 'Sub-Second Barrier Gate Triggering',
                    desc: 'High-speed brushless DC motor barrier opens in 1.2s to prevent vehicle back-ups.',
                  },
                  {
                    title: 'Anti-Tailgating & Anti-Smash Radar',
                    desc: 'Millimeter-wave radar detects following vehicles and prevents boom descent onto cars or pedestrians.',
                  },
                  {
                    title: 'Instant Resident Mobile App Passes',
                    desc: 'Tenants send temporary license plate authorization or QR invites to expected guests.',
                  },
                ].map((bullet, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div
                      style={{
                        backgroundColor: 'rgba(215, 0, 21, 0.1)',
                        padding: '4px',
                        borderRadius: '50%',
                        marginTop: '2px',
                      }}
                    >
                      <Check size={16} color="#d70015" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.96rem', fontWeight: 600, color: '#1d1d1f' }}>
                        {bullet.title}
                      </div>
                      <div style={{ fontSize: '0.88rem', color: '#6e6e73', lineHeight: 1.45, marginTop: '2px' }}>
                        {bullet.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Software Platform (Laptop Mockup) */}
          <div
            style={{
              backgroundColor: '#f9f9fb',
              borderRadius: '24px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              padding: 'clamp(36px, 5vw, 64px)',
              textAlign: 'center',
              marginBottom: '64px',
            }}
          >
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#0071e3',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                display: 'block',
                marginBottom: '10px',
              }}
            >
              Unified Management
            </span>
            <h3
              style={{
                fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                margin: '0 0 14px',
              }}
            >
              HikCentral Residential Dashboard
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: '#6e6e73',
                lineHeight: 1.55,
                maxWidth: '740px',
                margin: '0 auto 36px',
              }}
            >
              Live vehicle entry logs, tenant parking allocations, and intercom visitor records consolidated on one screen with automated security alarms.
            </p>

            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 48px rgba(0, 0, 0, 0.12)',
                maxWidth: '960px',
                margin: '0 auto',
              }}
            >
              <img
                src="/images/apartment/apartment_software_laptop.jpg"
                alt="HikCentral Residential Management Platform on Laptop"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* Recommended Products Deck */}
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

      {/* 6. SECTION 4: SUCCESS STUDIES (Matching Singapore Case Study in Screenshot) */}
      <section
        id="case-studies"
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
              Success studies
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#6e6e73', lineHeight: 1.5, margin: 0 }}>
              Proven reliability and operational excellence deployed at world-class residential communities worldwide.
            </p>
          </div>

          {/* Featured Case Study Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              alignItems: 'center',
            }}
          >
            <div style={{ height: '100%', minHeight: '340px' }}>
              <img
                src="/images/apartment/apartment_case_study.jpg"
                alt="Singapore D'Elite Residences Smart Building Upgrade"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            <div style={{ padding: 'clamp(32px, 5vw, 56px)' }}>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#d70015',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  display: 'block',
                  marginBottom: '10px',
                }}
              >
                Case Study • Singapore
              </span>

              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  lineHeight: 1.25,
                  margin: '0 0 16px',
                }}
              >
                A Singapore apartment complex embraces modern urban living with smart building solutions
              </h3>

              <p style={{ fontSize: '0.98rem', color: '#6e6e73', lineHeight: 1.6, margin: '0 0 24px' }}>
                D&apos;Elite Residences, a premier development of 1,200 luxury condominiums in Singapore, transitioned from manual security sign-in sheets to Hikvision&apos;s integrated ANPR vehicle access and cloud video intercom. The upgrade eliminated rush-hour gate queues and cut annual security overhead.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                  marginBottom: '28px',
                  borderTop: '1px solid rgba(0,0,0,0.08)',
                  paddingTop: '20px',
                }}
              >
                <div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1d1d1f' }}>-75%</div>
                  <div style={{ fontSize: '0.8rem', color: '#6e6e73' }}>Gate wait time</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1d1d1f' }}>100%</div>
                  <div style={{ fontSize: '0.8rem', color: '#6e6e73' }}>Digital audit logs</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1d1d1f' }}>1,200</div>
                  <div style={{ fontSize: '0.8rem', color: '#6e6e73' }}>Condo units connected</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowSalesModal(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#0071e3',
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <span>Read Full Case Study Details &gt;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: YOU MAY ALSO BE INTERESTED IN */}
      <section id="related-solutions" style={{ padding: 'clamp(56px, 7vw, 90px) 24px', backgroundColor: '#ffffff' }}>
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
            You may also be interested in
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
                title: 'Commercial Buildings',
                subtitle: 'Frictionless turnstiles & multi-tenant access control',
                image: '/images/industry_commercial.jpg',
                link: '/solutions',
              },
              {
                title: 'Perimeter Protection',
                subtitle: 'Radar & thermal tripwire surveillance for sprawling estates',
                image: '/images/perimeter_protection_hero.jpg',
                link: '/solutions',
              },
              {
                title: 'Smart Offices',
                subtitle: 'Facial recognition time-attendance & automated meeting rooms',
                image: '/images/scenarios/offices.jpg',
                link: '/solutions',
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

      {/* 8. SECTION 6: READY TO DISCUSS YOUR NEEDS (With exact illustration matching screenshot) */}
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
              Connect directly with our residential solution architects for tailored hardware topologies, live product demonstrations, and project design quotes.
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

          {/* Right Illustration matching screenshot */}
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
