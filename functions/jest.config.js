module.exports = {
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/index.ts"],
  testMatch: ["**/__tests__/**/*.ts?(x)"],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1"
  },
  modulePathIgnorePatterns: [".history", "data.ts"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};
