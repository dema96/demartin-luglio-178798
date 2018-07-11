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

router.get('/:id', function (req, res) {
    var squadra = squadre.getSquadra(req.params.id);

    res.send({
      "id":squadra.id,
      "Nome": squadra.name,
      "is_stil_in": squadra.is_still_in
    });
});
router.get('/getmatch', function (req, res) {
    var id = req.query.id;
    var opponent = req.query.opponent;
    var match = squadre.getMatch;


    res.send({
      "Opponent": match.opponent,
      "risultato": match.outcome
    });
});

router.put('/add', function(req, res){
      console.log(req.body.name);
      console.log(req.body.isin);
      var squadra = {
        id: 1,
        name: req.body.name,
        is_still_in: req.body.isin
      }
      squadre.putSquadra(squadra);
      res.send(
        "squadra inserita con successo"
      );
});

app.use('/team', router);

app.listen(port, function(){
  console.log('Server in ascolto porta 8080')
});
