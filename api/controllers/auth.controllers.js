import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

// handle signup request
export const signup = async (req, res, next) => {
  // get user data from request body
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  // Check for admin credentials
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  let role = "user";
  // console.log("Admin Email: ", adminEmail);
  // console.log("Admin Password: ", adminPassword);
  // console.log(typeof process.env.ADMIN_EMAIL); // Should be 'string'
  // console.log(typeof process.env.ADMIN_PASSWORD);
  // console.log("Provided Email: ", email);
  // console.log("Provided Password: ", password);
  // console.log(typeof email); // Should be 'string'
  // console.log(typeof password);
  if (email === adminEmail && password === adminPassword) {
    role = "admin";
    // console.log("Admin Role Assigned");
  }

  // const newUser = new User({ username, email, password: hashedPassword, role });
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    role, // Include the role field when creating the new user
  });
  try {
    // save user to database
    await newUser.save();
    res.status(201).json("user created successfully");
    // const { password: pass, ...userWithoutPassword } = newUser._doc;
    // res.status(201).json(userWithoutPassword);
  } catch (error) {
    next(error);
  }
};

// handle signin request
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // check if user exists
    const validUser = await User.findOne({ email });

    if (!validUser) return next(errorHandler(404, "User not found"));

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) return next(errorHandler(401, "Wrong credentials"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = validUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...rest, role: validUser.role });
    // role: validUser.role;
  } catch (error) {
    next(error);
  }
};
// handle google signin request
export const google = async (req, res, next) => {
  try {
    // check if user already exists
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      // generate random password for google
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

// handle signout request
export const signOut = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("user has been logged out!");
  } catch (error) {
    next(error);
  }
};
