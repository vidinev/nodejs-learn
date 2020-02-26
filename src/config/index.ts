const dotenv = require('dotenv');
dotenv.config();

export const config =  {
  port: process.env.PORT,
  db: {
    name: process.env.DB_NAME,
    userName: process.env.DB_USERNAME,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST
  }
};

