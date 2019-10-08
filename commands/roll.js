const Fight = require("../modules/fight.js");


//this is for when a person actually calls >roll {die}
exports.run = (client, message, args) => {
        //checks if the die is a valid roll or not (seeing if there is a d if NaN)
        if (isNaN(args[0])){
          if (args[0].match(/d/g)){
            //splits the dice up around the d
          var num = 0;
          var i;
          var die = args[0].toLowerCase();
          var split = die.indexOf("d");
          var j = die.substr(0,split);
          var j = Number(j);
          var sides = die.substr(split+1);
          var sides = Number(sides);
          //rolls a dice with 'sides' number of sides 'j' times
          for(i = 0; i < j; i++){
              rollit = (Math.floor(Math.random()*sides)+1);
              num = num+rollit;
              }
          message.reply("rolled "+die+" and got: "+num);
            } else message.reply("I'm sorry, I don't recognise that roll!")
        } else {
          message.delete();
          var num = (Math.floor(Math.random()*args[0])+1);
          message.reply("rolled 1d"+ args[0] + " and got: "+num);
        }
};
//this is for the bot to roll dice internally
exports.roll = (die) => {
    var num = 0;
    //check if the roll isnt a number. since this is for the bot, there
    //doesnt need to be a check if the dice roll is invalid.
    if (isNaN(die)){
        var i;
        var die = die.toLowerCase();
        var split = die.indexOf("d");
        var j = die.substr(0,split);
        var j = Number(j);
        var sides = die.substr(split+1);
        var sides = Number(sides);
        //rolls a dice with 'sides' number of sides 'j' times
        for(i = 0; i < j; i++){
            rollit = (Math.floor(Math.random()*sides)+1);
            num = num+rollit;
        }
    } else {
        num = (Math.floor(Math.random()*die)+1);
    }
    return num

}
