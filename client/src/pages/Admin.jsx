import React, { useState, useEffect } from 'react';
import {
  Shield,
  FileText,
  Mail,
  Package,
  Plus,
  Trash2,
} from 'lucide-react';
import { fetchProducts, fetchQuotes, fetchContacts } from '../api/client';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('quotes');
  const [products, setProducts] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // New product form state
  const [newProduct, setNewProduct] = useState({
    name: '',
    series: 'Ultra AIoT Series',
    category: 'Network IP Cameras',
    subCategory: 'Dome Cameras',
    price: 299,
    badge: 'New 4K',
    resolution: '4K (3840 × 2160 @ 30fps)',
    sensor: '1/1.8" Progressive Scan CMOS',
    lens: '2.8mm Fixed Lens',
    fov: '108° Horizontal',
    nightVisionType: 'ColorSense 24/7 Full Color',
    nightVisionDistance: '30m (98ft)',
    minIllumination: '0.0005 Lux @ F1.0',
    wdr: '120 dB True WDR',
    compression: 'H.265+ / H.265',
    protection: 'IP67 Weatherproof',
    power: 'PoE (802.3af) or 12V DC',
    storage: 'MicroSD slot up to 256GB',
    audio: 'Built-in Noise-Canceling Microphone',
    tagline: 'Precision optical surveillance for demanding facilities.',
    description: 'High-performance camera engineered for 24/7 high-fidelity surveillance.',
    images: ['https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80'],
  });

  const loadAll = async () => {
    setLoading(true);
    try {
      const [p, q, c] = await Promise.all([fetchProducts(), fetchQuotes(), fetchContacts()]);
      setProducts(p);
      setQuotes(q);
      setContacts(c);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAll();
  }, []);

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();
      if (data.success) {
        alert('Product added successfully!');
        setActiveTab('products');
        loadAll();
      } else {
        alert(data.error || 'Failed to add product');
      }
    } catch (err) {
      alert('Error communicating with API server.');
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm('Are you sure you want to remove this product from the catalog?')) return;
    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        loadAll();
      } else {
        alert(data.error || 'Failed to delete product');
      }
    } catch (err) {
      alert('Error deleting product');
    }
  };

  const totalPipelineValue = quotes.reduce((acc, curr) => acc + (Number(curr.estimatedTotal) || 0), 0);

  return (
    <div style={{ paddingTop: '72px', minHeight: '100vh', background: '#ffffff', paddingBottom: '100px' }}>
      {/* Admin Subheader */}
      <div
        style={{
          background: '#f5f5f7',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          padding: '24px 0',
        }}
      >
        <div className="container-apple" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Shield size={20} color="#0071e3" />
              <h1 style={{ fontSize: '1.4rem', color: '#1d1d1f', fontWeight: 600 }}>Coloron Operations & Lead Center</h1>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#6e6e73', marginTop: '4px' }}>
              MERN Stack Dashboard: Manage incoming project quotes, inquiries, and catalog inventory.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setActiveTab('new-product')}
              className="btn-primary"
              style={{ fontSize: '0.82rem', padding: '8px 16px' }}
            >
              <Plus size={14} /> Add New CCTV Model
            </button>
          </div>
        </div>
      </div>

      <div className="container-apple" style={{ marginTop: '32px' }}>
        {/* Metric KPI cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginBottom: '32px',
          }}
        >
          <div className="glass-card" style={{ padding: '20px', backgroundColor: '#ffffff' }}>
            <div style={{ fontSize: '0.78rem', color: '#6e6e73', marginBottom: '6px' }}>Total Pipeline Value</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1b8738' }}>
              ${totalPipelineValue.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#6e6e73', marginTop: '4px' }}>From interactive calculators</div>
          </div>

          <div className="glass-card" style={{ padding: '20px', backgroundColor: '#ffffff' }}>
            <div style={{ fontSize: '0.78rem', color: '#6e6e73', marginBottom: '6px' }}>CCTV Project Quotes</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0071e3' }}>
              {quotes.length}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#6e6e73', marginTop: '4px' }}>Architectural proposals</div>
          </div>

          <div className="glass-card" style={{ padding: '20px', backgroundColor: '#ffffff' }}>
            <div style={{ fontSize: '0.78rem', color: '#6e6e73', marginBottom: '6px' }}>Enterprise Inquiries</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#b25e00' }}>
              {contacts.length}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#6e6e73', marginTop: '4px' }}>Tenders & consultation requests</div>
          </div>

          <div className="glass-card" style={{ padding: '20px', backgroundColor: '#ffffff' }}>
            <div style={{ fontSize: '0.78rem', color: '#6e6e73', marginBottom: '6px' }}>Active Catalog Products</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1d1d1f' }}>
              {products.length}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#6e6e73', marginTop: '4px' }}>Cameras, NVRs & Intercoms</div>
          </div>
        </div>

        {/* Tab switcher */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid rgba(0, 0, 0, 0.08)', paddingBottom: '12px', marginBottom: '24px' }}>
          {[
            { key: 'quotes', label: `Project Quotes (${quotes.length})`, icon: <FileText size={16} /> },
            { key: 'inquiries', label: `Enterprise Inquiries (${contacts.length})`, icon: <Mail size={16} /> },
            { key: 'products', label: `Manage Products (${products.length})`, icon: <Package size={16} /> },
            { key: 'new-product', label: '+ Add Product', icon: <Plus size={16} /> },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === t.key ? '#0071e3' : '#f5f5f7',
                color: activeTab === t.key ? '#ffffff' : '#1d1d1f',
                fontWeight: activeTab === t.key ? 600 : 400,
                fontSize: '0.85rem',
                cursor: 'pointer',
              }}
            >
              {t.icon}
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Tab 1: Project Quotes */}
        {activeTab === 'quotes' && (
          <div className="glass-card" style={{ padding: '24px', overflowX: 'auto', backgroundColor: '#ffffff' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#1d1d1f', marginBottom: '16px' }}>Incoming CCTV Storage & System Proposals</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.08)', color: '#6e6e73' }}>
                  <th style={{ padding: '12px' }}>Proposal ID</th>
                  <th style={{ padding: '12px' }}>Client / Facility</th>
                  <th style={{ padding: '12px' }}>Project Type</th>
                  <th style={{ padding: '12px' }}>Cameras</th>
                  <th style={{ padding: '12px' }}>Storage</th>
                  <th style={{ padding: '12px' }}>Est. Total</th>
                  <th style={{ padding: '12px' }}>Date</th>
                  <th style={{ padding: '12px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {quotes.map((q) => (
                  <tr key={q.id} style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.04)' }}>
                    <td style={{ padding: '12px', color: '#0071e3', fontWeight: 600 }}>#{q.id}</td>
                    <td style={{ padding: '12px' }}>
                      <div style={{ color: '#1d1d1f', fontWeight: 500 }}>{q.clientName}</div>
                      <div style={{ color: '#6e6e73', fontSize: '0.78rem' }}>{q.email}</div>
                    </td>
                    <td style={{ padding: '12px', color: '#1d1d1f' }}>{q.projectType}</td>
                    <td style={{ padding: '12px', color: '#1d1d1f' }}>{q.totalCameras || (q.indoorCameras + q.outdoorCameras)} Units</td>
                    <td style={{ padding: '12px', color: '#b25e00' }}>{q.storageTbNeeded || 16} TB ({q.storageRetentionDays}d)</td>
                    <td style={{ padding: '12px', color: '#1b8738', fontWeight: 600 }}>${Number(q.estimatedTotal).toLocaleString()}</td>
                    <td style={{ padding: '12px', color: '#6e6e73' }}>{new Date(q.createdAt).toLocaleDateString()}</td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ fontSize: '0.72rem', background: 'rgba(48, 209, 88, 0.12)', color: '#1b8738', padding: '3px 8px', borderRadius: '4px' }}>
                        {q.status || 'Active Review'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Inquiries */}
        {activeTab === 'inquiries' && (
          <div className="glass-card" style={{ padding: '24px', overflowX: 'auto', backgroundColor: '#ffffff' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#1d1d1f', marginBottom: '16px' }}>Direct Enterprise Consultation Inquiries</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contacts.map((c) => (
                <div key={c.id} style={{ background: '#f9f9fb', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: '12px', padding: '18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div>
                      <span style={{ color: '#1d1d1f', fontWeight: 600, fontSize: '1rem' }}>{c.name}</span>
                      {c.company && <span style={{ color: '#6e6e73', fontSize: '0.85rem', marginLeft: '8px' }}>({c.company})</span>}
                    </div>
                    <span style={{ fontSize: '0.78rem', color: '#6e6e73' }}>{new Date(c.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#0071e3', marginBottom: '8px' }}>
                    {c.email} {c.phone && `• ${c.phone}`} • <strong>{c.subject}</strong>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#1d1d1f', lineHeight: 1.5 }}>
                    "{c.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Products Management */}
        {activeTab === 'products' && (
          <div className="glass-card" style={{ padding: '24px', overflowX: 'auto', backgroundColor: '#ffffff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#1d1d1f' }}>Surveillance Catalog Inventory ({products.length})</h3>
              <button onClick={() => setActiveTab('new-product')} className="btn-primary" style={{ fontSize: '0.8rem', padding: '6px 14px' }}>
                <Plus size={14} /> Add Product
              </button>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.08)', color: '#6e6e73' }}>
                  <th style={{ padding: '12px' }}>Product</th>
                  <th style={{ padding: '12px' }}>Category</th>
                  <th style={{ padding: '12px' }}>Resolution</th>
                  <th style={{ padding: '12px' }}>Night Vision</th>
                  <th style={{ padding: '12px' }}>Price</th>
                  <th style={{ padding: '12px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.04)' }}>
                    <td style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img src={p.images?.[0]} alt={p.name} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                      <div>
                        <div style={{ color: '#1d1d1f', fontWeight: 600 }}>{p.name}</div>
                        <div style={{ fontSize: '0.75rem', color: '#6e6e73' }}>{p.series}</div>
                      </div>
                    </td>
                    <td style={{ padding: '12px', color: '#1d1d1f' }}>{p.category}</td>
                    <td style={{ padding: '12px', color: '#0071e3' }}>{p.resolution.split(' ')[0]}</td>
                    <td style={{ padding: '12px', color: '#b25e00' }}>{p.nightVisionType}</td>
                    <td style={{ padding: '12px', color: '#1d1d1f', fontWeight: 600 }}>${p.price}</td>
                    <td style={{ padding: '12px', textAlign: 'right' }}>
                      <button
                        onClick={() => handleDeleteProduct(p.id)}
                        style={{
                          background: 'rgba(255, 69, 58, 0.1)',
                          border: 'none',
                          color: '#d70015',
                          padding: '6px 10px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                        }}
                        title="Delete Product"
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 4: Add New Product Form */}
        {activeTab === 'new-product' && (
          <div className="glass-card" style={{ padding: '36px', maxWidth: '800px', margin: '0 auto', backgroundColor: '#ffffff' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#1d1d1f', marginBottom: '8px' }}>Add New Surveillance Hardware</h3>
            <p style={{ color: '#6e6e73', fontSize: '0.85rem', marginBottom: '24px' }}>
              Create a new CCTV camera, NVR, or biometric terminal in the MERN backend database.
            </p>

            <form onSubmit={handleCreateProduct} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div>
                  <label className="form-label">Model Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Coloron Apex Bullet 4K"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Series Label</label>
                  <input
                    type="text"
                    placeholder="Ultra AIoT Series"
                    value={newProduct.series}
                    onChange={(e) => setNewProduct({ ...newProduct, series: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div>
                  <label className="form-label">Category *</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="form-input"
                  >
                    <option value="Network IP Cameras">Network IP Cameras</option>
                    <option value="PTZ Speed Domes">PTZ Speed Domes</option>
                    <option value="NVR & Video Storage">NVR & Video Storage</option>
                    <option value="Thermal & Industrial">Thermal & Industrial</option>
                    <option value="Access Control & Intercom">Access Control & Intercom</option>
                    <option value="Turbo HD / Analog">Turbo HD / Analog</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Price (USD) *</label>
                  <input
                    type="number"
                    required
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Badge Tag</label>
                  <input
                    type="text"
                    placeholder="Flagship 4K"
                    value={newProduct.badge}
                    onChange={(e) => setNewProduct({ ...newProduct, badge: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div>
                  <label className="form-label">Resolution Spec</label>
                  <input
                    type="text"
                    value={newProduct.resolution}
                    onChange={(e) => setNewProduct({ ...newProduct, resolution: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Optical Sensor</label>
                  <input
                    type="text"
                    value={newProduct.sensor}
                    onChange={(e) => setNewProduct({ ...newProduct, sensor: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Night Vision Range</label>
                  <input
                    type="text"
                    value={newProduct.nightVisionDistance}
                    onChange={(e) => setNewProduct({ ...newProduct, nightVisionDistance: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="form-label">Tagline (1 sentence headline)</label>
                <input
                  type="text"
                  value={newProduct.tagline}
                  onChange={(e) => setNewProduct({ ...newProduct, tagline: e.target.value })}
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">Full Engineering Description</label>
                <textarea
                  rows={3}
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'flex', gap: '14px', justifyContent: 'flex-end', marginTop: '12px' }}>
                <button type="button" onClick={() => setActiveTab('products')} className="btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Save to Catalog
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
