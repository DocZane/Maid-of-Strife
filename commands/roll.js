const Fight = require("../modules/fight.js");



exports.run = (client, message, args) => {
var num = " ";
var die = args[0];
var nan = 0;
function roll(die){
 if (isNaN(die) == true){
   message.channel.send("I'm sorry, That's not a number!")
   nan=1;
   return
 } else {
   message.delete();
 num = (Math.floor(Math.random()*die)+1);
   if (num == die){
     num = num + " Crit Sucess!";
   } else if (num == 1){
     num = num + " Crit Fail!";
      }
    }
  }
  roll(die);
  if(nan === 0)
  message.reply("rolled 1d"+ die + " and got: "+num);
};
exports.roll = (die) => {
var num = 0;

function roll(die){
  if (isNaN(die) == true){
    var i;
    var die = die.toLowerCase();
    var split = die.indexOf("d");
    var j = die.substr(0,split);
    var j = Number(j);
    var sides = die.substr(split+1);
    var sides = Number(sides);
    for(i=0; i < j; i++){
    rollit = (Math.floor(Math.random()*sides)+1);
    num = num+rollit;
    };
  }
  else {
num = (Math.floor(Math.random()*die)+1);
    };
  }
  roll(die);
return num

}
