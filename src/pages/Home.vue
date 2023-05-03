<template>
  <h1>Welcome to the Forum</h1>
  <ForumList :forums="forums" />
</template>

<script setup>
import { ref } from 'vue';
import sourceData from '@/data.json';
import ForumList from '@/components/ForumList.vue';

const forums = ref(sourceData.forums);
</script>
