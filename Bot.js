const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require("./auth.json");

client.on("ready",() => {
	console.log("I am Ready!");
});

client.on("message",(message) => {
	if(!message.content.startsWith(auth.prefix) || message.author.bot) return;
	if(message.content.startsWith(auth.prefix+"kill")&& message.member.id == auth.ownerID){
		message.channel.send("I can't let you do that, Dave.")
	} else 
	if(message.content.startsWith(auth.prefix+"ping")){
		message.channel.send("Pong!");
	} else
	if(message.content.startsWith(auth.prefix+"pong")){
		message.channel.send("Ping!")
	} else
	if(message.content.startsWith(auth.prefix+"Am I a Helper")){
		if(message.member.roles.get('596787797998698522')){
			message.channel.send("Yes, You are!")
		} else {
			message.channel.send("No, You aren't!")
	}} else
	if(message.content.startsWith(auth.prefix+"Am I a DM")){
		if(message.member.roles.get('596485222443515924')){
			message.channel.send("Yes, You are!")
		} else {
			message.channel.send("No, You aren't!")
	}} else
	if(message.content.startsWith(auth.prefix+"Am I a Player")){
		if(message.member.roles.get('596558352327114754')){
			message.channel.send("Yes, You are!")
		} else {
			message.channel.send("No, You aren't!")
	}}
});

client.login(auth.token)
