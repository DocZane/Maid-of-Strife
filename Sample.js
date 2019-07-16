var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `>`
    if (message.substring(0, 1) == '>') {
        var args = message.substring(1).split(' ');
        var cmd = args.shift().toLowerCase();
       
        args = args.splice(1);
        switch(cmd) {
            // >ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
				});
				break;
			case 'pong':
                bot.sendMessage({
                    to: channelID,
                    message: 'Ping!'
                });
				break;
            // Just add any case commands if you want to.
	    case 'amiadm':
		let DMrole = message.guild.role.find(r=>r.name === "DM");
		if(message.member.role.find(DMrole.id)){
			console.log ('it works.');
		bot.sendMessage({
			to: channelID,
			message: 'You are a DM, yay!'
})
		} else {
		bot.sendMessage({
			to: channelID,
			message: 'Sorry, you arent a DM!'
})}
		break;
}}})