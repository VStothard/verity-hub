<template>
  <div>
    <!-- <pre>{{content}}</pre> -->
    <nuxt-link :to="`/post`">
      <div class="w-full h-64 bg-cover bg-center" :style="`background-image: url('${bgImage}')`"></div>
      <h2 v-if="content.fields.title">{{content.fields.title}}</h2>
      <p v-if="content.fields.publishDate">{{content.fields.publishDate}}</p>
      <p v-if="content.fields.tags">{{content.fields.tags}}</p>
      <p v-if="content.fields.description">{{content.fields.description}}</p>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    bgImage: {
      type: String,
      default: "https://source.unsplash.com/random"
    },
    content: {
      type: Object
    }
  }
};
</script>