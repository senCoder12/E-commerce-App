import { isValidObjectId } from "mongoose";
import jwt from "jsonwebtoken";

export const isValidMongodbId = (id) => {
  const isValid = isValidObjectId(id);
  return isValid;
};

export const generateToken = (content, jwt_key, option) => {
  return jwt.sign(content, jwt_key, option);
};

const hasSpecialChar = (password) => {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(password);
};
