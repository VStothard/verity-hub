<template>
  <div>
    <template v-if="!!courses.length">
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
export default {
  async asyncData(context) {
    let courses = await context.store.dispatch("courses/getAllCourses")

    return {
        courses
    }
  }
};
</script>