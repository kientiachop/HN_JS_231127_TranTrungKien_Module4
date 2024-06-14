import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('tasks_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
