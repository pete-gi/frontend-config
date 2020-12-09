const path = require("path");
const autoprefixer = require("autoprefixer");
const presetEnv = require("postcss-preset-env");
const cssNano = require("cssnano");
const combineMediaQuery = require("postcss-combine-media-query");
const extractMediaQuery = require("postcss-extract-media-query");

module.exports = {
  syntax: "postcss-scss",
  plugins: [
    autoprefixer,
    presetEnv,
    cssNano({
      preset: [
        "default",
        {
          zIndex: false,
        },
      ],
    }),
    combineMediaQuery,
    extractMediaQuery({
      output: {
        path: path.join(__dirname, "public/styles"),
        name: "[name].[query].[ext]",
      },
      extractAll: false,
      queries: {
        "(hover:none) and (pointer:coarse),(max-width:768px)": "mobile",
        "(hover:none) and (pointer:coarse),(min-width:769px) and (max-width:1280px)":
          "tablet",
        "(hover:hover) and (pointer:fine),(min-width:1281px)": "desktop",
        "(prefers-color-scheme:dark)": "dark",
        "(prefers-contrast:less),(prefers-contrast:no-preference)":
          "normal-contrast",
        "(prefers-reduced-motion:no-preference)": "motion",
        "(prefers-reduced-transparency:no-preference)": "transparency",
      },
    }),
  ],
};
