import express from "express";
import {
  createProjects,
  getAllProjects,
  getProjects,
} from "../controllers/projCntrol.js";

const router = express.Router();

router.post("/create", createProjects);
router.get("/allproj", getAllProjects);
router.get("/:id", getProjects);
export { router as projectsRoute };
