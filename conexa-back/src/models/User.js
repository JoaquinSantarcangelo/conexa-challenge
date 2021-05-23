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

userSchema.statics.encryptPassword = async (password) => {
  const salt = bcrypt.genSalt(10);
  return await bcrypt.hash(password, salta);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default userSchema;
