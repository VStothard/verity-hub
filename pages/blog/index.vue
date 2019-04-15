<template>
  <div>
    <PreviewTile
      v-for="(story, i) in stories"
      :key="i"
      :content="story"
      :content-title="story.fields.title"
      :content-intro="story.fields.description"
      :content-date="story.fields.publishDate"
      :content-tags="story.fields.tags"
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
  }
};
</script>
