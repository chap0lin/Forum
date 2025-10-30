// src/users/user.controller.ts

import { Request, Response } from "express";
import * as UserModel from "./user.model";
import bcrypt from "bcryptjs";

// GET /users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users", error });
  }
};

// GET /users/:id
export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id ?? "", 10);
    const user = await UserModel.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Error fetching user", error });
  }
};

// POST /users
export const createUser = async (req: Request, res: Response) => {
  try {
    console.log("Dados recebidos no backend:", req.body);

    const { firstName, lastName, email, password, cpf, phone, birthDate, sex } =
      req.body;

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      cpf,
      phone,
      birthDate,
      sex,
      level: "user", // adiciona o level padrão
      permission_level: "user", // adiciona o permission_level padrão
    });

    console.log("Usuário criado com sucesso:", newUser.id);

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ message: "Error creating user", error });
  }
};

// PUT /users/:id
export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id ?? "", 10);
    const { firstName, lastName, email, password, cpf, phone, birthDate, sex } =
      req.body;

    const userUpdates: any = {
      firstName,
      lastName,
      email,
      cpf,
      phone,
      birthDate,
      sex,
    };

    // Hash password if provided
    if (password) {
      userUpdates.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await UserModel.update(id, userUpdates);

    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Error updating user", error });
  }
};

// DELETE /users/:id
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id ?? "", 10);

    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await UserModel.remove(id);
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Error deleting user", error });
  }
};
