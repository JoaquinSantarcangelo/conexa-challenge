import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";

// Sign Up
export const signUp = async (req, res) => {
  const { email, password, username } = req.body;

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400,
  });

  res.status(200).json({ token });
};

// Sign In
export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const userFound = await User.findOne({ email });

  //User does not exists
  if (!userFound) return res.status(400).json({ message: "User not found" });

  //Compares Encrypted Password
  const matchPassword = await User.comparePassword(
    password,
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
