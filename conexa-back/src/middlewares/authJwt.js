import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";

export const verifyToken = async (req, res, next) => {
  //Checks Jwt Token exits
  const token = req.headers["x-access-token"];
  if (!token) return res.status(403).json({ message: "Not token provided" });

  //Decodes JWT Token
  try {
    const decoded = await jwt.verify(token, config.SECRET);

    //Finds if user exits
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }

  next();
};
