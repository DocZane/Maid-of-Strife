const Enemies = require("./enemy.js");
const Discord = require("discord.js");
//const HBar = require("./hBar.js");

exports.fight = function(choice, message, client) {

  if(choice==0)
    enemy1 = new Enemies.Imp(0);
  else if(choice==1)
    enemy1 = new Enemies.Ogre(0);
  else
    enemy1 = new Enemies.Basilisk(0);
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(3447003)
    .setTitle(enemy1.header + " " + enemy1.type + " approached you!")
    .addField("HP", enemy1.hp)
    .addField("SD", enemy1.sd)
    .addField("BD", enemy1.bd)
    .setThumbnail(
      (client.emojis.find
        (emoji => emoji.name === (enemy1.type).toLowerCase()).url));
  message.channel.send({embed});
}
