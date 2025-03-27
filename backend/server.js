const express = require('express');        
const mongoose = require('mongoose');      
const cors = require('cors');              
const socketIo = require('socket.io')
const { Server } = require("socket.io");     
const socketController = require('./sockets/socketController');  
require('dotenv').config();                

const app = express();
const server = require('http').Server(app);  
const io = new Server(server, {
  cors:{
    origin: process.env.FRONTEND_URL, 
    methods: ["GET", "POST"],
    credentials: true,
  },
});              

app.use(
  cors({
    origin: process.env.FRONTEND_URL, 
    methods: ["GET", "POST"],
    credentials: true,
  })
);                           
app.use(express.json());                  

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

const codeblockRoutes = require('./routes/codeblockRoutes');  
app.use('/api', codeblockRoutes);  

io.on('connection', (socket) => {
    console.log('A user connected: ' + socket.id);
    
    socketController(socket, io);
  
    socket.on('disconnect', () => {
      console.log('User disconnected: ' + socket.id);
    });
  });

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
