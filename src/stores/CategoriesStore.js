import { defineStore } from 'pinia';
import sourceData from '@/data.json';

const useCategoriesStore = defineStore('CategoriesStore', {
  state: () => ({
    categories: sourceData.categories,
  }),
  actions: {
  },
});

export default useCategoriesStore;
