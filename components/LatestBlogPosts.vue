<template>
  <div class="flex flex-wrap">
    <PreviewTile
      v-for="(story, i) in stories"
      :key="i"
      :content="story"
      class="w-100 md:w-1/2 pb-8 tile-margin"
    ></PreviewTile>
  </div>
</template>

<script>
import contentful from "~/plugins/contentful.js";
export default {
  data() {
    return {
      stories: []
    };
  },
  async mounted() {
    // Todo: move to asyncData
    // get blog posts
    const posts = await this.$store.dispatch("blog/getAllPosts");
    this.stories = this.$store.getters["blog/getAllPosts"];
    console.log(this.stories, 3000);
  }
};
</script>

<style lang='scss'>
.tile-margin:nth-child(odd) {
  @media screen and (min-width: 768px) {
    @apply pr-8;
  }
}
</style>