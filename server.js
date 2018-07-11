var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8080

var squadre = require('./squadre');



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var router = express.Router();

router.get('/team/:id', function (req, res) {
    var squadra = squadre.getSquadra(req.params.id);

    res.send({
      "id":squadra.id,
      "Nome": squadra.name,
      "is_stil_in": squadra.is_still_in
    });
});

app.use('/', router);

app.listen(port, function(){
  console.log('Server in ascolto porta 8080')
});
