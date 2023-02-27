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
    {
        ID: '()',S
        address: '7904 Colonial Ln.',
        city: 'Clinton',
        state: 'MD',
        zip: '20735',
        country: 'US',
        user_id: '()',
    }


];

const seedComments = () => User.bulkCreate(commentsdata);

module.exports = seedComments;