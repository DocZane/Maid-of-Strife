const Enemies = require("./enemy.js");
const Discord = require("discord.js");
const Roll = require("../commands/roll.js");
//const HBar = require("./hBar.js");

exports.fight = function(choice, message, client) {

  if(choice==0)
    enemy1 = new Enemies.Imp(0);
  else if(choice==1)
    enemy1 = new Enemies.Ogre(0);
  else
    enemy1 = new Enemies.Basilisk(0);
    let color = message.member.displayHexColor;
    if (color == '#000000') color = message.member.hoistRole.hexColor;
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(color)
    .setTitle(enemy1.header + " " + enemy1.type + " approached you!")
    .addField("HP", enemy1.hp)
    .addField("Avoidance Value:",10 + enemy1.agl)
    .addField("Initiative Roll",Roll.roll(20) + enemy1.agl)
    .addField("Roll Initiative! Is it higher than the enemy?","--------")
    .setThumbnail(
      (client.emojis.find
        (emoji => emoji.name === (enemy1.type).toLowerCase()).url));
  message.channel.send({embed})
  .then(sentEmbed => {
    setTimeout(function(){sentEmbed.react("✅")}, 1000);
    setTimeout(function(){sentEmbed.react("❌")}, 2000);

    const filter = (reaction, user) => {
      return['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    sentEmbed.awaitReactions(filter, {max: 1, time:60000, errors: ['time']})
      .then(collected => {
        const reaction = collected.first();

    if (reaction.emoji.name === '✅') {
    var embed2 = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(color)
      .addField("Enemy AV:",10+enemy1.agl)
      .addField("Your Turn!","Enter your damage if you hit, or press ➡ if you missed!")
      .addField("Form:",">[Damage Dealt]");
        }
        else {
    var embed2 = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(color)
      .addField("Attack Roll:",Roll.Roll(20) + enemy1.str)
      .addField("Does it hit you?","Hit ✅ for yes and ❌ for no.");
        }
        sentEmbed.delete();
      })
  .catch(collected => {
    console.log ("someone fucked up something.");
      });

});


}
