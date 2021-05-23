import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


export default userSchema;
