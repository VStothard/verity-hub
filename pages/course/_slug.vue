<template>
  <div>
    <nuxt-link to="/course" class="text-link">back to courses</nuxt-link>
    <div class="w-full h-64 bg-cover bg-center mt-4" :style="`background-image: url('https:${content.fields.featurePhoto.fields.file.url}')`"></div>
      <p v-if="content.fields.publishDate" class="text-grey-500 text-sm mt-8">{{content.fields.publishDate | date}}</p>
      <h2 v-if="content.fields.title" :class="{ 'mt-2' : content.fields.publishDate, 'mt-4' : !content.fields.publishDate, }">{{content.fields.title}}</h2>
    <p v-if="content.fields.tags">{{content.fields.tags}}</p>
    <vue-markdown>{{content.fields.body}}</vue-markdown>
  </div>
</template>
<script>
import contentful from "~/plugins/contentful.js";

export default {
  props: {
    bgImage: {
      type: String,
      default: "https://source.unsplash.com/random"
    }
  },
  async asyncData({ env, params }) {
    //! Todo convert to action in store
    return await contentful
      .getEntries({
        content_type: "skillshareCourse",
        "fields.slug": params.slug
      })
      .then(entries => {
        return {
          content: entries.items[0]
        };
      })
      .catch(console.error);
  }
};
</script>
