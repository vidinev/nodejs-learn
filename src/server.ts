import express from 'express';
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
import api from './api';

import { errorHandlerMiddleware } from './helpers/error-handler-middleware';
import { dbErrorHandlerMiddleware } from './helpers/db-error-handler-middleware';
import { startApp } from './runners/start-app'

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', api);

app.use(dbErrorHandlerMiddleware);
app.use(errorHandlerMiddleware);

(async () => await startApp(app))();
