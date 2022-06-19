import express from "express";
import {register} from "../controllers/auth.js"

const router = express.Router();

router.post("/login",register);

module.exports = router;