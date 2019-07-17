exports.run = (client, message, args) => {
var emote = args[0]
var emoteName = client.emojis.find(emoji => emoji.name === emote);
message.channel.send(`${emoteName}`)
}
