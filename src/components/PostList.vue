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
        <AppDate :timestamp="post.publishedAt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useUsersStore from '@/stores/UsersStore';

defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

const { users } = storeToRefs(useUsersStore());
const userById = (userId) => users.value.find((u) => u.id === userId);
</script>

<style scoped>
</style>
