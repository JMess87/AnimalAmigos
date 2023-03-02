const router = require('express').Router();
const userRoutes = require('./userRoutes');
const serviceRoutes = require('./serviceRoutes');
const walletRoutes = require('./walletRoutes');

router.use('/user', userRoutes);
router.use('/services', serviceRoutes);
router.use('/wallet', walletRoutes);

module.exports = router;
