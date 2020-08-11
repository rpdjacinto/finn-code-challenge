export default {
  clearMocks: true,
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'json'
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/?(*.)test.mjs'
  ],
  transform: {
    '^.+\\.mjs$': 'babel-jest'
  },
  verbose: false
};
