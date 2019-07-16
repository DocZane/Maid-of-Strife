const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require("../Maid of Strife Json dump/auth.json");

client.on("ready",() => {
	console.log("I am Ready!");
});

client.on("message",(message) => {
	if (!message.content.startsWith(auth.prefix) || message.author.bot)
		return;
	if (message.content.startsWith(auth.prefix+"kill")&& message.member.id == auth.ownerID) {
		message.channel.send("I'm Sorry Dave, I'm Afraid I Can't Do That.");
	}
	else if(message.content.startsWith(auth.prefix+"ping")) {
		message.channel.send("Pong!");
	}
	else if (message.content.startsWith(auth.prefix+"pong")) {
		message.channel.send("Ping!");
	}
	else if(message.content.startsWith(auth.prefix+"helper")) {
		if (message.member.roles.get('596787797998698522')) {
			message.channel.send("Yes, You are a helper!");
		}
		else {
			message.channel.send("No, You aren't a helper!");
		}
	}
	else if(message.content.startsWith(auth.prefix+"dm")) {
		if(message.member.roles.get('596485222443515924')) {
			message.channel.send("Yes, You are a DM!");
		}
		else {
			message.channel.send("No, You aren't a DM!");
		}
	}
	else if(message.content.startsWith(auth.prefix+"player")) {
		if(message.member.roles.get('596558352327114754')) {
			message.channel.send("Yes, You are a player!");
		}
		else {
			message.channel.send("No, You aren't a player!");
		}
	}
});

client.login(auth.token)
