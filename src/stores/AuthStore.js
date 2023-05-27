import { defineStore } from 'pinia';
import sourceData from '@/data.json';

const useAuthStore = defineStore('AuthStore', {
  state: () => ({
    ...sourceData,
    authId: 'rpbB8C6ifrYmNDufMERWfQUoa202',
  }),
  getters: {
    authUser: (state) => state.users.find((user) => user.id === state.authId),
  },
  actions: {
  },
});

export default useAuthStore;
