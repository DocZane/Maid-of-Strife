const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (message.member.id == client.auth.ownerID){
    var elist = client.emojis.map((e, x) => (e) + ' | ' +e.name);
    var lennum = elist.length
    var remaining = 2000;
    var pages =[];
    if ( args[0] === "count"){
      message.channel.send("I know "+lennum+" Emotes! Oh Dear!")
      return;
    };
      for (i=0; i<lennum+1; i++){
        remaining = remaining-elist.length
        console.log(remaining);
          if (remaining <= 0){
        remaining = 2000+remaining;
        message.channel.send(pages);
        pages = [];
        pages.push(elist[i]);
            } else {
              pages.push(elist[i]);
          }
        };
    };
}
