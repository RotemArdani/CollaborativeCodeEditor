let mentorSocketId = null;  
let activeCodeblockId = null;  
let usersInRoom = {};  
let role = null;

const socketController = (socket, io) => {
  console.log('A user connected:', socket.id);

  socket.on('joinRoom', (codeblockId) => {
    if (!mentorSocketId) { // first member will be the mentor
      mentorSocketId = socket.id;
      activeCodeblockId = codeblockId;
      role = 'mentor';
      io.emit('mentorAssigned', mentorSocketId);
    } else if (mentorSocketId === socket.id) {  
      activeCodeblockId = codeblockId;
      role = 'mentor';
      io.emit('mentorAssigned', mentorSocketId);
    } else if (activeCodeblockId !== codeblockId) { // mentor is not in the room
      socket.emit('roomNotAvailable', 'This room is not available. Try another one!');
      return; 
    } else {
      role = 'student';
    }

    socket.join(codeblockId);
    usersInRoom[socket.id] = role;

    console.log(`User ${socket.id} (${role}) joined room ${codeblockId}`);
    socket.emit('userRole', role); 
    updateRoomState(io); 
  });

    socket.on('leaveRoom', () => {
      console.log(`User ${socket.id} disconnected`);
    
      if (socket.id === mentorSocketId) { // mentor leave = clearing all the room
        console.log("Mentor has disconnected, clearing room...");
        activeCodeblockId = null;
        usersInRoom = {}; 
        io.emit('mentorLeft');  // return all students back to lobby
        io.to(activeCodeblockId).emit('roomNotAvailable', 'Room is now closed because the mentor left.');
      } else {
        delete usersInRoom[socket.id]; // student leave = returns to lobby
      }
    
      updateRoomState(io); 
    });

  socket.on('codeUpdate', ({ roomId, newCode }) => {
    if (roomId === activeCodeblockId) {
      socket.to(roomId).emit('codeUpdate', newCode);
    }
  });

  // function to update redux
  function updateRoomState(io) {
    const students = Object.keys(usersInRoom).filter(id => usersInRoom[id] === 'student');
    io.to(activeCodeblockId).emit('updateRoomState', {
      activeCodeblockId,
      mentorSocketId,
      isRoomAvailable: activeCodeblockId !== null,
      studentsCount: students.length,
      students
    });
  }
};

module.exports = socketController;


  