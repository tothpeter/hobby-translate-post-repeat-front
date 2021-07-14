<template>
  <div v-if="current_user">Hellooo {{current_user.name}}</div>
  <div v-if="!current_user">Please log in</div>
</template>

<script>
export default {
  name: 'Home',
  props: ['current_user'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
