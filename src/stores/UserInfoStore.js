import { defineStore, storeToRefs } from 'pinia';
import useUsersStore from '@/stores/UsersStore';
// TODO: fix it authId in another store
// eslint-disable-next-line import/no-cycle
import usePostsStore from '@/stores/PostsStore';
import useThreadsStore from '@/stores/ThreadsStore';

const useUserInfoStore = defineStore('UserInfoStore', {
  state: () => ({
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3',
  }),
  getters: {
    authUser: (state) => {
      const { users } = storeToRefs(useUsersStore());
      const { posts } = storeToRefs(usePostsStore());
      const { threads } = storeToRefs(useThreadsStore());
      const user = users.value.find((userEl) => userEl.id === state.authId);
      if (!user) return null;
      return {
        ...user,
        // get to use authUser.posts instead of authUser.getPosts()
        get posts() {
          return posts.value.filter((post) => post.userId === user.id);
        },
        get postsCount() {
          return this.posts.length;
        },
        get threads() {
          return threads.value.filter((thread) => thread.userId === user.id);
        },
        get threadsCount() {
          return this.threads.length;
        },
      };
    },
  },
  actions: {
  },
});

export default useUserInfoStore;
