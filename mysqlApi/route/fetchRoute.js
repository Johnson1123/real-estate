import express from "express";
import  fetchAgent  from "../controller/auth/fectch.js";

const router = express.Router();

router.get("/get-agent", fetchAgent);

export default router;
