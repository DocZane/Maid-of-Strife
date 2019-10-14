const Enemies = require("./enemy.js");
const Discord = require("discord.js");
const Roll = require("../commands/roll.js");
const Brawl = require("./brawl.js");
const Hbar = require("./hbar.js");

exports.fight = function(choice, message, client) {
//defines and sets dmg to 0 for later in the fight
var dmg = 0;
//sets enemy1 based on the choice made in >strife
  if (choice==0)
    enemy1 = new Enemies.Imp(0);
  else if (choice==1)
    enemy1 = new Enemies.Ogre(0);
  else
    enemy1 = new Enemies.Basilisk(0);
    let color = message.member.displayHexColor;
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(color)
    //lists stats of the enemy, like name, health, and an Initiative Roll.
    .setTitle(enemy1.header + " " + enemy1.type + " approached you!")
    .addField("HP", Hbar.hbar(enemy1,message,client))
    .addField("Avoidance Value:",10 + enemy1.agl)
    .addField("Initiative Roll",Roll.roll(20) + enemy1.agl)
    .addField("Roll Initiative! Is it higher than the enemy?","--------")
    //finds the picture of the underling and sets it as the thumbnail
    .setThumbnail(
      (client.emojis.find
        (emoji => emoji.name === (enemy1.type).toLowerCase()).url));
  message.channel.send({embed})
  //reacts with the two required emotes
  .then(sentEmbed => {
    sentEmbed.react("✅")
    .then(() => sentEmbed.react("❌"))
    .catch(() => console.log("fuk u"));
//waits for a reaction from the message sender and executes Brawl based on the choice.
    const filter = (reaction, user) => {
      return['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    sentEmbed.awaitReactions(filter, {max: 1, time:60000, errors: ['time']})
      .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '✅') {
          Brawl.brawl(message, client, enemy1, true, color, dmg);
        }
        else {
          Brawl.brawl(message, client, enemy1, false, color, dmg);
        }
        sentEmbed.delete();
      })


  });
}
