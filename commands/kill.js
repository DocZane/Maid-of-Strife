exports.run = (client, message, args) => {
  if (message.member.id == auth.ownerID)
    message.channel.send("I'm Sorry Dave, I'm Afraid I Can't Do That.", {tts: true});
}
