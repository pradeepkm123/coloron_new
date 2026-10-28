import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import productsRouter from "./routes/products.js";
import quotesRouter from "./routes/quotes.js";
import contactRouter from "./routes/contact.js";
import supportRouter from "./routes/support.js";
import aiKnowledgeRouter from "./routes/aiKnowledge.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
app.use("/api/ai-knowledge", aiKnowledgeRouter);
app.use("/api/ai-knowledge.json", aiKnowledgeRouter);

// Serve client/dist if present (for single full-stack deploy on Render)
const clientDist = path.resolve(__dirname, "../../client/dist");
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));

  // Sitemap & robots fallback
  app.get("/sitemap.xml", (req, res) => {
    res.sendFile(path.join(clientDist, "sitemap.xml"));
  });
  app.get("/robots.txt", (req, res) => {
    res.type("text/plain");
    res.sendFile(path.join(clientDist, "robots.txt"));
  });

  // Client SPA fallback for non-API routes
  app.get("*", (req, res, next) => {
    if (req.originalUrl.startsWith("/api/")) return next();
    
    // Check if a pre-rendered route exists (e.g. /products/index.html)
    const normalizedPath = req.path.replace(/^\//, "").replace(/\/$/, "");
    const directFile = path.join(clientDist, normalizedPath, "index.html");
    if (normalizedPath && fs.existsSync(directFile)) {
      return res.sendFile(directFile);
    }

    res.sendFile(path.join(clientDist, "index.html"));
  });
}

// 404 handler for API routes
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
