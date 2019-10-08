const Discord = require("discord.js");

exports.run = (client, message, args) => {

  let color = message.member.displayHexColor;
  if (color == '#000000') color = message.member.hoistRole.hexColor;
  let isDM = message.guild.roles.find(r => r.name === 'DM');
  if (!isDM){
    message.channel.send("You need to create a DM role first!")
    return}
    if(!message.member.roles.find(r => r.name === "DM")){
      message.channel.send("Sorry, You aren't a DM!");
      return
    }
    else{
      if(!args[0]){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(color)
      .setTitle(message.author.username+", **Welcome to the Config Panel!**")
      .setDescription("**Here, you can check what the Maid does for your session.\nThis can be updated in the form of >config {setting} [new value].\n more info on the settings can be found in >help config.**")
      .addField("strifelimitperday","5, 10, **20**, 30, 50, unlimited")
      .addField("enemytierlock","true, **false**")
      .addField("gristdistribution","6 Grist, 12 Grist, 36 Grist, **BG only**")
      .addField("enemyperstrifecap","1, 2, **3**, 4, 5, no cap")
      .addField("prcollection","manual, all players, **max 4 players**")
      .addField("prmethod","Hard Scaling, Soft Scaling, **superduperhardmodelolXD**")
    message.channel.send(embed);
      };
    };
}
