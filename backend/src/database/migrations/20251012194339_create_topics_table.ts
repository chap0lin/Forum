import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("topics", (table) => {
    // Basic Fields
    table.increments("id").primary();
    table.string("title").notNullable().unique(); // Unique prevents duplicate topic titles
    table.text("description"); // Use 'text' for longer descriptions

    // Boolean for home screen visibility
    table.boolean("show_on_home").notNullable().defaultTo(false);

    // Timestamps
    table.timestamps(true, true); // Adds created_at and updated_at
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("topics");
}
