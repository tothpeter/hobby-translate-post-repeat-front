<template>
  <h1>Latest Feed</h1>
  From: <div
  v-for="profile in instagramProfiles" :key="profile.id"
  class="instagram-profile">
    @{{ profile.user_name }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "instagramProfiles",
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.instagram-profile {
  display: inline-block;
  padding: 0 5px;
}
</style>
