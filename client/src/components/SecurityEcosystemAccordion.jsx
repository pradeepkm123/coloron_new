import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Play,
  Pause,
  HardDrive,
  Smartphone,
  Laptop,
  Watch,
  Shield,
  Volume2,
  Sliders,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';

export default function SecurityEcosystemAccordion({ product }) {
  const [activeItem, setActiveItem] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const productName = product?.name || 'COLORON 4MP Dual Illumination Camera';

  const items = [
    {
      id: 'nvr',
      title: 'Camera and NVR',
      description:
        'With COLORON NVR pairing, you can view up to 64 synchronized camera feeds on your command display and record 24/7 without missing a single frame. Continuity features let you search motion events instantly, manage RAID arrays, and archive critical evidence with zero monthly subscription fees.',
      tag: 'Local Storage • RAID Ready',
      icon: HardDrive,
    },
    {
      id: 'iphone',
      title: 'Camera and iPhone',
      description:
        'With the COLORON mobile app on your iPhone, you can stream ultra-low latency 4K live video directly to your pocket. Receive instantaneous verified intrusion alerts, speak through crystal-clear two-way audio, and control 360° pan-tilt-zoom wherever you are in the world.',
      tag: '0.18s Latency • iOS & Android',
      icon: Smartphone,
    },
    {
      id: 'mac',
      title: 'Camera and Mac',
      description:
        'Keep an eye on your facility right from your desktop workstation. Pop up a picture-in-picture window while working, export high-definition video clips with one click, and manage multi-site cameras with unified enterprise software designed for macOS and Windows.',
      tag: 'VMS Desktop • Picture-in-Picture',
      icon: Laptop,
    },
    {
      id: 'watch',
      title: 'Camera and Apple Watch',
      description:
        'Get instant, actionable security alerts right on your wrist. View rich notification snapshots when a person or vehicle is detected, disarm active deterrence strobes, or trigger sirens with a single tap on your Apple Watch.',
      tag: 'Rich Notifications • Quick Actions',
      icon: Watch,
    },
  ];

  // Auto-advance animatic cycle: smoothly plays one by one continuously
  const DURATION = 4000; // 4 seconds per slide

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setActiveItem((curr) => (curr + 1) % items.length);
    }, DURATION);

    return () => clearTimeout(timer);
  }, [isPlaying, activeItem, items.length]);

  const handleSelect = (idx) => {
    setActiveItem(idx);
  };

  return (
    <section
      style={{
        padding: '80px 0 100px',
        backgroundColor: '#ffffff',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px' }}>
        {/* Apple-Style Section Title (Matching Reference Screenshot 2) */}
        <div style={{ marginBottom: '36px' }}>
          <h2
            style={{
              fontSize: 'clamp(2.4rem, 4.4vw, 3.4rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              letterSpacing: '-0.035em',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Significant others.
          </h2>
        </div>

        {/* Main Showcase Card Container */}
        <div
          style={{
            backgroundColor: '#f5f5f7',
            borderRadius: '30px',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 38%) 1fr',
            minHeight: '620px',
            position: 'relative',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
          }}
          className="apple-ecosystem-card-grid"
        >
          {/* Left Column: Minimalist Apple Accordion */}
          <div
            style={{
              padding: 'clamp(36px, 4.5vw, 60px) clamp(28px, 3.5vw, 48px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {items.map((item, idx) => {
                const isActive = activeItem === idx;

                return (
                  <div
                    key={item.id}
                    style={{
                      borderBottom: idx < items.length - 1 ? '1px solid rgba(0, 0, 0, 0.08)' : 'none',
                      padding: isActive ? '22px 0 24px' : '20px 0',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {/* Item Trigger Button */}
                    <button
                      type="button"
                      onClick={() => handleSelect(idx)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        textAlign: 'left',
                        gap: '16px',
                      }}
                    >
                      <h3
                        style={{
                          fontSize: 'clamp(1.32rem, 1.8vw, 1.55rem)',
                          fontWeight: 700,
                          color: '#1d1d1f',
                          margin: 0,
                          letterSpacing: '-0.025em',
                          lineHeight: 1.2,
                          transition: 'opacity 0.2s ease',
                          opacity: isActive ? 1 : 0.85,
                        }}
                      >
                        {item.title}
                      </h3>

                      {/* Smooth Rotating Apple Chevron */}
                      <div
                        style={{
                          color: '#1d1d1f',
                          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                          transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <ChevronDown size={22} strokeWidth={2.2} />
                      </div>
                    </button>

                    {/* Animatic Progress Line for Active Item */}
                    {isActive && (
                      <div
                        style={{
                          width: '100%',
                          height: '2px',
                          backgroundColor: 'rgba(0, 0, 0, 0.08)',
                          borderRadius: '2px',
                          marginTop: '10px',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          key={`progress-${activeItem}-${isPlaying}`}
                          style={{
                            height: '100%',
                            backgroundColor: '#0071e3',
                            borderRadius: '2px',
                            animation: isPlaying
                              ? `appleProgressFill ${DURATION}ms linear forwards`
                              : 'none',
                            width: isPlaying ? '0%' : '100%',
                          }}
                        />
                      </div>
                    )}

                    {/* Smooth Collapsible Description */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateRows: isActive ? '1fr' : '0fr',
                        transition: 'grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      <div style={{ minHeight: 0, overflow: 'hidden' }}>
                        <p
                          style={{
                            fontSize: 'clamp(0.92rem, 1.1vw, 1.02rem)',
                            color: '#55585d',
                            lineHeight: 1.55,
                            margin: '14px 0 0',
                            fontWeight: 400,
                            maxWidth: '460px',
                            opacity: isActive ? 1 : 0,
                            transform: isActive ? 'translateY(0)' : 'translateY(-6px)',
                            transition: 'opacity 0.35s ease 0.08s, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) 0.08s',
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Play/Pause Animatic Toggle */}
            <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause auto-play' : 'Resume auto-play'}
                title={isPlaying ? 'Pause animatic' : 'Play animatic'}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.06)',
                  border: 'none',
                  color: '#1d1d1f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease, transform 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.12)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.06)')}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} style={{ marginLeft: '2px' }} />}
              </button>
              <span style={{ fontSize: '0.74rem', color: '#86868b', fontWeight: 500 }}>
                {isPlaying ? 'Auto-playing' : 'Paused'}
              </span>
            </div>
          </div>

          {/* Right Column: Photorealistic Device Pairing Composition (Matching Reference Screenshot 2) */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(30px, 4vw, 50px)',
              overflow: 'hidden',
            }}
          >
            {/* Visual 1: Camera and NVR (Display Hub + Camera standing in front) */}
            {activeItem === 0 && (
              <div
                key="visual-nvr"
                className="apple-device-showcase-enter"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '680px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Background Large Studio Monitor */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '540px',
                    aspectRatio: '16/10',
                    backgroundColor: '#16191f',
                    borderRadius: '22px',
                    border: '5px solid #2d3139',
                    boxShadow: '0 30px 70px rgba(0, 0, 0, 0.18)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transform: 'translateY(-14px)',
                  }}
                >
                  {/* Display Top Bar */}
                  <div
                    style={{
                      height: '28px',
                      backgroundColor: '#1b1f26',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0 14px',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      fontSize: '0.68rem',
                      color: '#a1a1a6',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#0071e3' }} />
                      <span style={{ fontWeight: 600, color: '#ffffff' }}>COLORON QUANTUM NVR</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0071e3', fontWeight: 600 }}>
                      ● REC 4K UHD
                    </div>
                  </div>

                  {/* 4-Channel Grid */}
                  <div
                    style={{
                      flex: 1,
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '3px',
                      backgroundColor: '#0a0c10',
                      padding: '3px',
                    }}
                  >
                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
                      <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                        alt="Channel 1"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <span style={{ position: 'absolute', top: '6px', left: '6px', backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: '0.6rem', padding: '1px 5px', borderRadius: '3px' }}>
                        CH 01 : Lobby
                      </span>
                    </div>
                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
                      <img
                        src="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=800&q=80"
                        alt="Channel 2"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <span style={{ position: 'absolute', top: '6px', left: '6px', backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: '0.6rem', padding: '1px 5px', borderRadius: '3px' }}>
                        CH 02 : Vault
                      </span>
                    </div>
                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
                      <img
                        src="https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80"
                        alt="Channel 3"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <span style={{ position: 'absolute', top: '6px', left: '6px', backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: '0.6rem', padding: '1px 5px', borderRadius: '3px' }}>
                        CH 03 : Gate
                      </span>
                    </div>
                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
                      <img
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                        alt="Channel 4"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <span style={{ position: 'absolute', top: '6px', left: '6px', backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: '0.6rem', padding: '1px 5px', borderRadius: '3px' }}>
                        CH 04 : Dock
                      </span>
                    </div>
                  </div>
                </div>

                {/* Display Metal Stand Base */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    width: '130px',
                    height: '14px',
                    background: 'linear-gradient(180deg, #d8dade 0%, #b8bac0 100%)',
                    borderRadius: '7px',
                    boxShadow: '0 6px 14px rgba(0,0,0,0.12)',
                    zIndex: 1,
                  }}
                />

                {/* Foreground Standing Physical Camera (Like iPhone in front of MacBook) */}
                <div
                  className="apple-device-float"
                  style={{
                    position: 'absolute',
                    left: '4%',
                    bottom: '10px',
                    width: '260px',
                    zIndex: 10,
                  }}
                >
                  <img
                    src="/images/tvt_bullet_9420.png"
                    alt="COLORON Bullet Camera"
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 25px 35px rgba(0, 0, 0, 0.28))',
                    }}
                  />
                  {/* Contact Shadow Under Camera */}
                  <div
                    style={{
                      width: '180px',
                      height: '20px',
                      background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, transparent 70%)',
                      margin: '-10px auto 0',
                    }}
                  />
                </div>
              </div>
            )}

            {/* Visual 2: Camera and iPhone (Exact device pairing matching Screenshot 2) */}
            {activeItem === 1 && (
              <div
                key="visual-iphone"
                className="apple-device-showcase-enter"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '680px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Background Device (MacBook / Monitor with Live Web Stream) */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '520px',
                    aspectRatio: '16/10',
                    backgroundColor: '#1b1b1e',
                    borderRadius: '20px',
                    border: '5px solid #2e2e33',
                    boxShadow: '0 30px 70px rgba(0, 0, 0, 0.16)',
                    overflow: 'hidden',
                    transform: 'translateY(-14px)',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                    alt="MacBook Stream"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '14px',
                      backgroundColor: 'rgba(0,0,0,0.65)',
                      backdropFilter: 'blur(10px)',
                      color: '#ffffff',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: '6px',
                    }}
                  >
                    COLORON Web Console • 4K Live
                  </div>
                </div>

                {/* Foreground Standing iPhone (Direct match to reference screenshot 2) */}
                <div
                  className="apple-device-float"
                  style={{
                    position: 'absolute',
                    left: '12%',
                    bottom: '10px',
                    width: '210px',
                    height: '420px',
                    backgroundColor: '#0a0a0c',
                    borderRadius: '40px',
                    border: '4px solid #3a3b40',
                    boxShadow: '0 30px 65px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255,255,255,0.15)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 10,
                  }}
                >
                  {/* Dynamic Island */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '74px',
                      height: '20px',
                      backgroundColor: '#000000',
                      borderRadius: '12px',
                      zIndex: 30,
                    }}
                  />

                  {/* iPhone Screen Content: COLORON Mobile App */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: '36px' }}>
                    {/* Live Stream Viewport */}
                    <div style={{ position: 'relative', flex: 1, margin: '6px 10px', borderRadius: '16px', overflow: 'hidden' }}>
                      <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                        alt="Mobile Feed"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />

                      {/* Verified Alert Pill */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '8px',
                          left: '8px',
                          right: '8px',
                          backgroundColor: 'rgba(20, 22, 28, 0.92)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '10px',
                          padding: '6px 10px',
                          border: '1px solid rgba(0, 113, 227, 0.4)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <AlertTriangle size={13} color="#0071e3" />
                        <div style={{ fontSize: '0.62rem', color: '#ffffff', lineHeight: 1.2 }}>
                          <span style={{ fontWeight: 700 }}>Human Verified</span> • 99.8%
                        </div>
                      </div>

                      {/* Live Indicator */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '8px',
                          left: '8px',
                          backgroundColor: 'rgba(0,0,0,0.65)',
                          color: '#ffffff',
                          fontSize: '0.58rem',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          fontWeight: 600,
                        }}
                      >
                        LIVE • 0.18s
                      </div>
                    </div>

                    {/* App Bottom Quick Dock */}
                    <div
                      style={{
                        padding: '10px 14px 14px',
                        backgroundColor: '#121418',
                        display: 'flex',
                        justifyContent: 'space-around',
                        borderTop: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <div style={{ textAlign: 'center' }}>
                        <Volume2 size={16} color="#0071e3" style={{ margin: '0 auto' }} />
                        <span style={{ fontSize: '0.56rem', color: '#a1a1a6' }}>Talk</span>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <Sliders size={16} color="#ffffff" style={{ margin: '0 auto' }} />
                        <span style={{ fontSize: '0.56rem', color: '#a1a1a6' }}>PTZ</span>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <Shield size={16} color="#30d158" style={{ margin: '0 auto' }} />
                        <span style={{ fontSize: '0.56rem', color: '#a1a1a6' }}>Siren</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Standing Turret Camera Beside Phone */}
                <div
                  className="apple-device-float-delayed"
                  style={{
                    position: 'absolute',
                    right: '8%',
                    bottom: '24px',
                    width: '230px',
                    zIndex: 9,
                  }}
                >
                  <img
                    src="/images/tvt_turret_9520.png"
                    alt="COLORON Turret Camera"
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.25))',
                    }}
                  />
                  <div
                    style={{
                      width: '160px',
                      height: '18px',
                      background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, transparent 70%)',
                      margin: '-10px auto 0',
                    }}
                  />
                </div>
              </div>
            )}

            {/* Visual 3: Camera and Mac */}
            {activeItem === 2 && (
              <div
                key="visual-mac"
                className="apple-device-showcase-enter"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '680px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Sleek MacBook Pro Mockup */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '540px',
                    aspectRatio: '16/10',
                    backgroundColor: '#1b1b1e',
                    borderRadius: '20px',
                    border: '5px solid #333338',
                    boxShadow: '0 30px 70px rgba(0, 0, 0, 0.2)',
                    overflow: 'hidden',
                    transform: 'translateY(-14px)',
                  }}
                >
                  {/* Mac Window Header Bar */}
                  <div
                    style={{
                      height: '28px',
                      backgroundColor: '#26262b',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 12px',
                      gap: '7px',
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                    <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                    <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
                    <span style={{ fontSize: '0.68rem', color: '#a1a1a6', marginLeft: 'auto', fontWeight: 500 }}>
                      COLORON VMS Client Pro • macOS
                    </span>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1000&q=80"
                    alt="Mac VMS Feed"
                    style={{ width: '100%', height: 'calc(100% - 28px)', objectFit: 'cover' }}
                  />

                  {/* AI Smart Search Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '14px',
                      backgroundColor: 'rgba(0, 113, 227, 0.9)',
                      color: '#ffffff',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      padding: '4px 12px',
                      borderRadius: '6px',
                    }}
                  >
                    AI Event Scrubbing: 99.8% Filter Active
                  </div>
                </div>

                {/* Laptop Base Lip */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    width: '580px',
                    height: '14px',
                    backgroundColor: '#86868b',
                    borderRadius: '0 0 10px 10px',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.18)',
                  }}
                />

                {/* Standing Camera in Foreground */}
                <div
                  className="apple-device-float"
                  style={{
                    position: 'absolute',
                    left: '8%',
                    bottom: '18px',
                    width: '240px',
                    zIndex: 10,
                  }}
                >
                  <img
                    src="/images/tvt_bullet_9420.png"
                    alt="COLORON Bullet Camera"
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.3))',
                    }}
                  />
                </div>
              </div>
            )}

            {/* Visual 4: Camera and Apple Watch */}
            {activeItem === 3 && (
              <div
                key="visual-watch"
                className="apple-device-showcase-enter"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '680px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Background Panoramic Surveillance View */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '520px',
                    aspectRatio: '16/10',
                    backgroundColor: '#1b1b1e',
                    borderRadius: '20px',
                    border: '5px solid #2e2e33',
                    boxShadow: '0 30px 70px rgba(0, 0, 0, 0.16)',
                    overflow: 'hidden',
                    transform: 'translateY(-14px)',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=80"
                    alt="Night Security"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '14px',
                      backgroundColor: 'rgba(0,0,0,0.65)',
                      color: '#ffffff',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: '6px',
                    }}
                  >
                    ColorSense Night Vision • 0.0005 Lux
                  </div>
                </div>

                {/* Foreground Standing Apple Watch Ultra Mockup */}
                <div
                  className="apple-device-float"
                  style={{
                    position: 'absolute',
                    left: '16%',
                    bottom: '20px',
                    width: '175px',
                    height: '240px',
                    backgroundColor: '#1c1d22',
                    borderRadius: '34px',
                    border: '4px solid #4a4b52',
                    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255,255,255,0.1)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '18px 14px',
                    boxSizing: 'border-box',
                    zIndex: 10,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.62rem', color: '#ff453a', fontWeight: 700 }}>COLORON ALERT</span>
                    <span style={{ fontSize: '0.62rem', color: '#86868b' }}>NOW</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                    Front Entrance
                  </div>
                  <div style={{ fontSize: '0.65rem', color: '#a1a1a6', lineHeight: 1.3, marginBottom: '12px' }}>
                    Person detected. Strobe & siren armed.
                  </div>
                  <div
                    style={{
                      marginTop: 'auto',
                      backgroundColor: '#ff453a',
                      color: '#ffffff',
                      borderRadius: '8px',
                      padding: '6px',
                      textAlign: 'center',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                    }}
                  >
                    Sound Siren
                  </div>
                </div>

                {/* Foreground Turret Camera Standing Beside Watch */}
                <div
                  className="apple-device-float-delayed"
                  style={{
                    position: 'absolute',
                    right: '10%',
                    bottom: '20px',
                    width: '230px',
                    zIndex: 9,
                  }}
                >
                  <img
                    src="/images/tvt_turret_9520.png"
                    alt="COLORON Turret"
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.25))',
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scoped CSS for Authentic Apple Animatic Motion */}
      <style>{`
        @keyframes appleProgressFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        @keyframes appleDeviceEnter {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes appleDeviceFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes appleDeviceFloatDelayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .apple-device-showcase-enter {
          animation: appleDeviceEnter 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .apple-device-float {
          animation: appleDeviceFloat 4.5s ease-in-out infinite;
        }

        .apple-device-float-delayed {
          animation: appleDeviceFloatDelayed 4.5s ease-in-out 1.2s infinite;
        }

        @media (max-width: 960px) {
          .apple-ecosystem-card-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
