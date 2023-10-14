
const WebSocket = require("ws")

const serverAddress = 'ws://127.0.0.1:5000'

const ws = new WebSocket(serverAddress)

ws.on("open" ,function(){
    console.log("Hello server");
});

ws.on('message' , function(msg){
    console.log("Server received the message: " + msg)
});