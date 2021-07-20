<template>
  <div class="auth-wrapper">
    <div class="auth-inner">
      <form @submit.prevent="register">
        <h3>Register</h3>

        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="newUser.name" placeholder="Name">
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="newUser.email" placeholder="Email">
          {{errors.email}}
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="newUser.password" placeholder="Password">
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <input type="password" class="form-control" v-model="newUser.password_confirmation" placeholder="Confirm Password">
        </div>

        <button class="btn btn-primary btn-block">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      newUser: {
        name:                  '',
        email:                 '',
        password:              '',
        password_confirmation: ''
      },
      errors:                {}
    };
  },
  methods: {
    async register() {
      this.errors = {};

      try {
        let response = await this.$http.post("/auth", this.newUser);
        this.$session.activate(response.headers, response.data.data);
        this.$router.push('/');
      } catch (error) {
        this.errors = error.response.data.errors;
        console.log('Error', error);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
