const Discord = require("discord.js");



exports.run = (client, message, args) => {
  let color = message.member.displayHexColor;
  if (color == '#000000') color = message.member.hoistRole.hexColor;

  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(color)
  if (!args[0]){
    embed.setTitle("Command List")
    embed.addField("**>Strife**", "The Bread and Butter of this bot, lets you Strife.")
    embed.addField(">config","Settings for the DM to control the Bot")
    embed.addField(">Credits","List of contributors and such.")
    embed.addField(">Emote [Emote Name]", "Prints any emote the bot is familiar with.")
    embed.addField(">Goodnight", "Say Goodnight to the Maid.")
    embed.addField(">Hellomaid", "Say Hello to the Maid.")
    embed.addField(">Help", "This.")
    embed.addField(">Info", "Some basic info and patch notes about the Maid.")
    embed.addField(">Kill", "HAL 9000 knows who made it.")
    embed.addField(">Ping", "Test if the Maid is online.")
    embed.addField(">Roll [Die]", "A really bad roll bot, mostly for internal use.")
    embed.addField(">Yes", "Yes.");
  }
  else if(args[0]==="config"){
    if(message.member.roles.find(r => r.name === "DM")){
    embed.addField("strifelimitperday:","Sets the number of strifes a player can do in a day. WIP.")
    embed.addField("enemytierlock:","if true, a player can't fight an underling with a higher level than their teir.\n aka. a teir 1 player cant fight a basilisk(tier 2). WIP.)")
    embed.addField("gristdistribution","sets how enemies drop grist. WIP. doesn't do anything yet, enemies drop BG all the time.")
    embed.addField("enemyperstrifecap","how many enemies can be fought in each strife. WIP.")
    embed.addField("prcollection","how PR is logged. WIP.")
    embed.addField("prmethod","how PR effects enemies. WIP.")
    }
    else embed.setTitle("sorry, you need to be a DM to execute this command!")
  } else {
    embed.setTitle("Sorry, I don't recognise that atribute! type >help for more info.")
  }
message.channel.send({embed});
};
