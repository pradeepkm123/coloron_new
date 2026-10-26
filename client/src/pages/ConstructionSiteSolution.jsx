import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Truck,
  HardHat,
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
  Sun,
  Activity,
  X
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for 3D Cutaway Construction Site Overview
const constructionHotspots = [
  {
    id: 'entrance-exit',
    number: '1',
    title: 'Vehicle Entrance & Exit',
    subtitle: 'ANPR & Automated Barrier Gate',
    desc: 'High-speed ANPR camera paired with anti-fall radar barrier gate and bright outdoor LED guidance screen. Automatically verifies licensed contractor trucks, captures weight slips, and eliminates gatehouse queues.',
    top: '56%',
    left: '52%',
    device: 'ANPR Barrier & Radar Terminal (iDS-TCM403-BI)',
    spec: '98%+ recognition rate, dual-lens WDR, anti-tailgating microwave radar, outdoor IP67 weatherproof',
    benefit: 'Eliminates peak-hour delivery congestion and prevents unauthorized dumping vehicles.',
  },
  {
    id: 'building-scaffold',
    number: '2',
    title: 'Building Construction Area',
    subtitle: 'Structure & Scaffolding Protection',
    desc: 'Multi-story structural monitoring with ColorVu smart hybrid bullet cameras covering scaffolding perimeters, hazardous lift shafts, and temporary hoist entrances with tripwire human intrusion alarms.',
    top: '35%',
    left: '46%',
    device: 'ColorVu AcuSense Fixed Bullet (DS-2CD2047G2-LU)',
    spec: '4 MP 24/7 full-color imaging, human/vehicle target classification, strobe light & audible siren warning',
    benefit: 'Instant audio-visual warning turns away trespassers climbing scaffolding after work hours.',
  },
  {
    id: 'crane-highrisk',
    number: '3',
    title: 'Tower Crane & High-Risk Zone',
    subtitle: 'High-Altitude 360° Site Overview',
    desc: 'High-altitude panoramic TandemVu PTZ mounted at the tower crane mast or cab. Provides an uninterrupted 360° panoramic view of the entire development site while tracking heavy lift payloads in optical zoom.',
    top: '24%',
    left: '55%',
    device: 'TandemVu 8-inch 4K 42X PTZ (DS-2SF8C442MXS-DLW)',
    spec: 'Panoramic 4K channel + 42x optical zoom detail channel, 300m smart IR, gyro image stabilization',
    benefit: 'Enables crane operators and safety managers to monitor blind spots and verify crane swing paths.',
  },
  {
    id: 'perimeter-storage',
    number: '4',
    title: 'Perimeter & Material Storage',
    subtitle: 'Copper, Steel & Equipment Yard',
    desc: 'Thermal and optical dual-spectrum cameras guarding open laydown areas and perimeter fence lines against nighttime copper theft, raw material pilferage, and unauthorized boundary breaches.',
    top: '64%',
    left: '60%',
    device: 'Bi-spectrum Thermal & Optical Bullet (DS-2TD2617-6/PA)',
    spec: 'Long-range thermal intrusion detection, zero false alarms from foliage or weather, smoke detection',
    benefit: 'Guarantees round-the-clock detection even in total darkness, dense dust, or torrential rain.',
  },
  {
    id: 'worker-turnstile',
    number: '5',
    title: 'Site Office & Worker Turnstile',
    subtitle: 'PPE Safety Compliance & Time Attendance',
    desc: 'Heavy-duty full-height or tripod turnstiles fitted with facial recognition terminals. Detects mandatory hard-hat / PPE compliance before unlocking gate and logs subcontractor work hours directly into payroll.',
    top: '72%',
    left: '55%',
    device: 'Face Recognition Terminal with PPE Detection (DS-K1T673DX)',
    spec: '0.2s face recognition, hard hat detection algorithm, IP65 waterproof, anti-spoofing dual-lens',
    benefit: 'Enforces 100% PPE compliance at site boundary and automates accurate subcontractor billing.',
  },
];

export default function ConstructionSiteSolution() {
  const [activeHotspot, setActiveHotspot] = useState(constructionHotspots[0]);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [copiedShare, setCopiedShare] = useState(false);
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);

  // Accordion state matching the 4 categories in screenshot
  const [openAccordions, setOpenAccordions] = useState({
    perimeter: true,
    ptz: false,
    access: false,
    software: false,
  });

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'challenges', 'what-we-offer', 'success-stories', 'interested'];
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
      {/* 1. HERO SECTION: Panoramic Banner with warm amber/orange accent curved overlay */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '440px',
          height: 'clamp(440px, 42vw, 540px)',
          overflow: 'hidden',
          backgroundColor: '#111827',
        }}
      >
        {/* Real High-Resolution Construction Site Banner Image */}
        <img
          src="/images/construction_site/construction_hero.jpg"
          alt="Construction Site Security Solution"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            filter: 'brightness(0.95)',
          }}
        />

        {/* Ambient Warm Amber Circular Accent Layer (matches screenshot) */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-15%',
            width: '65vw',
            height: '140%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(234, 88, 12, 0.72) 0%, rgba(217, 119, 6, 0.55) 45%, rgba(180, 83, 9, 0.25) 75%, transparent 100%)',
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
        />

        {/* Darkening subtle linear overlay for high-contrast typography */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.35) 45%, rgba(0, 0, 0, 0.1) 100%)',
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
            <Shield size={15} color="#fed7aa" />
            <span>Solutions by Scenario</span>
          </div>

          {/* Main Title */}
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
            Construction Site
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
            Total security and intelligent services
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
            <span style={{ color: '#111827', fontWeight: 600 }}>Construction Site</span>
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
            { id: 'challenges', label: 'Vehicle entrance & exit' },
            { id: 'what-we-offer', label: 'What we offer' },
            { id: 'success-stories', label: 'Success stories' },
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
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
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
              maxWidth: '920px',
              margin: '0 auto',
              fontSize: '15px',
              lineHeight: 1.75,
              color: '#4b5563',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <p style={{ margin: 0 }}>
              A construction site can be dynamic, complex, and hazardous. With multiple contractors and workers coming and going, heavy machinery operating, and valuable materials and equipment on site, effective security and safety management is critical.
            </p>
            <p style={{ margin: 0 }}>
              Coloron's Construction Site Security Solution provides comprehensive perimeter protection, vehicle and personnel access control, remote site monitoring, and safety compliance checks, helping project managers safeguard assets, maintain worker safety, and streamline daily site operations.
            </p>
          </div>
        </div>

        {/* 3D Cutaway Interactive Graphic Card */}
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
          {/* Main 3D Isometric Map Image */}
          <div style={{ position: 'relative', width: '100%', minHeight: '440px', backgroundColor: '#ffffff' }}>
            <img
              src="/images/construction_site/construction_3d_map.jpg"
              alt="Construction Site 3D Interactive Map"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '680px',
                objectFit: 'contain',
                margin: '0 auto',
              }}
            />

            {/* Interactive Pulse Hotspots */}
            {constructionHotspots.map((spot) => {
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

            {/* Magnify / Full-Screen Button */}
            <button
              onClick={() => setLightboxImage('/images/construction_site/construction_3d_map.jpg')}
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
              <span>Inspect 3D Architecture</span>
            </button>
          </div>

          {/* Hotspot Info Panel (Dynamic based on selected numbered pin) */}
          <div
            style={{
              padding: '24px 32px',
              backgroundColor: '#f8fafc',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {/* Top row: Hotspots Selector Pill Tabs */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginBottom: '8px',
              }}
            >
              {constructionHotspots.map((spot) => {
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
                    ZONE {activeHotspot.number}
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
                  <span style={{ fontWeight: 600 }}>Impact: {activeHotspot.benefit}</span>
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

      {/* 5. SECTION 2: VEHICLE ENTRANCE & EXIT (CHALLENGES) */}
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
              Vehicle entrance & exit
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
              Gate control at active construction sites frequently struggles with heavy delivery bottlenecks and error-prone paper manifests.
            </p>
          </div>

          {/* Two Side-by-Side Challenge Cards (matches screenshot layout) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '32px',
              maxWidth: '1080px',
              margin: '0 auto',
            }}
          >
            {/* Challenge 1: Rush hour congestion */}
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
                  src="/images/construction_site/challenge_congestion.jpg"
                  alt="Rush hour vehicle congestion at gate"
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
                  Rush hour congestion
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#4b5563',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Manual gate checks and paper logs cause long queues during peak delivery hours, backing up cement mixers and flatbeds onto public streets and causing costly site delays.
                </p>
              </div>
            </div>

            {/* Challenge 2: Paper record filing is cumbersome */}
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
                  src="/images/construction_site/challenge_records.jpg"
                  alt="Paper delivery records and logs"
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
                  Paper record filing is cumbersome
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#4b5563',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Relying on manual clipboard registers leaves sites prone to illegible data, unrecorded deliveries, and high risks of unauthorized waste dumping that cannot be audited retroactively.
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
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
            Deliveries and heavy vehicle management are made fast and automated with high-accuracy ANPR, automated barrier gates, and integrated LED displays.
          </p>
        </div>

        {/* Top Half: Gate Automation Showcase (Image Left + Benefits/Features Right) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '72px',
          }}
        >
          {/* Gate Image with Lightbox */}
          <div
            style={{
              position: 'relative',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 8px 28px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e5e7eb',
              backgroundColor: '#f9fafb',
            }}
          >
            <img
              src="/images/construction_site/construction_offer.jpg"
              alt="Automated ANPR Heavy Vehicle Gate Barrier"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '440px',
                objectFit: 'cover',
              }}
            />
            <button
              onClick={() => setLightboxImage('/images/construction_site/construction_offer.jpg')}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(6px)',
                border: 'none',
                borderRadius: '8px',
                padding: '6px 10px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#1f2937',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Maximize2 size={13} />
              <span>Zoom</span>
            </button>
          </div>

          {/* Benefits & Features Bullet Lists */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Benefits Block */}
            <div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#111827',
                  margin: '0 0 14px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#d97706',
                  }}
                />
                Benefits
              </h3>
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
                <li>Fast vehicle passage without stopping for paper tickets.</li>
                <li>Accurate vehicle tracking and automated weight/capacity recording.</li>
                <li>Real-time event log prevents unauthorized vehicle entry & illegal dumping.</li>
              </ul>
            </div>

            {/* Features Block */}
            <div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#111827',
                  margin: '0 0 14px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#d97706',
                  }}
                />
                Features
              </h3>
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
                <li>Up to 98%+ ANPR recognition rate for various license plate formats.</li>
                <li>Radar-triggered barrier anti-fall technology protects vehicles and pedestrians.</li>
                <li>Outdoor bright LED display shows license plate, driver status, and instructions.</li>
                <li>Video intercom integrated for instant driver-to-control-room communication.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Half: System Topology Diagram + Hardware Accordions */}
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
          {/* Left: Topology Architecture Diagram */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                  System Topology
                </h3>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  Integrated IP-connected site security network
                </span>
              </div>
              <button
                onClick={() => setLightboxImage('/images/construction_site/construction_topology.jpg')}
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
                <span>Full Diagram</span>
              </button>
            </div>

            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                padding: '12px',
                cursor: 'pointer',
              }}
              onClick={() => setLightboxImage('/images/construction_site/construction_topology.jpg')}
            >
              <img
                src="/images/construction_site/construction_topology.jpg"
                alt="Construction Site Gate & Surveillance Topology Diagram"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '8px',
                }}
              />
            </div>
            <p style={{ fontSize: '12px', color: '#64748b', marginTop: '10px', lineHeight: 1.5 }}>
              Shows interconnected Control Room, Attendant Booth, PoE Industrial Switch, LED Display, ANPR Camera + Radar, Video Intercom, and Barrier Gate.
            </p>
          </div>

          {/* Right: Product Category Accordions (matches screenshot) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Accordion 1: Perimeter security camera */}
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
                onClick={() => toggleAccordion('perimeter')}
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
                  Perimeter security camera
                </span>
                {openAccordions.perimeter ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>

              {openAccordions.perimeter && (
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
                    ColorVu + AcuSense Dual-Lens Perimeter Bullet
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>24/7 vivid color imaging even with zero ambient illumination.</li>
                    <li>AcuSense AI eliminates 98% of false alarms caused by moving foliage, wind, rain, or small animals.</li>
                    <li>Built-in active strobe deterrence and customizable voice alarms ("Warning: Restricted construction area").</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 2: PTZ camera */}
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
                  PTZ camera
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
                  <p style={{ margin: '14px 0 8px 0', fontWeight: 600, color: '#0f172a' }}>
                    TandemVu Dual-Channel High-Speed PTZ
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Upper panoramic lens stays locked on overall construction yard while lower PTZ zooms into specific targets.</li>
                    <li>Up to 42x optical zoom for identifying license plates and equipment serial numbers across vast yards.</li>
                    <li>Smart auto-tracking follows vehicles and individuals along high-risk construction zones.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 3: Access control & Turnstile */}
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
                onClick={() => toggleAccordion('access')}
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
                  Access control & Turnstile
                </span>
                {openAccordions.access ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>

              {openAccordions.access && (
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
                    Ruggedized Biometric Turnstile with Hard-Hat Detection
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Biometric facial authentication functions accurately even when workers wear dust masks or glasses.</li>
                    <li>Automated safety compliance check: gate remains locked if safety helmet is missing.</li>
                    <li>Real-time on-site emergency headcount sync with mobile app for muster point verification.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 4: Software & Management */}
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
                onClick={() => toggleAccordion('software')}
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
                  Software & Management Platform
                </span>
                {openAccordions.software ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>

              {openAccordions.software && (
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
                    Coloron Central Site Management & Mobile Station
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>E-Map displays active camera locations, barrier gate states, and alarm triggers in real time.</li>
                    <li>Subcontractor attendance and vehicle delivery manifest auto-export to Excel/CSV.</li>
                    <li>Mobile app notifications for project managers on high-risk intrusions or safety violations.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 4: SUCCESS STORIES */}
      <section
        id="success-stories"
        style={{
          padding: '80px 32px',
          backgroundColor: '#fafafc',
          borderTop: '1px solid #f0f0f2',
          borderBottom: '1px solid #f0f0f2',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#111827',
                margin: 0,
              }}
            >
              Success stories
            </h2>
          </div>

          {/* Featured Case Study Card matching screenshot */}
          <div
            style={{
              maxWidth: '1080px',
              margin: '0 auto',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.05)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              alignItems: 'stretch',
            }}
          >
            {/* Image side */}
            <div style={{ position: 'relative', minHeight: '320px', backgroundColor: '#111827' }}>
              <img
                src="/images/construction_site/construction_case_study.jpg"
                alt="New Zealand building firm deploys solar-powered security"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: 'rgba(0, 0, 0, 0.72)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 600,
                  padding: '4px 10px',
                  borderRadius: '20px',
                  letterSpacing: '0.4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Sun size={13} color="#f59e0b" />
                <span>Solar-Powered Deploy</span>
              </div>
            </div>

            {/* Content side */}
            <div
              style={{
                padding: '40px 36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#d97706',
                  letterSpacing: '0.8px',
                  marginBottom: '10px',
                }}
              >
                New Zealand / Commercial Build
              </div>

              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#111827',
                  lineHeight: 1.35,
                  margin: '0 0 16px 0',
                }}
              >
                New Zealand building firm deploys solar-powered solution to protect its construction site
              </h3>

              <p
                style={{
                  fontSize: '14px',
                  color: '#4b5563',
                  lineHeight: 1.7,
                  margin: '0 0 24px 0',
                }}
              >
                A high-profile urban project in Auckland faced severe challenges with after-hours cable thefts and absence of grid power. Deploying standalone solar-powered 4G PTZ stations enabled immediate off-grid 24/7 security with remote video alarms, eliminating site theft entirely.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  onClick={() => setShowCaseStudyModal(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#d97706',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b45309')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d97706')}
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
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

        {/* 3 Visual Product Cards matching the screenshot */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}
        >
          {/* Card 1: TandemVu PTZ */}
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
              src="/images/construction_site/interest_standalone.jpg"
              alt="TandemVu PTZ Cameras"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
            />
            {/* Dark gradient overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.1) 100%)',
              }}
            />
            {/* Text at bottom */}
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
                TandemVu PTZ Cameras
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.5 }}>
                One camera covers panoramic view and optical zoom tracking simultaneously.
              </p>
            </div>
          </div>

          {/* Card 2: Thermal Imaging */}
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
              src="/images/construction_site/interest_thermal.png"
              alt="Thermal Imaging"
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
                Thermal Imaging
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.5 }}>
                Detect fire risks, electrical overheating, and long-range perimeter intrusions in total darkness.
              </p>
            </div>
          </div>

          {/* Card 3: Open Space Monitoring */}
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
              src="/images/construction_site/interest_open_space.jpg"
              alt="Open Space Monitoring"
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
                Open Space Monitoring
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.5 }}>
                High-altitude wide-angle coverage for vast construction yards and laydown areas.
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
            Talk with a Coloron solution consultant to design a tailored security, ANPR gate, and site compliance package for your project.
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

      {/* CASE STUDY DETAIL MODAL */}
      {showCaseStudyModal && (
        <div
          onClick={() => setShowCaseStudyModal(false)}
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
              maxWidth: '680px',
              width: '100%',
              padding: '36px',
              position: 'relative',
              maxHeight: '88vh',
              overflowY: 'auto',
            }}
          >
            <button
              onClick={() => setShowCaseStudyModal(false)}
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

            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#d97706',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Auckland, New Zealand • Building Sector
            </span>

            <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', margin: '8px 0 16px 0', lineHeight: 1.3 }}>
              New Zealand building firm deploys solar-powered solution to protect its construction site
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', lineHeight: 1.7, color: '#334155' }}>
              <p style={{ margin: 0 }}>
                <strong>The Challenge:</strong> During the initial foundation and framing stages of a multi-unit residential project in Auckland, power utilities were not yet connected. The building company faced recurrent nighttime burglaries targeting copper pipes, diesel tanks, and power tools.
              </p>
              <p style={{ margin: 0 }}>
                <strong>The Solution:</strong> The contractor deployed 4 standalone solar-powered camera poles equipped with Coloron / Hikvision solar kits, high-capacity lithium iron phosphate batteries, and 4G cellular transmission. The systems feature deep-learning human detection and flashing strobe light deterrence.
              </p>
              <p style={{ margin: 0 }}>
                <strong>The Outcome:</strong> Over an 18-month build timeline, the site recorded zero burglaries. False alarms were reduced to nearly zero, and site managers could audit contractor deliveries directly from their smartphones anywhere in the country.
              </p>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => {
                  setShowCaseStudyModal(false);
                  setShowSalesModal(true);
                }}
                style={{
                  backgroundColor: '#d97706',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 22px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Inquire About Solar Kits
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SALES MODAL */}
      <ContactSalesModal
        isOpen={showSalesModal}
        onClose={() => setShowSalesModal(false)}
        defaultSubject="Construction Site Security Solution Inquiry"
      />
    </div>
  );
}
