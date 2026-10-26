import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function ProductCompareSection({ product, onOpenInquiry }) {
  // Mode: 'apple' (Exact Apple Reference) or 'cctv' (COLORON Adapted)
  const [activeMode, setActiveMode] = useState('apple');

  return (
    <section
      style={{
        padding: '72px 24px 64px',
        background: '#f5f5f7',
        borderRadius: '36px',
        maxWidth: '1020px',
        margin: '48px auto 0',
        boxSizing: 'border-box',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", Helvetica, Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: '880px', margin: '0 auto' }}>
        
        {/* Subtle Mode Toggle (Apple Exact vs COLORON CCTV) */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px' }}>
          <div
            style={{
              display: 'inline-flex',
              background: '#e8e8ed',
              borderRadius: '980px',
              padding: '3px',
              gap: '2px',
            }}
          >
            <button
              onClick={() => setActiveMode('apple')}
              style={{
                background: activeMode === 'apple' ? '#ffffff' : 'transparent',
                color: activeMode === 'apple' ? '#1d1d1f' : '#6e6e73',
                border: 'none',
                borderRadius: '980px',
                padding: '6px 18px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: activeMode === 'apple' ? '0 2px 6px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              Apple Reference (Exact)
            </button>
            <button
              onClick={() => setActiveMode('cctv')}
              style={{
                background: activeMode === 'cctv' ? '#ffffff' : 'transparent',
                color: activeMode === 'cctv' ? '#1d1d1f' : '#6e6e73',
                border: 'none',
                borderRadius: '980px',
                padding: '6px 18px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: activeMode === 'cctv' ? '0 2px 6px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              COLORON CCTV Edition
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 1. EXACT APPLE REFERENCE DESIGN (100% Pixel-For-Pixel Match)             */}
        {/* ========================================================================= */}
        {activeMode === 'apple' && (
          <div>
            {/* Top Area: Heading */}
            <div
              style={{
                marginBottom: '36px',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(34px, 4.2vw, 44px)',
                  fontWeight: 700,
                  lineHeight: 1.06,
                  letterSpacing: '-0.035em',
                  color: '#1d1d1f',
                  margin: '0 0 16px',
                }}
              >
                Worth the upgrade?
                <br />
                See for yourself.
              </h2>
              <p
                style={{
                  fontSize: '14px',
                  color: '#1d1d1f',
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                A few ways <strong style={{ fontWeight: 600 }}>COLORON AI CCTV</strong> gives you more.
              </p>
            </div>

            {/* 3 × 2 Exact Apple Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '14px',
              }}
            >
              {/* CARD 1: 48MP Dual Fusion camera system */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '255px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.25s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                }}
              >
                <img
                  src="/images/apple_card_full_1.png"
                  alt="48MP Dual Fusion camera system"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* CARD 2: 18MP Center Stage front camera */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '255px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.25s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                }}
              >
                <img
                  src="/images/apple_card_full_2.png"
                  alt="18MP Center Stage front camera"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* CARD 3: 6.3” display with ProMotion up to 120Hz */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '255px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.25s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                }}
              >
                <img
                  src="/images/apple_card_full_3.png"
                  alt="6.3 display with ProMotion up to 120Hz"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* CARD 4: Ceramic Shield 2 */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '240px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.25s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                }}
              >
                <img
                  src="/images/apple_card_full_4.png"
                  alt="Ceramic Shield 2 3x better scratch resistance"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* CARD 5: Up to 11 more hours video playback */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '240px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.25s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                }}
              >
                <img
                  src="/images/apple_card_full_5.png"
                  alt="Up to 11 more hours video playback"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* CARD 6: Up to 2.1x faster GPU performance */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '240px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.25s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                }}
              >
                <img
                  src="/images/apple_card_full_6.png"
                  alt="Up to 2.1x faster GPU performance"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Exact Apple Trade In Footer */}
            <div
              style={{
                textAlign: 'center',
                marginTop: '44px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src="/images/apple_trade_in_logo.png"
                alt="Apple Trade In"
                style={{ height: '22px', objectFit: 'contain', marginBottom: '8px' }}
              />
              <p
                style={{
                  fontSize: '13px',
                  color: '#6e6e73',
                  margin: '0 0 10px',
                  lineHeight: 1.4,
                }}
              >
                Get credit toward a new COLORON camera when you trade in an eligible device.
              </p>
              <a
                href="#trade-in"
                onClick={(e) => {
                  e.preventDefault();
                  if (onOpenInquiry) onOpenInquiry();
                }}
                style={{
                  color: '#0071e3',
                  fontSize: '13px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '2px',
                }}
              >
                <span>Find your trade-in value</span>
                <span style={{ fontSize: '15px' }}>›</span>
              </a>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. COLORON CCTV ADAPTATION (Same exact geometry, CCTV hardware content)   */}
        {/* ========================================================================= */}
        {activeMode === 'cctv' && (
          <div>
            {/* Top Area */}
            <div
              style={{
                marginBottom: '36px',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(34px, 4.2vw, 44px)',
                  fontWeight: 700,
                  lineHeight: 1.06,
                  letterSpacing: '-0.035em',
                  color: '#1d1d1f',
                  margin: '0 0 16px',
                }}
              >
                See the difference.
                <br />
                Compare before you choose.
              </h2>
              <p
                style={{
                  fontSize: '14px',
                  color: '#1d1d1f',
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                A few ways <strong style={{ fontWeight: 600 }}>COLORON 4MP</strong> gives you more.
              </p>
            </div>

            {/* 3 × 2 Feature Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '14px',
              }}
            >
              {/* CARD 1: 4MP High Resolution */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '255px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '24px 20px 0',
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#1d1d1f', lineHeight: 1.25 }}>
                    4MP High Resolution
                  </div>
                  <div style={{ fontSize: '14px', color: '#6e6e73', marginTop: '2px' }}>
                    2560 × 1440 clarity
                  </div>
                </div>
                <div style={{ height: '145px', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
                  <img
                    src="/images/cctv_hero_camera.png"
                    alt="COLORON 4MP Optical Lens"
                    style={{
                      width: '180px',
                      height: 'auto',
                      objectFit: 'contain',
                      transform: 'translateY(15px)',
                    }}
                  />
                </div>
              </div>

              {/* CARD 2: Dual Illumination */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '255px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '24px 20px 0',
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#1d1d1f', lineHeight: 1.25 }}>
                    Dual Illumination
                  </div>
                  <div style={{ fontSize: '14px', color: '#6e6e73', marginTop: '2px' }}>
                    IR + Full Color Night Vision
                  </div>
                </div>
                <div
                  style={{
                    height: '145px',
                    borderRadius: '16px 16px 0 0',
                    overflow: 'hidden',
                    display: 'flex',
                    border: '1px solid rgba(0,0,0,0.06)',
                    borderBottom: 'none',
                  }}
                >
                  <div style={{ flex: 1, background: '#1a202c', position: 'relative' }}>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '8px',
                        fontSize: '9px',
                        fontWeight: 700,
                        color: '#fff',
                        background: 'rgba(0,0,0,0.6)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      IR NIGHT
                    </div>
                  </div>
                  <div style={{ width: '1px', background: '#fff' }} />
                  <div style={{ flex: 1, background: '#0071e3', position: 'relative' }}>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                        fontSize: '9px',
                        fontWeight: 700,
                        color: '#fff',
                        background: 'rgba(0,0,0,0.6)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      FULL COLOR
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 3: Smart AI Detection */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '255px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '24px 20px 0',
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#1d1d1f', lineHeight: 1.25 }}>
                    Smart AI Detection
                  </div>
                  <div style={{ fontSize: '14px', color: '#6e6e73', marginTop: '2px' }}>
                    Person + Vehicle
                  </div>
                </div>
                <div
                  style={{
                    height: '145px',
                    borderRadius: '16px 16px 0 0',
                    overflow: 'hidden',
                    background: '#0d1117',
                    position: 'relative',
                    border: '1px solid rgba(0,0,0,0.06)',
                    borderBottom: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      border: '1.5px solid #30d158',
                      borderRadius: '4px',
                      padding: '16px 12px',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '4px',
                        background: '#30d158',
                        color: '#fff',
                        fontSize: '8px',
                        fontWeight: 700,
                        padding: '1px 4px',
                        borderRadius: '2px',
                      }}
                    >
                      HUMAN 98%
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 4: IP67 Protection */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '240px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '24px 20px 0',
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#1d1d1f', lineHeight: 1.25 }}>
                    IP67 Protection
                  </div>
                  <div style={{ fontSize: '14px', color: '#6e6e73', marginTop: '2px' }}>
                    Built for outdoor security
                  </div>
                </div>
                <div
                  style={{
                    height: '135px',
                    borderRadius: '16px 16px 0 0',
                    overflow: 'hidden',
                    background: 'linear-gradient(180deg, #3a4a5b 0%, #1f2a36 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(8px)',
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '4px 12px',
                      borderRadius: '980px',
                    }}
                  >
                    WEATHERPROOF WATER SEAL
                  </span>
                </div>
              </div>

              {/* CARD 5: 1 cable (Apple Battery Card layout) */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '240px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px',
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '13px', color: '#6e6e73', fontWeight: 500, marginBottom: '6px' }}>
                  Simpler installation
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    margin: '4px 0 6px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '36px',
                      fontWeight: 700,
                      letterSpacing: '-0.03em',
                      background: 'linear-gradient(180deg, #7d55c7 0%, #35a067 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    1 cable
                  </span>
                  <div
                    style={{
                      width: '26px',
                      height: '14px',
                      borderRadius: '4px',
                      border: '2px solid #30d158',
                      padding: '1px',
                      position: 'relative',
                    }}
                  >
                    <div style={{ width: '100%', height: '100%', background: '#30d158', borderRadius: '1px' }} />
                    <div
                      style={{
                        position: 'absolute',
                        right: '-4px',
                        top: '3px',
                        width: '2px',
                        height: '6px',
                        background: '#30d158',
                        borderRadius: '0 1px 1px 0',
                      }}
                    />
                  </div>
                </div>
                <div style={{ fontSize: '13px', color: '#1d1d1f', fontWeight: 500 }}>
                  Power + Data with PoE
                </div>
              </div>

              {/* CARD 6: H.265+ (Apple GPU Card layout) */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '240px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px',
                  boxSizing: 'border-box',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '13px', color: '#6e6e73', fontWeight: 500, marginBottom: '6px' }}>
                  Efficient recording
                </div>
                <div style={{ margin: '2px 0 6px' }}>
                  <div style={{ fontSize: '34px', fontWeight: 700, letterSpacing: '-0.03em', color: '#5e5ce6' }}>
                    H.265+
                  </div>
                  <div
                    style={{
                      fontSize: '28px',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      background: 'linear-gradient(90deg, #5e5ce6, #30b0c7, #34c759)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginTop: '-4px',
                    }}
                  >
                    efficient
                  </div>
                </div>
                <div style={{ fontSize: '13px', color: '#1d1d1f', fontWeight: 500 }}>
                  More recording. Less storage.
                </div>
              </div>
            </div>

            {/* COLORON Trade In Footer */}
            <div
              style={{
                textAlign: 'center',
                marginTop: '44px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  marginBottom: '6px',
                  letterSpacing: '-0.01em',
                }}
              >
                COLORON Upgrade
              </div>
              <p
                style={{
                  fontSize: '13px',
                  color: '#6e6e73',
                  margin: '0 0 10px',
                  lineHeight: 1.4,
                }}
              >
                Get credit toward a new camera when you trade in an eligible device.
              </p>
              <button
                onClick={onOpenInquiry}
                style={{
                  color: '#0071e3',
                  fontSize: '13px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '2px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  fontFamily: 'inherit',
                }}
              >
                <span>Find your trade-in value</span>
                <span style={{ fontSize: '15px' }}>›</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
