
import {expressjwt} from "express-jwt";

 const requireSignIn = (res,req)=>{
    const token = req.headers.authorization.split(' ')[1]; 
    //Authorization: 'Bearer TOKEN'
    if(!token)
    {
        res.status(200).json({success:false, message: "Error!Token was not provided."});
    }
    //Decoding the token
    const decodedToken = jwt.verify(token,process.env.JWT_SECRET );
    res.status(200).json({success:true, data:{userId:decodedToken.userId,
     email:decodedToken.email}   
 });
}
export {requireSignIn}; 