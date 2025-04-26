import docusaurus from "@docusaurus/eslint-plugin";
// Import the TypeScript ESLint parser
import typescriptParser from "@typescript-eslint/parser";

export default [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@docusaurus": docusaurus,
    },
    // Specify the parser for TypeScript and JSX files
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        // Specify the project for TypeScript parsing
        project: ["./tsconfig.json"],
      },
    },
    rules: {
      // Include recommended rules from the plugin
      ...docusaurus.configs.recommended.rules,
      // Add or override rules as needed
    },
  },
];
