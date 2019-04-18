<template>
  <div>
    <LatestBlogPosts :stories="stories"></LatestBlogPosts>
  </div>
</template>

<script>
export default {
    async asyncData(context) {
        let stories = await context.store.dispatch("blog/getAllPosts")
        
        return {
           stories
        }
    }
};
</script>
