import React from 'react';
import { Link } from 'react-router-dom';

export default function ApplePromoGrid() {
  const cards = [
    {
      id: 'apex-dome-air',
      title: 'Apex Dome Air',
      subtitle: 'Now supercharged by Neural AI 3.0.',
      bg: 'linear-gradient(180deg, #f8fbfe 0%, #e6f1fa 100%)',
      isDark: false,
      textColor: '#1d1d1f',
      subColor: '#6e6e73',
      primaryBtn: 'Learn more',
      secondaryBtn: 'Buy',
      primaryLink: '/product/apex-dome-x-pro',
      secondaryLink: '/product/apex-dome-x-pro',
      image: '/images/apple_dome_air.jpg',
    },
    {
      id: 'colorsense-air',
      title: 'ColorSense',
      suffix: 'air',
      subtitle: 'Next-level 24/7 Color in zero lux.',
      bg: 'linear-gradient(180deg, #f2f9ff 0%, #d8efff 100%)',
      isDark: false,
      textColor: '#1d1d1f',
      subColor: '#6e6e73',
      primaryBtn: 'Learn more',
      secondaryBtn: 'Buy',
      primaryLink: '/product/lumina-turret-eyeball-5mp',
      secondaryLink: '/product/lumina-turret-eyeball-5mp',
      image: '/images/apple_turret_air.jpg',
    },
    {
      id: 'matrix-ptz-pro',
      title: 'Matrix PTZ Pro',
      subtitle: 'Now with 8K Optical, STARVIS 2, and Laser Matrix.',
      bg: '#000000',
      isDark: true,
      textColor: '#f5f5f7',
      subColor: '#86868b',
      primaryBtn: 'Learn more',
      secondaryBtn: 'Buy',
      primaryLink: '/product/matrix-ptz-speed-dome-360',
      secondaryLink: '/product/matrix-ptz-speed-dome-360',
      image: '/images/apple_ptz_pro.jpg',
    },
    {
      id: 'quantum-vision-pro',
      title: 'Quantum Vision Pro',
      subtitle: 'Advanced AI neural performance and game-changing analytics.',
      bg: '#000000',
      isDark: true,
      textColor: '#f5f5f7',
      subColor: '#86868b',
      primaryBtn: 'Learn more',
      secondaryBtn: 'Buy',
      primaryLink: '/quote-calculator',
      secondaryLink: '/quote-calculator',
      image: '/images/apple_nvr_pro.jpg',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '12px 14px 28px',
      }}
    >
      <div
        className="apple-promo-2x2-grid"
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="apple-promo-card"
            style={{
              background: card.bg,
              color: card.textColor,
              borderRadius: 'clamp(10px, 1.5vw, 16px)',
              overflow: 'hidden',
              minHeight: 'clamp(420px, 60vw, 560px)',
              height: 'clamp(440px, 42vw, 640px)',
              padding: 'clamp(32px, 4vw, 48px) clamp(18px, 3vw, 32px) 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              boxSizing: 'border-box',
              border: card.isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.04)',
              boxShadow: card.isDark ? '0 18px 40px rgba(0, 0, 0, 0.6)' : '0 10px 30px rgba(0, 0, 0, 0.03)',
            }}
          >
            {/* Title with optional script suffix */}
            <h3
              style={{
                fontSize: 'clamp(2.1rem, 3.8vw, 2.75rem)',
                fontWeight: 600,
                letterSpacing: '-0.025em',
                color: card.textColor,
                margin: '0 0 6px 0',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {card.title}
              {card.suffix && (
                <span
                  style={{
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontFamily: 'serif',
                    color: '#2997ff',
                    fontSize: '1.05em',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {card.suffix}
                </span>
              )}
            </h3>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
                color: card.subColor,
                fontWeight: 400,
                letterSpacing: '-0.01em',
                marginBottom: '16px',
                maxWidth: '460px',
                lineHeight: 1.35,
              }}
            >
              {card.subtitle}
            </p>

            {/* Apple Pill Action Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '14px',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px',
                zIndex: 2,
              }}
            >
              <Link
                to={card.primaryLink}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#0071e3',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  padding: '7px 18px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0077ed')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0071e3')}
              >
                {card.primaryBtn}
              </Link>

              <Link
                to={card.secondaryLink}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                  color: card.isDark ? '#2997ff' : '#0071e3',
                  border: card.isDark ? '1px solid #2997ff' : '1px solid #0071e3',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  padding: '7px 18px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = card.isDark
                    ? 'rgba(41, 151, 255, 0.15)'
                    : 'rgba(0, 113, 227, 0.08)')
                }
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                {card.secondaryBtn}
              </Link>
            </div>

            {/* Product Image Stage */}
            <div
              style={{
                marginTop: 'auto',
                width: '100%',
                flex: 1,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .apple-promo-2x2-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
