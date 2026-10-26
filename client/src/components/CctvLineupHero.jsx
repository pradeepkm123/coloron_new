import React from 'react';
import { Link } from 'react-router-dom';

export default function CctvLineupHero() {
  return (
    <section
      style={{
        backgroundColor: '#f5f5f7',
        color: '#1d1d1f',
        paddingTop: '56px',
        overflow: 'hidden',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 2 }}>
        {/* Apple Exact Typography: CCTV */}
        <h2
          style={{
            fontSize: 'clamp(2.8rem, 5.2vw, 4.2rem)',
            fontWeight: 600,
            letterSpacing: '-0.025em',
            color: '#1d1d1f',
            lineHeight: 1.08,
            marginBottom: '6px',
          }}
        >
          CCTV
        </h2>

        {/* Subtitle: Meet the latest CCTV line-up. */}
        <p
          style={{
            fontSize: 'clamp(1.15rem, 2.1vw, 1.55rem)',
            color: '#1d1d1f',
            fontWeight: 400,
            letterSpacing: '-0.015em',
            marginBottom: '20px',
          }}
        >
          Meet the latest CCTV line-up.
        </p>

        {/* Apple Dual Pill Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '14px',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '36px',
          }}
        >
          <Link
            to="/products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#0071e3',
              color: '#ffffff',
              fontSize: '0.88rem',
              fontWeight: 400,
              padding: '8px 20px',
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0077ed';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0071e3';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Learn more
          </Link>

          <Link
            to="/products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'transparent',
              color: '#0071e3',
              border: '1px solid #0071e3',
              fontSize: '0.88rem',
              fontWeight: 400,
              padding: '8px 20px',
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 113, 227, 0.06)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Shop CCTV
          </Link>
        </div>
      </div>

      {/* CCTV Line-up Showcase Image */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          padding: '0 16px',
          marginTop: '-10px',
        }}
      >
        <Link
          to="/products"
          style={{
            display: 'block',
            width: '100%',
            cursor: 'pointer',
          }}
        >
          <img
            src="/images/cctv_lineup.jpg"
            alt="Coloron CCTV Security Cameras Line-up"
            style={{
              width: '100%',
              maxHeight: '480px',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto',
              filter: 'drop-shadow(0 20px 35px rgba(0, 0, 0, 0.12))',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </Link>
      </div>
    </section>
  );
}
