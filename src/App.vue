<template>
  <Nav />
  <router-view />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
  },
  methods: {
    ...mapActions([
      'fetchInstagramProfiles'
    ]),
  },
  computed: {
    ...mapGetters([
      'instagramProfiles',
    ])
  },
  async created() {
    if (this.$session.isAuthenticated()) {
      this.fetchInstagramProfiles();

      let response = await this.$http.get("/account");
      this.$store.dispatch('setCurrentUser', response.data);
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background: #1c8ef9 !important;
  padding-top: 60px;
}

#app, #root, .auth-wrapper {
  width: 100%;
  height: 100%;
}

.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}

.auth-inner {
  width: 450px;
  margin: auto;
  background: white;
  padding: 40px 55px;
  border-radius: 15px;
  transition: all .3s;
}

.auth-wrapper .form-control:focus {
  border-color: #167bff;
  box-shadow: none;
}
</style>
