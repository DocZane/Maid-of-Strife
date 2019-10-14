const Enemies = require("./enemy.js");
const Discord = require("discord.js");
const Brawl = require("./brawl.js");
const Roll = require('../commands/roll.js');
const Hbar = require("./hbar.js");
const Loot = require('./loot.js');

exports.loop = function(message, client, enemy1, hitTrue, yourTurn, dmg) {

if(hitTrue && !yourTurn){
  const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setColor(message.member.displayHexColor)
     .addField("Damage Dealt to you:",Roll.roll(enemy1.bd)+enemy1.sd)
     .addField("Your options are:","Abscond or Fight")
     .setThumbnail(
       (client.emojis.find
         (emoji => emoji.name === (enemy1.type).toLowerCase()).url));
         message.channel.send({embed})
         .then(sentEmbed => {
           sentEmbed.react("◀")
           .then(() => sentEmbed.react("⚔"))
           .catch(() => console.log("fuk u 2"));

           const filter = (reaction, user) => {
             return['◀', '⚔'].includes(reaction.emoji.name) && user.id === message.author.id;
           };

           sentEmbed.awaitReactions(filter, {max: 1, time:60000, errors: ['time']})
           .then(collected => {
             const reaction = collected.first();

             if (reaction.emoji.name === '◀') {
            message.channel.send("You ran away!");
             }
             else {
               Brawl.brawl(message, client, enemy1, true, dmg);
             }
             sentEmbed.delete();
           })
         });

}
  else if (!hitTrue && !yourTurn) {
    Brawl.brawl(message, client, enemy1, true, dmg);
  }
  else if (!hitTrue && yourTurn)  {
    Brawl.brawl(message, client, enemy1, false, dmg);
  }
  else{
    enemy1.chp=enemy1.chp-dmg;
    dmg=0;
    if (enemy1.chp<=0){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(message.member.displayHexColor)
      .addField("HP:","Dead!")
      .addField("You won!","____")
      .addField("Rewards:",Loot.loot(message,client,enemy1))
      .setThumbnail(
        (client.emojis.find
          (emoji => emoji.name === (enemy1.type).toLowerCase()).url));
          message.channel.send({embed})
    }
    else{
    Brawl.brawl(message, client, enemy1, false, dmg);
    }
  };
  };
