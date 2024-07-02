module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ["plugin:vue/recommended"],

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off",
    "vue/no-lone-template": "off",
  },

  parserOptions: {
    parser: "@babel/eslint-parser",
  },
};
