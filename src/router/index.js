import { createRouter, createWebHistory } from 'vue-router'; // Vue 3 uchun
import HomePage from '../views/Home.vue';

const routes = [
    { path: '/', component: HomePage },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
