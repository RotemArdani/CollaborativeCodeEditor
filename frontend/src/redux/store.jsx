import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './roomSlice';
import userReducer from './userSlice';   

const store = configureStore({
  reducer: {
    room: roomReducer, 
    user: userReducer,  
   },
});

export default store;
