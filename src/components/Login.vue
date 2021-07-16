<template>
  <form @submit.prevent="login">
    <h3>Login</h3>

    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="credentials.email" placeholder="Email">
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="credentials.password" placeholder="Password">
    </div>

    <button class="btn btn-primary btn-block">Login</button>
  </form>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      credentials: {
        email:    'test1@test.com',
        password: '123123'
      }
    };
  },
  methods: {
    login() {
      try {
        this.$session.login(this.credentials);
        this.$router.push('/');
      } catch (error) {
        console.log('Error');
        console.log(error);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
