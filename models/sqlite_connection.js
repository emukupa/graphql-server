import Sequelize from 'sequelize';
import path from 'path';

const sequelize = new Sequelize('database', null, null, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: path.join(__dirname, './databases/sqlite/aliens.sqlite'),
  operatorsAliases: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log(
      `\n\u2705  SQL Connection has been established successfully.\n`
    );
  })
  .catch(err => {
    console.error(`\u274C  Unable to connect to the database:, ${err}\n`);
  });

export default sequelize;
