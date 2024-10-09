
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: localStorage.getItem('userName') || '',
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
};
 
const userSlice = createSlice({name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem('userName', action.payload);
      localStorage.setItem('isLoggedIn', 'true');
    },
    logout: (state) => {
      state.name = '';
      state.isLoggedIn = false;
      localStorage.removeItem('userName');
      localStorage.removeItem('isLoggedIn');
    }
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
