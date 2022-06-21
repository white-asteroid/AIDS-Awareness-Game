import users from "../models/users";
import { hashPassword, comparePassword } from "../helpers/auth";
export function register(req, res) {
  //  console.log("Register endpoint -> ",req.body);
  const { em, pw } = req.body;
  if (em=="") return res.status(400).send("email daalne ka re baba");
  if (pw=="" ) return res.status(400).send("Not a valid password");

  // for checking email

  const exist = users.findOne({ em });
  if (!exist) return res.status(400).send("not registered");
}

async function validateEmailAccessibility(email){

  // console.log("Check if ",email);
  const result = await users.findOne({ email: email });
  // console.log(result);
  return result === null;
}

export const signup = async (req, res) => {
  // console.log("Register endpoint -> ", req.body);
  const { name, em, pw } = req.body;
  if (!name) return res.status(400).send("name is requires");
  if (!em) return res.status(400).send("email daalne ka re baba");
  if (!pw || pw.length < 6) return res.status(400).send("Not a valid password");

  // for checking email
  
  // console.log("Email is ",{em},);
  // const exist = await users.findOne({em});
  // console.log("EXiste ",exist  );
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
