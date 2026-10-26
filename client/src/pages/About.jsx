import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Cpu, Lock, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div style={{ paddingTop: '72px', minHeight: '100vh', background: '#ffffff', paddingBottom: '100px' }}>
      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '60px 24px 40px' }}>
        <span className="badge-pill blue" style={{ marginBottom: '16px' }}>
          Optical Engineering & AI
        </span>
        <h1 className="headline-hero" style={{ fontSize: '3.2rem', marginBottom: '18px', color: '#1d1d1f' }}>
          Pioneering the Future of Optical Intelligence.
        </h1>
        <p className="subheadline" style={{ maxWidth: '720px', margin: '0 auto' }}>
          Coloron Vision was founded by optical physicists and computer vision researchers with a relentless vision: to eliminate the blindness of nocturnal surveillance and deliver actionable intelligence to enterprise security teams.
        </p>
      </section>

      <div className="container-apple">
        {/* Core Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            margin: '60px 0',
          }}
        >
          <div className="glass-card" style={{ padding: '36px', backgroundColor: '#ffffff' }}>
            <div style={{ color: '#0071e3', marginBottom: '18px' }}>
              <Eye size={36} />
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#1d1d1f', marginBottom: '10px' }}>
              Photonic Optical Mastery
            </h3>
            <p style={{ color: '#6e6e73', fontSize: '0.9rem', lineHeight: 1.6 }}>
              We design our own multi-element ED (Extra-low Dispersion) lenses with proprietary anti-reflective coatings. By capturing maximum photons at F1.0 aperture, our cameras turn starlight into rich, true-to-life color images without artificial noise.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '36px', backgroundColor: '#ffffff' }}>
            <div style={{ color: '#b25e00', marginBottom: '18px' }}>
              <Cpu size={36} />
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#1d1d1f', marginBottom: '10px' }}>
              Sub-Millisecond Neural Inference
            </h3>
            <p style={{ color: '#6e6e73', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Every Coloron camera houses an on-die neural accelerator (NPU) running proprietary deep convolutional neural networks. We filter false alarms at the sensor level, categorizing humans, vehicles, and threats in less than 30 milliseconds.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '36px', backgroundColor: '#ffffff' }}>
            <div style={{ color: '#1b8738', marginBottom: '18px' }}>
              <Lock size={36} />
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#1d1d1f', marginBottom: '10px' }}>
              Zero-Trust Cybersecurity & NDAA
            </h3>
            <p style={{ color: '#6e6e73', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Security begins with hardware integrity. Coloron hardware is NDAA compliant, free of banned components, and fortified with hardware root-of-trust encryption chips, secure boot validation, and end-to-end TLS 1.3 cryptographic protocols.
            </p>
          </div>
        </div>

        {/* Lab & Manufacturing Showcase */}
        <div
          className="glass-card"
          style={{
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            marginBottom: '60px',
            backgroundColor: '#ffffff',
          }}
        >
          <div style={{ minHeight: '340px' }}>
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
              alt="Coloron Optical Lab Testing"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ padding: '44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="badge-pill blue" style={{ alignSelf: 'flex-start', marginBottom: '14px' }}>
              Zero-Lux Optical Lab
            </span>
            <h3 style={{ fontSize: '1.8rem', color: '#1d1d1f', marginBottom: '14px' }}>
              Calibrated in absolute darkness.
            </h3>
            <p style={{ color: '#6e6e73', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Before any sensor design enters mass production, it undergoes hundreds of hours in our controlled 0.0001 Lux spherical test chamber. We analyze sensor quantum efficiency, chromatic fringing, and thermal dissipation to ensure flawless operation in real-world midnight deployments.
            </p>
            <div style={{ display: 'flex', gap: '24px' }}>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1d1d1f' }}>100+</div>
                <div style={{ fontSize: '0.8rem', color: '#6e6e73' }}>Optical Patents</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0071e3' }}>45+</div>
                <div style={{ fontSize: '0.8rem', color: '#6e6e73' }}>Countries Deployed</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1b8738' }}>99.9%</div>
                <div style={{ fontSize: '0.8rem', color: '#6e6e73' }}>Uptime Reliability</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <h3 style={{ fontSize: '1.8rem', color: '#1d1d1f', marginBottom: '12px' }}>
            Partner with Coloron Vision
          </h3>
          <p style={{ color: '#6e6e73', maxWidth: '540px', margin: '0 auto 28px' }}>
            Become a certified systems integrator or distributor in your region, or equip your corporate campus with our security infrastructure.
          </p>
          <Link to="/contact" className="btn-primary" style={{ padding: '12px 28px' }}>
            Contact Enterprise Sales <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
