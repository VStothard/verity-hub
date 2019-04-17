<template>
  <div>
    <PreviewTile v-for="(course, i) in courses" :key="i" :content="course"></PreviewTile>
  </div>
</template>

<script>
import contentful from "~/plugins/contentful.js";
export default {
  data() {
    return {
      courses: []
    };
  },
  async mounted() {
    // Todo: move to asyncData
    // get courses
    const courses = await this.$store.dispatch("courses/getAllCourses");
    this.courses = this.$store.getters["courses/getAllCourses"];
    console.log(courses, 3000);
  }
};
</script>