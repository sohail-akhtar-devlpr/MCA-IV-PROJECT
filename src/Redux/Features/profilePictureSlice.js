// profilePictureSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  profilePictureUrl: null,
  loading: false,
  error: null,
};

export const profilePictureSlice = createSlice({
  name: 'profilePicture',
  initialState,
  reducers: {
    fetchProfilePictureStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProfilePictureSuccess(state, action) {
      state.loading = false;
      state.profilePictureUrl = action.payload;
    },
    fetchProfilePictureFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetProfilePicture(state) {
      state.profilePictureUrl = null;
    },
    updateProfilePicture(action, state){
      state.profilePictureUrl = action.payload;
    },
  },
});

export const {
    fetchProfilePictureStart, 
    fetchProfilePictureSuccess, 
    fetchProfilePictureFailure, 
    resetProfilePicture,
    updateProfilePicture } = profilePictureSlice.actions;

// Async action to fetch profile picture
export const fetchProfilePicture = (username) => async (dispatch) => {
  dispatch(fetchProfilePictureStart());
  try {
    const response = await axios.get(`http://localhost:8080/subadmin/get-profile-picture?username=${username}`, {
      responseType: 'arraybuffer', // Ensure response is treated as binary data
    });
    // Convert arraybuffer to base64 string to use in <img> src attribute
    const imageData = Buffer.from(response.data, 'binary').toString('base64');
    const profilePictureUrl = `data:image/jpeg;base64,${imageData}`; // Assuming JPEG image format
    console.log("GET IMAGE DATA: ",imageData);
    console.log("GET PROFILE PICTURE URL: ",profilePictureUrl);
    dispatch(fetchProfilePictureSuccess(profilePictureUrl));
  } catch (error) {
    dispatch(fetchProfilePictureFailure(error.message));
  }
};

export default profilePictureSlice.reducer;
