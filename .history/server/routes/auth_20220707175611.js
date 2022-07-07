import express from "express";
import { requireSignIn } from "../middleware/index.js";
import {Login,currentUser} from "../controllers/auth.js"
const router = express.Router();

router.post("/login",Login);
router.get("/current-user",requireSignIn,currentUser);
module.exports = router;