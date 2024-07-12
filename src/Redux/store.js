import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Features/authSlice';
import fetchSubadminDataSlice from './Features/fetchSubadminDataSlice'

//IMP: DONT DELETE THIS COMMENTED CODE
//store variable is a global variable.
//hence it will not work, because in the server a global variable will be created, but as we know server is a sharable resuource, hence different user's browsers should have their own independent store.
//Therefore dont do this thing in next js.

// const store = configureStore({
//   reducer: {
//     auth: authSlice,
//     subadminData: fetchSubadminDataSlice,
//   },
// });

export const makeStore = ()=>{
  return configureStore({
    reducer: {
      auth: authSlice,
      subadminData: fetchSubadminDataSlice,
    },
  });
}

export default makeStore;