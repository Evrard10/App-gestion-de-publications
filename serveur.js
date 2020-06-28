const express = require('express');
const app = express();



app.set('view engine', 'ejs');

app.get('/index',function(req, res){
    
    res.render('index');
})

app.listen(6000, function(){
    console.log("Mon serveur écoute sur le port 6000");
})