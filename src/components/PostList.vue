<template>
  <div class="post-list">
    <div
      class="post"
      v-for="post in posts"
      :key="post.id"
    >
      <div class="user-info">
        <a href="#" class="user-name">{{ userById(post.userId).name }}</a>
        <a href="#">
          <img class="avatar-large" :src="userById(post.userId).avatar" alt="">
        </a>
        <p class="desktop-only text-small">107 posts</p>
      </div>
      <div class="post-content">
        <div>
          <p>
            {{ post.text }}
          </p>
        </div>
      </div>
      <div class="post-date text-faded">
        {{ post.publishedAt }}
      </div>
    </div>
  </div>
</template>

<script setup>
import sourceData from '@/data.json';
import { ref } from 'vue';

defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

const users = ref(sourceData.users);
const userById = (userId) => users.value.find((u) => u.id === userId);
</script>

<style scoped>
</style>
