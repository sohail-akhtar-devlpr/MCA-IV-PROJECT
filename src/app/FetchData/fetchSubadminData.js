import axios from "axios";

import { setSubadminUser, setError, setLoading } from "../../Redux/Features/subadminUserSlice";

export const fetchSubadminData = async (dispatch, email)=>{
  dispatch(setLoading());
  try {
    const response = await axios.get(`http://localhost:8080/subadmin/subadmininfo?email=${email}`, {
      withCredentials: true,
    });
    dispatch(setSubadminUser(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};