const Enemies = require("./enemy.js");
const Discord = require("discord.js");
const Roll = require("../commands/roll.js");
const Message = require("../events/message.js");
const Loop = require("./loop.js");
const Hbar = require("./hbar.js");

exports.brawl = function(message, client, enemy1, playerFirst, dmg) {
  if (playerFirst){
    var damn = true;
      const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor(message.member.displayHexColor)
        .addField("HP", Hbar.hbar(enemy1,message,client))
        .addField("Enemy AV:",10+enemy1.agl)
        .addField("Your Turn!","Enter your damage if you hit, or press ➡ if you missed!")
        .addField("Form:",">[Damage Dealt]")
        .setThumbnail(
          (client.emojis.find
            (emoji => emoji.name === (enemy1.type).toLowerCase()).url));
      message.channel.send({embed})
      .then(sentEmbed => {
        sentEmbed.react("➡")
        const filter = (reaction, user) => {
          return['➡'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        const prefix = '>';
        const player = message.author.username;
        client.on('message', message => {
          if (message.content.indexOf(prefix) === 0 && damn) {
            if(message.author.username= player){
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
              if (isNaN(args[0])){
                message.channel.send("Try a number this time!");
              }
              else if(args[0]<0){
                message.channel.send("Damage can only be Positive, try again.")
              }
            else{
              message.delete();
              dmg=args[0];
              Loop.loop(message, client, enemy1, true, true, dmg);
              damn = false;
              sentEmbed.delete();
            }
          }
            return
        }
        });
        sentEmbed.awaitReactions(filter, {max: 1, time:60000, errors: ['time']})
          .then(collected => {
            const reaction = collected.first();
            if (reaction.emoji.name === '➡' && damn) {
              Loop.loop(message, client, enemy1, false, true, dmg);
              damn = false;
              sentEmbed.delete();
              return;
            }

              sentEmbed.delete();
          })
          .catch(collected => {
            console.log ("Timed out, unlikely to be a real issue.");
          });
    });
  }

  else {
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(message.member.displayHexColor)
      .addField("Enemy's Turn!",enemy1.type)
      .addField("HP", Hbar.hbar(enemy1,message,client))
      .addField("Attack Roll:",Roll.roll(20) + enemy1.str)
      .addField("Does it hit you?","Hit Check for yes and X for no.")
      .setThumbnail(
        (client.emojis.find
          (emoji => emoji.name === (enemy1.type).toLowerCase()).url))
    message.channel.send({embed})
    .then(sentEmbed => {

      sentEmbed.react("✅")
      .then(() => sentEmbed.react("❌"))
      .catch(() => console.log("fuk u 2"));

      const filter = (reaction, user) => {
        return['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
      };

      sentEmbed.awaitReactions(filter, {max: 1, time:60000, errors: ['time']})
      .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '✅') {
        Loop.loop(message, client, enemy1, true, false, dmg);
        }
        else {
          Loop.loop(message, client, enemy1, false, false, dmg);
        }
        sentEmbed.delete();
      })

    });
  }
};
