// src/users/user.model.ts

import knex from 'knex';
import knexConfig from '../../knexfile';

const db = knex(knexConfig.development as knex.Knex.Config);

// Define the User type based on your migration
export interface User {
  id: number;
  email: string;
  name: string;
  password?: string; // Password is optional when returning user data
  colab_id?: number;
  level: string;
  permission_level: string;
  created_at: string;
  updated_at: string;
}

// Function to find all users
export const findAll = async (): Promise<User[]> => {
  return db('users').select('id', 'email', 'name', 'level', 'permission_level', 'created_at', 'updated_at');
};

// Function to find a user by ID
export const findById = async (id: number): Promise<User | undefined> => {
  return db('users').select('id', 'email', 'name', 'level', 'permission_level').where({ id }).first();
};

// Function to create a new user
export const create = async (newUser: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<User> => {
  const [userId] = await db('users').insert(newUser).returning('id');
  return findById(userId) as Promise<User>;
};

// Function to update an existing user
export const update = async (id: number, userUpdates: Partial<User>): Promise<User | undefined> => {
  await db('users').where({ id }).update(userUpdates);
  return findById(id);
};

// Function to delete a user
export const remove = async (id: number): Promise<void> => {
  return db('users').where({ id }).del();
};

export const findByEmail = async (email: string): Promise<User | undefined> => {
  return db('users').where({ email }).first();
};