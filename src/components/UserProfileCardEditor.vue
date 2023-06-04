<template>
  <div class="profile-card">
    <form @submit.prevent="save">
      <p class="text-center">
        <img
          :src="user.avatar"
          :alt="`${user.name} profile picture`"
          class="avatar-xlarge img-update"
        >
      </p>
      <div class="form-group">
        <input
          v-model="activeUser.username"
          type="text"
          placeholder="Username"
          class="form-input text-lead text-bold"
        >
      </div>
      <div class="form-group">
        <input
          v-model="activeUser.name"
          type="text"
          placeholder="Full Name"
          class="form-input text-lead"
        >
      </div>
      <div class="form-group">
        <label for="user_bio" style="width: 100%">
          Bio
          <textarea
            v-model="activeUser.bio"
            class="form-input"
            id="user_bio"
            placeholder="Write a few words about yourself."
          ></textarea>
        </label>
      </div>
      <div class="stats">
        <span>{{ user.postsCount }} posts</span>
        <span>{{ user.threadsCount }} threads</span>
      </div>
      <hr>
      <div class="form-group">
        <label class="form-label" for="user_website" style="width: 100%">
          Website
          <input
            v-model="activeUser.website"
            autocomplete="off"
            class="form-input"
            id="user_website"
          >
        </label>
      </div>
      <div class="form-group">
        <label class="form-label" for="user_email" style="width: 100%">
          Email
          <input
            v-model="activeUser.email"
            autocomplete="off"
            class="form-input"
            id="user_email"
          >
        </label>
      </div>
      <div class="form-group">
        <label class="form-label" for="user_location" style="width: 100%">
          Location
          <input
            v-model="activeUser.location"
            autocomplete="off"
            class="form-input"
            id="user_location"
          >
        </label>
      </div>
      <div class="btn-group space-between">
        <button class="btn-ghost">Cancel</button>
        <button type="submit" class="btn-blue">Save</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { toRefs, ref } from 'vue';
import useUsersStore from '@/stores/UsersStore';

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const { user } = toRefs(props);
const activeUser = ref({ ...user.value });

const { updateUser } = useUsersStore();
const save = () => {
  updateUser({ ...activeUser.value });
};
</script>
