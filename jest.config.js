module.exports = {
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    moduleNameMapper:{
        "^@/components(.*)$": "<rootDir>/src/components/$1",
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
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
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