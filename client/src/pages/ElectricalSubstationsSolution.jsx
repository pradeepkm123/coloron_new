import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Shield,
  Activity,
  Flame,
  Cpu,
  Eye,
  Camera,
  AlertTriangle,
  FileText,
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Maximize2,
  PhoneCall,
  Download,
  Share2,
  Sparkles,
  Layers,
  Thermometer,
  Gauge,
  X
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for 3D Cutaway Electrical Substation Overview
const substationHotspots = [
  {
    id: 'transformer',
    number: '1',
    title: 'Main Transformer & Shunt Reactors',
    subtitle: 'Thermal Hotspot & Oil Temperature Monitoring',
    desc: 'High-precision radiometric thermal cameras continuously monitor high-voltage transformer bushings, radiators, tank bodies, and cable terminations. Instant alarm triggers when thermal rise exceeds critical thresholds.',
    top: '40%',
    left: '52%',
    device: 'Bi-Spectrum Thermal PTZ (DS-2TD4237-25/W)',
    spec: '±2°C temperature accuracy, 384×288 thermal sensor, 4 MP optical 32x zoom, optical-thermal picture-in-picture',
    benefit: 'Early detection of oil overheating and loose bushing connections prevents catastrophic transformer fires.',
  },
  {
    id: 'switchyard',
    number: '2',
    title: 'HV Switchyard & Circuit Breakers',
    subtitle: 'Blade Position Verification & SF6 Leak Detection',
    desc: 'TandemVu panoramic PTZ cameras inspect high-voltage disconnect switches and circuit breakers. AI algorithms verify open/closed blade contact positions and detect foreign objects or bird nests on busbars.',
    top: '26%',
    left: '60%',
    device: 'TandemVu Dual-Channel 4K PTZ (DS-2SE7C432MW-AEB)',
    spec: 'Dual 4K sensors, panoramic wide-angle channel + 32x optical zoom detail channel, 200m smart IR',
    benefit: 'Automates switch status verification during switching operations without sending engineers into live switchyards.',
  },
  {
    id: 'relay-room',
    number: '3',
    title: 'Indoor Switchgear & Relay Room',
    subtitle: 'AI Analog Gauge Reading & Status Indicators',
    desc: 'Deep-learning indoor cameras read pointer meters, oil level sight glasses, and digital counters across switchgear cabinets. Compares real-time readings with historical baselines to flag anomalous pressure drops.',
    top: '52%',
    left: '42%',
    device: 'Industrial AI Meter Reading Bullet (iDS-2CD7A46G0/P-IZHS)',
    spec: 'DeepinView meter recognition algorithm, 4 MP 1/1.8" CMOS, integrated white light illuminator',
    benefit: 'Replaces error-prone manual clipboard readings with automated, timestamped digital telemetry.',
  },
  {
    id: 'control-room',
    number: '4',
    title: 'Central Control & Dispatch Room',
    subtitle: 'Unified SCADA & Video Platform Integration',
    desc: 'Central management server hosting Coloron / HikCentral Power & Utilities platform. Integrates video feeds, thermal heatmaps, perimeter tripwires, and SCADA alarm linkages onto an interactive 3D digital twin.',
    top: '64%',
    left: '48%',
    device: 'Central Video & AI Management Server (Blazer Pro Core)',
    spec: 'E-Map digital twin, 3D temperature heatmapping, automated SMS/email incident dispatch, SCADA IEC 61850 protocol support',
    benefit: 'Centralizes monitoring of 50+ remote unmanned substations from a single regional command center.',
  },
  {
    id: 'perimeter',
    number: '5',
    title: 'Substation Perimeter Fence Line',
    subtitle: 'Anti-Intrusion & High-Voltage Warning',
    desc: 'AcuSense smart hybrid light bullet cameras and thermal fence barriers detect unauthorized trespassers, metal scavengers, and wildlife before they reach hazardous high-voltage equipment zones.',
    top: '58%',
    left: '66%',
    device: 'AcuSense Thermal-Optical Fence Bullet (DS-2TD2617-6/PA)',
    spec: 'Human/vehicle classification, audible warning horn ("Warning: High-voltage restricted zone"), flashing strobe light',
    benefit: 'Eliminates 99% of false alarms from weeds or weather while instantly turning back intruders with active deterrence.',
  },
];

export default function ElectricalSubstationsSolution() {
  const [activeHotspot, setActiveHotspot] = useState(substationHotspots[0]);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [copiedShare, setCopiedShare] = useState(false);
  const [showBrochureModal, setShowBrochureModal] = useState(false);

  // Accordion state for product section
  const [openAccordions, setOpenAccordions] = useState({
    tandemvu: true,
    ptz: false,
    thermal: true,
    platform: false,
  });

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'challenges', 'what-we-offer', 'download', 'interested'];
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
      {/* 1. HERO SECTION: Panoramic Substation Banner with Warm Amber Radial Overlay */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '440px',
          height: 'clamp(440px, 42vw, 540px)',
          overflow: 'hidden',
          backgroundColor: '#0f172a',
        }}
      >
        {/* Real High-Resolution Substation Hero Image */}
        <img
          src="/images/electrical_substations/substation_hero.jpg"
          alt="Electrical Substations Security Protection Solution"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 45%',
            filter: 'brightness(0.96)',
          }}
        />

        {/* Warm Amber / Gold Circular Gradient Glow (exact match to screenshot) */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-12%',
            width: '65vw',
            height: '140%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.75) 0%, rgba(180, 83, 9, 0.55) 45%, rgba(146, 64, 14, 0.25) 75%, transparent 100%)',
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
        />

        {/* Darkening subtle linear overlay for typography readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.62) 0%, rgba(0, 0, 0, 0.35) 50%, rgba(0, 0, 0, 0.12) 100%)',
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
            <Zap size={15} color="#fde047" />
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
            Electrical Substations
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(17px, 2vw, 22px)',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.94)',
              margin: 0,
              maxWidth: '650px',
              lineHeight: 1.45,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            Continuous, reliable and efficient power supply
          </p>
        </div>
      </section>

      {/* 2. SUB-BAR: Breadcrumb & Utility Actions */}
      <div
        style={{
          backgroundColor: '#fafafc',
          borderBottom: '1px solid #e5e7eb',
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
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* Breadcrumb path */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link to="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Coloron</Link>
            <span>/</span>
            <Link to="/solutions" style={{ color: '#6b7280', textDecoration: 'none' }}>Solutions</Link>
            <span>/</span>
            <Link to="/solutions" style={{ color: '#6b7280', textDecoration: 'none' }}>Solutions by Scenario</Link>
            <span>/</span>
            <span style={{ color: '#111827', fontWeight: 600 }}>Electrical Substations Security Protection Solution</span>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => setShowSalesModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'none',
                border: 'none',
                color: '#d97706',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '6px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#fef3c7')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <PhoneCall size={14} />
              <span>Contact Specialist</span>
            </button>

            <button
              onClick={handleShare}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'none',
                border: 'none',
                color: '#4b5563',
                fontSize: '13px',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '6px',
              }}
              title="Share this solution"
            >
              <Share2 size={14} />
              <span>{copiedShare ? 'Copied Link!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. STICKY SUB-NAVIGATION */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 40,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            gap: '32px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          {[
            { id: 'overview', label: 'Solution overview' },
            { id: 'challenges', label: 'Operations & Maintenance management' },
            { id: 'what-we-offer', label: 'What we offer' },
            { id: 'download', label: 'Download' },
            { id: 'interested', label: 'You may also be interested in' },
          ].map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '16px 0',
                  fontSize: '15px',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#d97706' : '#4b5563',
                  borderBottom: isActive ? '2px solid #d97706' : '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* 4. SECTION 1: SOLUTION OVERVIEW */}
      <section
        id="overview"
        style={{
          padding: '72px 32px 80px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        {/* Title & Description */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
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
          <div
            style={{
              maxWidth: '940px',
              margin: '0 auto',
              fontSize: '15px',
              lineHeight: 1.75,
              color: '#4b5563',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <p style={{ margin: 0 }}>
              To prevent electric shocks and power outages caused by equipment ageing, lightning strikes, or excessive temperature, substations require reliable 24/7 security and condition monitoring systems to safeguard equipment, staff, and surrounding perimeters.
            </p>
            <p style={{ margin: 0 }}>
              Coloron's Electrical Substation Solution integrates intelligent thermal radiometric monitoring, AI meter inspection, robotic virtual patrols, and integrated perimeter security to guarantee safe, reliable, and uninterrupted electrical grid operations.
            </p>
          </div>
        </div>

        {/* 3D Cutaway Substation Layout Card */}
        <div
          style={{
            position: 'relative',
            marginTop: '36px',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* Main 3D Model Graphic */}
          <div style={{ position: 'relative', width: '100%', minHeight: '440px', backgroundColor: '#ffffff' }}>
            <img
              src="/images/electrical_substations/substation_3d_map.jpg"
              alt="Electrical Substation 3D Architecture Map"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '660px',
                objectFit: 'contain',
                margin: '0 auto',
              }}
            />

            {/* Interactive Pulse Hotspots */}
            {substationHotspots.map((spot) => {
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
                    width: isSelected ? '38px' : '32px',
                    height: isSelected ? '38px' : '32px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? '#dc2626' : '#ef4444',
                    color: '#ffffff',
                    border: '3px solid #ffffff',
                    boxShadow: isSelected
                      ? '0 0 0 6px rgba(220, 38, 38, 0.35), 0 4px 12px rgba(0,0,0,0.3)'
                      : '0 0 0 3px rgba(239, 68, 68, 0.25), 0 2px 8px rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: isSelected ? '15px' : '13px',
                    cursor: 'pointer',
                    zIndex: 20,
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  title={spot.title}
                >
                  {spot.number}
                </button>
              );
            })}

            {/* Lightbox / Zoom Button */}
            <button
              onClick={() => setLightboxImage('/images/electrical_substations/substation_3d_map.jpg')}
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(8px)',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                padding: '8px 14px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#334155',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}
            >
              <Maximize2 size={14} />
              <span>Inspect 3D Layout</span>
            </button>
          </div>

          {/* Hotspot Info Panel */}
          <div
            style={{
              padding: '24px 32px',
              backgroundColor: '#f8fafc',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            {/* Zone Selector Pills */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginBottom: '4px',
              }}
            >
              {substationHotspots.map((spot) => {
                const isSelected = activeHotspot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(spot)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '7px 16px',
                      borderRadius: '24px',
                      backgroundColor: isSelected ? '#d97706' : '#ffffff',
                      color: isSelected ? '#ffffff' : '#475569',
                      border: isSelected ? '1px solid #d97706' : '1px solid #cbd5e1',
                      fontSize: '13px',
                      fontWeight: isSelected ? 600 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    <span
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        backgroundColor: isSelected ? '#ffffff' : '#ef4444',
                        color: isSelected ? '#d97706' : '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: 700,
                      }}
                    >
                      {spot.number}
                    </span>
                    <span>{spot.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Zone Specs Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '20px 24px',
                border: '1px solid #e2e8f0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: '4px',
                      backgroundColor: '#fef3c7',
                      color: '#b45309',
                      fontSize: '11px',
                      fontWeight: 700,
                    }}
                  >
                    LOCATION {activeHotspot.number}
                  </span>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                    {activeHotspot.title}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#475569', margin: '0 0 10px 0' }}>
                  {activeHotspot.desc}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#16a34a' }}>
                  <CheckCircle2 size={16} />
                  <span style={{ fontWeight: 600 }}>Operational Gain: {activeHotspot.benefit}</span>
                </div>
              </div>

              <div
                style={{
                  borderLeft: '1px solid #f1f5f9',
                  paddingLeft: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <div>
                  <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Recommended Core Hardware
                  </span>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', marginTop: '2px' }}>
                    {activeHotspot.device}
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Key Performance Specs
                  </span>
                  <div style={{ fontSize: '13px', color: '#475569', marginTop: '2px', lineHeight: 1.4 }}>
                    {activeHotspot.spec}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 2: OPERATIONS & MAINTENANCE MANAGEMENT (CHALLENGES) */}
      <section
        id="challenges"
        style={{
          padding: '72px 32px 80px',
          backgroundColor: '#fafafc',
          borderTop: '1px solid #f0f0f2',
          borderBottom: '1px solid #f0f0f2',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#111827',
                margin: '0 0 10px 0',
              }}
            >
              Operations &amp; Maintenance management
            </h2>
            <div
              style={{
                display: 'inline-block',
                fontSize: '16px',
                fontWeight: 600,
                color: '#d97706',
                borderBottom: '2px solid #d97706',
                paddingBottom: '4px',
              }}
            >
              Challenges
            </div>
            <p
              style={{
                fontSize: '14px',
                color: '#6b7280',
                maxWidth: '680px',
                margin: '14px auto 0',
                lineHeight: 1.6,
              }}
            >
              Substations are located in remote and harsh environments, making manual inspections time-consuming, hazardous, and difficult to staff 24/7.
            </p>
          </div>

          {/* Two Side-by-Side Challenge Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '32px',
              maxWidth: '1080px',
              margin: '0 auto',
            }}
          >
            {/* Challenge 1: Lack of qualified inspection personnel */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden', backgroundColor: '#111827' }}>
                <img
                  src="/images/electrical_substations/challenge_personnel.jpg"
                  alt="Lack of qualified inspection personnel"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div style={{ padding: '24px 28px' }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#111827',
                    margin: '0 0 10px 0',
                  }}
                >
                  Lack of qualified inspection personnel
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#4b5563',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Experienced substation engineers are in short supply, while traveling to distant substations for routine maintenance requires significant time and cost.
                </p>
              </div>
            </div>

            {/* Challenge 2: Critical operations require round-the-clock monitoring */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden', backgroundColor: '#111827' }}>
                <img
                  src="/images/electrical_substations/challenge_operations.jpg"
                  alt="Critical operations require round-the-clock monitoring"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div style={{ padding: '24px 28px' }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#111827',
                    margin: '0 0 10px 0',
                  }}
                >
                  Critical operations require round-the-clock monitoring
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#4b5563',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  High-voltage equipment failure can trigger severe power blackouts in minutes. Periodic human patrols cannot catch sudden thermal runaways or insulation breakdowns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 3: WHAT WE OFFER */}
      <section
        id="what-we-offer"
        style={{
          padding: '80px 32px 90px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#111827',
              margin: '0 0 12px 0',
            }}
          >
            What we offer
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: '#4b5563',
              maxWidth: '820px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Continuous thermography, AI computer vision, and robotic automated patrols safeguard substation uptime.
          </p>
        </div>

        {/* 4 Feature Alternating Rows (Matches screenshot layout) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '56px', marginBottom: '80px' }}>
          {/* Row 1: Critical asset monitoring */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                backgroundColor: '#f8fafc',
              }}
            >
              <img
                src="/images/electrical_substations/offer_asset_monitoring.jpg"
                alt="Critical asset monitoring"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxHeight: '380px',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#111827',
                  margin: '0 0 12px 0',
                }}
              >
                Critical asset monitoring
              </h3>
              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7, margin: '0 0 16px 0' }}>
                Continuous thermal and visual monitoring of key equipment such as transformers, bushings, and disconnect switches.
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '20px',
                  fontSize: '14px',
                  color: '#4b5563',
                  lineHeight: 1.8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <li>Pinpoints abnormal heating in bushings, oil tanks, and joints before catastrophic breakdown.</li>
                <li>Real-time temperature trend graphing and predictive threshold alarming.</li>
                <li>Reduces unscheduled power outages and extends substation asset lifespans.</li>
              </ul>
            </div>
          </div>

          {/* Row 2: Infrared thermography (Text Left, Image Right) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#111827',
                  margin: '0 0 12px 0',
                }}
              >
                Infrared thermography
              </h3>
              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7, margin: '0 0 16px 0' }}>
                Radiometric thermal cameras continuously measure surface temperatures across electrical substations without physical contact.
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '20px',
                  fontSize: '14px',
                  color: '#4b5563',
                  lineHeight: 1.8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <li>Non-contact surface temperature measurement up to ±2°C accuracy.</li>
                <li>Dual-spectrum fusion displays both high-definition optical details and thermal heatmaps.</li>
                <li>Pre-set inspection patrol routes automate thermographic scanning cycles.</li>
              </ul>
            </div>
            <div
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                backgroundColor: '#f8fafc',
              }}
            >
              <img
                src="/images/electrical_substations/offer_thermography.jpg"
                alt="Infrared thermography"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxHeight: '380px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          {/* Row 3: AI-powered analytics (Image Left, Text Right) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                backgroundColor: '#f8fafc',
              }}
            >
              <img
                src="/images/electrical_substations/offer_ai_analytics.jpg"
                alt="AI-powered analytics"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxHeight: '380px',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#111827',
                  margin: '0 0 12px 0',
                }}
              >
                AI-powered analytics
              </h3>
              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7, margin: '0 0 16px 0' }}>
                Deep-learning computer vision models read analog dial gauges, digital LED indicators, and switch status automatically.
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '20px',
                  fontSize: '14px',
                  color: '#4b5563',
                  lineHeight: 1.8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <li>Automatically reads pointer meters, digital counters, and oil level sight glasses.</li>
                <li>Detects oil leakage, SF6 gas leaks, foreign object intrusion, and disconnect switch blade positions.</li>
                <li>Eliminates human transcription errors and generates automated inspection reports.</li>
              </ul>
            </div>
          </div>

          {/* Row 4: Intelligent inspections (Text Left, Image Right) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#111827',
                  margin: '0 0 12px 0',
                }}
              >
                Intelligent inspections
              </h3>
              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7, margin: '0 0 16px 0' }}>
                Remote robotic and PTZ-driven scheduled patrols replace high-risk manual site visits in dangerous high-voltage switchyards.
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '20px',
                  fontSize: '14px',
                  color: '#4b5563',
                  lineHeight: 1.8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <li>Operators trigger automated routine inspection rounds from the central dispatch room.</li>
                <li>Instant alerts dispatched when abnormal temperature or physical deviations are detected.</li>
                <li>Substation staff avoid high-voltage step potential hazards and toxic SF6 exposure.</li>
              </ul>
            </div>
            <div
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                backgroundColor: '#f8fafc',
              }}
            >
              <img
                src="/images/electrical_substations/offer_inspections.jpg"
                alt="Intelligent inspections"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxHeight: '380px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>

        {/* System Topology Diagram + Hardware Selection Accordions */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '40px',
            alignItems: 'start',
            backgroundColor: '#f8fafc',
            borderRadius: '16px',
            padding: '36px',
            border: '1px solid #e2e8f0',
          }}
        >
          {/* Left: System Topology Architecture */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                  System Topology
                </h3>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  Integrated Optical &amp; Thermal Substation Network
                </span>
              </div>
              <button
                onClick={() => setLightboxImage('/images/electrical_substations/substation_topology.png')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#334155',
                  cursor: 'pointer',
                }}
              >
                <Maximize2 size={13} />
                <span>Full Topology</span>
              </button>
            </div>

            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                padding: '16px',
                cursor: 'pointer',
              }}
              onClick={() => setLightboxImage('/images/electrical_substations/substation_topology.png')}
            >
              <img
                src="/images/electrical_substations/substation_topology.png"
                alt="Electrical Substation Security Architecture Topology"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '8px',
                }}
              />
            </div>
            <p style={{ fontSize: '12px', color: '#64748b', marginTop: '10px', lineHeight: 1.5 }}>
              Interconnects Bi-Spectrum Thermal Cameras, TandemVu PTZ, DeepinView AI Bullet Cameras, NVR/Central Servers, and SCADA dispatch interfaces.
            </p>
          </div>

          {/* Right: Selected Products Accordions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Accordion 1: TandemVu PTZ Camera */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              }}
            >
              <button
                onClick={() => toggleAccordion('tandemvu')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '18px 20px',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a' }}>
                  TandemVu PTZ Camera
                </span>
                {openAccordions.tandemvu ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>

              {openAccordions.tandemvu && (
                <div
                  style={{
                    padding: '0 20px 20px',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '13px',
                    color: '#475569',
                    lineHeight: 1.7,
                  }}
                >
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', margin: '14px 0 10px 0' }}>
                    <img
                      src="/images/electrical_substations/prod_tandemvu.png"
                      alt="TandemVu PTZ"
                      style={{ width: '60px', height: 'auto', objectFit: 'contain' }}
                    />
                    <div>
                      <div style={{ fontWeight: 700, color: '#0f172a' }}>iDS-2SE8C442MWX-AEB/W</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Dual 4K Channels • 42x Optical Zoom</div>
                    </div>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Panoramic wide lens continuously monitors overall HV bay while PTZ tracks details.</li>
                    <li>Integrated wiper and defogging system for harsh outdoor weather.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 2: PTZ Camera */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              }}
            >
              <button
                onClick={() => toggleAccordion('ptz')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '18px 20px',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a' }}>
                  PTZ Camera
                </span>
                {openAccordions.ptz ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>

              {openAccordions.ptz && (
                <div
                  style={{
                    padding: '0 20px 20px',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '13px',
                    color: '#475569',
                    lineHeight: 1.7,
                  }}
                >
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', margin: '14px 0 10px 0' }}>
                    <img
                      src="/images/electrical_substations/prod_ptz.png"
                      alt="PTZ Camera"
                      style={{ width: '60px', height: 'auto', objectFit: 'contain' }}
                    />
                    <div>
                      <div style={{ fontWeight: 700, color: '#0f172a' }}>iDS-2DY5430IXR-AT5</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>4 MP 30x Laser Network Positioning System</div>
                    </div>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Up to 500m laser illumination for nighttime switchyard patrols.</li>
                    <li>Ultra-precise 0.1° preset positioning for repeated automated gauge checks.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 3: Thermal Cameras */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              }}
            >
              <button
                onClick={() => toggleAccordion('thermal')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '18px 20px',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a' }}>
                  Thermal Cameras
                </span>
                {openAccordions.thermal ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>

              {openAccordions.thermal && (
                <div
                  style={{
                    padding: '0 20px 20px',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '13px',
                    color: '#475569',
                    lineHeight: 1.7,
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', margin: '14px 0 10px 0' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <img
                        src="/images/electrical_substations/prod_thermal1.png"
                        alt="Thermal Dome"
                        style={{ width: '45px', height: 'auto', objectFit: 'contain' }}
                      />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '12px', color: '#0f172a' }}>DS-2TD4237</div>
                        <div style={{ fontSize: '11px', color: '#64748b' }}>Thermal PTZ</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <img
                        src="/images/electrical_substations/prod_thermal3.png"
                        alt="Thermal Bullet"
                        style={{ width: '45px', height: 'auto', objectFit: 'contain' }}
                      />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '12px', color: '#0f172a' }}>DS-2TD2636</div>
                        <div style={{ fontSize: '11px', color: '#64748b' }}>Thermal Bullet</div>
                      </div>
                    </div>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Radiometric temperature alarm rules: Spot, line, and area temperature analysis.</li>
                    <li>Pre-alarm alerts trigger before equipment reaches critical flashover threshold.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 4: Platform & Central Management */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              }}
            >
              <button
                onClick={() => toggleAccordion('platform')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '18px 20px',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a' }}>
                  Platform &amp; Central Management
                </span>
                {openAccordions.platform ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>

              {openAccordions.platform && (
                <div
                  style={{
                    padding: '0 20px 20px',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '13px',
                    color: '#475569',
                    lineHeight: 1.7,
                  }}
                >
                  <p style={{ margin: '14px 0 8px 0', fontWeight: 600, color: '#0f172a' }}>
                    Coloron HikCentral Power &amp; Utilities Edition
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Integrated 3D GIS interactive digital twin for live substation visualization.</li>
                    <li>Direct IEC 61850 protocol gateway to utility SCADA and EMS dispatch systems.</li>
                    <li>Automated audit logging and daily equipment health status report generation.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 4: DOWNLOAD */}
      <section
        id="download"
        style={{
          padding: '80px 32px',
          backgroundColor: '#fafafc',
          borderTop: '1px solid #f0f0f2',
          borderBottom: '1px solid #f0f0f2',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#111827',
                margin: 0,
              }}
            >
              Download
            </h2>
          </div>

          {/* Download Brochure Card (matches screenshot) */}
          <div
            style={{
              maxWidth: '840px',
              margin: '0 auto',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '28px 36px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  backgroundColor: '#fef3c7',
                  color: '#d97706',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <FileText size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#111827', margin: '0 0 4px 0' }}>
                  Electrical Substations Solution Brochure
                </h3>
                <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>
                  PDF • 8.4 MB • Complete architecture, temperature rules &amp; deployment matrix
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowBrochureModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#d97706',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b45309')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d97706')}
            >
              <Download size={16} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </section>

      {/* 8. SECTION 5: YOU MAY ALSO BE INTERESTED IN */}
      <section
        id="interested"
        style={{
          padding: '80px 32px 90px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#111827',
              margin: 0,
            }}
          >
            You may also be interested in
          </h2>
        </div>

        {/* 3 Visual Cards matching screenshot */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}
        >
          {/* Card 1: Power & Utilities */}
          <div
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              height: '320px',
              backgroundColor: '#111827',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 14px 28px rgba(0,0,0,0.14)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1)';
            }}
            onClick={() => setShowSalesModal(true)}
          >
            <img
              src="/images/electrical_substations/interest_power.jpg"
              alt="Power & Utilities"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.1) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px',
                color: '#ffffff',
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 6px 0' }}>
                Power &amp; Utilities
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.5 }}>
                Comprehensive safety and visual management across generation, transmission, and distribution.
              </p>
            </div>
          </div>

          {/* Card 2: Industrial Thermography */}
          <div
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              height: '320px',
              backgroundColor: '#111827',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 14px 28px rgba(0,0,0,0.14)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1)';
            }}
            onClick={() => setShowSalesModal(true)}
          >
            <img
              src="/images/electrical_substations/interest_thermography.jpg"
              alt="Industrial Thermography"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.1) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px',
                color: '#ffffff',
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 6px 0' }}>
                Industrial Thermography
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.5 }}>
                High-precision radiometric thermal analysis for predictive industrial asset protection.
              </p>
            </div>
          </div>

          {/* Card 3: Intelligent Inspection */}
          <div
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              height: '320px',
              backgroundColor: '#111827',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 14px 28px rgba(0,0,0,0.14)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1)';
            }}
            onClick={() => setShowSalesModal(true)}
          >
            <img
              src="/images/electrical_substations/interest_inspection.jpg"
              alt="Intelligent Inspection"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.1) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px',
                color: '#ffffff',
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 6px 0' }}>
                Intelligent Inspection
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.5 }}>
                Automated AI gauge reading and PTZ inspection tours replacing dangerous manual rounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION 6: READY TO DISCUSS YOUR NEEDS? (CTA) */}
      <section
        style={{
          padding: '80px 32px 90px',
          backgroundColor: '#fafafc',
          borderTop: '1px solid #f0f0f2',
        }}
      >
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#111827',
              margin: '0 0 16px 0',
            }}
          >
            Ready to discuss your needs?
          </h2>

          <p
            style={{
              fontSize: '15px',
              color: '#6b7280',
              maxWidth: '640px',
              margin: '0 0 32px 0',
              lineHeight: 1.6,
            }}
          >
            Talk with a Coloron electrical grid and thermography specialist to design a continuous thermal condition monitoring system for your substation.
          </p>

          {/* Action Buttons matching screenshot */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => setShowSalesModal(true)}
              style={{
                backgroundColor: '#dc2626',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 28px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(220, 38, 38, 0.25)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b91c1c')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
            >
              Get in Touch
            </button>

            <Link
              to="/contact"
              style={{
                backgroundColor: '#ffffff',
                color: '#dc2626',
                border: '1px solid #dc2626',
                borderRadius: '8px',
                padding: '12px 28px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#fef2f2')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
            >
              Find a Distributor
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '90vh',
            }}
          >
            <button
              onClick={() => setLightboxImage(null)}
              style={{
                position: 'absolute',
                top: '-44px',
                right: '0',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              <X size={20} />
              <span>Close</span>
            </button>
            <img
              src={lightboxImage}
              alt="Enlarged Visual"
              style={{
                width: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              }}
            />
          </div>
        </div>
      )}

      {/* BROCHURE MODAL */}
      {showBrochureModal && (
        <div
          onClick={() => setShowBrochureModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              maxWidth: '560px',
              width: '100%',
              padding: '36px',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setShowBrochureModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#64748b',
              }}
            >
              <X size={22} />
            </button>

            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: '#fef3c7',
                color: '#d97706',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <Download size={24} />
            </div>

            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px 0' }}>
              Download Solution Brochure
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, margin: '0 0 20px 0' }}>
              The comprehensive Electrical Substations Guide includes technical wiring schematics, radiometric temperature calibration guides, and camera mounting specifications.
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowBrochureModal(false)}
                style={{
                  backgroundColor: '#f1f5f9',
                  color: '#475569',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 18px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowBrochureModal(false);
                  setShowSalesModal(true);
                }}
                style={{
                  backgroundColor: '#d97706',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Request Custom Design
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SALES MODAL */}
      <ContactSalesModal
        isOpen={showSalesModal}
        onClose={() => setShowSalesModal(false)}
        defaultSubject="Electrical Substations Solution Inquiry"
      />
    </div>
  );
}
