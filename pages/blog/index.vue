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
  async mounted(store) {
    // get blog posts
    const posts = await store.dispatch("blog/getAllPosts");
    console.log(posts, 2000);
    // const allPosts = await contentful.getEntries({ content_type: "blogPost" });
    // this.stories = allPosts.items;
  }
  // async asyncData(context) {
  //   const allPosts = await contentful.getEntries({ content_type: "blogPost" });
  //   return { stories: allPosts.items };
  // }
};
</script>
