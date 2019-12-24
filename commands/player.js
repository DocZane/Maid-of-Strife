const Discord = require("discord.js");
const Enmap = require("enmap");
const myEnmap = new Enmap({
  name: "playerData",
  dataDir: "../Maid of Strife Json dump/data"
});

exports.run = (client, message, args) => {
  var playerid= message.member.id + message.guild.id ;

if(!args[0]){
  if(myEnmap.has(playerid)){
    if (myEnmap.get(playerid,'registered')){
      const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .setColor(message.member.displayHexColor)
          .setTitle("Player File for: "+myEnmap.get(playerid,'name'))
          .addField("Character Name:", myEnmap.get(playerid,'charName'))
          .addField("Classpect", myEnmap.get(playerid,'classpect'))
          .addField("Chumhandle", myEnmap.get(playerid,'chumhandle'));
        message.channel.send({embed})
    }} else {
      message.reply("You haven't registered yet, please type the command >register or check with your DM!");

}}else{
  if(myEnmap.has(playerid,args[0])){
    myEnmap.set(playerid,args[1],args[0]);
  } else {
    message.reply("Sorry, that's not a valid variable!")
  }
}
}
