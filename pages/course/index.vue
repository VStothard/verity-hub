<template>
  <div>
    <template v-if="courses.length > 0">
      <PreviewTile
        v-for="(course, i) in courses"
        :key="i"
        :content="course"
        slug-name="course-slug"
      ></PreviewTile>
    </template>
    <template v-else>Fetching courses...</template>
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
  }
};
</script>