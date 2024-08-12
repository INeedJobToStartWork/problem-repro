import command from "eslint-plugin-command/config";
import tslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,

      parserOptions: {
        parser: true,
        tsconfigRootDir: process.cwd(),
        project: "./tsconfig.json",

        projectService: true,
      },
    },
    plugins: {
      "@typescript-eslint": tslint,
    },
  },
  command(),
];
