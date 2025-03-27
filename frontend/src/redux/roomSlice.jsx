import { createSlice } from '@reduxjs/toolkit';

const roomSlice = createSlice({
  name: 'room',
  initialState: {
    activeCodeblockId: null,
    mentorSocketId: null,
    isRoomAvailable: true,
    studentsCount: 0,
    students: []
  },
  reducers: {
    updateRoom: (state, action) => {
      state.activeCodeblockId = action.payload.activeCodeblockId;
      state.mentorSocketId = action.payload.mentorSocketId;
      state.isRoomAvailable = action.payload.isRoomAvailable;
      state.studentsCount = action.payload.studentsCount;
      state.students = action.payload.students;
    },
    setMentorId: (state, action) => {
      state.mentorSocketId = action.payload;
    }
  }
});

export const { updateRoom, setMentorId } = roomSlice.actions;
export default roomSlice.reducer;


