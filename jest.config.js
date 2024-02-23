const nextJest = require('next/jest');

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

// Any custom config you want to pass to Jest
const customJestConfig = {
	rootDir: './',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
	moduleNameMapper: {

        // Handle module aliases
        '^components/(.*)$': '<rootDir>/src/components/$1',
        '^pages/(.*)$': '<rootDir>/src/pages/$1',
        '^lib/(.*)$': '<rootDir>/src/lib/$1',
        '^styles/(.*)$': '<rootDir>/src/styles/$1',
        '^types/(.*)$': '<rootDir>/src/types/$1',
        '^utils/(.*)$': '<rootDir>/src/utils/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: ['<rootDir>/e2e/'],
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
