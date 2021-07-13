<template>
  <form @submit.prevent="register">
    <h3>Register</h3>

    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" v-model="name" placeholder="Name">
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email" placeholder="Email">
      {{errors.email}}
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password">
    </div>
    <div class="form-group">
      <label>Confirm Password</label>
      <input type="password" class="form-control" v-model="password_confirmation" placeholder="Confirm Password">
    </div>

    <button class="btn btn-primary btn-block">Register</button>
  </form>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      name:                  '',
      email:                 '',
      password:              '',
      password_confirmation: '',
      errors:                {}
    };
  },
  methods: {
    async register() {
      this.errors = {};

      const user_params = {
        name:                  this.name,
        email:                 this.email,
        password:              this.password,
        password_confirmation: this.password_confirmation,
      };

      try {
        let response = await this.$http.post("/auth", user_params);
        console.log(response.data);
        this.$router.push('/');
      } catch (error) {
        this.errors = error.response.data.errors;
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
