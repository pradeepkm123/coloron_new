import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollProgress, useReducedMotion } from './AppleScrollAnimations';

const horizontalCards = [
  {
    id: 'cctv-durability',
    tag: 'INDUSTRIAL GRADE',
    title: 'Engineered to Endure.\nIK10 & IP67 Armor.',
    subtitle: 'Aerospace aluminum alloy with corrosion-resistant nano finish.',
    description: 'Built to perform in extreme environments from -40°C to +65°C. Defends against physical impacts, high-pressure water jets, and corrosive industrial atmospheres.',
    bg: '#141416',
    textColor: '#ffffff',
    subColor: '#a1a1a6',
    accent: '#d48b38',
    image: '/images/cctv_feature_card.jpg',
    imageAlt: 'COLORON Industrial Grade Optical Camera',
  },
  {
    id: 'edge-ai',
    tag: 'AI EDGE INTELLIGENCE',
    title: 'Neural Target Recognition.\nInstant Precision.',
    subtitle: 'Deep learning algorithms that pinpoint what truly matters.',
    description: 'On-chip neural accelerators identify humans, vehicles, and license plates in milliseconds. Ignores wind, rain, and animals, dropping false alerts by 99.8%.',
    bg: '#000000',
    textColor: '#ffffff',
    subColor: '#86868b',
    accent: '#2997ff',
    image: '/images/guanlan_ai_card.jpg',
    imageAlt: 'COLORON AI Edge Neural Surveillance',
  },
  {
    id: 'cctv-trade-in',
    tag: 'SEAMLESS UPGRADE',
    title: 'Migrate to Coloron.\nEffortless Transition.',
    subtitle: 'Upgrade your legacy coaxial or outdated IP cameras.',
    description: 'Fully ONVIF Profile S/G/T compliant. Seamlessly plug into your existing video network and receive instant trade-in credits on commercial camera modernizations.',
    bg: '#f5f5f7',
    textColor: '#1d1d1f',
    subColor: '#6e6e73',
    accent: '#0071e3',
    image: '/images/cctv_trade_in.jpg',
    imageAlt: 'COLORON CCTV Trade-In and Seamless Infrastructure Migration',
  },
  {
    id: 'cctv-continuous-recording',
    tag: '24/7 ULTRA EFFICIENCY',
    title: 'Continuous Protection.\nSmart Power & PoE+.',
    subtitle: 'Optimized thermal management and Smart H.265+ encoding.',
    description: 'Advanced video compression cuts storage bandwidth by 75% while keeping high-resolution video streams running uninterrupted 365 days a year with RAID fault tolerance.',
    bg: '#0c1a14',
    textColor: '#ffffff',
    subColor: '#7ba990',
    accent: '#30d158',
    image: '/images/cctv_recording_composition.jpg',
    imageAlt: 'COLORON 24/7 CCTV Recording and Storage Infrastructure',
  },
];

export default function HorizontalScrollSection() {
  const containerRef = useRef(null);
  const progress = useScrollProgress(containerRef);
  const prefersReduced = useReducedMotion();

  // 4 cards: total horizontal scroll distance
  // Card width is 800px on desktop + 32px gap = 832px per card
  // Track has 4 cards = ~3328px total
  const cardWidth = 780;
  const cardGap = 32;
  const totalCards = horizontalCards.length;
  // Maximum translate distance so the last card aligns with the viewport right/center
  const maxTranslate = (totalCards - 1) * (cardWidth + cardGap);
  const currentTranslate = prefersReduced ? 0 : progress * maxTranslate;

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        height: '350vh', // Drives the horizontal scroll smoothly
        backgroundColor: '#ffffff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
      }}
    >
      {/* Pinned Viewport Container */}
      <div
        style={{
          position: 'sticky',
          top: '64px',
          height: 'calc(100vh - 64px)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
        }}
      >
        {/* Section Header */}
        <div
          style={{
            maxWidth: '1360px',
            width: '100%',
            margin: '0 auto',
            padding: '0 32px 24px',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#0071e3',
              marginBottom: '6px',
            }}
          >
            Why Coloron
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            Surveillance re-engineered from the optics up.
          </h2>
        </div>

        {/* Horizontal Track (Transformed by Vertical Page Scroll) */}
        <div
          style={{
            width: '100%',
            overflow: 'hidden',
            padding: '10px 0 20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: `${cardGap}px`,
              paddingLeft: 'max(32px, calc((100vw - 1360px) / 2 + 32px))',
              transform: `translate3d(-${currentTranslate}px, 0, 0)`,
              transition: prefersReduced ? 'none' : 'transform 0.1s linear',
              willChange: 'transform',
            }}
          >
            {horizontalCards.map((card, idx) => (
              <div
                key={card.id}
                style={{
                  flex: `0 0 ${cardWidth}px`,
                  width: `${cardWidth}px`,
                  height: 'clamp(460px, 44vw, 560px)',
                  borderRadius: '28px',
                  backgroundColor: card.bg,
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.08)',
                  boxSizing: 'border-box',
                  padding: 'clamp(28px, 3.5vw, 48px)',
                }}
              >
                {/* Top Text Content */}
                <div style={{ zIndex: 2, maxWidth: '580px' }}>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: card.accent,
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    {card.tag}
                  </span>
                  <h3
                    style={{
                      fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                      fontWeight: 700,
                      color: card.textColor,
                      letterSpacing: '-0.03em',
                      lineHeight: 1.1,
                      margin: '0 0 10px',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
                      color: card.subColor,
                      lineHeight: 1.45,
                      margin: 0,
                    }}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Bottom Artwork with Internal Parallax Effect */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: 'clamp(220px, 24vw, 300px)',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    marginTop: '20px',
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transform: prefersReduced ? 'none' : `scale(${1 + (progress - idx * 0.25) * 0.1})`,
                      transition: 'transform 0.2s linear',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal Scroll Progress Indicator under Horizontal Cards */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '16px',
          }}
        >
          {horizontalCards.map((_, idx) => {
            const cardProgressThreshold = idx / (totalCards - 1);
            const isNear = Math.abs(progress - cardProgressThreshold) < 0.2;

            return (
              <div
                key={idx}
                style={{
                  width: isNear ? '28px' : '7px',
                  height: '6px',
                  borderRadius: '9999px',
                  backgroundColor: isNear ? '#0071e3' : 'rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
