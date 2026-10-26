import { Router } from "express";
import { store } from "../db/store.js";

const router = Router();

// GET all products with filtering
router.get("/", (req, res) => {
  try {
    const { category, resolution, search, flagship } = req.query;
    const products = store.getProducts({ category, resolution, search, flagship });
    res.json({ success: true, count: products.length, data: products });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET categories
router.get("/categories", (req, res) => {
  try {
    const categories = store.getCategories();
    res.json({ success: true, data: categories });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET single product by slug or id
router.get("/:slug", (req, res) => {
  try {
    const product = store.getProductBySlug(req.params.slug);
    if (!product) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }
    res.json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST new product (Admin)
router.post("/", (req, res) => {
  try {
    const { name, category, price, resolution } = req.body;
    if (!name || !category || !price) {
      return res.status(400).json({ success: false, error: "Name, category, and price are required" });
    }
    const product = store.addProduct(req.body);
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// PUT update product (Admin)
router.put("/:id", (req, res) => {
  try {
    const updated = store.updateProduct(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }
    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE product (Admin)
router.delete("/:id", (req, res) => {
  try {
    const deleted = store.deleteProduct(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }
    res.json({ success: true, message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
