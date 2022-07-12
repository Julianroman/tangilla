const {Sequelize} = require( 'sequelize');

const sequelize = new Sequelize({
    database: 'tangilla',
    username: 'root',
    password: 'root',
    host: process.env.HOST,
    dialect: 'mysql',
    ssl: false,
    dialectOptions: {},
    logging: false,
});


module.exports = {
    sequelize
}
