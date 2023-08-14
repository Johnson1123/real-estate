import express from "express";
import { addProperty } from "../controller/property.js";

const router = express.Router();

router.post("/add-property", addProperty);
router.get("/get-property", addProperty);

export default router;
