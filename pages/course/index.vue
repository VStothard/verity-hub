<template>
  <div>
    <h2 class="text-base text-grey-500 font-semibold uppercase mb-6 mt-4 text-left">Web development courses</h2>
    <div v-if="!!courses.length" class="flex flex-wrap">
      <PreviewTile
        v-for="(course, i) in courses"
        :key="i"
        :content="course"
        slug-name="course-slug"
        class="w-100 md:w-1/2 pb-8 tile-margin hover-tile"
      ></PreviewTile>
    </div>
    <div v-else>fetching courses...</div>
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