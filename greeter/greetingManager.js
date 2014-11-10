var GreetingManager = function(greeter){
	
	this.greeterDep = greeter;
	
	this.salute = function(){
		return this.greeterDep.salute();
	};
};

GreetingManager.$inject = ["greeter"];

module.exports = GreetingManager;