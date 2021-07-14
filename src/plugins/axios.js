import axios from "axios";

const API_URL = process.env.API_URL || 'http://localhost:3000/api'

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    // 'client': {
    //   toString() {
    //     return localStorage.client;
    //   }
    // },
    // 'uid': {
    //   toString() {
    //     return localStorage.uid;
    //   }
    // },
    // 'access-token': {
    //   toString() {
    //     return localStorage.token;
    //   }
    // }
  }
});

axiosInstance.interceptors.request.use(
  config => {
    const requestForOurAPI   = config.baseURL === API_URL,
          accessHeadersUnset = !config.headers.common['access-token'];

    if (requestForOurAPI && accessHeadersUnset && localStorage.token) {
      config.headers.common['client']       = localStorage.client;
      config.headers.common['uid']          = localStorage.uid;
      config.headers.common['access-token'] = localStorage.token;
    }

    return config;
  },
  error => Promise.reject(error)
);

export default axiosInstance;
