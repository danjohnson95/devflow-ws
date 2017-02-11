var WebSocket = require('ws');

var wss = new WebSocket.Server({
	perMessageDeflate: false,
	port: 6040
});

wss.on('connection', function connection(ws){
	console.log('connected!');
	ws.on('message', function incoming(message){
		console.log(message);
	});
	ws.send('hey');
});

