import { defineStore } from 'pinia';
import sourceData from '@/data.json';

const useUsersStore = defineStore('UsersStore', {
  state: () => ({
    users: sourceData.users,
  }),
  actions: {
  },
});

export default useUsersStore;
