const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedService = require('./servicesData');

const seedAll = async () => {
    await sequelize.sync({ force: false });

    // await seedUser();

    await seedService();

    process.exit(0);
};

seedAll();
