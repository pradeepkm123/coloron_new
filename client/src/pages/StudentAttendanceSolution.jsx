import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Download,
  ChevronRight,
  ChevronUp,
  Home
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

export default function StudentAttendanceSolution() {
  const [activeTab, setActiveTab] = useState('school_bus'); // 'school_bus' | 'school_gate' | 'classroom'
  const [activeNav, setActiveNav] = useState('what-we-offer');
  const [showSalesModal, setShowSalesModal] = useState(false);

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['what-we-offer', 'recommended-solution', 'related-resources', 'related-links'];
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
    { id: 'school_bus', label: 'School bus attendance' },
    { id: 'school_gate', label: 'School gate & dormitory attendance' },
    { id: 'classroom', label: 'Classroom attendance' },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      
      {/* 1. HERO BANNER - ORIGINAL FULL RESOLUTION 1920x640 */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#15803d',
          overflow: 'hidden',
          lineHeight: 0,
        }}
      >
        <img
          src="/images/student-attendance/Student-attendance-banner-pc.jpg"
          alt="Student Attendance - Solutions by Function"
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
              Student Attendance System Solution - Hikvision
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
              {[
                { id: 'what-we-offer', label: 'What we offer' },
                { id: 'recommended-solution', label: 'Recommended solution' },
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
                      color: isActive ? '#d70015' : '#333333',
                      cursor: 'pointer',
                      position: 'relative',
                      borderBottom: isActive ? '2px solid #d70015' : '2px solid transparent',
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

      {/* 3. "WHAT WE OFFER" SECTION */}
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
            What we offer
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
            Today, intelligent student attending tools are playing a more and more important role on school campuses. They reduce the need for manual attendance check that take up teachers' time. Hikvision offers a comprehensive attendance solution to ensure student safety across multiple key campus areas, including school buses, school gates, and classrooms. These automatic attendance records can help to maintain student safety, as parents and teachers can receive notifications in real-time about their students' statuses. At the same time, attendance records can be exported easily for further use, such as for school management and academic progress tracking.
          </p>

          {/* 3 Centered Clean Icons matching official design */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '120px',
              flexWrap: 'wrap',
              margin: '0 auto',
            }}
          >
            {/* Icon 1: School bus attendance */}
            <div
              onClick={() => {
                setActiveTab('school_bus');
                scrollToSection('recommended-solution');
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
                  src="/images/student-attendance/icon_school_bus.svg"
                  alt="School bus attendance"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <span
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#1d1d1f',
                  lineHeight: 1.4,
                  display: 'block',
                }}
              >
                School bus attendance
              </span>
            </div>

            {/* Icon 2: School gate & dormitory attendance */}
            <div
              onClick={() => {
                setActiveTab('school_gate');
                scrollToSection('recommended-solution');
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'center',
                maxWidth: '220px',
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
                  src="/images/student-attendance/icon_school_gate.svg"
                  alt="School gate & dormitory attendance"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <span
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#1d1d1f',
                  lineHeight: 1.4,
                  display: 'block',
                }}
              >
                School gate &amp; dormitory attendance
              </span>
            </div>

            {/* Icon 3: Classroom attendance */}
            <div
              onClick={() => {
                setActiveTab('classroom');
                scrollToSection('recommended-solution');
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
                  src="/images/student-attendance/icon_classroom.svg"
                  alt="Classroom attendance"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <span
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#1d1d1f',
                  lineHeight: 1.4,
                  display: 'block',
                }}
              >
                Classroom attendance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "RECOMMENDED SOLUTION" SECTION */}
      <section id="recommended-solution" style={{ padding: '70px 24px 80px 24px', backgroundColor: '#ffffff', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
              Recommended solution
            </h2>
          </div>

          {/* Underline Tabs matching official design */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '48px',
              borderBottom: '1px solid #e5e5e5',
              marginBottom: '32px',
            }}
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '12px 6px',
                    fontSize: '0.92rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#d70015' : '#4b5563',
                    cursor: 'pointer',
                    position: 'relative',
                    borderBottom: isActive ? '2px solid #d70015' : '2px solid transparent',
                    transition: 'all 0.2s',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab 1: School bus attendance */}
          {activeTab === 'school_bus' && (
            <div>
              {/* Subheading & Bullets */}
              <div style={{ maxWidth: '960px', margin: '0 auto 40px auto' }}>
                <p style={{ fontSize: '0.86rem', color: '#6b7280', margin: '0 0 14px 0' }}>
                  Key student attendance functions for school bus transit
                </p>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111827', margin: '0 0 10px 0' }}>
                  Features
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', color: '#4b5563', fontSize: '0.88rem', lineHeight: 1.8 }}>
                  <li>
                    The attendance records are immediately uploaded to the central management platform of the school and parents can receive a message to confirm the status of the student boarding the school bus at each stop.
                  </li>
                  <li>
                    Parents receive push notifications when children board or alight from the bus.
                  </li>
                  <li>
                    Supports exporting accurate attendance reports and sending monthly reports to parents.
                  </li>
                </ul>
              </div>

              {/* Scenario Photo Centered - High Resolution Original */}
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <div
                  style={{
                    display: 'inline-block',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    maxWidth: '560px',
                    width: '100%',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                  }}
                >
                  <img
                    src="/images/student-attendance/School-Bus.jpg"
                    alt="School bus"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                <div style={{ marginTop: '12px', fontSize: '0.95rem', fontWeight: 600, color: '#111827' }}>
                  School bus
                </div>
              </div>

              {/* System Architecture Diagram & Hardware Specs */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: '32px',
                  alignItems: 'start',
                  maxWidth: '960px',
                  margin: '0 auto',
                }}
              >
                {/* Left: Original Official Topology Diagram */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    padding: '16px',
                    height: '280px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  }}
                >
                  <img
                    src="/images/student-attendance/Education-LandingPage_Student-Attendance-School-bus-attendance.jpg"
                    alt="School bus attendance system topology"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>

                {/* Right: Hardware Accordion Card */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid #e5e5e5',
                      paddingBottom: '8px',
                      marginBottom: '16px',
                    }}
                  >
                    <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#111827' }}>
                      Mobile NVR
                    </span>
                    <ChevronUp size={18} color="#64748b" />
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '16px',
                      backgroundColor: '#f8fafc',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    <div
                      style={{
                        width: '76px',
                        height: '76px',
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
                        src="/images/student-attendance/prod_mobile_nvr.png"
                        alt="AE-MN5043 Series"
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      />
                    </div>
                    <div>
                      <h5 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '0 0 4px 0', color: '#1e293b' }}>
                        AE-MN5043 Series
                      </h5>
                      <p style={{ fontSize: '0.84rem', color: '#64748b', margin: 0, lineHeight: 1.4 }}>
                        4-CH 1080P AI Mobile NVR (Built-in 4G &amp; GNSS)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: School gate & dormitory attendance */}
          {activeTab === 'school_gate' && (
            <div>
              <div style={{ maxWidth: '960px', margin: '0 auto 40px auto' }}>
                <p style={{ fontSize: '0.86rem', color: '#6b7280', margin: '0 0 14px 0' }}>
                  Frictionless campus gate entry and residential dormitory curfew control
                </p>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111827', margin: '0 0 10px 0' }}>
                  Features
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', color: '#4b5563', fontSize: '0.88rem', lineHeight: 1.8 }}>
                  <li>
                    High-throughput speed gates with MinMoe biometric terminals verify students in under 0.2 seconds, preventing gate bottlenecks.
                  </li>
                  <li>
                    Real-time push notifications inform parents the exact moment their child enters or leaves school premises.
                  </li>
                  <li>
                    Dormitory curfew tracking automatically flags absent students after designated hours, alerting resident advisors.
                  </li>
                </ul>
              </div>

              {/* 2 Scenario Photos: School Gate & Dormitory Gate */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '24px',
                  maxWidth: '960px',
                  margin: '0 auto 48px auto',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                    }}
                  >
                    <img
                      src="/images/student-attendance/School-Gate.jpg"
                      alt="School gate"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                  <div style={{ marginTop: '12px', fontSize: '0.95rem', fontWeight: 600, color: '#111827' }}>
                    School gate
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                    }}
                  >
                    <img
                      src="/images/student-attendance/Dormitory-Gate.jpg"
                      alt="Dormitory gate"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                  <div style={{ marginTop: '12px', fontSize: '0.95rem', fontWeight: 600, color: '#111827' }}>
                    Dormitory gate
                  </div>
                </div>
              </div>

              {/* Topology for School Gate */}
              <div
                style={{
                  maxWidth: '700px',
                  margin: '0 auto',
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  padding: '20px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  textAlign: 'center',
                }}
              >
                <img
                  src="/images/student-attendance/Education-LandingPage_Student-Attendance-School-gate-dormitory-attendance.jpg"
                  alt="School Gate & Dormitory Attendance Topology"
                  style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </div>
            </div>
          )}

          {/* Tab 3: Classroom attendance */}
          {activeTab === 'classroom' && (
            <div>
              <div style={{ maxWidth: '960px', margin: '0 auto 40px auto' }}>
                <p style={{ fontSize: '0.86rem', color: '#6b7280', margin: '0 0 14px 0' }}>
                  Automated contactless in-class roll-call and SIS synchronization
                </p>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111827', margin: '0 0 10px 0' }}>
                  Features
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', color: '#4b5563', fontSize: '0.88rem', lineHeight: 1.8 }}>
                  <li>
                    Automated roll-call saves 5 to 10 minutes per class period, allowing teachers to dedicate more time to teaching.
                  </li>
                  <li>
                    Interactive classroom flat panel integration displays real-time attendance counts and roster status directly on screen.
                  </li>
                  <li>
                    Seamless API integration synchronizes attendance records into school information systems (SIS) and student report cards.
                  </li>
                </ul>
              </div>

              {/* Classroom Scenario Photo */}
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <div
                  style={{
                    display: 'inline-block',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    maxWidth: '560px',
                    width: '100%',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                  }}
                >
                  <img
                    src="/images/student-attendance/Entry-Point-of-Classroom.jpg"
                    alt="Entry point of classroom"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                <div style={{ marginTop: '12px', fontSize: '0.95rem', fontWeight: 600, color: '#111827' }}>
                  Entry point of classroom
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 5. "RELATED RESOURCES" SECTION */}
      <section id="related-resources" style={{ padding: '70px 24px', backgroundColor: '#ffffff', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, margin: '0 0 36px 0', color: '#111827' }}>
            Related Resources
          </h2>

          <div
            style={{
              maxWidth: '380px',
              margin: '0 auto',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '6px',
                  backgroundColor: '#fee2e2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#dc2626',
                }}
              >
                <FileText size={24} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>
                  Leaflet
                </span>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 700, margin: '2px 0 0 0', color: '#1e293b' }}>
                  Student Attendance Solution
                </h4>
              </div>
            </div>

            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                alert('Downloading Student Attendance Solution Leaflet (PDF)...');
              }}
              style={{
                width: '36px',
                height: '36px',
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
                e.currentTarget.style.backgroundColor = '#d70015';
                e.currentTarget.style.borderColor = '#d70015';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.borderColor = '#cbd5e1';
                e.currentTarget.style.color = '#475569';
              }}
            >
              <Download size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 6. "YOU MAY ALSO BE INTERESTED IN" (RELATED LINKS) SECTION */}
      <section id="related-links" style={{ padding: '80px 24px', backgroundColor: '#ffffff', borderTop: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, textAlign: 'center', margin: '0 0 44px 0', color: '#111827' }}>
            You may also be interested in
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Card 1: Campus Security */}
            <Link
              to="/solutions/schools"
              style={{
                textDecoration: 'none',
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                height: '320px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'url(/images/student-attendance/SBI-Campus-Security-split-banner.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                }}
              />
              <div style={{ position: 'relative', zIndex: 2, padding: '24px', color: '#ffffff' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 4px 0', color: '#ffffff' }}>
                  Campus Security
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#d1d5db', display: 'block', marginBottom: '8px' }}>
                  &lt;Solutions by Industry&gt;
                </span>
                <p style={{ fontSize: '0.82rem', color: '#e5e7eb', margin: 0, lineHeight: 1.4, opacity: 0.9 }}>
                  Ensure student, parent, and visitor access is securely monitored with automated campus perimeter and vehicle gates.
                </p>
              </div>
            </Link>

            {/* Card 2: Digital Classroom */}
            <Link
              to="/solutions/classroom-hub"
              style={{
                textDecoration: 'none',
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                height: '320px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'url(/images/student-attendance/SBI-smart-classroom-_split-banner.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                }}
              />
              <div style={{ position: 'relative', zIndex: 2, padding: '24px', color: '#ffffff' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 4px 0', color: '#ffffff' }}>
                  Digital Classroom
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#d1d5db', display: 'block', marginBottom: '8px' }}>
                  &lt;Solutions by Industry&gt;
                </span>
                <p style={{ fontSize: '0.82rem', color: '#e5e7eb', margin: 0, lineHeight: 1.4, opacity: 0.9 }}>
                  Interactive flat panel displays and hybrid learning spaces that empower active student collaboration and digital teaching.
                </p>
              </div>
            </Link>

            {/* Card 3: Classroom Hub */}
            <Link
              to="/solutions/classroom-hub"
              style={{
                textDecoration: 'none',
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                height: '320px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'url(/images/student-attendance/SBS-Classroom-hub_split-banner.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                }}
              />
              <div style={{ position: 'relative', zIndex: 2, padding: '24px', color: '#ffffff' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 4px 0', color: '#ffffff' }}>
                  Classroom Hub
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#d1d5db', display: 'block', marginBottom: '8px' }}>
                  &lt;Solutions by Scenario&gt;
                </span>
                <p style={{ fontSize: '0.82rem', color: '#e5e7eb', margin: 0, lineHeight: 1.4, opacity: 0.9 }}>
                  Smart classroom IoT device integration managing lecture streaming, multi-screen sharing, and student roll-call.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CONTACT SALES MODAL */}
      {showSalesModal && (
        <ContactSalesModal
          onClose={() => setShowSalesModal(false)}
          defaultSolution="Student Attendance Solution"
        />
      )}
    </div>
  );
}
