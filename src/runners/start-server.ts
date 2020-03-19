import { config } from '../config';
import { Express } from 'express';
import { Environment } from '../enums/environment.enum';

export async function startServer(app: Express) {
  app.listen(config.port, () => {
    if (config.env === Environment.Dev) {
      console.log(`Your server is ready! ${config.port}`);
    }
  });
}
