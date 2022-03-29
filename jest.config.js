const assetsKey = '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$'
module.exports = {
    testPathIgnorePatterns: ['/node_modules/'],
    setupFilesAfterEnv: [
        "<rootDir>/src/tests/setupTests.ts"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$":"<rootDir>/node_modules/babel-jest",
        [assetsKey]: 'ts-jest',
    },
    moduleNameMapper: {
        "\\.(scss|css|sass)$":"identity-obj-proxy",
        [assetsKey]: 'ts-jest',
    },
    testEnvironment: "jsdom"
};