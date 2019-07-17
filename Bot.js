const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require("../Maid of Strife Json dump/auth.json");
const fs = require("fs");
const Enmap = require("enmap");

clent.auth = auth;

client.on("ready",() => {
	console.log("I am Ready!");
});

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    // If the file is not a JS file, ignore it (thanks, Apple)
    if (!file.endsWith(".js")) return;
    // Load the event file itself
    const event = require(`./events/${file}`);
    // Get just the event name from the file name
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    // without going into too many details, this means each event will be called with the client argument,
    // followed by its "normal" arguments, like message, member, etc etc.
    // This line is awesome by the way. Just sayin'.
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the command file itself
    let props = require(`./commands/${file}`);
    // Get just the command name from the file name
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    // Here we simply store the whole thing in the command Enmap. We're not running it right now.
    client.commands.set(commandName, props);
  });
});

/*client.on("message", async message => {
	if (!message.content.startsWith(auth.prefix) || message.author.bot)
		return;

	const args = message.content.slice(auth.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (command === 'kill' && message.member.id == auth.ownerID) {
		message.channel.send("I'm Sorry Dave, I'm Afraid I Can't Do That.",{tts: true});
	}
	else if (message.member.id == auth.targetID) {
		message.channel.send("No.");
	}
	else if (command === 'ping') {
		message.channel.send("Pong!");
	}
	else if (command === 'pong') {
		message.channel.send("Ping!");
	}
	else if (command === "listemojis") {
   	const emojiList = client.emojis.map((e, x) => (e) + ' | ' +e.name).join('\n');
   	message.channel.send(emojiList);
  }
	else if (command === 'strife') {
		const embed = new Discord.RichEmbed()
			.setColor(3447003)
			.setTitle("What do you want to Strife?")
			.addField("Imp", "test")
			.addField("Ogre", "test")
			.addField("Basilisk", "test");
			const imp = client.emojis.find(emoji => emoji.name === 'imp');
			const ogre = client.emojis.find(emoji => emoji.name === 'ogre');
			const basilisk = client.emojis.find(emoji => emoji.name === 'basilisk');
			message.channel.send({embed})
				.then(sentEmbed => {
					setTimeout(function(){sentEmbed.react(imp.id)}, 1000);
					setTimeout(function(){sentEmbed.react(ogre.id)}, 2000);
					setTimeout(function(){sentEmbed.react(basilisk.id)}, 3000);

					sentEmbed.awaitReactions()
				});
				//.catch (error) { console.error('dIdNt WoRk FuCkEr');


		const one = client.emojis.find(emoji => emoji.name === 'one')
		message.react(one.id);
		message.react((client.emojis.find(emoji => emoji.name === 'two')).id);
		message.react((client.emojis.find(emoji => emoji.name === 'three')).id);
	}*/


	/*else if (command === 'helper') {
		if (message.member.roles.find(role => role.name === 'Helper')) {
			message.channel.send("Yes, You are a helper!");
		}
		else {
			message.channel.send("No, You aren't a helper!");
		}
	}
	else if (command === 'dm') {
		if(message.member.roles.find(role => role.name === 'DM')) {
			message.channel.send("Yes, You are a DM!");
		}
		else {
			message.channel.send("No, You aren't a DM!");
		}
	}
	else if (command == 'player') {
		if(message.member.roles.find(role => role.name === 'Player')) {
			message.channel.send("Yes, You are a player!");
		}
		else {
			message.channel.send("No, You aren't a player!");
		}
	}*/

client.login(auth.token);
