import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Action
export const getSubadminProfileData = createAsyncThunk(
  "subadminUserData",
  async (jwtToken) => {
    try {
      const response = await axios.get("http://localhost:8080/subadmin/subadmininfo", {
        headers:{
          Authorization :`Bearer ${jwtToken}`
        },
        withCredentials: true,
      });
      console.log('RESPONSE IN THE FETCHING SUBADMIN PROFILE::,',response);
      return response.data;
    } catch (error) {
      console.log("Error while fetching the Subadmin data", error);
      throw error; // Ensure the error is thrown to handle in the rejected case
    }
  }
);

const fetchSubadminDataSlice = createSlice({
  name: "fetchSubadminData",
  initialState: {
    subadminInfo: null,
    loading: false,
    error: null,
    isLoggedIn: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSubadminProfileData.pending, (state) => {
        state.loading = true;
        state.isLoggedIn=false;
      })
      .addCase(getSubadminProfileData.fulfilled, (state, action) => {
        state.loading = false;
        state.subadminInfo = action.payload;
        state.isLoggedIn=true;
      })
      .addCase(getSubadminProfileData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isLoggedIn = false;
      });
  }
});

export const { fetchSubadminData } = fetchSubadminDataSlice.actions;
export default fetchSubadminDataSlice.reducer;
