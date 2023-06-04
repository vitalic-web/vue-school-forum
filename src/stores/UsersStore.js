import { defineStore } from 'pinia';
import sourceData from '@/data.json';

const useUsersStore = defineStore('UsersStore', {
  state: () => ({
    users: sourceData.users,
  }),
  actions: {
    updateUser(user) {
      const { id: userId } = user;
      const userIndex = this.users.findIndex((userEl) => userEl.id === userId);
      this.users[userIndex] = user;
    },
  },
});

export default useUsersStore;
