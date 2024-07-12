import {apiClient} from '@/app/api/ApiClient'

// export const executeBasicAuthenticationService =
// (token)=>apiClient.get(`/basicAuth`,{
//   headers:{
//     Authorization: token
//   }
// })


export const executeJwtAuthenticationService =
(email, password)=>apiClient.post(`/subadmin/authenticate`,{email, password})