module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-typescript"],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
  ],
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            modules: "auto",
          },
          "jest",
        ],
      ],
      plugins: ["@babel/plugin-transform-runtime"],
    },
  },
};
