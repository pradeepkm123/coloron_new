import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Package,
  Search,
  Layers,
  BarChart3,
  CheckCircle2,
  Clock,
  Shield,
  Smartphone,
  Server,
  ArrowRight,
  ChevronRight,
  Download,
  FileText,
  Play,
  Monitor,
  Video,
  ScanLine,
  Truck,
  Box,
  Eye,
  Sliders
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

export default function VisualParcelTrackingSolution() {
  const [showSalesModal, setShowSalesModal] = useState(false);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1d1d1f', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      
      {/* 1. HERO BANNER - FULL WIDTH (HEIGHT 750px) WITH PARCEL CONVEYOR & WARM AMBER ORGANIC ARC */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '750px',
          minHeight: '750px',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url('/images/visual-parcel-tracking/hero_banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
        }}
      >
        {/* Warm amber/golden organic curve overlay matching Hikvision visual identity for logistics */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '100%',
            maxWidth: '820px',
            background: 'linear-gradient(105deg, rgba(217, 119, 6, 0.95) 0%, rgba(202, 95, 4, 0.91) 42%, rgba(180, 83, 9, 0.78) 65%, rgba(245, 158, 11, 0.35) 86%, transparent 100%)',
            zIndex: 1,
          }}
        />

        {/* Content Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            maxWidth: '1380px',
            width: '100%',
            margin: '0 auto',
            padding: '70px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Breadcrumb / Scenario Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: '0.92rem',
              fontWeight: 600,
              marginBottom: '16px',
            }}
          >
            <Package size={18} color="#fef08a" />
            <span>Solutions by Function</span>
          </div>

          {/* Hero Title */}
          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5vw, 4rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              margin: '0 0 18px 0',
              lineHeight: 1.15,
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            Visual Parcel Tracking
          </h1>

          {/* Subtitle / Value Proposition */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.3vw, 1.2rem)',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.95)',
              maxWidth: '560px',
              margin: '0 0 32px 0',
              fontWeight: 400,
            }}
          >
            Track, trace and enhance your parcel flow with high-definition video synchronization, automated barcode recognition, and real-time conveyor tracking.
          </p>

          {/* Hero CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowSalesModal(true)}
              style={{
                backgroundColor: '#d70015',
                color: '#ffffff',
                border: 'none',
                padding: '13px 28px',
                borderRadius: '4px',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background-color 0.2s, transform 0.15s',
                boxShadow: '0 4px 14px rgba(215, 0, 21, 0.35)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b50012';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d70015';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Contact an Expert</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. BREADCRUMB BAR UNDER BANNER */}
      <div
        style={{
          borderBottom: '1px solid #f0f0f0',
          backgroundColor: '#fafafa',
          padding: '10px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1380px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.82rem',
            color: '#707070',
            gap: '8px',
          }}
        >
          <Link to="/" style={{ color: '#707070', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link to="/solutions" style={{ color: '#707070', textDecoration: 'none' }}>Solutions</Link>
          <span>›</span>
          <span style={{ color: '#707070' }}>Solutions by Function</span>
          <span>›</span>
          <span style={{ color: '#1d1d1f', fontWeight: 600 }}>Visual Parcel Tracking</span>
        </div>
      </div>

      {/* 3. SECTION: HOW TO REDUCE WAREHOUSE PARCEL LOSS? */}
      <section style={{ padding: '80px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, margin: '0 0 16px 0', color: '#111827' }}>
            How to reduce warehouse parcel loss?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#6b7280',
              lineHeight: 1.7,
              maxWidth: '880px',
              margin: '0 auto 56px auto',
            }}
          >
            In modern logistics hubs and e-commerce distribution warehouses, missing parcels, mis-sorting, and false damage claims create significant financial losses. Hikvision's Visual Parcel Tracking solution synchronizes barcode scan events with 4K video clips to achieve end-to-end auditability in seconds.
          </p>

          {/* 3 Column Feature Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              textAlign: 'center',
            }}
          >
            {/* Card 1: Instant Traceability */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #fef3c7',
                borderRadius: '8px',
                padding: '40px 28px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 4px 16px rgba(245, 158, 11, 0.05)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(245, 158, 11, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(245, 158, 11, 0.05)';
              }}
            >
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <img
                  src="/images/visual-parcel-tracking/icon_traceability.png"
                  alt="Instant Traceability"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
                Instant Traceability
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Locate corresponding HD video clips by simply entering parcel tracking numbers or barcode IDs in less than 3 seconds, eliminating hours of manual footage review.
              </p>
            </div>

            {/* Card 2: Centralized Management */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #fef3c7',
                borderRadius: '8px',
                padding: '40px 28px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 4px 16px rgba(245, 158, 11, 0.05)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(245, 158, 11, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(245, 158, 11, 0.05)';
              }}
            >
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <img
                  src="/images/visual-parcel-tracking/icon_centralized.png"
                  alt="Centralized Management"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
                Centralized Management
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Integrate multiple sorting lines, inbound unloading bays, manual packing stations, and outbound docks into a unified HikCentral logistics dashboard.
              </p>
            </div>

            {/* Card 3: Actionable Analytics */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #fef3c7',
                borderRadius: '8px',
                padding: '40px 28px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 4px 16px rgba(245, 158, 11, 0.05)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(245, 158, 11, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(245, 158, 11, 0.05)';
              }}
            >
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <img
                  src="/images/visual-parcel-tracking/icon_analytics.png"
                  alt="Actionable Analytics"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
                Actionable Analytics
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Analyze throughput volume, identify sorting line conveyor bottlenecks, and audit employee package handling efficiency with statistical performance charts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: SOLUTION BENEFITS (4 INTERACTIVE BENEFIT ROWS) */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, margin: '0 0 56px 0', textAlign: 'center', color: '#111827' }}>
            Solution benefits
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '70px' }}>
            
            {/* Benefit Row 1: 6-in-1 video synchronization */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                gap: '48px',
                alignItems: 'center',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <img
                  src="/images/visual-parcel-tracking/benefit_data_video_sync.png"
                  alt="Data-Video Synchronization Architecture"
                  style={{ width: '100%', maxWidth: '480px', height: 'auto', display: 'inline-block' }}
                />
              </div>
              <div>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  END-TO-END DATA-VIDEO FUSION
                </span>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 700, color: '#111827', margin: '8px 0 16px 0' }}>
                  6-in-1 video synchronization
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.65, margin: 0 }}>
                  Links barcode scanning data with high-definition video recording from overhead fixed cameras, mobile handheld terminals, and conveyor sensors. When an issue occurs, operators can instantly retrieve multi-angle footage of the precise moment the parcel was handled across all sorting checkpoints.
                </p>
              </div>
            </div>

            {/* Benefit Row 2: Accurate 6-sided information & dispute resolution */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                gap: '48px',
                alignItems: 'center',
              }}
            >
              <div style={{ order: 1 }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  RAPID DISPUTE ARBITRATION
                </span>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 700, color: '#111827', margin: '8px 0 16px 0' }}>
                  Accurate 6-sided information
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.65, margin: 0 }}>
                  Provides indisputable visual proof of parcel condition, intact packaging seals, and correct label placement before handoff to couriers, eliminating false damage disputes and reducing customer claim resolution time by over 80%.
                </p>
              </div>
              <div style={{ order: 2, textAlign: 'center' }}>
                <img
                  src="/images/visual-parcel-tracking/benefit_dispute_resolution.png"
                  alt="Accelerated Dispute Resolution"
                  style={{ width: '100%', maxWidth: '480px', height: 'auto', display: 'inline-block' }}
                />
              </div>
            </div>

            {/* Benefit Row 3: Intuitive preview */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                gap: '48px',
                alignItems: 'center',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <img
                  src="/images/visual-parcel-tracking/benefit_dual_view.png"
                  alt="Dual-View Precision"
                  style={{ width: '100%', maxWidth: '480px', height: 'auto', display: 'inline-block' }}
                />
              </div>
              <div>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  DUAL-CAMERA SYNCHRONIZATION
                </span>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 700, color: '#111827', margin: '8px 0 16px 0' }}>
                  Intuitive dual-view preview
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.65, margin: 0 }}>
                  Combines close-up high-resolution barcode reading with broad-angle context video of the worker and workstation. Barcode text, timestamps, and operator IDs are overlaid directly onto the video stream for seamless visual audits.
                </p>
              </div>
            </div>

            {/* Benefit Row 4: Full-journey conveyor tracking */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                gap: '48px',
                alignItems: 'center',
              }}
            >
              <div style={{ order: 1 }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  CROSS-BELT CONVEYOR AUDIT
                </span>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 700, color: '#111827', margin: '8px 0 16px 0' }}>
                  Full-journey conveyor tracking
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.65, margin: 0 }}>
                  Tracks parcels across automated sorters, cross-belt conveyors, and diverter chutes. Visual tracking maps trace the complete chronological journey of a package from inbound truck unloading to final distribution bay loading.
                </p>
              </div>
              <div style={{ order: 2, textAlign: 'center' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <img
                    src="/images/visual-parcel-tracking/benefit_full_journey.png"
                    alt="Full Journey Conveyor Tracking"
                    style={{ width: '100%', maxWidth: '480px', height: 'auto', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(217, 119, 6, 0.85)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                      cursor: 'pointer',
                    }}
                    onClick={() => setShowSalesModal(true)}
                  >
                    <Play size={20} fill="#ffffff" style={{ marginLeft: '2px' }} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PRODUCT SHOWCASE */}
      <section style={{ padding: '80px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, margin: '0 0 48px 0', textAlign: 'center', color: '#111827' }}>
            Product showcase
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {/* Product 1: Dual-Lens Camera */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              }}
            >
              <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <img
                  src="/images/visual-parcel-tracking/product_camera.png"
                  alt="Operations Recording Dual-Lens Camera"
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                Operations Recording Dual-Lens Camera
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.55 }}>
                Dual optical sensors with flexible articulating arm for simultaneous high-speed 1D/2D barcode reading and wide-area packing workstation surveillance.
              </p>
            </div>

            {/* Product 2: Handheld Terminal */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              }}
            >
              <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <img
                  src="/images/visual-parcel-tracking/product_terminal.png"
                  alt="Handheld Terminal"
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                Handheld Smart Mobile Terminal
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.55 }}>
                Rugged Android industrial mobile computer with integrated zebra barcode scanner engine, 5G/Wi-Fi 6 connectivity, and 1.8m drop-proof casing.
              </p>
            </div>

            {/* Product 3: NVR */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              }}
            >
              <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <img
                  src="/images/visual-parcel-tracking/product_nvr.png"
                  alt="DeepinMind Logistics NVR"
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                DeepinMind Logistics NVR
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.55 }}>
                High-throughput storage server with instant barcode metadata search, WMS / ERP protocol integration, and hot-swappable enterprise RAID arrays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DOWNLOAD SECTION */}
      <section style={{ padding: '70px 24px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
            Download
          </h2>
          <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '40px' }}>
            Get comprehensive technical brochures and system integration guidelines.
          </p>

          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#d97706';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.07)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.03)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    backgroundColor: '#fef3c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <FileText size={24} color="#d97706" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', margin: '0 0 4px 0' }}>
                    Visual Parcel Tracking Solution Brochure
                  </h4>
                  <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>
                    PDF | 12.6 MB | Full System Specs & Conveyor Architecture
                  </span>
                </div>
              </div>

              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  setShowSalesModal(true);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#f3f4f6',
                  color: '#111827',
                  padding: '9px 16px',
                  borderRadius: '4px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e5e7eb')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f3f4f6')}
              >
                <Download size={15} />
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. YOU MAY ALSO BE INTERESTED IN */}
      <section style={{ padding: '80px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, margin: '0 0 36px 0', textAlign: 'center', color: '#111827' }}>
            You may also be interested in
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {[
              {
                title: 'Handheld Parcel Scanning',
                desc: 'Mobile barcode scanning and parcel inspection for couriers and sorting depots.',
                image: '/images/visual-parcel-tracking/rel_parcel_tracking.jpg',
                link: '/solutions#parcel-tracking',
              },
              {
                title: 'Logistics Park',
                desc: 'End-to-end logistics safety, dock automation, and perimeter tracking.',
                image: '/images/visual-parcel-tracking/rel_logistics.jpg',
                link: '/solutions/warehouses',
              },
              {
                title: 'Dock Management',
                desc: 'Smart bay scheduling, trailer turn-around optimization, and dock safety.',
                image: '/images/visual-parcel-tracking/rel_docks.jpg',
                link: '/solutions/dock-management',
              },
            ].map((card, i) => (
              <Link
                key={i}
                to={card.link}
                style={{
                  position: 'relative',
                  height: '320px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '28px 24px',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.1)';
                }}
              >
                {/* Background Image */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                  }}
                />

                {/* Dark Vignette Gradient */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)',
                    zIndex: 1,
                  }}
                />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', margin: '0 0 8px 0' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', margin: '0 0 16px 0', lineHeight: 1.5 }}>
                    {card.desc}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#fef08a',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                    }}
                  >
                    <span>Learn more</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM BANNER - READY TO DISCUSS YOUR NEEDS */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#f9fafb',
          borderTop: '1px solid #eef0f3',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Text and CTA Buttons */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
                fontWeight: 800,
                color: '#111827',
                margin: '0 0 16px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Ready to discuss your needs?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#4b5563',
                lineHeight: 1.6,
                margin: '0 0 36px 0',
                maxWidth: '480px',
              }}
            >
              Our logistics and visual tracking experts are ready to design a custom conveyor barcode tracking system tailored to your fulfillment center.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: '#d70015',
                  color: '#ffffff',
                  border: 'none',
                  padding: '13px 32px',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.2s',
                  boxShadow: '0 4px 12px rgba(215, 0, 21, 0.3)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b50012')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
              >
                <span>CONTACT SALES</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: '#d70015',
                  color: '#ffffff',
                  border: 'none',
                  padding: '13px 32px',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.2s',
                  boxShadow: '0 4px 12px rgba(215, 0, 21, 0.3)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b50012')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
              >
                <span>HOW TO BUY</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Right: Modern Illustration Matching Screenshot */}
          <div style={{ textAlign: 'center' }}>
            <img
              src="/images/visual-parcel-tracking/contact-banner-illustration.jpg"
              alt="Ready to discuss your needs illustration"
              style={{
                width: '100%',
                maxWidth: '520px',
                height: 'auto',
                display: 'inline-block',
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Sales Modal */}
      {showSalesModal && (
        <ContactSalesModal
          isOpen={showSalesModal}
          onClose={() => setShowSalesModal(false)}
        />
      )}
    </div>
  );
}
