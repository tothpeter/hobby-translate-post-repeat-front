export default {
  install: (app) => {
    app.config.globalProperties.$session = {
      activate(response_headers) {
        localStorage.client = response_headers['client'];
        localStorage.uid    = response_headers['uid'];
        localStorage.token  = response_headers['access-token'];
      },
    };
  }
}
