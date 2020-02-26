import express from 'express';
const cors = require('cors');
const bodyParser = require('body-parser');
import { config } from './config';
import { loshSequelize } from './sequelize';
import api from './api';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', api);

function startServer() {
  loshSequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((err: any) => console.error('Unable to connect to the database:', err));

  app.listen(config.port, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Your server is ready! ${config.port}`);
  });
}

startServer();
