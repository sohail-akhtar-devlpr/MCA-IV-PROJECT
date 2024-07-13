"use client"
import { createContext, useContext, useState } from "react";
import {signinApiService} from '@/app/api/SigninApiService'
// import { apiClient } from "@/app/api/ApiClient";
import showToast from '@/utils/Toast/showToast';

// 1. create a context
export const AuthContext = createContext(null);

/// makes it a hook, so that easily can be used from anywhere
export const useAuth = ()=>useContext(AuthContext);

//2 share the created context with other components.
export default function AuthProvider({children}){

  //2. put some state in the context
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  // async function login(username, password){
  //   try{
  //     // const response = await executeJwtAuthenticationService(username, password)
  //     const response = await signinApiService(username, password)
  //     console.log("RESPONSE IN SIGNINAPI SERVICE::",response);
  //     console.log("RESPONSE.STATUS::",response.status)
  //     if(response.status == 202){
  //       console.log("ENTERED IN THE RESPONSE");
  //       const jwtToken = 'Bearer ' + response.data.jwt
  //       // console.log("JWT TOKEN::",jwtToken);
  //       setAuthenticated(true);
  //       setUsername(username);
  //       setToken(response.data.jwt);
  //       // on every apiClient, intercept the calls and set the authorization header
  //       apiClient.interceptors.request.use(
  //         (config)=>{
  //           console.log("intercepting and adding a token");
  //           config.headers.Authorization = jwtToken;
  //           return config;
  //         }
  //       )
  //       return true;
  //     }else{
  //       // Repeated code, therefore use logout, because the code is same as logout.
  //       // setAuthenticated(false);
  //       // setUsername(null);
  //       // setToken(null);
  //       console.log("ENTERED IN ELSE");
  //       logout();
  //       return false;
  //     }
  //   }catch(error){
  //       // Repeated code, therefore use logout, because the code is same as logout.
  //       // setAuthenticated(false);
  //       // setUsername(null);
  //       // setToken(null);
  //       showToast('error', 'Something went wrong, please try later!');
  //       logout();
  //       return false;
  //   }
  // }

  // async function login(username, password) {
  //   try {
  //     const response = await signinApiService(username, password);
  //     console.log("RESPONSE IN SIGNINAPI SERVICE::", response);
  //     console.log("RESPONSE.STATUS::", response.status);
      
  //     if (response.status === 202) {
  //       console.log("ENTERED IN THE RESPONSE");
  //       const jwtToken = 'Bearer ' + response.data.jwt;
  //       setAuthenticated(true);
  //       setUsername(username);
  //       setToken(response.data.jwt);
        
  //       // On every apiClient, intercept the calls and set the authorization header
  //       apiClient.interceptors.request.use(
  //         (config) => {
  //           console.log("Intercepting and adding a token");
  //           config.headers.Authorization = jwtToken;
  //           return config;
  //         }
  //       );
        
  //       return true;
  //     } else {
  //       // Repeated code, therefore use logout, because the code is same as logout.
  //       console.log("ENTERED IN ELSE");
  //       logout();
  //       return false;
  //     }
  //   } catch (error) {
  //     console.error("Error during login:", error);
      
  //     // Check for the response status
  //     if (error.response) {
  //       console.log("Error response status:", error.response.status);
  //       console.log("Error response data:", error.response.data);
        
  //       if (error.response.status === 401) {
  //         showToast('error', 'Invalid Password !!');
  //       } else if (error.response.status === 404) {
  //         showToast('error', 'No User Found with this Email !!');
  //       } else {
  //         showToast('error', 'Something went wrong, please try later!');
  //       }
        
  //       // Repeated code, therefore use logout, because the code is same as logout.
  //       logout();
  //       return false;
  //     } else {
  //       // Handle network or other errors
  //       showToast('error', 'Network error, please try later!');
  //       logout();
  //       return false;
  //     }
  //   }
  // }

  async function login(username, password) {
    // console.log("ENTERED IN LOGIN");
    return signinApiService(username, password)
      .then(response => {
        // console.log("RESPONSE IN SIGNINAPI SERVICE::", response);
        // console.log("RESPONSE.STATUS::", response.status);
        
        if (response.status === 202) {
          // console.log("ENTERED IN THE RESPONSE");
          const jwtToken = 'Bearer ' + response.data.jwt;
          // console.log("TOKEN GETS GENERATED::",jwtToken)
          setAuthenticated(true);
          setUsername(username);
          setToken(response.data.jwt);
          
          // On every apiClient, intercept the calls and set the authorization header
          // apiClient.interceptors.request.use(
          //   (config) => {
          //     console.log("Intercepting and adding a token");
          //     config.headers.Authorization = jwtToken;
          //     return config;
          //   }
          // );
          
          return true;
        } else {
          // Repeated code, therefore use logout, because the code is same as logout.
          // console.log("ENTERED IN ELSE");
          logout();
          return false;
        }
      })
      .catch(error => {
        console.error("Error during login:", error);
        
        // Check for the response status
        if (error.response) { 
          if (error.response.status === 401) {
            showToast('error', 'Invalid Password !!');
          } else if (error.response.status === 404) {
            showToast('error', 'No User Found with this Email !!');
          } else if(error.response.status === 400 && error.response.data){
            console.log("ERROR:: ",error.response.data);
            throw { data: error.response.data };
          }
          else {
            showToast('error', 'Something went wrong, please try later!');
          }
          
          // Repeated code, therefore use logout, because the code is same as logout.
          logout();
          return false;
        } else {
          // Handle network or other errors
          showToast('error', 'Network error, please try later!');
          logout();
          return false;
        }
      });
  }
  
  

  //logout function
  function logout(){
    setAuthenticated(false);
    setToken(null);
    setUsername(null);
  }

  return(
    <AuthContext.Provider value={{isAuthenticated, login, logout, token, setToken,setAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}