import mongoose from "mongoose";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import Agent from "../model/agent.js";

const addAgent = asyncHandler(async (req, res) => {
  const {
    linkedin,
    name,
    password,
    phone,
    qualification,
    application,
    email,
    experience,
    facebook,
    image,
    twitter,
    instagram,
  } = req.body;

  const existAgent = await Agent.findOne({ email });

  if (existAgent) {
    res.status(404);
    throw new Error("Agent already exist");
  }

  await Agent.create({
    name,
    password,
    phone,
    qualification,
    application,
    email,
    experience,
    facebook,
    linkedin,
    image,
    instagram,
    twitter,
  });

  res.status(201).json({
    success: true,
    message: "account creation successful",
  });
});

const getAllAgent = asyncHandler(async (req, res) => {
  const agents = await Agent.find({});

  res.status(200).json({
    success: true,
    agents,
  });
});

const deleteAgent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);

  const deleteAgent = await Agent.findByIdAndDelete(id);

  if (deleteAgent) {
    res.status(201).json({
      success: true,
      deleteAgent,
    });
  } else {
    res.status(404).json({
      success: false,
    });
  }
});
export { addAgent, getAllAgent, deleteAgent };
