//import { errorHandler } from "./error";
//import jwt from "jsonwebtoken";
import jwt from "jsonwebtoken";
// Used to handle errors in the application
export const verifyToken = (req, res, next) => {
  // Get token from cookies
  const token = req.cookies.access_token;
  if (!token) return next(errorHandler(401, "Unauthorized"));
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Forbidden"));
    req.user = user;
    next();
  });
};
