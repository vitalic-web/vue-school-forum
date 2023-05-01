<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <PostEditor @save="addPost" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import sourceData from '@/data.json';
import PostList from '@/components/PostList.vue';
import PostEditor from '@/components/PostEditor.vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const threads = ref(sourceData.threads);
const posts = ref(sourceData.posts);

// props.id also available under route.params.id
const thread = computed(() => threads.value.find((t) => t.id === props.id));
const threadPosts = computed(() => posts.value.filter((post) => post.threadId === props.id));

const addPost = (eventData) => {
  const post = {
    ...eventData.post,
    threadId: props.id,
  };
  posts.value.push(post);
  thread.value.posts.push(post.id);
};
</script>
