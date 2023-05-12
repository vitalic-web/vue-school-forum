<template>
  <h1 class="push-top">Welcome to the Forum</h1>
  <CategoryList :categories="categories" />
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useCategoriesStore from '@/stores/CategoriesStore';
import CategoryList from '@/components/CategoryList.vue';

const { categories } = storeToRefs(useCategoriesStore());
</script>
