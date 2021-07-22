<template>
  <h1>Latest Feed</h1>
  From: <div
  v-for="profile in instagramProfiles" :key="profile.id"
  class="instagram-profile">
    @{{ profile.user_name }}
  </div>

  <div class="posts">
    <div
    v-for="post in posts" :key="post.id"
    class="post">
      <img :src="getPostImgUrl(post)">

      {{ post.caption }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "instagramProfiles",
    ])
  },
  data() {
    return {
      posts: []
    };
  },
  async created() {
    let response = await this.$http.get('/instagram_posts/latest');
    this.posts = response.data;
  },
  methods: {
    getPostImgUrl(post) {
      let encoded_image_url = encodeURIComponent(btoa(post.display_url_small))
      return `http://localhost:3000/image-proxy/${encoded_image_url}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.instagram-profile {
  display: inline-block;
  padding: 0 5px;
}

.posts {
  display: grid;
  grid-template-columns: repeat(5,1fr);
  grid-gap: 1rem;
}

.post {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
}

.post img {
  width: 100%;
}
</style>
