import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts"],
    ignores: ["node_modules/", "dist/"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
    },
    plugins: {
      prettier: eslintPluginPrettier,
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          semi: true,
          tabWidth: 2,
          trailingComma: "es5",
        },
      ],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  eslintConfigPrettier,
];
