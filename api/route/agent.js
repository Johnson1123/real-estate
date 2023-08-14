import express from "express";
import { addAgent, deleteAgent, getAllAgent } from "../controller/agent.js";

const router = express.Router();

router.post("/add-agent", addAgent);
router.get("/get-agent", getAllAgent);
router.delete("/delete-agent/:id", deleteAgent);

export default router;
