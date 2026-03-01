import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("posts", (table) => {
    // Basic Fields
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("text").notNullable();

    // Foreign Key for the User (Author)
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("SET NULL"); // If a user is deleted, their posts are also deleted.

    // Foreign Key for the Topic
    table
      .integer("topic_id")
      .unsigned()
      .references("id")
      .inTable("topics")
      .onDelete("CASCADE");

    // Timestamps
    table.timestamps(true, true); // Adds created_at and updated_at
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("posts");
}
