import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("news", (table) => {
        table.increments("id").primary();
        table.string("title").notNullable();
        table.text("content").notNullable();
        table.string("tags"); // Storing as comma-separated string or JSON

        // Foreign Key for the User (Author)
        table
            .integer("user_id")
            .unsigned()
            .references("id")
            .inTable("users")
            .onDelete("SET NULL");

        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("news");
}

