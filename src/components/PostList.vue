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
      <div class="post-date text-faded" :title="humanFriendlyDate(post.publishedAt)">
        {{ diffForHumans(post.publishedAt) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import sourceData from '@/data.json';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

const users = ref(sourceData.users);
const userById = (userId) => users.value.find((u) => u.id === userId);

const diffForHumans = (timestamp) => dayjs.unix(timestamp).fromNow();
const humanFriendlyDate = (timestamp) => dayjs.unix(timestamp).format('llll');
</script>

<style scoped>
</style>
