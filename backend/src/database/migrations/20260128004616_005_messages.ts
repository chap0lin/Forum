import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("messages", (table) => {
        table.increments("id").primary();
        table.integer("sender_id").unsigned().references("id").inTable("users").onDelete("CASCADE");
        table.integer("receiver_id").unsigned().references("id").inTable("users").onDelete("CASCADE");
        table.text("content").notNullable();
        table.boolean("is_read").defaultTo(false);
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("messages");
}

