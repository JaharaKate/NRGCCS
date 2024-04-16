import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/LoginPage.vue';
import LandingPage from '@/components/LandingPage.vue';
import AdminPage0 from '@/components/AdminPage0.vue';
import AdminPage1 from '@/components/AdminPage1.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/login', component: LoginPage },
  { path: '/admin0', component: AdminPage0 },
  { path: '/admin1', component: AdminPage1},

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
