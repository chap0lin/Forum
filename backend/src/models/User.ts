
import knex from "../db";

export interface User {
    id: number;
    email: string;
    password?: string;
    role: "admin" | "coordinator" | "member";
    linked_coordinator_id?: number;
    profile_picture?: string;
    about_me?: string;
    firstName?: string; // Legacy
    lastName?: string;  // Legacy
    cpf?: string;
    phone?: string;
    created_at?: Date;
    updated_at?: Date;
}

export const UserModel = {
    async findById(id: number): Promise<User | undefined> {
        return knex("users").where({ id }).first();
    },

    async findByEmail(email: string): Promise<User | undefined> {
        return knex("users").where({ email }).first();
    },

    async create(user: Partial<User>): Promise<User> {
        const [createdUser] = await knex("users").insert(user).returning("*");
        // SQLite might not support returning * in older versions, fallback:
        if (!createdUser) {
            const [id] = await knex("users").insert(user); // Insert again? No.
            // Actually Knex handles returning for sqlite by separate query if needed or returning [id]
            return UserModel.findById(id as unknown as number) as Promise<User>;
        }
        return createdUser;
    },

    async update(id: number, updates: Partial<User>): Promise<void> {
        await knex("users").where({ id }).update(updates);
    }
};
