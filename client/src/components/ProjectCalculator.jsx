import React, { useState } from 'react';
import { HardDrive, CheckCircle2, Sparkles } from 'lucide-react';
import { submitQuote } from '../api/client';

export default function ProjectCalculator() {
  const [propertyType, setPropertyType] = useState('Commercial Campus');
  const [indoorCount, setIndoorCount] = useState(8);
  const [outdoorCount, setOutdoorCount] = useState(12);
  const [ptzCount, setPtzCount] = useState(2);
  const [retentionDays, setRetentionDays] = useState(30);
  const [aiAnalyticsSelected, setAiAnalyticsSelected] = useState(true);

  // Client details for submission
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState(null);

  // Dynamic calculations (H.265+ stream: ~25GB per 4K camera per day)
  const totalCameras = indoorCount + outdoorCount + ptzCount;
  const dailyGbPerCam = 25;
  const totalGbNeeded = totalCameras * dailyGbPerCam * retentionDays;
  const storageTbNeeded = Math.ceil(totalGbNeeded / 1000);

  // Dynamic hardware estimation
  const indoorCost = indoorCount * 349;
  const outdoorCost = outdoorCount * 389;
  const ptzCost = ptzCount * 899;
  const nvrCost = totalCameras > 16 ? 1450 : 499;
  const hddCost = storageTbNeeded * 28;
  const estimatedHardwareTotal = indoorCost + outdoorCost + ptzCost + nvrCost + hddCost;

  const handleSubmitQuote = async (e) => {
    e.preventDefault();
    if (!clientName || !email) {
      alert('Please provide your name and email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        clientName,
        email,
        phone,
        projectType: propertyType,
        indoorCameras: indoorCount,
        outdoorCameras: outdoorCount,
        ptzCameras: ptzCount,
        totalCameras,
        storageRetentionDays: retentionDays,
        storageTbNeeded,
        aiAnalyticsIncluded: aiAnalyticsSelected,
        estimatedTotal: estimatedHardwareTotal,
        notes,
      };
      const res = await submitQuote(payload);
      if (res.success) {
        setSubmittedQuote(res.data);
      } else {
        alert(res.error || 'Failed to submit quote');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting quote. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="glass-card"
      style={{
        padding: '36px',
        maxWidth: '1080px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        borderRadius: '24px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <span className="badge-pill blue" style={{ marginBottom: '12px' }}>
          Interactive CCTV System Planner
        </span>
        <h3 className="headline-section" style={{ fontSize: '2.2rem', marginTop: '8px', color: '#1d1d1f' }}>
          Design Your Surveillance Infrastructure
        </h3>
        <p className="subheadline" style={{ fontSize: '1rem', maxWidth: '640px', margin: '8px auto 0' }}>
          Specify your site parameters. Our optical algorithms instantly configure camera coverage, storage retention in Terabytes, and provide a transparent enterprise proposal.
        </p>
      </div>

      {submittedQuote ? (
        <div
          style={{
            background: 'rgba(48, 209, 88, 0.08)',
            border: '1px solid rgba(48, 209, 88, 0.25)',
            borderRadius: '18px',
            padding: '40px 32px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(48, 209, 88, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
            }}
          >
            <CheckCircle2 size={32} color="#1b8738" />
          </div>
          <h3 style={{ fontSize: '1.6rem', color: '#1d1d1f', marginBottom: '8px' }}>
            System Proposal Dispatched Successfully!
          </h3>
          <p style={{ color: '#6e6e73', maxWidth: '560px', margin: '0 auto 24px', fontSize: '0.95rem' }}>
            Quote Reference: <strong style={{ color: '#0071e3' }}>#{submittedQuote.id}</strong>. A Coloron enterprise solutions architect has received your layout and will follow up with detailed CAD schematics.
          </p>

          <div
            style={{
              maxWidth: '420px',
              margin: '0 auto 24px',
              background: '#ffffff',
              borderRadius: '12px',
              padding: '18px',
              textAlign: 'left',
              fontSize: '0.88rem',
              border: '1px solid rgba(0, 0, 0, 0.08)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#6e6e73' }}>Client:</span>
              <span style={{ color: '#1d1d1f', fontWeight: 600 }}>{submittedQuote.clientName}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#6e6e73' }}>Total 4K Cameras:</span>
              <span style={{ color: '#1d1d1f' }}>{submittedQuote.totalCameras} Units</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#6e6e73' }}>Estimated RAID Storage:</span>
              <span style={{ color: '#1d1d1f' }}>{submittedQuote.storageTbNeeded} TB ({submittedQuote.storageRetentionDays} Days)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
              <span style={{ color: '#6e6e73' }}>Estimated Budget:</span>
              <span style={{ color: '#1b8738', fontWeight: 700, fontSize: '1.05rem' }}>${submittedQuote.estimatedTotal.toLocaleString()}</span>
            </div>
          </div>

          <button
            onClick={() => setSubmittedQuote(null)}
            className="btn-secondary"
            style={{ fontSize: '0.88rem' }}
          >
            Configure Another Project
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(20px, 4vw, 36px)' }}>
          {/* Left Column: Interactive Sliders & Toggles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Property Selector */}
            <div>
              <label className="form-label">Deployment Environment</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px', marginTop: '6px' }}>
                {['Commercial Campus', 'Logistics Hub', 'Retail Chain', 'Bank / Financial', 'Smart City', 'Luxury Estate'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setPropertyType(type)}
                    style={{
                      padding: '10px 8px',
                      borderRadius: '10px',
                      border: '1px solid',
                      borderColor: propertyType === type ? '#0071e3' : 'rgba(0, 0, 0, 0.08)',
                      background: propertyType === type ? 'rgba(0, 113, 227, 0.08)' : '#f5f5f7',
                      color: propertyType === type ? '#0071e3' : '#1d1d1f',
                      fontSize: '0.8rem',
                      fontWeight: propertyType === type ? 600 : 400,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Indoor Domes Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="form-label" style={{ margin: 0 }}>Indoor 4K Domes (Apex X Pro)</span>
                <span style={{ color: '#0071e3', fontWeight: 600 }}>{indoorCount} units</span>
              </div>
              <input
                type="range"
                min="0"
                max="64"
                value={indoorCount}
                onChange={(e) => setIndoorCount(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#0071e3', cursor: 'pointer' }}
              />
            </div>

            {/* Outdoor Bullets Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="form-label" style={{ margin: 0 }}>Outdoor Long-Range 4K Bullets (Sentinel Ultra)</span>
                <span style={{ color: '#0071e3', fontWeight: 600 }}>{outdoorCount} units</span>
              </div>
              <input
                type="range"
                min="0"
                max="64"
                value={outdoorCount}
                onChange={(e) => setOutdoorCount(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#0071e3', cursor: 'pointer' }}
              />
            </div>

            {/* PTZ 360 Speed Domes Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="form-label" style={{ margin: 0 }}>Robotic 36x Optical PTZ 360 Domes</span>
                <span style={{ color: '#0071e3', fontWeight: 600 }}>{ptzCount} units</span>
              </div>
              <input
                type="range"
                min="0"
                max="16"
                value={ptzCount}
                onChange={(e) => setPtzCount(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#0071e3', cursor: 'pointer' }}
              />
            </div>

            {/* Storage Retention Days */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="form-label" style={{ margin: 0 }}>Archive Retention Window</span>
                <span style={{ color: '#b25e00', fontWeight: 600 }}>{retentionDays} Days</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[15, 30, 60, 90, 180].map((days) => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => setRetentionDays(days)}
                    style={{
                      flex: 1,
                      padding: '8px 0',
                      borderRadius: '8px',
                      border: '1px solid',
                      borderColor: retentionDays === days ? '#0071e3' : 'rgba(0, 0, 0, 0.08)',
                      background: retentionDays === days ? '#0071e3' : '#f5f5f7',
                      color: retentionDays === days ? '#ffffff' : '#1d1d1f',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                    }}
                  >
                    {days}d
                  </button>
                ))}
              </div>
            </div>

            {/* AI Toggle */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px',
                background: '#f5f5f7',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                cursor: 'pointer',
              }}
              onClick={() => setAiAnalyticsSelected(!aiAnalyticsSelected)}
            >
              <div>
                <div style={{ color: '#1d1d1f', fontSize: '0.88rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={16} color="#1b8738" /> Include Edge AI Neural Analytics
                </div>
                <div style={{ color: '#6e6e73', fontSize: '0.78rem', marginTop: '2px' }}>
                  Facial recognition, license plate capture & perimeter intrusion alarms
                </div>
              </div>
              <div
                style={{
                  width: '42px',
                  height: '24px',
                  borderRadius: '9999px',
                  background: aiAnalyticsSelected ? '#1b8738' : 'rgba(0, 0, 0, 0.15)',
                  position: 'relative',
                  transition: 'background 0.2s',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '2px',
                    left: aiAnalyticsSelected ? '20px' : '2px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    transition: 'left 0.2s',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Live Bill of Materials & Lead Form */}
          <div
            style={{
              background: '#f9f9fb',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '20px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1d1d1f', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HardDrive size={18} color="#0071e3" /> Real-Time Architecture Spec
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6e6e73' }}>Total 4K Cameras:</span>
                  <span style={{ color: '#1d1d1f', fontWeight: 600 }}>{totalCameras} Units</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6e6e73' }}>Calculated Storage Demand:</span>
                  <span style={{ color: '#b25e00', fontWeight: 600 }}>{storageTbNeeded} Terabytes</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6e6e73' }}>Recommended Recording Unit:</span>
                  <span style={{ color: '#0071e3', fontWeight: 600 }}>
                    {totalCameras > 16 ? 'Quantum NVR 64-Channel AI (2U Rack)' : 'Quantum NVR 16-Channel PoE'}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6e6e73' }}>Network Throughput Load:</span>
                  <span style={{ color: '#1d1d1f' }}>~{(totalCameras * 8.5).toFixed(0)} Mbps H.265+</span>
                </div>

                <div
                  style={{
                    paddingTop: '16px',
                    marginTop: '12px',
                    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                  }}
                >
                  <span style={{ color: '#6e6e73', fontSize: '0.9rem' }}>Estimated Hardware Total:</span>
                  <span style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1d1d1f' }}>
                    ${estimatedHardwareTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Form Submission */}
              <form onSubmit={handleSubmitQuote} style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name / Organization *"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="form-input"
                    style={{ fontSize: '0.85rem', padding: '10px 14px' }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Corporate Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    style={{ fontSize: '0.85rem', padding: '10px 14px' }}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                    style={{ fontSize: '0.85rem', padding: '10px 14px' }}
                  />
                </div>
                <div>
                  <textarea
                    rows={2}
                    placeholder="Specific site requirements or floor plan notes..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="form-input"
                    style={{ fontSize: '0.85rem', padding: '10px 14px', resize: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    marginTop: '4px',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {isSubmitting ? 'Calculating & Sending...' : 'Request Formal CAD Proposal'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
