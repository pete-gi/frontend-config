/** @type {import("snowpack").SnowpackUserConfig } */
const config = {
  mount: {
    "assets/scripts": "/scripts",
    "assets/styles": "/styles",
    "assets/images": "/images",
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
    out: "public",
    metaDir: ".compilation",
  },
  testOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    "@scripts": "./assets/scripts",
    "@Interfaces": "./assets/scripts/Interfaces",
    "@Types": "./assets/scripts/Types",
    "@Enums": "./assets/scripts/Enums",
    "@Handlers": "./assets/scripts/Handlers",
    "@Services": "./assets/scripts/Handlers",
    "@Layers": "./assets/scripts/Layers",
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
