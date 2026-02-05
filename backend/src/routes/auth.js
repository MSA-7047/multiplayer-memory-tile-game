import { Router } from "express";
import { store } from "../store.js";

const router = Router();

router.post("/signup", (req, res) => {
  // Placeholder only — add hashing + validation later
  const { username, email } = req.body;
  const user = { id: `u${store.users.length + 1}`, username, email };
  store.users.push(user);
  res.json({ ok: true, user });
});

router.post("/login", (req, res) => {
  // Placeholder only — replace with real auth later
  res.json({ ok: true, token: "demo-token" });
});

export default router;
