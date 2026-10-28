import React, { useState, useEffect } from 'react';
import {
  Download,
  Search,
  Smartphone,
  Monitor,
  Cpu,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { fetchDownloads, fetchFaqs } from '../api/client';
import { defaultDownloads, defaultFaqs } from '../data/supportData';

export default function Support() {
  const [downloads, setDownloads] = useState(defaultDownloads);
  const [faqs, setFaqs] = useState(defaultFaqs);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Warranty lookup simulator
  const [serialQuery, setSerialQuery] = useState('');
  const [warrantyResult, setWarrantyResult] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const [dls, fqs] = await Promise.all([fetchDownloads(), fetchFaqs()]);
        if (dls && dls.length > 0) setDownloads(dls);
        if (fqs && fqs.length > 0) setFaqs(fqs);
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, []);

  const filteredDownloads = downloads.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleWarrantyCheck = (e) => {
    e.preventDefault();
    if (!serialQuery.trim()) return;

    const valid = serialQuery.length >= 6;
    if (valid) {
      setWarrantyResult({
        serial: serialQuery.toUpperCase(),
        model: 'Coloron Apex Dome X Pro (4K)',
        status: 'Active Enterprise Warranty',
        expiry: 'September 15, 2029 (3 Years Remaining)',
        coverage: 'Next-Business-Day Advance Hardware Replacement + 24/7 Firmware Hotfixes',
      });
    } else {
      setWarrantyResult({
        error: 'Serial number not found. Please verify the 10-digit barcode on your camera chassis.',
      });
    }
  };

  const handleDownloadClick = (item) => {
    alert(`Initiating download for: ${item.title}\nVersion: ${item.version}\nSize: ${item.fileSize}`);
  };

  return (
    <div style={{ paddingTop: '72px', minHeight: '100vh', background: '#ffffff', paddingBottom: '100px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', padding: '40px 24px 30px' }}>
        <span className="badge-pill blue" style={{ marginBottom: '12px' }}>
          Support & Engineering Portal
        </span>
        <h1 className="headline-section" style={{ marginTop: '8px', color: '#1d1d1f' }}>
          Firmware, Tools & Documentation
        </h1>
        <p className="subheadline" style={{ maxWidth: '640px', margin: '8px auto 0' }}>
          Download tested firmware builds, client CMS suites for Windows & macOS, mobile apps, and access 24/7 engineering whitepapers.
        </p>
      </div>

      <div className="container-apple">
        {/* Quick Link Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '48px',
          }}
        >
          <div className="glass-card" style={{ padding: '24px', textAlign: 'center', backgroundColor: '#ffffff' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 113, 227, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Monitor size={24} color="#0071e3" />
            </div>
            <h4 style={{ color: '#1d1d1f', fontSize: '1.1rem', marginBottom: '6px' }}>Guard Pro Client CMS</h4>
            <p style={{ color: '#6e6e73', fontSize: '0.82rem', marginBottom: '16px' }}>Windows & macOS video wall management</p>
            <button
              onClick={() => setActiveCategory('Software & Tools')}
              className="btn-secondary"
              style={{ fontSize: '0.8rem', padding: '6px 14px' }}
            >
              Get Client Software
            </button>
          </div>

          <div className="glass-card" style={{ padding: '24px', textAlign: 'center', backgroundColor: '#ffffff' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(48, 209, 88, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Smartphone size={24} color="#1b8738" />
            </div>
            <h4 style={{ color: '#1d1d1f', fontSize: '1.1rem', marginBottom: '6px' }}>Coloron Connect App</h4>
            <p style={{ color: '#6e6e73', fontSize: '0.82rem', marginBottom: '16px' }}>iOS App Store & Android APK</p>
            <button
              onClick={() => setActiveCategory('Mobile App')}
              className="btn-secondary"
              style={{ fontSize: '0.8rem', padding: '6px 14px' }}
            >
              Mobile Downloads
            </button>
          </div>

          <div className="glass-card" style={{ padding: '24px', textAlign: 'center', backgroundColor: '#ffffff' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 214, 10, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Cpu size={24} color="#b25e00" />
            </div>
            <h4 style={{ color: '#1d1d1f', fontSize: '1.1rem', marginBottom: '6px' }}>Firmware Repository</h4>
            <p style={{ color: '#6e6e73', fontSize: '0.82rem', marginBottom: '16px' }}>OTA update files for Domes, Bullets, PTZ</p>
            <button
              onClick={() => setActiveCategory('Firmware')}
              className="btn-secondary"
              style={{ fontSize: '0.8rem', padding: '6px 14px' }}
            >
              Browse Firmware
            </button>
          </div>

          <div className="glass-card" style={{ padding: '24px', textAlign: 'center', backgroundColor: '#ffffff' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 55, 95, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <ShieldCheck size={24} color="#d70015" />
            </div>
            <h4 style={{ color: '#1d1d1f', fontSize: '1.1rem', marginBottom: '6px' }}>Warranty & RMA Check</h4>
            <p style={{ color: '#6e6e73', fontSize: '0.82rem', marginBottom: '16px' }}>Verify hardware serial number coverage</p>
            <a
              href="#warranty-checker"
              className="btn-secondary"
              style={{ fontSize: '0.8rem', padding: '6px 14px' }}
            >
              Check Serial
            </a>
          </div>
        </div>

        {/* Download Center Repository */}
        <div className="glass-card" style={{ padding: '32px', marginBottom: '56px', backgroundColor: '#ffffff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#1d1d1f', fontWeight: 600 }}>
              Download Center
            </h3>

            {/* Search Input */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f5f5f7', padding: '6px 14px', borderRadius: '8px', border: '1px solid rgba(0, 0, 0, 0.08)' }}>
              <Search size={16} color="#6e6e73" />
              <input
                type="text"
                placeholder="Search file name or camera model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ background: 'transparent', border: 'none', outline: 'none', color: '#1d1d1f', fontSize: '0.85rem', width: '220px' }}
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '20px' }}>
            {['All', 'Firmware', 'Software & Tools', 'Mobile App', 'Manuals & Whitepapers'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? '#0071e3' : 'rgba(0, 0, 0, 0.08)',
                  background: activeCategory === cat ? '#0071e3' : '#f5f5f7',
                  color: activeCategory === cat ? '#ffffff' : '#1d1d1f',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Download Items Table */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredDownloads.map((dl) => (
              <div
                key={dl.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 20px',
                  background: '#f9f9fb',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  borderRadius: '12px',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ flex: '1 1 340px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.7rem', color: '#0071e3', background: 'rgba(0, 113, 227, 0.08)', padding: '2px 8px', borderRadius: '4px' }}>
                      {dl.category}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#6e6e73' }}>Release: {dl.releaseDate}</span>
                  </div>
                  <h4 style={{ color: '#1d1d1f', fontSize: '1rem', fontWeight: 600 }}>{dl.title}</h4>
                  <p style={{ color: '#6e6e73', fontSize: '0.82rem', marginTop: '4px' }}>{dl.description}</p>
                  <div style={{ fontSize: '0.75rem', color: '#86868b', marginTop: '4px' }}>
                    Models: {dl.applicableModels.join(', ')} • {dl.checksum}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.85rem', color: '#1d1d1f', fontWeight: 600 }}>{dl.fileSize}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6e6e73' }}>{dl.version}</div>
                  </div>

                  <button
                    onClick={() => handleDownloadClick(dl)}
                    className="btn-primary"
                    style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                  >
                    <Download size={14} /> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Serial Number & Warranty Validator */}
        <div id="warranty-checker" className="glass-card" style={{ padding: '36px', marginBottom: '56px', backgroundColor: '#ffffff' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
            <span className="badge-pill blue" style={{ marginBottom: '12px' }}>
              Hardware Verification
            </span>
            <h3 style={{ fontSize: '1.8rem', color: '#1d1d1f', marginTop: '8px', marginBottom: '10px' }}>
              Coloron Hardware Warranty & RMA Validator
            </h3>
            <p style={{ color: '#6e6e73', fontSize: '0.9rem', marginBottom: '24px' }}>
              Enter the 10-digit serial number printed on your camera carton or retrieved via the Coloron IP Tool.
            </p>

            <form onSubmit={handleWarrantyCheck} style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <input
                type="text"
                placeholder="e.g., COL8942B019X"
                value={serialQuery}
                onChange={(e) => setSerialQuery(e.target.value)}
                className="form-input"
                style={{ maxWidth: '360px', textTransform: 'uppercase' }}
              />
              <button type="submit" className="btn-primary" style={{ padding: '0 24px' }}>
                Verify Status
              </button>
            </form>

            {warrantyResult && (
              <div style={{ marginTop: '24px', textAlign: 'left', animation: 'fadeIn 0.3s ease' }}>
                {warrantyResult.error ? (
                  <div style={{ background: 'rgba(255, 69, 58, 0.08)', border: '1px solid rgba(255, 69, 58, 0.2)', padding: '16px', borderRadius: '12px', color: '#d70015', fontSize: '0.9rem' }}>
                    {warrantyResult.error}
                  </div>
                ) : (
                  <div style={{ background: 'rgba(48, 209, 88, 0.08)', border: '1px solid rgba(48, 209, 88, 0.25)', padding: '24px', borderRadius: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1b8738', fontWeight: 600, fontSize: '1.05rem', marginBottom: '12px' }}>
                      <CheckCircle2 size={20} /> {warrantyResult.status}
                    </div>
                    <div style={{ fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div><strong style={{ color: '#1d1d1f' }}>Serial Number:</strong> <span style={{ color: '#6e6e73' }}>{warrantyResult.serial}</span></div>
                      <div><strong style={{ color: '#1d1d1f' }}>Product Model:</strong> <span style={{ color: '#6e6e73' }}>{warrantyResult.model}</span></div>
                      <div><strong style={{ color: '#1d1d1f' }}>Warranty Valid Until:</strong> <span style={{ color: '#b25e00' }}>{warrantyResult.expiry}</span></div>
                      <div><strong style={{ color: '#1d1d1f' }}>Enterprise Care Plan:</strong> <span style={{ color: '#6e6e73' }}>{warrantyResult.coverage}</span></div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#1d1d1f' }}>Frequently Asked Technical Questions</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backgroundColor: '#ffffff',
                  }}
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                >
                  <div
                    style={{
                      padding: '20px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ fontSize: '0.98rem', fontWeight: 600, color: '#1d1d1f' }}>
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp size={18} color="#0071e3" /> : <ChevronDown size={18} color="#6e6e73" />}
                  </div>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 24px 20px',
                        color: '#6e6e73',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                        paddingTop: '14px',
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
