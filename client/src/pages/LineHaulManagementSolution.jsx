import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  Shield,
  MapPin,
  Camera,
  Radio,
  FileText,
  Download,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Home,
  Sliders,
  AlertTriangle,
  Activity,
  Layers,
  PhoneCall,
  Clock,
  Compass,
  Cpu
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

export default function LineHaulManagementSolution() {
  const [activeTab, setActiveTab] = useState('vehicle_tracking'); // 'vehicle_tracking' | 'driver_protection' | 'goods_protection' | 'audio_visual'
  const [activeNav, setActiveNav] = useState('what-we-offer');
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('camera'); // 'camera' | 'recorder' | 'sensor'

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['what-we-offer', 'recommended-solutions', 'related-links'];
      const scrollPos = window.scrollY + 180;

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
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveNav(id);
    }
  };

  const tabs = [
    { id: 'vehicle_tracking', label: 'Vehicle tracking & monitoring' },
    { id: 'driver_protection', label: 'Driver protection & assistance' },
    { id: 'goods_protection', label: 'Goods transportation protection' },
    { id: 'audio_visual', label: 'Audio visual dispatch' },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      
      {/* 1. HERO BANNER - EXACT HIKVISION OFFICIAL DESIGN */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#ea580c',
          overflow: 'hidden',
          lineHeight: 0,
        }}
      >
        <img
          src="/images/line-haul/hero_banner_exact.jpg"
          alt="Line Haul Management - Solutions by Function"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '640px',
            display: 'block',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </section>

      {/* 2. STICKY SUB-NAVIGATION BAR WITH BREADCRUMB */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 90,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e5e5',
          boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '52px',
          }}
        >
          {/* Left Title & Center Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '36px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1d1d1f' }}>
              Line haul management
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
              {[
                { id: 'what-we-offer', label: 'What we offer' },
                { id: 'recommended-solutions', label: 'Recommended solutions' },
                { id: 'related-links', label: 'Related links' },
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
                      fontSize: '0.86rem',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#ea580c' : '#333333',
                      cursor: 'pointer',
                      position: 'relative',
                      borderBottom: isActive ? '2px solid #ea580c' : '2px solid transparent',
                      transition: 'color 0.2s, border-color 0.2s',
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Breadcrumb */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              color: '#666666',
              whiteSpace: 'nowrap',
            }}
          >
            <Link to="/" style={{ color: '#666666', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Home size={14} />
            </Link>
            <span style={{ color: '#999999' }}>&gt;</span>
            <Link to="/solutions" style={{ color: '#666666', textDecoration: 'none' }}>
              Solutions
            </Link>
            <span style={{ color: '#999999' }}>&gt;</span>
            <span style={{ color: '#666666' }}>Solutions by Function</span>
            <span style={{ color: '#999999' }}>&gt;</span>
          </div>
        </div>
      </nav>

      {/* 3. "LINE HAUL MANAGEMENT SOLUTIONS" (WHAT WE OFFER) SECTION */}
      <section id="what-we-offer" style={{ padding: '80px 24px 60px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '2.3rem',
              fontWeight: 700,
              margin: '0 0 20px 0',
              color: '#111827',
              letterSpacing: '-0.02em',
            }}
          >
            Line haul management solutions
          </h2>
          <p
            style={{
              fontSize: '0.98rem',
              color: '#555555',
              lineHeight: 1.65,
              maxWidth: '920px',
              margin: '0 auto 60px auto',
            }}
          >
            For logistics service providers delivering thousands of parcels every day, the top concerns revolve around timely, accurate, and comprehensive status updates of freight and trucks. They need to know the courier vehicle location, parcel security, and exchanging records on-the-move. Line Haul Management Solution helps right where it is needed, optimizing transportation routes and minimizing security, while offering valuable insights on line-haul driver performance and operational efficiency.
          </p>

          {/* 3 Centered Clean Icons from screenshot */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '110px',
              flexWrap: 'wrap',
              margin: '0 auto',
            }}
          >
            {/* Icon 1: Vehicle status */}
            <div
              onClick={() => {
                setActiveTab('vehicle_tracking');
                scrollToSection('recommended-solutions');
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'center',
                maxWidth: '200px',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <img
                  src="/images/line-haul/icon_vehicle_status.svg"
                  alt="Vehicle status"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  marginBottom: '4px',
                  display: 'block',
                }}
              >
                Vehicle status
              </span>
              <span style={{ fontSize: '0.85rem', color: '#666666' }}>
                Real-time location &amp; speed
              </span>
            </div>

            {/* Icon 2: Driver status */}
            <div
              onClick={() => {
                setActiveTab('driver_protection');
                scrollToSection('recommended-solutions');
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'center',
                maxWidth: '200px',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <img
                  src="/images/line-haul/icon_driver_status.svg"
                  alt="Driver status"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  marginBottom: '4px',
                  display: 'block',
                }}
              >
                Driver status
              </span>
              <span style={{ fontSize: '0.85rem', color: '#666666' }}>
                Fatigue &amp; behavior analysis
              </span>
            </div>

            {/* Icon 3: In-transit */}
            <div
              onClick={() => {
                setActiveTab('goods_protection');
                scrollToSection('recommended-solutions');
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'center',
                maxWidth: '200px',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <img
                  src="/images/line-haul/icon_in_transit.svg"
                  alt="In-transit"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  marginBottom: '4px',
                  display: 'block',
                }}
              >
                In-transit
              </span>
              <span style={{ fontSize: '0.85rem', color: '#666666' }}>
                Cargo door &amp; temp security
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "RECOMMENDED SOLUTIONS" SECTION */}
      <section id="recommended-solutions" style={{ padding: '70px 24px 80px 24px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
              Recommended solutions
            </h2>
          </div>

          {/* 4 Tabs Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '36px',
            }}
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    backgroundColor: isActive ? '#ffffff' : 'transparent',
                    color: isActive ? '#ea580c' : '#4b5563',
                    border: isActive ? '1px solid #ea580c' : '1px solid #e5e7eb',
                    padding: '9px 24px',
                    borderRadius: '24px',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: isActive ? '0 2px 8px rgba(234, 88, 12, 0.12)' : 'none',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab 1: Vehicle tracking & monitoring */}
          {activeTab === 'vehicle_tracking' && (
            <div>
              {/* Bullet Points */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '24px 32px',
                  border: '1px solid #e5e7eb',
                  marginBottom: '32px',
                }}
              >
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 16px 0' }}>
                  Real-time operational road tracking with instant incident verification
                </h3>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.94rem', lineHeight: 1.8 }}>
                  <li>
                    <strong>Real-time GPS and status monitoring</strong> provides the most comprehensive operational solutions to the issues you face, in the speediest manner.
                  </li>
                  <li>
                    <strong>Continuous video recording</strong> captures evidence of incidents or abnormal situations, exonerating drivers from false liability.
                  </li>
                  <li>
                    <strong>Remote emergency trigger button</strong> for instantaneous notification to the monitoring centre if an issue arises.
                  </li>
                </ul>
              </div>

              {/* 2 Scenario Cards Matching Official Screenshot */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '24px',
                  marginBottom: '48px',
                }}
              >
                {/* Scenario Card 1 */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                  }}
                >
                  <div style={{ height: '240px', overflow: 'hidden' }}>
                    <img
                      src="/images/line-haul/real-time-gps-tracking.jpg"
                      alt="Real-time GPS tracking"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 8px 0', color: '#111827' }}>
                      Real-time GPS tracking
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.5 }}>
                      Continuous vehicle telemetry tracking via 4G/GNSS, logging exact highway coordinates, average speeds, geofence compliance, and scheduled transit milestones.
                    </p>
                  </div>
                </div>

                {/* Scenario Card 2 */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                  }}
                >
                  <div style={{ height: '240px', overflow: 'hidden' }}>
                    <img
                      src="/images/line-haul/real-time-video-monitoring.jpg"
                      alt="Real-time video monitoring"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 8px 0', color: '#111827' }}>
                      Real-time video monitoring
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.5 }}>
                      High-definition cabin and front-road video streaming on demand, providing control room dispatchers with visual verification of weather, traffic, or road incidents.
                    </p>
                  </div>
                </div>
              </div>

              {/* System Architecture & Product Section */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  padding: '36px',
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', margin: '0 0 24px 0' }}>
                  Vehicle tracking &amp; monitoring solution
                </h3>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(300px, 1fr) minmax(320px, 1fr)',
                    gap: '40px',
                    alignItems: 'center',
                  }}
                >
                  {/* Left: Clean SVG Topology Diagram */}
                  <div style={{ height: '360px', width: '100%' }}>
                    <img
                      src="/images/line-haul/topology_line_haul.svg"
                      alt="Vehicle Tracking Topology"
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>

                  {/* Right: Product Components */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    
                    {/* Product 1: Mobile Camera */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        padding: '16px',
                        borderRadius: '8px',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                      }}
                    >
                      <div
                        style={{
                          width: '80px',
                          height: '80px',
                          backgroundColor: '#ffffff',
                          borderRadius: '6px',
                          padding: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid #e2e8f0',
                        }}
                      >
                        <img
                          src="/images/line-haul/prod_mobile_camera.png"
                          alt="Mobile Camera"
                          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                        />
                      </div>
                      <div>
                        <span style={{ fontSize: '0.8rem', color: '#ea580c', fontWeight: 700, textTransform: 'uppercase' }}>
                          Mobile Camera
                        </span>
                        <h5 style={{ fontSize: '1rem', fontWeight: 700, margin: '2px 0 4px 0', color: '#1e293b' }}>
                          AE-VC224T-IT
                        </h5>
                        <p style={{ fontSize: '0.84rem', color: '#64748b', margin: 0 }}>
                          1080p Mobile Turret Camera with IR illumination, audio mic, IP68 waterproof rating, and aviation connectors.
                        </p>
                      </div>
                    </div>

                    {/* Product 2: Mobile Recorder */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        padding: '16px',
                        borderRadius: '8px',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                      }}
                    >
                      <div
                        style={{
                          width: '80px',
                          height: '80px',
                          backgroundColor: '#ffffff',
                          borderRadius: '6px',
                          padding: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid #e2e8f0',
                        }}
                      >
                        <img
                          src="/images/line-haul/prod_mobile_recorder.png"
                          alt="Mobile Recorder"
                          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                        />
                      </div>
                      <div>
                        <span style={{ fontSize: '0.8rem', color: '#ea580c', fontWeight: 700, textTransform: 'uppercase' }}>
                          Mobile Recorder
                        </span>
                        <h5 style={{ fontSize: '1rem', fontWeight: 700, margin: '2px 0 4px 0', color: '#1e293b' }}>
                          AE-MN5043
                        </h5>
                        <p style={{ fontSize: '0.84rem', color: '#64748b', margin: 0 }}>
                          4-ch AI Mobile NVR with GNSS GPS positioning, 4G wireless module, anti-vibration damping, and AI ADAS analytics.
                        </p>
                      </div>
                    </div>

                    {/* Product 3: Emergency Panic Button */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        padding: '16px',
                        borderRadius: '8px',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                      }}
                    >
                      <div
                        style={{
                          width: '80px',
                          height: '80px',
                          backgroundColor: '#ffffff',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid #e2e8f0',
                          color: '#ef4444',
                        }}
                      >
                        <AlertTriangle size={36} />
                      </div>
                      <div>
                        <span style={{ fontSize: '0.8rem', color: '#ea580c', fontWeight: 700, textTransform: 'uppercase' }}>
                          Panic Alarm
                        </span>
                        <h5 style={{ fontSize: '1rem', fontWeight: 700, margin: '2px 0 4px 0', color: '#1e293b' }}>
                          One-Touch Emergency Button
                        </h5>
                        <p style={{ fontSize: '0.84rem', color: '#64748b', margin: 0 }}>
                          Instant SOS driver alert mechanism triggering alarm popups, live camera feeds, and automated police notification.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Driver protection & assistance */}
          {activeTab === 'driver_protection' && (
            <div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '24px 32px',
                  border: '1px solid #e5e7eb',
                  marginBottom: '32px',
                }}
              >
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 16px 0' }}>
                  Proactive road collision avoidance and driver fatigue analysis
                </h3>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.94rem', lineHeight: 1.8 }}>
                  <li>
                    <strong>Advanced Driving Assistance System (ADAS)</strong> provides Forward Collision Warnings (FCW), Lane Departure Warnings (LDW), and Pedestrian Collision Warnings (PCW).
                  </li>
                  <li>
                    <strong>Driver Behavior Analysis (DBA)</strong> detects fatigued driving, yawning, smoking, mobile phone distraction, and seatbelt violations.
                  </li>
                  <li>
                    <strong>Blind Spot Detection (BSD)</strong> notifies drivers via acoustic and visual cabin alarms when cyclists or vehicles enter hazardous blind spots.
                  </li>
                </ul>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '24px',
                  marginBottom: '48px',
                }}
              >
                <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                  <div style={{ height: '240px', overflow: 'hidden' }}>
                    <img
                      src="/images/transit_bus/offer_adas_cabin.jpg"
                      alt="ADAS System"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 8px 0', color: '#111827' }}>
                      Forward Collision &amp; Lane Departure (ADAS)
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.5 }}>
                      Radar and optical fusion analyzes forward highway traffic, alerting drivers in milliseconds to prevent tailgating and high-speed highway crashes.
                    </p>
                  </div>
                </div>

                <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                  <div style={{ height: '240px', overflow: 'hidden' }}>
                    <img
                      src="/images/line-haul/blind-spot-detection.jpg"
                      alt="Blind Spot Detection"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 8px 0', color: '#111827' }}>
                      Blind Spot Detection (BSD)
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.5 }}>
                      Wide-angle side cameras monitor long-trailer blind turns, eliminating dangerous turning blind spots at congested highway interchanges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Goods transportation protection */}
          {activeTab === 'goods_protection' && (
            <div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '24px 32px',
                  border: '1px solid #e5e7eb',
                  marginBottom: '32px',
                }}
              >
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 16px 0' }}>
                  End-to-end cargo compartment security, smart seals, and cold-chain integrity
                </h3>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.94rem', lineHeight: 1.8 }}>
                  <li>
                    <strong>Electronic trailer locks &amp; smart door sensors</strong> verify that cargo doors are opened strictly within designated logistics geofences.
                  </li>
                  <li>
                    <strong>Continuous temperature &amp; humidity logging</strong> with automatic alert triggers for pharmaceuticals and refrigerated food freight.
                  </li>
                  <li>
                    <strong>Cargo interior surveillance</strong> captures freight loading, detects parcel movement or shift during transport, and eliminates cargo theft.
                  </li>
                </ul>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '24px',
                  marginBottom: '48px',
                }}
              >
                <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                  <div style={{ height: '240px', overflow: 'hidden' }}>
                    <img
                      src="/images/line-haul/interest_line_haul.jpg"
                      alt="Electronic Cargo Lock"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 8px 0', color: '#111827' }}>
                      Electronic Trailer Lock &amp; Smart Seals
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.5 }}>
                      Geofence-synchronized lock mechanisms requiring remote unlock authorization from dispatch, preventing highway pilferage and cargo tampering.
                    </p>
                  </div>
                </div>

                <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                  <div style={{ height: '240px', overflow: 'hidden' }}>
                    <img
                      src="/images/line-haul/warehouses.jpg"
                      alt="Cold Chain Temperature Monitoring"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 8px 0', color: '#111827' }}>
                      Refrigerated Cold-Chain Telematics
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.5 }}>
                      Real-time temperature and humidity sensors log ambient trailer climate every 30 seconds, generating certified compliance reports upon delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Audio visual dispatch */}
          {activeTab === 'audio_visual' && (
            <div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '24px 32px',
                  border: '1px solid #e5e7eb',
                  marginBottom: '32px',
                }}
              >
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 16px 0' }}>
                  Instant two-way voice dispatch and centralized command center visualization
                </h3>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.94rem', lineHeight: 1.8 }}>
                  <li>
                    <strong>Two-way audio intercom</strong> allows dispatchers to guide drivers through unexpected road closures or emergency detours.
                  </li>
                  <li>
                    <strong>Broadcast emergency audio alerts</strong> directly to in-vehicle cabins during adverse weather conditions or route deviations.
                  </li>
                  <li>
                    <strong>HikCentral Master Fleet Platform</strong> aggregates fleet telemetry, driver safety scoring, fuel economy, and video retrieval on a single map.
                  </li>
                </ul>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '24px',
                  marginBottom: '48px',
                }}
              >
                <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                  <div style={{ height: '240px', overflow: 'hidden' }}>
                    <img
                      src="/images/line-haul/dispatch.jpg"
                      alt="Command Center Dispatch"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 8px 0', color: '#111827' }}>
                      Logistics Command Center
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.5 }}>
                      Central multi-screen wall monitoring active national line-haul corridors, transit delays, driver rosters, and automated alarm queues.
                    </p>
                  </div>
                </div>

                <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                  <div style={{ height: '240px', overflow: 'hidden' }}>
                    <img
                      src="/images/line-haul/logistics-management.jpg"
                      alt="Two-Way Voice Intercom"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 8px 0', color: '#111827' }}>
                      Two-Way Voice Dispatch &amp; Routing
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.5 }}>
                      Low-latency 4G VoIP communication handset ensuring drivers stay connected with fleet managers across cross-country highways.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 5. "DOWNLOAD" SECTION */}
      <section id="download" style={{ padding: '70px 24px', backgroundColor: '#ffffff', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, margin: '0 0 36px 0', color: '#111827' }}>
            Download
          </h2>

          <div
            style={{
              maxWidth: '440px',
              margin: '0 auto',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '6px',
                  backgroundColor: '#fee2e2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#dc2626',
                }}
              >
                <FileText size={28} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>
                  Flyer &middot; PDF
                </span>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '2px 0 0 0', color: '#1e293b' }}>
                  Line Haul Management Solution
                </h4>
              </div>
            </div>

            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                alert('Downloading Line Haul Management Solution brochure (PDF 3.2MB)...');
              }}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#475569',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ea580c';
                e.currentTarget.style.borderColor = '#ea580c';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.borderColor = '#cbd5e1';
                e.currentTarget.style.color = '#475569';
              }}
            >
              <Download size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 6. "YOU MAY ALSO BE INTERESTED IN" (RELATED LINKS) SECTION */}
      <section id="related-links" style={{ padding: '80px 24px', backgroundColor: '#f9fafb', borderTop: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, textAlign: 'center', margin: '0 0 44px 0', color: '#111827' }}>
            You may also be interested in
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '28px',
            }}
          >
            {/* Card 1: Logistics management */}
            <Link
              to="/solutions"
              style={{
                textDecoration: 'none',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img
                  src="/images/line-haul/logistics-management.jpg"
                  alt="Logistics management"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 10px 0', color: '#111827' }}>
                  Logistics management
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.6, margin: '0 0 16px 0', flex: 1 }}>
                  Global supply chain tracking solutions with real-time telematics, cargo security, and delivery fleet optimization.
                </p>
                <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#ea580c', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>Learn more</span>
                  <ChevronRight size={16} />
                </span>
              </div>
            </Link>

            {/* Card 2: Logistics <Solutions by Industry> */}
            <Link
              to="/solutions"
              style={{
                textDecoration: 'none',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img
                  src="/images/line-haul/logistics-industry.jpg"
                  alt="Logistics Solutions by Industry"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 10px 0', color: '#111827' }}>
                  Logistics &lt;Solutions by Industry&gt;
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.6, margin: '0 0 16px 0', flex: 1 }}>
                  Tailored for logistics hubs, distribution centers, express sorting depots, and cross-border transport.
                </p>
                <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#ea580c', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>Learn more</span>
                  <ChevronRight size={16} />
                </span>
              </div>
            </Link>

            {/* Card 3: Warehouses */}
            <Link
              to="/solutions/warehouses"
              style={{
                textDecoration: 'none',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img
                  src="/images/line-haul/warehouses.jpg"
                  alt="Warehouses"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 10px 0', color: '#111827' }}>
                  Warehouses
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.6, margin: '0 0 16px 0', flex: 1 }}>
                  Comprehensive smart warehouse surveillance, automated dock management, and parcel tracking.
                </p>
                <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#ea580c', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>Learn more</span>
                  <ChevronRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CONTACT EXPERT MODAL */}
      {showSalesModal && (
        <ContactSalesModal
          onClose={() => setShowSalesModal(false)}
          defaultSolution="Line Haul Management Solution"
        />
      )}
    </div>
  );
}
