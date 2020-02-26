import express from 'express';
const cors = require('cors');
const bodyParser = require('body-parser');
import { config } from './config';
import api from './api';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api);

function startServer() {
  app.listen(config.port, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Your server is ready !`);
  });
}

startServer();
