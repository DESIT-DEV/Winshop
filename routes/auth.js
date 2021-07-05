const express = require('express');
const router = express.Router();
const pool= require('../config/database');

router.get('/auth', function (req, res) {
    res.render('auth');
  });

module.exports=router;