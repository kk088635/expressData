const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

let port = process.env.PORT || 3000;

const battlefields = { 
    "SIMO" : {
        "ContractCompleted": [
            { "MSISDN": 61430006267, "PIN": 5175 },
            { "MSISDN": 61430006239, "PIN": 5175 }
        ],
        "MidContract": [
            { "MSISDN": 61430006277, "PIN": 5175 },
            { "MSISDN": 61430006268, "PIN": 5175 }
        ],
        "Month2Month":[
            { "MSISDN": 61430006491, "PIN": 1345 },
            { "MSISDN": 61430006419, "PIN": 1345 }
        ] },
    "HANDSET" : {
        "MidContract": [
            { "MSISDN": 61430006401, "PIN": 1345 },
            { "MSISDN": 61430006486, "PIN": 1345 }
        ],
        "Month2Month":[
            { "MSISDN": 61430006350, "PIN": 1345 }
        ] }
}

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.post('/', function (req, res) {
    res.send(battlefields)
    res.status(201)
  } 
})

app.listen(port);
