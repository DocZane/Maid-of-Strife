const Discord = require("discord.js");
const Enmap = require("enmap");
const myEnmap = new Enmap({
  name: "alchemySupport",
  dataDir: "../Maid of Strife Json dump/data"
});

exports.run = (client, message, args) => {
const prefix = '>';
const andand = client.emojis.find(emoji => emoji.name === 'andand');
const oror = client.emojis.find(emoji => emoji.name === 'oror');
const reference = "!123456789?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
var alc1=true;
var alc2=false;
var cc1=[''];
var cc2=[''];
var ccf=[''];
message.channel.send("Enter the first captchalog code!");
  client.on('message', message => {
    var player = message.author.username
    if (message.content.indexOf(prefix) === 0 && alc1) {
      if(message.author.username= player){
          var cc1 = message.content.slice(prefix.length).trim().split("");
            if (cc1.length==8){
              myEnmap.set('cc1',cc1);
              message.channel.send("Enter the second captchalog code!")
              setTimeout(function(){alc1=false; alc2=true;}, 500);
            } else {
              message.channel.send("Sorry, that isn't a valid captchalog code, please try again!");
              }
      }
    }
  });
client.on('message', message => {
  cc1 = myEnmap.get('cc1');
  var player = message.author.username
  if (message.content.indexOf(prefix) === 0 && alc2) {
    if(message.author.username= player){
      var cc2 = message.content.slice(prefix.length).trim().split("");
        if (cc2.length==8){
          alc2=false;
          message.channel.send("Choose your Alchemy Method!")
          .then(sentAlc => {
              sentAlc.react(andand.id)
              .then(() => sentAlc.react(oror.id))
              const filter = (reaction, user) => {
                  if([andand.name,oror.name].includes(reaction.emoji.name) && user.id === message.author.id) {
                      return true;
                  }
                  return false;
              }
              sentAlc.awaitReactions(filter, {max: 1, time:60000, errors: ['time']})
              .then(collected => {
                  const reaction = collected.first();

                  if (reaction.emoji === andand) {
                  var andalc = true;
                  }
                  else {
                  var andalc = false;
                  }
                    for(i=0;i<8;i++){
                      cc1[i]=reference.search(cc1[i]);
                      cc2[i]=reference.search(cc2[i]);
                      console.log(cc1);
                    }

                    for(i=0;i<8;i++){
                      if (andalc){
                        if (cc1[i]<cc2[i]){
                          ccf[i]=cc1[i];
                        } else {
                          ccf[i]=cc2[i];
                        }
                      }else{
                        if(cc1[i]<cc2[i]){
                          ccf[i]=cc2[i];
                        }else{
                          ccf[i]=cc1[i];
                        }
                      }
                      console.log(ccf);
                    }
                    for(i=0;i<8;i++){
                      ccf[i]=reference.charAt(ccf[i]);
                      console.log(ccf);
                    }

                    setTimeout(function(){message.channel.send("Your new code is: **"+ccf.join('')+"**");},150);
              });
          });
        }
      } else {
        message.channel.send("Sorry, that isn't a valid captchalog code, please try again!");
        }
    }
  });
}
