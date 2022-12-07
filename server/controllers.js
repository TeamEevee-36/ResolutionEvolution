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
        res.cookie('user_id', rows[0].id, {
          maxAge: 36000000,
        });
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

controller.checkUsernameController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const checkUsernameQuery = `SELECT * FROM users WHERE username = '${username}'`;
    const { rows } = await User.query(checkUsernameQuery);

    if (rows[0]) {
      return res.json('Username taken');
    } else {
      return next();
    }
  } catch (err) {
    return next({
      log: `error occured in check username: ${err}`,
      status: 400,
      message: 'error in check username',
    });
  }
};

controller.signUpController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const checkUsernameQuery = `SELECT * FROM users WHERE username = '${username}'`;
    const signUpQuery = `INSERT INTO users(username, email, password) VALUES ($1, $2, $3) RETURNING *`;
    const values = [username, email, password];
    const { rows } = await User.query(signUpQuery, values);
    res.locals.signedUp = 'Account created! Please login';
    return next();
  } catch (err) {
    return next({
      log: `error occured in signUp: ${err}`,
      status: 400,
      message: 'error in signup',
    });
  }
};

controller.addResController = async (req, res, next) => {
  try {
    const {
      resolution_name,
      resolution_desc,
      category_name,
      days_todo,
      resolution_status,
    } = req.body;
    const { user_id } = req.cookies;
    console.log('req body in rescontroller', req.body);
    const addResQuery = `INSERT INTO resolutions(resolution_name, resolution_desc, category_name, user_id, days_todo, resolution_status)VALUES($1, $2, $3, $4, $5, $6)`;
    const values = [
      resolution_name,
      resolution_desc,
      category_name,
      user_id,
      days_todo,
      resolution_status,
    ];
    const { rows } = await User.query(addResQuery, values);
    res.locals.resolution = rows[0];
  } catch (err) {
    return next({
      log: `error occured in addRes: ${err}`,
      status: 400,
      message: 'error in addRes',
    });
  }
};
controller.getResolutions = async (req, res, next) => {
  try {
    console.log(req.cookies);
    const { user_id } = req.cookies;
    const getResolutionsQuery = `SELECT * FROM resolutions WHERE user_id = ${user_id}`;
    const { rows } = await User.query(getResolutionsQuery);
    res.locals.getResolutions = rows;
    return next();
  } catch (err) {
    return next({
      log: `error occured in getResolutions: ${err}`,
      status: 400,
      message: 'error in getResolutions',
    });
  }
};
//query for username, if username exists move to next step, if not, return username doesn't exist error
//query for password, conditional check if passwords match, if so, return success
//if not, return specific password incorrect error

module.exports = controller;
