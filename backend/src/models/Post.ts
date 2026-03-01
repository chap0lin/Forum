
import knex from "../db";

export interface Post {
    id: number;
    topic_id: number;
    author_id: number;
    content: string;
    parent_post_id?: number | null;
    created_at?: Date;
    updated_at?: Date;
}

export const PostModel = {
    async findByTopicId(topicId: number): Promise<Post[]> {
        return knex("posts")
            .select("posts.*", "users.firstName", "users.lastName")
            .leftJoin("users", "posts.author_id", "users.id")
            .where({ topic_id: topicId })
            .orderBy("posts.created_at", "asc");
    },

    async create(post: Partial<Post>): Promise<Post> {
        const [created] = await knex("posts").insert(post).returning("*");
        return created;
    },

    async update(id: number, updates: Partial<Post>): Promise<void> {
        await knex("posts").where({ id }).update(updates);
    },

    async delete(id: number): Promise<void> {
        await knex("posts").where({ id }).delete();
    }
};
