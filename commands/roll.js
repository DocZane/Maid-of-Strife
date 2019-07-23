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
var num = 3;
function roll(die){
num = (Math.floor(Math.random()*die)+1);
   if (num == 20){
     num = num + " Crit Sucess!";
   } else if (num == 1){
     num = num + " Crit Fail!";
   }
    }
roll(die);
return num

}
