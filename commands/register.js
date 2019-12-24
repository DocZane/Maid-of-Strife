const Discord = require("discord.js");
const Enmap = require("enmap");

const myEnmap = new Enmap({
  name: "playerData",
  dataDir: "../Maid of Strife Json dump/data"
});

exports.run = (client, message, args) => {
  var playerid= message.member.id + message.guild.id ;
myEnmap.set(playerid,{
  name: message.author.username,
  charName: 'none',
  classpect: 'none',
  chumhandle: 'none',
  lunarSway: 'none',
  boondollars: 'none',
  xP: 0,
  vitality: 1,
  dVitality: 1,
  gelViscosity: 1,
  aspectPoints: 3,
  dAspectPoints: 3,
  maxPoints: 3,
  magicBullshit: 0,
  maxMagicBullshit: 0,
  aV: 10,
  awareness: 10,
  eHead: 'none',
  eHands: 'none',
  eTorso: 'none',
  eLegs: 'none',
  eShoes: 'none',
  eOther: 'none',
  charDesc: 'none',
  buildGrist: 0,
  shaleGrist: 0,
  captchalogCards: 4,
  sylModi: 'none',
  sylModiDesc: 'none',
  strifeSpecibus: 'none',
  strifeCard: 'none',
  inventory: 'empty',
  dInventory: 'empty',
  curEnemyhp: 1,
  curEnemy: 'Imp',
  initiative: 0,
  registered: true
})
    message.reply("You have been registered!")
}
