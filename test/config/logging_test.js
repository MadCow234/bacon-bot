import { setLogger } from '../../src/config/logging';
import * as log from 'winston';
import * as assert from 'assert';


// Create a group of tests for the logging config class
describe('/config/logging.js', function() {
    
    // Create a group of tests for the setLogger() function
    describe('#setLogger()', function() {
        it('should return without failing', function() {
            setLogger();
        });
    });

});