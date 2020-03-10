const config = require('./jest.config');
config.testRegex = "unit\\.js$";
console.log('RUNNING UNIT TESTS');
module.exports = config;