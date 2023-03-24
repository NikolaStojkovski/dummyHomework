import pkg from "jsonwebtoken";
const { sign, verify } = pkg;

export const createAccesToken = (userId) =>
  sign({ userId }, "this_is_super_secret_key", {
    expiresIn: "1m",
  });

export const verifyAccessToken = (token) =>
  verify(token, "this_is_super_secret_key");

export const createRefreshToken = (userId) =>
  sign({ userId }, "this_is_refresh_secret", {
    expiresIn: "7d",
  });

export const verifyRefreshToken = (token) =>
  verify(token, "this_is_refresh_secret");
