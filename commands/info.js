const Discord = require("discord.js");
//really basic info embed to keep the average user updated on what's happening
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(message.member.displayHexColor)
    .setTitle("Current Version: 1.0.4")
    .addField("Most Recent Updates:","+Added the >alchemy command, for, well, Alchemy!");
    message.channel.send({embed});
};
