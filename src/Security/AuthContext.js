"use client"
import { createContext, useContext, useState } from "react";
import {signinApiService, getQuestionDetailsApiService} from '@/app/api/SigninApiService'
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
  const [questionDetails, setQuestionDetails] = useState(null);

  //it get executed when it is called.
  async function login(username, password) {
    return signinApiService(username, password)
      .then(response => {
        if (response.status === 202) {
          const jwtToken = 'Bearer ' + response.data.jwt;
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


  async function getQuestionDetails(contestNumber, jwtToken){
    return getQuestionDetailsApiService(contestNumber, jwtToken)
    .then((response)=>{
      console.log("RESPONSE OF QUESTIONS::",response);
      setQuestionDetails(response.data);
      return response.data;
    })
    .catch((error)=>{
      console.log("Error",error);
    })
  }

  return(
    <AuthContext.Provider value={{isAuthenticated, login, logout, token, setToken,setAuthenticated, getQuestionDetails, questionDetails}}>
      {children}
    </AuthContext.Provider>
  )
}