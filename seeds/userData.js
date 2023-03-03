const User = require('../models/User');
const bcrypt = require('bcrypt');

const userdata = [
    {
        first_name: 'Suvarna',
        last_name: 'Jadhav',
        email: 'suva@gmail.com',
        password: 'suva',
        phone_number: '2342342345'
    },
    {
        first_name: 'Brian',
        last_name: 'McDonell',
        email: 'brian@gmail.com',
        password: 'brian',
        phone_number: '5432342345'
    },
    {
        first_name: 'Pallavi',
        last_name: 'Talekar',
        email: 'talekar@gmail.com',
        password: 'pallu',
        phone_number: '8762342345'
    },
    {
        first_name: 'Aditi',
        last_name: 'Pimple',
        email: 'pimple@gmail.com',
        password: 'aditi',
        phone_number: '9872342345'
    }
];

const seedUser = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUser;
