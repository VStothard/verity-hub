<template>
  <div class="w-100 min-h-screen flex flex-col">
    <nav class="p-4 fixed w-screen bg-white z-10">
      <div class="flex justify-end">
        <div>
          <nuxt-link to="/portfolio" class="p-4 link-base">Portfolio</nuxt-link>
        </div>
        <div>
          <nuxt-link to="/blog" class="p-4 link-base">Blog</nuxt-link>
        </div>
        <div>
          <nuxt-link to="/courses" class="p-4 link-base">Courses</nuxt-link>
        </div>
      </div>
    </nav>
    <div class="lg:flex w-100 flex-grow nav-margin">
      <div class="w-full lg:w-1/4 relative">
        <side-nav/>
      </div>
      <div class="w-full lg:w-3/4 p-2">
        <div class="shadow-md rounded lg:mr-8 p-8">
          <nuxt/>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.nav-margin {
  margin-top: 52px;
}
</style>