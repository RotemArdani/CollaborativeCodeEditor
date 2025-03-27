import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: 'student',  
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMentor: (state) => {
      state.role = 'mentor';  
    },
    setStudent: (state) => {
      state.role = 'student';
    },
  },
});

export const { setMentor, setStudent } = userSlice.actions;
export default userSlice.reducer;
