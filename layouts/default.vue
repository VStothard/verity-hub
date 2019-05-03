<template>
  <div class="w-full min-h-screen flex flex-col">
    <main-navigation></main-navigation>
    <div class="lg:flex flex-row-reverse w-full flex-grow nav-margin container-wide mx-auto">
      <div class="w-full lg:w-3/4">
        <div class="shadow-md rounded p-8 border border-grey-400">
          <nuxt/>
        </div>
        <VFooter></VFooter>
      </div>
      <div class="hidden lg:block w-full lg:w-1/4 relative">
        <side-nav/>
      </div>
    </div>
  </div>
</template>
<style>
.nav-margin {
  margin-top: 52px;
}
</style>