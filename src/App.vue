<template>
  <Nav />
  <div class="auth-wrapper">
    <div class="auth-inner">
      <Home />
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Home
  }
}
</script>

<style>
 * {
    box-sizing: border-box;
  }

  body {
    background: #1c8ef9 !important;
    min-height: 100vh;
    display: flex;
    font-weight: 400;
  }

  body, html, #app, #root, .auth-wrapper {
    width: 100%;
    height: 100%;
  }

  #app {
    text-align: center;
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
