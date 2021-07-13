import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
let config = {
  baseURL: process.env.apiUrl || "http://127.0.0.1:3000",
  headers: {
    'Content-Type': 'application/json',
    'client':       localStorage.client,
    'uid':          localStorage.uid,
    'access-token': localStorage.token,
  },
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    // TODO: Log out if response is 401
    return Promise.reject(error);
  }
);

export default {
  install: (app) => {
    app.config.globalProperties.$http = _axios;
  }
}
