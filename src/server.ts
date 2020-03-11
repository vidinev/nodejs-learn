import express from 'express';
const cors = require('cors');
const bodyParser = require('body-parser');
import api from './api';
import { config } from './config';
import { loshSequelize } from './sequelize'
import { logErrors } from './helpers/log-errors-middleware';
import { errorHandler } from './helpers/error-handler-middleware';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', api);

app.use(logErrors);
app.use(errorHandler);

async function startServer() {
  try {
    await loshSequelize.authenticate();
  } catch (error) {
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
