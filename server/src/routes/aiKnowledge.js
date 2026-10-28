import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

function getAiKnowledgeData() {
  const jsonPathInDist = path.resolve(__dirname, "../../../client/dist/api/ai-knowledge.json");
  const jsonPathInPublic = path.resolve(__dirname, "../../../client/public/api/ai-knowledge.json");

  if (fs.existsSync(jsonPathInDist)) {
    return JSON.parse(fs.readFileSync(jsonPathInDist, "utf-8"));
  }
  if (fs.existsSync(jsonPathInPublic)) {
    return JSON.parse(fs.readFileSync(jsonPathInPublic, "utf-8"));
  }

  return {
    status: "ok",
    company: "COLOR ON Vision",
    message: "Structured AI Knowledge Base available at /api/ai-knowledge.json"
  };
}

router.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json(getAiKnowledgeData());
});

router.get(".json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json(getAiKnowledgeData());
});

export default router;
