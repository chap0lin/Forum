// src/users/user.model.ts
import knex from "knex";
import knexConfig from "../../knexfile";

const db = knex(knexConfig.development as knex.Knex.Config);

// src/users/user.model.ts

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  cpf?: string;
  phone?: string;
  birthDate?: string;
  sex?: string;
  level: string; // <-- adicionado
  permission_level: string; // <-- adicionado
  created_at: string;
  updated_at: string;
}

// Retorna todos os usuários
export const findAll = async (): Promise<User[]> => {
  return db("users").select("*");
};

// Retorna usuário por ID
export const findById = async (id: number): Promise<User | undefined> => {
  return db("users").where({ id }).first();
};

// Cria um novo usuário
export const create = async (
  newUser: Omit<User, "id" | "created_at" | "updated_at">
): Promise<User> => {
  const inserted = await db("users").insert(newUser).returning("*"); // retorna o registro completo
  return inserted[0];
};

// Atualiza um usuário existente
export const update = async (
  id: number,
  userUpdates: Partial<User>
): Promise<User | undefined> => {
  await db("users").where({ id }).update(userUpdates);
  return findById(id);
};

// Remove um usuário
export const remove = async (id: number): Promise<void> => {
  await db("users").where({ id }).del();
};

// Busca usuário por email
export const findByEmail = async (email: string): Promise<User | undefined> => {
  return db("users").where({ email }).first();
};
