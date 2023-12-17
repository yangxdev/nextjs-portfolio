// jest.config.js
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    verbose: true,
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    // Other Jest configurations...

    // You may need to add moduleNameMapper if you're using CSS or other file types
    // moduleNameMapper: {
    //   '\\.(css|less|scss)$': '<rootDir>/path/to/identity-obj-proxy.js',
    // },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
