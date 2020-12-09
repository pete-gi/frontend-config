module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@scripts/(.*)$": "<rootDir>/assets/scripts/$1",
    "^@Interfaces/(.*)$": "<rootDir>/assets/scripts/Interfaces/$1",
    "^@Types/(.*)$": "<rootDir>/assets/scripts/Types/$1",
    "^@Enums/(.*)$": "<rootDir>/assets/scripts/Enums/$1",
    "^@Handlers/(.*)$": "<rootDir>/assets/scripts/Handlers/$1",
    "^@Services/(.*)$": "<rootDir>/assets/scripts/Handlers/$1",
    "^@Layers/(.*)$": "<rootDir>/assets/scripts/Layers/$1",
  },
  testRegex: "(<rootDir>/assets/test/.*|(\\.|/)(spec))\\.ts$",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: [],
  verbose: true,
};
