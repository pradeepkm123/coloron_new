import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Fuel,
  Shield,
  Truck,
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
  Flame,
  CreditCard,
  Users,
  Store,
  X
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for 3D Cutaway Gas Station Overview
const gasStationHotspots = [
  {
    id: 'entrance-exit',
    number: '1',
    title: 'Vehicle Entrances & Exits',
    subtitle: 'ANPR & Automated Anti-Drive-Off Barrier',
    desc: 'High-speed ANPR camera paired with anti-fall radar barrier gate and bright outdoor LED display. Instantly recognizes vehicle license plates upon arrival, checks against local fuel theft blacklists, and eliminates entrance congestion.',
    top: '58%',
    left: '42%',
    image: '/images/gas_stations/offer_entrance.png',
    device: 'DeepinView ANPR Bullet Camera (iDS-2CD7A46G0/P-IZHS)',
    spec: '98%+ license plate recognition, vehicle make/model/color classification, 50m DarkFighter IR, IP67 weatherproof',
    benefit: 'Stops unpaid fuel drive-offs before vehicles leave the forecourt and provides immediate plate logs.',
  },
  {
    id: 'fueling-canopy',
    number: '2',
    title: 'Fueling Canopy & Pump Islands',
    subtitle: 'Hazardous Flame Detection & Pump Video Linkage',
    desc: 'ATEX-certified explosion-proof cameras and dual-spectrum thermal sensors mounted under the station canopy. Detects open flames, unauthorized smoking, customer mobile phone use, and links high-resolution video to every pump transaction.',
    top: '44%',
    left: '50%',
    image: '/images/gas_stations/zone_fueling.png',
    device: 'Explosion-Proof Bi-Spectrum Thermal Bullet (DS-2TD2466T-25X)',
    spec: 'ATEX & IECEx certified, radiometric temperature alarm, flame detection within 0.1s, 4K optical channel',
    benefit: 'Eliminates fire and explosion hazards before ignition and ties pump transactions to driver video.',
  },
  {
    id: 'unloading-zone',
    number: '3',
    title: 'Tanker Unloading Zone',
    subtitle: 'Fuel Delivery & Electrostatic Grounding Monitoring',
    desc: 'Dedicated safety inspection cameras monitoring the fuel tanker unloading process. Ensures electrostatic grounding clamps are secured, checks for fire extinguisher presence, and monitors for hazardous liquid fuel leaks.',
    top: '32%',
    left: '46%',
    image: '/images/gas_stations/zone_unloading.png',
    device: 'Smart AI Hazardous Area Inspection Bullet (iDS-2CD7046G0-AP)',
    spec: 'Electrostatic clamp grounding AI verification, spill puddle recognition, acoustic alarm broadcast',
    benefit: 'Guarantees strict compliance with hazardous fuel transfer protocols without human oversight errors.',
  },
  {
    id: 'c-store-checkout',
    number: '4',
    title: 'Convenience Store & Checkout',
    subtitle: 'People Counting, Queue Detection & POS Overlay',
    desc: '360° panoramic fisheye cameras combined with dual-lens 3D people counting and POS transaction text overlay. Tracks foot traffic conversion, detects long checkout queues to prompt second till opening, and protects cashier registers.',
    top: '36%',
    left: '58%',
    image: '/images/gas_stations/zone_checkout.png',
    device: '12 MP 360° Panoramic Fisheye & Dual-Lens People Counter',
    spec: '12 MP UHD sensor, heat mapping, queue length AI alarm, POS protocol text insertion',
    benefit: 'Boosts convenience retail revenue, shortens waiting times, and completely deters counter shrinkage.',
  },
  {
    id: 'offices-cash',
    number: '5',
    title: 'Staff Offices & Safe Room',
    subtitle: 'Biometric Access Control & Vault Security',
    desc: 'MinMoe facial recognition access terminals restrict unauthorized entry to station back-offices, safe deposit rooms, and electrical switchgear closets. Real-time notifications alert managers on forced door attempts.',
    top: '28%',
    left: '52%',
    image: '/images/gas_stations/zone_offices.png',
    device: 'MinMoe Touchless Facial Recognition Terminal (DS-K1T671MF)',
    spec: '0.2s facial recognition, anti-spoofing dual-lens, remote door unlock via Hik-Connect mobile app',
    benefit: 'Secures high-value cash deposits and ensures only authorized station managers enter sensitive areas.',
  },
];

export default function GasStationsSolution() {
  const [activeHotspot, setActiveHotspot] = useState(gasStationHotspots[0]);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [copiedShare, setCopiedShare] = useState(false);

  // Accordion state matching the screenshot (Front-end ANPR video unit, LED screen, Software)
  const [openAccordions, setOpenAccordions] = useState({
    anpr: true,
    led: false,
    software: false,
  });

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'challenges', 'what-we-offer', 'interested'];
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
      {/* 1. HERO SECTION: Panoramic Banner with soft purple radial gradient glow (exact match to screenshot) */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '440px',
          height: 'clamp(440px, 42vw, 540px)',
          overflow: 'hidden',
          backgroundColor: '#1e1b4b',
        }}
      >
        {/* Real High-Resolution Gas Station Banner Image */}
        <img
          src="/images/gas_stations/gas_hero.jpg"
          alt="Gas Stations Security & Operations Solution"
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

        {/* Soft Purple Elliptical Accent Glow (matches the gas station canopy in screenshot) */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-12%',
            width: '65vw',
            height: '140%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.72) 0%, rgba(126, 34, 206, 0.52) 45%, rgba(88, 28, 135, 0.22) 75%, transparent 100%)',
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
        />

        {/* Subtle Darkening Overlay for Typography Contrast */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(15, 10, 30, 0.64) 0%, rgba(15, 10, 30, 0.35) 50%, rgba(15, 10, 30, 0.12) 100%)',
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
            <Fuel size={15} color="#e9d5ff" />
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
            Gas Stations
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
            Foundations for safe and reliable operations
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
            <span style={{ color: '#111827', fontWeight: 600 }}>Gas Stations Security &amp; Operations Solution</span>
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
                color: '#9333ea',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '6px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f3e8ff')}
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
            { id: 'challenges', label: 'Vehicle Entrances & Exits' },
            { id: 'what-we-offer', label: 'What we offer' },
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
                  color: isActive ? '#9333ea' : '#4b5563',
                  borderBottom: isActive ? '2px solid #9333ea' : '2px solid transparent',
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
              Gas stations are vital hubs that combine retail convenience stores, fueling operations, and heavy vehicle traffic in high-risk flammable environments.
            </p>
            <p style={{ margin: 0 }}>
              Coloron's Gas Stations Security &amp; Operations Solution delivers comprehensive security from perimeter to pump, combining high-speed ANPR, thermal flame/heat detection, queue monitoring, and integrated retail analytics to guarantee safe fueling, prevent fuel theft (drive-offs), and enhance convenience store sales.
            </p>
          </div>
        </div>

        {/* 3D Cutaway Gas Station Graphic Card */}
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
              src="/images/gas_stations/gas_3d_map.png"
              alt="Gas Station 3D Architecture Map"
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
            {gasStationHotspots.map((spot) => {
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

            {/* Zoom / Lightbox Button */}
            <button
              onClick={() => setLightboxImage('/images/gas_stations/gas_3d_map.png')}
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
              {gasStationHotspots.map((spot) => {
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
                      backgroundColor: isSelected ? '#9333ea' : '#ffffff',
                      color: isSelected ? '#ffffff' : '#475569',
                      border: isSelected ? '1px solid #9333ea' : '1px solid #cbd5e1',
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
                        color: isSelected ? '#9333ea' : '#ffffff',
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
                      backgroundColor: '#f3e8ff',
                      color: '#7e22ce',
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
                  <span style={{ fontWeight: 600 }}>Forecourt Gain: {activeHotspot.benefit}</span>
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

      {/* 5. SECTION 2: VEHICLE ENTRANCES & EXITS (CHALLENGES) */}
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
              Vehicle Entrances &amp; Exits
            </h2>
            <div
              style={{
                display: 'inline-block',
                fontSize: '16px',
                fontWeight: 600,
                color: '#9333ea',
                borderBottom: '2px solid #9333ea',
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
              Vehicle traffic during peak hours creates long queues, and unrecorded license plates enable unpaid drive-offs and illegal station trespassing.
            </p>
          </div>

          {/* Two Side-by-Side Challenge Cards matching screenshot */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '32px',
              maxWidth: '1080px',
              margin: '0 auto',
            }}
          >
            {/* Challenge 1: High egress rates during peak hours */}
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
                  src="/images/gas_stations/challenge_egress.png"
                  alt="High egress rates during peak hours"
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
                  High egress rates during peak hours
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#4b5563',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Heavy commuter traffic and commercial vehicles cause bottlenecks at forecourt approaches, slowing pump turnover and spilling congestion onto adjacent roads.
                </p>
              </div>
            </div>

            {/* Challenge 2: Lack of reliable vehicle records */}
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
                  src="/images/gas_stations/challenge_records.png"
                  alt="Lack of reliable vehicle records"
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
                  Lack of reliable vehicle records
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#4b5563',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Without automated license plate capture, fraudulent drive-offs (unpaid fuel theft) cannot be recovered or traced, resulting in significant annual station losses.
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
              src="/images/gas_stations/offer_entrance.png"
              alt="Automated ANPR Gas Station Entrance Gate"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '440px',
                objectFit: 'cover',
              }}
            />
            <button
              onClick={() => setLightboxImage('/images/gas_stations/offer_entrance.png')}
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
                    backgroundColor: '#9333ea',
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
                <li>Pinpoint drive-offs &amp; unpaid fuel incidents with instant ANPR alerts.</li>
                <li>Blacklist &amp; VIP vehicle recognition with welcoming display boards.</li>
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
                    backgroundColor: '#9333ea',
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
                <li>High-accuracy ANPR camera captures vehicle plates, colors, and vehicle models.</li>
                <li>Flexible multi-lane coverage.</li>
                <li>Vehicle blacklist matching.</li>
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
          {/* Left: System Topology Architecture */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                  System Topology
                </h3>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  Integrated Forecourt Gate &amp; NVR Network
                </span>
              </div>
              <button
                onClick={() => setLightboxImage('/images/gas_stations/gas_topology.png')}
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
                padding: '16px',
                cursor: 'pointer',
              }}
              onClick={() => setLightboxImage('/images/gas_stations/gas_topology.png')}
            >
              <img
                src="/images/gas_stations/gas_topology.png"
                alt="Gas Station Entrance System Topology"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '8px',
                }}
              />
            </div>
            <p style={{ fontSize: '12px', color: '#64748b', marginTop: '10px', lineHeight: 1.5 }}>
              Interconnects Embedded NVR, ANPR Camera, Magic Radar, LED Screen Onboard, and Barrier Turnstile.
            </p>
          </div>

          {/* Right: Product Category Accordions (matches screenshot) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Accordion 1: Front-end ANPR video unit */}
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
                onClick={() => toggleAccordion('anpr')}
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
                  Front-end ANPR video unit
                </span>
                {openAccordions.anpr ? <ChevronUp size={18} color="#9333ea" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>

              {openAccordions.anpr && (
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
                      src="/images/gas_stations/prod_anpr_camera.png"
                      alt="ANPR Camera"
                      style={{ width: '60px', height: 'auto', objectFit: 'contain' }}
                    />
                    <div>
                      <div style={{ fontWeight: 700, color: '#0f172a' }}>iDS-2CD7A46G0/P-IZHS</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>4 MP DeepinView ANPR Bullet Camera</div>
                    </div>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Up to 98%+ license plate recognition rate with DarkFighter color capture at night.</li>
                    <li>Embedded deep learning vehicle classification: vehicle type, color, and manufacturer logo.</li>
                    <li>Integrated whitelist/blacklist matching to trigger gate open or alert cashiers on repeat drive-offs.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 2: LED screen & onboard radar */}
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
                onClick={() => toggleAccordion('led')}
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
                  LED screen &amp; onboard radar
                </span>
                {openAccordions.led ? <ChevronUp size={18} color="#9333ea" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>

              {openAccordions.led && (
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
                    Anti-Fall Microwave Radar &amp; High-Brightness Outdoor LED Screen
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Microwave radar detects approaching vehicles and prevents the barrier arm from dropping onto vehicles or pedestrians.</li>
                    <li>Outdoor LED display board welcomes drivers, displays pump lane availability, and broadcasts promotional offers.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 3: Software */}
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
                  Software
                </span>
                {openAccordions.software ? <ChevronUp size={18} color="#9333ea" /> : <ChevronDown size={18} color="#94a3b8" />}
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
                    Coloron HikCentral Professional Gas Station Edition
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Centralized drive-off incident reporting with automatic video clip export and plate search.</li>
                    <li>Synchronizes license plate data across all multi-site fuel station franchises in real time.</li>
                    <li>POS register text overlay integration for audit verification and cashier reconciliation.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 4: YOU MAY ALSO BE INTERESTED IN */}
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
          {/* Card 1: Entrance & Exit Management */}
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
              src="/images/gas_stations/interest_entrance.jpg"
              alt="Entrance & Exit Management"
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
                Entrance &amp; Exit Management
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.5 }}>
                Streamlined vehicle access, barrier gates, and automated parking fee management.
              </p>
            </div>
          </div>

          {/* Card 2: People Counting */}
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
              src="/images/gas_stations/interest_people.jpg"
              alt="People Counting"
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
                People Counting
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.5 }}>
                Dual-lens stereo vision people counting for retail convenience stores and footfall optimization.
              </p>
            </div>
          </div>

          {/* Card 3: Perimeter Protection */}
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
              src="/images/gas_stations/interest_perimeter.jpg"
              alt="Perimeter Protection"
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
                Perimeter Protection
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.5 }}>
                Deep-learning false alarm reduction to secure off-hours station boundaries and fuel storage yards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION 5: READY TO DISCUSS YOUR NEEDS? (CTA) */}
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
            Talk with a Coloron fuel retail specialist to design an integrated ANPR drive-off prevention, canopy thermal safety, and convenience store retail package.
          </p>

          {/* Action Buttons */}
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

      {/* SALES MODAL */}
      <ContactSalesModal
        isOpen={showSalesModal}
        onClose={() => setShowSalesModal(false)}
        defaultSubject="Gas Stations Security & Operations Solution Inquiry"
      />
    </div>
  );
}
