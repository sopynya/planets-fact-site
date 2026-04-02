import { createRouter, createWebHistory } from 'vue-router'
import Planet from '../components/Planet.vue'
const routes = [
    { path: '/', redirect: '/mercury' },
    {path: '/:planet', component: Planet}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router