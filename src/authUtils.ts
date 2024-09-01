import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 11;

export const encryptPassword = (password: string) => {
  return bcrypt.hash(password, saltRounds);
};

export const createUnsecureUserInformation = (user: User) => {
  return {
    email: user.email,
  };
};

export const createTokenForUser = (user: User) => {
  return jwt.sign(
    createUnsecureUserInformation(user),
    "super-secret"
  );
};
