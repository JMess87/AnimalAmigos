const User = require('../models/User');
const bcrypt = require('bcrypt');

const userdata = [
    {
        first_name: 'Suvarna',
        last_name: 'Jadhav',
        email: 'jadhav.suvarna28@gmail.com',
        password: bcrypt.hashSync('suva', 10),
    },
    {
        first_name: 'Brian',
        last_name: 'McDonell',
        email: 'brian@gmail.com',
        password: bcrypt.hashSync('brian', 10),
    },
    {
        first_name: 'Pallavi',
        last_name: 'Talekar',
        email: 'talekar@gmail.com',
        password: bcrypt.hashSync('pallu', 10),
    },
    {
        first_name: 'Aditi',
        last_name: 'Pimple',
        email: 'pimple@gmail.com',
        password: bcrypt.hashSync('aditi', 10),
    }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
