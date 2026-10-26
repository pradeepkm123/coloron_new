import { Router } from "express";
import { store } from "../db/store.js";

const router = Router();

// GET all inquiries (Admin)
router.get("/", (req, res) => {
  try {
    const contacts = store.getContacts();
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST inquiry / demo request
router.post("/", (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Name, email, and message are required" });
    }

    const contact = store.addContact(req.body);
    res.status(201).json({
      success: true,
      message: "Thank you. Your inquiry has been received. Our solutions team will contact you shortly.",
      data: contact
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
