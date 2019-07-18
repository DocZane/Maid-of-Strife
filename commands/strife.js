const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
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
            if (reaction.emoji === imp)
              sentEmbed.reply('imp selected');
            else if (reaction.emoji === ogre)
              sentEmbed.reply('ogre selected');
            else
              sentEmbed.reply('basilisk selected');
            sentEmbed.delete();


          }
        )
          .catch(collected => {
            sentEmbed.reply("u broked it boi"); 
            return;
          });
      });
}
