const Discord = require("discord.js");
//Press F to pay respects
exports.run = (client, message, args) => {
  let color = message.member.displayHexColor;
  if (color == '#000000') color = message.member.hoistRole.hexColor;
const embed = new Discord.RichEmbed()
.setColor(color)
.setTitle("**Any and all people who helped me come into being!**")
.addField("DocZane","Main Programmer, Founder")
.addField("Lord_GabeM","Assistant Programmer, Good Friend")
message.channel.send(embed);
}
