import {apiClient} from './ApiClient'

export const signinApiService = (email, password) => 
  apiClient.post('/subadmin/signin', 
    { email, password }, 
    {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    }
  );