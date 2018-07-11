var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var router = express.Router();

router.get('/', function (req, res) {
    res.send("Esame 11 luglio demartin");
});

app.use('/', router);

app.listen(port, function(){
  console.log('Server in ascolto porta 8080')
});
