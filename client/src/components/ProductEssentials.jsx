import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductEssentials({ product }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Category-aware dynamic naming
  const getCategoryPrefix = () => {
    if (!product) return 'Camera';
    const cat = product.category || '';
    const name = product.name || '';
    if (cat.toLowerCase().includes('nvr') || name.toLowerCase().includes('nvr')) return 'NVR';
    if (cat.toLowerCase().includes('ptz') || name.toLowerCase().includes('ptz')) return 'PTZ';
    if (cat.toLowerCase().includes('intercom') || cat.toLowerCase().includes('access') || name.toLowerCase().includes('lock')) return 'Smart Lock';
    if (cat.toLowerCase().includes('thermal')) return 'Thermal';
    return 'Camera';
  };

  const categoryPrefix = getCategoryPrefix();

  // Dynamic card content based on product category
  const getCardsData = () => {
    if (categoryPrefix === 'NVR') {
      return {
        card1: {
          title: 'Storage & expansion',
          description: 'Maximize retention with high-endurance surveillance HDDs, RAID arrays, and server rack mounts.',
          cta: 'Shop storage solutions',
          link: '/products?category=NVR+%26+Video+Storage',
          image: '/images/cctv_recording_composition.jpg',
          alt: 'Surveillance storage and NVR expansion accessories',
        },
        card2: {
          title: 'Compatible cameras',
          description: 'Pair with COLORON 4K AIoT optical sensors, bullet cameras, and speed domes with plug-and-play PoE.',
          cta: 'Explore compatible cameras',
          link: '/products?category=Network+IP+Cameras',
          image: '/images/cctv_accessories_composition.jpg',
          alt: 'Compatible COLORON 4K optical cameras',
        },
      };
    }

    if (categoryPrefix === 'PTZ') {
      return {
        card1: {
          title: 'PTZ mounts & brackets',
          description: 'Heavy-duty corner, parapet, and high-mast pole mounts engineered for high-speed 360° pan-tilt dynamics.',
          cta: 'Shop PTZ mounts',
          link: '/quote-calculator',
          image: '/images/cctv_accessories_composition.jpg',
          alt: 'COLORON PTZ mounting brackets and junction hardware',
        },
        card2: {
          title: 'Controllers & network',
          description: 'Professional 4D keyboard joysticks, high-power 90W Ultra PoE injectors, and Gigabit industrial switches.',
          cta: 'Explore controllers',
          link: '/products?category=NVR+%26+Video+Storage',
          image: '/images/cctv_recording_composition.jpg',
          alt: 'CCTV recording and PTZ controller networking',
        },
      };
    }

    // Default Camera Essentials (Dome, Bullet, Turret, etc.)
    return {
      card1: {
        title: 'Camera accessories',
        description: 'Complete your installation with compatible mounting, protection and power accessories.',
        cta: 'Shop camera accessories',
        link: '/quote-calculator',
        image: '/images/cctv_accessories_composition.jpg',
        alt: 'COLORON CCTV junction box, wall bracket, pole mount, and power adapter',
      },
      card2: {
        title: 'Recording & connectivity',
        description: 'Build a complete surveillance system with recording, storage and networking products designed to work together.',
        cta: 'Explore connectivity',
        link: '/products?category=NVR+%26+Video+Storage',
        image: '/images/cctv_recording_composition.jpg',
        alt: 'COLORON NVR, Gigabit PoE switch, surveillance HDD, and 4G security router',
      },
    };
  };

  const { card1, card2 } = getCardsData();

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '90px 0 110px',
        borderTop: '1px solid #f0f0f2',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header Row: Dynamic Title (Left) + All Accessories Link (Right) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '40px',
            paddingLeft: '4px',
            paddingRight: '4px',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(40px, 4.4vw, 60px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              color: '#1d1d1f',
              margin: 0,
              lineHeight: 1.05,
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            {categoryPrefix} essentials.
          </h2>

          <Link
            to="/quote-calculator"
            style={{
              fontSize: '17px',
              color: '#0071e3',
              textDecoration: 'none',
              fontWeight: 400,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            All compatible accessories &gt;
          </Link>
        </div>

        {/* Two-Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '20px',
          }}
          className="essentials-cards-grid"
        >
          {/* Card 1 — Installation Accessories */}
          <Link
            to={card1.link}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              position: 'relative',
              minHeight: '680px',
              borderRadius: '34px',
              overflow: 'hidden',
              backgroundColor: '#f5f5f7',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              paddingTop: '64px',
              cursor: 'pointer',
              transform: hoveredCard === 1 ? 'scale(1.005)' : 'scale(1)',
              transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 500ms ease',
              boxShadow: hoveredCard === 1 ? '0 20px 40px rgba(0, 0, 0, 0.06)' : 'none',
            }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Top Text Content (Horizontally Centered) */}
            <div style={{ padding: '0 32px', zIndex: 2 }}>
              <h3
                style={{
                  fontSize: 'clamp(28px, 2.5vw, 36px)',
                  fontWeight: 700,
                  letterSpacing: '-0.025em',
                  color: '#1d1d1f',
                  margin: '0 0 14px',
                  lineHeight: 1.15,
                }}
              >
                {card1.title}
              </h3>
              <p
                style={{
                  maxWidth: '500px',
                  margin: '0 auto',
                  fontSize: 'clamp(16px, 1.4vw, 20px)',
                  lineHeight: 1.3,
                  color: '#3a3a3c',
                  fontWeight: 400,
                }}
              >
                {card1.description}
              </p>
              <div
                style={{
                  marginTop: '22px',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#0071e3',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span>{card1.cta}</span>
                <span
                  style={{
                    display: 'inline-block',
                    transform: hoveredCard === 1 ? 'translateX(4px)' : 'translateX(0)',
                    transition: 'transform 250ms ease',
                  }}
                >
                  &rsaquo;
                </span>
              </div>
            </div>

            {/* Product Composition entering from bottom (Lower 55-60%) */}
            <div
              style={{
                marginTop: 'auto',
                width: '100%',
                height: '56%',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <img
                src={card1.image}
                alt={card1.alt}
                style={{
                  width: '94%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  objectPosition: 'bottom center',
                  display: 'block',
                  transform: hoveredCard === 1 ? 'translateY(-4px) scale(1.015)' : 'translateY(0) scale(1)',
                  transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                  filter: 'drop-shadow(0 15px 25px rgba(0, 0, 0, 0.05))',
                }}
              />
            </div>
          </Link>

          {/* Card 2 — Recording & Connectivity */}
          <Link
            to={card2.link}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              position: 'relative',
              minHeight: '680px',
              borderRadius: '34px',
              overflow: 'hidden',
              backgroundColor: '#f5f5f7',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              paddingTop: '64px',
              cursor: 'pointer',
              transform: hoveredCard === 2 ? 'scale(1.005)' : 'scale(1)',
              transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 500ms ease',
              boxShadow: hoveredCard === 2 ? '0 20px 40px rgba(0, 0, 0, 0.06)' : 'none',
            }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Top Text Content (Horizontally Centered) */}
            <div style={{ padding: '0 32px', zIndex: 2 }}>
              <h3
                style={{
                  fontSize: 'clamp(28px, 2.5vw, 36px)',
                  fontWeight: 700,
                  letterSpacing: '-0.025em',
                  color: '#1d1d1f',
                  margin: '0 0 14px',
                  lineHeight: 1.15,
                }}
              >
                {card2.title}
              </h3>
              <p
                style={{
                  maxWidth: '500px',
                  margin: '0 auto',
                  fontSize: 'clamp(16px, 1.4vw, 20px)',
                  lineHeight: 1.3,
                  color: '#3a3a3c',
                  fontWeight: 400,
                }}
              >
                {card2.description}
              </p>
              <div
                style={{
                  marginTop: '22px',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#0071e3',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span>{card2.cta}</span>
                <span
                  style={{
                    display: 'inline-block',
                    transform: hoveredCard === 2 ? 'translateX(4px)' : 'translateX(0)',
                    transition: 'transform 250ms ease',
                  }}
                >
                  &rsaquo;
                </span>
              </div>
            </div>

            {/* Product Composition entering from bottom (Lower 55-60%) */}
            <div
              style={{
                marginTop: 'auto',
                width: '100%',
                height: '56%',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <img
                src={card2.image}
                alt={card2.alt}
                style={{
                  width: '94%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  objectPosition: 'bottom center',
                  display: 'block',
                  transform: hoveredCard === 2 ? 'translateY(-4px) scale(1.015)' : 'translateY(0) scale(1)',
                  transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                  filter: 'drop-shadow(0 15px 25px rgba(0, 0, 0, 0.05))',
                }}
              />
            </div>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .essentials-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
