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
  @apply text-slate-500 font-sans;
}

h2,
h3,
h4 {
  @apply mb-2 mt-6
}

h1 {
  @apply mb-4 mt-8
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
  @apply text-slate-500;
}

img {
  @apply my-2;
}

pre {
  @apply bg-grey-200 py-8 px-4 rounded my-6 overflow-x-scroll;
}

code {
  @apply bg-grey-200 px-2 rounded;
}

pre code {
  @apply px-0 bg-transparent;
}

ul {
  @apply my-4;
}

li {
  @apply leading-loose;
}

</style>