//lets players use any emote the bot knows. Possibly a bad idea.
exports.run = (client, message, args) => {
var emote = args[0];
//checks for the suppression argument, so the bot sends the emote without the ping.
var sup = args[1];
//checks if the bot knows a bot by the given name, and gives an error message if it doesn't.
var emoteName = client.emojis.find(emoji => emoji.name === emote);
if (emoteName === null){
  message.channel.send("I'm sorry, I don't know that emote!")
} else {
  message.delete();
    if(sup === 'sup'){
    message.channel.send(`${emoteName}`);
  } else {
    message.reply(`${emoteName}`);
  }
  }
}
