export function initDatasource() {

    const Sequelize = require('sequelize');

    if (process.env.NODE_ENV === 'production') {
        const sequelize = new Sequelize(process.env.DATABASE_URL, {
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

        return sequelize;

    } else if (process.env.NODE_ENV === 'development') {
        const sequelize = new Sequelize(process.env.DATABASE_URL, {
            dialect: 'postgres',
            protocol: 'postgres',
            operatorsAliases: false
        });

        return sequelize;
    }
}