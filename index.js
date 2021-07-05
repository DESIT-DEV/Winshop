const express = require('express');
const morgan= require('morgan');
const path = require('path');

//inicios

const app=express();

//config
app.set('port',process.env.PORT || 4000);

app.set('view engine', 'pug');
//middleware

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//variables globales
app.use((req,res,next)=>{
    next();
});
//Rutas
app.use(require('./routes/index'));
app.use(require('./routes/auth'));
app.use('/cupones',require('./routes/cupones'));

//public
app.use(express.static(path.join(__dirname,'public')));

//server incia

app.listen(app.get('port'),()=>{
    
});











