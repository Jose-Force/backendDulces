const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require("method-override");

app.use(express.json());
app.use(express.urlencoded({
  extended:true
}));

//Configurar cabeceras y cors 
app.use((req,res,next)=>{ 
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Authorization,X-API-KEY,Origin,XRequested-With,Content-Type,Accept,Access-Control-Allow-Request-Method'); 
  res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE'); 
  res.header('Allow','GET,POST,OPTIONS,PUT,DELETE'); 
  next();
 }); 

/* Prefijos */

app.use('/api/dulces', require('./routers/dulces'))
app.use("/api/usuarios", require("./routers/usuarios"));
app.use("/api/auth", require("./routers/auth"));

module.exports=app;