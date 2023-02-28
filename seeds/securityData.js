const User = require('../models/Security');

const securitydata = [
    {
        ID: '()',
        securityQ1: 'What is your mothers maiden name?',
        securityQ1A: 'Smith',
        securityQ2: 'What was the color of your first car?',
        securityQ2A: 'Red',
        securityQ3: 'What is your paternal grandfathers middle name?',
        securityQ1A: 'Paul',
    },
    {
        ID: '()',
        securityQ1: 'What is your favorite food?',
        securityQ1A: 'Tacos',
        securityQ2: 'What is your favorite ice cream flavor?',
        securityQ2A: 'Chocolate',
        securityQ3: 'What is your favorite sport?',
        securityQ1A: 'Basketball',
    },
];

const seedSecurity = () => User.bulkCreate(securitydata);

module.exports = seedSecurity;
