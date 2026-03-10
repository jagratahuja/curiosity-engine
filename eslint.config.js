export default {
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {},
};
