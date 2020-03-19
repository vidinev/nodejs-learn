import { Express } from 'express';

import { startServer } from './start-server';
import { DbService } from '../services/db.service';

export async function startApp(app: Express) {
  await DbService.instance.connect();
  await startServer(app);
}
