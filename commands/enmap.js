const Enmap = require("enmap");


exports.run = (client, message, args) => {

const myEnmap = new Enmap({ name: 'playerData' });
var playerid= message.member.id + message.guild.id ;
var jsonFile = {

}
myEnmap.set(playerid, jsonFile)


  .then(message.reply(myEnmap.get(playerid)))
}
