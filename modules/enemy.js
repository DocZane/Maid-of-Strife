const ImpStats = require("../basestats/imp.json");
const OgreStats = require("../basestats/ogre.json");
const BasiliskStats = require("../basestats/basilisk.json");
exports.Imp = function(currentPR) {
  this.header = ImpStats.header;
  this.type = ImpStats.type;
  this.hp = ImpStats.hp;
  this.sd = ImpStats.sd;
  this.bd = ImpStats.bd;
  this.str = ImpStats.str;
  this.for = ImpStats.for;
  this.agl = ImpStats.agl;

  this.damage = function(x) {
    this.hp -= x;//hp = hp - x;
    console.log("dealt " + x + " damage to Imp");
  };
}

exports.Ogre = function(currentPR) {
  this.header = OgreStats.header;
  this.type = OgreStats.type;
  this.hp = OgreStats.hp;
  this.sd = OgreStats.sd;
  this.bd = OgreStats.bd;
  this.str = OgreStats.str;
  this.for = OgreStats.for;
  this.agl = OgreStats.agl;

  this.damage = function(x) {
    this.hp -= x;//hp = hp - x;
    console.log("dealt " + x + " damage to Imp");
  };
}

exports.Basilisk = function(currentPR) {
  this.header = BasiliskStats.header;
  this.type = BasiliskStats.type;
  this.hp = BasiliskStats.hp;
  this.sd = BasiliskStats.sd;
  this.bd = BasiliskStats.bd;
  this.str = BasiliskStats.str;
  this.for = BasiliskStats.for;
  this.agl = BasiliskStats.agl;

  this.damage = function(x) {
    this.hp -= x;//hp = hp - x;
    console.log("dealt " + x + " damage to Imp");
  };
}
