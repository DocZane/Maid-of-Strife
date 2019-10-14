const Discord = require("discord.js");
//really basic info embed to keep the average user updated on what's happening
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(message.member.displayHexColor)
    .setTitle("Current Version: 1.0.1")
    .addField("Most Recent Updates:","+added >credits\n+added >config, though it lacks functionality atm.");
    message.channel.send({embed});
};
