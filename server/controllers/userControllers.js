import mongoose from "mongoose";
import User from "../models/userModel.js";
import { compareString, generateToken, hashString } from "../utils/index.js";

export const registerUser = async (req, res, next) => {
  const { name, email, password, pic } = req.body;
  // console.log(req.body);

  try {
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Some Fields are Missing");
    }
    const userExist = await User.findOne({ email });

    if (userExist) {
      res.status(400);
      throw new Error("Email Already Exists");
    }
    const hashedpassword = await hashString(password);
    const user = await User.create({
      name,
      email,
      password: hashedpassword,
      pic,
    });
    if (user) {
      res.status(200).json({
        name: user.name,
        _id: user._id,
        email: user.email,
        pic: user.pic,
        password: user.password,
        token: await generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("User Registration Failed");
    }
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Some Fields are Missing");
  }
  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400);
      throw new Error("User does Exist");
    }
    const isMatch = await compareString(password, user.password);

    if (!isMatch) {
      res.status(401);
      throw new Error("Incorrect Password");
    }

    res.status(200).json({
      user: user,
      token: await generateToken(user._id),
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
};
