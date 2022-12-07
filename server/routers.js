const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/signIn', controller.loginController, (req, res) => {
  return res.status(201).json(res.locals.signedIn);
});

router.post(
  '/createAccount',
  controller.checkUsernameController,
  controller.signUpController,
  (req, res) => {
    return res.status(201).json(res.locals.signedUp);
  }
);

router.post('/resolutions', controller.addResController, (req, res) => {
  return res.status(201).json(res.locals.resolution);
});

router.get('/getresolutions', controller.getResolutions, (req, res) => {
  return res.status(201).json(res.locals.getResolutions);
});

module.exports = router;
