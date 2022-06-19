import users from "../models/users";
import { hashPassword, comparePassword } from "../helpers/auth";
export async function register(req, res) {
  //  console.log("Register endpoint -> ",req.body);
  const { em, pw } = req.body;
  if (!em) return res.status(400).send("email daalne ka re baba");
  if (!pw || pw.length < 6) return res.status("Not a valid password");

  // for checking email

  const exist = users.findOne({ em });
  if (!exist) return res.status(400).send("not registered");
}

export const signup = async (req, res) => {
  console.log("Register endpoint -> ", req.body);
  const { name, em, pw } = req.body;
  if (!name) return res.status(400).send("name is requires");
  if (!em) return res.status(400).send("email daalne ka re baba");
  if (!pw || pw.length < 6) return res.status("Not a valid password");

  // for checking email

  const exist = users.findOne({ em });
  if (exist) return res.status(400).send("Email already registered");

//   const hashedPW = await hashPassword(pw);
//   try {
//     await users.save();
//     console.log("Reg users -> ", users);
//     return res.json({
//       ok: true,
//     });
//   } catch (err) {
//     console.log(" la la la registration failed = > ", err);
//     return res.status(400).send("error aa gya guys");
//   }
};
