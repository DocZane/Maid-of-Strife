const Discord = require("discord.js");

exports.run = (client, message, args) => {
//defines isDM as a role named DM
  let isDM = message.guild.roles.find(r => r.name === 'DM');
//checks if the server has a role named DM
  if (!isDM){
    message.channel.send("You need to create a DM role first!")
    return}
    //makes it so not DMs cant change or view the config
    if(!message.member.roles.find(r => r.name === "DM")){
      message.channel.send("Sorry, You aren't a DM!");
      return
    }
    else{
      //checks if there were any other arguments, and if not, prints the base config message.
      if(!args[0]){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(message.member.displayHexColor)
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
