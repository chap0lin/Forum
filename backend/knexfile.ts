// knexfile.ts
import type { Knex } from "knex";

// Update this object to suit your project needs
const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
    useNullAsDefault: true,
    migrations: {
      extension: "ts", // Tell knex to generate TypeScript migrations
    },
  },
};

export default config;
