<template>
  <div>
    <nuxt-link to="/" class="text-link">back to latest posts</nuxt-link>

    <div class="w-full h-64 bg-cover bg-center rounded mt-4" :style="`background-image: url('${content.fields.featurePhoto.fields.file.url}')`"></div>
    <p v-if="content.fields.publishDate" class="text-grey-500 text-sm mt-4">{{content.fields.publishDate | date}}</p>
    <h1 v-if="content.fields.title" :class="{ 'mt-2' : content.fields.publishDate, 'mt-4' : !content.fields.publishDate, }">{{content.fields.title}}</h1>
    <vue-markdown class="mt-4">{{content.fields.body}}</vue-markdown>
    <p class="text-grey-400 mt-4 text-sm">
      <span v-for="(tag, i) in content.fields.tags" :key="i">
        <template v-if="i < 2">#{{tag}} </template>
      </span>
    </p>
  </div>
</template>
<script>
import contentful from "~/plugins/contentful.js";
// import VueMarkdown from 'vue-markdown';

export default {
  async asyncData({ env, params }) {
    //! Todo convert to action in store
    return await contentful
      .getEntries({
        content_type: "blogPost",
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
