import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json"
  } 
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    try {
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
        // config.headers['Authorization'] = accessToken;
      }
      return config;

    } catch (err) {
      console.log(err.message);
    }
    return config;
  },
  //요청 에러 직전 호출?
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;