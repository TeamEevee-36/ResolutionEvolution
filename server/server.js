import express from 'express';
const path = require('path');
const app = express();
const PORT = 3000;

const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((err, req, res, next) => {
  console.log(err);
  const defaultErr = {
    log: 'Global Error handler triggered',
    status: 500,
    message: { err: 'Error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log('server listening on port ' + PORT));
module.exports = app;
