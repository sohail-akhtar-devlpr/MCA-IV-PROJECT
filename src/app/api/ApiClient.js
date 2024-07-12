import axios from "axios"

const apiClient = axios.create(
  {
    baseURL:'http://localhost:8080'
  }
)

const setAuthToken = (token) => {
  apiClient.interceptors.request.use(
    (config) => {
      console.log('intercepting and adding a token');
      config.headers.Authorization = token;
      return config;
    }
  );
};

export { apiClient, setAuthToken };