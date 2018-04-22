import * as log from 'winston';

function initDatasource() {

    const Sequelize = require('sequelize');

    const nodeEnv = process.env.NODE_ENV;
    const databaseURL = process.env.DATABASE_URL;

    if (nodeEnv === 'production') {
        const sequelize = new Sequelize(databaseURL, {
            dialect: 'postgres',
            protocol: 'postgres',
            operatorsAliases: false,
            dialectOptions: {
                ssl: true
            },
            pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
            }
        });

        log.info(`Set datasource for ${nodeEnv}`);
        return sequelize;

    } else if (nodeEnv === 'development') {
        const sequelize = new Sequelize(databaseURL, {
            dialect: 'postgres',
            protocol: 'postgres',
            operatorsAliases: false
        });

        log.info(`Set datasource for ${nodeEnv}`);
        return sequelize;
    }
}

export { initDatasource };