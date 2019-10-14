const Discord = require("discord.js");
const Fight = require(`../modules/fight.js`);

exports.run = (client, message, args) => {
    //pulls the color of the user for the edge of the embeded message.
    let color = message.member.displayHexColor;

    //Strife choosing menu as an embeded message
    const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor(color)
        .setTitle("What do you want to Strife?")
        .addField("Imp", "Any Tier")
        .addField("Ogre", "Teir 1 and up")
        .addField("Basilisk", "Teir 2 and up");
        //Sets up the reaction emojis for each enemy to fight
        const imp = client.emojis.find(emoji => emoji.name === 'imp');
        const ogre = client.emojis.find(emoji => emoji.name === 'ogre');
        const basilisk = client.emojis.find(emoji => emoji.name === 'basilisk');
    message.channel.send({embed})

    //reacts with the 3 choices of enemies for the player to choose
    .then(sentEmbed => {
        sentEmbed.react(imp.id)
        .then(() => sentEmbed.react(ogre.id))
        .then(() => sentEmbed.react(basilisk.id))
        .catch(error => {
            console.log("Someone fucked up something in Strife.");
        });

        //checks that the underling emotes exist, currently hosted on a test server.
        const filter = (reaction, user) => {
            if([imp.name, ogre.name, basilisk.name].includes(reaction.emoji.name) && user.id === message.author.id) {
                return true;
            }
            return false;
        }

        //sets the choice value based on which emote is clicked first
        sentEmbed.awaitReactions(filter, {max: 1, time:60000, errors: ['time']})
        .then(collected => {
            const reaction = collected.first();

            if (reaction.emoji === imp) {
                choice = 0;
            }
            else if (reaction.emoji === ogre) {
                choice = 1;
            }
            else {
                choice = 2;
            }
            //deletes the embeded message and the >strife command,runs Fight.js based on the choice
            sentEmbed.delete();
            Fight.fight(choice, message, client);
        });
        message.delete();
    });
}
