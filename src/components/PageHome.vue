<template>
  <div>Hello from PageHome</div>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{ thread.title }}</h2>
    <div v-for="postId in thread.posts" :key="postId">
      <p>{{ userById(postById(postId).userId).name }}</p>
      <p>{{ postById(postId).text }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import sourceData from '@/data.json';

const threads = ref(sourceData.threads);
const posts = ref(sourceData.posts);
const users = ref(sourceData.users);

const postById = (postId) => posts.value.find((p) => p.id === postId);
const userById = (userId) => users.value.find((u) => u.id === userId);
</script>

<style scoped>

</style>
