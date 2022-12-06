const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/', controller.loginController, (req, res) => {
  return res.status(201).json(res.locals.signedIn);
});

module.exports = router;
