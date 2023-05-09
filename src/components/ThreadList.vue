<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <router-link :to="{ name: 'ThreadShow', params: { id: thread.id } }">
              {{ thread.title }}
            </router-link>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a>,
            <AppDate :timestamp="thread.publishedAt" />.
          </p>
        </div>
        <div class="activity">
          <p class="replies-count">
            {{ thread.posts.length }} replies
          </p>
          <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="">
          <div>
            <p class="text-xsmall">
              <a href="#">{{ userById(thread.userId).name }}</a>
            </p>
            <p class="text-xsmall text-faded">
              <AppDate :timestamp="thread.publishedAt" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import usePostsStore from '@/stores/PostsStore';
import useUsersStore from '@/stores/UsersStore';

defineProps({
  threads: {
    type: Array,
    required: true,
  },
});

const { posts } = storeToRefs(usePostsStore());
const { users } = storeToRefs(useUsersStore());

const postById = (postId) => posts.value.find((p) => p.id === postId);
const userById = (userId) => users.value.find((u) => u.id === userId);
</script>
