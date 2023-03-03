const User = require('../models/User');
const bcrypt = require('bcrypt');

const userdata = [
    {
        first_name: 'Suvarna',
        last_name: 'Jadhav',
        email: 'suva@gmail.com',
        password: 'suva'
    },
    {
        first_name: 'Brian',
        last_name: 'McDonell',
        email: 'brian@gmail.com',
        password: 'brian'
    },
    {
        first_name: 'Pallavi',
        last_name: 'Talekar',
        email: 'talekar@gmail.com',
        password: 'pallu'
    },
    {
        first_name: 'Aditi',
        last_name: 'Pimple',
        email: 'pimple@gmail.com',
        password: 'aditi'
    },
    {
        first_name: 'Gabe',
        last_name: 'Perry',
        email: 'Gabe@gmail.com',
        password: 'gabe'
    },
    {
        first_name: 'Steve',
        last_name: 'Smith',
        email: 'Ssmith@gmail.com',
        password: 'Steve'
    }

];

const seedUser = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUser;
