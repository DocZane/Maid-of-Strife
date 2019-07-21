const ImpStats = require("../basestats/imp.json");
const OgreStats = require("../basestats/ogre.json");
const BasiliskStats = require("../basestats/basilisk.json");
exports.Imp = function(currentPR) {
  this.header = ImpStats.header;
  this.type = ImpStats.type;
  this.hp = ImpStats.hp;
  this.sd = ImpStats.sd;
  this.bd = ImpStats.bd;
  this.str = Impstats.str;
  this.for = Impstats.for;
  this.agl = Impstats.agl;
}

exports.Ogre = function(currentPR) {
  this.header = OgreStats.header;
  this.type = OgreStats.type;
  this.hp = OgreStats.hp;
  this.sd = OgreStats.sd;
  this.bd = OgreStats.bd;
  this.str = Ogrestats.str;
  this.for = Ogrestats.for;
  this.agl = Ogrestats.agl;
}

exports.Basilisk = function(currentPR) {
  this.header = BasiliskStats.header;
  this.type = BasiliskStats.type;
  this.hp = BasiliskStats.hp;
  this.sd = BasiliskStats.sd;
  this.bd = BasiliskStats.bd;
  this.str = Basiliskstats.str;
  this.for = Basiliskstats.for;
  this.agl = Basiliskstats.agl;
}
