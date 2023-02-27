const router = require('express').Router();
const  User  = require('../../models/User');

router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      is_owner: req.body.is_owner
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
      const user = await User.update(
          {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            is_owner: req.body.is_owner
          },
          {
              where: {
                  id: req.params.id,
              },
          }
      );
      res.status(200).json(user);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
      const userData = await User.destroy({
          where: {
              id: req.params.id
          }
      });

      if (!userData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
      }

      res.status(200).json(userData);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email, password: req.body.password } });
    console.log("Here user is: " + userData);
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;


