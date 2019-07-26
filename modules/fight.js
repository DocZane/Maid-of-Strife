const Enemies = require("./enemy.js");
const Discord = require("discord.js");
const Roll = require("../commands/roll.js");
const Brawl = require("./brawl.js");

exports.fight = function(choice, message, client) {

  if (choice==0)
    enemy1 = new Enemies.Imp(0);
  else if (choice==1)
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
          message.channel.send("check");
          Brawl.brawl(message, client, enemy1, true, color);
        }
        else {
          message.channel.send("cross");
          Brawl.brawl(message, client, enemy1, false, color);
        }
        sentEmbed.delete();
      })
      .catch(collected => {
        console.log ("someone fucked up something.");
      });

  });
}
