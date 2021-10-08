const express = require('express');
const app = express();
const userController = require('../user/user.controller');
const cors = require('cors');
const opts = require('./cors.opts')

app.use(cors(opts));
app.use(express.json());
app.use('/api', userController);

module.exports = app;