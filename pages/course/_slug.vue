<template>
  <div>
    <nuxt-link to="/course" class="no-underline">back to courses</nuxt-link>

    <div class="w-full h-64 bg-cover bg-center" :style="`background-image: url('${bgImage}')`"></div>
    <h2 v-if="content.fields.title">{{content.fields.title}}</h2>
    <p v-if="content.fields.publishDate">{{content.fields.publishDate}}</p>
    <p v-if="content.fields.tags">{{content.fields.tags}}</p>
    <p v-if="content.fields.description">{{content.fields.body}}</p>
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
