var express = require('express');
var app = express.createServer();

var io = require('socket.io').listen(app), 
	fs = require('fs');

io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 10); 
});

	
app.use(express.static(__dirname + '/static'));

var users = [];
//var activeClients = 0;

var port = process.env.PORT || 5000;
	app.listen(port, function() {
	  console.log("Listening on " + port);
	});

io.sockets.on('connection', function (socket) {	
	//console.log("connections: "+socket.namespace.manager.server.connections+" / "+io.sockets.clients().length);
	//console.log("-----------------length: "+io.sockets.clients().length+" / "+socket.id);
	/*
	activeClients +=1;
	socket.broadcast({clients:activeClients});
	socket.on('disconnect', function(){clientDisconnect(socket)});
	*/


	/*
	socket.on('connect',function(data){
		socket.broadcast.emit('connections', io.sockets.clients().length);
	
		//socket.emit('message', data);
		
	});	
	*/

	socket.on('volume',function(data){
		//socket.broadcast.emit('connect', {connections: users.length});
		socket.broadcast.emit('volume', data);
		//socket.emit('message', "volume: "+data);
		
	});	

	socket.on('playSong',function(data){
		//socket.broadcast.emit('connect', {connections: users.length});
		socket.broadcast.emit('playSong', "playSong: "+data);
		//socket.emit('message', "volume: "+data);
		
	});	
	/*
	socket.on('pauseSong',function(data){
		//socket.broadcast.emit('connect', {connections: users.length});
		socket.broadcast.emit('pauseSong', "pauseSong: "+data);
		//socket.emit('message', "volume: "+data);
		
	});
	*/	

	socket.on('status',function(data){
		socket.broadcast.emit('status', data);
	});	

	socket.on('frame',function(data){
		socket.broadcast.emit('frame', data);
	});	
	
    
});



