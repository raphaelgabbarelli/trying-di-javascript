// pirate greeter
var CivilizedGreeter = function(name){
	this.name = name;
	this.salute = function(){ return "Hello " + this.name; };
};

CivilizedGreeter.$inject = ["name"];
module.exports = CivilizedGreeter;