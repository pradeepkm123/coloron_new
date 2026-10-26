import React, { useState, useEffect, useRef } from 'react';
import corporateCommandCenterImg from '../Assets/Image/corporate_command_center.jpg';
import {
  Camera,
  Server,
  Truck,
  Landmark,
  Shield,
  Briefcase,
  Clock,
  Layers,
  Building2,
  FileCheck2,
  Grid3X3,
  Award,
  RefreshCw,
  TrendingUp,
  Activity,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  SlidersHorizontal,
  MonitorCheck
} from 'lucide-react';

const impactStats = [
  // Scale & Fleet
  {
    id: 1,
    category: 'scale',
    categoryLabel: 'Scale & Fleet',
    target: 1000000,
    suffix: '+',
    label: 'Million cameras sold',
    formattedTarget: '1,000,000+',
    subtext: 'Deployed across 100+ global territories',
    icon: Camera,
    highlight: true,
    tag: 'Global Fleet',
  },
  {
    id: 2,
    category: 'scale',
    categoryLabel: 'Scale & Fleet',
    target: 50000,
    suffix: '+',
    label: 'Channels of Software',
    formattedTarget: '50,000+',
    subtext: 'Centralized VMS & AI video management',
    icon: Server,
    tag: 'VMS Network',
  },
  {
    id: 3,
    category: 'scale',
    categoryLabel: 'Scale & Fleet',
    target: 10000,
    suffix: '+',
    label: 'Mobility Surveillance Units Sold',
    formattedTarget: '10,000+',
    subtext: 'Transit, rail & mobile enforcement units',
    icon: Truck,
    tag: 'Transit & Mobile',
  },
  {
    id: 6,
    category: 'scale',
    categoryLabel: 'Scale & Fleet',
    target: 100,
    suffix: '+',
    label: 'Projects',
    formattedTarget: '100+',
    subtext: 'Enterprise-grade turnkey installations',
    icon: Briefcase,
    tag: 'Mega Projects',
  },

  // Critical Sectors
  {
    id: 4,
    category: 'sectors',
    categoryLabel: 'Critical Sectors',
    target: 5000,
    suffix: '+',
    label: 'Banks & ATMS',
    formattedTarget: '5,000+',
    subtext: 'High-security financial institutions',
    icon: Landmark,
    tag: 'Financial Tier',
  },
  {
    id: 5,
    category: 'sectors',
    categoryLabel: 'Critical Sectors',
    target: 2000,
    suffix: '+',
    label: 'Police Stations',
    formattedTarget: '2,000+',
    subtext: 'Command posts & municipal law enforcement',
    icon: Shield,
    tag: 'Public Safety',
  },
  {
    id: 9,
    category: 'sectors',
    categoryLabel: 'Critical Sectors',
    target: 25,
    suffix: '+',
    label: 'Smart and Safe Cities',
    formattedTarget: '25+',
    subtext: 'Integrated urban surveillance networks',
    icon: Building2,
    tag: 'Smart Cities',
  },
  {
    id: 8,
    category: 'sectors',
    categoryLabel: 'Critical Sectors',
    target: 40,
    suffix: '+',
    label: 'Industries / verticals served',
    formattedTarget: '40+',
    subtext: 'Ports, airports, health, retail & logistics',
    icon: Layers,
    tag: 'Enterprise Verticals',
  },

  // R&D & Heritage
  {
    id: 7,
    category: 'rnd',
    categoryLabel: 'R&D & Quality',
    target: 40,
    suffix: '+',
    label: 'Years of Experience',
    formattedTarget: '40+',
    subtext: 'Continuous optical and AIoT engineering',
    icon: Clock,
    tag: 'Industry Heritage',
  },
  {
    id: 10,
    category: 'rnd',
    categoryLabel: 'R&D & Quality',
    target: 20,
    suffix: '+',
    label: 'Patent / IPR Filed',
    formattedTarget: '20+',
    subtext: 'Proprietary imaging algorithms & neural models',
    icon: FileCheck2,
    tag: 'Innovation & Patents',
  },
  {
    id: 11,
    category: 'rnd',
    categoryLabel: 'R&D & Quality',
    target: 20,
    suffix: '+',
    label: 'Product Categories',
    formattedTarget: '20+',
    subtext: 'End-to-end AI hardware and software matrix',
    icon: Grid3X3,
    tag: 'Hardware Lines',
  },
  {
    id: 12,
    category: 'rnd',
    categoryLabel: 'R&D & Quality',
    target: 15,
    suffix: '+',
    label: 'Quality Certification',
    formattedTarget: '15+',
    subtext: 'ISO 9001, CE, FCC, RoHS, NDAA Compliant',
    icon: Award,
    tag: 'Global Compliance',
  },
];

export default function OurImpactSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('corporate-dashboard'); // 'corporate-dashboard' | 'command-center'
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(impactStats.map(() => 0));
  const [hoveredId, setHoveredId] = useState(null);
  const sectionRef = useRef(null);

  const startCountAnimation = () => {
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts(
        impactStats.map((stat) => Math.floor(stat.target * easedProgress))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts(impactStats.map((stat) => stat.target));
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCountAnimation();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const handleReplay = (e) => {
    e.stopPropagation();
    setCounts(impactStats.map(() => 0));
    startCountAnimation();
  };

  const filteredStats =
    activeTab === 'all'
      ? impactStats
      : impactStats.filter((s) => s.category === activeTab);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#f8fafc',
        padding: '72px 20px 88px',
        position: 'relative',
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', 'Segoe UI', Roboto, Helvetica, sans-serif",
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      {/* Subtle Corporate Grid Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(#cbd5e1 1px, transparent 1px), radial-gradient(#cbd5e1 1px, #f8fafc 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
          opacity: 0.35,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Corporate Header Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '42px',
          }}
        >
          {/* Executive Sub-badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              marginBottom: '16px',
            }}
          >
            <ShieldCheck size={16} color="#e60012" />
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#0f172a',
              }}
            >
              Enterprise Proven Track Record
            </span>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                boxShadow: '0 0 6px #22c55e',
              }}
            />
          </div>

          {/* Main Title: Exact wording from requirement */}
          <h2
            style={{
              fontSize: 'clamp(32px, 3.8vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              margin: '0 0 12px',
              color: '#0f172a',
              lineHeight: 1.15,
            }}
          >
            Our Impact,{' '}
            <span
              style={{
                color: '#e60012',
                position: 'relative',
                display: 'inline-block',
              }}
            >
              In Figures
              <span
                style={{
                  position: 'absolute',
                  bottom: '-3px',
                  left: 0,
                  right: 0,
                  height: '3px',
                  backgroundColor: '#e60012',
                  borderRadius: '2px',
                }}
              />
            </span>
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: '#64748b',
              maxWidth: '680px',
              lineHeight: 1.6,
              margin: '0 0 24px',
            }}
          >
            Trusted by governments, financial institutions, and critical national infrastructure worldwide to safeguard operations with intelligent AIoT solutions.
          </p>

          {/* Corporate Controls Bar: Category Filters & Mode Switch */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              width: '100%',
              maxWidth: '920px',
            }}
          >
            {/* Category Filter Tabs */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                backgroundColor: '#ffffff',
                padding: '4px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                gap: '4px',
                maxWidth: '100%',
              }}
            >
              {[
                { id: 'all', label: 'All Figures (12)' },
                { id: 'scale', label: 'Scale & Fleet' },
                { id: 'sectors', label: 'Critical Sectors' },
                { id: 'rnd', label: 'R&D & Quality' },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      padding: '7px clamp(10px, 2vw, 16px)',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: isActive ? '#0f172a' : 'transparent',
                      color: isActive ? '#ffffff' : '#64748b',
                      fontSize: 'clamp(11px, 2.5vw, 13px)',
                      fontWeight: isActive ? 600 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? '0 2px 6px rgba(15,23,42,0.2)' : 'none',
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Replay Button & View Switcher */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button
                onClick={() =>
                  setViewMode(
                    viewMode === 'corporate-dashboard'
                      ? 'command-center'
                      : 'corporate-dashboard'
                  )
                }
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 14px',
                  borderRadius: '10px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  color: '#334155',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  transition: 'all 0.2s ease',
                }}
                title="Switch layout style"
              >
                <MonitorCheck size={14} color="#e60012" />
                <span>
                  {viewMode === 'corporate-dashboard'
                    ? 'Command Center View'
                    : 'Executive Cards View'}
                </span>
              </button>

              <button
                onClick={handleReplay}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 14px',
                  borderRadius: '10px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  color: '#334155',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  transition: 'all 0.2s ease',
                }}
                title="Replay counter animation"
              >
                <RefreshCw size={14} color="#64748b" />
                <span>Replay</span>
              </button>
            </div>
          </div>
        </div>

        {/* VIEW 1: EXECUTIVE CORPORATE DASHBOARD (Crisp White/Slate Cards with SOC Preview) */}
        {viewMode === 'corporate-dashboard' ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1.2fr)',
              gap: '24px',
              alignItems: 'stretch',
            }}
            className="corporate-split-view"
          >
            {/* Left Side: Professional 12-Card Corporate Metrics Grid */}
            <div
              className="corporate-stats-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '16px',
              }}
            >
              {filteredStats.map((stat) => {
                const globalIdx = impactStats.findIndex((s) => s.id === stat.id);
                const currentVal = counts[globalIdx] || 0;
                const IconComponent = stat.icon;
                const isHovered = hoveredId === stat.id;

                return (
                  <div
                    key={stat.id}
                    onMouseEnter={() => setHoveredId(stat.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '16px',
                      padding: '20px 18px',
                      border: isHovered
                        ? '1px solid #e60012'
                        : '1px solid #e2e8f0',
                      boxShadow: isHovered
                        ? '0 12px 24px -6px rgba(230, 0, 18, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.04)'
                        : '0 2px 4px rgba(0, 0, 0, 0.02)',
                      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '154px',
                    }}
                  >
                    {/* Top Row: Icon + Category Tag */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '12px',
                      }}
                    >
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '10px',
                          backgroundColor: isHovered
                            ? 'rgba(230, 0, 18, 0.1)'
                            : '#f1f5f9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isHovered ? '#e60012' : '#475569',
                          transition: 'all 0.25s ease',
                        }}
                      >
                        <IconComponent size={20} strokeWidth={2.2} />
                      </div>

                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          padding: '3px 8px',
                          borderRadius: '6px',
                          backgroundColor: isHovered
                            ? 'rgba(230, 0, 18, 0.08)'
                            : '#f8fafc',
                          color: isHovered ? '#e60012' : '#64748b',
                          letterSpacing: '0.02em',
                          border: '1px solid #f1f5f9',
                          transition: 'all 0.25s ease',
                        }}
                      >
                        {stat.tag}
                      </span>
                    </div>

                    {/* Figure Number */}
                    <div>
                      <div
                        style={{
                          fontSize: 'clamp(24px, 2.2vw, 32px)',
                          fontWeight: 800,
                          letterSpacing: '-0.03em',
                          lineHeight: 1.1,
                          color: '#0f172a',
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '2px',
                        }}
                      >
                        <span>
                          {hasAnimated ? currentVal.toLocaleString() : '0'}
                        </span>
                        <span
                          style={{
                            color: '#e60012',
                            fontSize: '0.85em',
                            fontWeight: 700,
                          }}
                        >
                          {stat.suffix}
                        </span>
                      </div>

                      {/* Metric Name */}
                      <div
                        style={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#1e293b',
                          marginTop: '4px',
                          lineHeight: 1.3,
                        }}
                      >
                        {stat.label}
                      </div>

                      {/* Brief Corporate Explanatory Note */}
                      <div
                        style={{
                          fontSize: '11px',
                          color: '#94a3b8',
                          marginTop: '4px',
                          lineHeight: 1.35,
                        }}
                      >
                        {stat.subtext}
                      </div>
                    </div>

                    {/* Accent bar at bottom on hover */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '16px',
                        right: '16px',
                        height: '2px',
                        backgroundColor: '#e60012',
                        borderRadius: '2px',
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Right Side: Corporate Security Operations Center Live Command Card */}
            <div
              style={{
                backgroundColor: '#0f172a',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #1e293b',
                boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.4)',
                minHeight: '480px',
              }}
            >
              {/* Background SOC Visual */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${corporateCommandCenterImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.65,
                  zIndex: 1,
                  filter: 'contrast(1.05) brightness(0.9)',
                }}
              />

              {/* Gradient Scrim for Readability */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(15, 23, 42, 0.95) 100%)',
                  zIndex: 2,
                }}
              />

              {/* Top Status Bar */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 3,
                  padding: '24px 28px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div>
                  <div
                    style={{
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
                        backgroundColor: '#22c55e',
                        boxShadow: '0 0 10px #22c55e',
                        display: 'inline-block',
                      }}
                    />
                    <span
                      style={{
                        color: '#f8fafc',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Global Security SOC
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: '#94a3b8',
                      marginTop: '2px',
                    }}
                  >
                    Operations active in 100+ countries
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(230, 0, 18, 0.15)',
                    border: '1px solid rgba(230, 0, 18, 0.4)',
                    color: '#ff4d5a',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: 600,
                  }}
                >
                  99.99% Uptime
                </div>
              </div>

              {/* Center Informational Highlight */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 3,
                  padding: '28px',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.75)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '16px',
                    padding: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#e60012',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '6px',
                    }}
                  >
                    Mission-Critical Reliability
                  </div>
                  <div
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.35,
                      marginBottom: '10px',
                    }}
                  >
                    Powering National Security, Smart Urban Grids & Banking Safe Havens
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: '#cbd5e1',
                      lineHeight: 1.5,
                    }}
                  >
                    Coloron’s certified hardware and neural software architectures monitor over 50,000 video channels simultaneously with sub-second alert response.
                  </div>
                </div>
              </div>

              {/* Bottom Quick Facts Bar */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 3,
                  padding: '20px 28px',
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '12px',
                }}
              >
                <div>
                  <div
                    style={{
                      color: '#94a3b8',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Global Presence
                  </div>
                  <div
                    style={{
                      color: '#ffffff',
                      fontSize: '16px',
                      fontWeight: 700,
                      marginTop: '2px',
                    }}
                  >
                    100+ Nations
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      color: '#94a3b8',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Compliance
                  </div>
                  <div
                    style={{
                      color: '#ffffff',
                      fontSize: '16px',
                      fontWeight: 700,
                      marginTop: '2px',
                    }}
                  >
                    ISO / NDAA
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      color: '#94a3b8',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Track Record
                  </div>
                  <div
                    style={{
                      color: '#e60012',
                      fontSize: '16px',
                      fontWeight: 700,
                      marginTop: '2px',
                    }}
                  >
                    40+ Years
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* VIEW 2: COMMAND CENTER FULL-BLEED CORPORATE BANNER (Executive Dark Mode with Real Operations Center) */
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: '#0a0f1d',
              boxShadow: '0 25px 60px -15px rgba(10, 15, 29, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Background Command Center Photo */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${corporateCommandCenterImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'right center',
                opacity: 0.5,
                zIndex: 1,
              }}
            />

            {/* Slate/Navy Executive Gradient Scrim */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(90deg, rgba(10, 15, 29, 0.98) 0%, rgba(10, 15, 29, 0.94) 52%, rgba(15, 23, 42, 0.8) 72%, rgba(10, 15, 29, 0.45) 100%)',
                zIndex: 2,
              }}
            />

            {/* Content Container */}
            <div
              style={{
                position: 'relative',
                zIndex: 3,
                padding: '36px 44px 48px',
              }}
            >
              {/* Header inside Dark Mode */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingBottom: '20px',
                  marginBottom: '32px',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#22c55e',
                      boxShadow: '0 0 10px #22c55e',
                      display: 'inline-block',
                    }}
                  />
                  <span
                    style={{
                      color: '#ffffff',
                      fontSize: '13px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Enterprise Command Operations Center
                  </span>
                </div>

                <div
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <CheckCircle2 size={15} color="#22c55e" />
                  <span>Real-time metrics verified across active nodes</span>
                </div>
              </div>

              {/* 3 Columns x 4 Rows Stats Grid */}
              <div
                className="impact-stats-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  columnGap: '44px',
                  rowGap: '32px',
                  maxWidth: '880px',
                }}
              >
                {impactStats.map((stat, idx) => {
                  const currentVal = counts[idx] || 0;
                  const IconComponent = stat.icon;
                  const isHovered = hoveredId === stat.id;

                  return (
                    <div
                      key={stat.id}
                      onMouseEnter={() => setHoveredId(stat.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      style={{
                        padding: '14px 16px',
                        borderRadius: '12px',
                        backgroundColor: isHovered
                          ? 'rgba(255, 255, 255, 0.08)'
                          : 'rgba(255, 255, 255, 0.02)',
                        border: isHovered
                          ? '1px solid rgba(230, 0, 18, 0.5)'
                          : '1px solid rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(8px)',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginBottom: '8px',
                        }}
                      >
                        <IconComponent
                          size={16}
                          color={isHovered ? '#ff4d5a' : 'rgba(255,255,255,0.6)'}
                        />
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            color: 'rgba(255, 255, 255, 0.5)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {stat.tag}
                        </span>
                      </div>

                      <div
                        style={{
                          fontSize: 'clamp(26px, 2.6vw, 34px)',
                          fontWeight: 800,
                          letterSpacing: '-0.02em',
                          lineHeight: 1.1,
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '2px',
                        }}
                      >
                        <span>
                          {hasAnimated ? currentVal.toLocaleString() : '0'}
                        </span>
                        <span
                          style={{
                            color: '#e60012',
                            fontSize: '0.85em',
                            fontWeight: 700,
                          }}
                        >
                          {stat.suffix}
                        </span>
                      </div>

                      <div
                        style={{
                          fontSize: '14px',
                          color: 'rgba(255, 255, 255, 0.85)',
                          marginTop: '4px',
                          fontWeight: 500,
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Responsive Media Queries */}
      <style>{`
        @media (max-width: 1100px) {
          .corporate-split-view {
            grid-template-columns: 1fr !important;
          }
          .corporate-stats-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 820px) {
          .corporate-stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 12px !important;
          }
          .impact-stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            column-gap: 20px !important;
            row-gap: 20px !important;
          }
        }

        @media (max-width: 540px) {
          .corporate-stats-grid {
            grid-template-columns: 1fr !important;
          }
          .impact-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
