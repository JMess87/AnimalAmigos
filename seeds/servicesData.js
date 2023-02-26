const Service = require('../models/Services');

const servicedata = [
    // {
    //     requester: 1,
    //     responder: 1,
    //     service_name: 'Dog Sitting',
    //     service_description: 'dog sitting for you',
    //     service_price: '20',
    //     service_status: 'active',
    //     service_date: 2023-05-12,
    //     service_time: '01:11:12',
    //     service_location: 'columbia',
    //     service_limitations: 'none',
    // },
    // {
    //     requester: 3,
    //     responder: 3,
    //     service_name: 'Dog Cleaning',
    //     service_description: 'dog bath for your call',
    //     service_price: '20',
    //     service_status: 'active',
    //     service_date: 2023-05-11,
    //     service_time: '01:30',
    //     service_location: 'columbia',
    //     service_limitations: 'none',
    // }
];

const seedService = () => Service.bulkCreate(servicedata);

module.exports = seedService;