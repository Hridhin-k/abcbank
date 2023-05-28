import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = localStorage.getItem("user_token");
    if (token) {
      let new_config = { ...config };
      new_config.headers.authorization = token;
      return new_config;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
