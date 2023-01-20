const express = require('express');
const https = require('https');
const http = require('http')
const fs = require('fs');
const router = require('./router/index')
const app = express();
const httport = process.env.PORT || 80;
const httpsport = process.env.PORT || 443;
const {engine} = require('express-handlebars');
const path = require('path');
https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/territoriofernando.ddns.net/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/territoriofernando.ddns.net/fullchain.pem')
}, app).listen(httpsport, ()=> {})
http.createServer(function(req, res){
    res.writeHead(301, {"Location":"https//" + req.headers['host'] + req.url});
    res.end();
}).listen(80);


//Habilitamos handlebars como view
app.engine('handlebars', engine({defaultLayout: 'layout'}));
app.set('view engine','handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router());