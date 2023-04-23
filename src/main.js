import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const forumApp = createApp(App);
forumApp.use(store);
forumApp.use(router);
forumApp.mount('#app');
