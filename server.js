//http://www.mariocasciaro.me/dependency-injection-in-node-js-and-other-architectural-patterns
//http://www.royjacobs.org/intravenous/

var http = require('http');
var path = require('path');

var express = require('express');
var router = express();
var server = http.createServer(router);

var intravenous = require('intravenous');
var civilized = require('./greeter/civilizedGreeter.js');
var pirate = require('./greeter/pirateGreeter.js');
var manager = require('./greeter/greetingManager.js');

var container = intravenous.create();
container.register("GreetingManager", manager);

router.use(express.static(path.resolve(__dirname, 'client')));

router.get("/hello", function(req, res){

	var name = req.query.name;
	
	container.register("name", name);
	container.register("greeter", civilized);
	
	var gm = container.get("GreetingManager");
	res.send(gm.salute());
});

router.get("/arrr", function(req, res){
	
	var name = req.query.name;
	
	container.register("name", name);
	container.register("greeter", pirate);
	
	var gm = container.get("GreetingManager");
	res.send(gm.salute());
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");