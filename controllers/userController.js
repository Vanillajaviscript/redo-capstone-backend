import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import 'dotenv/config';
import UserModal from "../models/userSchema.js";

const secret = process.env.SECRET;
//function to prevent duplicate email registrations
export const signup = async (req, res) => {
  const {email, password, firstName, lastName} = req.body;
  try {
    const oldUser = await userModal.findOne({email});

    if(oldUser) {
      return res.status(400).json({message: "User already exists!"})
    }
    //password protection
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await UserModal.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`
    });
    const token = jwt.sign({email: result.email, id: result._id}, secret, {expiresIn: "1hr"});
    res.status(201).json({result, token});
  } catch(error) {
    res.status(500).json({message: "Error"});
    console.log(error)
  }
}