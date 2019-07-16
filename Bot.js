const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require("../Maid of Strife Json dump/auth.json");



client.on("ready",() => {
	console.log("I am Ready!");
});

client.on("message",(message) => {
	if (!message.content.startsWith(auth.prefix) || message.author.bot)
		return;

	const args = message.content.slice(auth.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (command === 'kill' && message.member.id == auth.ownerID) {
		message.channel.send("I'm Sorry Dave, I'm Afraid I Can't Do That.",{tts: true});
	}
	/*else if (message.member.id == auth.targetID) {
		message.channel.send("No.");
	}*/
	else if (command === 'ping') {
		message.channel.send("Pong!");
	}
	else if (command === 'pong') {
		message.channel.send("Ping!");
	}
	else if (command === 'strife') {
		const embed = new Discord.RichEmbed()
			.setColor(3447003)
			.setTitle("What do you want to Strife?")
			.addField("Imp", "test")
			.addField("Ogre", "test")
			.addField("Basilisk", "test");
			const emoji = client.emojis.find(emoji => emoji.name === 'one');
		message.channel.send({embed}).then(sentEmbed => {
			sentEmbed.react(emoji.id);
				//'🤔')
		});
		/*const one = client.emojis.find(emoji => emoji.name === 'one')
		message.react(one.id);*/
		/*message.react((client.emojis.find(emoji => emoji.name === 'two')).id);
		message.react((client.emojis.find(emoji => emoji.name === 'three')).id);*/
	}


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
});

client.login(auth.token)
