import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();

    // Dados de login
    table.string("email").notNullable().unique();
    table.string("password").notNullable();

    // Dados pessoais (da tela de registro)
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.string("cpf");
    table.string("phone");
    table.date("birthDate");
    table.string("sex");

    // Foreign key opcional para colaborador
    table
      .integer("colab_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("SET NULL");

    // Controle de permissões
    table.string("level").notNullable().defaultTo("user");
    table.string("permission_level").notNullable().defaultTo("user");

    // Timestamps
    table.timestamps(true, true); // created_at e updated_at
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
