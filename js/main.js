var socket = new WebSocket("wss://node2.wsninja.io");

socket.addEventListener('open', function(event) {
    // Connection opened, send client GUID to autenticate with wsninja server.
    socket.send(JSON.stringify({ guid: "3b67a2fa-0dfa-4de5-b597-7edddbfa4a9f" }));
});

// Listen for websocket messages.
socket.addEventListener('message', function(event) {
    var message = JSON.parse(event.data);
    if (message.accepted === true) {
        // Now you can send data, server will deliver your messages to other clients.
        socket.send(JSON.stringify({ greeting: "Hello World!", local_time: Date.now() }));
    } else {
        console.log(message); // Handle messages from other clients.
    }
});