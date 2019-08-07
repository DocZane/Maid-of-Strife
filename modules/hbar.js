//Also unfinished for now, should really be in Modules and crashes bot if ran alone
const Enemies = require("../modules/enemy.js");

exports.hbar = (choice, message, client) => {
  if (choice==0)
    enemy1 = new Enemies.Imp(0);
  else if (choice==1)
    enemy1 = new Enemies.Ogre(0);
  else
    enemy1 = new Enemies.Basilisk(0);
var curHP= enemy1.chp;
var totalHP= enemy1.hp;
var baseBar = "####################";
var hp = (((curHP/totalHP)*100)/5)
if (curHP<0){
  message.channel.send("The Enemy is Dead.");
} else{
  hp= Math.ceil(hp);
var cut = baseBar.slice(-hp);
var toDash = baseBar.slice(hp);
dash = toDash.replace(/#/g,'-')
var fBar = cut+dash;
  return(fBar);

}
}
