const Enemies = require("./enemy.js");
const Discord = require("discord.js");
const Roll = require("../commands/roll.js");

exports.brawl = function(choice, message, client, enemy1, playerFirst, color) {

  if (playerFirst){
    function Player(){
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
        setTimeout(function(){sentEmbed.react("➡")}, 1000);

        const filter = (reaction, user) => {
          return['➡'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        sentEmbed.awaitReactions(filter, {max: 1, time:60000, errors: ['time']})
          .then(collected => {
            const reaction = collected.first();

            if (reaction.emoji.name === '➡') {
              Enemy();
              return
            }
            else {

            }
            sentEmbed.delete();
          })
          .catch(collected => {
            console.log ("someone fucked up something in Brawl-Player.");
          });

      });

    };
    Player();
  }
  else {
    function Enemy(){
    const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setColor(color)
       .addField("Enemy's Turn!","")
       .addField("Attack Roll:",Roll.roll(20) + enemy1.str)
       .addField("Does it hit you?","Hit Check for yes and X for no.")
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
            Player();
            return
          }
          sentEmbed.delete();
        })
        .catch(collected => {
          console.log ("someone fucked up something in Brawl-Enemy.");
        });
      });
    };
    Enemy();
  };
};
