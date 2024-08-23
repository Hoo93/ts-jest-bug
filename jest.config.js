module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/test/**/*.(test|spec).(ts|js)'],
  transform: {
    '^.+\\.(t|j)s$': ['ts-jest',
      {
        // this option occurs an error
        isolatedModules: true,
     }
    ]
  },
  coverageDirectory: 'coverage',
};