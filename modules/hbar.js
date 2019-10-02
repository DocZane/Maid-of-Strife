//Also unfinished for now, should really be in Modules and crashes bot if ran alone
const Enemies = require("../modules/enemy.js");

exports.hbar = (enemy1, message, client) => {
var curHP= enemy1.chp;
var totalHP= enemy1.hp;
var baseBar = "####################";
var hp = (((curHP/totalHP)*100)/5)
  hp= Math.ceil(hp);
var cut = baseBar.slice(-hp);
var toDash = baseBar.slice(hp);
dash = toDash.replace(/#/g,'-')
var fBar = cut+dash;
  return(fBar);

}
