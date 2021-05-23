import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const userFound = await User.findOne({ email });

  //User does not exists
  if (!userFound) return res.status(400).json({ message: "User not found" });

  //Compares Encrypted Password
  const matchPassword = await User.comparePassword(
    passowrd,
    userFound.password
  );

  //Password Doesnt Match
  if (!matchPassword)
    return res.status(401).json({ token: null, message: "Invalid password" });

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400,
  });

  res.json({ token });
};
