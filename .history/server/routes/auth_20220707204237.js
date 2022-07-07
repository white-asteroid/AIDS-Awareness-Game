import express from "express";
import { requireSignIn } from "../middleware/index.js";
import {Login,currentUser} from "../controllers/auth.js"
import { game1Score } from "../controllers/game.js";
const router = express.Router();

router.post("/login",Login);

router.get("/game1",game1Score);
router.get("/current-user",currentUser);
module.exports = router;