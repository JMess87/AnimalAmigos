const sequelize = require('../config/connection');
// const seedUser = require('./userData');
// const seedService = require('./serviceData');
// const seedWallet = require('./walletData');

const seedAll = async () => {
    await sequelize.sync({ force: false });

    // await seedUser();

    // await seedService();

    // await seedWallet();

    process.exit(0);
};

seedAll();
