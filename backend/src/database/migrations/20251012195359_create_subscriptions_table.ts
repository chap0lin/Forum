import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("subscriptions", (table) => {
    // Basic Fields
    table.increments("id").primary();

    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("SET NULL"); // If a user is deleted, their subscriptions are also deleted.

    // Amount stored in cents to avoid floating-point issues
    table.integer("amount").unsigned().notNullable();

    // Status of the subscription
    table.string("status").notNullable().defaultTo("active");

    // Timestamps
    table.timestamps(true, true); // Adds created_at and updated_at
  });
}

export async function down(knex: Knex): Promise<void> {}
