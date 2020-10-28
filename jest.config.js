module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [
          151001, // unneeded warning about imports
        ],
      },
    },
  },

  collectCoverage: true,
  coverageDirectory: '../coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
    './src/model/': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  rootDir: 'src',
};
