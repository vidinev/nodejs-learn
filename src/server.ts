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

async function startServer() {
  try {
    await loshSequelize.authenticate();
  } catch (e) {
    console.error('Sequelize auth error');
  }

  app.listen(config.port, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Your server is ready! ${config.port}`);
  });
}

(async () => await startServer())();
