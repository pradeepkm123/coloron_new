import { Router } from "express";
import { store } from "../db/store.js";

const router = Router();

// GET all quotes (Admin)
router.get("/", (req, res) => {
  try {
    const quotes = store.getQuotes();
    res.json({ success: true, count: quotes.length, data: quotes });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST submit project quote from calculator
router.post("/", (req, res) => {
  try {
    const { clientName, email, projectType } = req.body;
    if (!clientName || !email) {
      return res.status(400).json({ success: false, error: "Client name and email are required" });
    }

    const quote = store.addQuote(req.body);
    res.status(201).json({
      success: true,
      message: "Quote proposal created successfully. A Coloron enterprise engineer will review your project within 24 hours.",
      data: quote
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
