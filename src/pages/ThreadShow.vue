<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <PostEditor @save="addPost" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import useThreadsStore from '@/stores/ThreadsStore';
import usePostsStore from '@/stores/PostsStore';
import PostList from '@/components/PostList.vue';
import PostEditor from '@/components/PostEditor.vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const postsStore = usePostsStore();

const { threads } = storeToRefs(useThreadsStore());
const { posts } = storeToRefs(postsStore);

// props.id also available under route.params.id
const thread = computed(() => threads.value.find((t) => t.id === props.id));
const threadPosts = computed(() => posts.value.filter((post) => post.threadId === props.id));

const addPost = (eventData) => {
  const post = {
    ...eventData.post,
    threadId: props.id,
  };
  postsStore.createPost(post);
};
</script>
