
import knex from "../db";

export interface Invitation {
    id: number;
    token: string;
    create_by_id: number;
    is_revoked: boolean;
    created_at?: Date;
    updated_at?: Date;
}

export const InvitationModel = {
    async findByToken(token: string): Promise<Invitation | undefined> {
        return knex("invitations").where({ token }).first();
    },

    async create(invite: Partial<Invitation>): Promise<Invitation> {
        const [created] = await knex("invitations").insert(invite).returning("*");
        // Fallback for sqlite if needed, but modern knex supports returning:
        return created;
    },

    async revoke(id: number): Promise<void> {
        await knex("invitations").where({ id }).update({ is_revoked: true });
    }
};
