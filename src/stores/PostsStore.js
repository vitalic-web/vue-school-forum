import { defineStore } from 'pinia';
import sourceData from '@/data.json';
import useThreadsStore from '@/stores/ThreadsStore';

const usePostsStore = defineStore('PostsStore', {
  state: () => ({
    posts: sourceData.posts,
  }),
  actions: {
    createPost(post) {
      post.id = `ggqq${Math.random()}`;
      this.posts.push(post);

      const thread = useThreadsStore().threads
        .find((threadItem) => threadItem.id === post.threadId);
      thread.posts.push(post.id);
    },
  },
});

export default usePostsStore;
