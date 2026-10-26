import React, { useState, useEffect, useRef } from 'react';
import clientsModernBg from '../Assets/Image/clients_modern_bg.jpg';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Play,
  Pause,
  Sparkles
} from 'lucide-react';

const clientsList = [
  {
    id: 'gmr',
    name: 'GMR Group',
    sector: 'Aviation & Infrastructure',
    highlight: 'Delhi & Hyderabad International Airports',
    metric: '2,500+ AI Cameras Deployed',
    capability: 'Perimeter Intrusion Detection & Runway AI Monitoring',
    logo: (
      <svg viewBox="0 0 160 50" width="145" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="8" y="38" fill="#0A3B7B" fontFamily="Impact, Arial Black, sans-serif" fontSize="40" fontWeight="900" letterSpacing="-1">
          G
        </text>
        <g transform="translate(45, 4)">
          <path d="M0 34 L12 0 L24 22 L36 0 L48 34 L36 34 L24 13 L12 34 Z" fill="#0A3B7B" />
          <polygon points="18,24 30,24 24,13" fill="#E60012" />
          <polygon points="21,18 27,18 24,13" fill="#F59E0B" />
        </g>
        <text x="100" y="38" fill="#0A3B7B" fontFamily="Impact, Arial Black, sans-serif" fontSize="40" fontWeight="900" letterSpacing="-1">
          R
        </text>
      </svg>
    ),
  },
  {
    id: 'lt',
    name: 'Larsen & Toubro',
    sector: 'Heavy Engineering & EPC',
    highlight: 'Nationwide Smart Metros & Construction Mega Sites',
    metric: '10,000+ Active Channels',
    capability: 'High-Speed ANPR, Worker Safety AI & 800m ePoE Long-Range',
    logo: (
      <svg viewBox="0 0 200 50" width="170" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="25" r="20" stroke="#004C87" strokeWidth="2.5" fill="none" />
        <text x="22" y="32" textAnchor="middle" fill="#004C87" fontFamily="Georgia, serif" fontWeight="bold" fontSize="18">
          L&amp;T
        </text>
        <text x="52" y="31" fill="#004C87" fontFamily="Arial, Helvetica, sans-serif" fontStyle="italic" fontWeight="800" fontSize="15" letterSpacing="0.5">
          LARSEN &amp; TOUBRO
        </text>
      </svg>
    ),
  },
  {
    id: 'agva',
    name: 'AgVa Healthcare',
    sector: 'Medical Devices & ICU AI',
    highlight: 'Advanced Ventilator & Patient Telemetry Units',
    metric: '450+ ICU Wards Protected',
    capability: 'Sub-Zero Lux Night Vision & Thermal Fever Screening Telemetry',
    logo: (
      <svg viewBox="0 0 160 50" width="145" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="22" stroke="#831843" strokeWidth="2.5" fill="none" />
        <text x="25" y="27" textAnchor="middle" fill="#831843" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="16">
          AgVa
        </text>
        <text x="25" y="37" textAnchor="middle" fill="#831843" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="700">
          Healthcare
        </text>
        <text x="60" y="31" fill="#831843" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="17" letterSpacing="-0.5">
          AgVa
        </text>
        <text x="102" y="31" fill="#64748B" fontFamily="Arial, sans-serif" fontWeight="500" fontSize="14">
          Health
        </text>
      </svg>
    ),
  },
  {
    id: 'aruna',
    name: 'Aruna Hospital',
    sector: 'Clinical Multispecialty',
    highlight: 'Tertiary Care & Emergency Response Facilities',
    metric: 'Multi-Floor Matrix Security',
    capability: 'Frictionless Facial Recognition Access & Patient Ward Privacy Blur',
    logo: (
      <svg viewBox="0 0 180 50" width="160" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(8, 6)">
          <path d="M16 2 L2 34 L13 34 L17 24 L21 34 L32 34 Z" fill="#F97316" />
          <path d="M17 2 L23 34 L32 34 Z" fill="#0284C7" />
          <polygon points="13,26 21,26 17,16" fill="#E11D48" />
          <text x="38" y="22" fill="#0F172A" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="13" letterSpacing="1">
            ARUNA
          </text>
          <text x="38" y="33" fill="#E11D48" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="10.5" letterSpacing="1.5">
            HOSPITAL
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'hannah',
    name: 'Hannah Joseph Hospital',
    sector: 'Institute of Neurosciences',
    highlight: 'Madurai Advanced Trauma & Brain Surgery Center',
    metric: 'Surgical OT Video Hub',
    capability: 'OT Optical Zoom & Radiometric Heat Mapping',
    logo: (
      <svg viewBox="0 0 200 50" width="170" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(6, 6)">
          <polygon points="14,4 4,32 24,32" fill="#0284C7" />
          <polygon points="30,4 20,32 40,32" fill="#0F766E" />
          <circle cx="22" cy="12" r="4" fill="#EF4444" />
          <text x="46" y="20" fill="#0A3B7B" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="9" letterSpacing="0.4">
            HANNAH JOSEPH HOSPITAL
          </text>
          <text x="46" y="31" fill="#64748B" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="1">
            MADURAI • NEUROSCIENCES
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'gbh',
    name: 'GBH American Hospital',
    sector: 'Multi-Super Specialty',
    highlight: 'NABH Accredited Tertiary Center',
    metric: 'Full Campus Interlock Access',
    capability: 'Pharmacy Controlled Substance Vault Lock & Central Command',
    logo: (
      <svg viewBox="0 0 190 50" width="168" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(6, 5)">
          <circle cx="20" cy="20" r="19" stroke="#991B1B" strokeWidth="2.5" strokeDasharray="3 2" fill="none" />
          <circle cx="20" cy="20" r="15" fill="#991B1B" />
          <text x="20" y="26" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial Black" fontWeight="900" fontSize="14">
            A+
          </text>
          <text x="46" y="19" fill="#0F766E" fontFamily="Arial Black, Impact" fontWeight="900" fontSize="17" letterSpacing="-0.5">
            GBH
          </text>
          <text x="46" y="31" fill="#991B1B" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="9.5" letterSpacing="0.5">
            AMERICAN HOSPITAL
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'drreddys',
    name: "Dr. Reddy's Laboratories",
    sector: 'Global Pharmaceuticals',
    highlight: 'FDA-Approved Sterile Manufacturing Plants & R&D Hubs',
    metric: '35+ Global Cleanrooms',
    capability: 'Cleanroom 316L Stainless Enclosures & Audit Trail Vaults',
    logo: (
      <svg viewBox="0 0 170 50" width="150" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(6, 10)">
          <text x="0" y="24" fill="#4C1D95" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="23" letterSpacing="-0.5">
            Dr.Reddy's
          </text>
          <g transform="translate(122, 6)">
            <circle cx="4" cy="4" r="3.5" fill="#6D28D9" />
            <circle cx="12" cy="4" r="3.5" fill="#6D28D9" />
            <circle cx="18" cy="8" r="3" fill="#7C3AED" />
            <circle cx="8" cy="12" r="4" fill="#5B21B6" />
            <circle cx="15" cy="16" r="3" fill="#7C3AED" />
            <circle cx="7" cy="20" r="2.5" fill="#4C1D95" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: 'adani',
    name: 'Adani Ports & SEZ',
    sector: 'Maritime & Logistics Ports',
    highlight: 'Mega Deep-Water Container Terminals',
    metric: '12 Major Commercial Harbors',
    capability: 'Long-Range Radiometric Thermal & Container OCR Analytics',
    logo: (
      <svg viewBox="0 0 170 50" width="145" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 6)">
          <text x="0" y="26" fill="#0284C7" fontFamily="Arial Black, Impact" fontSize="26" letterSpacing="-1">
            adani
          </text>
          <text x="0" y="38" fill="#475569" fontFamily="Arial, sans-serif" fontSize="8.5" fontWeight="800" letterSpacing="1">
            PORTS AND SEZ
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'apollo',
    name: 'Apollo Hospitals',
    sector: 'Comprehensive Healthcare Network',
    highlight: 'Leading Hospital Chain in Asia',
    metric: '70+ Medical Facilities',
    capability: 'Infant Protection RFID & Bio-Hazard Waste CCTV Verification',
    logo: (
      <svg viewBox="0 0 170 50" width="150" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 6)">
          <path d="M12 2 L22 20 L2 20 Z" fill="#0D9488" />
          <circle cx="12" cy="25" r="3.5" fill="#E11D48" />
          <text x="28" y="23" fill="#0F766E" fontFamily="Georgia, serif" fontSize="19" fontWeight="bold">
            Apollo
          </text>
          <text x="28" y="34" fill="#64748B" fontFamily="sans-serif" fontSize="7.5" fontWeight="700" letterSpacing="0.8">
            HOSPITALS
          </text>
        </g>
      </svg>
    ),
  },
];

export default function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalClients = clientsList.length;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalClients);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalClients) % totalClients);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 40) {
      nextSlide();
    } else if (deltaX < -40) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 3500);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, currentIndex]);

  const activeClient = clientsList[currentIndex];

  return (
    <section
      style={{
        position: 'relative',
        padding: '96px 0 108px',
        overflow: 'hidden',
        backgroundColor: '#070a12',
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', 'Segoe UI', Roboto, sans-serif",
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Cinematic Modern Architectural Skyline Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${clientsModernBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.42,
          pointerEvents: 'none',
          zIndex: 1,
          filter: 'contrast(1.1) brightness(0.9)',
        }}
      />

      {/* Deep Obsidian Scrim Overlay for Contrast & Readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(7, 10, 18, 0.94) 0%, rgba(7, 10, 18, 0.72) 45%, rgba(7, 10, 18, 0.96) 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Radiant Crimson & Cyan Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '32%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '850px',
          height: '420px',
          background:
            'radial-gradient(ellipse at center, rgba(230, 0, 18, 0.22) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Header Container */}
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 3,
        }}
      >
        {/* Modern Frosted Eyebrow Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
            marginBottom: '16px',
          }}
        >
          <Sparkles size={14} color="#e60012" />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#f8fafc',
            }}
          >
            Verified Enterprise Case Deployments
          </span>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              boxShadow: '0 0 8px #22c55e',
            }}
          />
        </div>

        {/* Heading: Exact Reference Wording with High-Contrast Dark Modern Typography */}
        <h2
          style={{
            fontSize: 'clamp(34px, 4.4vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            margin: '0 auto 14px',
            lineHeight: 1.15,
          }}
        >
          <span
            style={{
              color: '#e60012',
              textShadow: '0 0 35px rgba(230, 0, 18, 0.45)',
              display: 'block',
            }}
          >
            Trusted by Leaders
          </span>
          <span style={{ color: '#ffffff', display: 'block' }}>
            in Every Sector
          </span>
        </h2>

        {/* Sublink: Modern Glass Pill */}
        <div style={{ marginBottom: '44px' }}>
          <a
            href="/solutions#clients"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 22px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(230, 0, 18, 0.12)',
              border: '1px solid rgba(230, 0, 18, 0.35)',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(230, 0, 18, 0.25)';
              e.currentTarget.style.borderColor = 'rgba(230, 0, 18, 0.7)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(230, 0, 18, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(230, 0, 18, 0.35)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <span>View all clients</span>
            <ChevronRight size={14} color="#e60012" />
          </a>
        </div>
      </div>

      {/* 3D PERSPECTIVE COVERFLOW STAGE */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '20px clamp(10px, 3vw, 20px) 48px',
          perspective: '1400px',
          overflow: 'hidden',
          zIndex: 4,
          touchAction: 'pan-y',
        }}
      >
        {/* Navigation Arrow Left */}
        <button
          onClick={prevSlide}
          aria-label="Previous Client"
          style={{
            position: 'absolute',
            left: 'clamp(6px, 2vw, 20px)',
            top: '42%',
            transform: 'translateY(-50%)',
            width: 'clamp(36px, 4vw, 48px)',
            height: 'clamp(36px, 4vw, 48px)',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 40,
            transition: 'all 0.25s ease',
            color: '#ffffff',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#e60012';
            e.currentTarget.style.backgroundColor = 'rgba(230, 0, 18, 0.2)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Navigation Arrow Right */}
        <button
          onClick={nextSlide}
          aria-label="Next Client"
          style={{
            position: 'absolute',
            right: 'clamp(6px, 2vw, 20px)',
            top: '42%',
            transform: 'translateY(-50%)',
            width: 'clamp(36px, 4vw, 48px)',
            height: 'clamp(36px, 4vw, 48px)',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 40,
            transition: 'all 0.25s ease',
            color: '#ffffff',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#e60012';
            e.currentTarget.style.backgroundColor = 'rgba(230, 0, 18, 0.2)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          <ChevronRight size={20} />
        </button>

        {/* 3D Track with Floor Light Reflection */}
        <div
          style={{
            position: 'relative',
            height: isMobile ? '180px' : '240px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Active Card Reflection Glow Pool on Floor */}
          <div
            style={{
              position: 'absolute',
              bottom: '-25px',
              width: '320px',
              height: '45px',
              background: 'radial-gradient(ellipse at center, rgba(230, 0, 18, 0.45) 0%, transparent 70%)',
              filter: 'blur(22px)',
              pointerEvents: 'none',
              zIndex: 5,
            }}
          />

          {clientsList.map((client, index) => {
            let offset = index - currentIndex;

            if (offset > totalClients / 2) offset -= totalClients;
            if (offset < -totalClients / 2) offset += totalClients;

            const isCenter = offset === 0;
            const absOffset = Math.abs(offset);

            if (absOffset > (isMobile ? 1 : 3)) return null;

            const stepX = isMobile ? 135 : 240;
            const translateX = offset * stepX;
            const translateZ = isCenter ? 95 : -absOffset * (isMobile ? 60 : 100);
            const rotateY = offset * -28;
            const scale = isCenter ? (isMobile ? 1.04 : 1.08) : Math.max(0.78, 1 - absOffset * 0.14);
            const opacity = isCenter ? 1 : Math.max(0.25, 1 - absOffset * 0.28);
            const zIndex = 30 - absOffset * 5;

            return (
              <div
                key={client.id}
                onClick={() => setCurrentIndex(index)}
                style={{
                  position: 'absolute',
                  width: isMobile ? '200px' : '260px',
                  height: isMobile ? '118px' : '145px',
                  borderRadius: '20px',
                  backgroundColor: '#ffffff', // Clean white plate to preserve official logo colors
                  border: isCenter
                    ? '2px solid #e60012'
                    : '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: isCenter
                    ? '0 24px 60px -10px rgba(230, 0, 18, 0.45), 0 0 35px rgba(230, 0, 18, 0.35)'
                    : '0 8px 30px rgba(0, 0, 0, 0.5)',
                  transform: `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  cursor: isCenter ? 'default' : 'pointer',
                  transition: 'all 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: isMobile ? '10px 14px' : '16px 24px',
                  overflow: 'hidden',
                  userSelect: 'none',
                }}
              >
                {/* LOGO ONLY (Clean & Prominent as Requested) */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    transform: isCenter ? 'scale(1.12)' : 'scale(1)',
                    transition: 'transform 0.4s ease',
                  }}
                >
                  {client.logo}
                </div>

                {/* Subtle Active Accent Dot on Center Card */}
                {isCenter && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '14px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#e60012',
                      boxShadow: '0 0 8px #e60012',
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Center Active Client Spotlight Info Pill in Sleek Dark Glass */}
        <div
          style={{
            maxWidth: '740px',
            margin: '36px auto 0',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '18px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '16px clamp(14px, 3vw, 28px)',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '16px',
                fontWeight: 800,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap',
              }}
            >
              <span>{activeClient.name}</span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#ff4d5a',
                  backgroundColor: 'rgba(230, 0, 18, 0.18)',
                  border: '1px solid rgba(230, 0, 18, 0.35)',
                  padding: '2px 8px',
                  borderRadius: '6px',
                }}
              >
                {activeClient.metric}
              </span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  color: '#94a3b8',
                }}
              >
                • {activeClient.sector}
              </span>
            </div>
            <div
              style={{
                fontSize: '12px',
                color: '#cbd5e1',
                marginTop: '4px',
              }}
            >
              {activeClient.highlight} — {activeClient.capability}
            </div>
          </div>

          <a
            href="/solutions#clients"
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: '#ffffff',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              padding: '7px 16px',
              borderRadius: '20px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(230, 0, 18, 0.25)';
              e.currentTarget.style.borderColor = '#e60012';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
            }}
          >
            <span>Case Study</span>
            <ChevronRight size={13} color="#e60012" />
          </a>
        </div>

        {/* Carousel Pagination Dots & Play/Pause Controller */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '28px',
          }}
        >
          {clientsList.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              style={{
                width: dotIdx === currentIndex ? '30px' : '8px',
                height: '8px',
                borderRadius: '8px',
                backgroundColor: dotIdx === currentIndex ? '#e60012' : 'rgba(255, 255, 255, 0.2)',
                boxShadow: dotIdx === currentIndex ? '0 0 10px rgba(230, 0, 18, 0.8)' : 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                padding: 0,
              }}
            />
          ))}

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
            style={{
              marginLeft: '8px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#94a3b8',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#94a3b8';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            {isPlaying ? <Pause size={10} /> : <Play size={10} />}
          </button>
        </div>
      </div>
    </section>
  );
}
