import React from 'react';
import { Link } from 'react-router-dom';
import coloronLogo from '../Assets/Image/coloron.png';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#f5f5f7',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        color: '#6e6e73',
        fontSize: '0.8rem',
        lineHeight: 1.6,
        paddingTop: '48px',
        paddingBottom: '48px',
      }}
    >
      <div className="container-apple">
        {/* Brand Header */}
        <div style={{ marginBottom: '36px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <img
            src={coloronLogo}
            alt="Coloron Vision"
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
          />
          <span style={{ fontSize: '0.9rem', color: '#86868b', fontWeight: 500 }}>
            Next-Generation AIoT Optical Surveillance & Security Infrastructure
          </span>
        </div>

        {/* Apple Style Directory Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '32px',
            marginBottom: '48px',
          }}
        >
          {/* Column 1: Products */}
          <div>
            <h5 style={{ color: '#1d1d1f', fontSize: '0.85rem', fontWeight: 600, marginBottom: '14px' }}>
              Hardware & Products
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/products?category=Network%20IP%20Cameras" style={{ color: 'inherit', textDecoration: 'none' }}>Network IP Cameras</Link></li>
              <li><Link to="/products?category=PTZ%20Speed%20Domes" style={{ color: 'inherit', textDecoration: 'none' }}>PTZ Speed Domes</Link></li>
              <li><Link to="/products?category=NVR%20%26%20Video%20Storage" style={{ color: 'inherit', textDecoration: 'none' }}>Quantum NVR Storage</Link></li>
              <li><Link to="/products?category=Thermal%20%26%20Industrial" style={{ color: 'inherit', textDecoration: 'none' }}>Thermal Bi-Spectrum</Link></li>
              <li><Link to="/products?category=Access%20Control%20%26%20Intercom" style={{ color: 'inherit', textDecoration: 'none' }}>Face Terminals & Intercoms</Link></li>
              <li><Link to="/products?category=Turbo%20HD%20/%20Analog" style={{ color: 'inherit', textDecoration: 'none' }}>TurboVision Analog HD</Link></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h5 style={{ color: '#1d1d1f', fontSize: '0.85rem', fontWeight: 600, marginBottom: '14px' }}>
              Industry Solutions
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/solutions#commercial" style={{ color: 'inherit', textDecoration: 'none' }}>Commercial Enterprise</Link></li>
              <li><Link to="/solutions#city" style={{ color: 'inherit', textDecoration: 'none' }}>Smart City Surveillance</Link></li>
              <li><Link to="/solutions#retail" style={{ color: 'inherit', textDecoration: 'none' }}>Retail Analytics & Loss</Link></li>
              <li><Link to="/solutions#industrial" style={{ color: 'inherit', textDecoration: 'none' }}>Industrial Logistics & Ports</Link></li>
              <li><Link to="/solutions#banking" style={{ color: 'inherit', textDecoration: 'none' }}>Banking & Financial Security</Link></li>
              <li><Link to="/solutions#residential" style={{ color: 'inherit', textDecoration: 'none' }}>Luxury Residential AI</Link></li>
            </ul>
          </div>

          {/* Column 3: Interactive Tools */}
          <div>
            <h5 style={{ color: '#1d1d1f', fontSize: '0.85rem', fontWeight: 600, marginBottom: '14px' }}>
              Interactive Tools
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/compare" style={{ color: 'inherit', textDecoration: 'none' }}>Compare Camera Models</Link></li>
              <li><Link to="/quote-calculator" style={{ color: 'inherit', textDecoration: 'none' }}>CCTV Storage & Price Calculator</Link></li>
              <li><Link to="/support" style={{ color: 'inherit', textDecoration: 'none' }}>Firmware & Tools</Link></li>
              <li><Link to="/admin" style={{ color: 'inherit', textDecoration: 'none' }}>Enterprise Admin Portal</Link></li>
            </ul>
          </div>

          {/* Column 4: Support & Engineering */}
          <div>
            <h5 style={{ color: '#1d1d1f', fontSize: '0.85rem', fontWeight: 600, marginBottom: '14px' }}>
              Support & Downloads
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/support" style={{ color: 'inherit', textDecoration: 'none' }}>Firmware Repository</Link></li>
              <li><Link to="/support" style={{ color: 'inherit', textDecoration: 'none' }}>Coloron Guard Pro Client CMS</Link></li>
              <li><Link to="/support" style={{ color: 'inherit', textDecoration: 'none' }}>Coloron Connect Mobile App</Link></li>
              <li><Link to="/support" style={{ color: 'inherit', textDecoration: 'none' }}>RMA & Hardware Warranty</Link></li>
              <li><Link to="/support#faq" style={{ color: 'inherit', textDecoration: 'none' }}>Knowledge Base & FAQs</Link></li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div>
            <h5 style={{ color: '#1d1d1f', fontSize: '0.85rem', fontWeight: 600, marginBottom: '14px' }}>
              Coloron Vision
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About Our Optical Labs</Link></li>
              <li><Link to="/about#security" style={{ color: 'inherit', textDecoration: 'none' }}>Cybersecurity & Privacy</Link></li>
              <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Global Offices & Dealers</Link></li>
              <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Partner Program</Link></li>
              <li><a href="mailto:enterprise@coloronvision.com" style={{ color: 'inherit', textDecoration: 'none' }}>enterprise@coloronvision.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.75rem',
          }}
        >
          <div>
            Copyright © {new Date().getFullYear()} Coloron Vision Inc. All rights reserved. Built with precision for enterprise AIoT surveillance.
          </div>
          <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span>|</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            <span>|</span>
            <span style={{ cursor: 'pointer' }}>Sales Policy</span>
            <span>|</span>
            <span style={{ cursor: 'pointer' }}>NDAA Statement</span>
            <span>|</span>
            <span style={{ cursor: 'pointer' }}>Site Map</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
