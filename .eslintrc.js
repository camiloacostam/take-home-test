module.export = {
  extends: ["airbnb", "prettier", "plugin:node/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off",
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      // your babel options
      presets: ["@babel/preset-react"],
    },
    sourceType: "module",
    allowImportExportEverywhere: true,
  },

  settings: {
    node: {
      tryExtensions: [".js", ".json", ".node", ".ts"],
    },
  },
}
