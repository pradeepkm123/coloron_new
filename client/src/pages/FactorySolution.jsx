import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Truck,
  Building,
  Video,
  Layers,
  FileText,
  ChevronRight,
  PhoneCall,
  Check,
  AlertCircle,
  Clock,
  Flame,
  HardHat,
  Cpu,
  BarChart3,
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for the 3D Industrial Complex
const factoryHotspots = [
  {
    id: 'gate',
    title: 'Truck Gate & Main Entrance',
    desc: 'High-clearance commercial ANPR camera, dual-direction radar boom barriers, and driver check-in pedestal.',
    top: '78%',
    left: '26%',
    device: 'Commercial ANPR + Radar Barrier',
  },
  {
    id: 'docks',
    title: 'Warehouse & Loading Docks',
    desc: 'Dock bay occupancy sensors, cargo pallet barcode cameras, and forklift proximity safety collision alerts.',
    top: '68%',
    left: '74%',
    device: 'Dock Management Camera',
  },
  {
    id: 'assembly',
    title: 'Assembly Line & Production',
    desc: 'AI machine-vision cameras for automated PPE hardhat/vest compliance and machine thermal anomaly monitoring.',
    top: '46%',
    left: '42%',
    device: 'AI Safety & QC Camera',
  },
  {
    id: 'silos',
    title: 'Raw Material Silos & Chemical Storage',
    desc: 'Continuous radiometric thermal thermography detecting spontaneous chemical heating and fire hazards before combustion.',
    top: '25%',
    left: '72%',
    device: 'Bi-Spectrum Thermal Guard',
  },
  {
    id: 'control',
    title: 'Administration & Central Control',
    desc: 'HikCentral central video wall matrix, access audit logs, and instant SOS dispatch.',
    top: '32%',
    left: '22%',
    device: 'HikCentral Workstation',
  },
];

// Recommended Product Deck
const recommendedProducts = [
  {
    name: 'Industrial ANPR Camera',
    code: 'iDS-2CD7A46G0/P-IZHS',
    category: 'Logistics Access',
    desc: 'Commercial dual-lens ANPR with container code recognition and ultra-wide dynamic range for truck headlights.',
    icon: <Truck size={24} color="#d70015" />,
  },
  {
    name: 'Heavy-Duty Radar Barrier Gate',
    code: 'DS-TMG4B1-LA',
    category: 'Boom Barrier',
    desc: 'High-torque brushless DC motor barrier with millimeter-wave radar preventing boom drop on extended truck trailers.',
    icon: <Shield size={24} color="#0071e3" />,
  },
  {
    name: 'Driver Self-Service Kiosk',
    code: 'DS-K5671-ZU',
    category: 'Driver Check-In',
    desc: 'Weatherproof outdoor totem with barcode QR reader, bill/bill-of-lading scanner, and two-way guard intercom.',
    icon: <Building size={24} color="#34c759" />,
  },
  {
    name: 'Bi-Spectrum Thermal Camera',
    code: 'DS-2TD2138-7/QY',
    category: 'Fire & Safety',
    desc: 'Radiometric thermal imaging with real-time temperature exception alarms for high-voltage assets and silos.',
    icon: <Flame size={24} color="#ff9500" />,
  },
  {
    name: 'HikCentral Enterprise Platform',
    code: 'VMS-HCP-IND',
    category: 'Software Platform',
    desc: 'Unified industrial AIoT platform connecting weighbridge scales, ANPR whitelist, and site-wide video surveillance.',
    icon: <Layers size={24} color="#af52de" />,
  },
];

export default function FactorySolution() {
  const [activeHotspot, setActiveHotspot] = useState(factoryHotspots[0]);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'vehicle-access', 'what-we-offer', 'related-solutions'];
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
      {/* 1. HERO BANNER (Bright Yellow Industrial Panoramic matching screenshot) */}
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
            backgroundImage: `url('/images/factory/factory_hero.jpg')`,
            backgroundPosition: 'center right',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Orange Industrial Arc Gradient Overlay on Left matching screenshot */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 18% 45%, rgba(240, 130, 20, 0.92) 0%, rgba(240, 130, 20, 0.72) 32%, rgba(240, 130, 20, 0.25) 52%, rgba(0,0,0,0) 75%), linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 42%, rgba(0,0,0,0) 72%)',
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
              Factories
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
              A secure and efficient way to manage your manufacturing facilities with AI-powered perimeter defense, non-stop logistics gate access, and workshop safety compliance.
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
              maxWidth: '960px',
              margin: '0 auto 48px',
            }}
          >
            Factories require comprehensive security and operations management to protect personnel, assets, and intellectual property while ensuring smooth logistics and production workflows. Our factory solution brings together perimeter security, vehicle management, workshop monitoring, and centralized control in a unified AIoT ecosystem.
          </p>

          {/* 3D Isometric Industrial Graphic Box */}
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
              src="/images/factory/factory_3d_overview.jpg"
              alt="Factory Smart Industrial Security Architecture 3D Map"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
                maxHeight: '620px',
              }}
            />

            {/* Interactive Pins Overlay */}
            {factoryHotspots.map((spot) => {
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
              Heavy logistics demands efficient truck clearance. Inefficient check-ins cause supply chain bottlenecks and hazardous road congestion.
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
            {/* Card 1: Heavy Vehicle Congestion */}
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
                  src="/images/factory/factory_truck_congestion.jpg"
                  alt="Heavy freight truck congestion at factory gate"
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
                  Heavy vehicle congestion
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                  Long queues of commercial freight trucks and shipping haulers on access roads cause major delivery delays, missed delivery windows, and traffic hazards during peak shift changeovers.
                </p>
              </div>
            </div>

            {/* Card 2: Manual Logbook / Difficulty Retrieving Records */}
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
                  src="/images/factory/factory_manual_logbook.jpg"
                  alt="Difficulty retrieving physical paper logs"
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
                  Difficulty retrieving records
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                  Handwritten paper visitor clipboards and manual gate manifests are easily lost or altered, making it nearly impossible to conduct fast audits or reconcile delivered cargo discrepancies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: WHAT WE OFFER (Camera + Categorized Feature Matrix matching screenshot) */}
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
              Automated logistics entrance management with high-speed ANPR, dual barrier control, driver verification, and automated weighbridge integration.
            </p>
          </div>

          {/* Row 1: Camera Hardware + Categorized Bullets */}
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
                src="/images/factory/factory_anpr_camera.jpg"
                alt="High-accuracy Industrial ANPR Camera at Factory Gate"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Bullets Grouped Exactly by Categories from Screenshot */}
            <div>
              {/* Category 1: Benefits */}
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
                  Benefits
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.96rem', color: '#1d1d1f' }}>
                    <Check size={16} color="#d70015" />
                    <span>Fast & Non-stop Drive-Through for registered logistics trucks</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.96rem', color: '#1d1d1f' }}>
                    <Check size={16} color="#d70015" />
                    <span>Eliminates entry bottlenecks & prevents traffic fines on public access roads</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.96rem', color: '#1d1d1f' }}>
                    <Check size={16} color="#d70015" />
                    <span>Sub-second barrier action opens in 1.2 seconds</span>
                  </li>
                </ul>
              </div>

              {/* Category 2: Operation efficiency */}
              <div style={{ marginBottom: '22px' }}>
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
                  Operation efficiency
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.96rem', color: '#1d1d1f' }}>
                    <Check size={16} color="#0071e3" />
                    <span>Automated weighbridge synchronization with bill-of-lading license plate records</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.96rem', color: '#0071e3' }}>
                    <Check size={16} color="#0071e3" />
                    <span>Self-service driver kiosks for automated QR barcode verification</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.96rem', color: '#0071e3' }}>
                    <Check size={16} color="#0071e3" />
                    <span>Digital audit logs searchable by license plate, container ID, or timestamp in seconds</span>
                  </li>
                </ul>
              </div>

              {/* Category 3: Safety */}
              <div>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#34c759',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Safety
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.96rem', color: '#1d1d1f' }}>
                    <Check size={16} color="#34c759" />
                    <span>Millimeter-wave anti-tailgating radar prevents barrier drop on trailers</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.96rem', color: '#34c759' }}>
                    <Check size={16} color="#34c759" />
                    <span>Blacklisted vehicle & unauthorized truck automatic gate lockdown</span>
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

      {/* 6. SECTION 4: YOU MAY ALSO BE INTERESTED IN */}
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
                title: 'Entrance & Exit Management',
                subtitle: 'Frictionless turnstiles & high-speed boom barrier gates',
                image: '/images/solution_access_hero.jpg',
                link: '/solutions',
              },
              {
                title: 'Perimeter Protection',
                subtitle: 'Radar & thermal tripwire surveillance for expansive facilities',
                image: '/images/perimeter_protection_hero.jpg',
                link: '/solutions',
              },
              {
                title: 'HikCentral Professional',
                subtitle: 'Centralized AIoT software for multisite enterprise video & access',
                image: '/images/guanlan_ai_card.jpg',
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

      {/* 7. SECTION 5: READY TO DISCUSS YOUR NEEDS (With crisp vector illustration) */}
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
              Connect directly with our industrial manufacturing solution architects for tailored hardware topologies, live product demonstrations, and site design quotes.
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
