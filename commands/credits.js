const Discord = require("discord.js");
//Press F to pay respects
exports.run = (client, message, args) => {
const embed = new Discord.RichEmbed()
.setColor(message.member.displayHexColor)
.setTitle("**Any and all people who helped me come into being!**")
.addField("DocZane","Main Programmer, Founder")
.addField("Lord_GabeM","Assistant Programmer, Good Friend")
message.channel.send(embed);
}
