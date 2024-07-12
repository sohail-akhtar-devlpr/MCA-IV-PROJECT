import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state,action) => {
      state.isLoggedIn = false;
      state.user = null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;





// // features/loginSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isLoggedIn: false,
//   username: '',
//   password: ''
// };

// const loginSlice = createSlice({
//   name: 'login',
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.isLoggedIn = true;
//       state.username = action.payload.username;
//       state.password = action.payload.password;
//     },
//     logout: (state) => {
//       state.isLoggedIn = false;
//       state.username = '';
//       state.password = '';
//     }
//   }
// });

// export const { login, logout } = loginSlice.actions;
// export default loginSlice.reducer;