var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var EmpresasRouter = require('./routes/empresas');
var EmpleadosRouter = require('./routes/empleados');
var ProyectosRouter = require('./routes/proyectos');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/empresas', EmpresasRouter);
app.use('/empleados', EmpleadosRouter);
app.use('/proyectos', ProyectosRouter);

module.exports = app;
