import { Router } from "express";
import { store } from "../store.js";

const router = Router();

router.get("/", (req, res) => {
  // list view (small payload)
  const list = store.matches.map(m => ({
    id: m.id,
    title: m.title,
    startedAt: m.startedAt,
    difficulty: m.difficulty,
    players: m.players
  }));
  res.json(list);
});

router.get("/:id", (req, res) => {
  const m = store.matches.find(x => x.id === req.params.id);
  if (!m) return res.status(404).json({ error: "Match not found" });
  res.json(m);
});

// Later: POST to create matches, append moves, etc.
// router.post("/", ...)
// router.post("/:id/moves", ...)

export default router;
