
import expressJwt from "express-jwt";

export default const requireSignIn = expressJwt({
    secret:process.env.JWT_SECRET,
    algorithms:["HS256"],
});