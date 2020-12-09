const packageConfig = require("./package.json").config;

/** @type {import("snowpack").SnowpackUserConfig } */
const config = {
  mount: {
    [`${packageConfig.src}/scripts`]: "/scripts",
    [`${packageConfig.src}/styles`]: "/styles",
    [`${packageConfig.src}/images`]: "/images",
  },
  plugins: ["@snowpack/plugin-typescript"],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    sourceMaps: true,
    clean: false,
    out: packageConfig.dist,
    metaDir: ".compilation",
  },
  testOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    "@scripts": `./${packageConfig.src}/scripts`,
    "@Interfaces": `./${packageConfig.src}/scripts/Interfaces`,
    "@Types": `./${packageConfig.src}/scripts/Types`,
    "@Enums": `./${packageConfig.src}/scripts/Enums`,
    "@Handlers": `./${packageConfig.src}/scripts/Handlers`,
    "@Services": `./${packageConfig.src}/scripts/Handlers`,
    "@Layers": `./${packageConfig.src}/scripts/Layers`,
  },
};

switch (process.env.NODE_ENV) {
  case "test":
    config.plugins.push("@snowpack/plugin-babel");
    break;
  case "production":
    config.plugins.push([
      "@snowpack/plugin-optimize",
      {
        minifyJS: true,
        minifyHTML: false,
        preloadModules: true,
      },
    ]);
    break;
}

module.exports = config;
