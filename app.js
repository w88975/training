var express=require('express');
var app=express();
var serveStatic = require('serve-static');
app.use('/starter', serveStatic('starter')); 
app.use('/components', serveStatic('components')); 
app.use('/images', serveStatic('images')); 
app.use('/finished', serveStatic('finished')); 
app.use('/DataBinding', serveStatic('DataBinding')); 
app.use('/api', serveStatic('api')); 
app.use('/starter', serveStatic('starter')); 
app.get('/', function(req, res){
   res.send('Hello');
});
app.listen(3000);