const express = require('express');
const router = express.Router();
const pool= require('../config/database');

router.get('/', function (req, res) {
    res.render('cupones');
  });

router.get('/add', function (req, res) {
    res.render('cupones-add');
  });

module.exports=router;