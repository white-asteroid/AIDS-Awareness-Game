
import {expressjwt} from "express-jwt";

 const requireSignIn = expressjwt({
    secret:process.env.JWT_SECRET,
    algorithms:["HS256"],
});

export {requireSignIn}; 