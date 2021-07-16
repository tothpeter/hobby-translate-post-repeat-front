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
        app.config.globalProperties.$store.dispatch("currentUser", null);
        this.invalidate();
      },

      activate(responseHeaders, user) {
        app.config.globalProperties.$store.dispatch('currentUser', user);

        localStorage.client = responseHeaders['client'];
        localStorage.uid    = responseHeaders['uid'];
        localStorage.token  = responseHeaders['access-token'];
      },

      invalidate() {
        localStorage.removeItem('client');
        localStorage.removeItem('uid');
        localStorage.removeItem('token');
      }
    };
  }
}
