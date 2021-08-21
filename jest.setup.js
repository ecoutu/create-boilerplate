const {getLogger, LogLevel} = require('./src/lib/Logger');
const debug = require('debug');

require('jest-extended');
require('jest-chain');
require('jest-allure/dist/setup');

jest.setTimeout(10000);

// getLogger('*').setLogLevel(LogLevel.trace);
// debug.enable('*');
