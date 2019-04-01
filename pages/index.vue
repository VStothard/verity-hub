<template>
  <section class="block md:flex flex-col bg-blue">
    <!--intro page, arrow pointing up to the nav items-->
    <!--todo: rebuild this layout with CSS grid-->
    <div class="flex justify-end">
      <nav>
        <nuxt-link
          to="/portfolio"
          class="py-2 sm:py-4 px-2 inline-block no-underline hover:text-white"
        >portfolio</nuxt-link>
        <nuxt-link
          to="/blog"
          class="py-2 sm:py-4 px-2 inline-block no-underline hover:text-white"
        >blog</nuxt-link>
        <nuxt-link
          to="/about"
          class="py-2 sm:py-4 px-2 inline-block no-underline hover:text-white"
        >about</nuxt-link>
      </nav>
    </div>
    <div class="block md:flex fill-page">
      <div class="border flex-grow md:max-w-xs bg-teal-light">
        <!-- intro + quick links -->
        <div class="inline-block md:flex flex-col text-center">
          <div class="border hidden md:block">DP HERE</div>
          <div class="border">Some intro text here</div>
          <div class="border hidden md:block">Social links</div>
        </div>
      </div>
      <div class="border flex-grow bg-teal">body</div>
    </div>
  </section>
</template>

<style>
.fill-page {
  min-height: 100vh;
}

.link-base {
  @apply py-4 px-2 inline-block no-underline;
}
</style>

<script>
export default {
  computed: {
    linkBase() {
      return `border border-red`;
    }
  }
};
</script>
