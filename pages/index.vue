<template>
  <div>
    <LatestBlogPosts></LatestBlogPosts>
  </div>
</template>

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
</style>

<script>
export default {
  computed: {
    linkBase() {
      return `border border-red`;
    }
  }
};
</script>
