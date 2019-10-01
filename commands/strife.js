const Discord = require("discord.js");
const Fight = require(`../modules/fight.js`);


exports.run = (client, message, args) => {
  let color = message.member.displayHexColor;
  if (color == '#000000') color = message.member.hoistRole.hexColor;
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(color)
    .setTitle("What do you want to Strife?")
    .addField("Imp", "Any Tier")
    .addField("Ogre", "Teir 1 and up")
    .addField("Basilisk", "Teir 2 and up");
    const imp = client.emojis.find(emoji => emoji.name === 'imp');
    const ogre = client.emojis.find(emoji => emoji.name === 'ogre');
    const basilisk = client.emojis.find(emoji => emoji.name === 'basilisk');
    message.channel.send({embed})
      .then(sentEmbed => {
        sentEmbed.react(imp.id)
        .then(() => sentEmbed.react(ogre.id))
        .then(() => sentEmbed.react(basilisk.id))
        .catch(error => {
          console.log("Its probably fine in Strife.");
        });

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
