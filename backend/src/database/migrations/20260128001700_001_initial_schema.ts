import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    // Users: Add profile fields
    await knex.schema.alterTable("users", (table) => {
        table.text("profile_picture").nullable();
        table.text("about_me").nullable();
        // Keep colab_id as is (mapped to linked_coordinator_id in code)
    });

    // Subscriptions: Add payment fields
    await knex.schema.alterTable("subscriptions", (table) => {
        table.string("external_subscription_id").nullable();
        table.dateTime("start_date").nullable();
        table.dateTime("last_payment_date").nullable();
    });

    // Topics: Add author and locking
    await knex.schema.alterTable("topics", (table) => {
        table.renameColumn("description", "content");
        table.integer("author_id").unsigned().references("id").inTable("users").onDelete("SET NULL");
        table.boolean("is_locked").defaultTo(false);
    });

    // Posts: Update for threaded replies
    await knex.schema.alterTable("posts", (table) => {
        table.renameColumn("text", "content");
        table.renameColumn("user_id", "author_id");
        table.integer("parent_post_id").unsigned().references("id").inTable("posts").onDelete("CASCADE");
        table.string("title").nullable().alter(); // Make title optional
    });
}

export async function down(knex: Knex): Promise<void> {
    // Revert changes
    await knex.schema.alterTable("users", (table) => {
        table.dropColumn("profile_picture");
        table.dropColumn("about_me");
    });

    await knex.schema.alterTable("subscriptions", (table) => {
        table.dropColumn("external_subscription_id");
        table.dropColumn("start_date");
        table.dropColumn("last_payment_date");
    });

    await knex.schema.alterTable("topics", (table) => {
        table.renameColumn("content", "description");
        table.dropColumn("author_id");
        table.dropColumn("is_locked");
    });

    await knex.schema.alterTable("posts", (table) => {
        table.renameColumn("content", "text");
        table.renameColumn("author_id", "user_id");
        table.dropColumn("parent_post_id");
        // Reverting title nullability is harder in sqlite, ignoring for now
    });
}

