<template>
  <div class="w-100 min-h-screen flex flex-col">
    <main-navigation></main-navigation>
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