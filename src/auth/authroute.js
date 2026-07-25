import express from "express";
import { registercontroller, logincontroller } from "./authcontrollers.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "Auth route" });
});

router.post("/register", registercontroller);
router.post("/login", logincontroller);

export default router;
