import bcrypt from "bcryptjs";
import User from "../models/userModel";
import JWT from "jsonwebtoken";

const protect = async (req, res, next) => {
  const authHeader = req?.headers?.authorization;

  if (!authHeader || !authHeader?.startsWith("Bearer")) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }

  const token = authHeader?.split(" ")[1];

  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
};

export default protect;
