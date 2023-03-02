const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/profile', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    const user = userData.get({ plain: true });
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/service', (req, res) => {
  res.json("Inside services");
});

router.get('/wallet', (req, res) => {
  res.json("Inside wallet");
});

router.get('/upload', (req, res) => {
  res.render('upload');
});



module.exports = router;