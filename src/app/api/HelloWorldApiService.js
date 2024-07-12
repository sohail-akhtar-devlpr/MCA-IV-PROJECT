// import axios from 'axios'
import { apiClient } from "./ApiClient"

//Moved in ApiClient.js file
// const apiClient = axios.create(
//   {
//     baseURL:'http://localhost:8080'
//   }
// )

export const retrieveHelloWorldBean = ()=>apiClient.get('/hello-world-bean')

export const retrieveHelloWorldPathVariable =
(username,token)=>apiClient.get(`/hello-world-pathvariable/${username}`
  //commented because we are now adding interceptor on every api call in the AuthContext.js file
//   ,{
//   headers:{
//     Authorization: token
//   }
// }
)


// export const executeBasicAuthenticationService =
// (token)=>apiClient.get(`/basicAuth`,{
//   headers:{
//     Authorization: token
//   }
// })