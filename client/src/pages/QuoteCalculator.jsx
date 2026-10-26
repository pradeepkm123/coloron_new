import React from 'react';
import ProjectCalculator from '../components/ProjectCalculator';
import { HardDrive, Server, Shield } from 'lucide-react';

export default function QuoteCalculator() {
  return (
    <div style={{ paddingTop: '72px', minHeight: '100vh', background: '#ffffff', paddingBottom: '100px' }}>
      <div className="container-apple">
        {/* Full-width interactive calculator */}
        <div style={{ marginTop: '20px', marginBottom: '60px' }}>
          <ProjectCalculator />
        </div>

        {/* Technical Guidance Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '40px',
          }}
        >
          <div className="glass-card" style={{ padding: '28px', backgroundColor: '#ffffff' }}>
            <div style={{ color: '#0071e3', marginBottom: '14px' }}>
              <HardDrive size={24} />
            </div>
            <h4 style={{ color: '#1d1d1f', fontSize: '1.1rem', marginBottom: '8px' }}>Smart H.265+ Efficiency</h4>
            <p style={{ color: '#6e6e73', fontSize: '0.85rem', lineHeight: 1.5 }}>
              Coloron's intelligent video encoding evaluates scene complexity dynamically. In static nocturnal settings, it trims bitrate by up to 75% compared to baseline H.264, cutting storage drive costs in half.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '28px', backgroundColor: '#ffffff' }}>
            <div style={{ color: '#b25e00', marginBottom: '14px' }}>
              <Server size={24} />
            </div>
            <h4 style={{ color: '#1d1d1f', fontSize: '1.1rem', marginBottom: '8px' }}>Enterprise RAID Resiliency</h4>
            <p style={{ color: '#6e6e73', fontSize: '0.85rem', lineHeight: 1.5 }}>
              For missions exceeding 30 days retention, our Quantum NVRs configure automated RAID 5 or RAID 6 arrays with hot-spare disk failover. If a physical HDD fails, zero frames of security footage are lost.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '28px', backgroundColor: '#ffffff' }}>
            <div style={{ color: '#1b8738', marginBottom: '14px' }}>
              <Shield size={24} />
            </div>
            <h4 style={{ color: '#1d1d1f', fontSize: '1.1rem', marginBottom: '8px' }}>Certified Enterprise Quote</h4>
            <p style={{ color: '#6e6e73', fontSize: '0.85rem', lineHeight: 1.5 }}>
              Every submitted proposal is verified by a certified Coloron systems engineer. We can supply official RFP bids, contractor architectural drawings, and distributor volume discounts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
