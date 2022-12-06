// const express = require('express');
const User = require('./models/models');

const controller = {};

controller.loginController = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const usernameQuery = `SELECT * FROM users WHERE username = '${username}'`; //select all from this username
    // const values = [username, password];
    const { rows } = await User.query(usernameQuery);
    console.log(rows);
    if (rows[0]) {
      console.log('rows[0]', rows[0]);
      if (password === rows[0].password) {
        res.locals.signedIn = rows[0].id;
        return next();
      } else {
        res.locals.signedIn = 'incorrect password';
        return next();
      }
    } else {
      res.locals.signedIn = 'user not found';
      return next();
    }
  } catch (err) {
    return next({
      log: `error in login controller: ${err}`,
      status: 400,
      message: {
        err: 'Error occurred in login controller',
      },
    });
  }
};

controller.signUpController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const signUpQuery = `INSERT INTO users(username, email, password) VALUES ($1, $2, $3) RETURNING *`;
    const values = [username, email, password];
    const { rows } = await User.query(signUpQuery, values);
    res.locals.signedUp = rows[0];
    return next();
  } catch (err) {
    return next({
      log: `error occured in signUp: ${err}`,
      status: 400,
      message: 'error in signup',
    });
  }
};

//query for username, if username exists move to next step, if not, return username doesn't exist error
//query for password, conditional check if passwords match, if so, return success
//if not, return specific password incorrect error

module.exports = controller;
