<template>
  <div>
    <h2 class="text-base text-grey-500 font-semibold uppercase mb-6 mt-4 text-left">Latest blog posts</h2>
    <div v-if="!!stories.length" class="flex flex-wrap">
      <PreviewTile
        v-for="(story, i) in stories"
        :key="i"
        :content="story"
        slug-name="blog-slug"
        class="w-full md:w-1/2 pb-8 tile-margin hover-tile"
      ></PreviewTile>
    </div>
    <div v-else>fetching stories...</div>
  </div>
</template>

<script>
export default {
    props: ['stories']
};
</script>

<style lang='scss'>
.tile-margin:nth-child(odd) {
  @media screen and (min-width: 768px) {
    @apply pr-8;
  }
}

.hover-tile:hover #tile-bg {
  transform: scale(1.005);
  transition: all 0.2s;
}
</style>