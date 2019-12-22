const Enmap = require("enmap");


exports.run = (client, message, args) => {

  const myEnmap = new Enmap({
    name: "playerData",
    dataDir: "../Maid of Strife Json dump/data"
  });
var playerid= message.member.id + message.guild.id ;
if (args[0]=='print'){
  message.reply(myEnmap.get(playerid))
} else {
myEnmap.set(playerid,args[0])
}
};
