const Discord = require("discord.js");
//A command that lists every emote the bot has access to.
exports.run = (client, message, args) => {
  //checks if the user is me, since even as it is the spam is immense, and
  //no one else but me needs to see all of the emotes
  if (message.member.id == client.auth.ownerID){
    //converts the client.emojis list into a useful array
    var elist = client.emojis.map((e, x) => (e) + ' | ' +e.name);
    //checks how many emotes there is, and sets the beginning of printing the
    //list while avoiding the 2000 character limit
    var lennum = elist.length
    var remaining = 2000;
    //defines pages as an empty array
    var pages =[];
    //little subaction so I can see how many emotes we have on all servers
    if ( args[0] === "count"){
      message.channel.send("I know "+lennum+" Emotes! Oh Dear!")
      return;
    };
    //for every item in elist, sees if printing it will go over the 2000 character limit.
      for (i=0; i<lennum+1; i++){
        remaining = remaining-elist.length
          if (remaining <= 0){
        remaining = 2000+remaining;
        //prints the current lists of emotes, empties the pages list, and adds the last emote before continuing the loop
        message.channel.send(pages);
        pages = [];
        pages.push(elist[i]);
            } else {
              pages.push(elist[i]);
          }
        };
      message.channel.send(pages);
    };
}
