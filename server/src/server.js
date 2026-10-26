import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import productsRouter from "./routes/products.js";
import quotesRouter from "./routes/quotes.js";
import contactRouter from "./routes/contact.js";
import supportRouter from "./routes/support.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(morgan("dev"));

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    timestamp: new Date().toISOString(),
    service: "Coloron Vision Surveillance API",
    version: "1.0.0"
  });
});

// Mount Routes
app.use("/api/products", productsRouter);
app.use("/api/quotes", quotesRouter);
app.use("/api/contact", contactRouter);
app.use("/api/support", supportRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: `Route ${req.originalUrl} not found` });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ success: false, error: err.message || "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`🚀 Coloron CCTV API Server running on port http://localhost:${PORT}`);
});
