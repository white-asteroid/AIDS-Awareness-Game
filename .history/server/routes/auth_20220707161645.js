import express from "express";
import {Login} from "../controllers/auth.js"

const router = express.Router();

router.post("/login",Login);
// router.get("/current-user",currentUser);
module.exports = router;