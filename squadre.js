//squadre di calcio
var partiteFrancia = [];
var partiteBelgio = [];
var partiteInghilterra = [];
var partiteCroazia = [];
var partiteBrasile = [];
var partiteRussia = [];
var partiteSvezia = [];
var partiteItalia = [];
var idS = 8;
const francia = {
    id: 1,
    name: "Francia",
    is_still_in: true,
    matches: partiteFrancia
}
const inghilterra = {
    id: 2,
    name: "Inghilterra",
    is_still_in: true,
    matches: partiteInghilterra
}
const belgio = {
    id: 3,
    name: "Belgio",
    is_still_in: false,
    matches: partiteBelgio
}
const croazia = {
    id: 4,
    name: "Croazia",
    is_still_in: true,
    mathces: partiteCroazia
}
const russia = {
    id: 5,
    name: "Russia",
    is_still_in: false,
    matches: partiteRussia
}
const svezia = {
    id: 6,
    name: "Svezia",
    is_still_in: false,
    matches: partiteSvezia
}
const brasile = {
    id: 7,
    name: "Brasile",
    is_still_in: false,
    matches: partiteBrasile
}
const italia = {//scusate non mi ricordavo l'ottava
    id: 8,
    name: "Italia",
    is_still_in: false,
    matches: partiteItalia
}
var squadre = [francia, brasile, italia, svezia, russia, croazia, belgio, inghilterra];
partiteFrancia = [{opponent: "brasile", outcome:"W"}, {opponent: "belgio", outcome:"W"}]
partiteItalia = [{opponent: "svezia", outcome:"L"}]


exports.getSquadra = function(id){
  for (var i = 0; i < squadre.length; i++) {
    if(squadre[i].id == parseInt(id)){
      return squadre[i];
    }
  }
}
exports.putSquadra = function(squadra){
  idS = idS+1;
  squadra.id = idS
  squadre[squadre.length] = squadra;

}

exports.modifySquadra = function(id, name, is_still_in){
  for (var i = 0; i < squadre.length; i++) {
    if(squadre[i].id == parseInt(id)){
      squadre[i].name = name;
      squadre[i].is_still_in = is_still_in;
    }
  }
}
exports.getMatch = function(id, opponent){
  for (var i = 0; i < squadre.length; i++) {
    if(squadre[i].id == parseInt(id)){
      for(var j = 0; j < squadre[i].matches.length; j++)
        if(squadre[i].matches[j].opponent == opponent){
          return squadre[i].matches[j];
        }
    }
  }
}
exports.putMatch= function(idSquadra, match){
  for (var i = 0; i < squadre.length; i++) {
    if(squadre[i].id == parseInt(id)){
      squadre[i].matches[squadre[i].matches.length] = match;
    }
  }

}

exports.modifyMatch = function(id, name, is_still_in){
  for (var i = 0; i < squadre.length; i++) {
    if(squadre[i].id == parseInt(id)){
      squadre[i].name = name;
      squadre[i].is_still_in = is_still_in;
    }
  }
}
