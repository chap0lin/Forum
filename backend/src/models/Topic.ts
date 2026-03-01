
import knex from "../db";

export interface Topic {
    id: number;
    title: string;
    content: string;
    author_id: number;
    is_locked: boolean;
    show_on_home: boolean;
    created_at?: Date;
    updated_at?: Date;
}

export const TopicModel = {
    async findAll(limit = 20, offset = 0): Promise<Topic[]> {
        return knex("topics")
            .select("topics.*", "users.firstName", "users.lastName", "users.role") // Join author usually needed
            .leftJoin("users", "topics.author_id", "users.id")
            .orderBy("topics.created_at", "desc")
            .limit(limit)
            .offset(offset);
    },

    async findById(id: number): Promise<Topic | undefined> {
        return knex("topics").where({ id }).first();
    },

    async create(topic: Partial<Topic>): Promise<Topic> {
        const [created] = await knex("topics").insert(topic).returning("*");
        return created;
    },

    async update(id: number, updates: Partial<Topic>): Promise<void> {
        await knex("topics").where({ id }).update(updates);
    }
};
