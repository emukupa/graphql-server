import Sequelize from 'sequelize';
import _ from 'lodash';
import casual from 'casual';
import sequelize from './sqlite_connection';

const Alien = sequelize.define('alien', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  planet: { type: Sequelize.STRING },
});

Alien.sync({ force: true }).then(() => {
  _.times(10, async () => {
    const firstName = await casual._first_name();
    const lastName = await casual._last_name();
    const planet = await casual.word;
    await Alien.create({
      firstName,
      lastName,
      planet,
    });
  });
});

export default Alien;
