import Agent from "../../model/agent.js";
import asyncHandler from "express-async-handler";

const fetchAgent = asyncHandler(async (req, res) => {
  const agents = await Agent.findAll();
  res.send({
    success: true,
    agents,
  });
});

export default fetchAgent;
