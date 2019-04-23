<template>
  <div>
    <inOutLink :link-out="linkOut" :params="linkParams">
      <div id='tile-bg' class="w-full h-64 bg-cover bg-center rounded" :style="`background-image: url('https:${content.fields.featurePhoto.fields.file.url}')`"></div>
      <p v-if="content.fields.publishDate" class="text-grey-500 text-sm mt-4">{{content.fields.publishDate | date}}</p>
      <h2 v-if="content.fields.title" :class="{ 'mt-2' : content.fields.publishDate, 'mt-4' : !content.fields.publishDate, }">{{content.fields.title}}</h2>
      <p v-if="content.fields.description">{{content.fields.description}}</p>
      <p class="text-grey-400 mt-4 text-sm">
        <span v-for="(tag, i) in content.fields.tags" :key="i">
          <template v-if="i < 2">#{{tag}} </template>
        </span>
      </p>
    </inOutLink>
  </div>
</template>
<script>
import dayjs from 'dayjs'

export default {
  props: {
    bgImage: {
      type: String,
      default: "https://source.unsplash.com/random"
    },
    content: {
      type: Object
    },
    slugName: {
      type: String,
      required: true
    },
    linkOut: {
      type: Boolean,
      default: false
    }
  },
  filters: {
    //TODO: create plugin to allow global use
    date: function (value) {
      if (!value) return ''
      value = dayjs(value).format('DD.MM.YYYY') // display
      return value
    }
  },
  computed: {
    linkParams() {
      if (!this.linkOut) {
        return { name: `${this.slugName}`, params: { slug: this.content.fields.slug }}
      } else {
        return this.content.fields.externalUrl
      }
    }
  }
};
</script>