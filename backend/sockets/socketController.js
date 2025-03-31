const rooms = {}; 

const socketController = (socket, io) => {
  console.log('A user connected:', socket.id);

  socket.on('joinRoom', (codeblockId) => {
    if (!rooms[codeblockId]) {
      rooms[codeblockId] = {
        mentorSocketId: socket.id,
        active: true,
        usersInRoom: { [socket.id]: 'mentor' }
      };
      io.emit('mentorAssigned', socket.id);
    } else if (rooms[codeblockId].mentorSocketId === socket.id) {
      rooms[codeblockId].active = true;
      rooms[codeblockId].usersInRoom[socket.id] = 'mentor';
    } else if (!rooms[codeblockId].active) {
      socket.emit('roomNotAvailable', 'This room is not available. Try another one!');
      return;
    } else {
      rooms[codeblockId].usersInRoom[socket.id] = 'student';
    }

    socket.join(codeblockId);
    console.log(`User ${socket.id} (${rooms[codeblockId].usersInRoom[socket.id]}) joined room ${codeblockId}`);
    socket.emit('userRole', rooms[codeblockId].usersInRoom[socket.id]);
    updateRoomState(io, codeblockId);
  });

  socket.on('leaveRoom', (roomId) => {
    if (!rooms[roomId]) return;
    console.log(`User ${socket.id} left room ${roomId}`);

    if (socket.id === rooms[roomId].mentorSocketId) {
      console.log('Mentor has disconnected, marking room inactive...');
      rooms[roomId].active = false;
      io.to(roomId).emit('mentorLeft');
      Object.keys(rooms[roomId].usersInRoom).forEach(userId => {
        if (userId !== socket.id) {
          io.to(userId).emit('roomNotAvailable', 'Room is now closed because the mentor left.');
        }
      });
      rooms[roomId].usersInRoom = {};
    } else {
      delete rooms[roomId].usersInRoom[socket.id];
    }
    updateRoomState(io, roomId);
  });

  socket.on('disconnect', () => {
    let roomId = null;
    for (const id in rooms) {
      if (rooms[id].usersInRoom[socket.id]) {
        roomId = id;
        break;
      }
    }
    if (!roomId) return;

    console.log(`User ${socket.id} disconnected from ${roomId}`);
    if (socket.id === rooms[roomId].mentorSocketId) {
      console.log('Mentor has disconnected, clearing room...');
      io.to(roomId).emit('mentorLeft');
      delete rooms[roomId];
    } else {
      delete rooms[roomId].usersInRoom[socket.id];
    }
    updateRoomState(io, roomId);
  });

  socket.on('codeUpdate', ({ roomId, newCode }) => {
    if (rooms[roomId] && rooms[roomId].active) {
      socket.to(roomId).emit('codeUpdate', newCode);
    }
  });

  function updateRoomState(io, roomId) {
    if (!rooms[roomId]) return;
    const students = Object.keys(rooms[roomId].usersInRoom).filter(id => rooms[roomId].usersInRoom[id] === 'student');
    io.to(roomId).emit('updateRoomState', {
      activeCodeblockId: roomId,
      mentorSocketId: rooms[roomId].mentorSocketId,
      isRoomAvailable: rooms[roomId].active,
      studentsCount: students.length,
      students
    });
  }
};

module.exports = socketController;



  