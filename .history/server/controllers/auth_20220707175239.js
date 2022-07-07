import users from "../models/users";
import { hashPassword, comparePassword } from "../helpers/auth";
import jwt from "jsonwebtoken";

async function validateEmailAccessibility(email){

  // console.log("Check if ",email);
  const result = await users.findOne({ email: email });
  // console.log(result);
  return result === null;
}
export async function Login(req, res) {
  //  console.log("login endpoint -> ",req.body);
  const { em, pw } = req.body;
  if (em=="") return res.status(400).send("Please enter You email address");
  if (pw=="" ) return res.status(400).send("Not a valid password");

  // for checking email

  // const exist = users.findOne({ em });

  const email = {em};
  // const Luser ="";
  // const hashedPW = await hashPassword(pw);
  // const user = new users({email:em,password:hashedPW} );
  validateEmailAccessibility(email.em).then(async function(valid) {
    if (valid) {
      // console.log("Email not exist/ not valid");
      return res.status(400).send("Email not registered yet");
        } else {
          try{
      // return res.status(400).send("Email already used");
      const Luser = await users.findOne({email:em});
      console.log("YOUR email is L : ",Luser.email); 
      const match = await comparePassword(pw,Luser.password);
      if(!match) return res.status(400).send("Wrong password");
      const token = jwt.sign({_id:Luser._id},process.env.JWT_SECRET,{expiresIn:"7d"});
      Luser.password = undefined;
      Luser.secret = undefined;
      console.log(Luser);
     res.json({
      token,Luser,
     })
    }
    catch(err){
      console.log("LOGIN inside fun ",err);
    }
    }
  })
  // const match = await comparePassword(pw,)
}


export const signup = async (req, res) => {
  // console.log("Register endpoint -> ", req.body);
  const { name, em, pw } = req.body;
  if (!name) return res.status(400).send("name is requires");
  if (!em) return res.status(400).send("email daalne ka re baba");
  if (!pw || pw.length < 6) return res.status(400).send("Not a valid password");

  // for checking email
  // const exist = await users.findOne({em});
  // if (exist) return res.status(400).send("signing up error Email already registered : ");
  const email = {em};
  validateEmailAccessibility(email.em).then(function(valid) {
    if (valid) {
      console.log("Email is valid");
    } else {
      return res.status(400).send("Email already used");
    }
  });
  
  console.log("45 good");
  const hashedPW = await hashPassword(pw);
  console.log("47 good");
  
  const user = new users({name,email:em,password:hashedPW} );
  console.log("50 good");
  
  try {
   await user.save();
    // console.log("Reg users -> ", user);
    return res.json({
      ok: true,
    });
  } catch (err) { 
    console.log(" la la la registration failed ");
    // return res.status(400).send("NOT VALID DETAILS");
  }
};

export const currentUser = async (req,res) =>{
  console.log(req.user);
}
