export default {
  install: (app) => {
    app.config.globalProperties.$session = {
      isAuthenticated() {
        return localStorage.token !== undefined;
      },

      async login(credentials) {
        let response = await app.$http.post("/auth/sign_in", credentials);

        this.activate(response.headers, response.data.data);
      },

      async logout() {
        await app.$http.delete("/auth/sign_out");
        app.config.globalProperties.$store.dispatch("current_user", null);
        this.invalidate();
      },

      activate(response_headers, user) {
        app.config.globalProperties.$store.dispatch('current_user', user);

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
