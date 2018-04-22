import { getLogger } from '../../src/config/logging';
import * as winston from 'winston';
import * as assert from 'assert';

const log = getLogger();

// Create a group of tests for the logging config class
describe('/config/logging.js', function() {
    
    // Create a group of tests for the getLogger() function
    describe('#getLogger()', function() {
        it('should return a Winston Logger object', function() {
            log.info("Start test #getLogger() on /config/logging.js");
            assert.equal(log instanceof winston.Logger, true);
            log.info("End test #getLogger() on /config/logging.js");
        });
    });

});