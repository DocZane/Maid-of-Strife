const Discord = require("discord.js");
const Fight = require(`../modules/fight.js`);

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(3447003)
    .setTitle("What do you want to Strife?")
    .addField("Imp", "test")
    .addField("Ogre", "test")
    .addField("Basilisk", "test");
    const imp = client.emojis.find(emoji => emoji.name === 'imp');
    const ogre = client.emojis.find(emoji => emoji.name === 'ogre');
    const basilisk = client.emojis.find(emoji => emoji.name === 'basilisk');
    message.channel.send({embed})
      .then(sentEmbed => {
        setTimeout(function(){sentEmbed.react(imp.id)}, 1000);
        setTimeout(function(){sentEmbed.react(ogre.id)}, 2000);
        setTimeout(function(){sentEmbed.react(basilisk.id)}, 3000);

        const filter = (reaction, user) => {
          if([imp.name, ogre.name, basilisk.name].includes(reaction.emoji.name) && user.id === message.author.id) {
            return true;
          }
          return false;
        }

        sentEmbed.awaitReactions(filter, {max: 1, time:60000, errors: ['time']})
          .then(collected => {
            const reaction = collected.first();

            if (reaction.emoji === imp) {
              choice = 0;
            }
            else if (reaction.emoji === ogre) {
              choice = 1;
            }
            else {
              choice = 2;
            }
            sentEmbed.delete();
            Fight.fight(choice, message, client);
          }
        );
        message.delete();
          /*.catch(collected => {
            sentEmbed.reply("u broked it boi");
          });*/
      });
}
