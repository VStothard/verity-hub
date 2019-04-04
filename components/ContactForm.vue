<template>
  <div class="block sm:flex justify-between items-center">
    <div
      class="w-full sm:pr-2 flex justify-center"
      :class="{'sm:w-1/2': showImageColumn, 'sm:w-full': !showImageColumn}"
    >
      <form method="POST" @submit.prevent="submitHandler" class="w-full max-w-sm">
        <input
          type="text"
          placeholder="Your name"
          :class="`block border border-${colorway}-500 p-4 w-full mt-4`"
        >
        <input
          type="email"
          placeholder="Your email address"
          :class="`block border border-${colorway}-500 p-4 w-full mt-4`"
        >
        <VButton type="filled" button-text="Submit" class="mt-4" :colorway="colorway"></VButton>
      </form>
    </div>
    <div v-if="showImageColumn" class="w-full sm:w-1/2 sm:pl-2 flex justify-center items-center">
      <img :src="imgURL" alt="imgAlt">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showImageColumn: {
      type: Boolean,
      default: true
    },
    imgURL: {
      type: String,
      default: "https://source.unsplash.com/random/400x450"
    },
    imgAlt: {
      type: String,
      required: true
    },
    colorway: {
      type: String,
      default: "grey"
    }
  },
  methods: {
    submitHandler() {
      console.log("Submit the form!");
    }
  }
};
</script>
