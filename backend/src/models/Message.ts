
import knex from "../db";

export interface Message {
    id: number;
    sender_id: number;
    receiver_id: number;
    content: string;
    is_read: boolean;
    created_at?: Date;
    updated_at?: Date;
}

export const MessageModel = {
    async create(message: Partial<Message>): Promise<Message> {
        const [created] = await knex("messages").insert(message).returning("*");
        return created;
    },

    async getConversation(userId1: number, userId2: number, limit = 50, offset = 0): Promise<Message[]> {
        return knex("messages")
            .where(function () {
                this.where({ sender_id: userId1, receiver_id: userId2 })
                    .orWhere({ sender_id: userId2, receiver_id: userId1 });
            })
            .orderBy("created_at", "asc") // Chat usually asc, or desc and reversed in UI
            .limit(limit)
            .offset(offset);
    },

    async markAsRead(senderId: number, receiverId: number): Promise<void> {
        await knex("messages")
            .where({ sender_id: senderId, receiver_id: receiverId, is_read: false })
            .update({ is_read: true });
    },

    // Get list of users with recent conversations
    async getRecentConversations(userId: number): Promise<any[]> {
        // This is a complex query, often simpler to get all messages involving user and group by other party
        // For MVP, simplistic approach:
        // Distinct receiver_id where sender_id = userId UNION distinct sender_id where receiver_id = userId
        // Knex raw might be easiest for "recent conversations"
        const sent = await knex("messages").distinct("receiver_id as partner_id").where({ sender_id: userId });
        const received = await knex("messages").distinct("sender_id as partner_id").where({ receiver_id: userId });

        const partnerIds = Array.from(new Set([...sent.map(s => s.partner_id), ...received.map(r => r.partner_id)]));

        if (partnerIds.length === 0) return [];

        return knex("users")
            .select("id", "firstName", "lastName", "email", "profile_picture")
            .whereIn("id", partnerIds as number[]);
    }
};
