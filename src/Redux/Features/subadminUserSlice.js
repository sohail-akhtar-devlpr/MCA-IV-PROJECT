import { createSlice } from "@reduxjs/toolkit";

const subadminUserSlice = createSlice(
  {
    name:"subadminUserSlice",
    initialState:{
      userInfo: null,
      status: 'idle',
      error: null,
    },
    reducers:{
      setSubadminUser:(state, action)=>{
        state.userInfo = action.payload;
        state.status = 'succeeded';
      },
      setError: (state, action) => {
        state.error = action.payload;
        state.status = 'failed';
      },
      setLoading: (state) => {
        state.status = 'loading';
      },
    },
  }
)

export const { setSubadminUser, setError, setLoading } = subadminUserSlice.actions;
export default subadminUserSlice.reducer;