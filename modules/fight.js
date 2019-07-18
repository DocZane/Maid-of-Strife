const Enemies = require("./enemy.js");

exports.fight = function(sentEmbed) {
  imp1 = new Enemies.Imp(5,10);
  sentEmbed.reply("yee " + imp1.hp + " " + imp1.strength);
}
