import { Sequelize } from "sequelize";

const database = process.env.database;
const username = process.env.username;
const password = process.env.password;
const host = process.env.host;

const sequelize = new Sequelize(
    `${database}`,
    `${username}`,
    password,
    {
        dialect: 'mysql',
        host: host,
        port: 3306,
        timezone: '+05:30',
        logging: false
    }
);

export { sequelize }