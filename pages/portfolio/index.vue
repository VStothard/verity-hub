<template>
  <div>
    <VHeading heading="Portfolio" theme="discrete"/>
    <div v-for="(item, i) in portfolioItems" :key="i" :class="{'mt-16' : i != 0}">
      <div v-if="!item.fields.featureItemType" class="flex justify-center bg-grey-200 mt-4 mb-6">
        <div>
          <video width="600" class="my-4" controls>
            <source :src="`https:${item.fields.featureItem.fields.file.url}`" type="video/mp4">
          </video>
        </div>
      </div>
      <div v-if="item.fields.featureItemType" class="w-full h-64 bg-cover bg-center mt-4 rounded" :style="`background-image: url('https:${item.fields.featureItem.fields.file.url}')`"></div>
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
