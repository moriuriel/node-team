module.exports = {
  clearMocks: false,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/modules/**/services/*.service.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
}
