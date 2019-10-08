const Enemies = require("./enemy.js");
const Discord = require("discord.js");
const Roll = require('../commands/roll.js');

//basic loot generation, to be expanded on later. Pulls from the enemy file.
//requires enemy1 to be defined.
exports.loot= function(message,client,enemy1){
var lootz = (enemy1.xp+" XP, "+enemy1.grist+" Build Grist, "+Roll.roll(enemy1.vit)+" Vitality Gel.");
  return lootz;
};
