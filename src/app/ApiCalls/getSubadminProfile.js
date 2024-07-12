import { useEffect } from 'react';
import axios from 'axios';

const getSubadminProfile = async (jwtToken) => {

    axios.get('http://localhost:8080/subadmin/subadmininfo', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      withCredentials: true,
    })
      .then((response) => {
        console.log("RESPONSE IN GETSUBADMIN METHOD::",response);
        console.log("RESPONSE DATA IN GETSUBADMIN METHOD::",response.data);
        return response?.data;
      })
      .catch((error) => {
        console.log('Error while fetching the Subadmin data', error);
      })
};

export default getSubadminProfile;