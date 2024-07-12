import axios from 'axios'

const apiClient = axios.create(
  {
    baseURL:'http://localhost:8080'
  }
)

export const retrieveAllTodosForUsername =
          (username)=>apiClient.get(`/users/${username}/todos`,{
            headers:{
              Authorization: 'Basic ddhhslkjflkseueiwo'
            }
          })

export const executeBasicAuthenticationService =
(token)=>apiClient.get(`/basicAuth`,{
  headers:{
    Authorization: token
  }
})