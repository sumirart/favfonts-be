import jwt from "jsonwebtoken";
import createError from "http-errors";

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

export const signAccessToken = (payload: any) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, accessTokenSecret as string, {}, (err, token) => {
      if (err) {
        reject(createError.InternalServerError());
      }
      resolve(token);
    });
  });
};

export const verifyAccessToken = (token: string) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, accessTokenSecret as string, (err, payload) => {
      if (err) {
        const message =
          err.name == "JsonWebTokenError" ? "Unauthorized" : err.message;
        return reject(createError.Unauthorized(message));
      }
      resolve(payload);
    });
  });
};
