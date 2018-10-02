const express = require('express');
const winston = require('winston');
const mongoose = require('mongoose');
const socketIO = require('socket.io');
const path = require('path');
const http = require('http');
const routeConfig = require('./routes');

// const hbs = require('hbs');
const app = express();
const server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
module.exports.io = socketIO(server);
  require('./socket');
// require('./config');

// default options
// app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'hbs');
app.use(express.static(publicPath));
routeConfig(app);


mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/testingScoket', { useNewUrlParser: true })
  .then(() => {
    winston.info('Connected to Database Successfully');
    return server.listen(3000, (err) => {
      if (err) throw new Error(err);
      return winston.info(`Example app listening on port ${3000}}!`);
    });
  })
  .catch((err) => {
    if (err) throw err;
  });