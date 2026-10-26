import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  MapPin,
  ChevronRight,
  PhoneCall,
  Check,
  AlertCircle,
  Clock,
  Download,
  Share2,
  Sparkles,
  Camera,
  Radio,
  Cpu,
  Layers,
  FileText,
  Activity,
  Users,
  Eye,
  Tv,
  Mic,
  Maximize2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Volume2
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for the 3D Smart Bus Stop Illustration
const busStopHotspots = [
  {
    id: 'passenger-waiting',
    title: 'Passenger Waiting Shelter',
    desc: 'Dual-lens passenger flow counting and crowd density analysis camera providing real-time alerts when passenger numbers exceed safe platform capacity.',
    top: '46%',
    left: '56%',
    device: 'Dual-Lens AI Passenger Flow Camera',
    spec: '98.5% counting accuracy, heat-mapping, anti-crowd crowding alert',
  },
  {
    id: 'digital-signage',
    title: 'Real-Time Digital Information Display',
    desc: 'Sunlight-readable high-brightness commercial display showing live bus arrival estimations (ETA), line routes, service updates, and public announcements.',
    top: '38%',
    left: '46%',
    device: '55"/65" High-Brightness IP65 Digital Signage',
    spec: '2,500 nits brightness, anti-glare AR tempered glass, 24/7 continuous operation',
  },
  {
    id: 'bus-arrival',
    title: 'Bus Lane & Arrival Monitoring',
    desc: 'High-definition ANPR camera monitoring dedicated bus-only lanes, enforcing illegal vehicle parking violations, and logging bus entry and dwell times.',
    top: '64%',
    left: '28%',
    device: 'Smart ITS Bus Lane Enforcement Camera',
    spec: 'Sub-second plate recognition, illegal parking detection, speed validation',
  },
  {
    id: 'emergency-call',
    title: 'Emergency Help & Two-Way Intercom',
    desc: 'Vandal-proof emergency call station connecting waiting passengers directly to central dispatchers with crystal-clear noise-cancelled audio and HD video.',
    top: '52%',
    left: '37%',
    device: 'IP66 Anti-Vandal SOS Emergency Intercom Box',
    spec: 'One-touch emergency call, acoustic echo suppression, HD camera integration',
  },
];

// Product Lineup Cards
const productCategories = [
  {
    id: 'frontline',
    name: 'Smart Bus Shelter Products',
    products: [
      {
        title: 'Passenger Density & Flow Camera',
        model: 'DS-2CD6825G0/C-IVS',
        badge: 'AI Stereo Vision',
        desc: '3D binocular stereo vision camera accurately differentiating humans from luggage and bicycles, delivering real-time overcrowding detection and flow analytics.',
        icon: <Users size={22} color="#0071e3" />,
        specs: ['3D Binocular Stereo Vision', 'Crowd Density Threshold Alarms', 'Local Bi-directional Flow Statistics', 'PoE 802.3af Compliant'],
      },
      {
        title: 'Outdoor Ultra-Bright Digital Signage Display',
        model: 'DS-D6055UN-B',
        badge: 'Sunlight Readable',
        desc: 'Commercial-grade 2500 nits weatherproof outdoor digital totem engineered for bus stops, featuring auto-dimming ambient light sensors and anti-vandal toughened glass.',
        icon: <Tv size={22} color="#d70015" />,
        specs: ['2,500 nits High Brightness', 'IP65 Weather & Dust Ingress', 'Anti-Reflective Optical Glass', 'Built-in Media Controller & 4G'],
      },
      {
        title: 'Emergency SOS Intercom Terminal',
        model: 'DS-PEA3M-21',
        badge: 'Anti-Vandal IK10',
        desc: 'Ruggedized outdoor call box linking passengers with centralized transit dispatch in emergencies. Features dual-mic background noise cancellation and tamper alarm.',
        icon: <Volume2 size={22} color="#34c759" />,
        specs: ['IK10 Impact & IP66 Water Proof', 'One-Touch Instant Dispatch Link', 'Built-in 2MP Starlight Camera', 'Acoustic Siren & Flashing Strobe'],
      },
      {
        title: '4K Starlight PTZ Panoramic Dome',
        model: 'DS-2DE7A432IW-AEB',
        badge: '32x Optical Zoom',
        desc: 'Perimeter and bus stop surroundings coverage with high-powered 32x optical zoom, active strobe deterrence, and auto-tracking of suspicious after-hours loitering.',
        icon: <Camera size={22} color="#ff9500" />,
        specs: ['4K Ultra HD Resolution', '32x Optical Zoom / 16x Digital', '200m Smart IR Night Vision', 'Active Strobe & Siren Deterrence'],
      },
    ],
  },
  {
    id: 'processing',
    name: 'Edge Terminal & Central Platform',
    products: [
      {
        title: 'Ruggedized Transportation Edge Terminal',
        model: 'DS-TP50-16HK',
        badge: 'Industrial Grade',
        desc: 'Fanless roadside edge computing box built for harsh roadside cabinets, providing edge AI video parsing, 4G/5G failover backhaul, and local power backup buffer.',
        icon: <Cpu size={22} color="#5856d6" />,
        specs: ['-40°C to +70°C Operating Range', 'Local Storage Buffer (Up to 16TB)', 'Dual SIM 4G/5G Wireless Backup', 'Hardware Watermark Cryptography'],
      },
      {
        title: 'Coloron Central Transit Management VMS',
        model: 'VMS-TRANSIT-PRO',
        badge: 'Cloud & On-Premises',
        desc: 'Centralized software consolidating bus stop passenger density, fleet arrival schedules, emergency calls, and automated dynamic digital display broadcasting.',
        icon: <Layers size={22} color="#af52de" />,
        specs: ['Real-Time Transit GIS Map', 'Automated Bus Dispatch Triggers', 'Fleet Schedule Synchronization', 'Unified Incident Audit Logs'],
      },
    ],
  },
];

export default function BusStopSolution() {
  const [activeHotspot, setActiveHotspot] = useState(busStopHotspots[0]);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  const [selectedProductTab, setSelectedProductTab] = useState(0);
  const [openAccordions, setOpenAccordions] = useState({
    deepinView: true,
    nvr: false,
  });

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'anomaly-detection', 'what-we-offer', 'success-stories', 'related-links'];
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
      {/* 1. HERO BANNER: Cinematic Panoramic Transit Shelter (Exact Match to Screenshot) */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(460px, 45vw, 620px)',
          minHeight: '420px',
          overflow: 'hidden',
          backgroundColor: '#061328',
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/images/bus_stop/bus_stop_hero.jpg)',
            backgroundPosition: 'center 45%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Contrast Gradient Scrim Overlay for crisp readable text with blue accent */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(8, 28, 64, 0.88) 0%, rgba(8, 28, 64, 0.65) 42%, rgba(8, 28, 64, 0.15) 100%)',
          }}
        />

        {/* Content Box */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1360px',
            height: '100%',
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            {/* Tag / Scenario indicator */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#ffffff',
                fontSize: '0.94rem',
                fontWeight: 600,
                letterSpacing: '0.02em',
                marginBottom: '16px',
                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              }}
            >
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                  }}
                />
              </div>
              <span style={{ fontSize: '0.92rem', textTransform: 'capitalize' }}>Solutions By Scenario</span>
            </div>

            {/* Main Title */}
            <h1
              style={{
                fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                margin: '0 0 16px',
                textShadow: '0 3px 20px rgba(0,0,0,0.6)',
              }}
            >
              Bus Stop
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 400,
                lineHeight: 1.4,
                margin: '0 0 32px',
                textShadow: '0 2px 10px rgba(0,0,0,0.6)',
              }}
            >
              Dedicated protection and smart services
            </p>

            {/* CTA Action Buttons */}
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
                  padding: '13px 32px',
                  borderRadius: '9999px',
                  fontSize: '0.96rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 24px rgba(215, 0, 21, 0.45)',
                  transition: 'transform 0.2s ease, background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#b70012';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#d70015';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Contact Solution Expert</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('overview')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(16px)',
                  color: '#ffffff',
                  padding: '13px 26px',
                  borderRadius: '9999px',
                  fontSize: '0.96rem',
                  fontWeight: 600,
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
              >
                <span>Explore Solution</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY SUB-NAVIGATION BAR (Matching Screenshot) */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 40,
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          padding: '0 24px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
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
          {/* Left: Breadcrumb / Section Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <span
              style={{
                fontSize: '0.92rem',
                fontWeight: 700,
                color: '#1d1d1f',
                paddingRight: '12px',
                borderRight: '1px solid rgba(0,0,0,0.1)',
                display: 'none',
              }}
              className="desktop-nav-brand"
            >
              Bus Stop
            </span>

            {[
              { id: 'overview', label: 'Solution overview' },
              { id: 'anomaly-detection', label: 'Anomaly detection' },
              { id: 'what-we-offer', label: 'What we offer' },
              { id: 'success-stories', label: 'Success stories' },
              { id: 'related-links', label: 'You may also be interested in' },
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

          {/* Right Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              type="button"
              onClick={() => setShowSalesModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#d70015',
                color: '#ffffff',
                padding: '7px 18px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b70012')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
            >
              <PhoneCall size={13} />
              <span>Contact Sales</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 3. SECTION 1: SOLUTION OVERVIEW WITH 3D INTERACTIVE BUS STOP COMPLEX */}
      <section id="overview" style={{ padding: 'clamp(56px, 7vw, 90px) 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
          {/* Main Section Header */}
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              letterSpacing: '-0.025em',
              margin: '0 0 20px',
            }}
          >
            Solution overview
          </h2>

          {/* 2 Narrative Paragraphs matching exact Hikvision text from screenshot */}
          <div style={{ maxWidth: '980px', margin: '0 auto 48px', textAlign: 'center' }}>
            <p
              style={{
                fontSize: '1.04rem',
                color: '#515154',
                lineHeight: 1.7,
                margin: '0 0 16px',
              }}
            >
              Public transit is one of the most reliable and affordable choices for daily travel. In developing nations and modern metropolises alike, the transit system is experiencing rapid development. The expansion of bus fleets, however, also challenges passengers with long waiting times and uncertainty on whether buses will arrive on time. For operators, dispatching buses punctually is a constant battle against unexpected traffic delays.
            </p>
            <p
              style={{
                fontSize: '1.04rem',
                color: '#515154',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Coloron offers a dedicated smart bus stop solution that integrates intelligent video security, passenger flow counting, and dynamic digital signage. This enables passengers to view precise estimated arrival times and allows bus companies to improve scheduling efficiency and fleet operations.
            </p>
          </div>

          {/* 3D Isometric Bus Stop Illustration Container */}
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: '#f8f9fa',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.06)',
              maxWidth: '1100px',
              margin: '0 auto 28px',
            }}
          >
            <img
              src="/images/bus_stop/bus_stop_3d_overview.jpg"
              alt="Smart Bus Stop 3D Architecture and Topology Diagram"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
            />

            {/* Interactive Pins Overlay */}
            {busStopHotspots.map((spot, idx) => {
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
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    border: isSelected ? '2px solid #ffffff' : '1px solid rgba(0,0,0,0.15)',
                    boxShadow: isSelected
                      ? '0 8px 24px rgba(215, 0, 21, 0.55)'
                      : '0 4px 16px rgba(0, 0, 0, 0.18)',
                    fontSize: '0.84rem',
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
                  color: '#d70015',
                  letterSpacing: '0.04em',
                  marginBottom: '6px',
                }}
              >
                <Sparkles size={14} />
                <span>Selected Sub-Scenario Feature</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 8px' }}>
                {activeHotspot.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#515154', lineHeight: 1.55, margin: 0 }}>
                {activeHotspot.desc}
              </p>
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
                minWidth: '240px',
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase' }}>
                Deployed Unit
              </span>
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0071e3' }}>
                {activeHotspot.device}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#515154' }}>
                {activeHotspot.spec}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: ANOMALY DETECTION (Exact Match to Screenshot) */}
      <section
        id="anomaly-detection"
        style={{
          padding: 'clamp(56px, 7vw, 90px) 24px',
          backgroundColor: '#f5f5f7',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Centered Heading */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: '0 0 10px',
              }}
            >
              Anomaly detection
            </h2>
          </div>

          {/* Subheading: Challenges */}
          <div style={{ maxWidth: '980px', margin: '0 auto 40px', textAlign: 'left' }}>
            <h3
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.01em',
                margin: '0 0 12px',
              }}
            >
              Challenges
            </h3>
            <p
              style={{
                fontSize: '0.98rem',
                color: '#515154',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Bus stops are often crowded and dynamic environments. Incidents such as overcrowding and people gathering or remaining after hours present safety concerns and disrupt daily operations.
            </p>
          </div>

          {/* 2 Challenge Cards Side-by-Side (Exact Match to Screenshot) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              maxWidth: '980px',
              margin: '0 auto',
            }}
          >
            {/* Challenge 1: Overcrowded */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden' }}>
                <img
                  src="/images/bus_stop/anomaly_overcrowded.jpg"
                  alt="Overcrowded Bus Stop Challenge"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(215, 0, 21, 0.9)',
                    color: '#ffffff',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  Risk 01
                </div>
              </div>
              <div style={{ padding: '20px 24px' }}>
                <h4
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    margin: '0 0 10px',
                  }}
                >
                  Overcrowded
                </h4>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#6e6e73',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  When passenger queues spill over onto roadways during peak hours, safety hazards rise dramatically and dispatchers need immediate alerts to deploy extra buses.
                </p>
              </div>
            </div>

            {/* Challenge 2: People gathering or remaining after hours */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden' }}>
                <img
                  src="/images/bus_stop/anomaly_after_hours.jpg"
                  alt="People gathering or remaining after hours at bus stop"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(29, 29, 31, 0.85)',
                    color: '#ffffff',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  Risk 02
                </div>
              </div>
              <div style={{ padding: '20px 24px' }}>
                <h4
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    margin: '0 0 10px',
                  }}
                >
                  People gathering or remaining after hours
                </h4>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#6e6e73',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  Long dwell times, vandalism, or loitering late at night require smart proactive detection, automated strobe/siren deterrence, and instant audio warnings from security teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: WHAT WE OFFER (Exact Match to Screenshot) */}
      <section id="what-we-offer" style={{ padding: 'clamp(56px, 7vw, 90px) 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: '0 0 14px',
              }}
            >
              What we offer
            </h2>
            <p
              style={{
                fontSize: '1.02rem',
                color: '#515154',
                maxWidth: '860px',
                margin: '0 auto 48px',
                lineHeight: 1.6,
              }}
            >
              To tackle these safety concerns, improve passenger service quality, and streamline everyday operations, Coloron offers a comprehensive smart bus stop security and digital information solution.
            </p>
          </div>

          {/* Two-Column Showcase: Control Room Operator Image + Benefits List */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '40px',
              alignItems: 'center',
              maxWidth: '1100px',
              margin: '0 auto 60px',
            }}
          >
            {/* Left: Dispatch Operator Screen Photo */}
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                backgroundColor: '#050c1e',
              }}
            >
              <img
                src="/images/bus_stop/bus_stop_operator.jpg"
                alt="Security Control Center Operator Monitoring Bus Stop Video Feeds"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '16px 20px',
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
                  color: '#ffffff',
                }}
              >
                <div style={{ fontSize: '0.86rem', fontWeight: 600 }}>Centralized Transit SOC Dashboard</div>
                <div style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.7)' }}>
                  Real-time video surveillance, AI pedestrian bounding boxes & crowd heatmaps
                </div>
              </div>
            </div>

            {/* Right: Benefits Bullets */}
            <div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  marginBottom: '20px',
                }}
              >
                Benefits
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  {
                    title: 'Keep passengers informed',
                    desc: 'Real-time bus arrival estimations, scheduling updates, and route announcements on sunlight-readable digital totems.',
                  },
                  {
                    title: 'Optimize fleet scheduling',
                    desc: 'Deliver accurate passenger counting statistics so transit authorities can dynamically deploy extra buses during unexpected surges.',
                  },
                  {
                    title: 'Fast emergency response',
                    desc: 'Two-way audio intercom terminals enable passengers to request immediate help from dispatchers at the touch of a button.',
                  },
                  {
                    title: 'Automated anomaly detection',
                    desc: 'Instant alarms for overcrowding, after-hours loitering, unattended baggage, and unauthorized vehicles in bus lanes.',
                  },
                  {
                    title: 'Forensic evidence review',
                    desc: 'High-definition video recording with smart thumbnail search for rapid resolution of complaints or accidents.',
                  },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        backgroundColor: '#e8f2fc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Check size={14} color="#0071e3" strokeWidth={3} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.94rem', fontWeight: 700, color: '#1d1d1f' }}>
                        {item.title}:{' '}
                      </span>
                      <span style={{ fontSize: '0.9rem', color: '#515154', lineHeight: 1.5 }}>
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Exact System Topology Diagram & DeepinView Camera / NVR Accordion Section matching screenshot */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 440px) minmax(0, 1fr)',
              gap: '40px',
              alignItems: 'flex-start',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
            className="topology-accordion-grid"
          >
            {/* Left Column: System Topology Diagram */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                padding: '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              <img
                src="/images/bus_stop/bus_stop_topology.png"
                alt="Bus Stop System Topology Diagram"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Right Column: DeepinView camera & NVR Accordions */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Accordion 1: DeepinView camera */}
              <div
                style={{
                  borderTop: '1px solid #e5e7eb',
                  borderBottom: '1px solid #e5e7eb',
                  padding: '16px 0 20px',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion('deepinView')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    padding: '4px 0 16px',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#1d1d1f',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    DeepinView camera
                  </span>
                  <div style={{ color: '#86868b', display: 'flex', alignItems: 'center' }}>
                    {openAccordions.deepinView ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                </button>

                {openAccordions.deepinView && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                      gap: '16px',
                    }}
                  >
                    {/* Card 1: Dome Camera */}
                    <div
                      style={{
                        backgroundColor: '#f8f9fb',
                        borderRadius: '6px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                      }}
                      onClick={() => setShowSalesModal(true)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f1f4f8';
                        e.currentTarget.style.borderColor = 'rgba(0, 113, 227, 0.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fb';
                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                      }}
                    >
                      <div
                        style={{
                          width: '68px',
                          height: '68px',
                          flexShrink: 0,
                          backgroundColor: '#ffffff',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(0, 0, 0, 0.05)',
                          overflow: 'hidden',
                        }}
                      >
                        <img
                          src="/images/bus_stop/product_deepinview_dome.png"
                          alt="iDS-2CD7146G0-IZ(H)S(Y)"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div
                          style={{
                            fontSize: '0.94rem',
                            fontWeight: 700,
                            color: '#1d1d1f',
                            marginBottom: '4px',
                            lineHeight: 1.3,
                          }}
                        >
                          iDS-2CD7146G0-IZ(H)S(Y)
                        </div>
                        <div
                          style={{
                            fontSize: '0.78rem',
                            color: '#6e6e73',
                            lineHeight: 1.4,
                          }}
                        >
                          4MP DeepinView Moto Varifocal Dome Camera
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Bullet Camera */}
                    <div
                      style={{
                        backgroundColor: '#f8f9fb',
                        borderRadius: '6px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                      }}
                      onClick={() => setShowSalesModal(true)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f1f4f8';
                        e.currentTarget.style.borderColor = 'rgba(0, 113, 227, 0.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fb';
                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                      }}
                    >
                      <div
                        style={{
                          width: '68px',
                          height: '68px',
                          flexShrink: 0,
                          backgroundColor: '#ffffff',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(0, 0, 0, 0.05)',
                          overflow: 'hidden',
                        }}
                      >
                        <img
                          src="/images/bus_stop/product_deepinview_bullet.png"
                          alt="iDS-2CD7A46G0-IZHS(Y)"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div
                          style={{
                            fontSize: '0.94rem',
                            fontWeight: 700,
                            color: '#1d1d1f',
                            marginBottom: '4px',
                            lineHeight: 1.3,
                          }}
                        >
                          iDS-2CD7A46G0-IZHS(Y)
                        </div>
                        <div
                          style={{
                            fontSize: '0.78rem',
                            color: '#6e6e73',
                            lineHeight: 1.4,
                          }}
                        >
                          4MP DeepinView Moto Varifocal Bullet Camera
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 2: NVR */}
              <div
                style={{
                  borderBottom: '1px solid #e5e7eb',
                  padding: '16px 0 20px',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion('nvr')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    padding: '4px 0 16px',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#1d1d1f',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    NVR
                  </span>
                  <div style={{ color: '#86868b', display: 'flex', alignItems: 'center' }}>
                    {openAccordions.nvr ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                </button>

                {openAccordions.nvr && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                      gap: '16px',
                    }}
                  >
                    {/* Card 1: NVR */}
                    <div
                      style={{
                        backgroundColor: '#f8f9fb',
                        borderRadius: '6px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                      }}
                      onClick={() => setShowSalesModal(true)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f1f4f8';
                        e.currentTarget.style.borderColor = 'rgba(0, 113, 227, 0.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fb';
                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                      }}
                    >
                      <div
                        style={{
                          width: '68px',
                          height: '68px',
                          flexShrink: 0,
                          backgroundColor: '#ffffff',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(0, 0, 0, 0.05)',
                          color: '#0071e3',
                        }}
                      >
                        <Layers size={28} />
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div
                          style={{
                            fontSize: '0.94rem',
                            fontWeight: 700,
                            color: '#1d1d1f',
                            marginBottom: '4px',
                            lineHeight: 1.3,
                          }}
                        >
                          iDS-7716NXI-M4/16P/X
                        </div>
                        <div
                          style={{
                            fontSize: '0.78rem',
                            color: '#6e6e73',
                            lineHeight: 1.4,
                          }}
                        >
                          16-ch 1.5U DeepinMind NVR with Face & Behavior Analytics
                        </div>
                      </div>
                    </div>

                    {/* Card 2: NVR */}
                    <div
                      style={{
                        backgroundColor: '#f8f9fb',
                        borderRadius: '6px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                      }}
                      onClick={() => setShowSalesModal(true)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f1f4f8';
                        e.currentTarget.style.borderColor = 'rgba(0, 113, 227, 0.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fb';
                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                      }}
                    >
                      <div
                        style={{
                          width: '68px',
                          height: '68px',
                          flexShrink: 0,
                          backgroundColor: '#ffffff',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(0, 0, 0, 0.05)',
                          color: '#0071e3',
                        }}
                      >
                        <Cpu size={28} />
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div
                          style={{
                            fontSize: '0.94rem',
                            fontWeight: 700,
                            color: '#1d1d1f',
                            marginBottom: '4px',
                            lineHeight: 1.3,
                          }}
                        >
                          iDS-9632NXI-I8/X
                        </div>
                        <div
                          style={{
                            fontSize: '0.78rem',
                            color: '#6e6e73',
                            lineHeight: 1.4,
                          }}
                        >
                          32-ch 2U DeepinMind Enterprise Behavior Analysis NVR
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: SUCCESS STORIES (Exact Match to Screenshot) */}
      <section
        id="success-stories"
        style={{
          padding: 'clamp(56px, 7vw, 90px) 24px',
          backgroundColor: '#f5f5f7',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Centered Heading */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: 0,
              }}
            >
              Success stories
            </h2>
          </div>

          {/* Featured Case Study Bento Card (Matching Pakistani bus stations screenshot) */}
          <div
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.06)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            {/* Left Case Study Photo */}
            <div style={{ position: 'relative', width: '100%', minHeight: '260px' }}>
              <img
                src="/images/bus_stop/bus_stop_success_story.jpg"
                alt="Digital signage solution for Pakistani bus stations"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Right Case Study Details */}
            <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#0071e3',
                  letterSpacing: '0.05em',
                  marginBottom: '10px',
                }}
              >
                Case Study · South Asia
              </span>

              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  margin: '0 0 14px',
                  lineHeight: 1.3,
                }}
              >
                Digital signage solution for Pakistani bus stations
              </h3>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#6e6e73',
                  lineHeight: 1.6,
                  margin: '0 0 24px',
                }}
              >
                A high-reliability digital signage deployment across metropolitan transit hubs, delivering real-time bus arrivals and live route schedules to hundreds of thousands of daily commuters.
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => setShowSalesModal(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: '#0071e3',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  <span>Read case study</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: YOU MAY ALSO BE INTERESTED IN (Exact Match to Screenshot) */}
      <section id="related-links" style={{ padding: 'clamp(56px, 7vw, 90px) 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Centered Heading */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: 0,
              }}
            >
              You may also be interested in
            </h2>
          </div>

          {/* 3 Related Scenario Bento Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {[
              {
                title: 'TRANSIT BUS ON-BOARD',
                desc: 'Onboard mobile NVRs, driver fatigue monitoring, advanced driving assistance (ADAS), and passenger counting.',
                route: '/solutions',
                image: '/images/scenarios/transit_bus_onboard.jpg',
              },
              {
                title: 'URBAN ROADWAYS',
                desc: 'Smart traffic intersection signal controls, flow radar velocity detection, and coordinated green wave progression.',
                route: '/solutions/urban-roadways',
                image: '/images/scenarios/urban_roadways.jpg',
              },
              {
                title: 'PARKING LOTS',
                desc: 'Automated ANPR vehicle barrier control, parking guidance indicator displays, and space occupancy monitoring.',
                route: '/solutions',
                image: '/images/scenarios/parking_lots.jpg',
              },
            ].map((rel, idx) => (
              <Link
                key={idx}
                to={rel.route}
                style={{
                  position: 'relative',
                  height: '220px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px',
                  color: '#ffffff',
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.06)';
                  e.currentTarget.style.boxShadow = '0 14px 36px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)';
                }}
              >
                {/* Background image */}
                <img
                  src={rel.image}
                  alt={rel.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                    transition: 'transform 0.5s ease',
                  }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/cctv_hero_banner.png';
                  }}
                />

                {/* Dark Gradient Overlay for Contrast */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(15,20,30,0.15) 0%, rgba(15,20,30,0.7) 50%, rgba(15,20,30,0.92) 100%)',
                    zIndex: 1,
                  }}
                />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h4
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      margin: '0 0 8px',
                      textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                    }}
                  >
                    {rel.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: 1.45,
                      margin: '0 0 12px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {rel.desc}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#ffffff',
                    }}
                  >
                    <span>Explore Scenario</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SECTION 6: READY TO DISCUSS YOUR NEEDS (Exact Match to Screenshot) */}
      <section
        style={{
          padding: 'clamp(64px, 8vw, 96px) 24px',
          backgroundColor: '#f5f5f7',
          borderTop: '1px solid rgba(0,0,0,0.06)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
              fontWeight: 800,
              color: '#1d1d1f',
              letterSpacing: '-0.03em',
              margin: '0 0 16px',
            }}
          >
            Ready to discuss your needs?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#6e6e73',
              lineHeight: 1.6,
              margin: '0 0 32px',
            }}
          >
            Connect with Coloron certified transit engineering specialists to plan, simulate, and deploy a turnkey smart bus stop and passenger information infrastructure.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              type="button"
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
                boxShadow: '0 6px 20px rgba(215, 0, 21, 0.4)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b70012';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d70015';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              CONTACT US NOW
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
      </section>

      {/* Contact Sales Modal */}
      {showSalesModal && (
        <ContactSalesModal
          solutionName="Smart Bus Stop Solution"
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
