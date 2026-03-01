
import knex from "../db";

export interface Subscription {
    id: number;
    user_id: number;
    status: "active" | "past_due" | "cancelled";
    external_subscription_id?: string;
    amount: number;
    start_date?: Date;
    last_payment_date?: Date;
    created_at?: Date;
    updated_at?: Date;
}

export const SubscriptionModel = {
    async findByUserId(userId: number): Promise<Subscription | undefined> {
        return knex("subscriptions").where({ user_id: userId }).first();
    },

    async create(sub: Partial<Subscription>): Promise<Subscription> {
        const [created] = await knex("subscriptions").insert(sub).returning("*");
        return created;
    },

    async update(id: number, updates: Partial<Subscription>): Promise<void> {
        await knex("subscriptions").where({ id }).update(updates);
    }
};
