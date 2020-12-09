const packageConfig = require("./package.json").config;

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@scripts/(.*)$": `<rootDir>/${packageConfig.src}/scripts/$1`,
    "^@Interfaces/(.*)$": `<rootDir>/${packageConfig.src}/scripts/Interfaces/$1`,
    "^@Types/(.*)$": `<rootDir>/${packageConfig.src}/scripts/Types/$1`,
    "^@Enums/(.*)$": `<rootDir>/${packageConfig.src}/scripts/Enums/$1`,
    "^@Handlers/(.*)$": `<rootDir>/${packageConfig.src}/scripts/Handlers/$1`,
    "^@Services/(.*)$": `<rootDir>/${packageConfig.src}/scripts/Handlers/$1`,
    "^@Layers/(.*)$": `<rootDir>/${packageConfig.src}/scripts/Layers/$1`,
  },
  testRegex: `(<rootDir>/${packageConfig.src}/test/.*|(\\.|/)(spec))\\.ts$`,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: [],
  verbose: true,
};
