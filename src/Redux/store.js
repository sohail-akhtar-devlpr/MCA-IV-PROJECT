// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Features/authSlice';
import subadminUserReducer from './Features/subadminUserSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    subadminUser: subadminUserReducer,
  }
});

export default store;