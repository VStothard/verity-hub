<template>
  <div>
    <h2 class="text-base text-grey-500 font-semibold uppercase mb-6 mt-4 text-left">Portfolio</h2>
    <div v-for="(item, i) in portfolioItems" :key="i">
      <pre>{{item.fields}}</pre>
      <p v-if="item.fields.publishDate" class="text-grey-500 text-sm mt-4">{{item.fields.publishDate | date}}</p>
      <h2 v-if="item.fields.title">{{item.fields.title}}</h2>
      <p v-if="item.fields.body">{{item.fields.body}}</p>
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
