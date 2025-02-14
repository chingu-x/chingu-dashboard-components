import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      import: importPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "interface",
          format: ["PascalCase"],
        },
      ],
      "react/function-component-definition": [
        2,
        {
          namedComponents: "function-declaration",
        },
      ],
      "no-console": "error",
      "import/order": 2,
      "no-nested-ternary": 2,
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],
      "dot-notation": "off",
      "@typescript-eslint/dot-notation": "error",
    },
  },
  {
    ignores: [
      "dist/",
      "node_modules/**/*",
      ".storybook",
      "commitlint.config.mjs",
      "**/*.stories.tsx",
      "copy-types.js",
      "**/*.config.js",
      "vite.config.ts",
      "vitest.config.ts",
      "generate-exports.js",
      "chingu-theme.js",
    ],
  },
];
