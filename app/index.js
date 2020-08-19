const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

let port = process.env.PORT || 3000;

const data = require('./data.json');

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.get('/', function ( req, res ) {
    res.send("Welcome to DATA POC")
})

app.get('/health', function ( req, res ) {
    res.send("ok")
})

app.post('/', function ( req, res ) {
    res.send(data)
})

app.listen(port);
