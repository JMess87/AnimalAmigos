const User = require('../models/Comments');


// update seed objects
const addresscomments = [
    {
        ID: '()',
        address: '6502 47th St.',
        city: 'Riverdale',
        state: 'MD',
        zip: '20737',
        country: 'US',
        user_id: '()',
    }
];

const seedComments = () => User.bulkCreate(commentsdata);

module.exports = seedComments;