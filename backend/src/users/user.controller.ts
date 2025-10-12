// src/users/user.controller.ts

import { Request, Response } from 'express';
import * as UserModel from './user.model';
import bcrypt from 'bcryptjs';

// GET /users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
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
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
};

// POST /users
export const createUser = async (req: Request, res: Response) => {
  try {
    const { password, ...userData } = req.body;
    if (!password) {
      return res.status(400).json({ message: 'Password is required' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = await UserModel.create({ ...userData, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

// PUT /users/:id
export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id ?? "", 10);
    const { password, ...userUpdates } = req.body;

    // If a new password is provided, hash it
    if (password) {
      userUpdates.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await UserModel.update(id, userUpdates);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

// DELETE /users/:id
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id ?? "", 10);
    await UserModel.remove(id);
    // Knex .del() doesn't return the deleted object, so we check existence before/after
    // For simplicity here, we'll just send a success message.
    res.status(204).send(); // 204 No Content is a common response for a successful delete
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};