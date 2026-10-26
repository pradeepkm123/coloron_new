import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollProgress, useReducedMotion } from './AppleScrollAnimations';

export default function StickyFeatureSection() {
  const containerRef = useRef(null);
  const progress = useScrollProgress(containerRef);
  const prefersReduced = useReducedMotion();

  // Determine stage based on scroll progress (0.0 to 1.0)
  // Stage 0: 0% - 35%
  // Stage 1: 35% - 70%
  // Stage 2: 70% - 100%
  const stage = progress < 0.35 ? 0 : progress < 0.7 ? 1 : 2;

  // Staggered text data per stage
  const stagesData = [
    {
      eyebrow: 'PRECISION OPTICAL SENSOR',
      heading: '1/1.2" Ultra-Sensitive Sensor.',
      description: 'F1.0 super-aperture lenses engineered to harvest maximum photons with ultra-low optical distortion and true 130dB WDR.',
      accent: '#2997ff',
    },
    {
      eyebrow: 'COLORSENSE NIGHT VISION',
      heading: 'Vivid, true full-color.\nEven in pitch black.',
      description: 'Intelligent dual-illumination fuses supplemental warm spotlights with starlight sensors, keeping attire, vehicles, and faces crystal-clear at 0.0003 Lux.',
      accent: '#ff9f0a',
    },
    {
      eyebrow: '16 TOPS NEURAL ACCELERATOR',
      heading: 'Edge AI Target Classification.',
      description: 'On-device deep learning neural processor classifies humans, license plates, and perimeter breach events in 12ms — eliminating 99.8% of false alarms.',
      accent: '#30d158',
    },
  ];

  const currentData = stagesData[stage];

  // Image scale & translation derived from scroll progress
  // progress 0 -> 1: scale 0.88 -> 1.12, subtle rotation
  const scale = prefersReduced ? 1 : 0.88 + progress * 0.28;
  const imageTranslateY = prefersReduced ? 0 : (0.5 - progress) * 40;

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        height: '260vh', // Provides ample scroll distance to drive the pinned animation
        backgroundColor: '#000000',
        color: '#ffffff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
      }}
    >
      {/* Pinned Sticky Viewport */}
      <div
        style={{
          position: 'sticky',
          top: '64px',
          height: 'calc(100vh - 64px)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'clamp(24px, 4vw, 56px) 24px clamp(32px, 5vw, 64px)',
          boxSizing: 'border-box',
        }}
      >
        {/* Top Text Content (Staggered Animation Driven by Stage) */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto',
            zIndex: 10,
          }}
        >
          {/* Eyebrow badge */}
          <div
            key={`eyebrow-${stage}`}
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: currentData.accent,
              marginBottom: '10px',
              animation: prefersReduced ? 'none' : 'appleFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          >
            {currentData.eyebrow}
          </div>

          {/* Heading (Stagger 0ms) */}
          <h2
            key={`heading-${stage}`}
            style={{
              fontSize: 'clamp(2.2rem, 5.2vw, 4.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.06,
              margin: '0 0 16px',
              whiteSpace: 'pre-line',
              animation: prefersReduced ? 'none' : 'appleFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          >
            {currentData.heading}
          </h2>

          {/* Description (Stagger 140ms) */}
          <p
            key={`desc-${stage}`}
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.35rem)',
              color: '#a1a1a6',
              fontWeight: 400,
              lineHeight: 1.45,
              maxWidth: '640px',
              margin: '0 auto',
              animation: prefersReduced ? 'none' : 'appleFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.12s forwards',
            }}
          >
            {currentData.description}
          </p>
        </div>

        {/* Center: Dynamic Transforming Camera Hardware Visual */}
        <div
          style={{
            position: 'relative',
            width: 'min(760px, 92vw)',
            height: 'clamp(280px, 36vw, 440px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto 0',
          }}
        >
          {/* Ambient Glow behind camera */}
          <div
            style={{
              position: 'absolute',
              width: '60%',
              height: '60%',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${currentData.accent}33 0%, transparent 70%)`,
              filter: 'blur(50px)',
              transition: 'background 0.8s ease',
              pointerEvents: 'none',
            }}
          />

          {/* Hardware Artwork transforming based on scroll */}
          <div
            style={{
              transform: `translate3d(0, ${imageTranslateY}px, 0) scale(${scale})`,
              transition: prefersReduced ? 'none' : 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)',
              willChange: 'transform',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <img
              src="/images/apple_ptz_pro.jpg"
              alt="COLORON CCTV Optical Core & Precision Hardware"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '24px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
              }}
            />
          </div>
        </div>

        {/* Bottom Progress Indicator Bar & Links */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            zIndex: 10,
          }}
        >
          {/* 3 Step Pill Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              padding: '6px 14px',
              borderRadius: '9999px',
              backdropFilter: 'blur(16px)',
            }}
          >
            {stagesData.map((s, idx) => (
              <div
                key={s.eyebrow}
                style={{
                  width: stage === idx ? '32px' : '8px',
                  height: '6px',
                  borderRadius: '9999px',
                  backgroundColor: stage === idx ? '#ffffff' : 'rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
            ))}
          </div>

          {/* Action Link */}
          <Link
            to="/compare"
            style={{
              fontSize: '0.94rem',
              color: '#2997ff',
              textDecoration: 'none',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Compare CCTV camera specs &gt;
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes appleFadeUp {
          from {
            opacity: 0;
            transform: translate3d(0, 22px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
