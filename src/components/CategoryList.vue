<template>
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsForCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useForumsStore from '@/stores/ForumsStore';
import ForumList from '@/components/ForumList.vue';

defineProps({
  categories: {
    type: Array,
    required: true,
  },
});

const { forums } = storeToRefs(useForumsStore());

const getForumsForCategory = (category) => forums.value
  .filter((forum) => forum.categoryId === category.id);
</script>
