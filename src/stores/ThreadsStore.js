import { defineStore } from 'pinia';
import sourceData from '@/data.json';

const useThreadsStore = defineStore('ThreadsStore', {
  state: () => ({
    threads: sourceData.threads,
  }),
  actions: {
  },
});

export default useThreadsStore;
