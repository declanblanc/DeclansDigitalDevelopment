<script setup>
import Dec1724 from '@/components/blogs/Dec1724.vue'
import Dec2624 from '@/components/blogs/Dec2624.vue'
import Jan0825 from '@/components/blogs/Jan0825.vue'
import BlogButtons from '@/components/blogs/BlogButtons.vue'
</script>

<template>
  <Jan0825 />
  <div class="blog-group">
    <Dec2624></Dec2624>
    <!-- <BlogButtons /> -->
  </div>
  <Dec1724 />
</template>

<style scoped>
.blog-group {
  padding: 0px;
}
</style>
