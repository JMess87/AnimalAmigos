const router = require('express').Router();
const Service = require('../../models/Services');

router.get('/', async (req, res) => {
    try {
        const serviceData = await Service.findAll();
        res.status(200).json(serviceData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const serviceData = await Service.findByPk(req.params.id);

        if (!serviceData) {
            res.status(404).json({ message: 'No service found with this id!' });
            return;
        }

        res.status(200).json(serviceData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const serviceData = await Service.create({
            requester: req.body.requester,
            responder: req.body.responder,
            service_name: req.body.service_name,
            service_description: req.body.service_description,
            service_price: req.body.service_price,
            service_status: req.body.service_status,
            service_date: req.body.service_date,
            service_time: req.body.service_time,
            service_location: req.body.service_location,
            service_limitations: req.body.service_limitations,
        });
        res.status(200).json(serviceData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const service = await Service.update(
            {
                requester: req.body.requester,
                responder: req.body.responder,
                service_name: req.body.service_name,
                service_description: req.body.service_description,
                service_price: req.body.service_price,
                service_status: req.body.service_status,
                service_date: req.body.service_date,
                service_time: req.body.service_time,
                service_location: req.body.service_location,
                service_limitations: req.body.service_limitations,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(service);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const serviceData = await Service.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!serviceData) {
            res.status(404).json({ message: 'No service found with this id!' });
            return;
        }

        res.status(200).json(serviceData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
