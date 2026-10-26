import React, { useState } from 'react';
import { ChevronUp, ChevronDown, X, PlusCircle } from 'lucide-react';

const cameraColors = [
  { id: 'white', name: 'Polar White', hex: '#f2f2f7', border: '#d2d2d7', filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.12))' },
  { id: 'titanium', name: 'Space Titanium', hex: '#8e8e93', border: '#636366', filter: 'brightness(0.92) contrast(1.05) sepia(0.12) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.16))' },
  { id: 'stealth', name: 'Stealth Obsidian', hex: '#1c1c1e', border: '#3a3a3c', filter: 'brightness(0.76) contrast(1.2) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.24))' },
];

const designFeatures = [
  {
    id: 'optics',
    shortLabel: 'Dual Illumination Optics',
    title: 'Dual Illumination Optics',
    description: 'Shifts instantly to warm daylight LEDs upon AI detection for vivid full-color night surveillance.',
    hotspot: { top: '52%', left: '50%' },
    badge: 'F1.0 / 40m ColorSense',
    cameraTransform: 'scale(1.15) translate(-7%, 2%)',
  },
  {
    id: 'ik10',
    shortLabel: 'IK10 Vandal Armor',
    title: 'IK10 Vandal Armor',
    description: 'Aerospace-grade cast aluminum housing withstands 20-joule mechanical hammer impacts.',
    hotspot: { top: '38%', left: '46%' },
    badge: '20-Joule Impact Shield',
    cameraTransform: 'scale(1.08) translate(1%, -3%)',
  },
  {
    id: 'ai-chip',
    shortLabel: '16 TOPS AI Engine',
    title: '16 TOPS AI Engine',
    description: 'Sub-0.2s neural classification for humans and vehicles to eradicate false alarms.',
    hotspot: { top: '56%', left: '60%' },
    badge: '16 TOPS Neural NPU',
    cameraTransform: 'scale(1.12) translate(5%, 3%)',
  },
  {
    id: 'weatherproof',
    shortLabel: 'IP67 Weatherproof',
    title: 'IP67 Weatherproof',
    description: 'Storm-sealed gaskets protect against monsoons, blizzards, and -30°C to 60°C extremes.',
    hotspot: { top: '64%', left: '42%' },
    badge: 'IP67 Stormproof Sealed',
    cameraTransform: 'scale(1.06) translate(-3%, 4%)',
  },
  {
    id: 'audio-poe',
    shortLabel: 'PoE & Two-Way Audio',
    title: 'PoE & Two-Way Audio',
    description: 'Single-cable PoE connectivity with dual noise-canceling mics and deterrence siren.',
    hotspot: { top: '44%', left: '74%' },
    badge: 'PoE / 2-Way Talk',
    cameraTransform: 'scale(1.14) translate(9%, -3%)',
  },
];

export default function ProductDesignExplorer({ product }) {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(1); // Default to IK10 or Optics
  const [selectedColor, setSelectedColor] = useState(cameraColors[0]);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const totalFeatures = designFeatures.length;

  const triggerFeatureChange = (newIdx) => {
    setActiveFeatureIndex(newIdx);
    setShowColorPicker(false);
  };

  const nextFeature = () => {
    triggerFeatureChange((activeFeatureIndex + 1) % totalFeatures);
  };

  const prevFeature = () => {
    triggerFeatureChange((activeFeatureIndex - 1 + totalFeatures) % totalFeatures);
  };

  const currentFeature = designFeatures[activeFeatureIndex];

  return (
    <section
      style={{
        backgroundColor: '#f5f5f7',
        padding: '90px 0 110px',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #e5e5ea',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 28px' }}>
        {/* 1. Header Typography */}
        <div style={{ marginBottom: '52px', maxWidth: '820px' }}>
          <div
            style={{
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#1d1d1f',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            Design.
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.8rem, 5vw, 4.4rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.08,
              margin: '0 0 24px',
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(90deg, #9b51e0 0%, #6e48aa 40%, #0071e3 80%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              Even more delightful.
            </span>
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #28a745 0%, #20c997 60%, #17a2b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              Even more durable.
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.55,
              color: '#515154',
              margin: 0,
            }}
          >
            Meet the new {product?.name || 'COLORON 4MP Dual Illumination Camera'}. Designed with contoured
            edges, precision weather-sealed joints, and durable materials like IK10 vandal-proof armor on the front,
            it <strong>looks — and stays — beautiful</strong>. You can see and protect more of everything with an
            expansive F1.0 ultra-aperture lens. And enjoy{' '}
            <strong>24/7 crystal-clear full-color surveillance with Smart Dual Illumination</strong>, with intelligent
            warm LED activation up to 40 meters. Take it for a spin.
          </p>
        </div>

        {/* 2. Interactive Feature Explorer Card (Pixel-accurate Apple layout) */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#ffffff',
            borderRadius: '34px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.05)',
            border: '1px solid rgba(0, 0, 0, 0.04)',
            overflow: 'hidden',
            minHeight: '640px',
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 390px) 1fr',
            padding: '40px 36px 40px 32px',
            alignItems: 'center',
          }}
          className="design-explorer-card"
        >
          {/* Top-Right Reset / Close Button */}
          <button
            onClick={() => triggerFeatureChange(0)}
            aria-label="Reset features"
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#f5f5f7',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#1d1d1f',
              zIndex: 20,
              transition: 'background-color 0.2s ease, transform 0.2s ease',
            }}
            className="apple-close-btn"
          >
            <X size={16} />
          </button>

          {/* Left Column: Vertical Steppers + Apple Feature Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              zIndex: 10,
              position: 'relative',
            }}
          >
            {/* Stepper Buttons (Compact vertical pill capsule matching Apple) */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                flexShrink: 0,
              }}
            >
              <button
                onClick={prevFeature}
                aria-label="Previous feature"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#f5f5f7',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#1d1d1f',
                  transition: 'background-color 0.2s ease, transform 0.15s ease',
                }}
                className="apple-stepper-btn"
              >
                <ChevronUp size={16} strokeWidth={2.2} />
              </button>
              <button
                onClick={nextFeature}
                aria-label="Next feature"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#f5f5f7',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#1d1d1f',
                  transition: 'background-color 0.2s ease, transform 0.15s ease',
                }}
                className="apple-stepper-btn"
              >
                <ChevronDown size={16} strokeWidth={2.2} />
              </button>
            </div>

            {/* Feature Stack: Colors Pill + Feature Pills + Active Callout Card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', width: '100%', maxWidth: '330px' }}>
              {/* 1. Colors Pill */}
              <div style={{ position: 'relative', width: 'fit-content' }}>
                <button
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '9px',
                    backgroundColor: '#f5f5f7',
                    border: 'none',
                    borderRadius: '9999px',
                    height: '38px',
                    padding: '0 18px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#1d1d1f',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="apple-pill-item"
                >
                  <span
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: selectedColor.hex,
                      border: `1.5px solid ${selectedColor.border}`,
                      boxShadow: '0 1px 2px rgba(0,0,0,0.12)',
                    }}
                  />
                  <span>Colors</span>
                </button>

                {/* Color Picker Dropdown Popover */}
                {showColorPicker && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '46px',
                      left: 0,
                      zIndex: 30,
                      padding: '10px 14px',
                      backgroundColor: '#ffffff',
                      borderRadius: '16px',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.14)',
                      border: '1px solid #e5e5ea',
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'center',
                      animation: 'applePopIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {cameraColors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => {
                          setSelectedColor(color);
                          setShowColorPicker(false);
                        }}
                        title={color.name}
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          backgroundColor: color.hex,
                          border: `2px solid ${selectedColor.id === color.id ? '#0071e3' : color.border}`,
                          cursor: 'pointer',
                          boxShadow: selectedColor.id === color.id ? '0 0 0 2px #ffffff, 0 0 0 4px #0071e3' : 'none',
                          transition: 'all 0.2s ease',
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* 2. Feature Stack (In Order, morphing active item into rounded card) */}
              {designFeatures.map((item, idx) => {
                const isActive = idx === activeFeatureIndex;

                if (isActive) {
                  return (
                    <div
                      key={item.id}
                      style={{
                        backgroundColor: '#f5f5f7',
                        borderRadius: '22px',
                        padding: '20px 22px',
                        boxShadow: '0 4px 18px rgba(0,0,0,0.03)',
                        animation: 'appleBubbleFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        width: '100%',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '14px',
                          lineHeight: 1.45,
                          color: '#1d1d1f',
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                        }}
                      >
                        <strong style={{ fontWeight: 600 }}>{item.title}.</strong>{' '}
                        {item.description}
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => triggerFeatureChange(idx)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '9px',
                      backgroundColor: '#f5f5f7',
                      border: 'none',
                      borderRadius: '9999px',
                      height: '38px',
                      padding: '0 16px',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#1d1d1f',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      width: 'fit-content',
                    }}
                    className="apple-pill-item"
                  >
                    <PlusCircle size={16} strokeWidth={1.8} color="#1d1d1f" />
                    <span>{item.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Magnified Cinematic Product Stage */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '540px',
              height: '100%',
              overflow: 'hidden',
              borderRadius: '28px',
            }}
          >
            {/* Ambient Lighting Aura */}
            <div
              style={{
                position: 'absolute',
                width: '440px',
                height: '440px',
                borderRadius: '50%',
                background:
                  selectedColor.id === 'stealth'
                    ? 'radial-gradient(circle, rgba(0, 113, 227, 0.18) 0%, rgba(0,0,0,0) 70%)'
                    : 'radial-gradient(circle, rgba(0, 113, 227, 0.12) 0%, rgba(255,255,255,0) 70%)',
                filter: 'blur(50px)',
                pointerEvents: 'none',
                transition: 'background 0.5s ease',
              }}
            />

            {/* Camera Stage with Smooth Zoom/Pan Physics */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '680px',
                transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: currentFeature.cameraTransform,
                transformOrigin: '50% 50%',
                willChange: 'transform',
              }}
            >
              {/* Seamless Masked Camera Image without box edges */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  overflow: 'hidden',
                  maskImage: 'radial-gradient(ellipse 90% 86% at 50% 50%, black 70%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 90% 86% at 50% 50%, black 70%, transparent 100%)',
                }}
              >
                <img
                  src="/images/cctv_hero_camera.png"
                  alt="COLORON CCTV Camera Design"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'contain',
                    filter: selectedColor.filter,
                    transition: 'filter 0.5s ease',
                  }}
                />
              </div>

              {/* Dynamic Lens Flare Accent when Optics feature is active */}
              {currentFeature.id === 'optics' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '52%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,214,10,0.6) 0%, rgba(0,113,227,0.3) 50%, rgba(0,0,0,0) 80%)',
                    filter: 'blur(6px)',
                    animation: 'lensPulse 2.5s ease-in-out infinite',
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* Interactive Smoothly-Floating Hotspot with Radar Rings */}
              <div
                style={{
                  position: 'absolute',
                  top: currentFeature.hotspot.top,
                  left: currentFeature.hotspot.left,
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  zIndex: 15,
                  transition: 'top 0.8s cubic-bezier(0.16, 1, 0.3, 1), left 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Apple Multi-Ring Radar Hotspot Indicator */}
                <div
                  style={{
                    position: 'relative',
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 113, 227, 0.28)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 16px rgba(0, 113, 227, 0.45)',
                  }}
                >
                  <div
                    style={{
                      width: '11px',
                      height: '11px',
                      borderRadius: '50%',
                      backgroundColor: '#0071e3',
                      boxShadow: '0 0 10px #ffffff, 0 0 14px #0071e3',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      border: '1.5px solid #0071e3',
                      animation: 'radarPulse 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      border: '1.5px solid #0071e3',
                      animation: 'radarPulse 2.4s cubic-bezier(0.16, 1, 0.3, 1) 0.8s infinite',
                    }}
                  />
                </div>

                {/* Floating Glass Pill Badge with Soft Apple Drop Shadow */}
                <div
                  style={{
                    backgroundColor: 'rgba(29, 29, 31, 0.92)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    color: '#ffffff',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.015em',
                    animation: 'floatBadge 3.6s ease-in-out infinite',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                  }}
                >
                  {currentFeature.badge}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Physics & Animations */}
      <style>{`
        .apple-pill-item:hover {
          background-color: #ededf0 !important;
          transform: scale(1.02);
        }
        .apple-pill-item:active {
          transform: scale(0.97);
        }
        .apple-stepper-btn:hover {
          background-color: #e5e5ea !important;
          transform: scale(1.08);
        }
        .apple-stepper-btn:active {
          transform: scale(0.92);
        }
        .apple-close-btn:hover {
          background-color: #e5e5ea !important;
          transform: scale(1.06);
        }
        .apple-close-btn:active {
          transform: scale(0.94);
        }

        @keyframes appleBubbleFade {
          0% {
            opacity: 0;
            transform: translateY(6px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes applePopIn {
          0% {
            opacity: 0;
            transform: translateY(-6px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes radarPulse {
          0% {
            transform: scale(0.9);
            opacity: 0.95;
          }
          75% {
            transform: scale(2.4);
            opacity: 0;
          }
          100% {
            transform: scale(2.4);
            opacity: 0;
          }
        }

        @keyframes floatBadge {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes lensPulse {
          0%, 100% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.95;
            transform: translate(-50%, -50%) scale(1.25);
          }
        }

        @media (max-width: 960px) {
          .design-explorer-card {
            grid-template-columns: 1fr !important;
            padding: 24px 20px !important;
            min-height: auto !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
