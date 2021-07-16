<template>
  <div v-if="currentUser">Hellooo {{currentUser.name}}</div>
  <div v-if="!currentUser">Please log in</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'currentUser',
    ])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
