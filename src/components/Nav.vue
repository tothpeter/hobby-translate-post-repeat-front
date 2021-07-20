<template>
  <nav class="navbar navbar-expand navbar-light fixed-top bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div class="collapse navbar-collapse" v-if="currentUser">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/dashboard/latest-feed" class="nav-link">Latest feed</router-link>
          </li>
        </ul>
      </div>

      <div class="collapse navbar-collapse" v-if="!currentUser">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Sign up</router-link>
          </li>
        </ul>
      </div>

      <div class="collapse navbar-collapse" v-if="currentUser">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="javascript:void(0)" class="nav-link" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Nav',
  computed: {
    ...mapGetters([
      'currentUser',
    ])
  },
  methods: {
    logout() {
      try {
        this.$session.logout();
        this.$router.push('/');
      } catch (error) {
        console.log('Error', error);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
