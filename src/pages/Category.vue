<template>
  <h1>{{ category.name }}</h1>
  <ForumList
    :title="category.name"
    :forums="getForumsForCategory(category)"
  />
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import useCategoriesStore from '@/stores/CategoriesStore';
import useForumsStore from '@/stores/ForumsStore';
import ForumList from '@/components/ForumList.vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const { categories } = storeToRefs(useCategoriesStore());
const { forums } = storeToRefs(useForumsStore());

const category = computed(() => categories.value.find((cat) => cat.id === props.id));

const getForumsForCategory = (categoryItem) => forums.value
  .filter((forum) => forum.categoryId === categoryItem.id);
</script>
