<template>
  <h1>Welcome to the Forum</h1>
  <ThreadList :threads="threads" />
</template>

<script setup>
import { ref } from 'vue';
import sourceData from '@/data.json';
import ThreadList from '@/components/ThreadList.vue';

const threads = ref(sourceData.threads);
</script>

<style scoped>
</style>
