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

<style lang="scss">
body {
  @apply text-slate-500
}
h1,
h2,
h3,
h4 {
  @apply mb-2 mt-4
}
p {
  @apply mb-2;
}
a {
  @apply text-peach-500;
  text-decoration: none;
}

.container-wide {
  @apply px-2;
  max-width: 1400px;
}

.text-link {
  @apply no-underline text-grey-500;
   &-light {
     @apply text-grey-400
   }

   &:hover {
     @apply text-peach-500;
   }
}

.text-link-peach {
  @apply text-peach-500;
}

.reset-link {
    color: initial
}
</style>