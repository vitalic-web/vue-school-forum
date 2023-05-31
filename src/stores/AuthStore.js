import { defineStore } from 'pinia';
import sourceData from '@/data.json';

const useAuthStore = defineStore('AuthStore', {
  state: () => ({
    ...sourceData,
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3',
  }),
  getters: {
    authUser: (state) => state.users.find((user) => user.id === state.authId),
  },
  actions: {
  },
});

export default useAuthStore;
