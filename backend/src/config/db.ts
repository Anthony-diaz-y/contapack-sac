import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';
dotenv.config()

export const db = new Sequelize(process.env.DB_URL, {
  models: [__dirname + '/../models/**/*'],
  logging: false,
  dialect: 'mysql'
})