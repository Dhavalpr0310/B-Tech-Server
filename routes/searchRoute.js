import express from "express";
import { searchResidency } from "../controllers/searchController.js";

const router = express.Router();

router.get("/", searchResidency); // e.g., /api/search?query=houseName

export default router;
