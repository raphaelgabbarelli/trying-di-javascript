// pirate greeter
var PirateGreeter = function(name){
	this.name = name;
	this.salute = function(){ return "Ahoyyy " + this.name; };
};

PirateGreeter.$inject = ["name"];
module.exports = PirateGreeter;