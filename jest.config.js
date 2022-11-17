const config = {
  "testEnvironment": "jsdom",
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
        '^.+\\.ts?$': 'ts-jest',
        // '\\.css$': 'some-css-transformer',
      },
        "moduleNameMapper": {
         "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
        //  "\\.(css|less)$": "<rootDir>/mocks/fileMock.js"
       }
   };
  
  module.exports = config
