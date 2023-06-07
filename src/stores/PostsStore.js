import { defineStore, storeToRefs } from 'pinia';
import sourceData from '@/data.json';
import useThreadsStore from '@/stores/ThreadsStore';
// TODO: fix it UserInfoStore
// eslint-disable-next-line import/no-cycle
import userInfoStore from '@/stores/UserInfoStore';

const usePostsStore = defineStore('PostsStore', {
  state: () => ({
    posts: sourceData.posts,
  }),
  actions: {
    createPost(post) {
      const { authId } = storeToRefs(userInfoStore());
      post.id = `ggqq${Math.random()}`;
      post.userId = authId.value;
      post.publishedAt = Math.floor(Date.now() / 1000);
      this.posts.push(post);

      const thread = useThreadsStore().threads
        .find((threadItem) => threadItem.id === post.threadId);
      thread.posts.push(post.id);
    },
  },
});

export default usePostsStore;
