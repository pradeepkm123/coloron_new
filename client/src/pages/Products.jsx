import React from 'react';
import { Link, useSearchParams, Navigate } from 'react-router-dom';
import AppleProductCarousel from '../components/AppleProductCarousel';
import { ScrollReveal } from '../components/AppleScrollAnimations';
import ExploreLineupSlider from '../components/ExploreLineupSlider';
import ProductEssentials from '../components/ProductEssentials';
import SecurityEcosystemAccordion from '../components/SecurityEcosystemAccordion';

// Category → slug map for redirect
const CATEGORY_TO_SLUG = {
  'Network IP Cameras': 'camera-products',
  'NVR & Video Storage': 'nvr-storage',
  'Access Control & Intercom': 'access-control',
  'Thermal & Industrial': 'thermal-cameras',
  'PTZ Speed Domes': 'ptz-cameras',
};

export default function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  // If category param is present, redirect to the dedicated category page
  if (category) {
    const slug = CATEGORY_TO_SLUG[category] || 'camera-products';
    return <Navigate to={`/products/category/${slug}`} replace />;
  }

  return (
    <div style={{ paddingTop: '52px', minHeight: '100vh', background: '#ffffff', paddingBottom: '100px' }}>
      {/* 1. Apple-Style Hero Carousel with Product Subnav & Animated Transitions */}
      <AppleProductCarousel />

      {/* 2. Apple "Explore the lineup" Showcase Slider with Scroll Reveal */}
      <ScrollReveal stagger={100}>
        <ExploreLineupSlider />
      </ScrollReveal>

      {/* 6. Apple Essentials Style Section */}
      <ScrollReveal stagger={120}>
        <ProductEssentials />
      </ScrollReveal>

      {/* 7. Apple "Significant others" Style Complete Ecosystem Section */}
      <ScrollReveal stagger={150}>
        <SecurityEcosystemAccordion />
      </ScrollReveal>

      {/* Scoped CSS for Apple Product Page aesthetics */}
      <style>{`
        .apple-subnav-item:hover {
          transform: translateY(-2px);
          opacity: 0.85;
        }
        .apple-product-banner-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08) !important;
        }
        .apple-learn-more-btn:hover {
          background-color: #0077ed !important;
        }
      `}</style>
    </div>
  );
}
