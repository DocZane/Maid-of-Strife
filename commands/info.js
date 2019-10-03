const Discord = require("discord.js");



exports.run = (client, message, args) => {
  let color = message.member.displayHexColor;
  if (color == '#000000') color = message.member.hoistRole.hexColor;
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(color)
    .setTitle("Current Version: 1.0.0")
    .addField("Most Recent Updates:","Basic strife loop achieved, welcome to 1.0.0!");
    message.channel.send({embed});
};
