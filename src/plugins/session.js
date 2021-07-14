export default {
  install: (app) => {
    app.config.globalProperties.$session = {
      isAuthenticated() {
        return localStorage.token !== null;
      },

      activate(response_headers) {
        localStorage.client = response_headers['client'];
        localStorage.uid    = response_headers['uid'];
        localStorage.token  = response_headers['access-token'];
      },

      invalidate() {
        localStorage.removeItem('client');
        localStorage.removeItem('uid');
        localStorage.removeItem('token');
      }
    };
  }
}
