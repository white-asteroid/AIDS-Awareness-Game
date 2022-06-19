import express from "express";
import {signup} from "../controllers/auth.js"

const router = express.Router();

router.post("/signup",signup);

module.exports = router;