
import knex from "../db";

export interface Page {
    id: number;
    slug: string; // e.g., 'terms', 'privacy', 'statute'
    title: string;
    content: string;
    updated_at?: Date;
}

export const PageModel = {
    async findBySlug(slug: string): Promise<Page | undefined> {
        return knex("pages").where({ slug }).first();
    },

    async create(page: Partial<Page>): Promise<Page> {
        const [created] = await knex("pages").insert(page).returning("*");
        return created;
    },

    async update(slug: string, updates: Partial<Page>): Promise<void> {
        await knex("pages").where({ slug }).update(updates);
    }
};
