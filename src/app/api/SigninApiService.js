import {apiClient} from './ApiClient'

export const signinApiService = (email, password) => 
  apiClient.post('/subadmin/signin', 
    { email, password }, 
    {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials:true,
    }
  );

export const getQuestionDetailsApiService = (contestNumber, jwtToken)=>
  apiClient.get(`/subadmin/contest-question-set?contestNumber=${contestNumber}`,{
    headers:{
      Authorization: 'Bearer ' + `${jwtToken}`
    },
    withCredentials: true,
});