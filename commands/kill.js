//A special method just for me, really, since I'm the ownerID it's calling.
exports.run = (client, message, args) => {
  if (message.member.id == client.auth.ownerID)
  //basically a lesson that bots can use TTS. another reason to always have it off.
    message.channel.send("I'm Sorry Dave, I'm Afraid I Can't Do That.", {tts: true});
}
