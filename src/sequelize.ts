import Sequelize from 'sequelize';

export const loshSequelize = new (Sequelize as any)('losh', 'postgres', 'Vi-3402403', {
  host: 'localhost',
  dialect: 'postgres'
});

