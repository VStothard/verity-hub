<template>
  <nav class="p-4 fixed w-screen bg-white z-10">
    <div class="flex justify-end container-wide mx-auto">
      <div>
        <nuxt-link to="/" class="p-4 text-link">Blog</nuxt-link>
      </div>
      <div>
        <nuxt-link to="/course" class="p-4 text-link">Courses</nuxt-link>
      </div>
      <div>
        <nuxt-link to="/portfolio" class="p-4 lg:pr-0 text-link">Portfolio</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // TODO: set active link
}
</script>

