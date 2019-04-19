<template>
  <nav class="p-4 fixed w-screen bg-white z-10">
    <div class="flex justify-end container-wide mx-auto">
      <div>
        <nuxt-link to="/" class="p-4 link-base">Blog</nuxt-link>
      </div>
      <div>
        <nuxt-link to="/course" class="p-4 link-base">Courses</nuxt-link>
      </div>
      <div>
        <nuxt-link to="/portfolio" class="p-4 lg:pr-0 link-base">Portfolio</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // TODO: set active link
}
</script>

