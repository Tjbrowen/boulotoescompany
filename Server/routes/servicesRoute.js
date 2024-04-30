import express from "express";
import {
  createServices,
  getAllServices,
  getServices,
} from "../controllers/servCntrol.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/create", createServices);
router.get("/allserv", getAllServices);
router.get("/:id", getServices);
export { router as servicesRoute };
