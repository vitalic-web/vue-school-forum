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
import sourceData from '@/data.json';
import ForumList from '@/components/ForumList.vue';

defineProps({
  categories: {
    type: Array,
    required: true,
  },
});

const getForumsForCategory = (category) => sourceData.forums
  .filter((forum) => forum.categoryId === category.id);
</script>
