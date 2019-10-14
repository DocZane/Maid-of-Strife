module.exports = (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;

  // Ignore messages not starting with the prefix (in auth.json)
  if (message.content.indexOf(client.auth.prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(client.auth.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

	client.user.setActivity(">help in "+ client.guilds.size +" servers!");
  // Run the command
  cmd.run(client, message, args);
};
