<template>
  <div>
    <LatestBlogPosts :stories="stories.stories"></LatestBlogPosts>
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

<style>
h1,
h2,
h3,
h4,
p {
  @apply mb-2;
}
a {
  text-decoration: none;
}

.container-wide {
  @apply px-2;
  max-width: 1400px;
}
</style>