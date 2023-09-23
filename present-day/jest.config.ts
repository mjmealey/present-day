/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    '^.+\\.tsx?$': "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      esModuleInterop: true,
      allowSyntheticDefaultImports: true
    }
  }
}