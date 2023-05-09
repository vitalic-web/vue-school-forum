import { defineStore } from 'pinia';
import sourceData from '@/data.json';

const useForumsStore = defineStore('ForumsStore', {
  state: () => ({
    forums: sourceData.forums,
  }),
  actions: {
  },
});

export default useForumsStore;
