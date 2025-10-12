import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('email').notNullable().unique();
    table.string('name').notNullable();
    table.string('password').notNullable();
        // Foreign Key for Collaborator (references another user)
    // It's nullable because it's an optional field.
    table.integer('colab_id').unsigned().references('id').inTable('users').onDelete('SET NULL');

    // Level
    table.string('level').notNullable();

    // Permission Level 
    table.string('permission_level').notNullable().defaultTo('user');

    // Timestamps
    table.timestamps(true, true); // Adds created_at and updated_at
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}
