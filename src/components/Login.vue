<template>
  <div class="auth-wrapper">
    <div class="auth-inner">
      <form @submit.prevent="login">
        <h3>Login</h3>
        <div class="alert alert-danger" role="alert" v-if="error">
          {{error}}
        </div>

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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      error: '',
      credentials: {
        email:    'test1@test.com',
        password: '123123'
      }
    };
  },
  methods: {
    async login() {
      try {
        this.error = '';
        await this.$session.login(this.credentials);
        this.$router.push('/');
      } catch (error) {
        this.error = error.response.data.errors[0];
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
