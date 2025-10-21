// src/auth/auth.controller.ts

import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as UserModel from "../users/user.model";
import config from "../config";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  try {
    // 1. Find the user by email
    const user = await UserModel.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." }); // Use a generic message
    }

    // 2. Compare the provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password!);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // 3. Generate a JWT
    const payload = {
      id: user.id,
      email: user.email,
      level: user.level, // Adicionado para compatibilidade com a interface
      permission_level: user.permission_level,
    };

    const token = jwt.sign(
      payload,
      config.jwtSecret,
      { expiresIn: "12h" } // Token expires in 12 hours
    );

    // 4. Send the token to the client
    res.status(200).json({
      message: "Login successful!",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Error during login process", error });
  }
};
