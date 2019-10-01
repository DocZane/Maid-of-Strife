const Enemies = require("./enemy.js");
const Discord = require("discord.js");
const Roll = require("../commands/roll.js");
const Message = require("../events/message.js");

exports.brawl = function(message, client, enemy1, playerFirst, color, choice) {

  if (playerFirst){
    var damn = true;
      const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor(color)
        .addField("Enemy AV:",10+enemy1.agl)
        .addField("Your Turn!","Enter your damage if you hit, or press ➡ if you missed!")
        .addField("Form:",">[Damage Dealt]")
        .setThumbnail(
          (client.emojis.find
            (emoji => emoji.name === (enemy1.type).toLowerCase()).url));
      message.channel.send({embed})
      .then(sentEmbed => {
        sentEmbed.react("➡")
        .catch(() => console.log("fuk u"));

        const filter = (reaction, user) => {
          return['➡'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        const prefix = '>';
        client.on('message', message => {
          if (message.content.indexOf(prefix) === 0 && damn) {
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            message.channel.send('Test works I think? ' + args[0]);
            sentEmbed.delete();
            damn = false;
            return
          }
        });
        sentEmbed.awaitReactions(filter, {max: 1, time:60000, errors: ['time']})
          .then(collected => {
            const reaction = collected.first();
            if (reaction.emoji.name === '➡' && damn) {
              message.channel.send('No, it doesn\'t!');
              damn = false;
              sentEmbed.delete();
              return;
            }

              sentEmbed.delete();
          })
          .catch(collected => {
            console.log ("someone fucked up something in Brawl-Player.");
          });
    });
  }

  else {
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(color)
      .addField("Enemy's Turn!",enemy1.type)
      .addField("Attack Roll:",Roll.roll(20) + enemy1.str)
      .addField("Does it hit you?","Hit Check for yes and X for no.")
      .setThumbnail(
        (client.emojis.find
          (emoji => emoji.name === (enemy1.type).toLowerCase()).url))
    message.channel.send({embed})
    .then(sentEmbed => {

      sentEmbed.react("✅")
      .then(() => sentEmbed.react("❌"))
      .catch(() => console.log("fuk u"));

      const filter = (reaction, user) => {
        return['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
      };

      sentEmbed.awaitReactions(filter, {max: 1, time:60000, errors: ['time']})
      .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '✅') {
          const embed = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor(color)
             .addField("Damage Dealt to you:",Roll.roll(enemy1.bd)+enemy1.sd)
             .addField("Your options are:","Abscond and Fight")
             .setThumbnail(
               (client.emojis.find
                 (emoji => emoji.name === (enemy1.type).toLowerCase()).url));
          message.channel.send({embed});

        }
        else {
          return;
        }
        sentEmbed.delete();
      })
      .catch(collected => {
        console.log ("someone fucked up something in Brawl-Enemy.");
      });
    });

  }
};
