import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  Shield,
  Layers,
  ChevronDown,
  ChevronUp,
  Download,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Home,
  Monitor,
  Calendar,
  Package,
  Clock,
  Activity,
  FileText,
  Sliders,
  ExternalLink,
  PhoneCall,
  Play,
  Pause,
  X,
  Maximize2
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';
import DockSimulationPlayer from '../components/DockSimulationPlayer';

export default function DockManagementSolution() {
  const [activeTab, setActiveTab] = useState('loading_unloading'); // 'loading_unloading' | 'scheduling_dispatch' | 'dashboard'
  const [activeNav, setActiveNav] = useState('overview');
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState({
    dock_camera: true,
    nvr: true,
    dome: true,
    led: true,
  });

  // Toggle accordion items
  const toggleAccordion = (key) => {
    setExpandedAccordion((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Scroll spy for sticky subnavigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'key-technologies', 'recommended-solutions', 'download', 'related-links'];
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

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      
      {/* 1. HERO BANNER - EXACT HIKVISION OFFICIAL DESIGN */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#e67300',
          overflow: 'hidden',
          lineHeight: 0,
        }}
      >
        <img
          src="/images/dock-management/Dock-management-banner-pc.jpg"
          alt="Dock Management - Solutions by Function"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '620px',
            minHeight: '380px',
            display: 'block',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* Content Overlay positioned over the orange circular curve */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 'clamp(28px, 9vw, 150px)',
            pointerEvents: 'none',
          }}
        >
          <div style={{ maxWidth: '520px', color: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <img
                src="/images/dock-management/SBF-logo.png"
                alt="Solutions by Function"
                style={{
                  height: 'clamp(26px, 3.2vw, 36px)',
                  width: 'auto',
                  display: 'block',
                }}
              />
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.2vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                color: '#ffffff',
                margin: 0,
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.15)',
              }}
            >
              Dock Management
            </h1>
          </div>
        </div>
      </section>

      {/* 2. STICKY SUB-NAVIGATION BAR WITH BREADCRUMB */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 90,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e5e5',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
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
          {/* Left Title & Center Navigation Items */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '36px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1d1d1f' }}>
              Dock Management
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'key-technologies', label: 'Key Technologies' },
                { id: 'recommended-solutions', label: 'Recommended solutions' },
                { id: 'download', label: 'Download' },
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
                      color: isActive ? '#e67300' : '#4b5563',
                      cursor: 'pointer',
                      position: 'relative',
                      borderBottom: isActive ? '2px solid #e67300' : '2px solid transparent',
                      transition: 'color 0.2s, border-color 0.2s',
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Breadcrumbs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.82rem',
              color: '#86868b',
              whiteSpace: 'nowrap',
            }}
          >
            <Link to="/" style={{ color: '#86868b', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Home size={13} style={{ marginRight: '4px' }} />
              Home
            </Link>
            <ChevronRight size={12} color="#a1a1a6" />
            <Link to="/solutions" style={{ color: '#86868b', textDecoration: 'none' }}>
              Solutions
            </Link>
            <ChevronRight size={12} color="#a1a1a6" />
            <span style={{ color: '#86868b' }}>Solutions by Function</span>
            <ChevronRight size={12} color="#a1a1a6" />
            <span style={{ color: '#1d1d1f', fontWeight: 600 }}>Dock Management</span>
          </div>
        </div>
      </nav>

      {/* 3. SECTION: DOCK MANAGEMENT INTELLIGENT SOLUTIONS */}
      <section
        id="overview"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '72px 32px 56px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            textAlign: 'center',
            marginBottom: '48px',
            letterSpacing: '-0.02em',
          }}
        >
          Dock management intelligent solutions
        </h2>

        {/* 2-Column: Video Player / 3D Render Image + Descriptive Paragraphs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '56px',
          }}
        >
          {/* Interactive Video Box */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
              border: '1px solid #eaeaea',
              backgroundColor: '#000000',
              aspectRatio: '16 / 9',
              width: '100%',
            }}
          >
            <DockSimulationPlayer />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: 1.75,
                color: '#4b5563',
                margin: 0,
              }}
            >
              Loading and unloading cargo at the docks of fulfillment or distribution centers are key steps in the logistics process. Traditional logistics companies often lack sufficient video recordings, especially when there is damage or loss of goods. And it might be stressful for them to track the status of each dock, due to heavy workloads and the large numbers of docks to be managed. Therefore, optimizing dock operations and management is of paramount importance for enhancing efficiency for any growing business.
            </p>
            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: 1.75,
                color: '#4b5563',
                margin: 0,
              }}
            >
              All of these problems can be conveniently solved using the Coloron Dock Management Solution. It’s powered by AI technologies and products with tailored algorithms, such as the intelligent dock camera. ANPR technology, dock status, entry & exit detection, and more, all come together in this solution to help logistics operators create more efficient loading & unloading processes as well as improve vehicle and resource allocations, enhancing overall efficiency. Read on to learn how Coloron’s dock management solution can help your logistics operation today.
            </p>
          </div>
        </div>

        {/* 3 Overview Feature Cards with Official Icons */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {[
            {
              id: 'loading_unloading',
              title: 'Loading & Unloading Management',
              icon: '/images/dock-management/Loading.jpg',
              desc: 'High-definition video surveillance and real-time bay occupancy detection ensure cargo safety and quick turnaround.',
            },
            {
              id: 'scheduling_dispatch',
              title: 'Scheduling & Dispatch Management',
              icon: '/images/dock-management/Scheduling.jpg',
              desc: 'Automated vehicle reservation scheduling, calling order queueing, and LED bay guidance prevent site congestion.',
            },
            {
              id: 'dashboard',
              title: 'Dock Management Dashboard',
              icon: '/images/dock-management/Dock-Mangement-Dashboard.jpg',
              desc: 'Visualized dock map, truck dwell heatmaps, and role-based analytics empower smarter logistics decisions.',
            },
          ].map((card) => (
            <div
              key={card.id}
              onClick={() => {
                setActiveTab(card.id);
                scrollToSection('key-technologies');
              }}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '32px 24px',
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#ea580c';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.03)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  margin: '0 auto 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  style={{ width: '56px', height: '56px', objectFit: 'contain' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#1d1d1f',
                  marginBottom: '10px',
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: '#6b7280',
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SECTION: KEY TECHNOLOGIES */}
      <section
        id="key-technologies"
        style={{
          backgroundColor: '#f9fafb',
          borderTop: '1px solid #f1f5f9',
          borderBottom: '1px solid #f1f5f9',
          padding: '80px 32px',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              textAlign: 'center',
              marginBottom: '48px',
              letterSpacing: '-0.02em',
            }}
          >
            Key Technologies
          </h2>

          {/* Highlight Card: 3D Render + Feature List */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e5e7eb',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '40px',
              alignItems: 'center',
              padding: '36px',
              marginBottom: '48px',
            }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #eaeaea',
                backgroundColor: '#f3f4f6',
              }}
            >
              <img
                src="/images/dock-management/Key-technologies.jpg"
                alt="Dock Camera Key Technologies"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>

            <div>
              <h3
                style={{
                  fontSize: '1.18rem',
                  fontWeight: 600,
                  color: '#1d1d1f',
                  marginBottom: '22px',
                  lineHeight: 1.5,
                }}
              >
                Dock Camera – High-end intelligent camera with tailored algorithms:
              </h3>
              <ul
                style={{
                  listStyleType: 'disc',
                  paddingLeft: '20px',
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                {[
                  'ANPR technology',
                  'Dock occupation detection',
                  'Entry & exit detection',
                  'Rear door status detection',
                  'Loading rate detection',
                  'Automatic LED light control',
                ].map((tech, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: '1rem',
                      color: '#374151',
                      lineHeight: 1.5,
                      fontWeight: 400,
                    }}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3 Interactive Tab Selector Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              borderBottom: '2px solid #e5e7eb',
              marginBottom: '36px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { id: 'loading_unloading', label: 'Loading & unloading management' },
              { id: 'scheduling_dispatch', label: 'Scheduling & dispatch management' },
              { id: 'dashboard', label: 'Dock management dashboard' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '14px 24px',
                    fontSize: '0.98rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#ea580c' : '#4b5563',
                    cursor: 'pointer',
                    position: 'relative',
                    marginBottom: '-2px',
                    borderBottom: isActive ? '3px solid #ea580c' : '3px solid transparent',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab 1 Content: Loading & Unloading Management */}
          {activeTab === 'loading_unloading' && (
            <div>
              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '20px',
                }}
              >
                Enhance efficiency and increase visibility for dock management:
              </p>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                {[
                  'Get complete and detailed records of vehicle status and movement throughout the loading and unloading processes, enabled by an outdoor Dock Camera with automated intelligent detections.',
                  'Grasp a comprehensive view of loading and unloading of goods, with synchronized live viewing and playback from the conventional camera inside and the Dock Camera outside.',
                  'Stay updated with real-time dock status via visualized dock map, as the colors of the trucks indicate their status – occupied, over-stayed, or errant parking, for example.',
                  'Guide drivers to the right dock efficiently using the LED screen on top of each dock displaying the dock number and the license plate number of the assigned truck.',
                  'Enjoy clear views even in darkness or dim light by automatically turning on supplemental LED lights at occupied docks.',
                ].map((bullet, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#ea580c',
                        marginTop: '8px',
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: '0.94rem', color: '#4b5563', lineHeight: 1.65 }}>
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* 3 Scenario Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '24px',
                }}
              >
                {[
                  {
                    title: 'Distribution center or fulfillment center',
                    image: '/images/dock-management/Distribution-center-or-fulfillment-center.jpg',
                    desc: 'High-throughput logistics hubs managing hundreds of trailer bays with synchronized bay cameras and automatic dwell alerts.',
                  },
                  {
                    title: 'Retail warehouse',
                    image: '/images/dock-management/Retail-ware-house.jpg',
                    desc: 'Continuous surveillance of inventory staging, pallet cross-docking, and damage claim resolution archives.',
                  },
                  {
                    title: 'Manufacturing supply chain',
                    image: '/images/dock-management/Manufacturing-supply-chain.jpg',
                    desc: 'Seamless incoming raw material and outgoing finished product bay scheduling with automated gate verification.',
                  },
                ].map((scene, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.09)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                    }}
                  >
                    <div style={{ height: '200px', overflow: 'hidden' }}>
                      <img
                        src={scene.image}
                        alt={scene.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>
                    <div style={{ padding: '20px' }}>
                      <h4
                        style={{
                          fontSize: '1.02rem',
                          fontWeight: 700,
                          color: '#1d1d1f',
                          marginBottom: '8px',
                        }}
                      >
                        {scene.title}
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.55, margin: 0 }}>
                        {scene.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2 Content: Scheduling & Dispatch Management */}
          {activeTab === 'scheduling_dispatch' && (
            <div>
              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '20px',
                }}
              >
                Streamlined appointments and automated vehicle queuing:
              </p>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                {[
                  'Provides online reservations and approval abilities for the logistics service suppliers and carriers and the dock operators, via our logistics-tailored Coloron Central Platform.',
                  'The platform automatically forms a calling order based on reservations and arrivals, while allowing manual adjustment by the dock team on the web client or mobile app.',
                  'Drivers can better arrange wait times and respond quickly by checking the vehicle waiting list projected on the outdoor video wall.',
                  'Drivers can conveniently check in and out when they arrive at and depart from the logistic park with the smart and integrated entrance & exit system.',
                ].map((bullet, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#ea580c',
                        marginTop: '8px',
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: '0.94rem', color: '#4b5563', lineHeight: 1.65 }}>
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* 2 Scenario Cards for Gate & Dispatch */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '24px',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <div style={{ height: '220px', overflow: 'hidden' }}>
                    <img
                      src="/images/dock-management/Dock-management-eande-selected-products.jpg"
                      alt="Entrance & Exit System"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '8px' }}>
                      Automated Barrier Gate & ANPR Check-in
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.55, margin: 0 }}>
                      High-speed ANPR camera reads license plates in sub-seconds, cross-verifies dock appointments, and lifts barriers without human intervention.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <div style={{ height: '220px', overflow: 'hidden' }}>
                    <img
                      src="/images/dock-management/Scheduling.jpg"
                      alt="Scheduling & Calling System"
                      style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '16px' }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '8px' }}>
                      Dynamic Waiting List Display
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.55, margin: 0 }}>
                      Outdoor LED billboards and mobile notifications inform waiting truck drivers when their designated dock bay is ready for docking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3 Content: Dock Management Dashboard */}
          {activeTab === 'dashboard' && (
            <div>
              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '20px',
                }}
              >
                Visualized dashboard and reports facilitate smarter decision making:
              </p>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                {[
                  'Visualized dashboards from the centralized Coloron Central platform can generate analytic reports based on your role and needs.',
                  'The manager of the logistics park can better evaluate and improve overall efficiency for loading & unloading, and scheduling & dispatch processes, with reports indicating average throughput, dock usage rates, dwell time at each step, and more.',
                  'The owner or manager of each company operating at the logistics park can easily understand their dock operations status, throughput ranking, and operational efficiency by checking utilization rates, driver wait times, etc.',
                ].map((bullet, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#ea580c',
                        marginTop: '8px',
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: '0.94rem', color: '#4b5563', lineHeight: 1.65 }}>
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* 2 Dashboard Scenario Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '24px',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <div style={{ height: '220px', overflow: 'hidden' }}>
                    <img
                      src="/images/dock-management/Entre-logistics-park.jpg"
                      alt="Statistical overview of entire logistics park"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '8px' }}>
                      Statistical overview of entire logistics park
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.55, margin: 0 }}>
                      Macro-level operations data covering total truck arrivals, average turn-around cycle time, dock utilization heatmaps, and peak delivery hours.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <div style={{ height: '220px', overflow: 'hidden' }}>
                    <img
                      src="/images/dock-management/a-Specific-company-in-the-park.jpg"
                      alt="Statistical overview of a specific company in the park"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '8px' }}>
                      Statistical overview of a specific tenant company
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.55, margin: 0 }}>
                      Dedicated dashboard for tenant logistics operators showing their specific bay occupancy, loading durations, and driver feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. SECTION: RECOMMENDED SOLUTIONS & SYSTEM ARCHITECTURE */}
      <section
        id="recommended-solutions"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '80px 32px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            marginBottom: '48px',
            letterSpacing: '-0.02em',
          }}
        >
          {activeTab === 'scheduling_dispatch'
            ? 'Entrance & exit management solution'
            : 'Loading & unloading management solution'}
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* Left: System Architecture Diagram */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e5e7eb',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
              padding: '24px',
              textAlign: 'center',
            }}
          >
            <img
              src={
                activeTab === 'scheduling_dispatch'
                  ? '/images/dock-management/Dock-management-eande-selected-products.jpg'
                  : '/images/dock-management/Dock-management-loading-and-unloading-management-selected-products.jpg'
              }
              alt="System Architecture Diagram"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '520px',
                objectFit: 'contain',
                margin: '0 auto',
              }}
            />
          </div>

          {/* Right: Product Category Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* 1. Dock Camera */}
            <div
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '14px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
              }}
            >
              <button
                onClick={() => toggleAccordion('dock_camera')}
                style={{
                  width: '100%',
                  padding: '18px 20px',
                  backgroundColor: '#f9fafb',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '1.02rem', fontWeight: 700, color: '#1d1d1f' }}>
                  Dock camera
                </span>
                {expandedAccordion.dock_camera ? <ChevronUp size={20} color="#6b7280" /> : <ChevronDown size={20} color="#6b7280" />}
              </button>

              {expandedAccordion.dock_camera && (
                <div style={{ padding: '20px', borderTop: '1px solid #f1f5f9' }}>
                  <Link
                    to="/products"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      textDecoration: 'none',
                      color: 'inherit',
                      padding: '12px',
                      borderRadius: '10px',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fafc')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <div
                      style={{
                        width: '90px',
                        height: '65px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        backgroundColor: '#f3f4f6',
                        borderRadius: '8px',
                        padding: '4px',
                      }}
                    >
                      <img
                        src="/images/dock-management/product-ids-2cd7a46g0.png"
                        alt="iDS-2CD7A46G0/P-IZHS(Y)"
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#ea580c', marginBottom: '4px' }}>
                        iDS-2CD7A46G0/P-IZHS(Y)
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.4 }}>
                        4MP DeepinView ANPR Moto Varifocal Bullet Camera
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 2. NVR */}
            <div
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '14px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
              }}
            >
              <button
                onClick={() => toggleAccordion('nvr')}
                style={{
                  width: '100%',
                  padding: '18px 20px',
                  backgroundColor: '#f9fafb',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '1.02rem', fontWeight: 700, color: '#1d1d1f' }}>
                  NVR (Central real-time response)
                </span>
                {expandedAccordion.nvr ? <ChevronUp size={20} color="#6b7280" /> : <ChevronDown size={20} color="#6b7280" />}
              </button>

              {expandedAccordion.nvr && (
                <div style={{ padding: '20px', borderTop: '1px solid #f1f5f9' }}>
                  <Link
                    to="/products"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      textDecoration: 'none',
                      color: 'inherit',
                      padding: '12px',
                      borderRadius: '10px',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fafc')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <div
                      style={{
                        width: '90px',
                        height: '65px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        backgroundColor: '#f3f4f6',
                        borderRadius: '8px',
                        padding: '4px',
                      }}
                    >
                      <img
                        src="/images/dock-management/product-ds-9632ni-i8.png"
                        alt="DS-9632NI-I8"
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#ea580c', marginBottom: '4px' }}>
                        DS-9632NI-I8
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.4 }}>
                        32-ch 2U 4K DeepinMind Ultra NVR
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Dome Camera */}
            <div
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '14px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
              }}
            >
              <button
                onClick={() => toggleAccordion('dome')}
                style={{
                  width: '100%',
                  padding: '18px 20px',
                  backgroundColor: '#f9fafb',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '1.02rem', fontWeight: 700, color: '#1d1d1f' }}>
                  Dome Camera
                </span>
                {expandedAccordion.dome ? <ChevronUp size={20} color="#6b7280" /> : <ChevronDown size={20} color="#6b7280" />}
              </button>

              {expandedAccordion.dome && (
                <div style={{ padding: '20px', borderTop: '1px solid #f1f5f9' }}>
                  <Link
                    to="/products"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      textDecoration: 'none',
                      color: 'inherit',
                      padding: '12px',
                      borderRadius: '10px',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fafc')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <div
                      style={{
                        width: '90px',
                        height: '65px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        backgroundColor: '#f3f4f6',
                        borderRadius: '8px',
                        padding: '4px',
                      }}
                    >
                      <img
                        src="/images/dock-management/product-ds-2cd3143g2-isu.png"
                        alt="DS-2CD3143G2-ISU"
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#ea580c', marginBottom: '4px' }}>
                        DS-2CD3143G2-ISU
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.4 }}>
                        4 MP Vandal WDR Fixed Dome Network Camera
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 4. LED Screen & Indicator */}
            <div
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '14px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
              }}
            >
              <button
                onClick={() => toggleAccordion('led')}
                style={{
                  width: '100%',
                  padding: '18px 20px',
                  backgroundColor: '#f9fafb',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '1.02rem', fontWeight: 700, color: '#1d1d1f' }}>
                  LED Screen
                </span>
                {expandedAccordion.led ? <ChevronUp size={20} color="#6b7280" /> : <ChevronDown size={20} color="#6b7280" />}
              </button>

              {expandedAccordion.led && (
                <div style={{ padding: '20px', borderTop: '1px solid #f1f5f9' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '90px',
                        height: '65px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        backgroundColor: '#1f2937',
                        borderRadius: '8px',
                        padding: '4px',
                        color: '#22c55e',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        textAlign: 'center',
                      }}
                    >
                      Dock: A01
                      <br />
                      PL8 NO 123
                    </div>
                    <div>
                      <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#ea580c', marginBottom: '4px' }}>
                        Dock Status LED Display Screen
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.4 }}>
                        High-brightness Industrial Bay Status Indicator with Automatic Supplemental Light
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: DOWNLOAD */}
      <section
        id="download"
        style={{
          backgroundColor: '#f9fafb',
          borderTop: '1px solid #f1f5f9',
          borderBottom: '1px solid #f1f5f9',
          padding: '64px 32px',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              textAlign: 'center',
              marginBottom: '36px',
              letterSpacing: '-0.02em',
            }}
          >
            Download
          </h2>

          <div
            style={{
              maxWidth: '540px',
              margin: '0 auto',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              padding: '24px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#fff7ed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ea580c',
                  flexShrink: 0,
                }}
              >
                <FileText size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#9ca3af', textTransform: 'uppercase', fontWeight: 600 }}>
                  Brochure
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1d1d1f' }}>
                  Dock Management Solution
                </div>
              </div>
            </div>

            <a
              href="#download-spec"
              onClick={(e) => {
                e.preventDefault();
                alert('Downloading Coloron Dock Management Solution Brochure (PDF)...');
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#ea580c',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '0.88rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c2410c')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ea580c')}
            >
              <Download size={16} />
              Download
            </a>
          </div>
        </div>
      </section>

      {/* 7. SECTION: YOU MAY ALSO BE INTERESTED IN */}
      <section
        id="related-links"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '80px 32px 100px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            textAlign: 'center',
            marginBottom: '48px',
            letterSpacing: '-0.02em',
          }}
        >
          You may also be interested in
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {/* Card 1: Parcel Tracking */}
          <Link
            to="/solutions/visual-parcel-tracking"
            style={{
              textDecoration: 'none',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: '#1d1d1f',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
              position: 'relative',
              height: '380px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '32px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.16)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
            }}
          >
            <img
              src="/images/dock-management/Parcel-Tracking.jpg"
              alt="Parcel Tracking"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.65,
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                zIndex: 2,
              }}
            />
            <div style={{ position: 'relative', zIndex: 3 }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#ea580c',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Solutions by Function
              </div>
              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '10px',
                }}
              >
                Parcel Tracking
              </h3>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.5,
                  margin: '0 0 16px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                To tackle these challenges and enhance supply chain monitoring while improving overall efficiency, Coloron provides a powerful, end-to-end, visualized parcel tracking solution.
              </p>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#ea580c',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                }}
              >
                Learn More <ArrowRight size={14} />
              </div>
            </div>
          </Link>

          {/* Card 2: Line haul management */}
          <Link
            to="/solutions/line-haul-management"
            style={{
              textDecoration: 'none',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: '#1d1d1f',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
              position: 'relative',
              height: '380px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '32px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.16)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
            }}
          >
            <img
              src="/images/dock-management/line-haul-related.jpg"
              alt="Line haul management"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.65,
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                zIndex: 2,
              }}
            />
            <div style={{ position: 'relative', zIndex: 3 }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#ea580c',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Solutions by Function
              </div>
              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '10px',
                }}
              >
                Line haul management
              </h3>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.5,
                  margin: '0 0 16px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                Helps right where it's needed, minimizing transportation risks and maximizing security throughout cargo transit.
              </p>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#ea580c',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                }}
              >
                Learn More <ArrowRight size={14} />
              </div>
            </div>
          </Link>

          {/* Card 3: Warehouses */}
          <Link
            to="/solutions/warehouses"
            style={{
              textDecoration: 'none',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: '#1d1d1f',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
              position: 'relative',
              height: '380px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '32px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.16)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
            }}
          >
            <img
              src="/images/dock-management/Distribution-center-or-fulfillment-center.jpg"
              alt="Warehouses"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.65,
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                zIndex: 2,
              }}
            />
            <div style={{ position: 'relative', zIndex: 3 }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#ea580c',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Solutions by Scenario
              </div>
              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '10px',
                }}
              >
                Warehouses
              </h3>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.5,
                  margin: '0 0 16px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                Loss prevention and efficient operations are the two main concerns for logistics parks operators.
              </p>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#ea580c',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                }}
              >
                Learn More <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Floating CTA / Contact Sales button */}
      <div
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: 80,
        }}
      >
        <button
          onClick={() => setShowSalesModal(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#ea580c',
            color: '#ffffff',
            padding: '14px 24px',
            borderRadius: '9999px',
            border: 'none',
            fontSize: '0.94rem',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(234, 88, 12, 0.4)',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#c2410c';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ea580c';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <PhoneCall size={18} />
          Contact Sales
        </button>
      </div>

      {/* Contact Sales Modal */}
      <ContactSalesModal
        isOpen={showSalesModal}
        onClose={() => setShowSalesModal(false)}
      />
    </div>
  );
}
