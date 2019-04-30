<template >
  <div class="p-4 md:p-8">
    <div>
      <h1>Welcome to the project!</h1>
      <p>
        <a
          class="text-link"
          href="https://veritystothard.com/showcase/"
        >See it live here!</a>
      </p>
      <p>This file showcases the design guide and available components within this project.</p>
      <p>The project has been built using Nuxt.js, Tailwind, Contentful &amp; Netlify.</p>
    </div>
    <div class="spacer">
      <h2>Colors</h2>
      <p>The colors used in this project are:</p>
      <ColorSpread></ColorSpread>
    </div>
    <!-- <div class="spacer">
      <h2>Typography</h2>
      <p>Typography throughout the site will be set gloablly using a base scss file.</p>
    </div> -->
    <div class="spacer">
      <h2>Buttons</h2>
      <p>The button component uses props to set the type, state and theme of a button.</p>
      <p class="font-bold my-2">Default</p>
      <VButton button-text="Default button"></VButton>
      <p class="font-bold my-2">Filled</p>
      <VButton theme="filled" button-text="Filled button with colorway" colorway="peach"></VButton>
      <VButton theme="filled" button-text="Filled button with colorway" colorway="slate"></VButton>
      <p class="font-bold my-2">Outlined</p>
      <VButton theme="outlined" button-text="Outlined button with colorway" colorway="peach"></VButton>
      <VButton theme="outlined" button-text="Outlined button with colorway" colorway="slate"></VButton>
    </div>
    <div class="spacer">
      <h2>Preview tile</h2>
      <p>The blog preview component allows the user to set a thumbnail image, heading, intro text and some other details about a piece of content.</p>
      <p>By clicking on the tile, the user will be taken to the relevant piece of content.</p>
      <div class="flex flex-wrap justify-between mt-8">
        <PreviewTile v-for="(story, i) in stories" :key="i" :content="story" class="w-full md:w-1/2"></PreviewTile>
      </div>
    </div>
    <div class="spacer">
      <h2>Contact form</h2>
      <div class="flex justify-center">
        <ContactForm
          imgAlt="an image alongside the contact form!"
          colorway="peach"
          class="w-full max-w-xl"
        ></ContactForm>
      </div>
    </div>
  </div>
</template>
<script>
import contentful from "~/plugins/contentful.js";
export default {
  data() {
    return {
      stories: []
    };
  },
  async mounted() {
    //Todo move this to Vuex store
    const allPosts = await contentful.getEntries({ content_type: "blogPost" });

    this.stories = allPosts.items;
  }
};
</script>
<style lang="scss">
.spacer {
  @apply mt-8;
}
</style>