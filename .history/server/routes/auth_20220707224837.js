import express from "express";
import { requireSignIn } from "../middleware/index.js";
import {Login,currentUser} from "../controllers/auth.js"
import { game1Score,game2Score } from "../controllers/game.js";
const router = express.Router();

router.post("/login",Login);

router.post("/game1",game1Score);

router.post("/game2",game2Score);
router.get("/current-user",currentUser);
module.exports = router;