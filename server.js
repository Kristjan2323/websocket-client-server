

const WebSocket = require("ws")

const PORT = 5000;

const WebServer = new WebSocket.Server({
    port : PORT

  
})

WebServer.on("connection", function(socket)
{
    //show that a connection is made
    console.log("A client just connected")

    //display client message
    socket.on('message', function(msg){
        console.log("Client send message: " + msg)
      // socket.send("Take this back:" + msg)

       //server broadcoast the message to all clients
       WebServer.clients.forEach(function(client){
        client.send("Someone said: " + msg)
     })
    })

   
})

 console.log(new Date +
     "Server is listening on port:" + PORT)