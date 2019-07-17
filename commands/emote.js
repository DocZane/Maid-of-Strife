exports.run = (client, message, args) => {
var emote = args[0];
var sup = args[1];
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
