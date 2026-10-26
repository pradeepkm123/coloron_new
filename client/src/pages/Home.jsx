import React from 'react';
import AppleTvSlider from '../components/AppleTvSlider';
import NewProductSection from '../components/NewProductSection';
import CoreTechnologiesCarousel from '../components/CoreTechnologiesCarousel';
import ApplePromoGrid from '../components/ApplePromoGrid';
import AppleSolutionsCarousel from '../components/AppleSolutionsCarousel';
import OurImpactSection from '../components/OurImpactSection';
import PartnersSection from '../components/PartnersSection';
import ClientsSection from '../components/ClientsSection';

export default function Home() {
  return (
    <div style={{ paddingTop: '52px' }}>
      {/* 1. Apple TV+ Style Cinematic Carousel Showcase - Placed First */}
      <section style={{ overflow: 'hidden', backgroundColor: '#000000' }}>
        <AppleTvSlider />
      </section>

      {/* 2. New Product Section (Directly above Core Technologies) */}
      <NewProductSection />

      {/* 3. Core Technologies Showcase Carousel */}
      <CoreTechnologiesCarousel />

      {/* 4. Apple 2-Column Promo Bento Grid (Exact 6-card design) */}
      <ApplePromoGrid />

      {/* 5. Our Impact, In Figures - Corporate Milestone Showcase */}
      <OurImpactSection />

      {/* 6. Collaborative Partnerships for Exceptional Innovation */}
      <PartnersSection />

      {/* 7. Apple Solutions Feature Carousel (Heading: Solutions) */}
      <AppleSolutionsCarousel />

      {/* 8. Trusted by Leaders in Every Sector - Key Clients Showcase (Placed below Solutions) */}
      <ClientsSection />
    </div>
  );
}
