const User = require('../models/Address');

const addressdata = [
    {
        ID: '()',
        address: '6502 47th St.',
        city: 'Riverdale',
        state: 'MD',
        zip: '20737',
        country: 'US',
        user_id: '()',
    }
    {
        ID: '()',
        address: '7904 Colonial Ln.',
        city: 'Clinton',
        state: 'MD',
        zip: '20735',
        country: 'US',
        user_id: '()',
    }


];

const seedUser = () => User.bulkCreate(addressdata);

module.exports = seedAddress;