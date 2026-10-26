import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const productPages = [
  // Page 1: Exact 4 models from the user reference
  [
    {
      id: 'td-5635e1-vt2',
      model: 'TD-5635E1-VT2',
      title: 'Thermal Network Speed Dome',
      badge: 'Thermal PTZ',
      desc: 'Dual-spectrum thermal imaging with ultra-fast precision optical tracking and fire detection.',
      image: '/images/new_prod_speed_dome.jpg',
      imageAlt: 'TD-5635E1-VT2 Thermal Network Speed Dome',
      link: '/products',
      specs: '384×288 Thermal | 40X Optical | 200m IR',
    },
    {
      id: 'td-9585e3b-dp',
      model: 'TD-9585E3B-DP',
      title: '8MP Dual-lens Splicing Turret Network Camera',
      badge: '180° Panoramic',
      desc: 'Seamless dual-lens image stitching providing a distortion-free 180° ultra-wide field of view.',
      image: '/images/new_prod_turret.jpg',
      imageAlt: 'TD-9585E3B-DP 8MP Dual-lens Splicing Turret',
      link: '/products',
      specs: '8MP 4640×1760 | Active Deterrence | IP67',
    },
    {
      id: 'td-9482e3b-dp',
      model: 'TD-9482E3B-DP',
      title: '8MP Dual-lens Splicing Bullet Network Camera',
      badge: 'Dual-Lens 4K',
      desc: 'Industrial-grade bullet camera with dual sensor fusion and high-efficiency smart illuminators.',
      image: '/images/new_prod_bullet.jpg',
      imageAlt: 'TD-9482E3B-DP 8MP Dual-lens Splicing Bullet',
      link: '/products',
      specs: '8MP Ultra HD | 180° Stitched | IK10 Armor',
    },
    {
      id: 'td-9846sp1-a',
      model: 'TD-9846SP1-A(BA/G4/WR2)',
      title: '4MP Solar-powered 4G Full-Color Network Camera',
      badge: '100% Wire-Free',
      desc: 'Autonomous solar-powered deployment with integrated 4G LTE cellular uplink and 24/7 full-color night vision.',
      image: '/images/new_prod_solar.jpg',
      imageAlt: 'TD-9846SP1-A Solar-powered 4G Network Camera',
      link: '/products',
      specs: 'Solar + Li-ion Battery | 4G LTE | ColorNight',
    },
  ],
  // Page 2: Next set of newly released AI models
  [
    {
      id: 'td-9544e3',
      model: 'TD-9544E3-DP',
      title: '4MP Active Deterrence Eyeball Network Camera',
      badge: 'Active Guard',
      desc: 'Built-in siren and red-blue strobe deterrence with two-way audio talkdown and edge AI classification.',
      image: '/images/new_prod_turret.jpg',
      imageAlt: 'TD-9544E3-DP Eyeball Network Camera',
      link: '/products',
      specs: '4MP QHD | Strobe & Siren | Two-Way Audio',
    },
    {
      id: 'td-5635e1-pro',
      model: 'TD-5635E1-PRO',
      title: 'Long-Range Bi-Spectrum Perimeter Speed Dome',
      badge: 'Border & Wildfire',
      desc: 'Radiometric temperature detection with optical tracking for expansive facilities and solar farms.',
      image: '/images/new_prod_speed_dome.jpg',
      imageAlt: 'TD-5635E1-PRO Long-Range Bi-Spectrum Speed Dome',
      link: '/products',
      specs: '±2°C Accuracy | 3000m Defense | Auto-Tracking',
    },
    {
      id: 'td-9482e3-wdr',
      model: 'TD-9482E3-WDR',
      title: '8MP Super WDR Highway License Plate Bullet',
      badge: 'ANPR Engine',
      desc: 'High-speed license plate capture up to 160 km/h with 140dB Super WDR against blinding headlight glare.',
      image: '/images/new_prod_bullet.jpg',
      imageAlt: 'TD-9482E3-WDR Highway License Plate Bullet',
      link: '/products',
      specs: '160 km/h ANPR | 140dB WDR | Smart H.265+',
    },
    {
      id: 'td-9846sp2-pro',
      model: 'TD-9846SP2-4G/AI',
      title: '4MP Radar-Assisted Solar Security Station',
      badge: 'Eco Station',
      desc: 'Integrated millimeter-wave radar sensor triggering low-power wake-up for ultra-extended battery life.',
      image: '/images/new_prod_solar.jpg',
      imageAlt: 'TD-9846SP2-4G Radar-Assisted Solar Security Station',
      link: '/products',
      specs: 'Radar + PIR Dual Wake | 60W Monocrystalline',
    },
  ],
];

export default function NewProductSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalPages = productPages.length;

  const handlePageChange = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      } else {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
      }
      setIsTransitioning(false);
    }, 220);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handlePageChange('next');
    } else if (diff < -45) {
      handlePageChange('prev');
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const currentProducts = productPages[currentPage];

  return (
    <section
      aria-label="New Products"
      style={{
        backgroundColor: '#ffffff',
        padding: 'clamp(36px, 5vw, 56px) 0 clamp(40px, 6vw, 64px)',
        position: 'relative',
        borderBottom: '1px solid #f1f2f5',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 clamp(16px, 3.5vw, 40px)',
          position: 'relative',
        }}
      >
        {/* Header Row: [Grid Icon] New Product + [more >] Pill Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '32px',
          }}
        >
          {/* Left Title: 4-Square Icon + New Product */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* 4-square icon matching the TVT/modern layout */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 8px)',
                gridTemplateRows: 'repeat(2, 8px)',
                gap: '3px',
              }}
            >
              <span style={{ backgroundColor: '#0071e3', borderRadius: '1.5px' }} />
              <span style={{ backgroundColor: '#0071e3', borderRadius: '1.5px' }} />
              <span style={{ backgroundColor: '#0071e3', borderRadius: '1.5px' }} />
              <span style={{ backgroundColor: '#0071e3', borderRadius: '1.5px' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h2
                style={{
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                New Product
              </h2>

              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  backgroundColor: 'rgba(0, 113, 227, 0.1)',
                  color: '#0071e3',
                  padding: '3px 9px',
                  borderRadius: '9999px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                Newly Released
              </span>
            </div>
          </div>

          {/* Right Action: "more >" Pill Button with SVG ChevronRight Icon */}
          <Link
            to="/products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: 500,
              color: '#4b5563',
              border: '1px solid #d1d5db',
              borderRadius: '9999px',
              padding: '6px 14px 6px 16px',
              textDecoration: 'none',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              backgroundColor: '#ffffff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0071e3';
              e.currentTarget.style.color = '#0071e3';
              e.currentTarget.style.boxShadow = '0 3px 10px rgba(0, 113, 227, 0.15)';
              e.currentTarget.style.transform = 'translateY(-1px)';
              const icon = e.currentTarget.querySelector('.more-chevron-icon');
              if (icon) icon.style.transform = 'translateX(3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#d1d5db';
              e.currentTarget.style.color = '#4b5563';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
              const icon = e.currentTarget.querySelector('.more-chevron-icon');
              if (icon) icon.style.transform = 'translateX(0)';
            }}
          >
            <span>more</span>
            <ChevronRight
              size={15}
              strokeWidth={2.4}
              className="more-chevron-icon"
              style={{
                transition: 'transform 0.2s ease',
                display: 'block',
              }}
            />
          </Link>
        </div>

        {/* Outer Wrapper for Grid + Side Arrows */}
        <div
          style={{ position: 'relative' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow Button */}
          <button
            onClick={() => handlePageChange('prev')}
            aria-label="Previous Products"
            className="new-prod-arrow left"
            style={{
              position: 'absolute',
              left: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
              color: '#4b5563',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              outline: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0071e3';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = '#0071e3';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#4b5563';
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeft size={22} strokeWidth={2} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => handlePageChange('next')}
            aria-label="Next Products"
            className="new-prod-arrow right"
            style={{
              position: 'absolute',
              right: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
              color: '#4b5563',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              outline: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0071e3';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = '#0071e3';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#4b5563';
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRight size={22} strokeWidth={2} />
          </button>

          {/* 2x2 Product Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))',
              gap: 'clamp(16px, 2.5vw, 24px)',
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? 'scale(0.98)' : 'scale(1)',
              transition: 'opacity 0.22s ease, transform 0.22s ease',
            }}
          >
            {currentProducts.map((product) => (
              <Link
                key={product.id}
                to={product.link}
                className="new-product-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#f8f9fb',
                  borderRadius: '16px',
                  padding: 'clamp(18px, 3vw, 28px)',
                  textDecoration: 'none',
                  color: 'inherit',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.borderColor = 'rgba(0, 113, 227, 0.25)';
                  e.currentTarget.style.boxShadow =
                    '0 14px 34px rgba(0, 0, 0, 0.07), 0 0 1px rgba(0, 113, 227, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = '#f8f9fb';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.02)';
                }}
              >
                {/* Left Product Image */}
                <div
                  className="new-product-card-img-wrap"
                  style={{
                    flex: '0 0 clamp(110px, 15vw, 160px)',
                    width: 'clamp(110px, 15vw, 160px)',
                    height: 'clamp(110px, 15vw, 160px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 'clamp(14px, 2.5vw, 24px)',
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '8px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      display: 'block',
                      transition: 'transform 0.35s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.06)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>

                {/* Right Product Info */}
                <div style={{ flex: '1 1 auto', minWidth: 0 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '6px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: '#0071e3',
                        backgroundColor: 'rgba(0, 113, 227, 0.08)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* Model Number */}
                  <div
                    style={{
                      fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                      fontWeight: 700,
                      color: '#1d1d1f',
                      letterSpacing: '-0.01em',
                      marginBottom: '4px',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                    }}
                  >
                    {product.model}
                  </div>

                  {/* Product Title / Description */}
                  <h3
                    style={{
                      fontSize: 'clamp(0.88rem, 1.15vw, 0.98rem)',
                      fontWeight: 500,
                      color: '#4b5563',
                      lineHeight: 1.4,
                      margin: '0 0 10px 0',
                    }}
                  >
                    {product.title}
                  </h3>

                  {/* Specs & Explore */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                      paddingTop: '8px',
                      marginTop: '4px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: '#9ca3af',
                        fontWeight: 500,
                      }}
                    >
                      {product.specs}
                    </span>

                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#0071e3',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      Details
                      <ArrowRight size={13} strokeWidth={2.4} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Dots Indicator for page navigation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '28px',
            }}
          >
            {productPages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentPage(idx);
                    setIsTransitioning(false);
                  }, 220);
                }}
                aria-label={`Go to new products page ${idx + 1}`}
                style={{
                  width: idx === currentPage ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: idx === currentPage ? '#0071e3' : '#d1d5db',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .new-prod-arrow {
            display: none !important;
          }
        }
        @media (max-width: 580px) {
          .new-product-card {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .new-product-card-img-wrap {
            width: 100% !important;
            height: 140px !important;
            margin-right: 0 !important;
            margin-bottom: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
