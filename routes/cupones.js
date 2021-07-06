const express = require('express');
const router = express.Router();
const pool= require('../config/database');

router.get('/', async (req, res)=> {
  const cupones= await pool.query('SELECT * FROM cupones');
    res.render('cupones',{cupones});
  });



router.get('/add',  (req, res)=> {
    res.render('cupones-add');
  });

router.post('/add', async (req, res)=> {
    const{nombre,descuento,vecnimiento}=req.body;
    const cupon={
      nombre,
      descuento,
      vecnimiento
    };
   await pool.query('INSERT INTO cupones set ?',[cupon]);
    // console.log(req.body);
    res.send('enviados');
  });


module.exports=router;