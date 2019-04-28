<template>
  <div>
    <VHeading heading="Courses" theme="discrete"/>
    <div v-if="!!courses.length" class="flex flex-wrap">
      <PreviewTile
        v-for="(course, i) in courses"
        :key="i"
        :content="course"
        :link-out="true"
        class="w-full md:w-1/2 pb-8 tile-margin hover-tile"
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