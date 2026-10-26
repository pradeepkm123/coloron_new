import { defaultProducts } from "../seed/productsData.js";
import { defaultDownloads, defaultFaqs } from "../seed/firmwareData.js";

// In-memory persistent state with auto-seeding
class Store {
  constructor() {
    this.products = [...defaultProducts];
    this.downloads = [...defaultDownloads];
    this.faqs = [...defaultFaqs];
    this.quotes = [
      {
        id: "q-1001",
        createdAt: new Date().toISOString(),
        clientName: "AeroTech Headquarters",
        email: "security@aerotech.com",
        phone: "+1 (555) 234-8900",
        projectType: "Commercial Campus",
        indoorCameras: 16,
        outdoorCameras: 24,
        preferredModel: "Apex Dome X Pro",
        storageRetentionDays: 60,
        estimatedTotal: 18450,
        status: "Review Pending",
        notes: "Need NDAA compliant 4K coverage with license plate capture at the main gates."
      }
    ];
    this.contacts = [
      {
        id: "c-2001",
        createdAt: new Date().toISOString(),
        name: "David Sterling",
        company: "Metropolis Logistics Hub",
        email: "d.sterling@metropolis-hub.com",
        subject: "Enterprise Demo Request for PTZ Matrix",
        message: "Interested in 36x optical tracking for a 20-acre logistics container yard.",
        status: "New"
      }
    ];
  }

  // Products
  getProducts(filters = {}) {
    let result = [...this.products];
    const { category, resolution, search, flagship } = filters;

    if (category && category !== "All") {
      result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (resolution && resolution !== "All") {
      result = result.filter(p => p.resolution.toLowerCase().includes(resolution.toLowerCase()));
    }
    if (flagship === "true") {
      result = result.filter(p => p.isFlagship);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    return result;
  }

  getProductBySlug(slug) {
    return this.products.find(p => p.slug === slug || p.id === slug);
  }

  addProduct(productData) {
    const newProduct = {
      id: `col-${Date.now()}`,
      slug: productData.slug || productData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      rating: 5.0,
      reviewsCount: 1,
      images: productData.images || ["https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80"],
      ...productData
    };
    this.products.unshift(newProduct);
    return newProduct;
  }

  updateProduct(id, updates) {
    const index = this.products.findIndex(p => p.id === id || p.slug === id);
    if (index === -1) return null;
    this.products[index] = { ...this.products[index], ...updates };
    return this.products[index];
  }

  deleteProduct(id) {
    const index = this.products.findIndex(p => p.id === id || p.slug === id);
    if (index === -1) return false;
    this.products.splice(index, 1);
    return true;
  }

  getCategories() {
    const categories = Array.from(new Set(this.products.map(p => p.category)));
    return ["All", ...categories];
  }

  // Quotes
  addQuote(quoteData) {
    const newQuote = {
      id: `q-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toISOString(),
      status: "New",
      ...quoteData
    };
    this.quotes.unshift(newQuote);
    return newQuote;
  }

  getQuotes() {
    return this.quotes;
  }

  // Contacts
  addContact(contactData) {
    const newContact = {
      id: `c-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toISOString(),
      status: "New",
      ...contactData
    };
    this.contacts.unshift(newContact);
    return newContact;
  }

  getContacts() {
    return this.contacts;
  }

  // Downloads & FAQ
  getDownloads(category) {
    if (!category || category === "All") return this.downloads;
    return this.downloads.filter(d => d.category.toLowerCase() === category.toLowerCase());
  }

  getFaqs() {
    return this.faqs;
  }
}

export const store = new Store();
