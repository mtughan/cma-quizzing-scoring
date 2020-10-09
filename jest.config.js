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
  rootDir: 'src',
};
