module.exports = {
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    moduleNameMapper:{
        "^@/components(.*)$": "<rootDir>/src/components/$1",
        "^@/pages(.*)$":"<rootDir>/src/pages/$1",
        "^@/css(.*)$":"<rootDir>/src/css/$1",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy"
    },
    testEnvironment:'jsdom',
    transformIgnorePatterns: ['<rooDir>/.next','/node_modules/'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
      },
    testMatch: [
        '**/__tests__/**/*.+(js)',
        '**/?(*.)+(test).+(js)'
    ],
    coverageThreshold: {
        global: {
          branches: 90,
          functions: 90,
          lines: 90,
          statements: 90,
        },
      },
    collectCoverageFrom:  [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/.next/**',
        '!**/tests/**',
        '!**/coverage/**',
        '!*.config.js',
      ],
    coverageReporters: [
        'json',
        'lcov',
        'text',
        'clover',
    ]
}