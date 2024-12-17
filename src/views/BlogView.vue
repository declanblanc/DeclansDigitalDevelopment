<script setup>
import Dec1724 from '@/components/blogs/Dec1724.vue'
</script>

<template>
  <div class="blog-container">
    <Dec1724 />
  </div>
</template>

<style scoped>
.blog-container {
  text-align: justify;
  text-justify: inter-cluster;
  border: solid rgb(120, 120, 120) 8px;
  border-radius: 8px;
  width: 80vw;
  padding: 20px 30px;
  margin: 2rem 0;
}

@media (min-width: 1024px) {
  .blog-container {
    width: 800px;
  }
}
</style>
