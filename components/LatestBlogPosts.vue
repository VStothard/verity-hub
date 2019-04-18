<template>
  <div>
    <div v-if="!!stories.length" class="flex flex-wrap">
        <pre>{{stories}}</pre>
      <PreviewTile
        v-for="(story, i) in stories"
        :key="i"
        :content="story"
        class="w-100 md:w-1/2 pb-8 tile-margin"
      ></PreviewTile>
    </div>
    <div v-else>fetching stories...</div>
  </div>
</template>

<script>
import contentful from "~/plugins/contentful.js";
export default {
    props: ['stories'],
    mounted() {
        let xxxx = this.stories
        debugger
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