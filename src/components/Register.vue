<template>
  <form>
    <h3>Register</h3>

    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" placeholder="Name">
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" placeholder="Email">
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" placeholder="Password">
    </div>
    <div class="form-group">
      <label>Confirm Password</label>
      <input type="password" class="form-control" placeholder="Confirm Password">
    </div>

    <button class="btn btn-primary btn-block">Register</button>
  </form>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
