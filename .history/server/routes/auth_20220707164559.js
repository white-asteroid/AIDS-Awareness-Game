import express from "express";
import {Login,currentUser} from "../controllers/auth.js"
const router = express.Router();

router.post("/login",Login);
router.get("/current-user",currentUser);
module.exports = router;