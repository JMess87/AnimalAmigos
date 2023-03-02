const Service = require('../models/Services');

const servicedata = [
    {
        requester: 1,
        responder: 1,
        service_name: 'Dog Sitting',
        service_description: 'dog sitting for you',
        service_price: '20',
        service_status: 'active',
        service_date: 2023-05-12,
        service_time: '01:11:12',
        service_location: 'columbia',
        service_limitations: 'none',
        user_id: 1,
    },
    {
        requester: 2,
        responder: 2,
        service_name: 'Cat Sitting',
        service_description: 'cat sitting for you',
        service_price: '20',
        service_status: 'active',
        service_date: 2023-05-12,
        service_time: '01:11:12',
        service_location: 'columbia',
        service_limitations: 'none',
        user_id: 2,
    }
];

const seedService = () => Service.bulkCreate(servicedata);

module.exports = seedService;