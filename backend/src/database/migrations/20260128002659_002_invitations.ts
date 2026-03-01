import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("invitations", (table) => {
        table.increments("id").primary();
        table.string("token").notNullable().unique();
        table.integer("create_by_id").unsigned().references("id").inTable("users").onDelete("CASCADE");
        table.boolean("is_revoked").defaultTo(false);
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("invitations");
}

