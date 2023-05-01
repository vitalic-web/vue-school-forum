<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <textarea v-model="newPostText" name="" id="" cols="30" rows="10" class="form-input"/>
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit post</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import sourceData from '@/data.json';
import PostList from '@/components/PostList.vue';

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

const newPostText = ref('');

const addPost = () => {
  const postId = `gggg${Math.random()}`;
  const post = {
    id: postId,
    text: newPostText.value,
    publishedAt: Math.floor(Date.now() / 1000),
    threadId: props.id,
    userId: 'rpbB8C6ifrYmNDufMERWfQUoa202',
  };
  posts.value.push(post);
  thread.value.posts.push(postId);
  newPostText.value = '';
};
</script>
