<template>
  <nav class="p-4 fixed w-screen container-wide mx-auto bg-white z-10 flex justify-between items-centers">
    <div>
      <SideNav class="lg:hidden" />
    </div>
    <div class="flex">
      <div>
        <nuxt-link to="/" class="p-2 lg:p-4 text-link">Blog</nuxt-link>
      </div>
      <div>
        <nuxt-link to="/course" class="p-2 lg:p-4 lg:pr-0 text-link">Courses</nuxt-link>
      </div>
      <!-- <div>
        <nuxt-link to="/portfolio" class="p-4 lg:pr-0 text-link">Portfolio</nuxt-link>
      </div> -->
    </div>
  </nav>
</template>

<script>
export default {
  // TODO: set active link
}
</script>

