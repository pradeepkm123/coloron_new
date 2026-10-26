import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

// Product data featuring exclusively the two TVT dual illumination models requested by the user
export const appleProducts = [
  {
    id: 'td-9420s5l-dd',
    navName: 'TD-9420S5L-DD',
    badge: 'Dual Light',
    category: 'Dedicated Product > IPC',
    title: 'TD-9420S5L-DD',
    subtitle: '2MP Dual Illumination Water-proof Bullet Network Camera',
    bg: '#f5f5f7',
    textColor: '#1d1d1f',
    subColor: '#6e6e73',
    primaryAction: 'Learn more',
    secondaryAction: 'Get Quote ›',
    primaryLink: '/products',
    secondaryLink: '/quote-calculator',
    image: '/images/tvt_bullet_9420.png',
    imageAlt: 'TD-9420S5L-DD 2MP Dual Illumination Waterproof Bullet Network Camera',
    features: ['2MP (1920×1080)', '10~20m White Light', '20~30m IR Range', 'IP67 Waterproof', 'PoE & SMD'],
    imageFit: 'contain',
    imagePosition: 'center',
    isDark: false,
  },
  {
    id: 'td-9520s5l-dd',
    navName: 'TD-9520S5L-DD',
    badge: 'Dual Light',
    category: 'Dedicated Product > IPC',
    title: 'TD-9520S5L-DD',
    subtitle: '2MP Dual Illumination Water-proof Turret Network Camera',
    bg: '#000000',
    textColor: '#ffffff',
    subColor: '#a1a1a6',
    primaryAction: 'Learn more',
    secondaryAction: 'Get Quote ›',
    primaryLink: '/products',
    secondaryLink: '/quote-calculator',
    image: '/images/tvt_turret_9520.png',
    imageAlt: 'TD-9520S5L-DD 2MP Dual Illumination Waterproof Turret Network Camera',
    features: ['2MP (1920×1080)', '10~20m White Light', '20~30m IR Range', 'IP67 Eyeball', 'PoE & SMD'],
    imageFit: 'contain',
    imagePosition: 'center',
    isDark: true,
  },
];

// Sleek Apple-style minimalist vector line icons for each product category
function CategoryIcon({ id, isSelected = false }) {
  const stroke = isSelected ? '#0071e3' : '#1d1d1f';
  const strokeWidth = 2;
  const props = {
    width: 38,
    height: 38,
    viewBox: '0 0 36 36',
    fill: 'none',
    stroke,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: { display: 'block', transition: 'stroke 0.2s ease, transform 0.2s ease' },
  };

  switch (id) {
    case 'new-product':
      return (
        <svg {...props}>
          <path d="M18 5L20.8 13.2C21.4 14.8 22.8 16 24.5 16.5L32 18L24.5 19.5C22.8 20 21.4 21.2 20.8 22.8L18 31L15.2 22.8C14.6 21.2 13.2 20 11.5 19.5L4 18L11.5 16.5C13.2 16 14.6 14.8 15.2 13.2L18 5Z" />
          <path d="M29 6L30 8.5L32.5 9.5L30 10.5L29 13L28 10.5L25.5 9.5L28 8.5L29 6Z" fill={stroke} stroke="none" />
        </svg>
      );
    case 'hd-ip-camera':
      return (
        <svg {...props}>
          <path d="M6 14C6 10 11.4 7.5 18 7.5C24.6 7.5 30 10 30 14V17C30 23.6 24.6 28.5 18 28.5C11.4 28.5 6 23.6 6 17V14Z" />
          <ellipse cx="18" cy="14" rx="12" ry="4" />
          <circle cx="18" cy="20" r="4" />
          <circle cx="18" cy="20" r="1.5" fill={stroke} />
        </svg>
      );
    case 'kits':
      return (
        <svg {...props}>
          <rect x="5" y="7" width="26" height="22" rx="4" />
          <path d="M5 15H31" />
          <path d="M15 7V29" />
          <circle cx="23" cy="22" r="3" />
          <circle cx="23" cy="22" r="1.2" fill={stroke} />
        </svg>
      );
    case 'access-control':
      return (
        <svg {...props}>
          <rect x="8" y="5" width="20" height="26" rx="4" />
          <path d="M13 10H12V11" />
          <path d="M23 10H24V11" />
          <path d="M12 21V22H13" />
          <path d="M24 21V22H23" />
          <circle cx="18" cy="14.5" r="2.5" />
          <path d="M15 19.5C15 18.2 16.3 17.2 18 17.2C19.7 17.2 21 18.2 21 19.5" />
          <line x1="14" y1="26" x2="22" y2="26" />
        </svg>
      );
    case 'thermal-cameras':
      return (
        <svg {...props}>
          <circle cx="18" cy="18" r="9" />
          <circle cx="18" cy="18" r="4.5" />
          <path d="M18 16V20" />
          <path d="M16 18H20" />
          <path d="M7 11C5 13.5 5 22.5 7 25" />
          <path d="M29 11C31 13.5 31 22.5 29 25" />
        </svg>
      );
    case 'hd-analog-camera':
      return (
        <svg {...props}>
          <path d="M5 14L22 8L26 20L9 26Z" />
          <line x1="26" y1="14" x2="31" y2="13" />
          <line x1="27" y1="18" x2="32" y2="17" />
          <circle cx="15.5" cy="17" r="3" />
          <path d="M11 25.5L8.5 31H15.5L13.5 25" />
        </svg>
      );
    case 'ptz-camera':
      return (
        <svg {...props}>
          <circle cx="18" cy="19" r="6" />
          <circle cx="18" cy="19" r="2.2" fill={stroke} />
          <path d="M7 17C7 10.9 11.9 6 18 6C23 6 27.2 9.3 28.5 14" />
          <polyline points="29 9 29 14 24 14" />
          <path d="M29 21C29 27.1 24.1 32 18 32C13 32 8.8 28.7 7.5 24" />
          <polyline points="7 29 7 24 12 24" />
        </svg>
      );
    case 'nvr':
      return (
        <svg {...props}>
          <rect x="4" y="8" width="28" height="9" rx="2.5" />
          <rect x="4" y="19" width="28" height="9" rx="2.5" />
          <circle cx="9" cy="12.5" r="1.5" fill={stroke} />
          <circle cx="13" cy="12.5" r="1.5" fill={stroke} />
          <circle cx="9" cy="23.5" r="1.5" fill={stroke} />
          <line x1="21" y1="12.5" x2="27" y2="12.5" />
          <line x1="21" y1="23.5" x2="27" y2="23.5" />
        </svg>
      );
    case 'hybrid-dvr':
      return (
        <svg {...props}>
          <rect x="5" y="10" width="26" height="16" rx="3" />
          <circle cx="11" cy="18" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
          <rect x="23" y="15" width="4" height="6" rx="1" />
          <circle cx="8" cy="13" r="1" fill={stroke} />
        </svg>
      );
    case 'platform-product':
      return (
        <svg {...props}>
          <path d="M18 5L4 12L18 19L32 12L18 5Z" />
          <path d="M4 18L18 25L32 18" />
          <path d="M4 24L18 31L32 24" />
        </svg>
      );
    case 'software':
      return (
        <svg {...props}>
          <rect x="4" y="6" width="28" height="19" rx="3" />
          <line x1="12" y1="30" x2="24" y2="30" />
          <line x1="18" y1="25" x2="18" y2="30" />
          <line x1="4" y1="15" x2="32" y2="15" />
          <line x1="18" y1="6" x2="18" y2="15" />
          <circle cx="11" cy="10.5" r="1.5" fill={stroke} />
        </svg>
      );
    case 'dedicated-product':
      return (
        <svg {...props}>
          <circle cx="18" cy="18" r="6" />
          <path d="M18 4V8" />
          <path d="M18 28V32" />
          <path d="M4 18H8" />
          <path d="M28 18H32" />
          <path d="M8.1 8.1L10.9 10.9" />
          <path d="M25.1 25.1L27.9 27.9" />
          <path d="M8.1 27.9L10.9 25.1" />
          <path d="M25.1 10.9L27.9 8.1" />
        </svg>
      );
    case 'switch':
      return (
        <svg {...props}>
          <rect x="4" y="10" width="28" height="16" rx="3" />
          <rect x="8" y="15" width="4" height="5" rx="0.8" />
          <rect x="15" y="15" width="4" height="5" rx="0.8" />
          <rect x="22" y="15" width="4" height="5" rx="0.8" />
          <circle cx="28" cy="13.5" r="1" fill={stroke} />
        </svg>
      );
    case 'edge-box':
      return (
        <svg {...props}>
          <rect x="7" y="7" width="22" height="22" rx="4" />
          <rect x="14" y="14" width="8" height="8" rx="1.5" />
          <path d="M14 4V7" />
          <path d="M22 4V7" />
          <path d="M14 29V32" />
          <path d="M22 29V32" />
          <path d="M4 14H7" />
          <path d="M4 22H7" />
          <path d="M29 14H32" />
          <path d="M29 22H32" />
        </svg>
      );
    case 'accessories':
    default:
      return (
        <svg {...props}>
          <path d="M11 6V11" />
          <path d="M17 6V11" />
          <rect x="8" y="11" width="12" height="8" rx="2" />
          <path d="M14 19C14 23 17 25 21 25C25 25 27 23 28 27C28.5 29 27 31 24 31H18" />
        </svg>
      );
  }
}

// Top subnav categories formatted cleanly in Apple Accessories style
export const subNavItems = [
  {
    id: 'new-product',
    name: 'New\nProduct',
    fullName: 'New Product',
    isCarouselProduct: true,
    carouselIndex: 0,
  },
  {
    id: 'hd-ip-camera',
    name: 'HD IP\nCamera',
    fullName: 'HD IP Camera',
    isCarouselProduct: false,
    link: '/products/category/camera-products',
  },
  {
    id: 'kits',
    name: 'Kits',
    fullName: 'Kits',
    isCarouselProduct: false,
    link: '/products/category/camera-products',
  },
  {
    id: 'access-control',
    name: 'Access Control\nTerminal',
    fullName: 'Access Control Terminal',
    isCarouselProduct: false,
    link: '/products/category/access-control',
  },
  {
    id: 'thermal-cameras',
    name: 'Thermal\nCameras',
    fullName: 'Thermal Cameras',
    isCarouselProduct: false,
    link: '/products/category/thermal-cameras',
  },
  {
    id: 'hd-analog-camera',
    name: 'HD Analog\nCamera',
    fullName: 'HD Analog Camera',
    isCarouselProduct: false,
    link: '/products/category/camera-products',
  },
  {
    id: 'ptz-camera',
    name: 'PTZ\nCamera',
    fullName: 'PTZ Camera',
    isCarouselProduct: false,
    link: '/products/category/ptz-cameras',
  },
  {
    id: 'nvr',
    name: 'NVR',
    fullName: 'NVR',
    isCarouselProduct: false,
    link: '/products/category/nvr-storage',
  },
  {
    id: 'hybrid-dvr',
    name: 'Hybrid\nDVR',
    fullName: 'Hybrid DVR',
    isCarouselProduct: false,
    link: '/products/category/video-recorders',
  },
  {
    id: 'platform-product',
    name: 'Platform\nProduct',
    fullName: 'Platform Product',
    isCarouselProduct: false,
    link: '/products/category/camera-products',
  },
  {
    id: 'software',
    name: 'Software',
    fullName: 'Software',
    isCarouselProduct: false,
    link: '/technologies',
  },
  {
    id: 'dedicated-product',
    name: 'Dedicated\nProduct',
    fullName: 'Dedicated Product',
    isCarouselProduct: false,
    link: '/products/category/camera-products',
  },
  {
    id: 'switch',
    name: 'Switch',
    fullName: 'Switch',
    isCarouselProduct: false,
    link: '/products/category/nvr-storage',
  },
  {
    id: 'edge-box',
    name: 'Edge Box',
    fullName: 'Edge Box',
    isCarouselProduct: false,
    link: '/products/category/camera-products',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    fullName: 'Accessories',
    isCarouselProduct: false,
    link: '/products/category/camera-products',
  },
];

// Strictly only the two featured products, no dummy duplicate cards
const extendedProducts = appleProducts;

export default function AppleProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const duration = 5500; // 5.5s autoplay per slide
  const timerRef = useRef(null);
  const dragStartRef = useRef(0);
  const trackRef = useRef(null);
  const subnavTrackRef = useRef(null);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const scrollSubnav = (direction) => {
    if (subnavTrackRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      subnavTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Active original product index: strictly 0 or 1
  const activeProductIndex = currentIndex;

  // Next / Prev slide transitions between the two products
  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 1 ? 0 : 1));
    setProgress(0);
  }, []);

  // Jump to specific product when nav icon or dot is clicked
  const goToProduct = (targetOrigIdx) => {
    setIsTransitioning(true);
    setCurrentIndex(targetOrigIdx);
    setProgress(0);
  };

  // Autoplay timer: advances automatically, pauses on hover or drag
  useEffect(() => {
    if (!isPlaying || isHovered || isDragging) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const stepMs = 50;
    timerRef.current = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          nextSlide();
          return 0;
        }
        return old + (stepMs / duration) * 100;
      });
    }, stepMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, isDragging, nextSlide]);

  // Mouse / Touch Drag Gestures for Desktop and Mobile
  const handlePointerDown = (e) => {
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    dragStartRef.current = clientX;
    setDragOffset(0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = clientX - dragStartRef.current;
    setDragOffset(diff);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Threshold of 60px to change slide
    if (dragOffset < -60) {
      nextSlide();
    } else if (dragOffset > 60) {
      prevSlide();
    }
    setDragOffset(0);
  };

  // Responsive card measurements
  // Primary card: ~68% on desktop, ~86% on tablet, ~92% on mobile
  // Gap: 20px
  const cardWidthCss = 'clamp(280px, 86vw, 1020px)';
  const cardGap = 20;

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        width: '100%',
        paddingTop: '20px',
        paddingBottom: '50px',
        overflow: 'hidden',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      {/* 1. TOP HEADER & PRODUCT SUBNAVIGATION (Apple Accessories Style) */}
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'left',
          boxSizing: 'border-box',
          marginTop: '28px',
        }}
      >
        {/* Large Clean Heading: Shop by Category */}
        <h1
          style={{
            fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
            fontWeight: 600,
            color: '#1d1d1f',
            letterSpacing: '-0.035em',
            margin: '0 0 38px',
            lineHeight: 1.08,
            textAlign: 'left',
          }}
        >
          Shop by Category
        </h1>

        {/* Minimalist Apple-Style Subnav Strip with Left/Right Scroll Controls */}
        <div style={{ position: 'relative', marginBottom: '8px' }}>
          {/* Scroll Left Button */}
          <button
            onClick={() => scrollSubnav('left')}
            aria-label="Scroll categories left"
            style={{
              position: 'absolute',
              left: '-16px',
              top: '36%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              color: '#1d1d1f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f7')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
          >
            <ChevronLeft size={18} />
          </button>

          <div
            ref={subnavTrackRef}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              gap: 'clamp(18px, 2.8vw, 38px)',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              paddingBottom: '16px',
              paddingLeft: '6px',
              paddingRight: '6px',
              scrollBehavior: 'smooth',
            }}
            className="apple-product-subnav"
          >
            {subNavItems.map((item) => {
              const isSelected = item.id === activeCategoryId;

              const content = (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: '70px',
                    maxWidth: '88px',
                    cursor: 'pointer',
                    opacity: isSelected ? 1 : 0.82,
                    transform: isSelected ? 'translateY(-2px)' : 'none',
                    transition: 'all 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
                    textAlign: 'center',
                    padding: '2px 2px',
                    userSelect: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.opacity = '0.82';
                      e.currentTarget.style.transform = 'none';
                    }
                  }}
                >
                  {/* Clean Vector Line Icon */}
                  <div
                    style={{
                      height: '42px',
                      width: '42px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '8px',
                      color: isSelected ? '#0071e3' : '#1d1d1f',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    <CategoryIcon id={item.id} isSelected={isSelected} />
                  </div>

                  {/* 2-line Category Label */}
                  <span
                    style={{
                      fontSize: '11.5px',
                      fontWeight: isSelected ? 600 : 400,
                      color: isSelected ? '#0071e3' : '#1d1d1f',
                      lineHeight: 1.25,
                      letterSpacing: '-0.01em',
                      textAlign: 'center',
                      whiteSpace: 'pre-line',
                      minHeight: '28px',
                      display: 'block',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {item.name}
                  </span>
                </div>
              );

              if (item.isCarouselProduct) {
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveCategoryId(item.id);
                      goToProduct(item.carouselIndex);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      outline: 'none',
                    }}
                    aria-label={`Select ${item.fullName}`}
                  >
                    {content}
                  </button>
                );
              }

              return (
                <Link
                  key={item.id}
                  to={item.link || '/products'}
                  onClick={() => setActiveCategoryId(item.id)}
                  style={{ textDecoration: 'none' }}
                  aria-label={`View ${item.fullName}`}
                >
                  {content}
                </Link>
              );
            })}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scrollSubnav('right')}
            aria-label="Scroll categories right"
            style={{
              position: 'absolute',
              right: '-16px',
              top: '36%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              color: '#1d1d1f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f7')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* 2. "In the spotlight." SECTION HEADER - Exact match with Apple accessories page */}
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '48px 24px 18px',
          textAlign: 'left',
          boxSizing: 'border-box',
        }}
      >
      </div>

      {/* 3. MAIN HORIZONTAL CAROUSEL */}
      {/* Intentionally shows: 1 Large Primary Card (~68% width) + Part of Next Card on the Right (~28%) */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          padding: '10px 0 24px',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      >
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: `${cardGap}px`,
            transform: `translateX(calc(max(16px, (100vw - 1360px) / 2 + 16px) - ${currentIndex} * (${cardWidthCss} + ${cardGap}px) + ${dragOffset}px))`,
            transition: isDragging || !isTransitioning ? 'none' : 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)',
            willChange: 'transform',
          }}
        >
          {extendedProducts.map((prod, idx) => {
            const isPrimary = idx === currentIndex;
            const isNext = idx !== currentIndex;

            return (
              <div
                key={prod.id}
                onClick={() => {
                  if (isNext) goToProduct(idx);
                }}
                style={{
                  flex: `0 0 ${cardWidthCss}`,
                  width: cardWidthCss,
                  minWidth: cardWidthCss,
                  maxWidth: cardWidthCss,
                  height: 'clamp(500px, 44vw, 580px)',
                  borderRadius: '28px',
                  backgroundColor: prod.bg,
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
                  transition: 'opacity 0.4s ease, transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                  opacity: isPrimary ? 1 : 0.85,
                  cursor: isNext ? 'pointer' : 'default',
                }}
              >
                {/* Animated Inner Content */}
                <div
                  key={isPrimary ? `active-${prod.id}-${currentIndex}` : `idle-${prod.id}`}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    animation: isPrimary
                      ? 'appleCardEntrance 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                      : 'none',
                  }}
                >
                  {/* Top Section: Title & Subtitle on Upper-Left, Buttons on Upper-Right */}
                  <div
                    className="apple-card-header"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      padding: 'clamp(28px, 3.8vw, 44px) clamp(28px, 4vw, 50px) 0',
                      zIndex: 10,
                      position: 'relative',
                      width: '100%',
                      boxSizing: 'border-box',
                    }}
                  >
                    {/* Upper-Left: Category Tag, Title, Subtitle & Feature Tags */}
                    <div style={{ maxWidth: '65%' }}>
                      <div
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          color: prod.isDark ? '#2997ff' : '#0071e3',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          marginBottom: '6px',
                        }}
                      >
                        {prod.category}
                      </div>
                      <h2
                        style={{
                          fontSize: 'clamp(2rem, 3.2vw, 2.85rem)',
                          fontWeight: 700,
                          color: prod.textColor,
                          letterSpacing: '-0.025em',
                          lineHeight: 1.1,
                          margin: 0,
                        }}
                      >
                        {prod.title}
                      </h2>
                      <p
                        style={{
                          fontSize: 'clamp(0.95rem, 1.3vw, 1.18rem)',
                          color: prod.subColor,
                          fontWeight: 400,
                          marginTop: '6px',
                          marginBottom: '10px',
                          letterSpacing: '-0.01em',
                          lineHeight: 1.35,
                        }}
                      >
                        {prod.subtitle}
                      </p>

                      {/* Feature tags from specifications */}
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
                        {prod.features?.map((feat, fIdx) => (
                          <span
                            key={fIdx}
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 500,
                              color: prod.isDark ? '#e1e1e6' : '#424245',
                              backgroundColor: prod.isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.05)',
                              padding: '3px 10px',
                              borderRadius: '9999px',
                              border: prod.isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.06)',
                            }}
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Upper-Right: Apple Buttons [Learn more] [Get Quote ›] */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                      }}
                    >
                      <Link
                        to={prod.primaryLink}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#0071e3',
                          color: '#ffffff',
                          fontSize: '0.88rem',
                          fontWeight: 500,
                          padding: '8px 20px',
                          borderRadius: '9999px',
                          textDecoration: 'none',
                          transition: 'background-color 0.2s ease, transform 0.2s ease',
                          height: '36px',
                          boxSizing: 'border-box',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0077ed')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0071e3')}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {prod.primaryAction}
                      </Link>

                      <Link
                        to={prod.secondaryLink}
                        style={{
                          fontSize: '0.88rem',
                          color: prod.isDark ? '#2997ff' : '#0071e3',
                          fontWeight: 400,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '2px',
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {prod.secondaryAction}
                      </Link>
                    </div>
                  </div>

                  {/* Center / Bottom: Large Product Artwork (4K High-Res) */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'visible',
                      pointerEvents: 'none',
                      zIndex: 2,
                      width: '100%',
                      height: '58%',
                    }}
                  >
                    <img
                      src={prod.image}
                      alt={prod.imageAlt || prod.title}
                      loading="eager"
                      decoding="async"
                      style={{
                        height: 'clamp(220px, 26vw, 340px)',
                        width: 'auto',
                        maxWidth: '88%',
                        objectFit: 'contain',
                        display: 'block',
                        imageRendering: '-webkit-optimize-contrast',
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                        filter: prod.isDark
                          ? 'drop-shadow(0 24px 44px rgba(255, 255, 255, 0.18)) drop-shadow(0 6px 16px rgba(0, 0, 0, 0.75))'
                          : 'drop-shadow(0 24px 38px rgba(0, 0, 0, 0.16)) drop-shadow(0 4px 14px rgba(0, 0, 0, 0.08))',
                        transform: isPrimary ? 'scale(1.04) translateZ(0)' : 'scale(0.96) translateZ(0)',
                        transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. CENTERED MINIMAL BOTTOM CONTROLS (Matching user screenshot) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '16px',
        }}
      >
        {/* Capsule with animated progress bar for active slide + minimal dots for others */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#e8e8ed',
            padding: '7px 14px',
            borderRadius: '9999px',
            gap: '8px',
          }}
        >
          {appleProducts.map((_, dotIdx) => {
            const isActive = dotIdx === activeProductIndex;

            return (
              <button
                key={dotIdx}
                onClick={() => goToProduct(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                style={{
                  position: 'relative',
                  width: isActive ? '32px' : '7px',
                  height: '7px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(0, 0, 0, 0.22)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'width 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
                  outline: 'none',
                }}
              >
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: `${progress}%`,
                      backgroundColor: '#1d1d1f',
                      borderRadius: '9999px',
                      transition: isPlaying ? 'width 0.05s linear' : 'none',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Minimal Play / Pause button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#e8e8ed',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#1d1d1f',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dcdce2')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e8e8ed')}
        >
          {isPlaying ? (
            <span style={{ display: 'inline-flex', gap: '3px', alignItems: 'center' }}>
              <span style={{ width: '2.5px', height: '11px', backgroundColor: '#1d1d1f', borderRadius: '1px' }} />
              <span style={{ width: '2.5px', height: '11px', backgroundColor: '#1d1d1f', borderRadius: '1px' }} />
            </span>
          ) : (
            <Play size={12} fill="#1d1d1f" color="#1d1d1f" style={{ marginLeft: '1px' }} />
          )}
        </button>
      </div>

      <style>{`
        @keyframes appleCardEntrance {
          0% {
            opacity: 0;
            transform: translate3d(0, 20px, 0) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
        @media (max-width: 640px) {
          .apple-card-header {
            flex-direction: column !important;
            gap: 16px !important;
            padding: 24px 20px 0 !important;
          }
          .apple-card-header > div:first-child {
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
