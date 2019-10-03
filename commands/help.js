exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(color)
    .setTitle("Command List")
    .addField(">Emote [Emote Name]", "Prints any emote the bot is familiar with.")
    .addField(">Goodnight", "Say Goodnight to the Maid.")
    .addField(">Hellomaid", "Say Hello to the Maid.")
    .addField(">Help", "This.")
    .addField(">Info", "Some basic info and patch notes about the Maid.")
    .addField(">Kill", "HAL 9000 knows who made it.")
    .addField(">Ping", "Test if the Maid is online.")
    .addField(">Roll [Die]", "A really bad roll bot, mostly for internal use.")
    .addField(">Strife", "The Bread and Butter of this bot, lets you Strife.")
    .addField(">Yes", "Yes.");
    message.channel.send({embed});
};
