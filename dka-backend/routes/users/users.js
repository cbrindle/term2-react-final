const express = require('express');
const router = express.Router();
const userController = require('./controllers/usersController')

router.post('/login', (req, res) => {
  userController.login(req.body)
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.status(err.status).json(err)
    })
})

module.exports = router;