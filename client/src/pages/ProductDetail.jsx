import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  ChevronLeft,
  Check,
  X,
  Play,
} from 'lucide-react';
import { fetchProductBySlug, fetchProducts, submitContact } from '../api/client';
import { defaultProducts, getProductBySlugSync } from '../data/productsData';
import ProductHighlightsSlider from '../components/ProductHighlightsSlider';
import ProductDesignExplorer from '../components/ProductDesignExplorer';
import ProductDescriptionsTabs from '../components/ProductDescriptionsTabs';
import ProductCompareSection from '../components/ProductCompareSection';

const DEFAULT_CCTV_GALLERY = [
  '/images/bullet_dual_edition.jpg',
  '/images/bullet_front_lens.jpg',
  '/images/bullet_black_angle.jpg',
  '/images/bullet_white_angle.jpg',
];

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const initialProduct = getProductBySlugSync(slug) || defaultProducts[0];
  const [product, setProduct] = useState(initialProduct);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Video modal state
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Inquiry modal state
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', company: '', message: '' });
  const [inquirySuccess, setInquirySuccess] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        let data = await fetchProductBySlug(slug);
        if (data) {
          setProduct(data);
        } else {
          setProduct(getProductBySlugSync(slug) || defaultProducts[0]);
        }
      } catch (err) {
        console.error(err);
        setProduct(getProductBySlugSync(slug) || defaultProducts[0]);
      }
    }
    load();
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [slug]);

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContact({
        ...inquiryForm,
        subject: `Product Inquiry: ${product.name}`,
      });
      setInquirySuccess(true);
    } catch (err) {
      alert('Failed to submit inquiry.');
    }
  };

  if (loading) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', color: '#6e6e73', minHeight: '80vh' }}>
        Loading optical hardware specifications...
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '80vh' }}>
        <h2 style={{ color: '#1d1d1f', marginBottom: '12px' }}>Camera Model Not Found</h2>
        <p style={{ color: '#6e6e73', marginBottom: '24px' }}>The requested surveillance unit does not exist in our catalog.</p>
        <Link to="/products" className="btn-primary">
          Back to Catalog
        </Link>
      </div>
    );
  }

  // Active gallery with CCTV fallback
  const galleryImages = (product?.images && product.images.length > 0)
    ? product.images.map((img, i) => {
        if (typeof img === 'string' && img.includes('unsplash.com')) {
          return DEFAULT_CCTV_GALLERY[i % DEFAULT_CCTV_GALLERY.length];
        }
        return img;
      })
    : DEFAULT_CCTV_GALLERY;

  const activeGallery = galleryImages.length >= 2 ? galleryImages : DEFAULT_CCTV_GALLERY;

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev + 1) % activeGallery.length);
  };

  return (
    <div style={{ paddingTop: '52px', paddingBottom: '80px', minHeight: '100vh', background: '#ffffff', color: '#1d1d1f' }}>

      {/* Hero Showcase Section Matching Reference */}
      <section
        style={{
          backgroundColor: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          padding: '50px 0 60px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        }}
      >
        <div
          style={{
            maxWidth: '1380px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1.15fr) minmax(320px, 1fr)',
            gap: '40px',
            alignItems: 'center',
          }}
          className="product-detail-hero-grid"
        >
          {/* Left Column: Heading, Subtitle, Description, Action Buttons, 5 Features */}
          <div style={{ zIndex: 2 }}>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4vw, 3.7rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.035em',
                lineHeight: 1.12,
                margin: '0 0 16px',
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              {product.name || '4MP Dual Illumination Network Camera'}
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)',
                fontWeight: 500,
                color: '#6e6e73',
                margin: '0 0 14px',
                letterSpacing: '-0.015em',
              }}
            >
              {product.tagline || 'See more. Protect better.'}
            </p>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.55,
                color: '#515154',
                maxWidth: '480px',
                margin: '0 0 32px',
              }}
            >
              {product.description ||
                'Advanced imaging, intelligent detection and reliable performance — built for a safer tomorrow.'}
            </p>

            {/* CTAs: [Get Quote] & [Watch video] */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '44px' }}>
              <button
                onClick={() => setInquiryModalOpen(true)}
                style={{
                  backgroundColor: '#0071e3',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '12px 30px',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease, transform 0.15s ease',
                  boxShadow: '0 4px 14px rgba(0, 113, 227, 0.25)',
                }}
                className="hero-get-quote-btn"
              >
                Get Quote
              </button>

              <button
                onClick={() => setShowVideoModal(true)}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#1d1d1f',
                  border: '1px solid #d2d2d7',
                  borderRadius: '9999px',
                  padding: '11px 24px',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.2s ease, border-color 0.2s ease',
                }}
                className="hero-watch-video-btn"
              >
                <Play size={16} fill="#1d1d1f" />
                <span>Watch video</span>
              </button>
            </div>

            {/* Feature Highlights Row: 5 Icons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '24px',
                flexWrap: 'wrap',
                paddingTop: '6px',
              }}
            >
              {/* Feature 1: Resolution */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '68px', textAlign: 'center', gap: '8px' }}>
                <div style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                    <rect x="3" y="6" width="26" height="20" rx="6" stroke="#0071e3" strokeWidth="2" fill="#edf5fd" />
                    <text x="6" y="20" fill="#0071e3" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">4MP</text>
                  </svg>
                </div>
                <div style={{ fontSize: '0.76rem', fontWeight: 600, color: '#1d1d1f', lineHeight: 1.25 }}>
                  4MP<br /><span style={{ fontWeight: 400, color: '#6e6e73' }}>Resolution</span>
                </div>
              </div>

              {/* Feature 2: Dual Illumination */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '68px', textAlign: 'center', gap: '8px' }}>
                <div style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="6.5" stroke="#0071e3" strokeWidth="2" fill="#edf5fd" />
                    <path d="M16 3v4m0 18v4M3 16h4m18 0h4M6.8 6.8l2.8 2.8m12.8 12.8l2.8 2.8M6.8 25.2l2.8-2.8m12.8-12.8l2.8-2.8" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div style={{ fontSize: '0.76rem', fontWeight: 600, color: '#1d1d1f', lineHeight: 1.25 }}>
                  Dual<br /><span style={{ fontWeight: 400, color: '#6e6e73' }}>Illumination</span>
                </div>
              </div>

              {/* Feature 3: AI Detection */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '68px', textAlign: 'center', gap: '8px' }}>
                <div style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                    <rect x="7" y="7" width="18" height="18" rx="4" stroke="#0071e3" strokeWidth="2" fill="#edf5fd" />
                    <circle cx="12" cy="12" r="1.5" fill="#0071e3" />
                    <circle cx="20" cy="12" r="1.5" fill="#0071e3" />
                    <circle cx="16" cy="20" r="1.5" fill="#0071e3" />
                    <path d="M12 12l4 8 4-8" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M16 2v4m0 20v4M2 16h4m20 0h4" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div style={{ fontSize: '0.76rem', fontWeight: 600, color: '#1d1d1f', lineHeight: 1.25 }}>
                  AI<br /><span style={{ fontWeight: 400, color: '#6e6e73' }}>Detection</span>
                </div>
              </div>

              {/* Feature 4: IP67 Weatherproof */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '68px', textAlign: 'center', gap: '8px' }}>
                <div style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                    <path d="M16 3l11 4.5v9c0 7-5 12.5-11 14.5-6-2-11-7.5-11-14.5v-9L16 3z" stroke="#0071e3" strokeWidth="2" fill="#edf5fd" strokeLinejoin="round" />
                    <path d="M16 11c-2 2.8-3.2 5.2-3.2 7a3.2 3.2 0 006.4 0c0-1.8-1.2-4.2-3.2-7z" fill="#0071e3" />
                  </svg>
                </div>
                <div style={{ fontSize: '0.76rem', fontWeight: 600, color: '#1d1d1f', lineHeight: 1.25 }}>
                  IP67<br /><span style={{ fontWeight: 400, color: '#6e6e73' }}>Weatherproof</span>
                </div>
              </div>

              {/* Feature 5: PoE Support */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '68px', textAlign: 'center', gap: '8px' }}>
                <div style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                    <rect x="5" y="8" width="22" height="15" rx="4" stroke="#0071e3" strokeWidth="2" fill="#edf5fd" />
                    <path d="M10 15.5h2m3 0h2m3 0h2" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16 23v5M12 28h8" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div style={{ fontSize: '0.76rem', fontWeight: 600, color: '#1d1d1f', lineHeight: 1.25 }}>
                  PoE<br /><span style={{ fontWeight: 400, color: '#6e6e73' }}>Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: CCTV Product Gallery (Hikvision / Enterprise Style Matching Reference) */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            {/* Main Image Stage with Left / Right Navigation */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '560px',
                height: '420px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#ffffff',
                userSelect: 'none',
              }}
            >
              {/* Previous Image Arrow */}
              {activeGallery.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrevImage}
                  aria-label="Previous product image"
                  style={{
                    position: 'absolute',
                    left: '6px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#c4c4c8',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'background-color 0.2s ease, transform 0.15s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#9e9ea3';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#c4c4c8';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  }}
                >
                  <ChevronLeft size={24} strokeWidth={2.4} />
                </button>
              )}

              {/* Main Product Image Display */}
              <img
                key={selectedImage}
                src={activeGallery[selectedImage] || activeGallery[0]}
                alt={`${product.name || 'CCTV Camera'} - View ${selectedImage + 1}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.06))',
                  transition: 'opacity 0.25s ease, transform 0.25s ease',
                }}
                className="hero-camera-image"
              />

              {/* Next Image Arrow */}
              {activeGallery.length > 1 && (
                <button
                  type="button"
                  onClick={handleNextImage}
                  aria-label="Next product image"
                  style={{
                    position: 'absolute',
                    right: '6px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#c4c4c8',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'background-color 0.2s ease, transform 0.15s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#9e9ea3';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#c4c4c8';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  }}
                >
                  <ChevronRight size={24} strokeWidth={2.4} />
                </button>
              )}
            </div>

            {/* Thumbnail Navigation Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                marginTop: '24px',
                flexWrap: 'wrap',
              }}
            >
              {activeGallery.map((imgUrl, index) => {
                const isActive = selectedImage === index;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    aria-label={`Select camera angle ${index + 1}`}
                    style={{
                      width: '76px',
                      height: '76px',
                      padding: '4px',
                      borderRadius: '2px',
                      border: isActive ? '1.8px solid #111111' : '1px solid #e0e0e0',
                      backgroundColor: '#ffffff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                      outline: 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.borderColor = '#86868b';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.borderColor = '#e0e0e0';
                    }}
                  >
                    <img
                      src={imgUrl}
                      alt={`Angle ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        opacity: isActive ? 1 : 0.85,
                        transition: 'opacity 0.2s ease',
                      }}
                    />
                  </button>
                );
              })}
            </div>

            {/* Footnote matching user reference screenshot */}
            <p
              style={{
                margin: '20px 0 0',
                fontSize: '0.84rem',
                color: '#707075',
                textAlign: 'center',
                letterSpacing: '-0.01em',
              }}
            >
              *Images are for illustrative purposes. Actual product appearance and specifications may vary.
            </p>
          </div>
        </div>
      </section>

      {/* Apple 'Get the highlights' Horizontal Interactive Cards Slider (Top of Ecosystem) */}
      <ProductHighlightsSlider product={product} />

      {/* Apple 'Design.' Interactive Feature Explorer Section (Directly bottom of Get the highlights) */}
      <ProductDesignExplorer product={product} />

      {/* Descriptions with Centered Tabs (Introduction, Specification, Accessories, Downloads) */}
      <ProductDescriptionsTabs product={product} />

      {/* Apple-style 'See the difference. Compare before you choose.' Section */}
      <ProductCompareSection
        product={product}
        onOpenInquiry={() => setInquiryModalOpen(true)}
      />


      {/* Enterprise Inquiry Modal */}
      {inquiryModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: '520px',
              width: '100%',
              padding: '36px',
              position: 'relative',
              background: '#ffffff',
            }}
          >
            <button
              onClick={() => setInquiryModalOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: '#6e6e73',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>

            {inquirySuccess ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(48, 209, 88, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Check size={28} color="#1b8738" />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#1d1d1f', marginBottom: '8px' }}>Inquiry Submitted</h3>
                <p style={{ color: '#6e6e73', fontSize: '0.9rem', marginBottom: '24px' }}>
                  A Coloron optical security consultant will contact you with volume pricing and lead times for {product.name}.
                </p>
                <button
                  onClick={() => {
                    setInquiryModalOpen(false);
                    setInquirySuccess(false);
                  }}
                  className="btn-primary"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#1d1d1f', marginBottom: '6px' }}>
                  Request Enterprise Pricing
                </h3>
                <p style={{ color: '#6e6e73', fontSize: '0.85rem', marginBottom: '24px' }}>
                  Request sample test units or project partner quotes for <strong>{product.name}</strong>.
                </p>

                <form onSubmit={handleInquirySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label className="form-label">Contact Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="form-label">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="form-label">Company / Integrator Name</label>
                    <input
                      type="text"
                      placeholder="Apex Security Integrators"
                      value={inquiryForm.company}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, company: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="form-label">Project Scope / Estimated Quantity</label>
                    <textarea
                      rows={3}
                      placeholder="e.g., 20 cameras for a multi-building corporate campus..."
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ marginTop: '8px', padding: '12px' }}
                  >
                    Submit Quotation Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Product Feature Film Video Modal */}
      {showVideoModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setShowVideoModal(false)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '960px',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: '#000000',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideoModal(false)}
              aria-label="Close video"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
            <video
              src="https://assets.mixkit.co/videos/preview/mixkit-modern-office-building-with-glass-facade-41710-large.mp4"
              controls
              autoPlay
              style={{
                width: '100%',
                aspectRatio: '16/9',
                display: 'block',
                backgroundColor: '#000000',
              }}
            />
            <div style={{ padding: '20px 24px', backgroundColor: '#1d1d1f', color: '#ffffff' }}>
              <h3 style={{ margin: '0 0 4px', fontSize: '1.2rem', fontWeight: 600 }}>
                {product.name || '4MP Dual Illumination Network Camera'} — Optical Overview
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#86868b' }}>
                Ultra-sensitive optics, dual illumination intelligence, and seamless COLORON NVR integration.
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 640px) {
          .desktop-price { display: block !important; }
        }
        @media (max-width: 960px) {
          .product-detail-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        .hero-get-quote-btn:hover {
          background-color: #0077ed !important;
          transform: translateY(-1px);
        }
        .hero-watch-video-btn:hover {
          background-color: #f5f5f7 !important;
          border-color: #86868b !important;
        }
        .hero-camera-image:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}
