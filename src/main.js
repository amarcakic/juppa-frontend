import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './views/LoginView.vue'
import DashboardView from './views/DashboardView.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/dashboard', component: DashboardView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
