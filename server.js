const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Store connected users
const users = {};

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // User joins with a username
  socket.on('join', (username) => {
    users[socket.id] = username;
    socket.broadcast.emit('user-joined', { username, id: socket.id });
    io.emit('user-list', Object.values(users));
    console.log(`${username} joined the chat`);
  });

  // Handle incoming messages
  socket.on('send-message', (data) => {
    const message = {
      id: Date.now(),
      username: users[socket.id] || 'Anonymous',
      text: data.text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      socketId: socket.id
    };
    io.emit('receive-message', message);
  });

  // Handle typing indicator
  socket.on('typing', (isTyping) => {
    socket.broadcast.emit('user-typing', {
      username: users[socket.id],
      isTyping
    });
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    const username = users[socket.id];
    delete users[socket.id];
    io.emit('user-left', { username, id: socket.id });
    io.emit('user-list', Object.values(users));
    console.log(`${username} disconnected`);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Chat server running at http://localhost:${PORT}`);
});
