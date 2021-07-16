export default {
  install: (app) => {
    app.config.globalProperties.$session = {
      '$store': app.config.globalProperties.$store,

      isAuthenticated() {
        return localStorage.token !== undefined;
      },

      async login(credentials) {
        let response = await app.$http.post("/auth/sign_in", credentials);

        this.activate(response.headers, response.data.data);
      },

      async logout() {
        await app.$http.delete("/auth/sign_out");
        this.$store.dispatch("currentUser", null);
        this.invalidate();
      },

      activate(responseHeaders, user) {
        this.$store.dispatch('currentUser', user);

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
