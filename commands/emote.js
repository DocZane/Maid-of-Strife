exports.run = (client, message, args) => {
var emote = args[0];
var emoteName = client.emojis.find(emoji => emoji.name === emote);
if (emoteName === null){
  message.channel.send("I'm sorry, I don't know that emote!")
} else {
  message.delete();
  message.channel.send(`${emoteName}`);
  }
}
