import { Router } from "express";
import { store } from "../store.js";

const router = Router();

// Placeholder "current user"
router.get("/me", (req, res) => {
  res.json(store.users[0]);
});

export default router;
