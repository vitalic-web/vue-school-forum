<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea v-model="text" name="" id="" cols="30" rows="10" class="form-input"/>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const text = ref('');
const emit = defineEmits(['save']);

const save = () => {
  const post = {
    text: text.value,
  };
  emit('save', { post });
  text.value = '';
};
</script>
