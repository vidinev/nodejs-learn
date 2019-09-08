import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const loshSequelize = new (Sequelize as any)(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  });

