const {defaultsDeep} = require('lodash');

const commonConfig = {
  prettierPath: './node_modules/.bin/prettier',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/public/',
    '<rootDir>/coverage/',
    '<rootDir>/.github/',
  ],
};

module.exports = {
  collectCoverage: true,
  coverageReporters: [
    'clover',
    ['html-spa', {subdir: 'report'}],
    'json',
    'json-summary',
    'lcov',
    'text',
    'text-summary',
  ],
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '.d.ts',
  ],
  reporters: ['default', 'jest-junit', 'jest-sonar'],
  roots: ['<rootDir>/src', '<rootDir>/__tests__'],
  slowTestThreshold: 10,
  testEnvironment: 'jsdom',
  verbose: true,
  projects: [
    defaultsDeep(
      {
        preset: 'ts-jest',
        displayName: '__tests__',
        testMatch: ['<rootDir>/__tests__/**/*.test.*'],
      },
      commonConfig,
    ),
  ],
};
