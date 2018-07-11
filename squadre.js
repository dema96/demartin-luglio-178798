//squadre di calcio
var partiteFrancia = [];
var partiteBelgio = [];
var partiteInghilterra = [];
var partiteCroazia = [];
var partiteBrasile = [];
var partiteRussia = [];
var partiteSvezia = [];
var partiteItalia = [];
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
partiteFrancia = [{opponent: brasile, outcome:"W"}, {opponent: belgio, outcome:"W"}]
partiteItalia = [{opponent: svezia, outcome:"L"}]


exports.getSquadra = function(id){
  for (var i = 0; i < squadre.length; i++) {
    if(squadre[i].id == parseInt(id)){
      return squadre[i];
    }
  }
}
