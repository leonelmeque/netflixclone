const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    "^-components(.*)$": "<rootDir>/src/components/$1",
    "^-hooks(.*)$": "<rootDir>/src/hooks/$1",
    "^-pages(.*)$": "<rootDir>/src/pages/$1",
    "^-css(.*)$": "<rootDir>/src/css/$1",
    "^-utilities(.*)$": "<rootDir>/src/utilities/$1",
    "^-services(.*)$": "<rootDir>/src/services/$1",
    "^-context(.*)$": "<rootDir>/src/context/$1",
    "^-ui-modules(.*)$": "<rootDir>/src/ui-modules/$1",
    "^-redux(.*)$": "<rootDir>/src/redux/$1",
    "^-types(.*)$": "<rootDir>/src/types/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  testEnvironment: 'jest-environment-jsdom'
}

module.exports = createJestConfig(customJestConfig)

