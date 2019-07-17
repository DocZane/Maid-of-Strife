
exports.run = (client, message, args) => {
  const Discord = require("discord.js");
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

        //sentEmbed.awaitReactions()
      });
}
