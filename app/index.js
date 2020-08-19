const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

let port = process.env.PORT || 3000;

const data = require('./data.json');

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.post('/', function ( res ) {
    res.send(data)
})

app.listen(port);
