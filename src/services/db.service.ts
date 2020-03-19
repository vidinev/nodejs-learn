import { Sequelize } from 'sequelize-typescript';
import { config } from '../config';
import { User } from '../models/user/user.model';

export class DbService {
  private sequelize: Sequelize;
  private static singletonInstance: DbService;

  static get instance() {
    return this.singletonInstance || (this.singletonInstance = new this());
  }

  constructor() {
    this.sequelize = new Sequelize({
      database: config.db.name,
      dialect: 'postgres',
      username: config.db.userName,
      password: config.db.pass,
      host: config.db.host,
      models: [User]
    });
  }

  async connect() {
    await this.sequelize.authenticate();
  }
}
