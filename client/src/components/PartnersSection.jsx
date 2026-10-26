import React, { useState } from 'react';
import {
  ChevronRight,
  ShieldCheck,
  Globe2,
  Sparkles,
  ExternalLink,
  Cpu,
  Layers,
  ArrowUpRight
} from 'lucide-react';

// Precision Vector Logos matching the enterprise ecosystem
const row1Partners = [
  {
    id: 'honeywell',
    name: 'Honeywell',
    tier: 'Strategic Alliance',
    category: 'Industrial IoT',
    logo: (
      <svg viewBox="0 0 240 70" width="150" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="36" textAnchor="middle" fill="#FF4D5A" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" fontSize="30" letterSpacing="-0.5">
          Honeywell
        </text>
        <text x="50%" y="54" textAnchor="middle" fill="#94A3B8" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="1.2">
          THE POWER OF CONNECTED
        </text>
      </svg>
    ),
  },
  {
    id: 'ilfs',
    name: 'IL&FS Technologies',
    tier: 'Government Tier',
    category: 'Smart Cities',
    logo: (
      <svg viewBox="0 0 240 70" width="160" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(18, 12)">
          <polygon points="0,32 16,4 16,32" fill="#FF4D5A" />
          <polygon points="20,4 20,32 36,32" fill="#10B981" />
          <polygon points="10,0 26,0 18,14" fill="#10B981" />
          <text x="44" y="24" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="19" letterSpacing="-0.3">
            IL&amp;FS
          </text>
          <text x="96" y="20" fill="#10B981" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="9.5">
            | IT Services
          </text>
          <text x="44" y="34" fill="#94A3B8" fontFamily="Arial, sans-serif" fontWeight="500" fontSize="7.5" letterSpacing="0.3">
            IL&amp;FS Technologies Limited
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'inspira',
    name: 'Inspira Enterprise',
    tier: 'Solution Partner',
    category: 'Cyber Defense',
    logo: (
      <svg viewBox="0 0 240 70" width="150" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(25, 14)">
          <text x="0" y="25" fill="#E2E8F0" fontFamily="'Segoe UI', Roboto, sans-serif" fontWeight="400" fontSize="26" letterSpacing="-0.5">
            i<tspan fill="#E2E8F0">nspira</tspan>
          </text>
          <rect x="0.5" y="4" width="4" height="4" fill="#FF4D5A" />
          <rect x="0" y="31" width="115" height="7" rx="1.5" fill="#F59E0B" />
          <text x="57" y="36.5" textAnchor="middle" fill="#0F172A" fontFamily="sans-serif" fontWeight="800" fontSize="4.5" letterSpacing="0.5">
            Innovation • Impact • Integrity
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'lt',
    name: 'L&T Construction',
    tier: 'Infrastructure Lead',
    category: 'Heavy Engineering',
    logo: (
      <svg viewBox="0 0 240 70" width="165" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(14, 14)">
          <circle cx="20" cy="20" r="18" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
          <text x="20" y="26" textAnchor="middle" fill="#38BDF8" fontFamily="Georgia, serif" fontWeight="bold" fontSize="16" letterSpacing="-0.5">
            L&amp;T
          </text>
          <text x="46" y="25" fill="#F8FAFC" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" letterSpacing="-0.2">
            L&amp;T Construction
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'nec',
    name: 'NEC Corporation',
    tier: 'Biometric AI',
    category: 'Global Leader',
    logo: (
      <svg viewBox="0 0 240 70" width="140" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="46" textAnchor="middle" fill="#60A5FA" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" fontSize="36" letterSpacing="1.5">
          NEC
        </text>
      </svg>
    ),
  },
  {
    id: 'nisa',
    name: 'NISA Association',
    tier: 'Sports Venue Tier',
    category: 'Arena Security',
    logo: (
      <svg viewBox="0 0 240 70" width="160" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(18, 14)">
          <path d="M4 4 L22 4 L22 20 Q22 34 13 38 Q4 34 4 20 Z" fill="#334155" stroke="#FF4D5A" strokeWidth="1.5" />
          <text x="13" y="19" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact, Arial Black" fontSize="9">
            NISA
          </text>
          <text x="30" y="18" fill="#F8FAFC" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="8.5">
            NATIONAL INDEPENDENT
          </text>
          <text x="30" y="28" fill="#FF4D5A" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="8.5">
            SOCCER ASSOCIATION
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'cisco',
    name: 'Cisco Systems',
    tier: 'Core Network',
    category: 'ePoE & Switches',
    logo: (
      <svg viewBox="0 0 240 70" width="135" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(50, 10)">
          <rect x="0" y="14" width="3.5" height="8" rx="1" fill="#38BDF8" />
          <rect x="7" y="8" width="3.5" height="14" rx="1" fill="#38BDF8" />
          <rect x="14" y="2" width="3.5" height="20" rx="1" fill="#38BDF8" />
          <rect x="21" y="8" width="3.5" height="14" rx="1" fill="#38BDF8" />
          <rect x="28" y="14" width="3.5" height="8" rx="1" fill="#38BDF8" />
          <text x="16" y="38" textAnchor="middle" fill="#38BDF8" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="15" letterSpacing="1.5">
            CISCO
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'schneider',
    name: 'Schneider Electric',
    tier: 'Energy Systems',
    category: 'Smart Grid',
    logo: (
      <svg viewBox="0 0 240 70" width="160" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(20, 16)">
          <path d="M12 2 C6 8, 4 14, 8 20 C10 24, 16 26, 20 22 C24 18, 22 10, 18 6 Z" fill="#10B981" />
          <text x="30" y="17" fill="#F8FAFC" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="12">
            Schneider
          </text>
          <text x="30" y="28" fill="#10B981" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="9.5">
            Electric
          </text>
        </g>
      </svg>
    ),
  },
];

const row2Partners = [
  {
    id: 'nvidia',
    name: 'NVIDIA Metropolis',
    tier: 'Edge AI Ecosystem',
    category: 'Neural Video AI',
    logo: (
      <svg viewBox="0 0 240 70" width="150" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(30, 14)">
          <path d="M0 16 Q8 6 18 10 Q28 14 36 6 Q30 24 18 20 Q10 18 0 16 Z" fill="#10B981" />
          <text x="44" y="23" fill="#FFFFFF" fontFamily="Arial Black, Impact" fontWeight="900" fontSize="17" letterSpacing="1">
            NVIDIA
          </text>
          <text x="44" y="33" fill="#94A3B8" fontFamily="sans-serif" fontSize="7" fontWeight="700" letterSpacing="1">
            METROPOLIS AI
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'intel',
    name: 'Intel IoT Solutions',
    tier: 'Silicon Partner',
    category: 'VPU Acceleration',
    logo: (
      <svg viewBox="0 0 240 70" width="130" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(48, 14)">
          <text x="30" y="26" textAnchor="middle" fill="#38BDF8" fontFamily="Impact, Arial Black" fontSize="28" letterSpacing="-1">
            intel
          </text>
          <text x="30" y="36" textAnchor="middle" fill="#94A3B8" fontFamily="sans-serif" fontSize="6.5" fontWeight="600" letterSpacing="1">
            IOT SOLUTIONS
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'seagate',
    name: 'Seagate SkyHawk',
    tier: 'Storage Infrastructure',
    category: 'RAID 24/7 Surveillance',
    logo: (
      <svg viewBox="0 0 240 70" width="155" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(24, 15)">
          <path d="M4 22 C12 6, 26 8, 30 16 C22 18, 16 26, 4 22 Z" fill="#10B981" />
          <text x="38" y="20" fill="#FFFFFF" fontFamily="Arial Black" fontSize="14" fontWeight="800">
            SEAGATE
          </text>
          <text x="38" y="31" fill="#38BDF8" fontFamily="sans-serif" fontSize="8" fontWeight="700">
            SkyHawk AI Storage
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'wd',
    name: 'Western Digital Purple',
    tier: 'Certified Storage',
    category: 'AllFrame AI Caching',
    logo: (
      <svg viewBox="0 0 240 70" width="165" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(22, 14)">
          <rect x="0" y="4" width="28" height="24" rx="4" fill="#A855F7" />
          <text x="14" y="21" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial Black" fontSize="12">
            WD
          </text>
          <text x="36" y="17" fill="#FFFFFF" fontFamily="Arial" fontSize="12" fontWeight="700">
            Western Digital
          </text>
          <text x="36" y="28" fill="#A855F7" fontFamily="sans-serif" fontSize="8.5" fontWeight="700">
            PURPLE SURVEILLANCE
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'bosch',
    name: 'Bosch Security',
    tier: 'Sensor Integration',
    category: 'Intrusion Radar',
    logo: (
      <svg viewBox="0 0 240 70" width="145" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(32, 14)">
          <circle cx="16" cy="18" r="14" stroke="#FF4D5A" strokeWidth="2.5" fill="none" />
          <rect x="6" y="15" width="20" height="6" fill="#FF4D5A" />
          <text x="38" y="24" fill="#FFFFFF" fontFamily="Impact, Arial Black" fontSize="18" letterSpacing="1">
            BOSCH
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'siemens',
    name: 'Siemens Building X',
    tier: 'Smart Infrastructure',
    category: 'BMS Interop',
    logo: (
      <svg viewBox="0 0 240 70" width="155" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="42" textAnchor="middle" fill="#14B8A6" fontFamily="Arial Black, Impact" fontSize="26" letterSpacing="2">
          SIEMENS
        </text>
      </svg>
    ),
  },
  {
    id: 'milestone',
    name: 'Milestone Systems',
    tier: 'Open Platform VMS',
    category: 'XProtect Verified',
    logo: (
      <svg viewBox="0 0 240 70" width="155" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(26, 14)">
          <path d="M0 6 L14 26 L28 6 Z" fill="#38BDF8" />
          <text x="34" y="22" fill="#FFFFFF" fontFamily="Arial Black" fontSize="14">
            milestone
          </text>
          <text x="34" y="32" fill="#94A3B8" fontFamily="sans-serif" fontSize="7" fontWeight="600">
            OPEN PLATFORM VMS
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'axis',
    name: 'Axis Communications',
    tier: 'Network Standards',
    category: 'VAPIX & ONVIF',
    logo: (
      <svg viewBox="0 0 240 70" width="145" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(34, 14)">
          <polygon points="12,2 24,24 0,24" fill="#F59E0B" />
          <text x="32" y="22" fill="#FFFFFF" fontFamily="Arial Black" fontSize="18" letterSpacing="1">
            AXIS
          </text>
        </g>
      </svg>
    ),
  },
];

export default function PartnersSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);

  // Triple each array for a 100% gapless continuous marquee loop
  const loopRow1 = [...row1Partners, ...row1Partners, ...row1Partners];
  const loopRow2 = [...row2Partners, ...row2Partners, ...row2Partners];

  return (
    <section
      style={{
        backgroundColor: '#070a12', // Executive Midnight Obsidian
        position: 'relative',
        padding: '92px 0 100px',
        overflow: 'hidden',
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', 'Segoe UI', Roboto, sans-serif",
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Ambient Radial Lights */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(230, 0, 18, 0.14) 0%, rgba(14, 165, 233, 0.06) 50%, transparent 75%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '10%',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Subtle Starfield / Grid Pattern Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          opacity: 0.35,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Section Content */}
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Sleek Executive Glass Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            marginBottom: '18px',
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
            Global Strategic Ecosystem
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

        {/* Main Title: Exact Requirement Wording */}
        <h2
          style={{
            fontSize: 'clamp(32px, 4.2vw, 52px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            margin: '0 auto 16px',
            color: '#ffffff',
            lineHeight: 1.15,
            maxWidth: '920px',
          }}
        >
          Collaborative{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #ffffff 30%, #cbd5e1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 900,
            }}
          >
            Partnerships
          </span>{' '}
          for{' '}
          <span
            style={{
              color: '#e60012',
              textShadow: '0 0 35px rgba(230, 0, 18, 0.45)',
              position: 'relative',
              display: 'inline-block',
            }}
          >
            Exceptional Innovation
          </span>
        </h2>

        {/* Subtitle with High-Trust Enterprise Context */}
        <p
          style={{
            fontSize: '16px',
            color: '#94a3b8',
            maxWidth: '680px',
            margin: '0 auto 28px',
            lineHeight: 1.6,
          }}
        >
          Co-engineering mission-critical surveillance, cloud AI platforms, and smart city infrastructure with the world’s leading engineering pioneers.
        </p>

        {/* Sublink: View All Partners with Interactive Arrow */}
        <div style={{ marginBottom: '52px' }}>
          <a
            href="/support#partners"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 22px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(230, 0, 18, 0.08)',
              border: '1px solid rgba(230, 0, 18, 0.28)',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(230, 0, 18, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(230, 0, 18, 0.6)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(230, 0, 18, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(230, 0, 18, 0.28)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <span>View all partners</span>
            <ChevronRight size={14} color="#e60012" />
          </a>
        </div>
      </div>

      {/* DUAL-ROW COUNTER-SCROLLING MARQUEE SYSTEM */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          zIndex: 2,
        }}
      >
        {/* Vignette Edge Blur Masks (Left & Right) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: 'clamp(24px, 9vw, 160px)',
            background: 'linear-gradient(90deg, #070a12 0%, rgba(7, 10, 18, 0) 100%)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: 'clamp(24px, 9vw, 160px)',
            background: 'linear-gradient(270deg, #070a12 0%, rgba(7, 10, 18, 0) 100%)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />

        {/* TRACK 1: Moves Left */}
        <div
          style={{ width: '100%', overflow: 'hidden' }}
          onMouseEnter={() => setIsPausedRow1(true)}
          onMouseLeave={() => setIsPausedRow1(false)}
        >
          <div
            className="marquee-track-left"
            style={{
              display: 'flex',
              gap: '20px',
              width: 'max-content',
              animationPlayState: isPausedRow1 ? 'paused' : 'running',
            }}
          >
            {loopRow1.map((partner, idx) => {
              const cardKey = `row1-${partner.id}-${idx}`;
              const isHovered = hoveredCard === cardKey;

              return (
                <div
                  key={cardKey}
                  onMouseEnter={() => setHoveredCard(cardKey)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    width: '240px',
                    height: '118px',
                    borderRadius: '18px',
                    backgroundColor: isHovered
                      ? 'rgba(255, 255, 255, 0.08)'
                      : 'rgba(255, 255, 255, 0.03)',
                    border: isHovered
                      ? '1px solid rgba(230, 0, 18, 0.65)'
                      : '1px solid rgba(255, 255, 255, 0.09)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: isHovered
                      ? '0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 25px rgba(230, 0, 18, 0.28)'
                      : '0 8px 24px rgba(0, 0, 0, 0.35)',
                    transform: isHovered ? 'translateY(-5px) scale(1.02)' : 'none',
                    transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '16px 20px 14px',
                    cursor: 'pointer',
                    flexShrink: 0,
                    position: 'relative',
                  }}
                >
                  {/* Card Top Row: Partner Tier Indicator */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: isHovered ? '#ff4d5a' : 'rgba(255, 255, 255, 0.45)',
                        transition: 'color 0.25s ease',
                      }}
                    >
                      {partner.tier}
                    </span>
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: isHovered ? '#e60012' : 'rgba(255, 255, 255, 0.25)',
                        boxShadow: isHovered ? '0 0 8px #e60012' : 'none',
                        transition: 'all 0.25s ease',
                      }}
                    />
                  </div>

                  {/* Logo Center */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '50px',
                    }}
                  >
                    {partner.logo}
                  </div>

                  {/* Card Bottom Row: Category */}
                  <div
                    style={{
                      fontSize: '11px',
                      color: isHovered ? '#cbd5e1' : 'rgba(255, 255, 255, 0.4)',
                      textAlign: 'center',
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {partner.category}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TRACK 2: Moves Right (Opposing Direction) */}
        <div
          style={{ width: '100%', overflow: 'hidden' }}
          onMouseEnter={() => setIsPausedRow2(true)}
          onMouseLeave={() => setIsPausedRow2(false)}
        >
          <div
            className="marquee-track-right"
            style={{
              display: 'flex',
              gap: '20px',
              width: 'max-content',
              animationPlayState: isPausedRow2 ? 'paused' : 'running',
            }}
          >
            {loopRow2.map((partner, idx) => {
              const cardKey = `row2-${partner.id}-${idx}`;
              const isHovered = hoveredCard === cardKey;

              return (
                <div
                  key={cardKey}
                  onMouseEnter={() => setHoveredCard(cardKey)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    width: '240px',
                    height: '118px',
                    borderRadius: '18px',
                    backgroundColor: isHovered
                      ? 'rgba(255, 255, 255, 0.08)'
                      : 'rgba(255, 255, 255, 0.03)',
                    border: isHovered
                      ? '1px solid rgba(56, 189, 248, 0.65)'
                      : '1px solid rgba(255, 255, 255, 0.09)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: isHovered
                      ? '0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 25px rgba(56, 189, 248, 0.28)'
                      : '0 8px 24px rgba(0, 0, 0, 0.35)',
                    transform: isHovered ? 'translateY(-5px) scale(1.02)' : 'none',
                    transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '16px 20px 14px',
                    cursor: 'pointer',
                    flexShrink: 0,
                    position: 'relative',
                  }}
                >
                  {/* Card Top Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: isHovered ? '#38bdf8' : 'rgba(255, 255, 255, 0.45)',
                        transition: 'color 0.25s ease',
                      }}
                    >
                      {partner.tier}
                    </span>
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: isHovered ? '#38bdf8' : 'rgba(255, 255, 255, 0.25)',
                        boxShadow: isHovered ? '0 0 8px #38bdf8' : 'none',
                        transition: 'all 0.25s ease',
                      }}
                    />
                  </div>

                  {/* Logo Center */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '50px',
                    }}
                  >
                    {partner.logo}
                  </div>

                  {/* Card Bottom Row: Category */}
                  <div
                    style={{
                      fontSize: '11px',
                      color: isHovered ? '#cbd5e1' : 'rgba(255, 255, 255, 0.4)',
                      textAlign: 'center',
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {partner.category}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Ecosystem Metrics Pill */}
      <div
        style={{
          maxWidth: '880px',
          margin: '52px auto 0',
          padding: '0 20px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          className="partner-stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.025)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px)',
            borderRadius: '20px',
            padding: '18px 24px',
            textAlign: 'center',
          }}
        >
          <div>
            <div style={{ color: '#ffffff', fontSize: '20px', fontWeight: 800 }}>
              150+
            </div>
            <div style={{ color: '#94a3b8', fontSize: '12px', marginTop: '2px' }}>
              Certified Technology Partners
            </div>
          </div>
          <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', borderRight: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ color: '#ffffff', fontSize: '20px', fontWeight: 800 }}>
              99.9%
            </div>
            <div style={{ color: '#94a3b8', fontSize: '12px', marginTop: '2px' }}>
              API &amp; ONVIF Interoperability
            </div>
          </div>
          <div>
            <div style={{ color: '#e60012', fontSize: '20px', fontWeight: 800 }}>
              Tier-1
            </div>
            <div style={{ color: '#94a3b8', fontSize: '12px', marginTop: '2px' }}>
              Mission-Critical Compliance
            </div>
          </div>
        </div>
      </div>

      {/* High-Performance Marquee Keyframes */}
      <style>{`
        @keyframes marqueeScrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        @keyframes marqueeScrollRight {
          0% {
            transform: translateX(calc(-100% / 3));
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-track-left {
          animation: marqueeScrollLeft 38s linear infinite;
        }

        .marquee-track-right {
          animation: marqueeScrollRight 42s linear infinite;
        }

        @media (max-width: 768px) {
          .marquee-track-left {
            animation-duration: 26s;
          }
          .marquee-track-right {
            animation-duration: 28s;
          }
        }

        @media (max-width: 640px) {
          .partner-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
            padding: 16px !important;
          }
          .partner-stats-grid > div {
            border-left: none !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding-bottom: 12px;
          }
          .partner-stats-grid > div:last-child {
            border-bottom: none !important;
            padding-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}
