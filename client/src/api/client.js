const API_BASE = '/api';

export async function fetchProducts(filters = {}) {
  const params = new URLSearchParams();
  if (filters.category) params.append('category', filters.category);
  if (filters.resolution) params.append('resolution', filters.resolution);
  if (filters.search) params.append('search', filters.search);
  if (filters.flagship) params.append('flagship', filters.flagship);

  try {
    const res = await fetch(`${API_BASE}/products?${params.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch products');
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.error('API Error:', err);
    return [];
  }
}

export async function fetchProductBySlug(slug) {
  try {
    const res = await fetch(`${API_BASE}/products/${slug}`);
    if (!res.ok) throw new Error('Product not found');
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error('API Error:', err);
    return null;
  }
}

export async function fetchCategories() {
  try {
    const res = await fetch(`${API_BASE}/products/categories`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.error('API Error:', err);
    return ['All', 'Network IP Cameras', 'PTZ Speed Domes', 'NVR & Video Storage', 'Thermal & Industrial', 'Access Control & Intercom'];
  }
}

export async function submitQuote(quoteData) {
  const res = await fetch(`${API_BASE}/quotes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(quoteData),
  });
  return res.json();
}

export async function fetchQuotes() {
  try {
    const res = await fetch(`${API_BASE}/quotes`);
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.error('API Error:', err);
    return [];
  }
}

export async function submitContact(contactData) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contactData),
  });
  return res.json();
}

export async function fetchContacts() {
  try {
    const res = await fetch(`${API_BASE}/contact`);
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.error('API Error:', err);
    return [];
  }
}

export async function fetchDownloads(category) {
  try {
    const query = category ? `?category=${category}` : '';
    const res = await fetch(`${API_BASE}/support/downloads${query}`);
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.error('API Error:', err);
    return [];
  }
}

export async function fetchFaqs() {
  try {
    const res = await fetch(`${API_BASE}/support/faq`);
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.error('API Error:', err);
    return [];
  }
}
