const Enemies = require("./enemy.js");
const Discord = require("discord.js");
const Roll = require("../commands/roll.js");

exports.brawl = function(message, client, enemy, playerFirst, color) {
  if (playerFirst){

      const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor(color)
        .addField("Enemy AV:",10+enemy.agl)
        .addField("Your Turn!","Enter your damage if you hit, or press ➡ if you missed!")
        .addField("Form:",">[Damage Dealt]");

      message.channel.send({embed});

  }
  else {
    const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor(color)
       .addField("Attack Roll:",Roll.roll(20) + enemy.str)
       .addField("Does it hit you?","Hit Check for yes and X for no.");
    message.channel.send({embed});
  }
}
