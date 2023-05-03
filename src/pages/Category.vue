<template>
  <h1>{{ category.name }}</h1>
  <ForumList
    :title="category.name"
    :forums="getForumsForCategory(category)"
  />
</template>

<script setup>
import { computed } from 'vue';
import sourceData from '@/data.json';
import ForumList from '@/components/ForumList.vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const category = computed(() => sourceData.categories.find((cat) => cat.id === props.id));

const getForumsForCategory = (categoryItem) => sourceData.forums
  .filter((forum) => forum.categoryId === categoryItem.id);
</script>
