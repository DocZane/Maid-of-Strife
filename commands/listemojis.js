exports.run = (client, message, args) => {
  const emojiList = client.emojis.map((e, x) => (e) + ' | ' +e.name).join('\n');
  message.channel.send(emojiList);
}
