import { initDatasource } from '../../src/config/datasource';
import * as log from 'winston';
import * as sequelize from 'sequelize';
import * as assert from 'assert';


// Create a group of tests for the datasource config class
describe('/config/datasource.js', function() {

    // Create a group of tests for the initDatasource() function
    describe('#initDatasource()', function() {
        it('should return without failing', function() {
            var datasource = initDatasource();
        });
    });

});