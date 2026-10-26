import { Router } from "express";
import { store } from "../db/store.js";

const router = Router();

// GET all support downloads
router.get("/downloads", (req, res) => {
  try {
    const { category } = req.query;
    const downloads = store.getDownloads(category);
    res.json({ success: true, count: downloads.length, data: downloads });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET FAQs
router.get("/faq", (req, res) => {
  try {
    const faqs = store.getFaqs();
    res.json({ success: true, count: faqs.length, data: faqs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
