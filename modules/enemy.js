const ImpStats = require("../basestats/imp.json");
const OgreStats = require("../basestats/ogre.json");
const BasiliskStats = require("../basestats/basilisk.json");
//translates the basestats of each underling to something that can be called in fight.js
exports.Imp = function(currentPR) {
  this.header = ImpStats.header;
  this.type = ImpStats.type;
  this.chp = ImpStats.chp;
  this.hp = ImpStats.hp;
  this.sd = ImpStats.sd;
  this.bd = ImpStats.bd;
  this.str = ImpStats.str;
  this.for = ImpStats.for;
  this.agl = ImpStats.agl;
  this.xp = ImpStats.xp;
  this.grist = ImpStats.grist;
  this.vit = ImpStats.vit;
}

exports.Ogre = function(currentPR) {
  this.header = OgreStats.header;
  this.type = OgreStats.type;
  this.chp = OgreStats.chp;
  this.hp = OgreStats.hp;
  this.sd = OgreStats.sd;
  this.bd = OgreStats.bd;
  this.str = OgreStats.str;
  this.for = OgreStats.for;
  this.agl = OgreStats.agl;
  this.xp = OgreStats.xp;
  this.grist = OgreStats.grist;
  this.vit = OgreStats.vit;
}

exports.Basilisk = function(currentPR) {
  this.header = BasiliskStats.header;
  this.type = BasiliskStats.type;
  this.chp = BasiliskStats.chp;
  this.hp = BasiliskStats.hp;
  this.sd = BasiliskStats.sd;
  this.bd = BasiliskStats.bd;
  this.str = BasiliskStats.str;
  this.for = BasiliskStats.for;
  this.agl = BasiliskStats.agl;
  this.xp = BasiliskStats.xp;
  this.grist = BasiliskStats.grist;
  this.vit = BasiliskStats.vit;
}
