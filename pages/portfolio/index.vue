<template>
  <div>
    <VHeading heading="Portfolio" theme="discrete"/>
    <div v-for="(item, i) in portfolioItems" :key="i">
      <div class="flex justify-center bg-grey-200 mt-4 mb-6">
        <div>
          <video width="600" class="my-4" controls>
            <source :src="`https:${item.fields.featurePhoto.fields.file.url}`" type="video/mp4">
          </video>
        </div>
      </div>
      <h2 v-if="item.fields.title">{{item.fields.title}}</h2>
      <vue-markdown v-if="item.fields.body">{{item.fields.body}}</vue-markdown>

      <p class="text-grey-400 mt-4 text-sm">
        <span v-for="(tag, i) in item.fields.tags" :key="i">
          <template v-if="i < 2">#{{tag}} </template>
        </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData(context) {
    let portfolioItems = await context.store.dispatch("portfolio/getAllPortfolioItems")

    return {
      portfolioItems
    }
  }
}

</script>
